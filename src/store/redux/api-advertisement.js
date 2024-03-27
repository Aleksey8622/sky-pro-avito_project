import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth } from "../slice/userSlice";
const API_URL = "http://localhost:3000";
const BASE_URL = "http://localhost:8090";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8090",
//   prepareHeaders: (headers, api) => {
//     const { user } = api.getState();
//     const { isAuth, token } = user;
//     if (isAuth) {
//       headers.append("Authorization", `Bearer ${token.access_token}`);
//     }
//     return headers;
//   },
// });
export const baseQueryWithReauth = async (args, api, options) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, api) => {
      const { user } = api.getState();
      if (user.isAuth) {
        const accessToken = user.token?.access_token;
        headers.append("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });
  const result = await baseQuery(args, api, options);
  if (result.data) {
    return result;
  }
  if (result?.error?.status === 401) {
    const { token } = api.getState().user;
    if (!token) {
      window.location.href = `${API_URL}/login`;
      return;
    }
    const { access_token, refresh_token } = token;
    console.log(access_token, refresh_token);
    if (!access_token || !refresh_token) {
      window.location.href = `${API_URL}/login`;
      return;
    }

    const resultAuth = await baseQuery(
      {
        url: `${BASE_URL}/auth/login`,
        method: "PUT",
        body: {
          access_token,
          refresh_token,
        },
      },
      api,
      options
    );
    if (resultAuth?.error) {
      window.location.href = `${API_URL}/login`;
      return;
    }
    api.dispatch(
      setAuth({
        isAuth: true,
        token: resultAuth.data,
      })
    );
    localStorage.setItem("token", JSON.stringify(resultAuth.data));
    const retryResult = await baseQuery(args, api, options);
    if (retryResult?.error?.status === 401) {
      window.location.href = `${API_URL}/login`;
      return;
    }
    return retryResult;
  } else {
    return result;
  }
};

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery: baseQueryWithReauth,

  endpoints: (builder) => ({
    getAdvertisements: builder.query({
      query: () => "/ads",
      providesTags: ["ads"],
    }),
    getUserAdvertisements: builder.query({
      query: ({ user_id }) => `/ads?user_id=${user_id}`,
    }),
    getCurrentUserAds: builder.query({
      query: () => "/ads/me",
      providesTags: ["ads"],
    }),
    getCurrentUser: builder.query({
      query: () => "/user",
    }),
    getAdId: builder.query({
      query: ({ id }) => `/ads/${id}`,
      providesTags: (result) =>
        result ? [{ type: "ad", id: result.id }] : ["ad"],
    }),
    getAdReviews: builder.query({
      query: ({ id }) => `/ads/${id}/comments`,
    }),
    postAdReviews: builder.mutation({
      query: ({ id, text }) => ({
        url: `/ads/${id}/comments`,
        method: "POST",
        body: {
          text,
        },
      }),
    }),
    createAdText: builder.mutation({
      query: ({ title, description, price }) => ({
        url: "/adstext",
        method: "POST",
        body: {
          title,
          description,
          price,
        },
      }),
    }),
    createAd: builder.mutation({
      query: ({ title, description, price, images }) => ({
        url: `/ads?title=${title}&description=${description}&price=${price}`,
        method: "POST",
        body: images,
      }),
      invalidatesTags: ["ads"],
    }),
    addImg: builder.mutation({
      query: ({ id, image }) => ({
        url: `/ads/${id}/image`,
        method: "POST",
        body: image,
      }),
      invalidatesTags: (result) =>
        result ? [{ type: "ad", id: result.id }] : ["ad"],
    }),
    editAd: builder.mutation({
      query: ({ id, title, description, price }) => ({
        url: `/ads/${id}`,
        method: "PATCH",
        body: {
          title,
          description,
          price,
        },
      }),
      invalidatesTags: (result) =>
        result ? [{ type: "ad", id: result.id }] : ["ad"],
    }),
    deleteAd: builder.mutation({
      query: ({ id }) => ({
        url: `/ads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ads"],
    }),
    deleteImg: builder.mutation({
      query: ({ id, file_url }) => ({
        url: `/ads/${id}/image?file_url=${file_url}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) =>
        result ? [{ type: "ad", id: result.id }] : ["ad"],
    }),
  }),
});

export const {
  useDeleteAdMutation,
  useGetAdvertisementsQuery,
  useCreateAdTextMutation,
  useGetCurrentUserAdsQuery,
  useCreateAdMutation,
  useGetAdIdQuery,
  useAddImgMutation,
  useEditAdMutation,
  useDeleteImgMutation,
  useGetUserAdvertisementsQuery,
  useGetCurrentUserQuery,
  useGetAdReviewsQuery,
  usePostAdReviewsMutation,
} = advertisementApi;

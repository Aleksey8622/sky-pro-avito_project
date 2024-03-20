import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
  prepareHeaders: (headers, api) => {
    const { user } = api.getState();
    const { isAuth, token } = user;
    if (isAuth) {
      headers.append("Authorization", `Bearer ${token.access_token}`);
    }
    return headers;
  },
});

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery,
  endpoints: (builder) => ({
    getAdvertisements: builder.query({
      query: () => "/ads",
    }),
    getCurrentUserAds: builder.query({
      query: () => "/ads/me",
    }),
    getCurrentUserAdsId: builder.query({
      query: ({ id }) => `/ads/${id}`,
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
    }),
    addImg: builder.mutation({
      query: ({ id, image }) => ({
        url: `/ads/${id}/image`,
        method: "POST",
        body: image,
      }),
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
    }),
    deleteAd: builder.mutation({
      query: ({ id }) => ({
        url: `/ads/${id}`,
        method: "DELETE",
      }),
    }),
    deleteImg: builder.mutation({
      query: ({ id, file_url }) => ({
        url: `/ads/${id}/image?file_url=${file_url}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAdvertisementsQuery, useCreateAdTextMutation } =
  advertisementApi;

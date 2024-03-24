import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth } from "../slice/userSlice";
const API_URL = "http://localhost:8090";
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
    baseUrl: API_URL,
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
      window.location.href = `${API_URL}/profile`;
      return;
    }

    const resultAuth = await baseQuery(
      {
        url: `${API_URL}/auth/login`,
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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
    }),
    signUp: builder.mutation({
      query: ({
        password,
        email,
        role = "user",
        name,
        surname,
        phone,
        city,
      }) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          password,
          email,
          role,
          name,
          surname,
          phone,
          city,
        },
      }),
    }),
    signIn: builder.mutation({
      query: ({ password, email }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          password,
          email,
        },
      }),
    }),
  }),
});

export const { useLazyGetUserQuery, useSignInMutation, useSignUpMutation } =
  userApi;

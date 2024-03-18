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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
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

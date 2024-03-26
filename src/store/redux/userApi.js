import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {resetAuth, setAuth } from "../slice/userSlice";
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
  if (result?.meta?.response?.status !== 401) {
    return result;
  }
  // if (result?.error?.status === 401) {
  //   const { token } = api.getState().user;
  //   if (!token) {
  //     window.location.href = `${API_URL}/login`;
  //     return;
  //   }
  //   const { access_token, refresh_token } = token;
  //   console.log(access_token, refresh_token);
  //   if (!access_token || !refresh_token) {
  //     window.location.href = `${API_URL}/login`;
  //     return;
  //   }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.dispatch(resetAuth());
    window.location.href = `${API_URL}/login`;
  };

  try {
    const { token } = api.getState().user;
    if (!token) {
      logout();
      return;
    }

    const { access_token, refresh_token } = token;

    if (!access_token || !refresh_token) {
      logout();
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
      logout()
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
      logout()
      return;
    }
    console.log(retryResult);
    return retryResult;
  } catch (err) {
    return err;
  }

};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["user"]
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
      transformErrorResponse: (error) => {
        if (error.status === 400) {
          return "Такой пользователь уже существует";
        }
        if (error.status === 422) {
          if (error.data.detail instanceof Array) {
            return error.data.detail[0].msg;
          }
        }
        console.log(error);
        return error.error;
      },
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
      transformErrorResponse: (error) => {
        if (error.status === 401) {
          return error.data.detail;
        }
        if (error.status === 422) {
          if (error.data.detail instanceof Array) {
            return error.data.detail[0].msg;
          }
        }
        console.log(error);
        return error.error;
      },
    }),
    updateUserInfo: builder.mutation({
      query: ({ name, surname, email, city, phone, role = "user" }) => ({
        url: "/user",
        method: "PATCH",
        body: {
          name,
          surname,
          email,
          city,
          phone,
          role,
        },
      }),
      invalidatesTags: ["user"]
    }),
    changeAvatar: builder.mutation({
      query: ({ file }) => ({
        url: "/user/avatar",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLazyGetUserQuery, useSignInMutation, useSignUpMutation, useUpdateUserInfoMutation,  useChangeAvatarMutation } =
  userApi;

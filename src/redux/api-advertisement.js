import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
});

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery,
  endpoints: (builder) => ({
    getAdvertisement: builder.query({
      query: () => "/ads",
    }),
  }),
});

export const { useGetAdvertisementQuery } = advertisementApi;

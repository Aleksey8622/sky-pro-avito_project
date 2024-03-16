import { configureStore } from "@reduxjs/toolkit";
import { advertisementApi } from "./redux/api-advertisement";
export const store = configureStore({
  reducer: {
    [advertisementApi.reducerPath]: advertisementApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(advertisementApi.middleware),
});

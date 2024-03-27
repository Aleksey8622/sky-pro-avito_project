import { configureStore } from "@reduxjs/toolkit";
import { advertisementApi } from "./redux/api-advertisement";
import { userApi } from "./redux/userApi";
import userSlice from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    [advertisementApi.reducerPath]: advertisementApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([
      advertisementApi.middleware,
      userApi.middleware,
    ]),
});

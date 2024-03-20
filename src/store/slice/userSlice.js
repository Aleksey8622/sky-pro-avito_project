import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: !!localStorage.getItem("user") ?? false,
  token: JSON.parse(localStorage.getItem("token")) ?? null,
  user: JSON.parse(localStorage.getItem("user")) ?? null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { isAuth, token } = action.payload;
      state.isAuth = isAuth;
      state.token = token;
    },
    resetAuth: (state) => {
      state.isAuth = false;
      state.token = { access_token: null, refresh_token: null };
      state.user = null;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { resetAuth, setAuth, setUserData } = userSlice.actions;
export default userSlice.reducer;

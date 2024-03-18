import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
  token: { access_token: null, refresh_token: null },
  user: null,
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
    },
  },
});
export const { resetAuth, setAuth } = userSlice.actions;
export default userSlice.reducer;

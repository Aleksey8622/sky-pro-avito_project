import { createSlice } from "@reduxjs/toolkit";
const chechLSParse = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const initialState = {
  isAuth: !!chechLSParse("token"),
  token: chechLSParse("token"),
  user: chechLSParse("user"),
  searchAds: { search: "" },
  filteredAds: [],
  AdsForFilter: [],
  isSearch: false,
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
    setSearch: (state, action) => {
      state.searchAds[action.payload.nameFilter] = action.payload.valueFilter;
      state.filteredAds = state.AdsForFilter;

      if (!state.searchAds.search) {
        state.isSearch = false;
        return;
      }

      state.isSearch = true;

      if (state.searchAds.search) {
        state.filteredAds = state.AdsForFilter.filter((track) => {
          return track.title
            .toLowerCase()
            .includes(state.searchAds.search.toLowerCase());
        });
      }
    },
    setSearchAds: (state, action) => {
      state.AdsForFilter = action.payload;
    },
  },
});
export const { resetAuth, setAuth, setUserData, setSearchAds, setSearch } =
  userSlice.actions;
export default userSlice.reducer;

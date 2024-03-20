import { createContext, useState } from "react";
import React from "react";
import { useLazyGetUserQuery } from "../store/redux/userApi";
import { useDispatch } from "react-redux";
import { resetAuth, setAuth, setUserData } from "../store/slice/userSlice";
const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext(initialState);
const checkAuth = () => {
  try {
    return !!localStorage.getItem("user");
  } catch (error) {
    return false;
  }
};
function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [getUser, { data }] = useLazyGetUserQuery();
  const [isAuth, setIsAuth] = useState(checkAuth());
  const login = (token) => {
    setIsAuth(true);
    localStorage.setItem("token", JSON.stringify(token));
    dispatch(setAuth({ isAuth: true, token }));
    getUser()
      .unwrap()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));

        dispatch(setUserData(data));
      });
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(resetAuth());
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

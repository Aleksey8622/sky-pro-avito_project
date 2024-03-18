import { createContext, useState } from "react";
import React from "react";
const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const login = (token) => {
    setIsAuth(true);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

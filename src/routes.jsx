import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleUser from "./components/ArticleUser/ArticleUser";
import AuthPage from "./components/Auth/AuthPage";
import MainPage from "./components/MainPage/MainPage";
import MyArticle from "./components/MyArticle/MyArticle";
import Profile from "./components/Profile/Profile";
import SellerProfile from "./components/SellerProfile/SellerProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/myarticle" element={<MyArticle />}></Route>
      <Route path="/articleuser" element={<ArticleUser />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/sellerprofile" element={<SellerProfile />}></Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />}></Route>
      <Route path="/register" element={<AuthPage />} />

    </Routes>
  );
}

export default AppRoutes;

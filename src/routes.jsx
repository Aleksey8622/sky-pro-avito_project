import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import PersonalAds from "./pages/PersonalAds/PersonalAds";
import UsersAnnouncement from "./pages/UsersAnnouncement/UsersAnnouncement";
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount";
import UsersAccount from "./pages/UsersAccount/UsersAccount";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/myarticle" element={<PersonalAds />}></Route>
      <Route path="/articleuser" element={<UsersAnnouncement />}></Route>
      <Route path="/profile" element={<PersonalAccount />}></Route>
      <Route path="/sellerprofile" element={<UsersAccount/>}></Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />}></Route>
      <Route path="/register" element={<AuthPage />} />
    </Routes>
  );
}

export default AppRoutes;

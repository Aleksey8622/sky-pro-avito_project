import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MyArticle from "./components/MyArticle/MyArticle";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/myarticle" element={<MyArticle />}></Route>
    </Routes>
  );
}

export default AppRoutes;

import React from "react";
import { Outlet } from "react-router-dom";
import ArticleUser from "../../components/ArticleUser/ArticleUser";
import BackButton from "../../components/BackButton/BackButton";

function UsersAnnouncement() {
  return (
    <>
      <BackButton />
      <ArticleUser />
      <Outlet />
    </>
  );
}

export default UsersAnnouncement;

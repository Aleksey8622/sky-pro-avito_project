import React from "react";
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader";
import ArticleUser from "../../components/ArticleUser/ArticleUser";
import BackButton from "../../components/BackButton/BackButton";

function UsersAnnouncement() {
  return (
    <>
      <ArticleHeader />
      <BackButton />
      <ArticleUser />
    </>
  );
}

export default UsersAnnouncement;

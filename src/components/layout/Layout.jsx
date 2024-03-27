import React from "react";
import ArticleHeader from "../ArticleHeader/ArticleHeader";

function Layout({ children }) {
  return (
    <>
      <ArticleHeader />
      {children}
    </>
  );
}

export default Layout;

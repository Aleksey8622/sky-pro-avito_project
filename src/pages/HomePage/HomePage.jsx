import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainPage from "../../components/MainPage/MainPage";
import MainSearch from "../../components/MainSearch/MainSearch";
import "../../components/MainPage/MainPage.css";
function HomePage() {
  return (
    <>
      <MainHeader />
      <MainSearch />
      <MainPage />
    </>
  );
}

export default HomePage;

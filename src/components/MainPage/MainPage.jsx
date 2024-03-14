import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import "./MainPage.css";
const MainPage = () => {
  return (
    <>
      <main className="main">
        <div className="main-page__container">
          <h2 className="main__h2">Объявления</h2>
          <div className="main__content">
            <div className="content__cards cards__main_page">
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
              <Advertisement />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MainPage;

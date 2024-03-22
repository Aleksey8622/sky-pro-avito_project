import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAdvertisementsQuery } from "../../store/redux/api-advertisement";

import Advertisement from "./Advertisement/Advertisement";
import "./MainPage.css";
const MainPage = () => {
  const { data } = useGetAdvertisementsQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <main className="main">
        <div className="main-page__container">
          <h2 className="main__h2">Объявления</h2>
          <div className="main__content">
            <div className="content__cards cards__main_page">
              {data?.map((item) => {
                return (
                  <Advertisement
                    key={item.id}
                    item={item}
                    created_on={item.created_on}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MainPage;

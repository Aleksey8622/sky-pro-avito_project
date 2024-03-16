import React, { useEffect } from "react";
import { useGetAdvertisementQuery } from "../../redux/api-advertisement";

import Advertisement from "./Advertisement/Advertisement";
import "./MainPage.css";
const MainPage = () => {
  const { data } = useGetAdvertisementQuery();
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
                  <Advertisement key={item.id} item={item} created_on={item.created_on}/>
                  // <div className="cards__item" key={item.id}>
                  //   <div className="cards__card card">
                  //     <div className="card__image">
                  //       <a href="" target="_blank">
                  //         {item.images.length > 0 ? (
                  //           <img
                  //             src={`http://localhost:8090/${item.images[0]?.url}`}
                  //             alt="picture"
                  //           />
                  //         ) : null}
                  //       </a>
                  //     </div>
                  //     <div className="card__content">
                  //       <a href="" target="_blank">
                  //         <h3 className="card__title">{item.title}</h3>
                  //       </a>
                  //       <p className="card__price">
                  //         {item.price}2&nbsp;200&nbsp;₽
                  //       </p>
                  //       <p className="card__place">Санкт Петербург</p>
                  //       <p className="card__date">Сегодня в&nbsp;10:45</p>
                  //     </div>
                  //   </div>
                  // </div>
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

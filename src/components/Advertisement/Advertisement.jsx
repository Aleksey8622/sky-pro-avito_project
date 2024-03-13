import React from "react";
import "../MainPage/MainPage.css"
function Advertisement() {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__image">
          <a href="" target="_blank">
            <img src="./img/pic5.jpg" alt="picture" />
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">
              Ракетка для большого тенниса Triumph Pro ST
            </h3>
          </a>
          <p className="card__price">2&nbsp;200&nbsp;₽</p>
          <p className="card__place">Санкт Петербург</p>
          <p className="card__date">Сегодня в&nbsp;10:45</p>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;

import React from "react";
import "../MainPage.css";
function Advertisement({ item, created_on }) {
  let moment = require("moment");
  require("moment/locale/ru");

  const formattedDuration = moment
    .utc(created_on)
    .format(`dddd,DD.MM.YYYY, h:mm:ss`)
    .split(",");

  return (
    <div className="cards__item" key={item.id}>
      <div className="cards__card card">
        <div className="card__image">
          <a href="" target="_blank">
            {item.images.length > 0 ? (
              <img
                src={`http://localhost:8090/${item.images[0]?.url}`}
                alt="picture"
              />
            ) : null}
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">{item.title}</h3>
          </a>
          <p className="card__price">{item.price} ₽</p>
          <p className="card__place">Санкт Петербург</p>
          <p className="card__date">{formattedDuration[0]}</p>
          <p className="card__date">
            {formattedDuration[1] + formattedDuration[2]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;

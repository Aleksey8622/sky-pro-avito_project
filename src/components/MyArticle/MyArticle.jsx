import React, { useState } from "react";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import BackButton from "../BackButton/BackButton";
import Atclsettings from "../modal/atclsettings/Atclsettings";
import "./MyArticle.css";
function MyArticle() {
  const [modalAtclsettings, setmodalAtclsettings] = useState(false);

  return (
    <>
      <main className="main">
        
        <div className="main__artic artic">
          <div className="artic__content article">
            <div className="article__left">
              <div className="article__fill-img">
                <div className="article__img">
                  <img src="" alt="" />
                </div>
                <div className="article__img-bar">
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="article__img-bar-mob img-bar-mob">
                  <div className="img-bar-mob__circle circle-active"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                </div>
              </div>
            </div>
            <div className="article__right">
              <div className="article__block">
                <h3 className="article__title title">
                  Ракетка для большого тенниса Triumph Pro STС Б/У
                </h3>
                <div className="article__info">
                  <p className="article__date">Сегодня в 10:45</p>
                  <p className="article__city">Санкт-Петербург</p>
                  <p className="article__link">4 отзыва</p>
                </div>
                <p className="article__price">2 200 ₽</p>
                <div className="article__btn-block">
                  <button
                    className="article__btn btn-redact btn-hov02"
                    onClick={() => setmodalAtclsettings(true)}
                  >
                    Редактировать
                  </button>
                  <Atclsettings
                    modalAtclsettings={modalAtclsettings}
                    setmodalAtclsettings={setmodalAtclsettings}
                  />
                  <button className="article__btn btn-remove btn-hov02">
                    Снять с публикации
                  </button>
                </div>

                <div className="article__author author">
                  <div className="author__img">
                    <img src="" alt="" />
                  </div>
                  <div className="author__cont">
                    <p className="author__name">Антон</p>
                    <p className="author__about">
                      Продает товары с&nbsp;мая 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__container">
          <h3 className="main__title title">Описание товара</h3>
          <div className="main__content_artic">
            <p className="main__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyArticle;

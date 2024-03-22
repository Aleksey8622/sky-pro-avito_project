import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetAdIdQuery } from "../../store/redux/api-advertisement";

import "./ArticleUser.css";
function ArticleUser() {
  const { id } = useParams();
  const { data } = useGetAdIdQuery({ id });
  const userData = useSelector((state) => state.user.user);
  const { pathname } = useLocation();
  return (
    <>
      <main className="main">
        <div className="main__artic artic">
          <div className="artic__content article">
            <div className="article__left">
              <div className="article__fill-img">
                <div className="article__img">
                  <img
                    src={
                      data?.images
                        ? `http://localhost:8090/${data.images[0]?.url}`
                        : "/img/no_foto.png"
                    }
                    alt=""
                  />
                </div>

                <div className="article__img-bar">
                  {data?.images
                    ? data.images.map((img) => (
                        <div className="article__img-bar-div">
                          <img
                            src={`http://localhost:8090/${img.url}`}
                            alt=""
                          />
                        </div>
                      ))
                    : "Фотографии нет"}
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
                <h3 className="article__title title">{data?.title}</h3>
                <div className="article__info">
                  <p className="article__date">{data?.created_on}</p>
                  <p className="article__city">{data?.user.city}</p>
                  <p className="article__link">23 отзыва</p>
                </div>
                <p className="article__price">{data?.price}</p>
                <button className="article__btn btn-hov02">
                  Показать&nbsp;телефон
                  <span>{data?.user.phone}</span>
                </button>
                {data?.user_id === userData?.id && (
                  <Link
                    className="article__btn btn-hov02"
                    to={`${pathname}/edit`}
                  >
                    <span>Редактировать</span>
                  </Link>
                )}
                <div className="article__author author">
                  <div className="author__img">
                    <img src="" alt="" />
                  </div>
                  <div className="author__cont">
                    <Link to="/sellerprofile">
                      <p className="author__name">{data?.user.name}</p>
                    </Link>
                    <p className="author__about">
                      Продает товары с {data?.user.sells_from}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__container">
          <h3 className="main__title title">Описание товара</h3>
          <div className="main__content">
            <p className="main__text">{data?.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ArticleUser;

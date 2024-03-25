import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useGetAdIdQuery,
  useGetAdReviewsQuery,

} from "../../store/redux/api-advertisement";

import "./ArticleUser.css";
function ArticleUser() {
  const { id } = useParams();
  
  const { data: comments } = useGetAdReviewsQuery({ id });
  const { data } = useGetAdIdQuery({ id });
  const userData = useSelector((state) => state.user.user);
  const { pathname } = useLocation();
  console.log(userData);
  console.log(data);
  const timeSale = moment.utc(data?.user.sells_from).format(` DD.MM.YYYY`);
  function pluralizeReviews(numReviews) {
    if (numReviews % 100 >= 11 && numReviews % 100 <= 19) {
      return "отзывов";
    }

    switch (numReviews % 10) {
      case 1:
        return "отзыв";
      case 2:
      case 3:
      case 4:
        return "отзыва";
      default:
        return "отзывов";
    }
  }
  const formattedDuration = moment
    .utc(data?.created_on)
    .format(` DD.MM.YYYY г., в h:mm`)
    .split(",");
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
                  <p className="article__date">
                    Опубликованно:{formattedDuration}
                  </p>
                  <p className="article__city">{data?.user.city}</p>
                  <Link to={`${pathname}/reviews`}>
                    <p className="article__link">
                      {comments?.length} {pluralizeReviews(comments?.length)}
                    </p>
                  </Link>
                </div>
                <p className="article__price">{data?.price} ₽</p>
                <button className="article__btn-user btn-hov02">
                  Показать&nbsp;телефон
                  <span>{data?.user.phone}</span>
                </button>
                {data?.user_id === userData?.id && (
                  <Link
                    className="article__btn-user btn-hov02"
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
                    <Link
                      to={
                        data?.user_id === userData?.id
                          ? "/profile"
                          : `/sellerprofile/${data?.user.id}`
                      }
                    >
                      <p className="author__name">{data?.user.name}</p>
                    </Link>
                    <p className="author__about">
                      Продает товары с {timeSale} г.
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

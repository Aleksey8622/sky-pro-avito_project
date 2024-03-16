import React from "react";
import { Link } from "react-router-dom";
import Advertisement from "../MainPage/Advertisement/Advertisement";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import BackButton from "../BackButton/BackButton";
import "./SellerProfile.css";
function SellerProfile() {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <h2 className="main__h2">Профиль продавца</h2>
            <div className="main__profile-sell profile-sell">
              <div className="profile-sell__content">
                <div className="profile-sell__seller seller">
                  <div className="seller__left">
                    <div className="seller__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="seller__right">
                    <h3 className="seller__title">Кирилл Матвеев</h3>
                    <p className="seller__city">Санкт-Петербург</p>
                    <p className="seller__inf">Продает товары с августа 2021</p>

                    <div className="seller__img-mob-block">
                      <div className="seller__img-mob">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                    </div>

                    <button className="seller__btn btn-hov02">
                      Показать&nbsp;телефон
                      <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title">Товары продавца</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards__seller_profile">
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
              <Advertisement />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SellerProfile;

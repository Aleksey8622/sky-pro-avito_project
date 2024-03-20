import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

import "../MyArticle/MyArticle.css";
function ArticleHeader() {
  const location = useLocation();
  const { isAuth } = useAuth();
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo logo-mob">
          <a className="logo-mob__link" href="" target="_blank">
            <img className="logo-mob__img" src="img/logo-mob.png" alt="logo" />
          </a>
        </div>
        {isAuth ? (
          <>
            <Link
              to="/add"
              state={{ background: location }}
              className="header__btn-putAd btn-hov01"
            >
              Разместить объявление
            </Link>
            <Link className="header__btn-main-enter btn-hov01" to="/profile">
              Личный кабинет
            </Link>
          </>
        ) : (
          <Link to="/login" className="header__btn-main-enter btn-hov01">
            Вход в личный кабинет
          </Link>
        )}
      </nav>
    </header>
  );
}

export default ArticleHeader;

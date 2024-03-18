import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import "../MyArticle/MyArticle.css";
function ArticleHeader() {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo logo-mob">
          <a className="logo-mob__link" href="" target="_blank">
            <img className="logo-mob__img" src="img/logo-mob.png" alt="logo" />
          </a>
        </div>
        <Link
          to="/add"
          state={{ background: location }}
          className="header__btn-putAd btn-hov01"
        >
          Разместить объявление
        </Link>
        <Link to="/profile">
          <button className="header__btn-lk btn-hov01" id="btnlk">
            Личный кабинет
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default ArticleHeader;

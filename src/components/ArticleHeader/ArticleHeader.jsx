import React, { useState } from "react";
import Addnewat from "../modal/addnewat/Addnewat";

import "../MyArticle/MyArticle.css";
function ArticleHeader() {
  const [modalEdit, setModalEdit] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo logo-mob">
          <a className="logo-mob__link" href="" target="_blank">
            <img className="logo-mob__img" src="img/logo-mob.png" alt="logo" />
          </a>
        </div>
        <button
          className="header__btn-putAd btn-hov01"
          id="btputAd"
          onClick={() => setModalEdit(true)}
        >
          Разместить объявление
        </button>
        <Addnewat modalEdit={modalEdit} setModalEdit={setModalEdit} />
        <button className="header__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </button>
      </nav>
    </header>
  );
}

export default ArticleHeader;

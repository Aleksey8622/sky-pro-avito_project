import React from "react";
import { Link } from "react-router-dom";
import "../MainPage/MainPage.css";
function MainHeader() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/login">
          <button
            className="header__btn-main-enter btn-hov01"
            id="btnMainEnter"
          >
            Вход в личный кабинет
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;

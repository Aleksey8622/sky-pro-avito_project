import React from "react";
import { Link } from "react-router-dom";
import "../SellerProfile/SellerProfile.css"
function BackButton() {
  return (
    <div className="main__menu menu">
      <a className="menu__logo-link" href="" target="_blank">
        <img className="menu__logo-img" src="img/logo.png" alt="logo" />
      </a>
      <form className="menu__form" action="#">
        <Link to="/">
          <button className="menu__btn btn-hov02" id="btnGoBack">
            Вернуться на&nbsp;главную
          </button>
        </Link>
      </form>
    </div>
  );
}

export default BackButton;

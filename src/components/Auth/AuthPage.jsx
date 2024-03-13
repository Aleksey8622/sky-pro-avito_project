import React from "react";
import { Link } from "react-router-dom";
import "./AuthPageStyle.css";
function AuthPage({ isLoginMode = false }) {
  return (
    <>
      {isLoginMode ? (
        <div className="wrapper">
          <div className="container-enter">
            <div className="modal__block">
              <form className="modal__form-login" id="formLogIn" action="#">
                <div className="modal__logo">
                  <Link to="/">
                    <img src="../img/logo_modal.png" alt="logo" />
                  </Link>
                </div>
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="email"
                />
                <input
                  className="modal__input password"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <button className="modal__btn-enter" id="btnEnter">
                  <a href="../index.html">Войти</a>
                </button>
                <Link to="/register">
                  <button className="modal__btn-signup" id="btnSignUp">
                    Зарегистрироваться
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="container-signup">
            <div className="modal__block">
              <form
                className="modal__form-login modal__form-register "
                id="formLogUp"
                action="#"
              >
                <div className="modal__logo">
                  <Link to="/login">
                    <img src="../img/logo_modal.png" alt="logo" />
                  </Link>
                </div>
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="email"
                />
                <input
                  className="modal__input login"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <input
                  className="modal__input login"
                  type="password"
                  name="password"
                  id="passwordSecond"
                  placeholder="Повторите пароль"
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя (необязательно)"
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="first-last"
                  id="first-last"
                  placeholder="Фамилия (необязательно)"
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Город (необязательно)"
                />
                <button className="modal__btn-signup-ent" id="SignUpEnter">
                  Зарегистрироваться
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthPage;

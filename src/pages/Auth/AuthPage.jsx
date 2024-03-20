import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import {
  useSignInMutation,
  useSignUpMutation,
} from "../../store/redux/userApi";
import "./AuthPageStyle.css";
function AuthPage({ isLoginMode = false }) {
  const { login } = useAuth();
  const [signIn] = useSignInMutation();
  const [register] = useSignUpMutation();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    city: "",
    phone: "",
    surname: "",
    name: "",
    repeatPassword: "",
  });
  const onLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleLogin = async () => {
    if (!loginData.email.trim() || !loginData.password.trim()) {
      alert("заполните поля");
      return;
    }
    signIn({ password: loginData.password, email: loginData.email })
      .unwrap()
      .then((data) => {
        login(data);
        navigate("/");
      })
      .catch((error) => {
        alert(error.error);
      });
  };

  const handleRegister = async () => {
    if (
      !registerData.email.trim() ||
      !registerData.password.trim() ||
      !registerData.name.trim() ||
      !registerData.repeatPassword.trim()
    ) {
      alert("заполните поля");
      return;
    }

    if (registerData.password !== registerData.repeatPassword) {
      alert("пароль");
      return;
    }
    register({
      email: registerData.email,
      password: registerData.password,
      city: registerData.city,
      phone: registerData.phone,
      surname: registerData.surname,
      name: registerData.name,
    })
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.error);
      });
  };
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
                  value={loginData.emai}
                  onChange={onLoginChange}
                  className="modal__input login"
                  type="text"
                  name="email"
                  id="formlogin"
                  placeholder="email"
                />
                <input
                  value={loginData.password}
                  onChange={onLoginChange}
                  className="modal__input password"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <button
                  type="button"
                  className="modal__btn-enter"
                  id="btnEnter"
                  onClick={handleLogin}
                >
                  Войти
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
                  value={registerData.email}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="text"
                  name="email"
                  id="loginReg"
                  placeholder="email"
                />
                <input
                  value={registerData.password}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <input
                  value={registerData.repeatPassword}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="password"
                  name="repeatPassword"
                  id="passwordSecond"
                  placeholder="Повторите пароль"
                />
                <input
                  value={registerData.name}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя "
                />
                <input
                  value={registerData.surname}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="text"
                  name="surname"
                  id="first-last"
                  placeholder="Фамилия (необязательно)"
                />
                <input
                  value={registerData.city}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Город (необязательно)"
                />
                <input
                  value={registerData.phone}
                  onChange={onRegisterData}
                  className="modal__input login"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Телефон (необязательно)"
                />
                <button
                  type="button"
                  className="modal__btn-signup-ent"
                  id="SignUpEnter"
                  onClick={handleRegister}
                >
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

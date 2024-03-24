import React, { useEffect, useState } from "react";
import {
  useGetCurrentUserAdsQuery,
  useGetCurrentUserQuery,
} from "../../store/redux/api-advertisement";
import Advertisement from "../MainPage/Advertisement/Advertisement";
import "./Profile.css";
function Profile() {
  const { data } = useGetCurrentUserAdsQuery();
  const { data: user } = useGetCurrentUserQuery();
  useEffect(() => {
    console.log(data);
    console.log(user)
  }, [data]);
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <h2 className="main__h2">Здравствуйте, {user?.name}!</h2>
            <div className="main__profile profile">
              <div className="profile__content">
                <h3 className="profile__title title">Настройки профиля</h3>
                <div className="profile__settings settings">
                  <div className="settings__left">
                    <div className="settings__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>
                    <a
                      className="settings__change-photo"
                      href=""
                      target="_self"
                    >
                      Заменить
                    </a>
                  </div>
                  <div className="settings__right">
                    <form className="settings__form" action="#">
                      <div className="settings__div">
                        <label htmlFor="fname">Имя</label>
                        <input
                          className="settings__f-name"
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value={user?.name}
                          placeholder="Имя"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="lname">Фамилия</label>
                        <input
                          className="settings__l-name"
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value={user?.surname}
                          placeholder="Фамилия"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="city">Город</label>
                        <input
                          className="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value={user?.city}
                          placeholder="Город"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="phone">Телефон</label>
                        <input
                          className="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value={user?.phone}
                          placeholder="Телефон"
                        />
                      </div>

                      <button
                        className="settings__btn btn-hov02"
                        id="settings-btn"
                      >
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title title">Мои товары</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards__profile">
              {data?.map((item) => {
                return (
                  <Advertisement
                    key={item.id}
                    item={item}
                    created_on={item.created_on}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;

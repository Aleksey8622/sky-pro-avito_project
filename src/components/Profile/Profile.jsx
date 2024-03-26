import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useGetCurrentUserAdsQuery } from "../../store/redux/api-advertisement";
import {
  useUpdateUserInfoMutation,
  useChangeAvatarMutation,
} from "../../store/redux/userApi";
import Advertisement from "../MainPage/Advertisement/Advertisement";
import "./Profile.css";
function Profile() {
  const { data, refetch } = useGetCurrentUserAdsQuery();
  // const { data: user } = useGetCurrentUserQuery();
  const { user } = useSelector((state) => state.user);
  const [updateUser] = useUpdateUserInfoMutation();
  const [changeAvatar] = useChangeAvatarMutation();
  const [avatar, setAvatar] = useState(null);
  const ref = useRef(null);
  const [userData, setUserData] = useState({
    city: "",
    phone: "",
    surname: "",
    name: "",
    avatar: "",
  });
  useEffect(() => {
    if (user) {
      setUserData({
        ...userData,
        city: user.city,
        phone: user.phone,
        surname: user.surname,
        name: user.name,
        avatar: user.avatar
          ? `http://localhost:8090/${user.avatar}`
          : "/img/no_foto.png",
      });
    }
    console.log(data);
    console.log(user);
  }, [user]);
  useEffect(() => {
    if (avatar) {
      const url = URL.createObjectURL(avatar);
      setUserData({ ...userData, avatar: url });
    }
  }, [avatar]);
  useEffect(() => {
    refetch();
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const onClickUpdate = () => {
    const { city, phone, surname, name } = userData;
    updateUser({ city, phone, surname, name })
      .unwrap()
      .then(() => {
        alert("Данные обновились");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleAvatar = () => {
    const data = new FormData();
    data.append("file", avatar);
    changeAvatar({ file: data })
      .unwrap()
      .then(() => {
        alert("добавленно");
      })
      .catch(() => {
        alert("Вы не поменяли фото");
      });
  };
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
                      <input
                        style={{ display: "none" }}
                        type="file"
                        ref={ref}
                        onChange={onAvatarChange}
                      />
                      <img
                        src={userData.avatar ?? "/img/no_foto.png"}
                        alt=""
                        onClick={() => ref.current?.click()}
                      />
                    </div>
                    <button
                      onClick={handleAvatar}
                      type="button"
                      className="settings__change-photo"
                    >
                      Заменить
                    </button>
                  </div>
                  <div className="settings__right">
                    <form className="settings__form" action="#">
                      <div className="settings__div">
                        <label htmlFor="fname">Имя</label>
                        <input
                          onChange={onChange}
                          className="settings__f-name"
                          id="settings-fname"
                          name="name"
                          type="text"
                          value={userData?.name}
                          placeholder="Имя"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="lname">Фамилия</label>
                        <input
                          onChange={onChange}
                          className="settings__l-name"
                          id="settings-lname"
                          name="surname"
                          type="text"
                          value={userData?.surname}
                          placeholder="Фамилия"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="city">Город</label>
                        <input
                          onChange={onChange}
                          className="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value={userData?.city}
                          placeholder="Город"
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="phone">Телефон</label>
                        <input
                          onChange={onChange}
                          className="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value={userData?.phone}
                          placeholder="Телефон"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={onClickUpdate}
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

import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slice/userSlice";
import "../MainPage/MainPage.css";
function MainSearch() {
  const dispatch = useDispatch();

  const onChandeSearchValue = (value) => {
    dispatch(setSearch({ nameFilter: "search", valueFilter: value }));
  };
  return (
    <div className="main__search search">
      <a className="search__logo-link" href="#" target="_blank">
        <img className="search__logo-img" src="./img/logo.png" alt="logo" />
      </a>
      <a className="search__logo-mob-link" href="#" target="_blank">
        <img
          className="search__logo-mob-img"
          src="img/logo-mob.png"
          alt="logo"
        />
      </a>
      <form className="search__form" action="#">
        <input
          className="search__text"
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          onChange={(event) =>
            onChandeSearchValue(event.target.value.toLocaleLowerCase())
          }
        />
        <input
          className="search__text-mob"
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
        <button className="search__btn btn-hov02">Найти</button>
      </form>
    </div>
  );
}

export default MainSearch;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAdvertisementsQuery } from "../../store/redux/api-advertisement";
import { setSearchAds } from "../../store/slice/userSlice";

import Advertisement from "./Advertisement/Advertisement";
import "./MainPage.css";
const MainPage = () => {
  const { data } = useGetAdvertisementsQuery();
  const dispatch = useDispatch();
  const searchDataRedux = useSelector((state) => state.user.filteredAds);
  const initialAds = useSelector((state) => state.user.AdsForFilter);
  const isSearch = useSelector((state) => state.user.isFiltred);
  let newSearchData = isSearch ? searchDataRedux : initialAds;
  useEffect(() => {
    dispatch(setSearchAds(data));
    console.log(data);
  }, [data]);
  return (
    <>
      <main className="main">
        <div className="main-page__container">
          <h2 className="main__h2">Объявления</h2>
          <div className="main__content">
            <div className="content__cards cards__main_page">
              {newSearchData?.map((item) => {
                return (
                  <Advertisement
                    key={item?.id}
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
};
export default MainPage;

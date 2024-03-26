import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SellerProfile.css";
import {
  useGetAdIdQuery,
  useGetAdvertisementsQuery,
  useGetCurrentUserAdsQuery,
  useGetUserAdvertisementsQuery,
} from "../../store/redux/api-advertisement";
import Advertisement from "../MainPage/Advertisement/Advertisement";
function SellerProfile({}) {
  const { id } = useParams();
  const { data: ads } = useGetUserAdvertisementsQuery({ user_id: id });
  const [isShowPhone, setIsShowPhone] = useState(false);
  // console.log(data);

  let moment = require("moment");
  require("moment/locale/ru");

  const formattedDuration = moment
    .utc(ads?.[0].user.sells_from)
    .format(`DD.MM.YYYY`);

  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <h2 className="main__h2">Профиль продавца</h2>
            <div className="main__profile-sell profile-sell">
              <div className="profile-sell__content">
                <div className="profile-sell__seller seller">
                  <div className="seller__left">
                    <div className="seller__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="seller__right">
                    <h3 className="seller__title">{ads?.[0].user.name}</h3>
                    <p className="seller__city">{ads?.[0].user.city}</p>
                    <p className="seller__inf">
                      <span>Продает товары с &nbsp;{formattedDuration} г.</span>
                    </p>

                    <div className="seller__img-mob-block">
                      <div className="seller__img-mob">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsShowPhone(!isShowPhone)}
                      className="seller__btn btn-hov02"
                    >
                      Показать&nbsp;телефон
                      <span>
                        {isShowPhone
                          ? ads?.[0].user.phone
                          : `${ads?.[0].user.phone.slice(0, 3)} XXX XX XX`}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title">Товары продавца</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards__seller_profile">
              {ads?.map((item) => {
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

export default SellerProfile;

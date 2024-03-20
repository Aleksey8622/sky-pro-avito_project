import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAdTextMutation } from "../../../store/redux/api-advertisement";
import LayoutModal from "../../layoutModal/LayoutModal";
import "./AddnewatStyle.css";
function Addnewat({ modalEdit, setModalEdit }) {
  const navigate = useNavigate();
  const [addTextAd] = useCreateAdTextMutation();
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setAdData({ ...adData, [name]: value });
  };
  const onClick = () => {
    if (!adData.title || !adData.description || !adData.price) {
      alert("Вы не заполнили поля");
      return;
    }
    if (!adData.images.length) {
      addTextAd({
        title: adData.title,
        description: adData.description,
        price: adData.price,
      })
        .unwrap()
        .then((value) => {
          alert("Отправленно");
          navigate(-1);
        });
    }
  };
  return (
    <LayoutModal>
      <form
        className="modal__form-newArt form-newArt"
        id="formNewArt"
        action="#"
      >
        <div className="form-newArt__block">
          <label htmlFor="name">Название</label>
          <input
            onChange={onChange}
            className="form-newArt__input"
            type="text"
            name="title"
            id="formName"
            placeholder="Введите название"
          />
        </div>
        <div className="form-newArt__block">
          <label htmlFor="text">Описание</label>
          <textarea
            onChange={onChange}
            className="form-newArt__area"
            name="description"
            id="formArea"
            cols="auto"
            rows="10"
            placeholder="Введите описание"
          ></textarea>
        </div>
        <div className="form-newArt__block">
          <p className="form-newArt__p">
            Фотографии товара<span>не более 5 фотографий</span>
          </p>
          <div className="form-newArt__bar-img">
            <div className="form-newArt__img">
              <img src="" alt="" />
              <div className="form-newArt__img-cover"></div>
            </div>
            <div className="form-newArt__img">
              <img src="" alt="" />
              <div className="form-newArt__img-cover"></div>
            </div>
            <div className="form-newArt__img">
              <div className="form-newArt__img-cover"></div>
              <img src="" alt="" />
            </div>
            <div className="form-newArt__img">
              <div className="form-newArt__img-cover"></div>
              <img src="" alt="" />
            </div>
            <div className="form-newArt__img">
              <div className="form-newArt__img-cover"></div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="form-newArt__block block-price">
          <label htmlFor="price">Цена</label>
          <input
            onChange={onChange}
            className="form-newArt__input-price"
            type="text"
            name="price"
            id="formName"
          />
          <div className="form-newArt__input-price-cover"></div>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="form-newArt__btn-pub btn-hov02"
          id="btnPublish"
        >
          Опубликовать
        </button>
      </form>
    </LayoutModal>
  );
}

export default Addnewat;

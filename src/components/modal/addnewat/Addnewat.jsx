import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateAdMutation,
  useCreateAdTextMutation,
  useGetAdvertisementsQuery,
} from "../../../store/redux/api-advertisement";
import ImgInput from "../../ImgInput/ImgInput";
import LayoutModal from "../../layoutModal/LayoutModal";
import "./AddnewatStyle.css";
function Addnewat({ modalEdit, setModalEdit }) {
  const [preview, setPreview] = useState(Array(5).fill(null));
  const navigate = useNavigate();
  const { refetch } = useGetAdvertisementsQuery();

  const [addImgAd] = useCreateAdMutation();
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
          refetch()
        });
    } else {
      const data = new FormData();
      for (const img of adData.images) {
        data.append("files", img.file);
      }
      addImgAd({
        title: adData.title,
        description: adData.description,
        price: adData.price,
        images: data,
      })
        .unwrap()
        .then((value) => {
          alert("Отправленно");
          navigate(-1);
          
        });
    }
  };
  const onImgChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (adData.images.length === 5) {
        alert("много картинок");
        return;
      }
      const index = adData.images.length;
      setAdData({
        ...adData,
        images: [...adData.images, { id: index, file }],
      });
      const url = URL.createObjectURL(file);
      const newPreview = [...preview];
      newPreview.splice(index, 1, { url, id: index });
      setPreview(newPreview);
    }
  };
  const onDelete = (e, id) => {
    e.stopPropagation();
    const newPreview = [...preview];
    const index = newPreview.findIndex((item) => item.id === id);
    newPreview.splice(index, 1);
    newPreview.push(null);
    setPreview(newPreview);
    const images = adData.images.filter((elem) => elem.id !== id);
    setAdData({ ...adData, images });
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
        <ImgInput
          preview={preview}
          onChange={onImgChange}
          onDelete={onDelete}
        />
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

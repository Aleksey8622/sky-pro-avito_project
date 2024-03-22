import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddImgMutation,
  useDeleteImgMutation,
  useEditAdMutation,
  useGetAdIdQuery,
} from "../../../store/redux/api-advertisement";
import ImgInput from "../../ImgInput/ImgInput";
import LayoutModal from "../../layoutModal/LayoutModal";
import "./AtclsettingsStyle.css";
function Atclsettings() {
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const [newImages, setNewImages] = useState([]);
  const [deleteImages, setDeleteImages] = useState([]);
  const [preview, setPreview] = useState(Array(5).fill(null));
  const { id } = useParams();
  const { data } = useGetAdIdQuery({ id });
  const [addImg] = useAddImgMutation();
  const [editAd] = useEditAdMutation();
  const [deleteImg] = useDeleteImgMutation();
  useEffect(() => {
    if (data) {
      setEditData({
        ...editData,
        title: data.title,
        description: data.description,
        price: data.price,
        images: data.images,
      });
      const newPreview = [...preview];
      data.images.forEach((img, index) => {
        newPreview.splice(index, 1, {
          id: img.id,
          url: `http://localhost:8090/${img.url}`,
        });
      });
      setPreview(newPreview);
    }
  }, [data]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const onClick = () => {
    if (!editData.title || !editData.description || !editData.price) {
      alert("Вы не заполнили поля");
      return;
    }
    editAd({
      title: editData.title,
      description: editData.description,
      print: editData.price,
      id,
    })
      .unwrap()
      .then(() => {
        if (deleteImages.length) {
          deleteImages.forEach((img) => deleteImg({ id, file_url: img }));
        }
        if (newImages.length) {
          newImages.forEach((img) => {
            const data = new FormData();
            data.append("file", img.file);
            addImg({ id, image: data });
          });
        }
      });
  };
  const onImgChange = (e) => {
    if (editData.images.length === 5) {
      alert("много фото");
      return;
    }
    const index = editData.images.length;
    const file = e.target.files?.[0];
    if (file) {
      const images = [...editData.images];
      const url = URL.createObjectURL(file);
      setEditData({ ...editData, images: [...images, { url, id: index }] });
      setNewImages([...newImages, { file, id: index }]);
      const newPreview = [...preview];
      newPreview.splice(index, 1, { url, id: index });
      setPreview(newPreview);
    }
  };
  const onDelete = (e, id) => {
    e.stopPropagation();
    const images = [...newImages];
    const index = images.findIndex((elem) => elem.id === id);
    if (index !== -1) {
      images.splice(index, 1);
      setNewImages(images);
    }
    const newPreview = [...preview];
    const previewIndex = newPreview.findIndex((elem) => elem.id === id);
    if (index !== -1) {
      newPreview.splice(index, 1);
      newPreview.push(null);
      setPreview(newPreview);
    }
    const img = editData.images.find((elem) => elem.id === id);
    setDeleteImages([...deleteImages, img.url]);
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
            value={editData.title}
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
            value={editData.description}
          >
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. */}
          </textarea>
        </div>
        <ImgInput
          onDelete={onDelete}
          preview={preview}
          onChange={onImgChange}
        />
        <div className="form-newArt__block block-price">
          <label htmlFor="price">Цена</label>
          <input
            onChange={onChange}
            className="form-newArt__input-price"
            type="text"
            name="price"
            id="formName"
            value={editData.price}
          />
          <div className="form-newArt__input-price-cover"></div>
        </div>

        <button
          type="button"
          className="form-newArt__btn-pub btn-hov02"
          id="btnPublish"
          onClick={onClick}
        >
          Сохранить
        </button>
      </form>
    </LayoutModal>
  );
}

export default Atclsettings;

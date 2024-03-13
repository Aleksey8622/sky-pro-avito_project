import React, { useState } from "react";
import "./AddnewatStyle.css"
function Addnewat({ modalEdit, setModalEdit }) {
  const [state, setState] = useState("");
  return (
    <>
      {modalEdit && (
        <div className="modal__block-addnewat">
          <div className="modal__content-addnewat" onClick={e=> e.stopPropagation()}>
            <h3 className="modal__title">Новое объявление</h3>
            <div className="modal__btn-close">
              <div className="modal__btn-close-line" onClick={()=> setModalEdit(false)}></div>
            </div>
            <form
              className="modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div className="form-newArt__block">
                <label htmlFor="name">Название</label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  className="form-newArt__input"
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </div>
              <div className="form-newArt__block">
                <label htmlFor="text">Описание</label>
                <textarea
                  onChange={(e) => setState(e.target.value)}
                  className="form-newArt__area"
                  name="text"
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
                  onChange={(e) => setState(e.target.value)}
                  className="form-newArt__input-price"
                  type="text"
                  name="price"
                  id="formName"
                />
                <div className="form-newArt__input-price-cover"></div>
              </div>

              <button
                className="form-newArt__btn-pub btn-hov02"
                id="btnPublish"
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Addnewat;

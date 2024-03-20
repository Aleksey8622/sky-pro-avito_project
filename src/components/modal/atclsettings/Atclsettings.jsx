import React from "react";
import LayoutModal from "../../layoutModal/LayoutModal";
import "./AtclsettingsStyle.css";
function Atclsettings() {
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
            className="form-newArt__input"
            type="text"
            name="name"
            id="formName"
            placeholder="Введите название"
            value="Ракетка для большого тенниса Triumph Pro STС Б/У"
          />
        </div>
        <div className="form-newArt__block">
          <label htmlFor="text">Описание</label>
          <textarea
            className="form-newArt__area"
            name="text"
            id="formArea"
            cols="auto"
            rows="10"
            placeholder="Введите описание"
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
            className="form-newArt__input-price"
            type="text"
            name="price"
            id="formName"
            value="2 200"
          />
          <div className="form-newArt__input-price-cover"></div>
        </div>

        <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">
          Сохранить
        </button>
      </form>
    </LayoutModal>
  );
}

export default Atclsettings;

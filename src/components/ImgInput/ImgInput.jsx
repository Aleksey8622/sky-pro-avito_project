import React, { useRef } from "react";

function ImgInput({ onChange, onDelete, preview }) {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.click();
  };
  const handleChange = (e) => {
    onChange(e);
    ref.current.value = "";
  };

  return (
    <div className="form-newArt__block">
      <p className="form-newArt__p">
        Фотографии товара<span>не более 5 фотографий</span>
      </p>
      <input
        ref={ref}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div className="form-newArt__bar-img" onClick={onClick}>
        {preview?.map((img) => {
          return (
            <div className="form-newArt__img">
              {img && (
                <>
                  <button
                    onClick={(e) => onDelete(e, img.id)}
                    type="button"
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "1",
                      background: "white",
                      border: "1px solid white",
                    }}
                  >
                    X
                  </button>
                  <img src={img.url} alt="" />
                </>
              )}
              <div className="form-newArt__img-cover"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImgInput;

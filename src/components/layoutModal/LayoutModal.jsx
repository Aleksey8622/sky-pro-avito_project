import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LayoutModal({ children, title }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const onClick = (e) => {
    if (!ref.current.contains(e.target)) {
      navigate(-1);
    }
  };
  return (
    <>
      <div className="modal__block-feedback" onClick={onClick}>
        <div
          ref={ref}
          className="modal__content-feedback"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="modal__title">{title}</h3>
          <div className="modal__btn-close" onClick={() => navigate(-1)}>
            <div className="modal__btn-close-line"></div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default LayoutModal;

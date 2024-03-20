import React from "react";

function LayoutModal({ children }) {
  return (
    <>
      <div className="modal__block-feedback">
        <div
          className="modal__content-feedback"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="modal__title">Отзывы о товаре</h3>
          {children}
        </div>
      </div>
    </>
  );
}

export default LayoutModal;

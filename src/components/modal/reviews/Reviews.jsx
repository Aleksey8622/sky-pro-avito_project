import React, { useState } from "react";
import "./reviewsStyle.css";
import LayoutModal from "../../layoutModal/LayoutModal";
import { useParams } from "react-router-dom";
import {
  useGetAdReviewsQuery,
  usePostAdReviewsMutation,
} from "../../../store/redux/api-advertisement";
function Reviews() {
  const { id } = useParams();
  const [postComment] = usePostAdReviewsMutation();
  const { data: comments, refetch } = useGetAdReviewsQuery({ id });
  const [comment, setComment] = useState("");
  const onClick = () => {
    if (!comment || !comment.trim()) {
      alert("поля пустые");
      return;
    }
    postComment({ text: comment, id })
      .unwrap()
      .then(() => {
        alert("Отправлен");
        refetch();
        setComment("");
      });
  };
  return (
    <LayoutModal>
      <div className="modal__scroll">
        <form
          className="modal__form-newArt form-newArt"
          id="formNewArt"
          action="#"
        >
          <div className="form-newArt__block">
            <label htmlFor="text">Добавить отзыв</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-newArt__area"
              name="text"
              id="formArea"
              cols="auto"
              rows="5"
              placeholder="Введите описание"
            ></textarea>
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

        <div className="modal__reviews reviews">
          {comments?.map((comment) => {
            return (
              <div className="reviews__review review">
                <div className="review__item">
                  <div className="review__left">
                    <div className="review__img">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="review__right">
                    <p className="review__name font-t">
                      {comment?.author.name} <span> {comment?.created_on}</span>
                    </p>
                    <h5 className="review__title font-t">Комментарий</h5>
                    <p className="review__text font-t">{comment?.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutModal>
  );
}

export default Reviews;

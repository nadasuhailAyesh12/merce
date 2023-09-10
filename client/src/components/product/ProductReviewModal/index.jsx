import React, { useState } from "react";
import { addProductReview } from "../../../actions/ReviewActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const SubmitReviewModal = ({ show, onClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    // Todo fix rating more than this
    setRating(value);
  };

  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    clearErrors(e.target.name);
    setValue("comment", e.target.value);
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("comment", data.comment);

    try {
      await dispatch(
        addProductReview(
          {
            comment: formData.get("comment"),
            user: user && user._id,
            name: user && user.name,
            rating,
          },
          id
        )
      );
      toast.success("Review submitted successfully");
      onClose();
    } catch (error) {
      toast.error(error);
    }
  });

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>submit your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form style={{ width: 450 }}>
          <label htmlFor="rating">Rating:</label>
          <div className="rating-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                onClick={() => handleRatingChange(star)}
                style={{ cursor: "pointer" }}
              >
                <FaStar size={30} color={star <= rating ? "orange" : "gray"} />
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  style={{ display: "none" }}
                  checked={star === rating}
                  onChange={() => {}}
                />
              </label>
            ))}
          </div>

          <div className="form-outline  my-3">
            <textarea
              {...register("comment", {
                required: "Comment required",
              })}
              placeholder="Enter your comment"
              onChange={handleInputChange}
              className={
                errors.comment
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="comment"
              id="comment"
            />
            {errors.comment && (
              <p className="text-danger">{errors.comment.message}</p>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubmitReviewModal;

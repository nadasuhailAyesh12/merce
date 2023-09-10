import React from "react";
import StarRating from "../product/starRating";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <div
        className=" w-50 shadow-sm p-3 mb-5 bg-white rounded"
        style={{ marginLeft: 20 }}
      >
        <h3>Other's Reviews:</h3>
        <hr />
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} class="review-card my-1">
              <StarRating rating={review.rating} />

              <span className="review_comment">by {review.name}</span>
              <p className="review_comment">{review.comment}</p>

              <hr />
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewsList;

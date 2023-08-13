import React from "react";
import "./style.css";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star checked"></i>);
    }

    if (halfStar) {
      stars.push(
        <i key={fullStars} className="fas fa-star-half-alt checked"></i>
      );
    }

    return stars;
  };

  return <div className="mb-10">{renderStars()}</div>;
};

export default StarRating;

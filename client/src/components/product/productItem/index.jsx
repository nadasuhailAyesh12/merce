import React from "react";
import { useDispatch } from "react-redux";

import "./style.css";
import StarRating from "../StarRating";
import { addToCart } from "../../../actions/cartActions";


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1"
    >
      <div className="card">
        <img className="card-img-top" src={product.image} />
        <div className="card-body">
          <h5>
            <b>{product.name}</b>
          </h5>
          <div className="d-flex flex-row my-2 ">
            <div className=" d-flex flex-column justify-content-lg-start mb-1000">
              <StarRating rating={product.rating} />
              <span>{product.price}/piece</span>
            </div>
            <div className="ml-auto"></div>
          </div>
          <button
            className="btn w-100 rounded my-2"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

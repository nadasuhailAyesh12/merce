import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import StarRating from "../starRating";
import { addToCart } from "../../../actions/cartActions";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, subTotal } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    try {
      dispatch(addToCart(product, cartItems, subTotal));
      toast.success("add to cart successfuly");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 d-flex justify-content-between">
      <div className="card" style={{ border: "none" }}>
        <img
          className="card-img-top me-5"
          src={product.images[0]?.url}
          onClick={() => navigate(`/products/${product._id}`)}
        />
        <div className="card-body">
          <h5>
            <Link to={`/products/${product._id}`}>
              {" "}
              <b>{product.name}</b>
            </Link>
          </h5>
          <div className="d-flex flex-row my-2 ">
            <div className=" d-flex flex-column justify-content-lg-start mb-1000">
              <StarRating rating={product.rating} />
              <span>{product.price}/piece</span>
            </div>
            <div className="ml-auto"></div>
          </div>
          <button
            className="btn w-100 rounded my-2 btn-danger"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

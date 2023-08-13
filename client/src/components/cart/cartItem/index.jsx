import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteFromCart, updateQuantity } from "../../../actions/cartActions";
import "./style.css";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(item));
        toast.success("item deleted sucessfuly");
      }
    });
  };

  const handleKeyDown = (e) => {
    // Prevent manual input by preventing all keys except arrow keys
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      e.preventDefault();
    }
  };

  return (
    <div className="product">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid mx-auto d-block image" src={item.image} />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-5 product-name">
                <div className="product-name">
                  <span className="name">{item.name}</span>
                  <div className="product-info">
                    <p className="value">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  className="form-control quantity-input"
                  onChange={(e) => {
                    dispatch(updateQuantity(item.id, e.target.value));
                  }}
                  onClick={(e) => {
                    dispatch(updateQuantity(item.id, e.target.value));
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="col-md-3 price">
                <span>{item.price}</span>
                <span
                  className="fa-sharp fa-solid fa-trash"
                  onClick={handleDelete}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

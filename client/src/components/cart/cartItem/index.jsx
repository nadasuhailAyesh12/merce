import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../../../actions/cartActions";
import "./style.css";
import { toast } from "react-toastify";
import DeleteAlert from "../../Common/deleteAlert";

const CartItem = ({ item }) => {
  const [stockHintVisible, setStockHintVisible] = useState(false);
  const [deleteAlertVisible,setDeleteAlertVisible]=useState(false)
  const { cartItems, subTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = () => {
      try {
          dispatch(deleteFromCart(item, cartItems, subTotal));
          toast.success("item deleted sucessfuly");
        } catch (error) {
          toast.error(error);
        }
      }
  
  const handleUpdateQuantity = (e) => {
    if (item.stock <= 10 || item.stock === 0) {
      setStockHintVisible(true);
      setTimeout(() => setStockHintVisible(false), 5000);
    } else {
      setStockHintVisible(false);
    }
    dispatch(updateQuantity(item.product, e.target.value, cartItems));
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
        <div className="col-md-4">
          <img className="img-fluid mx-auto d-block image" src={item.image} />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-4 product-name">
                <div className="product-name">
                  <span className="name">{item.name}</span>
                  <div className="product-info">
                    <p className="value">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max={item.stock}
                  value={item.quantity||1}
                  className="form-control quantity-input"
                  onChange={handleUpdateQuantity}
                  onClick={handleUpdateQuantity}
                  onKeyDown={handleKeyDown}
                />
                {stockHintVisible && (
                  <span className=" text-danger">
                    {" "}
                    {item.stock === 0
                      ? "out of stock"
                      : "product stock is less than 10"}
                  </span>
                )}
              </div>

              <div className="col-md-3 price">
                <span>{item.price}</span>
                <span
                  className="fa-sharp fa-solid fa-trash"
                  onClick={()=>setDeleteAlertVisible(true)}
                ></span>
                <DeleteAlert onClose={() => setDeleteAlertVisible(false)} isVisible={deleteAlertVisible}
                  onConfirm={handleDelete}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

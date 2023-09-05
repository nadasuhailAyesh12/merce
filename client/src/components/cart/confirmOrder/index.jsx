import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../checkoutSteps";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../Common/Navbar";
import { updateCartTotals } from "../../../actions/cartActions";
const ConfirmOrder = () => {
  const { address, city, country, postalCode, phoneNo } = useSelector(
    (state) => state.cart.shippingInfo
  );
  const {totalPrice,tax,shippingCost,subTotal}=useSelector(state=>state.cart)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch=useDispatch()

  const calculateTotals = () => {
    const subTotal=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
    const shippingCost = subTotal >= 1000 ? 0 : subTotal >= 450 ? 25 : 50;
    const tax = (0.05 * subTotal);
    const totalPrice = (tax + subTotal + shippingCost)
    dispatch(updateCartTotals({subTotal,shippingCost,tax,totalPrice}))
  }
  useEffect(() => {
   calculateTotals()
  },[subTotal,cartItems,shippingCost,tax,totalPrice])

  return (
    <>
      <Navbar />
      <CheckoutSteps shipping confirmOrder />

      <div className="row d-flex justify-content-between">
        <div className="col-8 col-lg-8 mt-3 order-confirm">
          <h4 className="mt-3 shipping">Shipping Info</h4>
          <p>
            <b>Name:</b> nada
          </p>
          <p>
            <b>Phone:</b> {phoneNo}
          </p>
          <p className="mb-4">
            <b>Address:</b> {`${address}, ${city}, ${postalCode}, ${country}`}
          </p>

          <hr />
          <h4 className="mt-4">Your Cart Items:</h4>

          {cartItems.map((item) => (
            <div className="cart-item my-3" key={item._id}>
              <div className="row">
                <div className="col-4 col-lg-2 image">
                  <img
                    src={item.image}
                    alt="item image"
                    height="60"
                    width="80"
                  />
                </div>

                <div className="col-5 col-lg-6">
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </div>

                <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                  <p>
                    {item.quantity} x ${item.price} ={" "}
                    <b>${(item.quantity * item.price).toFixed(2)}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-12 col-lg-4 mb-3">
          <div className="summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span className="detail">Subtotal</span>
              <span className="price">{subTotal}$</span>
            </div>
            <div className="summary-item">
              <span className="detail">tax</span>
              <span className="price">{tax}$</span>
              <div className="summary-item">
                <span className="detail">Shipping Cost</span>
                <span className="price">{shippingCost}$</span>
              </div>
              <div className="summary-item">
                <span className="detail">total</span>
                <span className="price">{totalPrice}$</span>
              </div>
              <hr />
            </div>
            <button
              className="btn w-100 rounded my-2 checkout_btn"
              onClick={() => navigate("/shipping")}
            >
              process payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;

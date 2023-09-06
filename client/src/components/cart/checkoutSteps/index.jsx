import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  const user = useSelector((state) => state.auth);
  return (
    <div className="checkout-progress d-flex justify-content-center mt-4 mb-4">
      {shipping ? (
        <Link
          to={user ? "/authCheckout/shipping" : "/guestCheckout/shipping"}
          className="float-right"
        >
          <div className="triangle2-active"></div>
          <div className="step active-step">Shipping</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Shipping</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {confirmOrder ? (
        <Link
          to={user ? "/authCheckout/confirm" : "/guestCheckout/confirm"}
          className="float-right"
        >
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirm Order</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirm Order</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {payment ? (
        <Link
          to={user ? "/authCheckout/payment" : "/guestCheckout/payment"}
          className="float-right"
        >
          <div className="triangle2-active"></div>
          <div className="step active-step">Payment</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Payment</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}
    </div>
  );
};

export default CheckoutSteps;

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import CheckoutSteps from "../checkoutSteps";
import { loadStripe } from "@stripe/stripe-js";
import "./style.css";

const Payment = () => {
  const options = {
    style: {
      base: {
        fontSize: "18px",
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE",
      },
    },
  };
  // const stripe = useStripe()
  // const elements = useElements()

  return (
    <>
      <CheckoutSteps shipping confirmOrder payment />
      <Elements stripe={loadStripe("pk_test_T5CExEMvNTJKicx2C0JBQHws")}>
        <div className="d-flex justify-content-center align-items-center">
          <form
            className="border shadow p-3 rounded mt-3px"
            method="post"
            style={{ width: 450 }}
          >
            <h1 className="text-center p-3" style={{ color: "#fc4c4e" }}>
              Card Info
            </h1>

            <div className="form-group mb-4 ">
              <label htmlFor="postalCode" className="form-label fs-5">
                Card Number
              </label>
              <CardNumberElement
                type="text"
                className="form-control "
                name="address"
                id="address"
                options={options}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="postalCode" className="form-label fs-5">
                Card Expirty
              </label>

              <CardExpiryElement
                type="text"
                name="city"
                className="form-control"
                id="city"
                options={options}
              />
            </div>

            <div className=" form-group mb-4">
              <label htmlFor="postalCode" className="form-label fs-5">
                Card Number
              </label>
              <CardCvcElement
                type="text"
                name="phoneNo"
                className="form-control fs-5"
                id="phoneNo"
                options={options}
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
            >
              pay
            </button>
          </form>
        </div>
      </Elements>
    </>
  );
};

export default Payment;

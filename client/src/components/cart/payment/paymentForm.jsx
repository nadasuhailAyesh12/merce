import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CheckoutSteps from "../checkoutSteps";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Common/loader";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate("/success");
  const stripe = useStripe();
  const elements = useElements();
  const [validationErrors, SetValidationErrors] = useState({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
  });
  const { user } = useSelector((state) => state.auth);
  const options = {
    style: {
      base: {
        fontSize: "18px",
      },
    },
  };

  const handleChange = (e) => {
    const { complete, error } = e;
    SetValidationErrors({
      ...validationErrors,
      [e.elementType]: complete ? null : error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await elements.submit();
      const res = await axios.post("/payment/process", { amount: 500 });
      const client_secret = res.data.client_secret;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });
      if (result.paymentIntent.status === "succeeded") {
        toast.success("payment successful");
      } else if (result.paymentIntent.status === "failed") {
        toast.error("Payment failed for some reasons!");
      }
    } catch (error) {
      if (error.type === "card_error") {
        toast.error("Card error. Please check your card details.");
      } else if (error.type === "api_error") {
        toast.error("Payment processing error. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <CheckoutSteps shipping confirmOrder payment />
      {!stripe || !elements ? (
        <Loader />
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <form
            className="border shadow p-3 rounded mt-3px"
            method="post"
            style={{ width: 450 }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-center p-3" style={{ color: "#fc4c4e" }}>
              Card Info
            </h1>

            <div className="form-group mb-4 ">
              <label htmlFor="cardNumber" className="form-label fs-5">
                Card Number
              </label>
              <CardNumberElement
                type="text"
                name="cardNumber"
                id="cardNumber"
                aria-label="card number"
                options={options}
                onChange={handleChange}
                className={
                  validationErrors.cardCvc
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
            </div>
            {validationErrors.cardNumber && (
              <p className="text-danger">
                {validationErrors.cardNumber.message}
              </p>
            )}
            <div className="form-group mb-4">
              <label htmlFor="cardExpiry" className="form-label fs-5">
                Card Expirty
              </label>

              <CardExpiryElement
                type="text"
                name="cardExpiry"
                className={
                  validationErrors.cardExpiry
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="cardExpiry"
                aria-label="card expiry"
                options={options}
                onChange={handleChange}
              />
            </div>
            {validationErrors.cardExpiry && (
              <p className="text-danger">
                {validationErrors.cardExpiry.message}
              </p>
            )}

            <div className=" form-group mb-4">
              <label htmlFor="cardCvc" className="form-label fs-5">
                Card CVC
              </label>
              <CardCvcElement
                type="text"
                name="cardCvc"
                className={
                  validationErrors.cardCvc
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="cardCvc"
                aria-label="card cvc"
                options={options}
                onChange={handleChange}
              />
            </div>
            {validationErrors.cardCvc && (
              <p className="text-danger">{validationErrors.cardCvc.message}</p>
            )}
            <button
              type="submit"
              className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
            >
              pay
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Payment;

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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Common/loader";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../actions/orderActions";

const Payment = () => {
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [validationErrors, SetValidationErrors] = useState({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
  });
  const { user } = useSelector((state) => state.auth);
  const { totalPrice, subTotal, tax, shippingCost, cartItems, shippingInfo } =
    useSelector((state) => state.cart);
  const options = {
    style: {
      base: {
        fontSize: "18px",
      },
    },
  };
  const [guestUserName, setGuestUserName] = useState("");
  const [guestUserEmail, setGuestUserEmail] = useState("");
  const dispatch = useDispatch();

  const handlePaymentElementsChange = (e) => {
    const { complete, error } = e;
    SetValidationErrors({
      ...validationErrors,
      [e.elementType]: complete ? null : error,
    });
  };

  const sendOrderConfirmationEmail = async (emailData) => {
    try {
      setIsSending(true);
      const response = await axios.post("/payment/sendEmail", emailData);
      return response.data.message;
    } catch (error) {
      throw error; // give it to caller to handle it
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await elements.submit();
      //payment processing
      const client_secret = (
        await axios.post("/payment/process", {
          amount: Math.round(totalPrice * 100),
        })
      ).data.client_secret;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user ? user.name : guestUserName,
            email: user ? user.email : guestUserEmail,
          },
        },
      });

      if (result.paymentIntent.status === "succeeded") {
        const order = {
          tax,
          totalPrice,
          subTotal,
          shippingCost,
          shippingInfo,
          orderItems: cartItems,
          paymentInfo: {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          },
        };
        if (user) {
          //create order for Authenticated user
          const newOrder = await dispatch(createOrder(order));
          // Authenticated user: Send order confirmation email
          const emailDataForAuthenticatedUser = {
            orderID: newOrder._id,
            email: user.email,
            orderDate: newOrder.createdAt,
            orderItems: cartItems,
            totalPrice,
          };

          const message = await sendOrderConfirmationEmail(
            emailDataForAuthenticatedUser
          );
          toast.success(message);
        } else {
          // Guest user: Store  claim order info in session and send email
          sessionStorage.setItem("guestOrderInfo", JSON.stringify(order));
          const emailDataForGuestUser = {
            email: guestUserEmail,
            orderDate: Date.now(),
            orderItems: cartItems,
            totalPrice,
          };
          const message = await sendOrderConfirmationEmail(
            emailDataForGuestUser
          );
          toast.success(message);
        }

        navigate("/success");
      } else if (result.paymentIntent.status === "failed") {
        toast.error("Payment failed for some reasons!");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <CheckoutSteps shipping confirmOrder payment />
      {!stripe || !elements || isSending ? (
        <>
          <Loader />
          {isSending && <h2 className="text-center"> Payment is processing</h2>}
        </>
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
            {/* for just guest users */}
            {!user && (
              <>
                <div className="form-group mb-4 ">
                  <label htmlFor="guestName" className="form-label fs-5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    id="guestName"
                    aria-label="guest name"
                    onChange={(e) => {
                      setGuestUserName(e.target.value);
                    }}
                    className="form-control"
                    required
                  />
                  {validationErrors.guestName && (
                    <p className="text-danger">{validationErrors.guestName}</p>
                  )}
                </div>
                <div className="form-group mb-4 ">
                  <label htmlFor="guestEmail" className="form-label fs-5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="guestEmail"
                    id="guestEmail"
                    aria-label="guest email"
                    onChange={(e) => {
                      setGuestUserEmail(e.target.value);
                    }}
                    className="form-control"
                    required
                  />
                  {validationErrors.guestEmail && (
                    <p className="text-danger">{validationErrors.guestEmail}</p>
                  )}
                </div>
              </>
            )}

            <label htmlFor="cardNumber" className="form-label fs-5">
              Card Number
            </label>
            <CardNumberElement
              type="text"
              name="cardNumber"
              id="cardNumber"
              aria-label="card number"
              options={options}
              onChange={handlePaymentElementsChange}
              className={
                validationErrors.cardCvc
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
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
                onChange={handlePaymentElementsChange}
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
                onChange={handlePaymentElementsChange}
              />
            </div>
            {validationErrors.cardCvc && (
              <p className="text-danger">{validationErrors.cardCvc.message}</p>
            )}
            <button
              type="submit"
              className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
              disabled={isSending}
            >
              {isSending ? "submitting" : `pay ${totalPrice}$`}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Payment;

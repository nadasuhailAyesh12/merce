import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./paymentForm";

const StripeWrapper = () => {
  const [stripeAPIKey, setStripeApiKey] = useState("");

  useEffect(() => {
    async function getStripeApiKey() {
      try {
        const { data } = await axios.get("/payment/APIKey");
        setStripeApiKey(data.stripeAPIKey);
      } catch (error) {
        console.error("Error fetching Stripe API key:", error);
      }
    }
    getStripeApiKey();
  }, []);

  return (
    <>
      {stripeAPIKey && (
        <Elements stripe={loadStripe(stripeAPIKey)}>
          <Payment />
        </Elements>
      )}
    </>
  );
};

export default StripeWrapper;

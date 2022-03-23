import React from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

export default function Pay(props) {
  const stripePromise = loadStripe(
    "pk_live_51KYsYjFpdM0xdJxU7UkbiG3cCNS168pNWADVrY4DsOLoe12Fv6wdf53rK21PQHq96VHSUEIgQt4HeSGtLRc25dT400d64NxZoG"
  );
  //
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          isPaidModal={props.isPaidModal}
          isCancel={props.isCancel}
        />
      </Elements>
    </div>
  );
}

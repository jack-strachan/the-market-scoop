import React, {useEffect, useState} from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import "./checkout.css";
// import api from "../api";

export default function CheckoutForm(props) {
  console.log("props:", props);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [showOtherField, setShowOtherField] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [messageType, setMessageType] = useState("text");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

    console.log("isPaid: ", props.isPaidModal);
    useEffect(() => {
        // Step 1: Fetch product details such as amount and currency from
        // API to make sure it can't be tampered with in the client.
        // api.getProductDetails().then(productDetails => {
        //   setAmount(productDetails.amount / 100);
        //   setCurrency(productDetails.currency);
        // });
        // Step 2: Create PaymentIntent over Stripe API
        // api
        //   .createPaymentIntent({
        //     payment_method_types: ["card"]
        //   })
        //   .then(clientSecret => {
        //     setClientSecret(clientSecret);
        //   })
        //   .catch(err => {
        //     setError(err.message);
        //   });
    }, []);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

    // if (!phone || !email) {
    //   setError(`Fill all fields!`);
    //   setProcessing(false);
    //   return;
    // }
    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()
    // console.log(ev);
    if (props.isCancel) {
      axios
        .post("https://themarketscoop.herokuapp.com/cancel", {
          name,
        })
        .then((response) => {
          setError(null);
          setSucceeded(true);
        })
        .catch((err) => {
          setError(`Something went wrong!`);
          setProcessing(false);
        });
      return;
    }

    if (props.isPaidModal) {
      const card = elements.getElement(CardElement);
      const { error, source } = await stripe.createSource(card);

      if (error) {
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
        console.log("[error]", error);
        return;
      }
      axios
        .post("https://themarketscoop.herokuapp.com/start_sub", {
          source: source.id,
          name,
          phone,
          email,
        })
        .then((response) => {
          setError(null);
          setSucceeded(true);
        })
        .catch((err) => {
          setError(`Something went wrong!`);
          setProcessing(false);
        });
    } else {
      axios
        .post("https://themarketscoop.herokuapp.com/free_sign_up", {
          name,
          email,
          phone,
          promoCode,
        })
        .then((response) => {
          setError(null);
          setSucceeded(true);
        })
        .catch((err) => {
          setError(`Something went wrong!`);
          setProcessing(false);
        });
    }
  };
  React.useEffect(() => {
    setEmail("");
    setPhone("");
  }, [messageType]);

  const renderSuccess = () => {
    return (
      <div className="sr-field-success message">
        <h1 style={{ textAlign: "center", marginTop: 50 }}>
          {props.isCancel ? "Canceled plan" : "Your signup succeeded!"}
        </h1>
      </div>
    );
  };

    const renderSuccess = () => {
        return (
            <div className="sr-field-success message">
                <h1 style={{textAlign: "center", marginTop: 50}}>
                    Your signup succeeded!
                </h1>
            </div>
        );
    };
    const getButtonText = () => {
      if (props.isCancel) {
        return "Cancel my plan";
      }
      return props.isPaidModal ? "Pay" : "Sign Up";
    };

<<<<<<< HEAD
    return (
      <form onSubmit={handleSubmit}>
        <h1>{!props.isCancel ? "Join the Scoop!" : "My account"}</h1>
        <div>
          <input
            type="radio"
            id="sendType"
            name="sendType"
            value="email"
            onChange={(e) => setMessageType("email")}
          />
          <label for="interest">Send me emails</label>
          <input
            type="radio"
            defaultChecked
            id="sendType"
            name="sendType"
            value="texts"
            onChange={(e) => setMessageType("text")}
          />
          <label for="interest">Send me texts</label>
        </div>
        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row">
            <input
              type={messageType === "text" ? "tel" : "email"}
              id={messageType === "text" ? "phone" : "email"}
              name={messageType === "text" ? "phone" : "email"}
              placeholder={
                messageType === "text" ? "Phone number" : "joe@smith.com"
              }
              value={messageType === "text" ? phone : email}
              // autoComplete="phone"
              className="sr-input"
              onChange={(e) =>
                messageType === "text"
                  ? setPhone(e.target.value)
                  : setEmail(e.target.value)
              }
            />
          </div>
          {!props.isCancel && (
            <React.Fragment>
              <div className="sr-combo-inputs-row">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  className="sr-input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </React.Fragment>
          )}

          {props.isCancel && (
            <div className="sr-combo-inputs-row" style={{ marginTop: 20 }}>
              <ul>
                <div>
                  <input
                    type="radio"
                    id="interest"
                    name="cancel"
                    value="interest"
                    onClick={() => setShowOtherField(false)}
                  />
                  <label for="interest">
                    I don’t have an interest in the information anymore
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="experience"
                    name="cancel"
                    value="experience"
                    onClick={() => setShowOtherField(false)}
                  />
                  <label for="experience">Bad user experience</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="price"
                    name="cancel"
                    value="price"
                    onClick={() => setShowOtherField(false)}
                  />
                  <label for="price">
                    The service is not sufficient for price paid
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="diff"
                    name="cancel"
                    value="diff"
                    onClick={() => setShowOtherField(false)}
                  />
                  <label for="diff">Expected something different</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="expensive"
                    name="cancel"
                    value="expensive"
                    onClick={() => setShowOtherField(false)}
                  />
                  <label for="expensive">I don’t like the messages</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="cancel"
                    value="other"
                    onClick={() => setShowOtherField(true)}
                  />
                  <label for="other">Other</label>
                  {showOtherField && (
                    <input
                      type="text"
                      id="other_text"
                      name="other_text"
                      value=""
                      placeholder="Reason..."
                    />
                  )}
                </div>
              </ul>
            </div>
          )}
          {props.isPaidModal && !props.isCancel && (
            <React.Fragment>
              <div className="sr-combo-inputs-row">
                <input
                  type="text"
                  id="promo"
                  name="promo"
                  placeholder="Promo Code"
                  autoComplete="promo"
                  className="sr-input"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
              <div className="sr-combo-inputs-row">
                <CardElement
                  className="sr-input sr-card-element"
                  options={options}
                />
              </div>
            </React.Fragment>
          )}
        </div>
=======
    const renderForm = () => {
        const options = {
            style: {
                base: {
                    color: "#32325d",
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#aab7c4",
                    },
                },
                invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a",
                },
            },
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1>Join the Scoop!</h1>
                <p className='mb-40'>You will begin to receive messages the next trading day. Cancel any time.</p>
                <div className="sr-combo-inputs">
                    <div className="sr-combo-inputs-row">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            autoComplete="phone"
                            className="sr-input"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="sr-combo-inputs-row">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            autoComplete="name"
                            className="sr-input"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {props.isPaidModal && (
                        <div className="sr-combo-inputs-row">
                            <CardElement
                                className="sr-input sr-card-element"
                                options={options}
                            />
                        </div>
                    )}
                </div>
>>>>>>> 4adc1bbe03e3557091862fc5317f2f660dcba5d6

                {error && (
                    <div style={{color: "red"}} className="message sr-field-error">
                        {error}
                    </div>
                )}

<<<<<<< HEAD
        <button className="btn" disabled={processing || !stripe}>
          {processing ? "Processing…" : getButtonText()}
        </button>
      </form>
    );
  };
=======
                <button className="btn" disabled={processing || !stripe}>
                    {processing ? "Processing…" : props.isPaidModal ? "Pay" : "Sign Up"}
                </button>
            </form>
        );
    };
>>>>>>> 4adc1bbe03e3557091862fc5317f2f660dcba5d6

    return (
        <div className="checkout-form">
            <div className="sr-payment-form">
                <div className="sr-form-row"/>
                {succeeded ? renderSuccess() : renderForm()}
            </div>
        </div>
    );
}

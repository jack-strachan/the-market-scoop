import React, {useEffect, useState} from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import "./checkout.css";
// import api from "../api";

export default function CheckoutForm(props) {
    console.log("props:", props);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
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

        if (!name || !phone) {
            setError(`Fill all fields!`);
            setProcessing(false);
            return;
        }
        // Step 3: Use clientSecret from PaymentIntent and the CardElement
        // to confirm payment with stripe.confirmCardPayment()
        // console.log(ev);
        if (props.isPaidModal) {
            const card = elements.getElement(CardElement);
            const {error, source} = await stripe.createSource(card);

            if (error) {
                setError(`Payment failed: ${error.message}`);
                setProcessing(false);
                console.log("[error]", error);
                return;
            }
            console.log(source);
            axios
                .post("http://localhost:8000/start_sub", {
                    source: source.id,
                    name,
                    phone,
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
                .post("http://localhost:8000/free_sign_up", {
                    name,
                    phone,
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

        // if (payload.error) {
        //   setError(`Payment failed: ${payload.error.message}`);
        //   setProcessing(false);
        //   console.log("[error]", payload.error);
        // } else {
        //   setError(null);
        //   setSucceeded(true);
        //   setProcessing(false);
        //   setMetadata(payload.paymentIntent);
        //   console.log("[PaymentIntent]", payload.paymentIntent);
        // }
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

                {error && (
                    <div style={{color: "red"}} className="message sr-field-error">
                        {error}
                    </div>
                )}

                <button className="btn" disabled={processing || !stripe}>
                    {processing ? "Processing…" : props.isPaidModal ? "Pay" : "Sign Up"}
                </button>
            </form>
        );
    };

    return (
        <div className="checkout-form">
            <div className="sr-payment-form">
                <div className="sr-form-row"/>
                {succeeded ? renderSuccess() : renderForm()}
            </div>
        </div>
    );
}

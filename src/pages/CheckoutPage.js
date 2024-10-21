import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutStyles.css";
import ProgressBar from "./ProgressBar";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(33);
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (currentStep === 2) {
      setTimeout(() => {
        if (!name || !address || !email) {
          setError("Please fill in all fields correctly.");
          setLoading(false);
        } else {
          alert(`Order confirmed for ${name}!`);
          setProgress(100);
          navigate("/order-tracking");
        }
      }, 2000);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="checkout">
      <span className="centered-heading">
        <h1>Checkout</h1>
      </span>
      <ProgressBar progress={progress} currentStep={currentStep} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleCheckout} className="CheckoutForm">
        {currentStep === 0 && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => {
                if (name) {
                  setCurrentStep(1);
                  setProgress(66);
                }
              }}
            >
              Next
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {email && !isValidEmail(email) && (
                <p className="error">Please enter a valid email address.</p>
              )}
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                className="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (email && address && isValidEmail(email)) {
                  setCurrentStep(2);
                  setProgress(100);
                } else {
                  setError("Please enter a valid email and address.");
                }
              }}
            >
              Next
            </button>
          </>
        )}

        {currentStep === 2 && (
          <button type="submit" disabled={loading}>
            Place Order
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;

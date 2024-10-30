import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutStyles.css";
import ProgressBar from "./ProgressBar";
import Login from "../components/Login";
import Register from "../components/Register";
import ConfirmationModal from "../components/ConfirmationModal";
import CartItem from "../components/CartItem";

const CheckoutPage = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [cartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showPlaceOrderButton, setShowPlaceOrderButton] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = (userDetails) => {
    setUserInfo(userDetails);
    setShowLogin(false);
    setCurrentStep(1);
    setProgress(50);
    setShowUserDetails(true);
    setShowPlaceOrderButton(true);
  };

  const handleRegisterSuccess = (info) => {
    setUserInfo(info);
    setShowRegister(false);
    setCurrentStep(1);
    setProgress(50);
    setShowUserDetails(true);
    setShowPlaceOrderButton(true);
  };

  const handleConfirmOrder = () => {
    setOrderSummary(cartItems);
    setShowModal(true);
    setProgress(99);
    setShowUserDetails(false);
    setShowPlaceOrderButton(false);
  };

  const handleOrderConfirmation = () => {
    alert(`Order placed for ${userInfo.name}!`);
    setProgress(100);
    navigate("/order-tracking");
  };

  const redirectToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <div className="checkout">
      <span className="centered-heading">
        <h1>Checkout</h1>
      </span>
      <ProgressBar progress={progress} currentStep={currentStep} />
      {showModal && (
        <ConfirmationModal
          onConfirm={handleOrderConfirmation}
          orderItems={cartItems}
        />
      )}
      {showLogin ? (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onRegisterRedirect={redirectToRegister}
        />
      ) : showRegister ? (
        <Register
          onRegisterSuccess={handleRegisterSuccess}
          onLoginRedirect={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      ) : currentStep === 0 ? (
        <div>
          <button type="button" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button type="button" onClick={() => setShowRegister(true)}>
            Register
          </button>
        </div>
      ) : (
        <div>
          {showUserDetails && (
            <div>
              <h2>User Details</h2>
              <p>Name: {userInfo.name}</p>
              <p>Address: {userInfo.address}</p>
              <p>Cellphone Number: {userInfo.cellphone}</p>
              <p>Email Address: {userInfo.email}</p>
            </div>
          )}
          {showPlaceOrderButton && (
            <button type="button" onClick={handleConfirmOrder}>
              Place Order
            </button>
          )}
          {orderSummary.length > 0 && (
            <div>
              <h2>Order Summary</h2>
              <h3>Cart Items:</h3>
              {orderSummary.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartStyles.css";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  const { cartItems } = useCart();

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Summary</h2>
        <div className="order-summary-list">
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-wrapper">
                  <div className="cart-item-content">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="price">Price: R{item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>
        <p>Is this order correct?</p>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

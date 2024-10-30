import React from "react";
import CartItem from "./CartItem";

const ConfirmationModal = ({ onConfirm, onCancel, orderItems }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Summary</h2>
        {Array.isArray(orderItems) && orderItems.length > 0
          ? orderItems.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                image={item.image}
                removeFromCart={() => {}}
                updateQuantity={() => {}}
              />
            ))
          : null}
        <p>Is this information correct?</p>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

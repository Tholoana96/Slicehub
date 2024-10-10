import React from "react";

const Cart = ({ cartItems = [], onRemoveItem, onUpdateQuantity }) => {
  const totalPrice =
    cartItems.length > 0
      ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <span>{item.name}</span> - R{item.price.toFixed(2)} x{" "}
              {item.quantity}
              <button
                onClick={() => onRemoveItem(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
              <div style={{ display: "inline-block", marginLeft: "10px" }}>
                <button
                  onClick={() =>
                    onUpdateQuantity(item.id, Math.max(item.quantity - 1, 0))
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span style={{ margin: "0 5px" }}>{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R{totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

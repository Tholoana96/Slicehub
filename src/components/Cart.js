import React from "react";

const Cart = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - R{item.price}
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: R{totalPrice}</h3>
    </div>
  );
};

export default Cart;

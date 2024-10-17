import React from "react";
import CartItem from "./CartItem";

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
              <CartItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                removeFromCart={() => onRemoveItem(item.id)}
                updateQuantity={(newQuantity) =>
                  onUpdateQuantity(item.id, newQuantity)
                }
              />
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R{totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

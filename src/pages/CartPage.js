import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Margherita", price: 50 },
    { id: 2, name: "Pepperoni", price: 57 },
  ];

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;

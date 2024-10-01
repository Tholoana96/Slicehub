import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems = [], setCartItems }) => {
  const removeFromCart = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <a href="/menu">Back to Menu</a>
    </div>
  );
};

export default CartPage;

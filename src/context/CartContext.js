import React, { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children, cartItems }) => {
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

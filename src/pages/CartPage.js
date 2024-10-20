import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Cart from "../components/Cart";
import "../styles/CartStyles.css";

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

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

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <Cart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      <br />
      <br />
      <br />
      <Link to="/menu" className="back-to-menu">
        Back to Menu
      </Link>
    </div>
  );
};

export default CartPage;

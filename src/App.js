import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> |{" "}
          <Link to="/cart">Cart ({cartItems.length})</Link> |{" "}
          <Link to="/checkout">Checkout</Link> |{" "}
          <Link to="/order-tracking">Order Tracking</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={
              <MenuPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-tracking" element={<OrderTrackingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

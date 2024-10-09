import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Navbar /> {}
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
}

export default App;

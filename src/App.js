import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PizzaList from "./components/PizzaList";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar cartItemsCount={cartItems.length} />
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
            <Route path="/login" element={<Login />} />
            <Route path="/pizzas" element={<PizzaList />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

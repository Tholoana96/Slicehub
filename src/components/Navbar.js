import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/checkout">Checkout</Link>
    <Link to="/order-tracking">Order Tracking</Link>
  </nav>
);

export default Navbar;

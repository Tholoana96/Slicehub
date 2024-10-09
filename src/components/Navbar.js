import React from "react";
import "../styles/NavbarStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/order-tracking">Order Tracking</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

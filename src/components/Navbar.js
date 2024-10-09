import React from "react";
import "../styles/NavbarStyles.css";
import logowhite from "../images/logo/SliceHubWhite.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logowhite} alt="Logo" className="logo-nav" />
      </div>
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

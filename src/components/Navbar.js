import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarStyles.css";
import logowhite from "../images/logo/SliceHubWhite.png";

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logowhite} alt="Logo" className="logo-nav" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItemsCount})</Link>
        </li>
        <li>
          <Link to="/order-tracking">Order Tracking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

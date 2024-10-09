import React from "react";
import "../styles/HomeStyles.css";
import logo from "../images/logo/SliceHub.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="header-content">
          <img src={logo} alt="SliceHub Logo" className="logo" />
          <h1>Welcome to SliceHub</h1>
        </div>
        <p className="tagline">
          Your favorite pizzas delivered fresh to your door!
        </p>
      </header>
      <section className="features">
        <h2>Why Choose SliceHub?</h2>
        <p>
          Experience the best pizzas in town. Order now and enjoy fresh,
          delicious flavors delivered to your doorstep!
        </p>
        <button className="order-button">Order Now</button>
      </section>
    </div>
  );
};

export default HomePage;

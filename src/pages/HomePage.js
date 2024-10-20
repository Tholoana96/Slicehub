import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import locationPinAnimation from "../animations/location.json";
import "../styles/HomeStyles.css";
import logo from "../images/logo/SliceHub.png";
import pizzaImage1 from "../images/pizzas/margherita.jpg";
import pizzaImage2 from "../images/pizzas/pepperoni.jpg";
import pizzaImage3 from "../images/pizzas/bbq_chicken.jpg";
import pizzaImage4 from "../images/pizzas/vegan.jpg";
import BackToTopButton from "../components/BackToTopButton";

const HomePage = () => {
  const pizzas = [
    {
      name: "Margherita Pizza",
      img: pizzaImage1,
      desc: "Classic delight with fresh tomatoes and mozzarella cheese.",
    },
    {
      name: "Pepperoni Pizza",
      img: pizzaImage2,
      desc: "Spicy pepperoni on a bed of gooey cheese.",
    },
    {
      name: "BBQ Chicken Pizza",
      img: pizzaImage3,
      desc: "Smoky BBQ sauce with tender chicken and onions.",
    },
    {
      name: "Vegan Pizza",
      img: pizzaImage4,
      desc: "Delicious roasted vegetables with our special vegan cheese.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pizzas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pizzas.length) % pizzas.length
    );
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="header-content">
          <img src={logo} alt="SliceHub Logo" className="logo" />
        </div>
        <p className="tagline">
          The{" "}
          <span style={{ fontweight: "bolder", color: "#b50006" }}>best </span>{" "}
          slice straight to your
          <span style={{ fontweight: "bolder", color: "#b50006" }}> door</span>
        </p>
        <br />
        <Link to="/menu">
          <button className="order-button">Order Now</button>
        </Link>
      </header>

      <section className="featured-pizzas">
        <h2>Featured Pizzas</h2>
        <div className="slider">
          <button className="prev" onClick={prevSlide}>
            ❮
          </button>
          <div className="pizza-slide">
            <img
              src={pizzas[currentIndex].img}
              alt={pizzas[currentIndex].name}
            />
            <h3>{pizzas[currentIndex].name}</h3>
            <p>{pizzas[currentIndex].desc}</p>
          </div>
          <button className="next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      <section className="location-section">
        <div className="location-content">
          <div className="location-pin">
            <Player
              autoplay
              loop
              src={locationPinAnimation}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="location-text">
            <h2>Find Us Here</h2>
            <p>123 Pizza Lane, Flavor Town, South Africa</p>
            <hr />
            <p>Monday to Saturday, 9 AM - 10 PM</p>
            <hr />
            <p>Email: info@slicehub.co.za</p>
            <hr />
            <p>Phone: 011-889-9909</p>
          </div>
        </div>
      </section>

      <div className="app-download-section">
        <h2>Download the SliceHub Mobile App - Coming Soon!</h2>
        <div className="download-buttons">
          <div className="download-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="download-badge"
            />
          </div>
          <div className="download-button">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="download-badge app-store-badge"
            />
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default HomePage;

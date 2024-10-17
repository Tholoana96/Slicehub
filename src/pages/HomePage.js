import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import logo from "../images/logo/SliceHub.png";
import playImage from "../images/play-store.png";
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
          <h1>Welcome to SliceHub</h1>
        </div>
        <p className="tagline">
          Your favorite pizzas delivered fresh to your door!
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

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "SliceHub always delivers the best pizzas! Highly recommend!" - Alex
        </blockquote>
        <blockquote>
          "Fast service and delicious flavors. My favorite pizza place!" - Jamie
        </blockquote>
      </section>

      <Link to="/menu">
        <button className="order-button">Order Now</button>
      </Link>
      <br />
      <br />
      <br />
      <p>Get our app on your mobile today!</p>
      <div className="bottom-image">
        <br />
        <img src={playImage} alt="Back to Top" />
      </div>

      <BackToTopButton />
    </div>
  );
};

export default HomePage;

import React from "react";
import "../styles/HomeStyles.css";
import logo from "../images/logo/SliceHub.png";
import pizzaImage1 from "../images/pizzas/margherita.jpg";
import pizzaImage2 from "../images/pizzas/pepperoni.jpg";
import pizzaImage3 from "../images/pizzas/bbq_chicken.jpg";
import pizzaImage4 from "../images/pizzas/vegan.jpg";
import BackToTopButton from "../components/BackToTopButton";

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
        <button className="order-button">Order Now</button>
      </header>
      <section className="features">
        <h2>Why Choose SliceHub?</h2>
        <p>
          Experience the best pizzas in town. Order now and enjoy fresh,
          delicious flavors delivered to your doorstep!
        </p>
      </section>
      <section className="featured-pizzas">
        <h2>Featured Pizzas</h2>
        <div className="pizza-list">
          <div className="pizza-item">
            <img src={pizzaImage1} alt="Margherita Pizza" />
            <h3>Margherita Pizza</h3>
            <p>Classic delight with fresh tomatoes and mozzarella cheese.</p>
          </div>
          <div className="pizza-item">
            <img src={pizzaImage2} alt="Pepperoni Pizza" />
            <h3>Pepperoni Pizza</h3>
            <p>Spicy pepperoni on a bed of gooey cheese.</p>
          </div>
          <div className="pizza-item">
            <img src={pizzaImage3} alt="BBQ Chicken Pizza" />
            <h3>BBQ Chicken Pizza</h3>
            <p>Smoky BBQ sauce with tender chicken and onions.</p>
          </div>
          <div className="pizza-item">
            <img src={pizzaImage4} alt="Vegan Pizza" />
            <h3>Vegan Pizza</h3>
            <p>Delicious roasted vegetables with our special vegan cheese.</p>
          </div>
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
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Choose your favorite pizza from our menu.</p>
        <p>Add it to your cart and proceed to checkout.</p>
        <p>Enter your delivery details and enjoy your pizza!</p>
      </section>
      <section className="promotions">
        <h2>Current Promotions</h2>
        <p>Order any two pizzas and get 20% off of your next order.</p>
      </section>
      <footer className="footer">
        <button className="order-button">Order Now</button>
      </footer>
      <br />
      <br />
      <BackToTopButton />
    </div>
  );
};

export default HomePage;

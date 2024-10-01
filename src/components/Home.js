import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to SliceHub!</h1>
    <p>Order your favorite pizzas with just a few clicks.</p>
    <Link to="/menu">Go to Menu</Link>
  </div>
);

export default Home;

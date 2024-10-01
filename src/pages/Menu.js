import React from "react";
import PizzaCard from "../components/PizzaCard";

const Menu = () => {
  const pizzas = [
    { id: 1, name: "Margherita", price: 9.99, image: "margherita.jpg" },
    { id: 2, name: "Pepperoni", price: 12.99, image: "pepperoni.jpg" },
  ];

  return (
    <div className="menu">
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          {...pizza}
          addToCart={() => alert("Added to cart!")}
        />
      ))}
    </div>
  );
};

export default Menu;

import React from "react";
import "../styles/PizzaStyles.css";

const PizzaList = ({ pizzas, onSelectPizza }) => {
  return (
    <div>
      <h2>Available Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h3>{pizza.name}</h3>
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.description}</p>
            <p>${pizza.price.toFixed(2)}</p>
            <button onClick={() => onSelectPizza(pizza)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;

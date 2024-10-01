// src/components/PizzaList.js

import React from "react";

const PizzaList = ({ pizzas, onSelectPizza }) => {
  return (
    <div>
      <h2>Available Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <img
              src={`https://via.placeholder.com/150?text=${pizza.name}`}
              alt={pizza.name}
            />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>R{pizza.price}</p>
            <button onClick={() => onSelectPizza(pizza)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;

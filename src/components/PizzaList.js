import React from "react";
import "../styles/PizzaStyles.css";

const PizzaList = ({ pizzas, onSelectPizza }) => {
  return (
    <div>
      <h2>Available Pizzas</h2>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <h3>{pizza.name}</h3>
            <br />
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.description}</p>
            <br />
            <div className="pizza-footer">
              <p>${pizza.price.toFixed(2)}</p>
              <br />
              <br />
              <button onClick={() => onSelectPizza(pizza)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;

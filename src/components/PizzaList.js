import React, { useState } from "react";
import "../styles/PizzaStyles.css";

const PizzaList = ({ pizzas, onSelectPizza, cartItems = [] }) => {
  const [addedPizzas, setAddedPizzas] = useState({});

  const handleAddToCart = (pizza) => {
    onSelectPizza(pizza);

    setAddedPizzas((prev) => ({
      ...prev,
      [pizza.id]: true,
    }));

    setTimeout(() => {
      setAddedPizzas((prev) => ({
        ...prev,
        [pizza.id]: false,
      }));
    }, 4000);
  };

  return (
    <div>
      <h2>Available Pizzas</h2>
      <div className="pizza-list">
        {pizzas.map((pizza) => {
          const isInCart = cartItems.some((item) => item.id === pizza.id);
          const isAdded = addedPizzas[pizza.id];

          return (
            <div key={pizza.id} className="pizza-item">
              <h3>{pizza.name}</h3>
              <br />
              <img src={pizza.image} alt={pizza.name} />
              <p>{pizza.description}</p>
              <br />
              <div className="pizza-footer">
                <p>R{pizza.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(pizza)}
                  disabled={isInCart}
                >
                  {isAdded ? "✓" : isInCart ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;

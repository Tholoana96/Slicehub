import React, { useEffect, useState } from "react";
import { fetchPizzas } from "../api";
import "../styles/PizzaStyles.css";

const PizzaList = ({ onSelectPizza, cartItems = [] }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addedPizzas, setAddedPizzas] = useState({});

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const pizzaData = await fetchPizzas();
        setPizzas(pizzaData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPizzas();
  }, []);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
              <img src={`./images/pizzas/${pizza.image}`} alt={pizza.name} />
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

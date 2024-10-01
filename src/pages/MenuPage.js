import React, { useState, useEffect } from "react";
import { fetchPizzas } from "../api/mockApi";
import PizzaList from "../components/PizzaList";

const MenuPage = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      const data = await fetchPizzas();
      setPizzas(data);
    };
    getPizzas();
  }, []);

  return (
    <div>
      <h1>Our Menu</h1>
      <PizzaList pizzas={pizzas} />
    </div>
  );
};

export default MenuPage;

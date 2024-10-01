import React, { useState, useEffect } from "react";
import { fetchPizzas } from "../api/mockApi";
import PizzaList from "../components/PizzaList";

const MenuPage = ({ cartItems, setCartItems }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      const data = await fetchPizzas();
      setPizzas(data);
    };
    getPizzas();
  }, []);

  const addToCart = (pizza) => {
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
    console.log("Cart Updated:", cartItems);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <PizzaList pizzas={pizzas} onSelectPizza={addToCart} />
      <a href="/cart">Go to Cart</a>
    </div>
  );
};

export default MenuPage;

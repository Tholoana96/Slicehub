const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic cheese and tomato base",
    price: 50,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pepperoni with mozzarella cheese",
    price: 57,
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "BBQ sauce, chicken, and red onions",
    price: 62,
  },
];

export const fetchPizzas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pizzas);
    }, 1000);
  });
};

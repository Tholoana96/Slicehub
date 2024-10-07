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
  {
    id: 4,
    name: "Vegetarian",
    description: "Assorted vegetables with cheese",
    price: 55,
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Ham and pineapple topping",
    price: 60,
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "Assorted meats and cheese",
    price: 65,
  },
  {
    id: 7,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan, and blue cheese",
    price: 63,
  },
  {
    id: 8,
    name: "Buffalo Chicken",
    description: "Spicy chicken with buffalo sauce",
    price: 62,
  },
  {
    id: 9,
    name: "Mushroom Sausage",
    description: "Sausage and mushrooms with cheese",
    price: 58,
  },
  {
    id: 10,
    name: "Spinach Feta",
    description: "Spinach and feta cheese",
    price: 54,
  },
  {
    id: 11,
    name: "Seafood Special",
    description: "Assorted seafood with cheese",
    price: 70,
  },
  {
    id: 12,
    name: "Caramelized Onion, Goat Cheese and Prosciutto",
    description: "Sweet onions with goat cheese and prosciutto",
    price: 68,
  },
  {
    id: 13,
    name: "Prosciutto Arugula",
    description: "Prosciutto and fresh arugula",
    price: 66,
  },
  {
    id: 14,
    name: "Tandoori Chicken",
    description: "Spiced chicken with tandoori sauce",
    price: 61,
  },
  {
    id: 15,
    name: "Taco",
    description: "Ground beef, lettuce, and cheese",
    price: 59,
  },
  {
    id: 16,
    name: "Vegan",
    description: "Assorted vegetables with vegan cheese",
    price: 52,
  },
];

export const fetchPizzas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pizzas);
    }, 1000);
  });
};

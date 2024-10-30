const express = require("express");
const router = express.Router();

const imageBaseUrl = "/images/pizzas";

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic cheese and tomato base",
    price: 50,
    image: `${imageBaseUrl}/margherita.jpg`,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pepperoni with mozzarella cheese",
    price: 57,
    image: `${imageBaseUrl}/pepperoni.jpg`,
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "BBQ sauce, chicken, and red onions",
    price: 62,
    image: `${imageBaseUrl}/bbq_chicken.jpg`,
  },
  {
    id: 4,
    name: "Vegetarian",
    description: "Assorted vegetables with cheese",
    price: 55,
    image: `${imageBaseUrl}/vegetarian.jpg`,
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Ham and pineapple topping",
    price: 60,
    image: `${imageBaseUrl}/hawaiian.jpg`,
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "Assorted meats and cheese",
    price: 65,
    image: `${imageBaseUrl}/meat_lovers.jpg`,
  },
  {
    id: 7,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan, and blue cheese",
    price: 63,
    image: `${imageBaseUrl}/four_cheese.jpg`,
  },
  {
    id: 8,
    name: "Buffalo Chicken",
    description: "Spicy chicken with buffalo sauce",
    price: 62,
    image: `${imageBaseUrl}/buffalo_chicken.jpg`,
  },
  {
    id: 9,
    name: "Mushroom Sausage",
    description: "Sausage and mushrooms with cheese",
    price: 58,
    image: `${imageBaseUrl}/mushroom_sausage.jpg`,
  },
  {
    id: 10,
    name: "Spinach Feta",
    description: "Spinach and feta cheese",
    price: 54,
    image: `${imageBaseUrl}/spinach_feta.jpg`,
  },
  {
    id: 11,
    name: "Seafood Special",
    description: "Assorted seafood with cheese",
    price: 70,
    image: `${imageBaseUrl}/seafood_special.jpg`,
  },
  {
    id: 12,
    name: "Cheese & Onion",
    description: "Sweet onions with goat cheese and prosciutto",
    price: 68,
    image: `${imageBaseUrl}/caramelized_onion_goat_cheese.jpg`,
  },
  {
    id: 13,
    name: "Prosciutto Arugula",
    description: "Prosciutto and fresh arugula",
    price: 66,
    image: `${imageBaseUrl}/prosciutto_arugula.jpg`,
  },
  {
    id: 14,
    name: "Tandoori Chicken",
    description: "Spiced chicken with tandoori sauce",
    price: 61,
    image: `${imageBaseUrl}/tandoori_chicken.jpg`,
  },
  {
    id: 15,
    name: "Taco",
    description: "Ground beef, lettuce, and cheese",
    price: 59,
    image: `${imageBaseUrl}/taco.jpg`,
  },
  {
    id: 16,
    name: "Vegan",
    description: "Assorted vegetables with vegan cheese",
    price: 52,
    image: `${imageBaseUrl}/vegan.jpg`,
  },
];

router.get("/", (req, res) => {
  res.json(pizzas);
});

module.exports = router;

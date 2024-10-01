const PizzaCard = ({ name, image, price, addToCart }) => (
  <div className="pizza-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>Price: R{price}</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

export default PizzaCard;

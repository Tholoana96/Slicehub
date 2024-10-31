const PizzaCard = ({ name, image, price, addToCart }) => (
  <div className="pizza-card">
    <img src={`https://slicehub-1.onrender.com${image}`} alt={name} />
    <h3>{name}</h3>
    <p>Price: R{price}</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

export default PizzaCard;

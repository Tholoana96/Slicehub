const CartItem = ({ name, quantity, price, removeFromCart }) => (
  <div className="cart-item">
    <h4>{name}</h4>
    <p>Quantity: {quantity}</p>
    <p>Total: R{price * quantity}</p>
    <button onClick={removeFromCart}>Remove</button>
  </div>
);

export default CartItem;

const CartItem = ({
  name,
  quantity,
  price,
  image,
  removeFromCart,
  updateQuantity,
}) => (
  <div className="cart-item">
    <div className="cart-item-wrapper">
      <div className="cart-item-content">
        <img
          src={`https://slicehub-1.onrender.com/images/pizzas/${image}`}
          alt={name}
          className="cart-item-image"
        />
        <div className="cart-item-details">
          <h4 className="item-name">{name}</h4>
          <p className="price">Price: R{price.toFixed(2)}</p>
          <div className="quantity-actions">
            <div className="cart-item-actions">
              <button
                className="small-button"
                onClick={() => updateQuantity(Math.max(quantity - 1, 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="small-button"
                onClick={() => updateQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={removeFromCart} className="remove-button">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;

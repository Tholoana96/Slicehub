import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutStyles.css";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for ${name}!`);
    navigate("/order-tracking");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleCheckout}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

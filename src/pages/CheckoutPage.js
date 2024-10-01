import React, { useState } from "react";

const CheckoutPage = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Confirmed:", customerDetails);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

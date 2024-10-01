// src/pages/OrderTrackingPage.js

import React, { useState } from "react";

const OrderTrackingPage = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");

  setTimeout(() => {
    setOrderStatus("Baking");
  }, 3000);

  setTimeout(() => {
    setOrderStatus("Out for Delivery");
  }, 9000);

  return (
    <div>
      <h1>Order Tracking</h1>
      <p>Current Status: {orderStatus}</p>
    </div>
  );
};

export default OrderTrackingPage;

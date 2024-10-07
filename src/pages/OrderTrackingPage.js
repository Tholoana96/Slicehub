import React, { useState, useEffect } from "react";

const OrderTrackingPage = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => {
        setOrderStatus("Baking");
      }, 3000)
    );

    timers.push(
      setTimeout(() => {
        setOrderStatus("Out for Delivery");
      }, 7000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div>
      <h1>Order Tracking</h1>
      <p>Current Status: {orderStatus}</p>
    </div>
  );
};

export default OrderTrackingPage;

import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import "../styles/OrderTrackingStyles.css";
import preparingAnimation from "../animations/preparing.json";
import bakingAnimation from "../animations/baking.json";
import deliveryAnimation from "../animations/delivery.json";

const OrderTrackingPage = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => {
        setOrderStatus("Baking");
      }, 5000)
    );

    timers.push(
      setTimeout(() => {
        setOrderStatus("Out for Delivery");
      }, 10000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const animationOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const renderAnimation = () => {
    switch (orderStatus) {
      case "Preparing":
        return (
          <Lottie
            options={animationOptions(preparingAnimation)}
            height={300}
            width={300}
          />
        );
      case "Baking":
        return (
          <Lottie
            options={animationOptions(bakingAnimation)}
            height={300}
            width={300}
          />
        );
      case "Out for Delivery":
        return (
          <Lottie
            options={animationOptions(deliveryAnimation)}
            height={300}
            width={300}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="tracking">
      <h1>Order Tracking</h1>
      <p>Current Status: {orderStatus}</p>
      <div className="animation-container">{renderAnimation()}</div>
    </div>
  );
};

export default OrderTrackingPage;

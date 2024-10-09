import React, { useEffect, useState } from "react";
import "../styles/BackToTopStyles.css";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button onClick={scrollToTop} className="backToTopButton">
          {" "}
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;

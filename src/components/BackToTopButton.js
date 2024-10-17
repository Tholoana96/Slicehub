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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M12 5l7 7-1.41 1.41L12 7.83l-5.59 5.58L5 12l7-7zm0 7l7 7-1.41 1.41L12 14.83l-5.59 5.58L5 19l7-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;

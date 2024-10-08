import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <br />
      <p>
        Follow us on social media for the latest updates, promotions, and more!
      </p>
      <div className="social-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-facebook"></i>
      </div>
      <br />
      <div className="contact-info">
        <p>Email: info@slicehub.co.za</p>
        <p>Phone: 011-889-9909</p>
      </div>
      <br />
      <div className="additional-info">
        <p>
          123 Pizza Lane, Flavor Town, SA | Open Monday to Saturday, 9 AM - 10
          PM
        </p>
      </div>

      <br />
      <hr />
      <br />

      <p>&copy; 2024 SliceHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

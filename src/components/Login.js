import React, { useState } from "react";
import "../styles/CheckoutStyles.css";

const Login = ({ onLoginSuccess, onRegisterRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (
      userDetails &&
      userDetails.email === email &&
      userDetails.password === password
    ) {
      onLoginSuccess(userDetails);
    } else {
      setError("Email not registered.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="CheckoutForm">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && (
        <div>
          <p className="error">{error}</p>
          <button type="button" onClick={onRegisterRedirect}>
            Register
          </button>
        </div>
      )}
    </form>
  );
};

export default Login;

import React, { useState } from "react";
import "../styles/CheckoutStyles.css";

const Register = ({ onRegisterSuccess, onLoginRedirect }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !cellphone || !address || !password) {
      setError("Please fill in all fields.");
      return;
    }
    const userDetails = { name, email, cellphone, address, password };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    onRegisterSuccess(userDetails);
  };

  return (
    <div className="CheckoutForm">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cellphone"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p> Already registered? </p>{" "}
      <button type="button" onClick={onLoginRedirect}>
        Login here.
      </button>
    </div>
  );
};

export default Register;

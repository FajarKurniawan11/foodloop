import React, { useState } from "react";
import "../styles/login.css";

export default function AuthForm({ onLoginSuccess, onBrandClick }) {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState("donor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      alert("Registration successful! Please log in.");
      setEmail("");
      setPassword("");
      setUsername("");
      setIsRegister(false);
    } else {
      console.log("Selected role:", role);
      if (onLoginSuccess) {
        onLoginSuccess(role);
      }
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-blob auth-blob--tl" />
      <div className="auth-blob auth-blob--br" />
      <div className="auth-blob auth-blob--gold" />

      <div className="auth-card">
        <div className="auth-logo" onClick={onBrandClick}>
          <span className="auth-logo__icon">✦</span> FoodLoop
        </div>

        <h2 className="auth-title">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <div className="auth-field">
              <label>Username</label>
              <input
                type="text"
                required
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Role selector — register only */}
          {isRegister && (
            <div className="auth-field">
              <label>Select Your Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="donor">Food Donor (Restaurant/Cafe)</option>
                <option value="volunteer">Volunteer (Courier/Driver)</option>
                <option value="beneficiary">Beneficiary (Family/NGO)</option>
              </select>
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isRegister ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="auth-switch">
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <span
            className="auth-switch__link"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login here" : "Register here"}
          </span>
        </p>

        <div className="auth-card__accent" />
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function AuthForm({ onLoginSuccess, onBrandClick }) {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState("donor");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(role); // Kirim data role ke App.jsx
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: "80px auto",
        backgroundColor: "#0b1a13",
        borderRadius: "12px",
        border: "1px solid #1e7a56",
        fontFamily: "sans-serif",
      }}
    >
      {/* Tombol Logo kembali ke Beranda */}
      <div
        onClick={onBrandClick}
        style={{
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#56c99a",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        ✦ FoodLoop
      </div>

      <form onSubmit={handleSubmit}>
        <h2
          style={{ color: "#fff", textAlign: "center", marginBottom: "25px" }}
        >
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ color: "#b8d9cc", display: "block", marginBottom: "5px" }}
          >
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#153026",
              color: "#fff",
              border: "1px solid #2d9b6f",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ color: "#b8d9cc", display: "block", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#153026",
              color: "#fff",
              border: "1px solid #2d9b6f",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* INPUT PILIHAN ROLE - INI KUNCINYA */}
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{ color: "#b8d9cc", display: "block", marginBottom: "5px" }}
          >
            Select Your Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#153026",
              color: "#fff",
              border: "1px solid #2d9b6f",
              cursor: "pointer",
            }}
          >
            <option value="donor">Food Donor (Restaurant/Cafe)</option>
            <option value="volunteer">Volunteer (Courier/Driver)</option>
            <option value="beneficiary">Beneficiary (Family/NGO)</option>
          </select>
        </div>

        {/* Tombol Sign In / Sign Up */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor: "#2d9b6f",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {isRegister ? "Sign Up" : "Sign In"}
        </button>

        {/* Toggle Login/Register */}
        <p
          style={{
            color: "#b8d9cc",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <span
            onClick={() => setIsRegister(!isRegister)}
            style={{
              color: "#56c99a",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isRegister ? "Login here" : "Register here"}
          </span>
        </p>
      </form>
    </div>
  );
}

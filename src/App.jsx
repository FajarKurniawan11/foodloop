import "./App.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2>🍽️ FoodLoop</h2>
      </nav>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{action} As</h2>

            <button className="role-btn">🍱 Donor</button>

            <button className="role-btn">🤝 Volunteer</button>

            <button className="role-btn">
              ❤️ Recipient
            </button>

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="hero">
        <h1>Welcome to FoodLoop</h1>

        <p>
          FoodLoop is a surplus food redistribution platform that
          connects food donors with those in need. FoodLoop is
          dedicated to minimizing food waste, eradicating hunger,
          and creating a better and more sustainable future for
          the planet.
        </p>

        <div className="button-group">
          <button
            className="signup-btn"
            onClick={() => {
              setAction("Sign Up");
              setShowModal(true);
            }}
          >
            Sign Up
          </button>

          <button
            className="signin-btn"
            onClick={() => {
              setAction("Sign In");
              setShowModal(true);
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <section className="about">
        <h2>About Us</h2>

        <div className="features">
          <div className="feature-card">
            <h3>🍱 Easy Donate</h3>
            <p>
              Share any surplus food you have to minimize food
              waste.
            </p>
          </div>

          <div className="feature-card">
            <h3>📍 Appropriate Distribution</h3>
            <p>
              Distribute surplus food to those in need and
              eradicate hunger.
            </p>
          </div>

          <div className="feature-card">
            <h3>♻️ Minimize Food Waste</h3>
            <p>
              Reduce food waste for a better future for the
              earth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
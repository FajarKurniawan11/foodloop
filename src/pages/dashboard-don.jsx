import React, { useState } from "react";
import {
  Box,
  Heart,
  PlusCircle,
  History,
  Award,
  LogOut,
  TrendingUp,
  BarChart3,
  Leaf,
  CheckCircle2,
} from "lucide-react";

export default function DonorDashboard({ onBrandClick }) {
  // State untuk melacak sub-menu / tab mana yang aktif di dalam dashboard donor
  const [activeTab, setActiveTab] = useState("create-donation");

  return (
    <div className="fl-dash-container">
      {/* SIDEBAR */}
      <aside className="fl-dash-sidebar">
        <div
          className="fl-dash-logo-area"
          onClick={onBrandClick}
          style={{ cursor: "pointer" }}
        >
          <div className="fl-dash-logo-icon">FL</div>
          <span className="fl-dash-logo-text">
            Food<span className="fl-gold-text">Loop</span>
          </span>
        </div>

        <nav className="fl-dash-nav">
          <button
            className={`fl-dash-link ${activeTab === "create-donation" ? "active" : ""}`}
            onClick={() => setActiveTab("create-donation")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <PlusCircle size={18} /> Create Donation
          </button>

          <button
            className={`fl-dash-link ${activeTab === "donation-history" ? "active" : ""}`}
            onClick={() => setActiveTab("donation-history")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <History size={18} /> Donation History
          </button>

          <button
            className={`fl-dash-link ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <TrendingUp size={18} /> Food Waste Analytics
          </button>
        </nav>

        <button className="fl-dash-logout-btn" onClick={onBrandClick}>
          <LogOut size={18} /> Sign Out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="fl-dash-main">
        {/* HEADER */}
        <header className="fl-dash-header">
          <div>
            <h2>
              Welcome back,{" "}
              <span className="fl-gold-text">Green Cafe Jakarta</span>
            </h2>
            <p>Role: Certified Food Donor Partner · Premium Verified</p>
          </div>
          {/* Tombol shortcut untuk langsung membuka tab membuat donasi baru */}
          <button
            className="fl-dash-btn-primary"
            onClick={() => setActiveTab("create-donation")}
          >
            <PlusCircle size={16} /> Create New Food Listing
          </button>
        </header>

        {/* METRIC CARDS */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Total Food Rescued</span>
            <h3>
              340 <small>Kg</small>
            </h3>
            <p>
              <Heart size={14} className="text-emerald" /> You prevented
              perfectly good food from hitting landfills!
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-gold">Eco-Impact Points</span>
            <h3>
              2,850 <small>Pts</small>
            </h3>
            <p>
              <Award size={14} className="text-gold" /> Equivalent to reducing
              approx 680 kg of CO2 emissions.
            </p>
          </div>
        </section>

        {/* KONTEN UTAMA DINAMIS BERDASARKAN TAB SIDEBAR */}

        {/* TAB 1: CREATE DONATION (Formulir Listing Makanan Surplus) */}
        {activeTab === "create-donation" && (
          <section className="fl-dash-table-box" style={{ padding: "24px" }}>
            <div className="fl-table-header" style={{ marginBottom: "20px" }}>
              <h4>Create New Food Listing Donation</h4>
            </div>

            {/* Form Input Donasi Baru */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Food listing published successfully! Notifying nearby volunteers.",
                );
                setActiveTab("donation-history");
              }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: 1,
                    minWidth: "250px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    Food Item Name / Specs
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Croissants, Fried Rice Pack, Milk Carton"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    Quantity (Kg / Pack)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5 Kg"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    Expiration / Safe for Consumption Period
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Best before 5 hours"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    Special Notes / Allergens Info
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Contains dairy, keep refrigerated"
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="fl-dash-btn-primary"
                style={{ alignSelf: "flex-start", marginTop: "10px" }}
              >
                <PlusCircle size={16} /> Publish Food Listing
              </button>
            </form>
          </section>
        )}

        {/* TAB 2: DONATION HISTORY (Monitoring Status Makanan Aktif & Riwayat) */}
        {activeTab === "donation-history" && (
          <section className="fl-dash-table-box">
            <div className="fl-table-header">
              <h4>Active Food Donation Listings Tracker</h4>
            </div>
            <table className="fl-dash-table">
              <thead>
                <tr>
                  <th>Food Item Specs</th>
                  <th>Quantity</th>
                  <th>Assigned Courier</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Assorted Artisan Bread</strong>
                  </td>
                  <td>12 Kg</td>
                  <td>Rian Kusuma (Volunteer)</td>
                  <td>
                    <span className="fl-badge fl-badge--warning">
                      En Route to Beneficiary
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Overnight Oats & Pastries</strong>
                  </td>
                  <td>8 Kg</td>
                  <td>Siti Aminah (Volunteer)</td>
                  <td>
                    <span className="fl-badge fl-badge--success">
                      Successfully Delivered
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Boxed Rice Surplus Meal</strong>
                  </td>
                  <td>15 Packs</td>
                  <td>Budi Santoso (Volunteer)</td>
                  <td>
                    <span className="fl-badge fl-badge--success">
                      Successfully Delivered
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* TAB 3: FOOD WASTE ANALYTICS (Data Dampak Penyelamatan Sampah Organik) */}
        {activeTab === "analytics" && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <section className="fl-dash-table-box" style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <BarChart3 style={{ color: "#10b981" }} />
                <h4 style={{ margin: 0, color: "#fff", fontSize: "1.1rem" }}>
                  Monthly Environmental Saving Report
                </h4>
              </div>
              <p
                style={{ opacity: 0.8, fontSize: "0.9rem", lineHeight: "1.5" }}
              >
                By reducing organic kitchen waste and repurposing it via
                FoodLoop, you have optimized your surplus ingredient management
                metrics.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "rgba(16, 185, 129, 0.05)",
                    border: "1px solid rgba(16, 185, 129, 0.1)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#10b981",
                      fontWeight: "600",
                    }}
                  >
                    Methane Gas Diverted
                  </span>
                  <h5
                    style={{
                      margin: "5px 0 0 0",
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    24.5 m³
                  </h5>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(212, 168, 67, 0.05)",
                    border: "1px solid rgba(212, 168, 67, 0.1)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#d4a843",
                      fontWeight: "600",
                    }}
                  >
                    Financial Equivalent Saved
                  </span>
                  <h5
                    style={{
                      margin: "5px 0 0 0",
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    Rp 4,250,000
                  </h5>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

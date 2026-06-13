import React, { useState } from "react";
import {
  Box,
  ShoppingBag,
  Clock,
  MapPin,
  LogOut,
  Utensils,
  CheckCircle2,
  PlusCircle,
  Calendar,
  User,
} from "lucide-react";

export default function BeneficiaryDashboard({ onBrandClick }) {
  // State untuk melacak sub-menu / tab mana yang aktif di dalam dashboard
  const [activeTab, setActiveTab] = useState("feed");

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
            className={`fl-dash-link ${activeTab === "feed" ? "active" : ""}`}
            onClick={() => setActiveTab("feed")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <Utensils size={18} /> Available Food Feed
          </button>

          <button
            className={`fl-dash-link ${activeTab === "requests" ? "active" : ""}`}
            onClick={() => setActiveTab("requests")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <ShoppingBag size={18} /> My Food Requests
          </button>

          <button
            className={`fl-dash-link ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <Clock size={18} /> Order History
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
              Welcome,{" "}
              <span className="fl-gold-text">Panti Asuhan Kasih Bunda</span>
            </h2>
            <p>Role: Verified Institution Beneficiary · 15 Children Managed</p>
          </div>
          {/* Tombol Request Custom Food Aid - Ketika diklik langsung membuka tab requests */}
          <button
            className="fl-dash-btn-primary"
            onClick={() => setActiveTab("requests")}
          >
            <ShoppingBag size={16} /> Request Custom Food Aid
          </button>
        </header>

        {/* METRIC CARDS */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Meals Received</span>
            <h3>
              1,240 <small>Rations</small>
            </h3>
            <p>
              <CheckCircle2 size={14} className="text-emerald" /> Successfully
              fulfilled your institution nutrition needs.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-gold">
              Active Incoming Request
            </span>
            <h3>
              1 <small>Delivery</small>
            </h3>
            <p>
              <MapPin size={14} className="text-gold" /> 1 food batch is
              currently being dispatched to your location.
            </p>
          </div>
        </section>

        {/* KONTEN UTAMA DINAMIS BERDASARKAN TAB YANG DIKLIK */}

        {/* TAB 1: AVAILABLE FOOD FEED */}
        {activeTab === "feed" && (
          <section className="fl-dash-table-box">
            <div className="fl-table-header">
              <h4>Incoming Food Deliveries Tracker</h4>
            </div>
            <table className="fl-dash-table">
              <thead>
                <tr>
                  <th>Food Source & Item</th>
                  <th>Quantity</th>
                  <th>Assigned Courier / Volunteer</th>
                  <th>Status Track</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Green Cafe Jakarta</strong> <br />
                    <small>Assorted Artisan Bread</small>
                  </td>
                  <td>12 Kg</td>
                  <td>Rian Kusuma</td>
                  <td>
                    <span className="fl-badge fl-badge--warning">
                      On The Way (Courier Riding)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Hotel Nusantara Kitchen</strong> <br />
                    <small>Buffet Rice & Side Dishes</small>
                  </td>
                  <td>25 Kg</td>
                  <td>Budi Santoso</td>
                  <td>
                    <span className="fl-badge fl-badge--success">
                      Completed & Eaten
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* TAB 2: MY FOOD REQUESTS & CUSTOM AID */}
        {activeTab === "requests" && (
          <section className="fl-dash-table-box" style={{ padding: "20px" }}>
            <div className="fl-table-header" style={{ marginBottom: "20px" }}>
              <h4>Create & Manage Food Requests</h4>
            </div>

            {/* Form Simulasi Sederhana Request Custom Food Aid */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
            >
              <h5
                style={{
                  color: "#fff",
                  marginBottom: "15px",
                  fontSize: "1.1rem",
                }}
              >
                Request Custom Emergency Food Aid
              </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Food request submitted successfully! Looking for donors.",
                  );
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "15px" }}>
                  <input
                    type="text"
                    placeholder="Food Type Needed (e.g., Rice Box, Milk, Groceries)"
                    required
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Quantity Estimate (e.g., 20 Packs)"
                    required
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#0d1f18",
                      color: "#fff",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="fl-dash-btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Submit Aid Request
                </button>
              </form>
            </div>

            {/* Tabel Log Request */}
            <table className="fl-dash-table">
              <thead>
                <tr>
                  <th>Requested Items</th>
                  <th>Target Quantity</th>
                  <th>Date Requested</th>
                  <th>Match Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Baby Formula & Milk Cans</strong>
                  </td>
                  <td>15 Boxes</td>
                  <td>June 12, 2026</td>
                  <td>
                    <span className="fl-badge fl-badge--warning">
                      Searching for Donor Partner
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* TAB 3: ORDER HISTORY */}
        {activeTab === "history" && (
          <section className="fl-dash-table-box">
            <div className="fl-table-header">
              <h4>Historical Fulfilled Food Orders Log</h4>
            </div>
            <table className="fl-dash-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Food Description</th>
                  <th>Total Weight</th>
                  <th>Completion Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#FL-9082</td>
                  <td>Catering Surplus Rice & Chicken</td>
                  <td>40 Kg</td>
                  <td>June 05, 2026</td>
                </tr>
                <tr>
                  <td>#FL-8911</td>
                  <td>Fresh Fruits & Vegetables Pack</td>
                  <td>15 Kg</td>
                  <td>May 28, 2026</td>
                </tr>
                <tr>
                  <td>#FL-8750</td>
                  <td>Bakery Pastry Assortment</td>
                  <td>10 Kg</td>
                  <td>May 14, 2026</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
}

import React, { useState } from "react";
import {
  Truck,
  History,
  Award,
  LogOut,
  MapPin,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  ShieldAlert,
  Zap,
} from "lucide-react";

export default function VolunteerDashboard({ onBrandClick }) {
  // State untuk melacak sub-menu / tab mana yang aktif di dalam dashboard volunteer
  const [activeTab, setActiveTab] = useState("active-rescue");

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
            className={`fl-dash-link ${activeTab === "active-rescue" ? "active" : ""}`}
            onClick={() => setActiveTab("active-rescue")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <Truck size={18} /> Active Rescue
          </button>

          <button
            className={`fl-dash-link ${activeTab === "delivery-history" ? "active" : ""}`}
            onClick={() => setActiveTab("delivery-history")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <History size={18} /> Delivery History
          </button>

          <button
            className={`fl-dash-link ${activeTab === "leaderboard" ? "active" : ""}`}
            onClick={() => setActiveTab("leaderboard")}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <Award size={18} /> Leaderboard & Badges
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
              Hello, <span className="fl-gold-text">Rian Kusuma</span>
            </h2>
            <p>Role: Volunteer Rescue Squad · On-Duty Fleet</p>
          </div>
          <div
            className="fl-dash-status-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(16, 185, 129, 0.1)",
              color: "#10b981",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#10b981",
                borderRadius: "50%",
              }}
            ></span>{" "}
            Active & Online
          </div>
        </header>

        {/* METRIC CARDS (Sesuai Data Riwayat Lu) */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Total Completed Pickups</span>
            <h3>
              42 <small>Trips</small>
            </h3>
            <p>
              <CheckCircle size={14} className="text-emerald" /> Successfully
              distributed 340 kg of surplus food.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-gold">Eco-Points Earned</span>
            <h3>
              1,550 <small>Pts</small>
            </h3>
            <p>
              <Award size={14} className="text-gold" /> Redeemable for fuel or
              grocery vouchers.
            </p>
          </div>
        </section>

        {/* KONTEN UTAMA DINAMIS BERDASARKAN TAB SIDEBAR */}

        {/* TAB 1: ACTIVE RESCUE (Tampilan Utama Penjemputan Makanan) */}
        {activeTab === "active-rescue" && (
          <section className="fl-dash-table-box" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h4
                style={{
                  margin: 0,
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Active Pickup Assignment
              </h4>
              <span
                style={{
                  fontSize: "0.8rem",
                  background: "rgba(212, 168, 67, 0.1)",
                  color: "#d4a843",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Zap size={12} /> AI-Optimized Route
              </span>
            </div>

            {/* Visual Tracking Timeline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                paddingLeft: "30px",
                borderLeft: "2px dashed rgba(255,255,255,0.1)",
                marginLeft: "10px",
              }}
            >
              {/* Lokasi Donor */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-42px",
                    top: "0",
                    background: "#112e24",
                    padding: "6px",
                    borderRadius: "50%",
                    border: "2px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={16} style={{ color: "#10b981" }} />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    tracking: "1px",
                    color: "#10b981",
                    fontWeight: "600",
                  }}
                >
                  Pick up from (Donor)
                </span>
                <h5
                  style={{
                    margin: "4px 0 2px 0",
                    fontSize: "1.05rem",
                    color: "#fff",
                  }}
                >
                  Green Cafe Jakarta
                </h5>
                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>
                  Assorted Artisan Bread (12 Kg) ·{" "}
                  <span style={{ color: "#ef4444" }}>Expires in 3 hours</span>
                </p>
              </div>

              {/* Lokasi Penerima */}
              <div style={{ position: "relative", marginTop: "10px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-42px",
                    top: "0",
                    background: "#2e2411",
                    padding: "6px",
                    borderRadius: "50%",
                    border: "2px solid #d4a843",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={16} style={{ color: "#d4a843" }} />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    tracking: "1px",
                    color: "#d4a843",
                    fontWeight: "600",
                  }}
                >
                  Deliver to (Beneficiary)
                </span>
                <h5
                  style={{
                    margin: "4px 0 2px 0",
                    fontSize: "1.05rem",
                    color: "#fff",
                  }}
                >
                  Panti Asuhan Kasih Bunda
                </h5>
                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>
                  Jl. Melati No. 12, Central Jakarta (15 children)
                </p>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "30px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "20px",
              }}
            >
              <button
                onClick={() =>
                  alert("Issue reported to FoodLoop Support Team.")
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "none",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  color: "#ef4444",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}
              >
                <AlertTriangle size={16} /> Report Issue
              </button>
              <button
                onClick={() => {
                  alert("Awesome job! 12 Kg of food rescued and delivered.");
                  setActiveTab("delivery-history");
                }}
                className="fl-dash-btn-primary"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <CheckCircle size={16} /> Confirm Delivery Complete
              </button>
            </div>
          </section>
        )}

        {/* TAB 2: DELIVERY HISTORY (Log Riwayat Pengantaran Kurir) */}
        {activeTab === "delivery-history" && (
          <section className="fl-dash-table-box">
            <div className="fl-table-header">
              <h4>Your Completed Food Rescue Runs</h4>
            </div>
            <table className="fl-dash-table">
              <thead>
                <tr>
                  <th>Donor Source</th>
                  <th>Destination Beneficiary</th>
                  <th>Rescued Weight</th>
                  <th>Points Earned</th>
                  <th>Date Provided</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Hotel Nusantara</strong>
                  </td>
                  <td>Panti Jompo Sejahtera</td>
                  <td>25 Kg</td>
                  <td>+150 Pts</td>
                  <td>June 11, 2026</td>
                </tr>
                <tr>
                  <td>
                    <strong>Bakery Seruni</strong>
                  </td>
                  <td>Komunitas Pemulung Cilincing</td>
                  <td>18 Kg</td>
                  <td>+100 Pts</td>
                  <td>June 08, 2026</td>
                </tr>
                <tr>
                  <td>
                    <strong>Katering Berkah</strong>
                  </td>
                  <td>Rumah Singgah Anak Jalanan</td>
                  <td>35 Kg</td>
                  <td>+220 Pts</td>
                  <td>June 03, 2026</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* TAB 3: LEADERBOARD & BADGES (Sistem Gamifikasi Relawan) */}
        {activeTab === "leaderboard" && (
          <div style={{ display: "flex", gap: "20px", marginTop: "5px" }}>
            {/* Sisi Kiri: Peringkat Leaderboard */}
            <section className="fl-dash-table-box" style={{ flex: 1 }}>
              <div className="fl-table-header">
                <h4>Regional Volunteer Leaderboard</h4>
              </div>
              <table className="fl-dash-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Hero Name</th>
                    <th>Trips</th>
                    <th>Total Rescued</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "rgba(212, 168, 67, 0.05)" }}>
                    <td>
                      🥇 <strong>1st</strong>
                    </td>
                    <td>Bambang Pamungkas</td>
                    <td>68</td>
                    <td>510 Kg</td>
                  </tr>
                  <tr>
                    <td>
                      🥈 <strong>2nd</strong>
                    </td>
                    <td>Siti Aminah</td>
                    <td>51</td>
                    <td>410 Kg</td>
                  </tr>
                  <tr
                    style={{
                      borderLeft: "3px solid #10b981",
                      background: "rgba(16, 185, 129, 0.03)",
                    }}
                  >
                    <td>
                      🏅 <strong>5th (You)</strong>
                    </td>
                    <td>
                      <strong>Rian Kusuma</strong>
                    </td>
                    <td>
                      <strong>42</strong>
                    </td>
                    <td>
                      <strong>340 Kg</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Sisi Kanan: Badges Milik User */}
            <div
              style={{
                width: "300px",
                background: "#0b1a13",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "20px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 15px 0",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                Your Earned Badges
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(255,255,255,0.03)",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      padding: "8px",
                      borderRadius: "50%",
                      color: "#10b981",
                    }}
                  >
                    <Truck size={20} />
                  </div>
                  <div>
                    <h6
                      style={{ margin: 0, color: "#fff", fontSize: "0.85rem" }}
                    >
                      Speedy Rescuer
                    </h6>
                    <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.6 }}>
                      Deliver within 1 hour 5 times.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(255,255,255,0.03)",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(212, 168, 67, 0.1)",
                      padding: "8px",
                      borderRadius: "50%",
                      color: "#d4a843",
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <h6
                      style={{ margin: 0, color: "#fff", fontSize: "0.85rem" }}
                    >
                      Centurion Saver
                    </h6>
                    <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.6 }}>
                      Rescued over 300+ kg of food items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
  

import React from "react";
import {
  TrendingUp,
  PlusCircle,
  Truck,
  FileText,
  LogOut,
  Award,
  ShieldCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";

export default function DonorDashboard({ onBrandClick }) {
  return (
    <div className="fl-dash-container">
      {/* SIDEBAR */}
      <aside className="fl-dash-sidebar">
        onClick={onBrandClick}
        <div className="fl-dash-logo-area">
          <div className="fl-dash-logo-icon">FL</div>
          <span className="fl-dash-logo-text">
            Food<span className="fl-gold-text">Loop</span>
          </span>
        </div>
        <nav className="fl-dash-nav">
          <a href="#" className="fl-dash-link active">
            <TrendingUp size={18} /> Overview
          </a>
          <a href="#" className="fl-dash-link">
            <PlusCircle size={18} /> Manage Listings
          </a>
          <a href="#" className="fl-dash-link">
            <Truck size={18} /> Logistics & Track
          </a>
          <a href="#" className="fl-dash-link">
            <FileText size={18} /> ESG Reporting
          </a>
        </nav>
        <button className="fl-dash-logout-btn">
          <LogOut size={18} /> Sign Out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="fl-dash-main">
        <header className="fl-dash-header">
          <div>
            <h2>
              Welcome Back,{" "}
              <span className="fl-gold-text">Green Cafe Jakarta</span>
            </h2>
            <p>POV: Food Donor • Active Food Rescue Panel</p>
          </div>
          <button className="fl-dash-btn-primary">
            <PlusCircle size={16} /> Create New Listing
          </button>
        </header>

        {/* CARDS METRIK */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Total Pangan Terselamatkan</span>
            <h3>
              1,250 <small>Kg</small>
            </h3>
            <p>
              <Award size={14} /> Setara dengan 2,500+ porsi makanan.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-emerald">
              Donasi Aktif Hari Ini
            </span>
            <h3>
              4 <small>Listings</small>
            </h3>
            <p>
              <Truck size={14} /> 2 Penjemputan selesai, 2 di antrean.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-teal">
              Reduksi Emisi Gas Metana
            </span>
            <h3>
              3.4 <small>Tons CO₂e</small>
            </h3>
            <p>
              <ShieldCheck size={14} /> Berhasil dialihkan dari TPA.
            </p>
          </div>
        </section>

        {/* TRACKER TABLE */}
        <section className="fl-dash-table-box">
          <div className="fl-table-header">
            <h4>Active Donation Tracker</h4>
            <span className="fl-sync-badge">
              <Calendar size={12} /> Real-time Sync
            </span>
          </div>
          <table className="fl-dash-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Assigned Volunteer</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Assorted Artisan Bread</strong>
                </td>
                <td className="text-emerald">12 Kg</td>
                <td>Budi Santoso</td>
                <td>
                  <span className="badge badge-success">Picked Up</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Daily Pastry Mix</strong>
                </td>
                <td className="text-emerald">8 Kg</td>
                <td>—</td>
                <td>
                  <span className="badge badge-warning">Searching...</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ALERTS SYSTEM */}
        <footer className="fl-dash-alert">
          <AlertTriangle className="text-gold" size={20} />
          <div>
            <h5>System Analytics Advice</h5>
            <p>
              Data internal mendeteksi lonjakan sisa produk jenis Baked Goods
              sebesar 15% setiap hari Jumat malam.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

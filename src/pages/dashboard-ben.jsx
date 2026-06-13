import React from "react";
import {
  Award,
  Box,
  Heart,
  Bell,
  CheckCircle,
  LogOut,
  ClipboardList,
} from "lucide-react";

export default function BeneficiaryDashboard({ onBrandClick }) {
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
            <Box size={18} /> Food Request
          </a>
          <a href="#" className="fl-dash-link">
            <ClipboardList size={18} /> Incoming Allocation
          </a>
          <a href="#" className="fl-dash-link">
            <Heart size={18} /> Impact Analytics
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
              Selamat Datang,{" "}
              <span className="fl-gold-text">Panti Asuhan Kasih Bunda</span>
            </h2>
            <p>POV: Certified Food Beneficiary • Terverifikasi</p>
          </div>
          <button className="fl-dash-btn-primary">
            <Box size={16} /> Ajukan Kebutuhan Pangan
          </button>
        </header>

        {/* METRICS GRID */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Bantuan Pangan Diterima</span>
            <h3>
              850 <small>Porsi</small>
            </h3>
            <p>
              <Heart size={14} className="text-rose" /> Menghemat biaya dapur
              hingga 35% bulan ini.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label">Status Alokasi Hari Ini</span>
            <h3>
              1 <small>Pengiriman</small>
            </h3>
            <p>
              <Bell size={14} className="text-gold" /> Driver sedang menuju ke
              lokasi Anda.
            </p>
          </div>
        </section>

        {/* INCOMING SUPPLY LIST */}
        <section className="fl-dash-table-box">
          <div className="fl-table-header">
            <h4>Pantauan Pasokan Makanan Masuk</h4>
          </div>
          <table className="fl-dash-table">
            <thead>
              <tr>
                <th>Asal Makanan</th>
                <th>Menu / Jenis Pangan</th>
                <th>Kurir Relawan</th>
                <th>Estimasi Tiba</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Green Cafe Jakarta</strong>
                </td>
                <td>12 Kg Roti & Pastry Campur</td>
                <td>Rian Kusuma (Motorcycle)</td>
                <td>
                  <span className="badge badge-warning">
                    Dalam Perjalanan (15 Menit)
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hotel Grand Surya</strong>
                </td>
                <td>30 Porsi Nasi Kotak Prasmanan</td>
                <td>Siti Aminah</td>
                <td>
                  <span className="badge badge-success">Diterima Kemarin</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

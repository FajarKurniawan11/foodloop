import React from "react";
import {
  Truck,
  MapPin,
  CheckCircle,
  Navigation,
  Award,
  AlertTriangle,
  LogOut,
  Calendar,
} from "lucide-react";

export default function VolunteerDashboard({ onBrandClick }) {
  return (
    <div className="fl-dash-container">
      {/* SIDEBAR */}
      <aside className="fl-dash-sidebar">
        <div className="fl-dash-logo-area">
          <div className="fl-dash-logo-icon">FL</div>
          <span className="fl-dash-logo-text">
            Food<span className="fl-gold-text">Loop</span>
          </span>
        </div>
        <nav className="fl-dash-nav">
          <a href="#" className="fl-dash-link active">
            <Truck size={18} /> Active Rescue
          </a>
          <a href="#" className="fl-dash-link">
            <Calendar size={18} /> Delivery History
          </a>
          <a href="#" className="fl-dash-link">
            <Award size={18} /> Leaderboard & Badges
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
              Halo, <span className="fl-gold-text">Rian Kusuma</span>
            </h2>
            <p>POV: Volunteer Rescue Squad • On-Duty Fleet</p>
          </div>
          <div className="fl-status-badge-online">● Active & Online</div>
        </header>

        {/* METRICS GRID */}
        <section className="fl-dash-cards-grid">
          <div className="fl-dash-card">
            <span className="fl-card-label">Total Penjemputan Selesai</span>
            <h3>
              42 <small>Trip</small>
            </h3>
            <p>
              <CheckCircle size={14} /> Berhasil mendistribusikan 340 kg
              makanan.
            </p>
          </div>
          <div className="fl-dash-card">
            <span className="fl-card-label text-gold">
              Eco-Points Terkumpul
            </span>
            <h3>
              1,550 <small>Pts</small>
            </h3>
            <p>
              <Award size={14} /> Bisa ditukar voucher bensin/sembako.
            </p>
          </div>
        </section>

        {/* ACTIVE JOB ROUTING TRACKER */}
        <section className="fl-dash-table-box">
          <div className="fl-table-header">
            <h4>Tugas Penjemputan Aktif</h4>
            <span className="fl-sync-badge">
              <Navigation size={12} /> Rute Teroptimasi AI
            </span>
          </div>

          <div className="fl-route-card">
            <div className="fl-route-step">
              <div className="fl-icon-marker marker-start">
                <MapPin size={16} />
              </div>
              <div className="fl-route-info">
                <span className="fl-step-label">AMBIL DI (DONATUR)</span>
                <h5>Green Cafe Jakarta</h5>
                <p>Assorted Artisan Bread (12 Kg) • Expired: 3 Jam lagi</p>
              </div>
            </div>

            <div className="fl-route-line"></div>

            <div className="fl-route-step">
              <div className="fl-icon-marker marker-end">
                <MapPin size={16} />
              </div>
              <div className="fl-route-info">
                <span className="fl-step-label">ANTAR KE (BENEFICIARY)</span>
                <h5>Panti Asuhan Kasih Bunda</h5>
                <p>Jl. Melati No. 12, Jakarta Pusat (15 Anak)</p>
              </div>
            </div>

            <div className="fl-route-actions">
              <button className="fl-btn-secondary">
                <AlertTriangle size={14} /> Laporkan Kendala
              </button>
              <button className="fl-btn-primary">
                <CheckCircle size={14} /> Konfirmasi Selesai Antar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import "../styles/dashboard.css";

// DATA (Tetap aman tidak diubah)
const GHI_DATA_2024 = [
  { country: "Timor-Leste", score: 27, severity: "serious" },
  { country: "Myanmar", score: 15.7, severity: "moderate" },
  { country: "Malaysia", score: 12.7, severity: "moderate" },
  { country: "Laos", score: 19.8, severity: "moderate" },
  { country: "Cambodia", score: 14.7, severity: "moderate" },
  { country: "Indonesia", score: 16.9, severity: "moderate" },
  { country: "Philippines", score: 14.4, severity: "moderate" },
  { country: "Vietnam", score: 11.3, severity: "moderate" },
  { country: "Thailand", score: 10.1, severity: "moderate" },
];

const WASTE_COMPOSITION = [
  { label: "Food & Organic Waste", value: 39.4, color: "#2d9b6f" },
  { label: "Plastic", value: 17.0, color: "#5ec4a1" },
  { label: "Paper & Cardboard", value: 11.0, color: "#a8dac9" },
  { label: "Glass", value: 5.0, color: "#74b8a0" },
  { label: "Metal", value: 4.0, color: "#3d7a60" },
  { label: "Other", value: 23.6, color: "#c8e8d8" },
];

const HOW_STEPS = [
  {
    icon: "🍽️",
    title: "Food Donors",
    sub: "Restaurants & Cafes",
    desc: "Snap a photo and upload details of your safe, surplus food to our platform in under 60 seconds.",
    detail:
      "Donors simply photograph the food, fill a short form (type, quantity, location, expiry window), and our system auto-matches with the nearest available volunteer and beneficiary cluster.",
    color: "#1e7a56",
  },
  {
    icon: "🛵",
    title: "Volunteers",
    sub: "Ready to Move",
    desc: "Nearby volunteers receive instant alerts, verify food quality on-site, and pick it up.",
    detail:
      "Volunteers get real-time push alerts. After confirming, they verify food condition, take a photo as proof, and deliver to the designated distribution point or directly to recipients.",
    color: "#2d9b6f",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Beneficiaries",
    sub: "Families & Communities",
    desc: "Fresh, edible food is delivered directly to the doorsteps of families and communities in need.",
    detail:
      "Recipients are registered through our NGO partners. Location data is encrypted and every distribution is logged for full transparency to all stakeholders.",
    color: "#3ab583",
  },
  {
    icon: "♻️",
    title: "Waste Management",
    sub: "Circular & Sustainable",
    desc: "Any food unfit for consumption is rerouted to biogas or compost partners — never the landfill.",
    detail:
      "Organic waste that cannot be distributed is converted into biogas (energy) or compost (fertilizer). Real-time environmental impact reports are available on every donor's dashboard.",
    color: "#56c99a",
  },
];

const ECOSYSTEM_CARDS = [
  {
    icon: "🌱",
    tag: "Environmental Impact",
    title: "Slash Methane Emissions",
    desc: "Every kilogram of food rescued prevents methane release from landfills. Our platform has already prevented hundreds of tonnes of CO₂ equivalent.",
  },
  {
    icon: "🤝",
    tag: "Social Impact",
    title: "Real-Time Food Logistics",
    desc: "Building a solid, transparent food distribution network that reaches underserved communities instantly using geolocation technology.",
  },
  {
    icon: "📊",
    tag: "Economic Value",
    title: "Cut Business Food Losses",
    desc: "Helping food businesses track surplus, reduce financial losses, and generate automated food safety reports for compliance.",
  },
  {
    icon: "🔬",
    tag: "Tech Innovation",
    title: "AI Food Assessment",
    desc: "Our AI evaluates food edibility from photos in seconds, dramatically reducing reliance on manual on-site inspection.",
  },
  {
    icon: "🌏",
    tag: "Policy Impact",
    title: "Data-Driven Policy",
    desc: "Our aggregated food distribution data helps governments design evidence-based food security policies at scale.",
  },
];

// SUB-COMPONENTS (Sudah diperbaiki jalurnya)

function Navbar({ onNavigateToLogin }) {
  // <-- Ditambahkan di sini agar menerima trigger
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fl-nav ${scrolled ? "fl-nav--scrolled" : ""}`}>
      <div className="fl-nav__logo">
        <span className="fl-nav__logo-icon">✦</span> FoodLoop
      </div>
      <div className="fl-nav__links">
        <a href="#how">How It Works</a>
        <a href="#why">Our Impact</a>
        <a href="#ecosystem">About Us</a>

        {/* Diubah menjadi <button> dan memanggil fungsi, CSS aman terkendali */}
        <button
          onClick={onNavigateToLogin}
          className="fl-nav__signin"
          style={{
            background: "none",
            border: "none",
            font: "inherit",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

function Hero({ onNavigateToLogin }) {
  // <-- Ditambahkan juga untuk tombol hero jika perlu
  return (
    <section className="fl-hero">
      <div className="fl-hero__bg" />
      <div className="fl-hero__content">
        <p className="fl-hero__eyebrow">
          Together, let's loop goodness and reduce food waste.
        </p>
        <h1 className="fl-hero__headline">
          Share Excess Food,
          <br />
          <span className="fl-hero__headline--accent">Zero the Waste.</span>
        </h1>
        <div className="fl-hero__cta">
          {/* Mengarahkan tombol Join ke Form juga */}
          <button
            onClick={onNavigateToLogin}
            className="fl-btn fl-btn--primary"
            style={{ border: "none", cursor: "pointer" }}
          >
            Join as Volunteer
          </button>
          <a href="#how" className="fl-btn fl-btn--outline">
            Donate Food
          </a>
        </div>
        <div className="fl-hero__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
            alt="Children receiving food"
            className="fl-hero__image"
          />
          <div className="fl-hero__image-badge">
            <span className="fl-hero__image-badge-num">10K+</span>
            <span>Families helped</span>
          </div>
          <div className="fl-hero__image-badge2">
            <span className="fl-hero__image-badge-num">40T</span>
            <span>Food rescued</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [active, setActive] = useState(null);
  return (
    <section className="fl-section fl-how" id="how">
      <p className="fl-section__label">Our Platform</p>
      <h2 className="fl-section__title">How FoodLoop Works</h2>
      <p className="fl-section__sub">
        Bridging the management of surplus food from donors to be distributed to
        beneficiaries in need, while integrating the management of organic waste
        into circular raw materials.
      </p>
      <div className="fl-how__grid">
        {HOW_STEPS.map((step, i) => (
          <div
            key={i}
            className={`fl-how__card ${active === i ? "fl-how__card--active" : ""}`}
            onClick={() => setActive(active === i ? null : i)}
            style={{ "--card-color": step.color }}
          >
            <div className="fl-how__card-header">
              <span className="fl-how__icon">{step.icon}</span>
              <span className="fl-how__step-num">0{i + 1}</span>
            </div>
            <h3 className="fl-how__card-title">{step.title}</h3>
            <p className="fl-how__card-sub">{step.sub}</p>
            <p className="fl-how__card-desc">{step.desc}</p>
            <div className="fl-how__card-detail">
              <div className="fl-how__card-detail-inner">
                <hr className="fl-how__divider" />
                <p>{step.detail}</p>
                <span className="fl-how__tag">Learn more →</span>
              </div>
            </div>
            <div className="fl-how__card-hint">
              {active === i ? "Click to collapse ↑" : "Click for details ↓"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PieChart({ data, size = 260 }) {
  const [hovered, setHovered] = useState(null);
  const cx = size / 2,
    cy = size / 2,
    r = size * 0.38,
    ri = size * 0.2;
  let cumulative = 0;
  const total = data.reduce((s, d) => s + d.value, 0);

  const slices = data.map((d) => {
    const start = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
    cumulative += d.value;
    const end = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(start),
      y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end),
      y2 = cy + r * Math.sin(end);
    const ix1 = cx + ri * Math.cos(start),
      iy1 = cy + ri * Math.sin(start);
    const ix2 = cx + ri * Math.cos(end),
      iy2 = cy + ri * Math.sin(end);
    return {
      ...d,
      path: `M${ix1},${iy1} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${ix2},${iy2} A${ri},${ri} 0 ${large} 0 ${ix1},${iy1} Z`,
    };
  });

  return (
    <div className="fl-pie-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((s, i) => (
          <path
            key={i}
            d={s.path}
            fill={s.color}
            stroke="rgba(10,30,22,0.6)"
            strokeWidth="1.5"
            opacity={hovered === null || hovered === i ? 1 : 0.3}
            transform={
              hovered === i
                ? `translate(${Math.cos((i / data.length) * 2 * Math.PI - Math.PI / 2) * 7},${Math.sin((i / data.length) * 2 * Math.PI - Math.PI / 2) * 7})`
                : ""
            }
            style={{ transition: "all 0.22s", cursor: "pointer" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fill="#e8f5ef"
          fontSize="30"
          fontWeight="800"
        >
          {hovered !== null ? `${data[hovered].value}%` : "39.4%"}
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          fill="#9ecfbc"
          fontSize="9.5"
        >
          {hovered !== null ? data[hovered].label : "is Food Waste"}
        </text>
      </svg>
      <div className="fl-pie-legend">
        {data.map((d, i) => (
          <div
            key={i}
            className="fl-pie-legend__item"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              opacity: hovered === null || hovered === i ? 1 : 0.35,
              transition: "opacity 0.2s",
            }}
          >
            <span
              className="fl-pie-legend__dot"
              style={{ background: d.color }}
            />
            <span>
              {d.label} — <b>{d.value}%</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ data }) {
  const [hovered, setHovered] = useState(null);
  const sorted = [...data].sort((a, b) => b.score - a.score);
  const maxScore = 32;
  const barH = 30,
    gap = 10,
    paddingLeft = 110,
    chartW = 360;

  const colorFor = (s, isHov) => {
    if (isHov) return "#d4a843";
    if (s >= 20) return "#c0673a";
    if (s >= 15) return "#2d9b6f";
    return "#56c99a";
  };

  return (
    <div className="fl-bar-wrap">
      <svg
        width="100%"
        viewBox={`0 0 ${chartW + paddingLeft + 60} ${sorted.length * (barH + gap) + 36}`}
        style={{ overflow: "visible" }}
      >
        {sorted.map((d, i) => {
          const y = i * (barH + gap) + 15;
          const w = (d.score / maxScore) * chartW;
          const isIndo = d.country === "Indonesia";
          const isHov = hovered === i;
          return (
            <g
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <text
                x={paddingLeft - 10}
                y={y + barH / 2 + 4}
                textAnchor="end"
                fill={isIndo ? "#d4a843" : isHov ? "#fff" : "#b8d9cc"}
                fontSize="11.5"
                fontWeight={isIndo ? "700" : "400"}
              >
                {d.country}
              </text>
              <rect
                x={paddingLeft}
                y={y}
                width={w}
                height={barH}
                rx="5"
                fill={colorFor(d.score, isHov)}
                style={{ transition: "all 0.22s" }}
              />
              {isIndo && (
                <rect
                  x={paddingLeft - 3}
                  y={y - 2}
                  width={w + 6}
                  height={barH + 4}
                  rx="6"
                  fill="none"
                  stroke="#d4a843"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
              )}
              <text
                x={paddingLeft + w + 8}
                y={y + barH / 2 + 4}
                fill={isHov ? "#fff" : "#9ecfbc"}
                fontSize="11.5"
                fontWeight="700"
              >
                {d.score}
              </text>
            </g>
          );
        })}
        <text
          x={paddingLeft}
          y={sorted.length * (barH + gap) + 28}
          fill="rgba(154,200,179,0.4)"
          fontSize="9"
        >
          Source: Global Hunger Index 2024 · Scale 0–100 (higher = more severe)
        </text>
      </svg>
      {hovered !== null && (
        <div className="fl-bar-tooltip">
          <b>{sorted[hovered].country}</b>
          <br />
          Score: <b>{sorted[hovered].score}</b>
          <br />
          Level:{" "}
          <b>
            {sorted[hovered].severity === "serious" ? "Serious" : "Moderate"}
          </b>
        </div>
      )}
    </div>
  );
}

function WhyMatters() {
  const [tab, setTab] = useState("waste");
  return (
    <section className="fl-section fl-why" id="why">
      <p className="fl-section__label">Why It Matters</p>
      <h2 className="fl-section__title">Why FoodLoop Matters?</h2>
      <p className="fl-section__sub">
        Indonesia faces a paradox: landfills overflowing with organic waste,
        while millions of families go undernourished. FoodLoop is the technology
        infrastructure that turns this crisis into opportunity.
      </p>

      <div className="fl-why__tabs">
        <button
          className={`fl-tab ${tab === "waste" ? "fl-tab--active" : ""}`}
          onClick={() => setTab("waste")}
        >
          National Waste Composition
        </button>
        <button
          className={`fl-tab ${tab === "ghi" ? "fl-tab--active" : ""}`}
          onClick={() => setTab("ghi")}
        >
          ASEAN Hunger Index
        </button>
      </div>

      <div className="fl-why__chart-area">
        {tab === "waste" && (
          <div className="fl-why__chart-panel">
            <div className="fl-why__chart-info">
              <h3>39.4% of National Waste is Food</h3>
              <p>
                Data from Indonesia's Ministry of Environment shows nearly 40%
                of total national waste is food and organic residue — equivalent
                to millions of tonnes ending up in landfills every year,
                generating methane emissions that damage the climate.
              </p>
              <div className="fl-why__stat-row">
                <div className="fl-why__stat">
                  <span className="fl-why__stat-num">~30M</span>
                  <span>Tonnes of food waste/year</span>
                </div>
                <div className="fl-why__stat">
                  <span className="fl-why__stat-num">4–5%</span>
                  <span>GDP lost to food waste</span>
                </div>
              </div>
              <p className="fl-why__source">
                Hover each segment for detail · Source: KLHK 2023
              </p>
            </div>
            <PieChart data={WASTE_COMPOSITION} size={260} />
          </div>
        )}

        {tab === "ghi" && (
          <div className="fl-why__chart-panel">
            <div className="fl-why__chart-info">
              <h3>Hunger Levels Across Southeast Asia (2024)</h3>
              <p>
                A stark paradox: Indonesia holds massive food surplus yet
                remains mid-table on the ASEAN hunger index. Timor-Leste and
                Myanmar still sit at <em>serious</em> levels. Efficient food
                redistribution is the missing link.
              </p>
              <div className="fl-why__legend-row">
                <span>
                  <span className="fl-dot" style={{ background: "#56c99a" }} />{" "}
                  Low (&lt;15)
                </span>
                <span>
                  <span className="fl-dot" style={{ background: "#2d9b6f" }} />{" "}
                  Moderate (15–20)
                </span>
                <span>
                  <span className="fl-dot" style={{ background: "#c0673a" }} />{" "}
                  Serious (&gt;20)
                </span>
              </div>
              <div className="fl-why__indo-callout">
                <span>🇮🇩</span>
                <span>
                  Indonesia highlighted in{" "}
                  <b style={{ color: "#d4a843" }}>gold</b> — food redistribution
                  here has the largest national impact.
                </span>
              </div>
              <p className="fl-why__source">
                Hover each bar for detail · Source: Global Hunger Index 2024
              </p>
            </div>
            <BarChart data={GHI_DATA_2024} />
          </div>
        )}
      </div>

      <div className="fl-why__callout">
        <span className="fl-why__callout-icon">💡</span>
        <p>
          By rescuing just <strong>5% of Indonesia's food surplus</strong>, we
          could feed more than <strong>2 million families</strong> every single
          day. FoodLoop is the infrastructure that makes that possible.
        </p>
      </div>
    </section>
  );
}

function EcosystemCarousel() {
  const trackRef = useRef(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    const speed = 0.5;
    let paused = false;
    const cards = track.querySelectorAll(".fl-eco__card");
    const cardW = (cards[0]?.offsetWidth || 280) + 24;
    const totalW = cardW * ECOSYSTEM_CARDS.length;

    track.addEventListener("mouseenter", () => (paused = true));
    track.addEventListener("mouseleave", () => (paused = false));

    const raf = setInterval(() => {
      if (paused) return;
      x -= speed;
      if (Math.abs(x) >= totalW) x = 0;
      track.style.transform = `translateX(${x}px)`;
    }, 16);
    return () => clearInterval(raf);
  }, []);

  const doubled = [...ECOSYSTEM_CARDS, ...ECOSYSTEM_CARDS];

  return (
    <section className="fl-section fl-eco" id="ecosystem">
      <p className="fl-section__label">Platform Value</p>
      <h2 className="fl-section__title">Our Ecosystem Value</h2>
      <p className="fl-section__sub">
        How our digital ecosystem turns a national crisis into a sustainable
        future.
      </p>
      <div className="fl-eco__outer">
        <div className="fl-eco__track" ref={trackRef}>
          {doubled.map((card, i) => (
            <div className="fl-eco__card" key={i}>
              <span className="fl-eco__card-icon">{card.icon}</span>
              <span className="fl-eco__card-tag">{card.tag}</span>
              <h3 className="fl-eco__card-title">{card.title}</h3>
              <p className="fl-eco__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="fl-footer">
      <div className="fl-footer__inner">
        <div className="fl-footer__brand">
          <div className="fl-footer__logo">
            <span className="fl-nav__logo-icon">✦</span> FoodLoop
          </div>
          <p>
            A technology-driven digital ecosystem bridging the gap between food
            surplus and community nutritional needs in Indonesia.
          </p>
          <div className="fl-footer__socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="X / Twitter">
              X
            </a>
          </div>
        </div>
        <div className="fl-footer__col">
          <h4>Features</h4>
          <a href="#">Surplus Donation</a>
          <a href="#">Volunteer Pickup</a>
          <a href="#">Waste Tracking</a>
        </div>
        <div className="fl-footer__col">
          <h4>Learn more</h4>
          <a href="#">Our Mission</a>
          <a href="#">Hunger &amp; Waste Data</a>
          <a href="#">Impact Reports</a>
          <a href="#">Eco-Partners</a>
        </div>
        <div className="fl-footer__col">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Food Safety Guidelines</a>
          <a href="#">Terms &amp; Privacy</a>
        </div>
      </div>
      <div className="fl-footer__bottom">
        &copy; {new Date().getFullYear()} FoodLoop &middot; Together, Zero the
        Waste.
      </div>
    </footer>
  );
}

// MAIN EXPORT (Meneruskan props ke sub-komponen dengan benar)
export default function Home({ onNavigateToLogin }) {
  return (
    <div className="fl-page">
      {/* Mengirimkan fungsi ke sub-komponen Navbar & Hero */}
      <Navbar onNavigateToLogin={onNavigateToLogin} />
      <Hero onNavigateToLogin={onNavigateToLogin} />

      <HowItWorks />
      <WhyMatters />
      <EcosystemCarousel />
      <Footer />
    </div>
  );
}

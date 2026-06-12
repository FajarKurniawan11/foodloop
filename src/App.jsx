import React, { useState } from "react";
import Home from "./pages/home";
import AuthForm from "./pages/login";

// Import file dashboard
import DonorDashboard from "./pages/dashboard-don";
import VolunteerDashboard from "./pages/dashboard-vol";
import BeneficiaryDashboard from "./pages/dashboard-ben";

function App() {
  // 1. Awal buka aplikasi, kunci ke halaman utama ("home")
  const [currentPage, setCurrentPage] = useState("home");
  const [userRole, setUserRole] = useState("donor");

  // 2. Fungsi saat user sukses login dari AuthForm
  const handleLoginSuccess = (selectedRole) => {
    setUserRole(selectedRole);
    setCurrentPage("dashboard"); // Pindah ke dashboard setelah isi form
  };

  // 3. Fungsi untuk mengarahkan dari Home ke Form Login
  const handleGoToLogin = () => {
    setCurrentPage("login"); // Menuju ke halaman form login
  };

  // 4. Fungsi universal untuk kembali ke beranda
  const handleGoHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="App">
      {/* HALAMAN 1: HOME / MAIN PAGE */}
      {currentPage === "home" && <Home onNavigateToLogin={handleGoToLogin} />}

      {/* HALAMAN 2: FORM LOGIN / REGISTER */}
      {currentPage === "login" && (
        <AuthForm
          onLoginSuccess={handleLoginSuccess}
          onBrandClick={handleGoHome}
        />
      )}

      {/* HALAMAN 3: DASHBOARD (Baru terbuka setelah sukses dari form) */}
      {currentPage === "dashboard" && (
        <div>
          {userRole === "donor" && (
            <DonorDashboard onBrandClick={handleGoHome} />
          )}
          {userRole === "volunteer" && (
            <VolunteerDashboard onBrandClick={handleGoHome} />
          )}
          {userRole === "beneficiary" && (
            <BeneficiaryDashboard onBrandClick={handleGoHome} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;

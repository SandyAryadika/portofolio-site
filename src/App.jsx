// src/App.jsx
import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  // --- 1. CEK UKURAN LAYAR (RESPONSIF) ---
  useEffect(() => {
    const handleResize = () => {
      // Batas 1024px (Laptop/PC)
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Cek awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 2. FITUR KEAMANAN (Disederhanakan) ---
  useEffect(() => {
    // Kita hapus blokir klik kanan dan keyboard agar user bisa Inspect & Copy
    
    // Opsional: Tetap cegah Drag & Drop Gambar jika Anda ingin melindungi aset visual saja
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // --- 3. TAMPILAN WARNING (HANYA JIKA BUKAN DESKTOP) ---
  if (!isDesktop) {
    return (
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1f204a",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}>
        <FaLaptopCode size={80} style={{ marginBottom: "20px", color: "#6366f1" }} />
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>Desktop Mode Only</h2>
        <p style={{ maxWidth: "500px", lineHeight: "1.6", fontSize: "1.1rem", color: "#e5e7eb" }}>
          Website ini menggunakan animasi kompleks yang dioptimalkan untuk layar besar.
        </p>
        <p style={{ marginTop: "20px", fontWeight: "bold", color: "#6366f1" }}>
          Silakan buka melalui Laptop atau PC untuk pengalaman terbaik.
        </p>
      </div>
    );
  }

  // --- 4. TAMPILAN UTAMA ---
  return (
    <div 
      style={{ 
        width: "100%", 
        height: "100%" 
        /* userSelect: "none" DIHAPUS agar user bisa copy teks */
      }}
    >
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
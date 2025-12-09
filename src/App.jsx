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

  // --- 2. FITUR KEAMANAN (ANTI-COPY, ANTI-KLIK KANAN, DLL) ---
  useEffect(() => {
    // A. Mencegah Klik Kanan
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // B. Mencegah Shortcut Developer Tools (F12, Ctrl+Shift+I, Ctrl+U, dll)
    const handleKeyDown = (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
      }
      // Ctrl+P (Print)
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
      }
    };

    // C. Mencegah Drag & Drop Gambar
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Pasang Event Listener Global
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    // Bersihkan saat unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
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
        userSelect: "none", // Teks warning juga tidak bisa dicopy
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

  // --- 4. TAMPILAN UTAMA (LAYOUT TIDAK BERUBAH) ---
  return (
    // Wrapper div ini hanya berfungsi untuk mematikan seleksi teks (user-select: none)
    // Tidak akan merubah layout MainLayout di dalamnya.
    <div 
      style={{ 
        userSelect: "none",           /* Standar modern */
        WebkitUserSelect: "none",     /* Safari/Chrome */
        MozUserSelect: "none",        /* Firefox */
        msUserSelect: "none",         /* IE/Edge */
        width: "100%",                /* Pastikan full width */
        height: "100%"                /* Pastikan full height */
      }}
    >
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
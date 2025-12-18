// src/App.jsx
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import HomeMobile from "./pages/HomeMobile"; // Import Halaman Mobile Baru
import "./App.css";

function App() {
  // State untuk menyimpan status apakah sedang di layar mobile atau tidak
  const [isMobile, setIsMobile] = useState(false);

  // --- 1. LOGIC DETEKSI UKURAN LAYAR ---
  useEffect(() => {
    const checkScreenSize = () => {
      // Jika lebar layar kurang dari 900px, aktifkan mode Mobile
      setIsMobile(window.innerWidth < 900);
    };

    // Cek saat pertama kali website dibuka
    checkScreenSize();

    // Cek terus menerus jika user mengubah ukuran layar (resize)
    window.addEventListener("resize", checkScreenSize);

    // Bersihkan listener saat komponen dilepas (Cleanup)
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // --- 2. FITUR KEAMANAN (ANTI-COPY, ANTI-KLIK KANAN, DLL) ---
  useEffect(() => {
    // Mencegah Klik Kanan
    const handleContextMenu = (e) => e.preventDefault();

    // Mencegah Shortcut Developer Tools & Print/Save
    const handleKeyDown = (e) => {
      // Tombol F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I, J, C (Inspect Element / Console)
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
      }
      // Ctrl+U (View Source), Ctrl+S (Save), Ctrl+P (Print)
      if (e.ctrlKey && ["u", "s", "p"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    // Mencegah Drag Gambar
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Pasang Event Listener
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // --- TAMPILAN UTAMA ---
  return (
    <div 
      style={{ 
        userSelect: "none",        /* Mencegah seleksi teks standar */
        WebkitUserSelect: "none",  /* Safari */
        MozUserSelect: "none",     /* Firefox */
        msUserSelect: "none",      /* IE/Edge */
        width: "100%", 
        height: "100%" 
      }}
    >
      <MainLayout>
        {/* LOGIC SWITCHING: Jika Mobile tampilkan HomeMobile, Jika Desktop tampilkan Home */}
        {isMobile ? (
          <HomeMobile /> 
        ) : (
          <Home />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
// src/App.jsx
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import HomeMobile from "./pages/HomeMobile"; // Pastikan file ini sudah dibuat
import "./App.css";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  // --- 1. CEK UKURAN LAYAR (RESPONSIF) ---
  useEffect(() => {
    const handleResize = () => {
      // Kita gunakan batas 1024px atau 900px untuk menentukan mode mobile
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Cek saat pertama kali load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 2. FITUR KEAMANAN (ANTI-DRAG SAJA) ---
  useEffect(() => {
    // Klik kanan (Inspect) dan Copy diperbolehkan (tidak ada pencegahan)
    
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

  // --- 3. TAMPILAN UTAMA (LOGIC SWITCHING) ---
  return (
    <div 
      style={{ 
        width: "100%", 
        height: "100%",
        /* userSelect: "none" Dihapus agar user bisa copy teks */
      }}
    >
      <MainLayout>
        {/* Jika layar Desktop (>= 1024px) tampilkan Home (Versi Berat/Animasi).
          Jika layar Mobile (< 1024px) tampilkan HomeMobile (Versi Ringan/Simple).
        */}
        {isDesktop ? (
          <Home />
        ) : (
          <HomeMobile />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
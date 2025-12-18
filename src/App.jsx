// src/App.jsx
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  // --- FITUR KEAMANAN (ANTI-COPY, ANTI-KLIK KANAN, DLL) ---
  useEffect(() => {
    // 1. Mencegah Klik Kanan
    const handleContextMenu = (e) => e.preventDefault();

    // 2. Mencegah Shortcut Developer Tools & Print/Save
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

    // 3. Mencegah Drag Gambar (Agar gambar tidak bisa ditarik/didownload)
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Pasang Event Listener
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    // Bersihkan Event Listener saat komponen di-unmount (Best Practice)
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
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
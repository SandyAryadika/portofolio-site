// src/components/Navbar.jsx
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk mengubah status menu (buka/tutup)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- FUNGSI FIX SCROLL HOME ---
  const scrollToTop = (e) => {
    e.preventDefault(); // 1. Mencegah lompatan kasar bawaan browser
    
    // 2. Scroll halus ke posisi paling atas (0,0)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 3. SECARA MANUAL MENAMBAHKAN #home KE URL (Tanpa lompat)
    window.history.pushState(null, null, "#home");

    setIsOpen(false); // Tutup menu mobile
  };

  return (
    <nav className="glass-nav">
      {/* Tombol Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
      </div>

      {/* Daftar Link */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* PERBAIKAN DI SINI: href diarahkan ke #home */}
        <li>
          <a href="#home" onClick={scrollToTop}>Home</a>
        </li>
        
        <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificate</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}
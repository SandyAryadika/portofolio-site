import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk mengubah status menu (buka/tutup)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="glass-nav">
      {/* Tombol Hamburger (Hanya muncul di HP) */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Kita buat 3 garis untuk ikon menu */}
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
      </div>

      {/* Daftar Link */}
      {/* Tambahkan class "active" jika isOpen bernilai true */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
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
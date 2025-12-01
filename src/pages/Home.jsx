// src/pages/Home.jsx
import "../styles/home.css";

// PENTING: Ganti 'pixel-bg.jpg' dengan nama file gambar yang kamu simpan di assets
import pixelBg from "../assets/images/time.png"; 

export default function Home() {
  return (
    <div className="main-container">
      
      {/* --- HERO SECTION --- */}
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h1>
            Playground for curiosity<br />
            — code, design, and experiments.
          </h1>
          <p>Cloud Computing | Full-stack experiments | Team Lead | UI/UX Enthusiast</p>
          
          {/* Tombol Aksi (Call to Action) */}
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#projects" className="btn secondary">Download CV</a>
          </div>
        </div>
      </section>

      {/* --- TRIVIA SECTION (BARU) --- */}
      <section className="trivia-section">
        {/* Gambar background diambil dari import pixelBg diatas */}
        <div className="trivia-card" style={{ backgroundImage: `url(${pixelBg})` }}>
          
          <div className="trivia-glass-box">
            <span className="quote-icon">❝</span>
            
            {/* QUOTE TENTANG WAKTU & KUALITAS */}
            <p style={{ fontFamily: "'AmstirPixel', sans-serif", fontSize: "1.6rem" }}>
              "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
            </p>
            
            <span className="quote-author">— Abraham Lincoln</span>
          </div>
          
        </div>
      </section>

    </div>
  );
}
// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import "../styles/home.css";

// Import Icon
import { FaReact, FaLaravel, FaPhp, FaGitAlt, FaFigma, FaGithub, FaExternalLinkAlt, FaGraduationCap, FaAward } from "react-icons/fa";
import { SiTailwindcss, SiGooglecloud, SiMysql, SiJavascript, SiTypescript } from "react-icons/si";

export default function Home() {
  const marqueeRef = useRef(null);

  const textContent = "WELCOME\u00A0TO\u00A0MY\u00A0PERSONAL\u00A0WEBSITE\u00A0";
  const repeatedText = Array(4).fill(textContent).join(""); 

  // Logika Efek Skew (Jelly)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      let skewAmount = velocity * -0.5; 
      if (skewAmount > 30) skewAmount = 30;
      if (skewAmount < -30) skewAmount = -30;

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `skewX(${skewAmount}deg)`;
        marqueeRef.current.style.transition = 'transform 0.5s ease-out';
      }

      // Reset kembali tegak saat berhenti
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (marqueeRef.current) {
          // --- EFEK MEMBAL (BOUNCY) ---
          // Kita pakai cubic-bezier agar saat kembali tegak dia agak "goyang" sedikit
          marqueeRef.current.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          marqueeRef.current.style.transform = `skewX(0deg)`;
        }
      }, 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "News Portal Platform",
      desc: "A modern content management system for news with role-based access control. Built during internship at Winnicode.",
      tech: ["Laravel", "Filament", "TailwindCSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop", // Ganti dengan screenshot aslimu nanti
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Cloud Capstone API",
      desc: "Scalable backend architecture for machine learning integration using GCP. Part of Bangkit Academy 2024 final project.",
      tech: ["GCP", "Node.js", "Docker", "Cloud Run"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      desc: "My own playground website featuring retro-modern design, scroll animations, and interactive UI components.",
      tech: ["React", "Vite", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 1,
      title: "News Portal Platform",
      desc: "A modern content management system for news with role-based access control. Built during internship at Winnicode.",
      tech: ["Laravel", "Filament", "TailwindCSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop", // Ganti dengan screenshot aslimu nanti
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Cloud Capstone API",
      desc: "Scalable backend architecture for machine learning integration using GCP. Part of Bangkit Academy 2024 final project.",
      tech: ["GCP", "Node.js", "Docker", "Cloud Run"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      desc: "My own playground website featuring retro-modern design, scroll animations, and interactive UI components.",
      tech: ["React", "Vite", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="main-container">
      
      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h1>
            Playground for curiosity<br />
            — code, design, and experiments.
          </h1>
          <p>Cloud Computing | Full-stack experiments | Team Lead | UI/UX Enthusiast</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#projects" className="btn secondary">Download CV</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track" ref={marqueeRef}>
          <div className="marquee-content">{repeatedText}</div>
          <div className="marquee-content">{repeatedText}</div>
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am an undergraduate student driven by the intersection of <b>Cloud Computing</b>, <b>Web Development</b>, and <b>Product Design</b>. I believe that technology isn't just about writing code—it's about solving real problems with user-centered thinking.
              </p>
              <p>
                Currently, I am a <b>Cloud Computing Cohort at Bangkit Academy 2024</b> (led by Google, GoTo, & Traveloka). Beyond mastering GCP and backend architecture, I serve as a <b>Team Leader</b> for a multidisciplinary capstone project.
              </p>
              <p>
                On the practical side, I work as a <b>Web Developer Intern</b> at <i>Winnicode Garuda Teknologi</i>. I contribute to building modern news portals using <b>Laravel, Filament, and TailwindCSS</b>.
              </p>
              <div style={{ marginTop: '20px', fontFamily: "'AmstirPixel', sans-serif", fontSize: '1.5rem', color: '#6366f1' }}>
                — Code that even future-me can’t understand.
              </div>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                 Your Photo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (VERTICAL TREE LAYOUT) --- */}
      <section className="skills-section" id="skills">
        <div className="skills-tree-container">

          {/* BAGIAN KIRI: CORE (JUDUL) */}
          <div className="skills-left">
            <h2>Tech<br/>Stack</h2>
          </div>

          {/* BAGIAN KANAN: CABANG ICON (VERTICAL) */}
          <div className="skills-right">

            {/* Kita bungkus tiap skill dengan 'skill-branch' untuk garisnya */}

            {/* FRONTEND GROUP */}
            <div className="skill-branch"><div className="skill-pill"><FaReact className="icon react"/> React</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiTailwindcss className="icon tailwind"/> Tailwind</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiJavascript className="icon js"/> JavaScript</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiTypescript className="icon ts"/> TypeScript</div></div>

            {/* BACKEND GROUP */}
            <div className="skill-branch"><div className="skill-pill"><FaLaravel className="icon laravel"/> Laravel</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaPhp className="icon php"/> PHP</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiMysql className="icon sql"/> MySQL</div></div>

            {/* TOOLS GROUP */}
            <div className="skill-branch"><div className="skill-pill"><SiGooglecloud className="icon gcp"/> GCP</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaGitAlt className="icon git"/> Git</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaFigma className="icon figma"/> Figma</div></div>

          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION (BARU) --- */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          
          <div className="section-header">
            <h2 className="section-title">Selected Works</h2>
            <p className="section-subtitle">A collection of projects I've worked on.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                
                {/* Gambar Proyek */}
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay"></div>
                </div>

                {/* Konten Kartu */}
                <div className="card-content">
                  <div className="card-header-flex">
                    <h3>{project.title}</h3>
                    {/* Tombol Link Kecil di atas */}
                    <div className="card-links-mini">
                      <a href={project.github} target="_blank" rel="noreferrer"><FaGithub/></a>
                      <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                    </div>
                  </div>

                  <p>{project.desc}</p>

                  {/* Tags Teknologi */}
                  <div className="card-tags">
                    {project.tech.map((t, index) => (
                      <span key={index}>{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
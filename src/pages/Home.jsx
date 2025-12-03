// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import CardSwap, { Card } from "../components/CardSwap";
import Lanyard from "../components/Lanyard";
import DecryptedText from "../components/DecryptedText";

// Import Semua Icon yang digunakan (Pastikan baris ini lengkap)
import { 
  FaReact, FaLaravel, FaPhp, FaGitAlt, FaFigma, 
  FaGithub, FaExternalLinkAlt, FaArrowRight, FaGraduationCap, 
  FaAward, FaEnvelope, FaLinkedin, FaInstagram, FaCopy, FaCheck,
  FaCertificate
} from "react-icons/fa";
import { 
  SiTailwindcss, SiGooglecloud, SiMysql, SiJavascript, SiTypescript 
} from "react-icons/si";

import project1Img from "../assets/images/news-portal.png";
import project2Img from "../assets/images/ifishy.png";
import project3Img from "../assets/images/web-personal.png";

export default function Home() {
  const marqueeRef = useRef(null);

  // TEXT MARQUEE
  const textContent = "WELCOME\u00A0TO\u00A0MY\u00A0PERSONAL\u00A0WEBSITE\u00A0";
  const repeatedText = Array(4).fill(textContent).join(""); 

  // LOGIKA EFEK SKEW (JELLY)
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
        marqueeRef.current.style.transition = 'transform 0.05s linear';
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (marqueeRef.current) {
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

  // DATA PROJECTS
  const projects = [
    {
      id: 1,
      title: "News Portal - Internship",
      desc: "A modern content management system for news with role-based access control. Built during internship at Winnicode.",
      tech: ["Laravel", "Filament", "TailwindCSS", "MySQL"],
      image: project1Img,
      github: "https://github.com/SandyAryadika/Winnicode-LaravelDeveloper",
      demo: "#"
    },
    {
      id: 2,
      title: "iFishy - Capstone",
      desc: "Scalable backend architecture for machine learning integration using GCP. Part of Bangkit Academy 2024 final project.",
      tech: ["GCP", "Node.js", "Docker", "Cloud Run"],
      image: project2Img,
      github: "https://github.com/SandyAryadika/Ifishy-C242-PS164",
      demo: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      desc: "My own playground website featuring retro-modern design, scroll animations, and interactive UI components.",
      tech: ["React", "Vite", "CSS Modules"],
      image: project3Img,
      github: "https://github.com/SandyAryadika/portofolio-site",
      demo: "#"
    }
  ];

  // DATA EDUCATION
  const educationData = [
    {
      id: 1,
      year: "2019 - 2022",
      title: "Multimedia",
      place: "SMK Negeri 1 Cerme",
      desc: "Focused on visual production and creative content, including graphic design, digital illustration, and photo editing. Completed an internship as a production assistant, responsible for designing promotional materials, brand assets, and marketing visuals using Adobe Illustrator and Adobe Photoshop. (Final Grade: 85.87/100)",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      year: "2022 - Present",
      title: "Informatics Engineering",
      place: "Universitas Pembangunan Nasional Veteran Jawa Timur",
      desc: "Actively involved in the campus tech ecosystem by joining the Google Developer Student Clubs (GDSC) for one year, collaborating on digital product development and learning modern technologies. Built a mini e-commerce platform as part of the competency exam (LSP BSNP). (Current GPA: 3.8/4.00)",
      icon: <FaGraduationCap />
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Issued Dec 2024 · Expires Dec 2027",
      link: "#", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png"
    },
    {
      id: 2,
      title: "Belajar Fundamental Aplikasi Web",
      issuer: "Dicoding Indonesia",
      date: "Issued Oct 2023 · No Expiration",
      link: "#", 
      image: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png"
    },
    {
      id: 3,
      title: "Menjadi Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Issued Aug 2023 · No Expiration",
      link: "#",
      image: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png"
    }
  ];

  // STATE COPY EMAIL
  const [copied, setCopied] = useState(false);
  const email = "aryadikawidodo0@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ----------------------------------------------------------------------

  return (
    <div className="main-container">
      
      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <div className="hero-content">
          {/* JUDUL UTAMA (KEMBALI STATIS) */}
          <h1>
            Playground for curiosity<br />
            — code, design, and experiments<span style={{color:'#6366f1'}}>.</span>
          </h1>
          
          {/* SUB-JUDUL DENGAN EFEK DECRYPTED */}
          <div className="hero-subtitle-container">
            <DecryptedText 
              text="Cloud Computing | Full-stack experiments | Team Lead | UI/UX Enthusiast"
              speed={85}             // Kecepatan acak huruf
              maxIterations={15}     // Berapa kali huruf diacak sebelum jadi teks asli
              animateOn="view"       // Animasi jalan saat terlihat
              revealDirection="left" // Animasi mulai dari tengah (Keren!)
              className="decrypted-sub" // Class untuk styling font
              repeatInterval={15000} // Ulangi setiap 15.000 ms (15 detik)
            />
          </div>

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
            
            {/* Bagian Teks (Kiri) */}
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
            
            {/* Bagian Gambar (Kanan) - DISINI POSISI LANYARD */}
            <div className="about-image" style={{ height: '500px', position: 'relative', zIndex: 10 }}>
              {/* USAGE LANYARD */}
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>

          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (VERTICAL TREE LAYOUT) --- */}
      <section className="skills-section" id="skills">
        <div className="skills-tree-container">

          <div className="skills-left">
            <h2>Tech<br/>Stack</h2>
          </div>

          <div className="skills-right">
            {/* FRONTEND */}
            <div className="skill-branch"><div className="skill-pill"><FaReact className="icon react"/> React</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiTailwindcss className="icon tailwind"/> Tailwind</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiJavascript className="icon js"/> JavaScript</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiTypescript className="icon ts"/> TypeScript</div></div>

            {/* BACKEND */}
            <div className="skill-branch"><div className="skill-pill"><FaLaravel className="icon laravel"/> Laravel</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaPhp className="icon php"/> PHP</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiMysql className="icon sql"/> MySQL</div></div>

            {/* TOOLS */}
            <div className="skill-branch"><div className="skill-pill"><SiGooglecloud className="icon gcp"/> GCP</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaGitAlt className="icon git"/> Git</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaFigma className="icon figma"/> Figma</div></div>
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">Selected Works</h2>
            <p className="section-subtitle">A collection of projects I've worked on.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <div className="card-header-flex">
                    <h3>{project.title}</h3>
                    <div className="card-links-mini">
                      <a href={project.github} target="_blank" rel="noreferrer"><FaGithub/></a>
                      <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
                    </div>
                  </div>
                  <p>{project.desc}</p>
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

      {/* --- EDUCATION SECTION --- */}
      <section className="education-section" id="education">
        <div className="education-container">
          <div className="education-header">
            <h2 className="section-title">Education</h2>
            <p>My academic journey and milestones.</p>
          </div>
          <div className="education-list">
            {educationData.map((item) => (
              <div className="edu-item" key={item.id}>
                <div className="edu-timeline-icon">{item.icon}</div>
                <div className="edu-year">{item.year}</div>
                <div className="edu-details">
                  <h3>{item.title}</h3>
                  <h4>{item.place}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="edu-icon"><FaArrowRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATES SECTION (CARD SWAP) --- */}
      <section className="certificates-section" id="certificates">
        <div className="certificates-container">
          
          {/* Header Split */}
          <div className="certificates-split">
            <div className="certificates-left">
              <h2 className="section-title">Certifications</h2>
              <p className="section-subtitle">
                A showcase of my professional growth. <br/>
                Verified credentials from top industry leaders.
              </p>
            </div>
            
            {/* Area Animasi Card Swap */}
            <div className="certificates-right">
              {/* Gunakan Component CardSwap */}
              <CardSwap
                width={550}  // Lebar kartu
                height={420} // Tinggi kartu
                cardDistance={50} // Jarak geser X
                verticalDistance={40} // Jarak geser Y
                delay={4000} // Kecepatan ganti (ms)
                skewAmount={4}
              >
                {certificates.map((cert) => (
                  <Card key={cert.id}>
                    {/* Header Kartu: Logo & Link */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#f9fafb', 
                          borderRadius: '12px', 
                          padding: '8px', 
                          border: '1px solid #f3f4f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                      }}>
                          <img src={cert.image} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <a href={cert.link} target="_blank" rel="noreferrer" style={{ color: '#9ca3af', cursor: 'pointer' }}>
                          <FaExternalLinkAlt />
                      </a>
                    </div>

                    {/* Isi Teks Kartu */}
                    <div>
                      <h3 style={{ 
                          fontFamily: "'Plus Jakarta Sans', sans-serif", 
                          fontSize: '1.4rem', 
                          color: '#1f204a', 
                          margin: '0 0 5px 0',
                          lineHeight: '1.1'
                      }}>
                          {cert.title}
                      </h3>
                      <p style={{ 
                          fontFamily: "'Plus Jakarta Sans', sans-serif", 
                          fontSize: '0.85rem', 
                          fontWeight: '600', 
                          color: '#6366f1', 
                          margin: '0 0 5px 0' 
                      }}>
                          {cert.issuer}
                      </p>
                      <p style={{ 
                          fontFamily: "'Plus Jakarta Sans', sans-serif", 
                          fontSize: '0.8rem', 
                          color: '#9ca3af',
                          margin: 0 
                      }}>
                          {cert.date}
                      </p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to discuss about design & code? 
            <br/>I'm open for new opportunities.
          </p>

          <div className="email-box" onClick={handleCopyEmail}>
            <div className="email-icon"><FaEnvelope /></div>
            <span className="email-text">{email}</span>
            <div className="copy-icon">
              {copied ? <FaCheck style={{color: '#10b981'}} /> : <FaCopy />}
            </div>
            <div className={`copy-feedback ${copied ? 'active' : ''}`}>
              Copied to clipboard!
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/sandyary/" target="_blank" rel="noreferrer" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/SandyAryadika" target="_blank" rel="noreferrer" className="social-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.instagram.com/ev.sandyy?igsh=MWQyNTNoeDRiZ2d6bQ==" target="_blank" rel="noreferrer" className="social-btn">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Sandy Aryadika. Built with React.</p>
        </footer>
      </section>

    </div>
  );
}
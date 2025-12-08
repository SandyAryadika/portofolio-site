// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import CardSwap, { Card } from "../components/CardSwap";
import Lanyard from "../components/Lanyard";
import DecryptedText from "../components/DecryptedText";
import TextType from "../components/TextType";
import ScrollReveal from "../components/ScrollReveal";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { 
  FaReact, FaLaravel, FaPhp, FaGitAlt, FaFigma, 
  FaGithub, FaExternalLinkAlt, FaArrowRight, FaGraduationCap, 
  FaEnvelope, FaLinkedin, FaInstagram, FaCopy, FaCheck,
  FaCode, FaCloud, FaPython
} from "react-icons/fa";

import { 
  SiTailwindcss, SiGooglecloud, SiMysql, SiJavascript
} from "react-icons/si";

// Project Images
import project1Img from "../assets/images/news-portal.png";
import project2Img from "../assets/images/ifishy.png";
import project3Img from "../assets/images/web-personal.png";

// Certificate Images
import certificate1Img from "../assets/images/javascript.jpg";
import certificate2Img from "../assets/images/web.jpg";
import certificate3Img from "../assets/images/cloud-eng.jpg";
import certificate4Img from "../assets/images/be-cloud.jpg";
import certificate5Img from "../assets/images/ml-cloud.jpg";


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

    // 2. Animasi Skills (ARAH SCROLL MENENTUKAN URUTAN)
    const skills = document.querySelectorAll(".skill-branch");
    let skillTrigger; // Simpan reference trigger untuk dibersihkan nanti
    
    if (skills.length > 0) {
      // Set kondisi awal: Sembunyi & geser kanan
      gsap.set(skills, { opacity: 0, x: 50 });

      skillTrigger = ScrollTrigger.create({
        trigger: ".skills-tree-container",
        start: "top 85%", // Mulai saat bagian atas elemen masuk 80% viewport
        end: "bottom 20%", // Selesai saat bagian bawah elemen di 20% viewport
        
        // SCROLL KE BAWAH (Masuk Viewport)
        onEnter: () => {
          gsap.to(skills, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1, // Positif: Urutan 1 -> Akhir
            ease: "back.out(1.7)",
            overwrite: "auto"
          });
        },
        
        // SCROLL KE BAWAH (Keluar Viewport) -> Reset
        onLeave: () => {
          gsap.to(skills, { opacity: 0, x: 50, duration: 0.3, overwrite: "auto" });
        },

        // SCROLL KE ATAS (Masuk Viewport Kembali)
        onEnterBack: () => {
          gsap.to(skills, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: -0.1, // Negatif: Urutan Akhir -> 1 (Bawah ke Atas)
            ease: "back.out(1.7)",
            overwrite: "auto"
          });
        },

        // SCROLL KE ATAS (Keluar Viewport) -> Reset
        onLeaveBack: () => {
          gsap.to(skills, { opacity: 0, x: 50, duration: 0.3, overwrite: "auto" });
        }
      });
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (skillTrigger) skillTrigger.kill(); // Bersihkan trigger khusus skill
      ScrollTrigger.getAll().forEach(t => t.kill()); // Bersihkan sisa trigger lain
    };
  }, []);

  // DATA PROJECTS
  const projects = [
    {
      id: 1,
      title: "Web Developer Intern", // Judul Role
      // Deskripsi ringkas mencakup Perusahaan, Waktu, dan Tanggung Jawab Utama
      desc: "Internship at PT. Winnicode Garuda Teknologi (Feb - Jul 2025). Led the end-to-end development of a production-ready news portal. Responsible for UI/UX design, core feature implementation, and system testing using industry best practices.",
      // Tech stack gabungan tools & skill penting
      tech: ["Laravel", "Filament", "TailwindCSS", "MySQL", "Git", "UI/UX"],
      image: project1Img,
      github: "https://github.com/SandyAryadika/Winnicode-LaravelDeveloper",
      demo: "#"
    },
    {
      id: 1,
      title: "Cloud Computing Cohort", // Judul Role
      // Deskripsi ringkas mencakup Perusahaan, Waktu, dan Tanggung Jawab Utama
      desc: "Team Leader in the Bangkit Academy Capstone Project (Sep 2024 – Jan 2025). Coordinated cross-path collaboration, managed task planning, ensured component integration, and guided cloud architecture while resolving weekly technical and non-technical issues.",
      // Tech stack gabungan tools & skill penting
      tech: ["Cloud Computing", "Team Leadership", "Google Cloud Platform", "Microservices", "System Integration", "Project Management"],
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
      title: "Learn the Basics of JavaScript Programming",
      issuer: "Dicoding Indonesia",
      date: "Issued Oct 2024 · Expires Oct 2027",
      link: "https://www.dicoding.com/certificates/KEXLY08QYZG2", 
      image: certificate1Img
    },
    {
      id: 2,
      title: "Learn the Basics of Web Programming",
      issuer: "Dicoding Indonesia",
      date: "Issued Sep 2024 · Expires Sep 2027",
      link: "https://www.dicoding.com/certificates/4EXGQL911ZRL", 
      image: certificate2Img
    },
    {
      id: 3,
      title: "Becoming a Google Cloud Engineer",
      issuer: "Dicoding Indonesia",
      date: "Issued Nov 2024 · Expires Nov 2027",
      link: "https://www.dicoding.com/certificates/6RPNY9N4QZ2M",
      image: certificate3Img
    },
    {
      id: 4,
      title: "Learn to Build Back-End Applications for Beginners with Google Cloud",
      issuer: "Dicoding Indonesia",
      date: "Issued Nov 2024 · Expires Nov 2027",
      link: "https://www.dicoding.com/certificates/1RXY2WLLQXVM",
      image: certificate4Img
    },
    {
      id: 5,
      title: "Learn Machine Learning Applications with Google Cloud",
      issuer: "Dicoding Indonesia",
      date: "Issued Dec 2024 · Expires Dec 2027",
      link: "https://www.dicoding.com/certificates/07Z649DLYPQR",
      image: certificate5Img
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
          <h2>
            Hi, <span style={{ color: '#1f204a' }}>I'm</span>
          </h2>

          {/* JUDUL UTAMA (H1) DENGAN EFEK TYPE */}
          <h1>
            <TextType 
              text={["Sandy Aryadika Widodo."]} 
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
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
            <a 
              href="https://drive.google.com/file/d/14tCYpABd1GXzgA2-dTJiXh-83X4fkEBc/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
            >
              Download CV
            </a>
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
          <h2 className="section-title">
            <ScrollReveal 
              baseOpacity={0} 
              enableBlur={true} 
              baseRotation={10} 
              blurStrength={5}
              stagger={0.1} // Sedikit lebih lambat antar kata biar dramatis
            >
              About Me
            </ScrollReveal>
          </h2>
          <div className="about-grid">
            
            {/* Bagian Teks (Kiri) - UBAH div MENJADI motion.div */}
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -100 }} // Keadaan awal: Transparan & geser ke kiri 100px
              whileInView={{ opacity: 1, x: 0 }} // Keadaan akhir: Terlihat & posisi normal
              transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi 0.8 detik
              viewport={{ once: false, amount: 0.3 }} // Animasi jalan sekali saat 30% elemen terlihat
            >
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
            </motion.div>
            
            {/* Bagian Gambar (Kanan) - Biarkan Tetap */}
            <div className="about-image" style={{ height: '500px', position: 'relative', zIndex: 10 }}>
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section" id="skills">
        <div className="skills-tree-container">
          <div className="skills-left"><h2>Tech<br/>Stack</h2></div>
          
          <div className="skills-right">
            {/* CORE & LANGUAGES */}
            <div className="skill-branch">
              <div className="skill-pill"><SiJavascript className="icon js"/> JavaScript</div>
            </div>
            <div className="skill-branch">
              <div className="skill-pill"><FaPython className="icon py"/> Python</div>
            </div>
            <div className="skill-branch">
              <div className="skill-pill"><FaPhp className="icon php"/> PHP</div>
            </div>

            {/* FRAMEWORK & DB */}
            <div className="skill-branch">
              <div className="skill-pill"><FaLaravel className="icon laravel"/> Laravel</div>
            </div>
            <div className="skill-branch">
              <div className="skill-pill"><SiMysql className="icon sql"/> MySQL</div>
            </div>

            {/* TOOLS, CLOUD, IDE */}
            <div className="skill-branch">
              <div className="skill-pill"><FaGitAlt className="icon git"/> Git</div>
            </div>
            <div className="skill-branch">
              <div className="skill-pill"><FaFigma className="icon figma"/> Figma</div>
            </div>
            <div className="skill-branch">
              <div className="skill-pill"><SiGooglecloud className="icon gcp"/> GCP</div>
            </div>
            {/* Menggunakan Icon FaCode (Aman) untuk VS Code */}
            <div className="skill-branch">
              <div className="skill-pill"><FaCode className="icon vscode"/> Visual Studio</div>
            </div>
            {/* Menggunakan Icon FaCloud (Aman) untuk Google Colab */}
            <div className="skill-branch">
              <div className="skill-pill"><FaCloud className="icon colab"/> Google Colab</div>
            </div>
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
                width={550}
                height={420}
                cardDistance={20}      
                verticalDistance={15} 
                delay={4000}
                skewAmount={2}         // Kemiringan sedikit saja agar elegan
              >
                {certificates.map((cert) => (
                  <Card key={cert.id}>
                    {/* Header Kartu: Logo & Link */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ 
                          width: '430px', 
                          height: '290px', 
                          background: '#f9fafb', 
                          borderRadius: '10px', 
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
          <p>© {new Date().getFullYear()} Sandy Aryadika. Built with React / Experiments</p>
        </footer>
      </section>

    </div>
  );
}
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const marqueeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "aryadikawidodo0@gmail.com";

  // --- DATA ---
  const textContent = "WELCOME\u00A0TO\u00A0MY\u00A0PERSONAL\u00A0WEBSITE\u00A0";
  const repeatedText = Array(4).fill(textContent).join("");

  const projects = [
    {
      id: 1,
      title: "Web Developer Intern",
      desc: "During my internship at Winnicode Garuda Teknologi (Feb - Jul 2025), I helped develop a production-ready news portal, handling user flows, UI/UX, core features, and testing. Working with a mentor strengthened my web development skills and problem-solving.",
      tech: ["Laravel", "Filament", "TailwindCSS", "MySQL", "Git", "UI/UX"],
      image: project1Img,
      github: "https://github.com/SandyAryadika/Winnicode-LaravelDeveloper",
      demo: "#"
    },
    {
      id: 2,
      title: "Cloud Computing Cohort",    
      desc: "Team Leader in the Bangkit Academy Capstone Project (Sep 2024 – Jan 2025). Coordinated cross-path collaboration, managed task planning, ensured component integration, and guided cloud architecture while resolving weekly technical and non-technical issues.",
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

  const educationData = [
    {
      id: 1,
      year: "2019 - 2022",
      title: "Multimedia",
      place: "SMK Negeri 1 Cerme, Gresik",
      desc: "Focused on visual production, including graphic design, digital illustration, and photo editing. Completed an internship as a Production Assistant, responsible for designing promotional materials, brand assets, and marketing visuals using Adobe Illustrator and Adobe Photoshop. Final Grade: 85.87/100.",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      year: "2022 - Present",
      title: "Informatics Engineering",
      place: "Universitas Pembangunan Nasional Veteran Jawa Timur, Surabaya",
      desc: "Actively involved in the campus tech ecosystem through the Google Developer Student Clubs (GDSC), collaborating on digital product development and exploring modern technologies. Developed a mini e-commerce platform as part of the LSP BSNP competency exam. Current GPA: 3.8/4.00.",
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

  // --- HANDLERS ---
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  // --- EFFECTS ---

  // Responsiveness Check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animations (Skew, ScrollTrigger)
  useEffect(() => {
    // 1. Skew Marquee Logic
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

    // 2. Skills Animation
    const skills = document.querySelectorAll(".skill-branch");
    let skillTrigger;
    
    if (skills.length > 0) {
      gsap.set(skills, { opacity: 0, x: 50 });

      skillTrigger = ScrollTrigger.create({
        trigger: ".skills-tree-container",
        start: "top 85%",
        end: "bottom 20%",
        onEnter: () => gsap.to(skills, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", overwrite: "auto" }),
        onLeave: () => gsap.to(skills, { opacity: 0, x: 50, duration: 0.3, overwrite: "auto" }),
        onEnterBack: () => gsap.to(skills, { opacity: 1, x: 0, duration: 0.5, stagger: -0.1, ease: "back.out(1.7)", overwrite: "auto" }),
        onLeaveBack: () => gsap.to(skills, { opacity: 0, x: 50, duration: 0.3, overwrite: "auto" })
      });
    }
    
    // 3. Projects Animation
    gsap.set(".project-card", { opacity: 0, y: 50 });

    ScrollTrigger.batch(".project-card", {
      start: "top 85%",
      end: "bottom 15%",
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out", overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out", overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true}),
    });

    // 4. Education Animation
    const eduItems = document.querySelectorAll(".edu-item");
    if (eduItems.length > 0) {
      gsap.set(eduItems, { opacity: 0, x: 100 }); 
      ScrollTrigger.batch(eduItems, {
        start: "top 85%", 
        end: "bottom 15%",
        onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "power2.out", overwrite: true }),
        onLeave: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: -0.2, duration: 1, ease: "power2.out", overwrite: true }),
        onLeaveBack: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true }),
      });
    }

    // 5. Contact Animation
    const contactElements = document.querySelectorAll(".contact-container > *");
    if (contactElements.length > 0) {
      gsap.set(contactElements, { opacity: 0, y: 50, scale: 0.9 });
      ScrollTrigger.batch(contactElements, {
        start: "top 90%",
        end: "bottom 10%",
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)", overwrite: true }),
        onLeave: batch => gsap.set(batch, { opacity: 0, y: 50, scale: 0.9, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)", overwrite: true }),
        onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, scale: 0.9, overwrite: true }),
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (skillTrigger) skillTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="main-container">
      
      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h2>
            Hi, <span style={{ color: '#1f204a' }}>I'm</span>
          </h2>

          <h1>
            <TextType 
              text={["Sandy Aryadika Widodo."]} 
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          
          <div className="hero-subtitle-container">
            <DecryptedText 
              text="Cloud Computing | Full-stack experiments | Team Lead | UI/UX Enthusiast"
              speed={85}
              maxIterations={15}
              animateOn="view"
              revealDirection="left"
              className="decrypted-sub"
              repeatInterval={15000}
            />
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a 
              href="https://drive.google.com/uc?export=download&id=14tCYpABd1GXzgA2-dTJiXh-83X4fkEBc"
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
            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={10} blurStrength={5} stagger={0.1}>
              About Me
            </ScrollReveal>
          </h2>
          <div className="about-grid">
            
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
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
            <div className="skill-branch"><div className="skill-pill"><SiJavascript className="icon js"/> JavaScript</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaPython className="icon py"/> Python</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaPhp className="icon php"/> PHP</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaLaravel className="icon laravel"/> Laravel</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiMysql className="icon sql"/> MySQL</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaGitAlt className="icon git"/> Git</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaFigma className="icon figma"/> Figma</div></div>
            <div className="skill-branch"><div className="skill-pill"><SiGooglecloud className="icon gcp"/> GCP</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaCode className="icon vscode"/> Visual Studio</div></div>
            <div className="skill-branch"><div className="skill-pill"><FaCloud className="icon colab"/> Google Colab</div></div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">
              <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10} stagger={0.1}>
                Selected Works
              </ScrollReveal>
            </h2>
            <p className="section-subtitle">
              <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={0} blurStrength={5} stagger={0.02}>
                A collection of projects & experiences.
              </ScrollReveal>
            </p>
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
            <h2 className="section-title">
              <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10} stagger={0.1}>
                Education
              </ScrollReveal>
            </h2>
            <p className="section-subtitle">
              <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={0} blurStrength={5} stagger={0.02}>
                My academic journey and milestones.
              </ScrollReveal>
            </p>
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

      {/* --- CERTIFICATES SECTION --- */}
      <section className="certificates-section" id="certificates">
        <div className="certificates-container">
          
          <div className="certificates-split">
            <div className="certificates-left">
              <h2 className="section-title">Certifications</h2>
              <p className="section-subtitle">
                A showcase of my professional growth. <br/>
                Verified credentials from top industry leaders.
              </p>
            </div>
            
            <div className="certificates-right">
              {/* RESPONSIF: Kartu mengecil di HP (300px) dan normal di Desktop (550px) */}
              <CardSwap
                width={isMobile ? 300 : 550}
                height={isMobile ? 380 : 420}
                cardDistance={isMobile ? 12 : 20}       
                verticalDistance={isMobile ? 10 : 15} 
                delay={4000}
                skewAmount={2}
              >
                {certificates.map((cert) => (
                  <Card key={cert.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ 
                          width: isMobile ? '230px' : '430px', 
                          height: isMobile ? '160px' : '290px', 
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

                    <div>
                      <h3 style={{ 
                          fontFamily: "'Plus Jakarta Sans', sans-serif", 
                          fontSize: isMobile ? '1.1rem' : '1.4rem', 
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
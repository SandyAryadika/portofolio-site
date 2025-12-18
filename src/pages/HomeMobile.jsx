import React from 'react';
import MainLayout from '../layouts/MainLayout';
import '../styles/home.css'; // Tetap pakai CSS yang sama
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

// Import Gambar (Sama seperti Home.jsx)
import reactLogo from '../assets/react.svg';
import htmlIcon from '../assets/images/web.jpg'; // Pastikan path sesuai
import cssIcon from '../assets/images/web.jpg';
import jsIcon from '../assets/images/javascript.jpg';
import project1 from '../assets/images/news-portal.png';
import project2 from '../assets/images/ifishy.png';
import project3 from '../assets/images/web-personal.png';

const HomeMobile = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sandyaryadika@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home-wrapper-mobile" style={{ overflowX: 'hidden' }}>
      {/* HERO SECTION MOBILE */}
      <section className="hero-container" id="home" style={{ display: 'flex', flexDirection: 'column', height: 'auto', minHeight: '100vh', padding: '120px 20px 60px 20px', alignItems: 'center', textAlign: 'center' }}>
        <div className="hero-content" style={{ alignItems: 'center', textAlign: 'center' }}>
          <h2>Hello, I'm</h2>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2' }}>Sandy Aryadika</h1>
          
          <div className="hero-subtitle-container" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <span className="decrypted-sub" style={{ textAlign: 'center' }}>
              Cloud Computing Student<br/>Fullstack Enthusiast
            </span>
          </div>

          <div className="cta-buttons" style={{ flexDirection: 'column', width: '100%', gap: '15px' }}>
            <a href="#projects" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>View Projects</a>
            <a href="#contact" className="btn secondary" style={{ width: '100%', justifyContent: 'center' }}>Contact Me</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-content">
            FULLSTACK • CLOUD • UI/UX • BACKEND • FRONTEND • DEVOPS • 
            FULLSTACK • CLOUD • UI/UX • BACKEND • FRONTEND • DEVOPS •
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2 className="section-title" style={{ fontSize: '3.5rem', textAlign: 'center' }}>About Me</h2>
          <div className="about-text">
            <p style={{ textAlign: 'justify' }}>
              I am a 6th-semester student majoring in <b>Information Technology</b> with a focus on <b>Cloud Computing</b>. 
              I have a strong passion for building scalable web applications and managing cloud infrastructure.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Currently, I am exploring modern web technologies like <b>React, Vite, and Node.js</b> while also deepening my knowledge in <b>Google Cloud Platform (GCP)</b>.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (Simplified List) */}
      <section className="skills-section" id="skills">
        <div style={{ width: '100%' }}>
          <h2 className="section-title" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '40px' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Google Cloud', 'Git', 'Linux', 'Vite', 'Tailwind'].map((skill) => (
              <span key={skill} className="skill-pill" style={{ fontSize: '1rem' }}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h2 className="section-title" style={{ fontSize: '3.5rem', textAlign: 'center' }}>Projects</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: '1fr', gap: '40px' }}>
            
            {/* Project 1 */}
            <div className="project-card">
              <div className="card-image-wrapper" style={{ height: '200px' }}>
                <img src={project1} alt="News Portal" style={{ filter: 'grayscale(0)' }} />
              </div>
              <div className="card-content">
                <h3>News Portal</h3>
                <p>A comprehensive news aggregation platform built with modern web technologies.</p>
                <div className="card-tags">
                  <span>React</span><span>API</span><span>CSS</span>
                </div>
              </div>
            </div>

             {/* Project 2 */}
             <div className="project-card">
              <div className="card-image-wrapper" style={{ height: '200px' }}>
                <img src={project2} alt="iFishy" style={{ filter: 'grayscale(0)' }} />
              </div>
              <div className="card-content">
                <h3>iFishy</h3>
                <p>An aquatic marketplace and information hub for fish enthusiasts.</p>
                <div className="card-tags">
                  <span>Kotlin</span><span>Mobile</span>
                </div>
              </div>
            </div>

             {/* Project 3 */}
             <div className="project-card">
              <div className="card-image-wrapper" style={{ height: '200px' }}>
                <img src={project3} alt="Portfolio" style={{ filter: 'grayscale(0)' }} />
              </div>
              <div className="card-content">
                <h3>Personal Web</h3>
                <p>My personal portfolio website featuring 3D animations and interactive UI.</p>
                <div className="card-tags">
                  <span>React</span><span>Three.js</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Contact</h2>
          <p className="contact-subtitle">Feel free to reach out for collaborations!</p>
          
          <div className="email-box" onClick={handleCopyEmail}>
            <FaEnvelope className="email-icon" />
            <span className="email-text" style={{ fontSize: '1.2rem' }}>sandyaryadika@gmail.com</span>
            {copied ? <FaCheck className="copy-icon" /> : <FaCopy className="copy-icon" />}
            <div className={`copy-feedback ${copied ? 'active' : ''}`}>Copied!</div>
          </div>

          <div className="social-links">
            <a href="https://instagram.com/sandyary_" className="social-btn">
              <FaInstagram /> Instagram
            </a>
            <a href="https://linkedin.com/in/sandyaryadika" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/sandyary" className="social-btn">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Sandy Aryadika. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomeMobile;
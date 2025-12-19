import React from 'react';
import MainLayout from '../layouts/MainLayout';
import '../styles/home-mobile.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

// IMPORT GAMBAR (Pastikan path ini sesuai dengan struktur folder Anda)
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

  // Style Objek untuk kerapihan (Reusable)
  const sectionStyle = {
    padding: '60px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    fontFamily: 'AmstirPixel, sans-serif',
    fontSize: '3rem',
    color: '#1f204a',
    marginBottom: '1.5rem',
    textAlign: 'center',
    lineHeight: '1'
  };

  const textStyle = {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '1rem',
    color: '#4b5563',
    lineHeight: '1.7',
    textAlign: 'justify',
    marginBottom: '1rem'
  };

  return (
    <div className="home-wrapper-mobile" style={{ overflowX: 'hidden', background: '#fff' }}>
      
      {/* 1. HERO SECTION (Lebih Bersih) */}
      <section style={{ 
        minHeight: '90vh', 
        padding: '120px 24px 40px 24px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' 
      }} id="home">
        
        <h2 style={{ fontFamily: 'AmstirPixel, sans-serif', fontSize: '2.5rem', color: '#6366f1', margin: '0' }}>
          Hello, I'm
        </h2>
        
        <h1 style={{ 
          fontFamily: 'AmstirPixel, sans-serif', 
          fontSize: '4.5rem', 
          color: '#1f204a', 
          lineHeight: '0.9', 
          marginBottom: '20px' 
        }}>
          Sandy<br/>Aryadika
        </h1>

        <div style={{ 
          background: '#f3f4f6', 
          padding: '10px 20px', 
          borderRadius: '50px', 
          marginBottom: '30px' 
        }}>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#4b5563', fontWeight: '600', fontSize: '0.9rem' }}>
            Cloud Computing • Fullstack • UI/UX
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
          <a href="#projects" className="btn primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            View My Work
          </a>
          <a href="#contact" className="btn secondary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            Contact Me
          </a>
        </div>
      </section>

      {/* 3. ABOUT ME */}
      <section style={sectionStyle} id="about">
        <h2 style={titleStyle}>About Me</h2>
        <div style={{ maxWidth: '600px' }}>
          <p style={textStyle}>
            I am a 6th-semester student majoring in <b>Information Technology</b> with a focus on <b>Cloud Computing</b>. 
            Passionate about building scalable web applications and managing cloud infrastructure.
          </p>
          <p style={textStyle}>
            Currently exploring modern tech stacks like <b>React, Vite, Node.js</b> and deepening knowledge in <b>Google Cloud Platform (GCP)</b>.
          </p>
        </div>
      </section>

      {/* 4. SKILLS (Lebih Rapi & Padat) */}
      <section style={{ ...sectionStyle, background: '#f9fafb' }} id="skills">
        <h2 style={titleStyle}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '400px' }}>
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Google Cloud', 'Git', 'Linux', 'Vite', 'Tailwind', 'Python', 'SQL'].map((skill) => (
            <span key={skill} style={{ 
              background: 'white', 
              border: '1px solid #e5e7eb', 
              padding: '8px 20px', 
              borderRadius: '50px', 
              fontSize: '0.9rem',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: '600',
              color: '#1f204a',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS (Card Style Improved) */}
      <section style={sectionStyle} id="projects">
        <h2 style={titleStyle}>Selected Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '400px' }}>
          
          {/* Project Card Component */}
          {[
            { img: project1, title: 'News Portal', desc: 'Comprehensive news aggregation platform.', tags: ['React', 'API'] },
            { img: project2, title: 'iFishy', desc: 'Aquatic marketplace & info hub.', tags: ['Kotlin', 'Mobile'] },
            { img: project3, title: 'Personal Web', desc: 'Interactive 3D portfolio website.', tags: ['React', 'Three.js'] }
          ].map((item, index) => (
            <div key={index} style={{ 
              background: 'white', 
              borderRadius: '20px', 
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}>
              <div style={{ height: '200px', width: '100%', background: '#f3f4f6' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'AmstirPixel, sans-serif', fontSize: '2rem', margin: '0 0 10px 0', color: '#1f204a' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.5', marginBottom: '20px' }}>{item.desc}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.75rem', fontWeight: 'bold', 
                      color: '#6366f1', background: '#e0e7ff', 
                      padding: '4px 12px', borderRadius: '6px' 
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 6. CONTACT (Lebih Menonjol) */}
      <section style={{ ...sectionStyle, background: '#1f204a', color: 'white', marginBottom: '0', borderRadius: '40px 40px 0 0' }} id="contact">
        <h2 style={{ ...titleStyle, color: 'white', marginTop: '20px' }}>Let's Connect</h2>
        <p style={{ ...textStyle, color: '#9ca3af', textAlign: 'center', marginBottom: '40px' }}>
          Open for collaboration and new opportunities.
        </p>
        
        <div 
          onClick={handleCopyEmail}
          style={{ 
            background: 'rgba(255,255,255,0.1)', 
            border: '1px dashed rgba(255,255,255,0.3)', 
            padding: '20px', 
            borderRadius: '15px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px',
            cursor: 'pointer',
            marginBottom: '40px',
            width: '100%',
            maxWidth: '350px',
            justifyContent: 'center'
          }}
        >
          <FaEnvelope style={{ fontSize: '1.5rem', color: '#818cf8' }} />
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.1rem', fontWeight: '600' }}>sandyaryadika@gmail.com</span>
          {copied ? <FaCheck style={{ color: '#4ade80' }} /> : <FaCopy style={{ color: '#9ca3af' }} />}
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <a href="https://instagram.com/sandyary_" style={{ color: 'white', fontSize: '1.8rem' }}><FaInstagram /></a>
          <a href="https://linkedin.com/in/sandyaryadika" style={{ color: 'white', fontSize: '1.8rem' }}><FaLinkedin /></a>
          <a href="https://github.com/sandyary" style={{ color: 'white', fontSize: '1.8rem' }}><FaGithub /></a>
        </div>

        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', textAlign: 'center', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            © 2024 Sandy Aryadika.
          </p>
        </footer>
      </section>

    </div>
  );
};

export default HomeMobile;
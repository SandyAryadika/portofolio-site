// src/components/ScrollReveal.jsx
import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ 
  children, 
  baseOpacity = 0, 
  enableBlur = true, 
  baseRotation = 5, 
  blurStrength = 10,
  className = "",
  stagger = 0.05,
  duration = 1
}) => {
  const containerRef = useRef(null);
  
  const words = useMemo(() => {
    if (typeof children !== 'string') return [];
    return children.split(" ");
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        y: 20,
      },
      {
        opacity: 1,
        rotate: 0,
        filter: 'blur(0px)',
        y: 0,
        stagger: stagger,
        duration: duration,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: "top 85%", 
          end: "bottom 10%",
          
          // --- PERUBAHAN PENTING DI SINI ---
          // "play reverse play reverse" artinya:
          // Masuk layar -> Play
          // Keluar layar -> Reverse (Hilang)
          // Masuk lagi -> Play lagi
          toggleActions: "play reverse play reverse", 
          // ---------------------------------
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [baseOpacity, enableBlur, baseRotation, blurStrength, stagger, duration]);

  if (typeof children !== 'string') {
    return <div ref={containerRef} className={`scroll-reveal ${className}`}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`scroll-reveal ${className}`}>
      <div className="scroll-reveal-text"> 
        {words.map((word, i) => (
          <span key={i} className="word">
            {word}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollReveal;
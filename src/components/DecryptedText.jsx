// src/components/DecryptedText.jsx
import { useEffect, useState, useRef } from "react";

/**
 * DecryptedText with Looping Support
 */
export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+",
  className = "", 
  parentClassName = "",
  animateOn = "view", 
  repeatInterval = null, // PROP BARU: Waktu ulang (ms), misal 15000
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const revealedIndices = useRef(new Set());
  const intervalRef = useRef(null);
  const loopTimeoutRef = useRef(null); // Ref untuk timer loop

  // Logic 1: Trigger awal (View/Hover)
  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isScrambling) {
              setIsScrambling(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      // Hack: create dummy element to observe if parent ref not available
      // Disini kita asumsi langsung trigger saja jika view
      setIsScrambling(true);
    }
  }, [animateOn]);

  // Logic 2: Looping Interval (Fitur Baru)
  useEffect(() => {
    if (!repeatInterval || repeatInterval <= 0) return;

    const startLoop = () => {
      loopTimeoutRef.current = setTimeout(() => {
        if (!isScrambling) {
          setIsScrambling(true); // Trigger ulang animasi
        }
        startLoop(); // Jadwalkan loop berikutnya
      }, repeatInterval);
    };

    startLoop();

    return () => clearTimeout(loopTimeoutRef.current);
  }, [repeatInterval, isScrambling]);

  // Logic 3: Scramble Animation
  useEffect(() => {
    if (isScrambling) {
      clearInterval(intervalRef.current);
      revealedIndices.current.clear();
      let currentIteration = 0;

      intervalRef.current = setInterval(() => {
        setDisplayText((prevText) => {
          return text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (revealedIndices.current.has(i)) return char;

              if (Math.random() < 0.1) { 
                revealedIndices.current.add(i);
                return char;
              }

              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        currentIteration++;
        if (revealedIndices.current.size === text.replace(/ /g, "").length) {
          setIsScrambling(false);
          clearInterval(intervalRef.current);
        }
      }, speed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isScrambling, text, speed, characters]);

  return (
    <span
      className={parentClassName}
      onMouseEnter={() => { if (animateOn === "hover") setIsScrambling(true); }}
      style={{ display: 'inline-block', whiteSpace: 'nowrap' }} 
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
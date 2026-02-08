import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import "../styles/home.css";

function ParallaxText({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // 1. PENGATURAN SKEW (KEMIRINGAN)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Ubah angka 30 dan -30 jika ingin lebih miring lagi
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [30, -30]);

  // 2. PENGATURAN LOOPING GERAKAN
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() - moveBy);
  });

  return (
    // DIV 1: Wrapper untuk Background & Skew
    <motion.div 
      className="skew-container"
      style={{ 
        skewX,          // Skew diaplikasikan di sini
        background: '#EEEEEE' // Background dipaksa di sini
      }} 
    >
      {/* DIV 2: Wrapper untuk Animasi Jalan */}
      <motion.div className="marquee-track" style={{ x }}>
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
        {/* Tambahan biar loop super mulus */}
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
        <span className="marquee-content">WELCOME TO MY PERSONAL WEBSITE </span>
      </motion.div>
    </motion.div>
  );
}

// Fungsi helper untuk looping angka (agar tidak habis)
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function SkewScroll() {
  return (
    <section className="scroll-section-outer">
       {/* Kecepatan 2 cukup lambat, turunkan ke 1 jika ingin lebih pelan */}
      <ParallaxText baseVelocity={2} />
    </section>
  );
}
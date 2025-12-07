// src/components/CardSwap.jsx
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css'; // Pastikan CSS diimport

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div 
    ref={ref} 
    {...rest} 
    // Tambahkan class default .card-swap-card
    className={`card-swap-card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} 
    // Style inline hanya untuk override spesifik jika perlu, sisanya di CSS
    style={{ ...rest.style }}
  />
));
Card.displayName = 'Card';

// Fungsi helper untuk menghitung posisi tumpukan
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    // PENTING: Gunakan xPercent/yPercent -50 agar titik pusatnya di tengah kartu
    xPercent: -50, 
    yPercent: -50, 
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });
};

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config = easing === 'elastic'
      ? { ease: 'elastic.out(0.6,0.9)', durDrop: 2, durMove: 2, durReturn: 2, promoteOverlap: 0.9, returnDelay: 0.05 }
      : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    
    // Set posisi awal setiap kartu
    refs.forEach((r, i) => {
       if(r.current) {
         // Pastikan width/height di-set via JS agar konsisten dengan props
         r.current.style.width = `${width}px`;
         r.current.style.height = `${height}px`;
         
         // Tempatkan di posisi stack awal
         placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
       }
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      // Jarak jatuh kartu (Tinggi kartu + 150px)
      const dropDistance = height + 150; 

      // Animasi 1: Kartu depan jatuh ke bawah
      tl.to(elFront, {
        y: `+=${dropDistance}`, 
        duration: config.durDrop,
        ease: config.ease
      });

      // Animasi 2: Kartu belakang maju ke depan
      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`);
      });

      // Animasi 3: Kartu yang jatuh tadi kembali ke tumpukan paling belakang
      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => { gsap.set(elFront, { zIndex: backSlot.zIndex }); }, undefined, 'return');
      tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, 'return');

      tl.call(() => { order.current = [...rest, front]; });
    };

    // Jalankan swap pertama dan set interval
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => { tlRef.current?.pause(); clearInterval(intervalRef.current); };
      const resume = () => { tlRef.current?.play(); intervalRef.current = window.setInterval(swap, delay); };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, height, width]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child) ? cloneElement(child, {
          key: i,
          ref: refs[i],
          // Kita oper style width/height jika perlu, tapi sudah dihandle useEffect
          style: { ...(child.props.style ?? {}) },
          onClick: e => { child.props.onClick?.(e); onCardClick?.(i); }
        }) : child
  );

  return (
    <div ref={container} className="card-swap-container">
      {rendered}
    </div>
  );
};

export default CardSwap;
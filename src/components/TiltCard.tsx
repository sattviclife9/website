import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface TiltCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  idx: number;
}

export default function TiltCard({ icon, title, desc, idx }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for x and y tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform motion values into degrees of rotation (Max 15deg)
  const rotateX = useTransform(y, [1, -1], [15, -15]);
  const rotateY = useTransform(x, [-1, 1], [-15, 15]);

  // Spring physics for buttery smooth responsiveness
  const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const rotateSpringX = useSpring(rotateX, springConfig);
  const rotateSpringY = useSpring(rotateY, springConfig);

  // Gentle depth translation values for layers
  const translateZ_icon = useTransform(y, [-1, 1], [-10, 10]);
  const translateZ_title = useTransform(y, [-1, 1], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the card's center (range -1 to 1)
    const mouseX = (event.clientX - rect.left) / width * 2 - 1;
    const mouseY = (event.clientY - rect.top) / height * 2 - 1;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 70, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 14,
        mass: 1.1,
        delay: idx * 0.15,
      }}
      style={{
        rotateX: rotateSpringX,
        rotateY: rotateSpringY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        borderColor: "rgba(212, 175, 55, 0.45)",
        boxShadow: "0 35px 70px -15px rgba(15, 118, 110, 0.22), 0 0 35px -5px rgba(212, 175, 55, 0.12)",
      }}
      className="group bg-gradient-to-br from-white via-white to-clinic-ivory p-8 md:p-10 rounded-[2.5rem] border border-clinic-border relative flex flex-col items-start cursor-pointer select-none overflow-hidden shadow-sm transition-colors duration-300 w-full"
    >
      {/* 3D Depth Layer for Ambient glowing gold light that expands on hover */}
      <motion.div
        style={{ transform: "translateZ(10px)" }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-clinic-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Top edge golden progress/highlight bar */}
      <motion.div
        style={{ transform: "translateZ(15px)" }}
        className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-clinic-teal-900 via-clinic-teal-700 to-clinic-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />

      {/* Concentric pulsing organic/gold rings behind icon (only visible on hover) */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute top-10 left-10 md:top-12 md:left-12 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none flex items-center justify-center z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0, 0.35, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute w-20 h-20 rounded-full border border-clinic-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0, 0.18, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-20 h-20 rounded-full border border-clinic-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <motion.div
          animate={{ scale: [1, 2.2, 1], opacity: [0, 0.08, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1.0 }}
          className="absolute w-20 h-20 rounded-full border border-clinic-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Floating healing particles / bubbles (rise on hover) */}
      {[...Array(4)].map((_, pIdx) => {
        const positions = [
          { left: "20%", delay: 0, duration: 2.2 },
          { left: "55%", delay: 0.4, duration: 2.6 },
          { left: "80%", delay: 0.2, duration: 2.4 },
          { left: "38%", delay: 0.6, duration: 1.9 },
        ];
        const pos = positions[pIdx];
        return (
          <motion.span
            key={pIdx}
            animate={{
              y: [-10, -180],
              opacity: [0, 0.85, 0],
              scale: [0.6, 1.3, 0.4],
              x: [0, pIdx % 2 === 0 ? 18 : -18, 0]
            }}
            initial={{ opacity: 0, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: pos.duration,
              delay: pos.delay,
              ease: "easeOut"
            }}
            className="absolute bottom-6 w-1.5 h-1.5 rounded-full bg-clinic-gold/40 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ left: pos.left }}
          />
        );
      })}

      {/* Icon with interactive spring movement and physical 3D float */}
      <motion.div
        style={{
          transform: "translateZ(40px)",
        }}
        className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-clinic-gold border border-clinic-border mb-8 shadow-sm z-10 group-hover:bg-clinic-teal-900 group-hover:text-white group-hover:border-clinic-gold/30 group-hover:scale-110 transition-all duration-300"
      >
        {icon}
      </motion.div>

      {/* Text block with physical 3D float */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="mb-4 z-10"
      >
        <h3 className="font-serif text-xl md:text-2xl text-clinic-teal-900 group-hover:text-clinic-teal-950 transition-colors duration-300">
          {title}
        </h3>
        {/* Elegant animated custom spring underline */}
        <div className="h-[2px] bg-clinic-gold mt-2 w-0 group-hover:w-16 transition-all duration-500 ease-out" />
      </div>

      <p 
        style={{ transform: "translateZ(20px)" }}
        className="text-clinic-charcoal/90 font-light leading-relaxed text-sm lg:text-base selection:bg-clinic-teal-900/10 transition-colors duration-300 group-hover:text-clinic-charcoal relative z-10"
      >
        {desc}
      </p>
    </motion.div>
  );
}

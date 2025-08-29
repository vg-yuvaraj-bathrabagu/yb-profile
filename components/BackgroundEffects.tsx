// File: components/BackgroundEffects.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Delay matrix effect start to avoid overwhelming during load
    const startDelay = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Matrix rain effect
      const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = new Array(columns).fill(1);

      // Randomize initial drop positions
      for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
      }

      const draw = () => {
        // Fade effect
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text properties
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px Fira Code, monospace';

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
          const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Subtle brightness
          const opacity = Math.min(1, drops[i] * fontSize / canvas.height);
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity * 0.3})`;
          ctx.fillText(text, x, y);

          // Reset drop to top when it reaches bottom
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 35);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeCanvas);
      };
    }, 4000); // Wait 4 seconds before starting matrix effect

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <>
      {/* Matrix Rain Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-20 opacity-40"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Scanning Line */}
      <motion.div
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-[1000] pointer-events-none shadow-[0_0_20px_var(--cyber-cyan)]"
        initial={{ translateY: -2, opacity: 0 }}
        animate={{
          translateY: ['0vh', '100vh'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
          opacity: {
            times: [0, 0.05, 0.95, 1],
          },
        }}
      />

      {/* Cyberpunk Grid */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10" 
        style={{
          background: `
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.1) 100%),
            linear-gradient(0deg, transparent 98%, rgba(0, 255, 255, 0.1) 100%)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  );
}
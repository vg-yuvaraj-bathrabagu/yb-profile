// File: components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="text-center py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="relative z-10"
      >
        {/* Avatar */}
        <motion.div
          className="w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto mb-8 relative rounded-full"
          animate={{
            boxShadow: [
              '0 0 30px rgba(0, 255, 255, 0.3)',
              '0 0 40px rgba(255, 0, 255, 0.3)',
              '0 0 30px rgba(0, 255, 255, 0.3)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 rounded-full blur-xl" />
          <div className="relative w-full h-full rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faCode} className="text-cyber-cyan text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-cyber-cyan to-cyber-magenta bg-clip-text text-transparent uppercase tracking-[4px]">
          YUVARAJ BATHRABAGU
        </h1>

        {/* Roles */}
        <motion.div 
          className="my-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.5 }}
        >
          {['Full Stack Engineer', 'Technical Lead', 'System Architect'].map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4 + index * 0.2 }}
              className="font-orbitron text-base md:text-lg lg:text-xl text-cyber-green uppercase tracking-[2px] before:content-['>_'] before:text-cyber-cyan before:font-bold before:mr-2"
            >
              {role}
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.5 }}
          className="text-sm md:text-base lg:text-lg text-text-secondary max-w-xs md:max-w-xl lg:max-w-2xl mx-auto mb-12 px-4"
        >
          14 years of cutting-edge experience in multilingual software programming, 
          technical architecture, automation, DevOps, and R&D innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center px-4"
        >
          <button
            onClick={() => scrollToSection('#skills')}
            className="relative bg-transparent border-2 border-cyber-cyan text-cyber-cyan px-8 py-3 font-orbitron text-sm font-semibold uppercase tracking-wider overflow-hidden transition-all hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_30px_var(--cyber-cyan),inset_0_0_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            Explore Skills
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="relative bg-transparent border-2 border-cyber-magenta text-cyber-magenta px-8 py-3 font-orbitron text-sm font-semibold uppercase tracking-wider overflow-hidden transition-all hover:bg-cyber-magenta hover:text-cyber-bg hover:shadow-[0_0_30px_var(--cyber-magenta),inset_0_0_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
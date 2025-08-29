// File: components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#timeline', label: 'Career' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleDownloadPDF = () => {
    window.print();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-5 right-5 z-[1001] hidden md:flex gap-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="bg-black/80 backdrop-blur-sm border-2 border-cyber-cyan text-cyber-cyan px-4 py-2 font-orbitron text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_20px_var(--cyber-cyan)] hover:-translate-y-0.5 will-change-transform"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={handleDownloadPDF}
          className="bg-black/80 backdrop-blur-sm border-2 border-cyber-cyan text-cyber-cyan px-4 py-2 font-orbitron text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_20px_var(--cyber-cyan)] hover:-translate-y-0.5 will-change-transform"
        >
          Download PDF
        </button>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-5 right-5 z-[1003] bg-black/90 border-2 border-cyber-cyan text-cyber-cyan p-3 text-xl rounded transition-all hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_20px_var(--cyber-cyan)]"
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/70 z-[1001]"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-0 right-0 w-[280px] h-screen bg-black/95 border-l-[3px] border-cyber-cyan shadow-[-5px_0_20px_rgba(0,0,0,0.5)] z-[1002] backdrop-blur-xl"
            >
              {/* Header */}
              <div className="p-8 pb-4 border-b border-cyber-cyan bg-cyber-cyan/5 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta animate-header-flow" />
                <div className="font-orbitron text-xl text-cyber-cyan font-bold text-center relative z-10">
                  theyuvaraj.dev
                </div>
              </div>

              {/* Links */}
              <div className="py-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-6 py-4 text-text-secondary font-orbitron text-sm uppercase tracking-wider transition-all hover:text-cyber-cyan hover:bg-cyber-cyan/10 hover:pl-10 hover:border-l-[3px] hover:border-cyber-cyan hover:shadow-[inset_0_0_10px_rgba(0,255,255,0.2)] relative group"
                  >
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-cyan rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleDownloadPDF}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="block w-full px-6 py-4 text-left text-text-secondary font-orbitron text-sm uppercase tracking-wider transition-all hover:text-cyber-cyan hover:bg-cyber-cyan/10 hover:pl-10 hover:border-l-[3px] hover:border-cyber-cyan hover:shadow-[inset_0_0_10px_rgba(0,255,255,0.2)] relative group"
                >
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-cyan rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
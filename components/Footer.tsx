// File: components/Footer.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/vg-yuvaraj-bathrabagu', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://linkedin.com/in/yuvaraj-bathrabagu-140b3472', label: 'LinkedIn' },
    { icon: faEnvelope, href: 'mailto:b.yuvaraj.er@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="mt-16 md:mt-24 p-8 border-t-2 border-cyber-cyan bg-black/80 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Professional Quote */}
        <div className="font-orbitron text-lg md:text-xl italic text-cyber-green mb-6 tracking-wider">
          "Step beyond the familiar, and you'll discover who you truly are."
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:gap-8 mb-6 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="text-cyber-cyan text-2xl md:text-3xl transition-all hover:text-cyber-magenta hover:scale-125 hover:drop-shadow-[0_0_10px_currentColor]"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>

        {/* Professional Info */}
        <div className="text-text-muted text-xs md:text-sm space-y-2">
          <p>© {new Date().getFullYear()} Yuvaraj Bathrabagu | Technical Lead & Full Stack Engineer</p>
          <p>14+ Years of Excellence in Software Development</p>
          <p className="text-cyber-cyan">Chennai, India | Available for Consultation</p>
        </div>
      </motion.div>
    </footer>
  );
}
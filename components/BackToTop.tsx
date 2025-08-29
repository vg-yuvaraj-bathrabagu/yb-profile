// File: components/BackToTop.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[1000] bg-black/80 backdrop-blur-sm border-2 border-cyber-cyan text-cyber-cyan p-3 rounded-full shadow-[0_0_20px_var(--cyber-cyan)] hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_30px_var(--cyber-cyan)] transition-all"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

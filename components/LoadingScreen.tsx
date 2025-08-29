// File: components/LoadingScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(0);

  const loadingMessages = [
    'INITIALIZING PORTFOLIO SYSTEM...',
    'LOADING PROFESSIONAL PROFILE...',
    'ESTABLISHING SECURE CONNECTION...',
    'COMPILING 14 YEARS OF EXPERIENCE...',
    'RENDERING TECHNICAL ACHIEVEMENTS...'
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((prev) => (prev + 1) % loadingMessages.length);
    }, 600);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-cyber-bg flex flex-col justify-center items-center"
        >
          <div className="text-center space-y-4">
            <div className="text-cyber-green font-mono text-sm md:text-base space-y-1">
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {loadingMessages[loadingText]}
              </motion.div>
            </div>
            
            <div className="w-[300px] h-1 bg-cyber-green/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan shadow-[0_0_20px_var(--cyber-green)]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </div>
            
            <motion.div
              className="text-cyber-cyan text-lg md:text-xl font-bold font-orbitron"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              SYSTEM READY
            </motion.div>

            <div className="mt-8">
              <div className="w-20 h-20 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-full animate-spin" />
                <div className="absolute inset-1 bg-cyber-bg rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-cyber-cyan" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="YB monogram">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="12"
                      fontWeight="700"
                      // fontFamily="Orbitron, ui-sans-serif, system-ui"
                    >
                      YB
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
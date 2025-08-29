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
                  <svg className="w-10 h-10 text-cyber-cyan" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
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
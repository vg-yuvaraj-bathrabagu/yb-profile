// File: app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import BackgroundEffects from '@/components/BackgroundEffects';
import HeroSection from '@/components/HeroSection';
import TerminalSection from '@/components/TerminalSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Konami Code Easter Egg
    let konamiCode: number[] = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode.push(e.keyCode);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.toString() === konamiSequence.toString()) {
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 3000);
        console.log('🔥 CYBERPUNK MODE ACTIVATED! 🔥');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Set loaded state for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Background Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navigation />

      {/* Main Portfolio Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-[1400px] mx-auto px-4 md:px-8 pt-8"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Terminal Section */}
        <TerminalSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Career Timeline */}
        <TimelineSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}
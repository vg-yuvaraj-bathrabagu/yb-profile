// File: components/TerminalSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalCommand {
  type: 'prompt' | 'output' | 'error' | 'success';
  text: string;
}

export default function TerminalSection() {
  const [displayedCommands, setDisplayedCommands] = useState<TerminalCommand[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  const commands: TerminalCommand[] = [
    { type: 'prompt', text: 'whoami' },
    { type: 'output', text: 'yuvaraj_bathrabagu' },
    { type: 'prompt', text: 'cat experience.txt' },
    { type: 'output', text: '14 years of full-stack development' },
    { type: 'output', text: 'Technical Leadership & Solution Architecture' },
    { type: 'output', text: 'DevOps, Automation & R&D Innovation' },
    { type: 'prompt', text: 'ls skills/' },
    { type: 'output', text: 'javascript  php  python  react  nodejs  docker  kubernetes  mongodb' },
    { type: 'prompt', text: 'current_status' },
    { type: 'success', text: 'Technical Lead @ Valgenesis India Pvt Ltd, Chennai' },
    { type: 'success', text: 'System ready for collaboration...' },
    { type: 'prompt', text: '' }
  ];

  useEffect(() => {
    if (currentIndex >= commands.length) {
      setShowCursor(true);
      return;
    }

    const timer = setTimeout(() => {
      if (currentIndex < commands.length) {
        setDisplayedCommands(prev => [...prev, commands[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? 4000 : 800);

    return () => clearTimeout(timer);
  }, [currentIndex, commands.length]);

  return (
    <section className="my-16 md:my-24 relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4.5 }}
        className="bg-black/90 border-2 border-cyber-cyan rounded-lg shadow-[0_0_50px_rgba(0,255,255,0.3),inset_0_0_50px_rgba(0,0,0,0.5)] overflow-hidden max-w-4xl mx-auto"
      >
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-cyber-dark to-cyber-darker px-4 py-3 flex items-center gap-2 border-b border-cyber-cyan">
          <div className="w-3 h-3 rounded-full bg-cyber-red" />
          <div className="w-3 h-3 rounded-full bg-cyber-orange" />
          <div className="w-3 h-3 rounded-full bg-cyber-green" />
          <span className="ml-4 font-fira text-xs text-text-secondary">
            yuvaraj@portfolio:~$ executive_summary.sh
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 md:p-6 font-fira text-xs md:text-sm leading-relaxed h-[250px] md:h-[300px] overflow-y-auto">
          {displayedCommands.map((command, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-2 ${
                command.type === 'prompt' ? 'before:content-["$_"] before:text-cyber-green before:font-bold' :
                command.type === 'output' ? 'text-cyber-cyan' :
                command.type === 'error' ? 'text-cyber-red' :
                command.type === 'success' ? 'text-cyber-green' : ''
              }`}
            >
              {command.text}
            </motion.div>
          ))}
          {showCursor && <span className="terminal-cursor" />}
        </div>
      </motion.div>
    </section>
  );
}
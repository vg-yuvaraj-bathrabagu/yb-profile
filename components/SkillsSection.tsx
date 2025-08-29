// File: components/SkillsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const skillCategories: SkillCategory[] = [
    {
      title: 'Core Development',
      skills: [
        { name: 'JavaScript/Node.js', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'React Native', percentage: 55 },
        { name: 'PHP', percentage: 93 },
        { name: 'Python', percentage: 85 },
        { name: 'TypeScript', percentage: 88 },
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      skills: [
        { name: 'Docker', percentage: 85 },
        { name: 'Linux Administration', percentage: 70 },
        { name: 'CI/CD Pipeline', percentage: 80 },
        { name: 'AWS/Cloud', percentage: 75 },
      ],
    },
    {
      title: 'Databases & Systems',
      skills: [
        { name: 'MongoDB', percentage: 70 },
        { name: 'MySQL/PostgreSQL', percentage: 85 },
        { name: 'Redis/Caching', percentage: 75 },
        { name: 'System Architecture', percentage: 85 },
      ],
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className="my-16 md:my-24 text-center px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-cyan uppercase tracking-[3px] mb-12 relative inline-block"
      >
        Skills Matrix
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-cyber-magenta to-transparent" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="group bg-black/60 border border-cyber-cyan rounded-xl p-6 md:p-8 relative overflow-hidden transition-all hover:border-cyber-magenta hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta" />
            
            <h3 className="font-orbitron text-base md:text-lg text-cyber-green uppercase tracking-[2px] mb-6">
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm text-text-secondary">
                      {skill.name}
                    </span>
                    <span className="font-orbitron text-xs text-cyber-cyan font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-black/50 rounded border border-cyber-cyan/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={controls}
                      variants={{
                        visible: { width: `${skill.percentage}%` }
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta relative shadow-[0_0_15px_var(--accent-glow)] skill-progress-bar"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
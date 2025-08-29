// File: components/AchievementsSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Achievement {
  title: string;
  company: string;
  description: string;
  metrics: { value: string; label: string }[];
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements: Achievement[] = [
    {
      title: 'Dynamic Report Module',
      company: 'TNQ Technologies',
      description: 'Developed a zero-code report generation system from scratch using RabbitMQ queues, YAML configurations, and JSONPath. The system processes data on-the-fly with built-in calculations and SQL functions.',
      metrics: [
        { value: '90%', label: 'Query Time Reduction' },
        { value: 'Zero', label: 'Code for New Reports' },
      ],
    },
    {
      title: 'Microservices Architecture',
      company: 'TNQ Technologies',
      description: 'Transformed monolithic CLI services into microservices using EFS. Implemented CloudWatch-based auto-scaling that monitors RabbitMQ metrics and dynamically spins up EC2 instances.',
      metrics: [
        { value: '75%', label: 'Processing Speed Boost' },
        { value: '60%', label: 'Cost Reduction' },
      ],
    },
    {
      title: 'ELK Stack Implementation',
      company: 'TNQ Technologies',
      description: 'Introduced centralized logging and monitoring using ELK stack for the auto-scaling microservices architecture. Provided real-time visibility into article generation processes.',
      metrics: [
        { value: '85%', label: 'Faster Issue Detection' },
        { value: '100%', label: 'Process Visibility' },
      ],
    },
    {
      title: 'Manufacturing Gateway System',
      company: 'Valgenesis',
      description: 'Led the complete design and development of a manufacturing data gateway from 0 to 1. Created a pluggable system that connects and collects data from manufacturing machines.',
      metrics: [
        { value: '0→1', label: 'Product Built' },
        { value: '3', label: 'Pilot Customers' },
      ],
    },
    {
      title: 'BFF Service Architecture',
      company: 'Valgenesis',
      description: 'Implemented Backend-for-Frontend service that enables seamless gateway deployment through JSON configuration without any code changes in frontend or backend.',
      metrics: [
        { value: 'Zero', label: 'Code Changes' },
        { value: '100%', label: 'Plugin Compatible' },
      ],
    },
    {
      title: 'AI Font Detection System',
      company: 'Valgenesis',
      description: 'Trained a YOLO model to detect licensed fonts in web applications using Playwright screenshots. The system automatically scans applications to ensure compliance.',
      metrics: [
        { value: '93%', label: 'Detection Accuracy' },
        { value: '80%', label: 'Testing Time Saved' },
      ],
    },
  ];

  return (
    <section id="achievements" className="my-16 md:my-24 text-center px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-cyan uppercase tracking-[3px] mb-12 relative inline-block"
      >
        Major Achievements
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-cyber-magenta to-transparent" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-black/60 border border-cyber-cyan rounded-xl p-6 md:p-8 relative overflow-hidden transition-all hover:border-cyber-magenta hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta" />
            
            <h3 className="font-orbitron text-lg md:text-xl lg:text-2xl text-cyber-green uppercase tracking-[2px] mb-2">
              {achievement.title}
            </h3>
            
            <div className="text-cyber-magenta font-semibold text-xs md:text-sm uppercase tracking-wider mb-4">
              {achievement.company}
            </div>
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              {achievement.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievement.metrics.map((metric, metricIndex) => (
                <div
                  key={metricIndex}
                  className="bg-cyber-darker p-3 md:p-4 rounded-lg border border-cyan-900/30"
                >
                  <div className="text-xl md:text-2xl font-bold text-cyber-cyan font-orbitron">
                    {metric.value}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                    {metric.label}
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
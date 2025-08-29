// File: components/TimelineSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineItem {
  date: string;
  company: string;
  role: string;
  description: string;
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems: TimelineItem[] = [
    {
      date: 'Sep 2023 - Present',
      company: 'Valgenesis India Pvt Ltd, Chennai',
      role: 'Technical Lead',
      description: 'Leading technical architecture and development teams for manufacturing solutions. Architected gateway system from 0 to 1, implemented BFF service architecture, and developed AI-based font detection system for compliance automation.',
    },
    {
      date: 'Jun 2022 - Jul 2023',
      company: 'Learnship, Chennai',
      role: 'Technical Lead',
      description: 'Led technical architecture and development teams. Responsible for solution design, technology selection, and implementing best practices across educational technology projects.',
    },
    {
      date: 'May 2021 - May 2022',
      company: 'KnackForge Soft Solutions, Chennai',
      role: 'Technical Lead',
      description: 'Led full-stack development projects, mentored junior developers, and established DevOps practices for continuous integration and deployment.',
    },
    {
      date: 'Feb 2020 - May 2021',
      company: 'Jouve India PVT LTD, Chennai',
      role: 'Lead Developer',
      description: 'Developed scalable web applications and managed development lifecycle from requirements analysis to production deployment.',
    },
    {
      date: 'Dec 2015 - Jan 2020',
      company: 'TNQ Technologies, Chennai',
      role: 'Senior Software Engineer',
      description: 'Built enterprise-level applications using modern frameworks and implemented automated testing and deployment processes. Created the report module and microservices architecture that revolutionized system performance.',
    },
    {
      date: 'Oct 2013 - Nov 2014',
      company: 'Buzzyears Education PVT LTD, Gurgaon',
      role: 'Software Engineer',
      description: 'Developed educational platforms and learning management systems with focus on user experience and scalability.',
    },
    {
      date: 'Aug 2010 - Sep 2013',
      company: 'G2 Technology, Coimbatore',
      role: 'Software Developer',
      description: 'Started career building web applications and learning full-stack development fundamentals with PHP, JavaScript, and database technologies.',
    },
  ];

  return (
    <section id="timeline" className="my-16 md:my-24 px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-cyan uppercase tracking-[3px] mb-12 relative text-center"
      >
        Career Timeline
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-cyber-magenta to-transparent" />
      </motion.h2>

      <div className="max-w-7xl mx-auto relative px-4 lg:px-8">
        {/* Timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyber-cyan to-cyber-magenta shadow-[0_0_20px_var(--cyber-cyan)]" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-full flex flex-col lg:grid lg:grid-cols-[1fr_12rem_1fr] lg:gap-x-8 items-center lg:items-center mb-20 relative`}
          >
            {/* Mobile-only card */}
            <div className="w-full lg:hidden order-2">
              <div className="w-full bg-black/80 border-2 border-cyber-cyan rounded-xl p-6 transition-all hover:border-cyber-magenta hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]">
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">{item.company}</h3>
                <h4 className="text-cyber-green font-semibold text-base mb-3">{item.role}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Desktop: left slot (only for even index) */}
            <div className="hidden lg:flex lg:col-start-1 lg:justify-end order-2 lg:order-1">
              {index % 2 === 0 && (
                <div className="w-full lg:max-w-xl bg-black/80 border-2 border-cyber-cyan rounded-xl p-6 transition-all hover:border-cyber-magenta hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]">
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">{item.company}</h3>
                  <h4 className="text-cyber-green font-semibold text-base mb-3">{item.role}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              )}
            </div>

            {/* Center column with date badge */}
            <div className="flex items-center justify-center my-6 lg:my-0 order-1 lg:order-2 lg:col-start-2">
              <div className="bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-cyber-bg px-4 py-2 rounded-full font-orbitron text-xs font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(0,255,255,0.5)] z-10">
                {item.date}
              </div>
            </div>

            {/* Desktop: right slot (only for odd index) */}
            <div className="hidden lg:flex lg:col-start-3 lg:justify-start order-2 lg:order-3">
              {index % 2 === 1 && (
                <div className="w-full lg:max-w-xl bg-black/80 border-2 border-cyber-cyan rounded-xl p-6 transition-all hover:border-cyber-magenta hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]">
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">{item.company}</h3>
                  <h4 className="text-cyber-green font-semibold text-base mb-3">{item.role}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
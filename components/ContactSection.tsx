// File: components/ContactSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface ContactItem {
  icon: any;
  label: string;
  value: string;
  href?: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems: ContactItem[] = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'b.yuvaraj.er@gmail.com',
      href: 'mailto:b.yuvaraj.er@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 84385 78974',
      href: 'tel:+918438578974',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Chennai, India',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: 'https://linkedin.com/in/yuvaraj-bathrabagu',
    },
  ];

  return (
    <section id="contact" className="my-16 md:my-24 text-center px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-cyan uppercase tracking-[3px] mb-12 relative inline-block"
      >
        Initialize Contact
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-cyber-magenta to-transparent" />
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {contactItems.map((item, index) => {
          const Component = item.href ? 'a' : 'div';
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Component
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-black/80 border-2 border-cyber-green rounded-lg p-6 transition-all hover:border-cyber-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-1 cursor-pointer group h-full"
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="text-3xl md:text-4xl text-cyber-green mb-4 transition-all group-hover:text-cyber-cyan group-hover:scale-110" 
                />
                <div className="text-text-secondary text-sm mb-2">{item.label}</div>
                <div className="text-text-primary font-semibold text-sm break-all">{item.value}</div>
              </Component>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
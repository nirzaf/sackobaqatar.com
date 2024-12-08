import { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps, fadeInUp } from './interfaces';

export const Section: FC<SectionProps> = ({ title, children, className = '' }) => (
  <section className={`py-16 ${className}`}>
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-[#541D67]"
        {...fadeInUp}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

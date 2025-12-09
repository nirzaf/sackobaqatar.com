import { FC } from 'react';
import { motion } from 'framer-motion';
import { ContentSectionProps } from './types';

export const ContentSection: FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mb-16 space-y-6 text-slate-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">{title}</h2>
      <div className="h-0.5 w-16 bg-white/40 rounded-full" />
      {children}
    </motion.section>
  );
};

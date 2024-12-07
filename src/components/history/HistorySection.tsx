import { FC } from 'react';
import { motion } from 'framer-motion';

interface HistorySectionProps {
  title: string;
  content: string;
}

export const HistorySection: FC<HistorySectionProps> = ({ title, content }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="prose prose-lg max-w-none mb-16"
    >
      <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">{title}</h2>
      <p className="text-primary-600 leading-relaxed">{content}</p>
    </motion.section>
  );
};

import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  content: string;
}

export const TimelineEvent: FC<TimelineEventProps> = ({ year, title, content }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-[#89C3EA]/20 last:border-l-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#586992]" />
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <span className="text-[#B80F8A] font-semibold">{year}</span>
      <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

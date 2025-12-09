import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  content: string;
}

export const TimelineEvent: FC<TimelineEventProps> = ({ year, title, content }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-white/15 last:border-l-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white shadow-md" />
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <span className="text-[#F5C2E7] font-semibold">{year}</span>
      <h3 className="text-xl font-bold text-white mt-1 mb-2 leading-snug">{title}</h3>
      <p className="text-slate-100/85">{content}</p>
    </div>
  </motion.div>
);

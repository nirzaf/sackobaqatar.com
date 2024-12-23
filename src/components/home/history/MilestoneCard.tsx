import { FC } from 'react';
import { motion } from 'framer-motion';

interface MilestoneCardProps {
  year: string;
  yearShort: string;
  title: string;
  description: string;
  delay?: number;
}

export const MilestoneCard: FC<MilestoneCardProps> = ({ 
  year, 
  yearShort, 
  title, 
  description, 
  delay = 0 
}) => (
  <motion.div
    className="flex items-center space-x-6 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0 w-16 h-16 bg-white/10 group-hover:bg-white/20 rounded-2xl flex flex-col items-center justify-center transform group-hover:scale-110 transition-all duration-300 border border-white/20">
      <span className="text-2xl font-bold">{yearShort}</span>
      <span className="text-xs text-white/70">{year}</span>
    </div>
    <div className="flex-grow max-w-[350px]">
      <h4 className="font-bold text-xl mb-2 text-white group-hover:text-white/90 transition-colors">{title}</h4>
      <p className="text-white/95 leading-relaxed font-medium">{description}</p>
    </div>
  </motion.div>
);

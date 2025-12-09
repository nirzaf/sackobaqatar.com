import { FC } from 'react';
import { motion } from 'framer-motion';

interface InitiativeCardProps {
  title: string;
  content: string;
}

export const InitiativeCard: FC<InitiativeCardProps> = ({ title, content }) => (
  <motion.div 
    className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-slate-100"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-xl font-bold text-white mb-3 drop-shadow">{title}</h3>
    <p className="text-slate-100/85">{content}</p>
  </motion.div>
);

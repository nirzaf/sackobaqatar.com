import { FC } from 'react';
import { motion } from 'framer-motion';

interface InitiativeCardProps {
  title: string;
  content: string;
}

export const InitiativeCard: FC<InitiativeCardProps> = ({ title, content }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-xl font-bold text-[#541D67] mb-3">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);
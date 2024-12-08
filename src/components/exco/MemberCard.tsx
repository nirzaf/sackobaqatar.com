import { FC } from 'react';
import { motion } from 'framer-motion';
import { MemberCardProps } from './types';

export const MemberCard: FC<MemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </motion.div>
  );
};

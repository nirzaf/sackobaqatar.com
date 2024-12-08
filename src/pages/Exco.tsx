import { FC } from 'react';
import { motion } from 'framer-motion';
import { YearTabs, excoYears } from '../components/exco';

export const Exco: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-700 mb-12">Executive Committee</h1>
          <YearTabs years={excoYears} />
        </motion.div>
      </div>
    </div>
  );
};
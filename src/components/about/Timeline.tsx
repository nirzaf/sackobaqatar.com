import { FC } from 'react';
import { motion } from 'framer-motion';
import { TimelineProps } from './types';

export const Timeline: FC<TimelineProps> = ({ events }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-display-md text-primary-700 mb-8">Our Journey</h2>
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            className="relative pl-8 border-l-2 border-primary-200"
          >
            <div className="absolute -left-3 top-0">
              <div className="w-6 h-6 rounded-full bg-primary-100 border-2 border-primary-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-primary-700 mb-1">{event.year}</h3>
              <h4 className="text-primary-600 mb-2">{event.title}</h4>
              <p className="text-primary-500">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface HistoryTimelineProps {
  events: TimelineEvent[];
}

export const HistoryTimeline: FC<HistoryTimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 transform -translate-x-1/2" />

      {/* Timeline events */}
      {events.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {/* Year */}
            <div className="flex-1 md:text-right md:pr-8">
              <div className="inline-block bg-primary-700 text-white px-4 py-2 rounded-lg text-xl font-bold">
                {event.year}
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-700 rounded-full transform -translate-x-1/2 mt-3 md:mt-0" />

            {/* Event content */}
            <div className="flex-1 pl-8 md:pl-8 mt-4 md:mt-0">
              <h3 className="text-xl font-bold text-primary-900 mb-2">{event.title}</h3>
              <p className="text-primary-600">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { HistoryTimelineProps, TimelineEvent, fadeInUp } from './types';

const TimelineItem: FC<{ event: TimelineEvent; index: number }> = memo(({ event, index }) => (
  <motion.div 
    className="flex gap-8 items-start mb-12 last:mb-0"
    {...fadeInUp}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex-shrink-0 w-24 text-right">
      <span className="text-2xl font-bold text-primary-900">{event.year}</span>
    </div>
    <div className="flex-1">
      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-4 before:w-4 before:h-4 before:bg-primary-500 before:rounded-full before:-translate-y-1/2">
        <h3 className="text-xl font-bold text-primary-900 mb-2">{event.title}</h3>
        <p className="text-primary-600">{event.description}</p>
      </div>
    </div>
  </motion.div>
));

export const HistoryTimeline: FC<HistoryTimelineProps> = memo(({ events }) => (
  <div className="relative before:content-[''] before:absolute before:left-28 before:top-0 before:bottom-0 before:w-px before:bg-primary-200">
    {events.map((event, index) => (
      <TimelineItem key={event.year} event={event} index={index} />
    ))}
  </div>
));

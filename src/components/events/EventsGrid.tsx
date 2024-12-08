import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar } from 'react-feather';
import { EventsGridProps } from './types';

export const EventsGrid: FC<EventsGridProps> = ({
  events,
  selectedCategory,
  searchQuery,
  activeSection
}) => {
  return (
    <div className="container mx-auto px-6 pb-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + searchQuery + activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${event.status === 'upcoming' ? 'bg-blue-400 text-white' :
                      event.status === 'ongoing' ? 'bg-purple-400 text-white' :
                      'bg-pink-400 text-white'}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white text-sm mb-2 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
                  <span>•</span>
                  <span>{event.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {event.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

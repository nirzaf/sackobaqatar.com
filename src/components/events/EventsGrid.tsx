import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar } from 'react-feather';
import { EventsGridProps } from '@/types/components/events';

export const EventsGrid: FC<EventsGridProps> = ({
  events,
  searchQuery,
  activeSection
}) => {
  return (
    <div className="container mx-auto px-6 pb-24">
      <AnimatePresence mode="wait">
        {events.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <Calendar className="w-16 h-16 text-[#9A78AB] mb-4" />
            <h3 className="text-2xl font-bold text-[#541D67] mb-2">No Events Found</h3>
            <p className="text-[#5B4886] max-w-md">
              {searchQuery 
                ? `No events found matching "${searchQuery}". Try adjusting your search.` 
                : `No ${activeSection} events at the moment. Check back later!`}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={searchQuery + activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#F8F6F9]">
                  {event.images[0] ? (
                    <img
                      src={event.images[0].url}
                      alt={event.images[0].title || event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-[#9A78AB] opacity-50" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/90 text-[#541D67] backdrop-blur-sm">
                      {event.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 text-[#9A78AB] text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#541D67] group-hover:text-[#B62D71] transition-colors">
                    {event.name}
                  </h3>
                  
                  {event.description && (
                    <p className="text-[#5B4886]/80 text-sm line-clamp-2 mb-4">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

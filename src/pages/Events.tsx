import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Navigation,
  EventsGrid,
  useEvents
} from '../components/events';

export const Events: FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredEvents,
    activeSection,
    setActiveSection,
  } = useEvents();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#541D67] to-[#B62D71]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-3xl text-white font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Events & Activities
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Stay updated with our upcoming and past events
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#B1B3CE]/20 mb-8">
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <EventsGrid
            events={filteredEvents}
            searchQuery={searchQuery}
            activeSection={activeSection}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Events;

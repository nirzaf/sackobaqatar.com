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
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#F8F6F9] to-[#F0E6EC] py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#9A78AB]/10 rounded-full blur-3xl" />
          <div className="absolute -top-4 left-1/3 w-24 h-24 bg-[#B62D71]/10 rounded-full blur-2xl" />
          
          <h1 className="relative text-4xl font-bold text-[#541D67] mb-4">
            Events
          </h1>
          <p className="relative text-lg text-[#5B4886]">
            Stay updated with our upcoming and past events
          </p>
        </motion.div>

        <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#B1B3CE]/20">
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-0"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#9A78AB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#B62D71]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <EventsGrid
            events={filteredEvents}
            searchQuery={searchQuery}
            activeSection={activeSection}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none" />
    </div>
  );
};

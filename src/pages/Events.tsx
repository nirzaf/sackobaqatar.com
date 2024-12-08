import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Navigation,
  Filters,
  EventsGrid,
  useEvents
} from '../components/events';

export const Events: FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredEvents,
    activeSection,
    setActiveSection,
    categories
  } = useEvents();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-primary-900 mb-4"
        >
          Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-primary-600"
        >
          Stay updated with our upcoming and past events
        </motion.p>
      </div>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <EventsGrid
        events={filteredEvents}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        activeSection={activeSection}
      />
    </div>
  );
};

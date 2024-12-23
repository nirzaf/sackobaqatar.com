import { FC, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EventsHero } from '../components/events/EventsHero';
import { YearFilter } from '../components/events/YearFilter';
import { EventsGrid } from '../components/events/EventsGrid';
import { events as staticEvents } from '../data/events';
import { useEventFiltering } from '../hooks/useEventFiltering';

export const Events: FC = () => {
  const [loading, setLoading] = useState(true);

  // Use custom hook for event filtering logic
  const {
    years,
    selectedYear,
    setSelectedYear,
    filteredEvents
  } = useEventFiltering(staticEvents);

  // Set loading state
  useEffect(() => {
    setLoading(false);
  }, []);

  // Memoize the search query and active section for EventsGrid
  const gridProps = useMemo(() => ({
    events: filteredEvents,
    searchQuery: '',
    activeSection: selectedYear === 'all' ? 'all' : selectedYear
  }), [filteredEvents, selectedYear]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#541D67]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <EventsHero />
      <YearFilter
        years={years}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />
      <EventsGrid {...gridProps} />

      {/* Embedded Section */}
      <section className="py-8 bg-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <iframe
              src="https://workdrive.zohoexternal.com/embed/m6rgwd6342763b5cc428aa3cb0b1f2b90e00c?toolbar=false&layout=grid&appearance=light&themecolor=green"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              width="100%"
              height="1000"
              title="Embed code"
              className="w-full shadow-lg rounded-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

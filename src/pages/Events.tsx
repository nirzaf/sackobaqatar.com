import { FC, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EventsHero } from '../components/events/EventsHero';
import { YearFilter } from '../components/events/YearFilter';
import { EventsGrid } from '../components/events/EventsGrid';
import { EventImageGallery } from '../components/events/EventImageGallery';
import { EventCards } from '../components/events/EventCards';
import { events as staticEvents } from '../data/events';
import { useEventFiltering } from '../hooks/useEventFiltering';
import { getCompleteEventImageYears } from '../data/completeEventImageData';

export const Events: FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'cards' | 'events' | 'gallery'>('cards');

  // Use custom hook for event filtering logic
  const {
    years,
    selectedYear,
    setSelectedYear,
    filteredEvents
  } = useEventFiltering(staticEvents);

  // Get available years from complete image data for gallery
  const galleryYears = useMemo(() => getCompleteEventImageYears(), []);
  const allYears = useMemo(() => {
    const combined = [...new Set([...years, ...galleryYears])];
    return combined.sort((a, b) => parseInt(b) - parseInt(a));
  }, [years, galleryYears]);

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

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('cards')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 ${activeTab === 'cards'
                ? 'bg-[#541D67] text-white shadow-md'
                : 'bg-white text-[#541D67] border border-[#541D67] hover:bg-[#F8F6F9]'
                }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 ${activeTab === 'events'
                ? 'bg-[#B62D71] text-white shadow-md'
                : 'bg-white text-[#B62D71] border border-[#B62D71] hover:bg-[#F8F6F9]'
                }`}
            >
              Event Details
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 ${activeTab === 'gallery'
                ? 'bg-[#D946EF] text-white shadow-md'
                : 'bg-white text-[#D946EF] border border-[#D946EF] hover:bg-[#F8F6F9]'
                }`}
            >
              Image Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Year Filter - Only show for events and gallery tabs */}
      {activeTab !== 'cards' && (
        <YearFilter
          years={activeTab === 'events' ? years : allYears}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      )}

      {/* Content based on active tab */}
      {activeTab === 'cards' ? (
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EventCards onEventClick={(_, year) => {
              setSelectedYear(year);
              setActiveTab('gallery');
            }} />
          </motion.div>
        </div>
      ) : activeTab === 'events' ? (
        <EventsGrid {...gridProps} />
      ) : (
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#541D67] mb-4">
                Event Image Gallery
              </h2>
              <p className="text-[#5B4886] max-w-2xl mx-auto">
                Browse through our collection of event photos organized by year and category.
                Click on any image to view it in full size.
              </p>
            </div>
            <EventImageGallery selectedYear={selectedYear} />
          </motion.div>
        </div>
      )}


    </div>
  );
};

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
import { PageMeta } from '../components/shared/PageMeta';

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
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A2A] via-[#0F0E40] to-[#0B0A1D] text-slate-100">
      <PageMeta
        title="SACKOBA Qatar Events | Browse & Gallery"
        description="Explore SACKOBA Qatar events by year, view highlights, and browse the image gallery."
        canonical="https://sackobaqatar.com/events"
        ogImage="https://sackobaqatar.com/images/og/events.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Events',
          'url': 'https://sackobaqatar.com/events'
        }}
      />
      <EventsHero />

      {/* Tab Navigation */}
      <div className="bg-[#0F0E40]/85 border-b border-white/10 sticky top-0 z-10 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('cards')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 backdrop-blur ${activeTab === 'cards'
                ? 'bg-white/20 text-white shadow-md border border-white/40'
                : 'bg-white/5 text-white/80 border border-white/15 hover:bg-white/10 hover:text-white'
                }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 backdrop-blur ${activeTab === 'events'
                ? 'bg-white/20 text-white shadow-md border border-white/40'
                : 'bg-white/5 text-white/80 border border-white/15 hover:bg-white/10 hover:text-white'
                }`}
            >
              Main Events
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-6 rounded-lg font-medium text-sm transition-colors duration-200 backdrop-blur ${activeTab === 'gallery'
                ? 'bg-white/20 text-white shadow-md border border-white/40'
                : 'bg-white/5 text-white/80 border border-white/15 hover:bg-white/10 hover:text-white'
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
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow">
                Event Image Gallery
              </h2>
              <p className="text-slate-100/85 max-w-2xl mx-auto">
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

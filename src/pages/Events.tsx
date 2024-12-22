import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, Search, X } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { format } from 'date-fns';
import { Dialog } from '@headlessui/react';
import { events as staticEvents } from '../data/events';

interface EventImage {
  url: string;
  title: string;
}

interface Event {
  id: string;
  year: string;
  name: string;
  images: EventImage[];
  date: string;
  description?: string;
}

export const Events: FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [years, setYears] = useState<string[]>([]);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static events data instead of fetching from API
    setEvents(staticEvents);
    
    // Extract unique years from static events
    const uniqueYears = Array.from(new Set(staticEvents.map((event: Event) => event.year)))
      .sort((a, b) => b.localeCompare(a));
    setYears(['all', ...uniqueYears]);
    
    setLoading(false);
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesYear = selectedYear === 'all' || event.year === selectedYear;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#541D67] to-[#B62D71]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
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
            Explore our journey through the years
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#B1B3CE]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            {/* Year Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="w-full md:w-48 px-4 py-2.5 bg-white text-[#541D67] rounded-lg text-sm font-medium
                  border border-[#B1B3CE]/20 hover:bg-[#F8F6F9] transition-all duration-300
                  flex items-center justify-between"
              >
                <span>{selectedYear === 'all' ? 'All Years' : selectedYear}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 w-full md:w-48 mt-2 bg-white rounded-lg shadow-lg border border-[#B1B3CE]/20 py-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsYearDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-[#F8F6F9] transition-colors
                        ${selectedYear === year ? 'text-[#B62D71] font-medium' : 'text-[#5B4886]'}`}
                    >
                      {year === 'all' ? 'All Years' : year}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A78AB]" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white text-[#5B4886] rounded-lg text-sm
                  border border-[#B1B3CE]/20 focus:outline-none focus:ring-2 focus:ring-[#541D67]/20
                  placeholder:text-[#5B4886]/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-[#9A78AB] hover:text-[#541D67]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#541D67]"></div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <Calendar className="w-16 h-16 text-[#9A78AB] mb-4" />
            <h3 className="text-2xl font-bold text-[#541D67] mb-2">No Events Found</h3>
            <p className="text-[#5B4886] max-w-md">
              {searchQuery 
                ? `No events found matching "${searchQuery}". Try adjusting your search.` 
                : 'No events found for the selected criteria.'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300
                  cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8F6F9]">
                  {event.images[0] ? (
                    <LazyLoadImage
                      src={event.images[0].url}
                      alt={event.images[0].title}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-[#9A78AB] opacity-50" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#9A78AB] text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[#541D67] group-hover:text-[#B62D71] transition-colors">
                    {event.name}
                  </h3>

                  {event.images.length > 1 && (
                    <p className="text-[#9A78AB] text-sm mb-4">
                      +{event.images.length - 1} more photos
                    </p>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Embedded Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <iframe
              src="https://workdrive.zohoexternal.com/embed/m6rgwd6342763b5cc428aa3cb0b1f2b90e00c?toolbar=false&layout=grid&appearance=light&themecolor=green"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              width="800"
              height="520"
              title="Embed code"
              className="w-full mx-auto shadow-lg rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <Dialog
        open={selectedEvent !== null}
        onClose={closeEventModal}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            {selectedEvent && (
              <div className="relative">
                <button
                  onClick={closeEventModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white
                    transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-[#541D67]" />
                </button>

                <div className="aspect-video relative bg-[#F8F6F9]">
                  {selectedEvent.images[currentImageIndex] && (
                    <LazyLoadImage
                      src={selectedEvent.images[currentImageIndex].url}
                      alt={selectedEvent.images[currentImageIndex].title}
                      effect="blur"
                      className="w-full h-full object-contain"
                    />
                  )}

                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                          bg-white/80 hover:bg-white transition-colors duration-200"
                      >
                        <ChevronDown className="w-5 h-5 text-[#541D67] rotate-90" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                          bg-white/80 hover:bg-white transition-colors duration-200"
                      >
                        <ChevronDown className="w-5 h-5 text-[#541D67] -rotate-90" />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#9A78AB] text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(selectedEvent.date), 'MMMM d, yyyy')}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#541D67] mb-4">
                    {selectedEvent.name}
                  </h2>

                  {selectedEvent.description && (
                    <p className="text-[#5B4886] mb-4">
                      {selectedEvent.description}
                    </p>
                  )}

                  {selectedEvent.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-4">
                      {selectedEvent.images.map((image, index) => (
                        <button
                          key={image.url}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden
                            ${currentImageIndex === index ? 'ring-2 ring-[#541D67]' : ''}`}
                        >
                          <LazyLoadImage
                            src={image.url}
                            alt={image.title}
                            effect="blur"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

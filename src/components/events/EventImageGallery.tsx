import { FC, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PhotoIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { getCompleteEventImageData, EventCategory, YearGroup } from '../../data/completeEventImageData';
import { ImageModal } from './ImageModal';
import { EventSearchAndFilter } from './EventSearchAndFilter';
import { getOptimizedImageUrl, getImageSizes } from '../../utils/imageOptimization';
import './EventStyles.css';




interface EventImageGalleryProps {
  selectedYear?: string;
}

export const EventImageGallery: FC<EventImageGalleryProps> = ({ selectedYear = 'all' }) => {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    eventName: string;
    description?: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterYear, setFilterYear] = useState(selectedYear);

  const eventData = useMemo(() => getCompleteEventImageData(), []);

  // Get available categories and years for filters
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    eventData.forEach(yearGroup => {
      yearGroup.events.forEach(event => {
        categories.add(event.category);
      });
    });
    return Array.from(categories).sort();
  }, [eventData]);

  const availableYears = useMemo(() => {
    return eventData.map(group => group.year).sort((a, b) => parseInt(b) - parseInt(a));
  }, [eventData]);

  // Filter data based on search, category, and year
  const filteredData = useMemo(() => {
    let filtered = eventData;

    // Filter by year
    if (filterYear !== 'all') {
      filtered = filtered.filter(yearGroup => yearGroup.year === filterYear);
    }

    // Filter by category and search query
    if (selectedCategory !== 'all' || searchQuery) {
      filtered = filtered.map(yearGroup => ({
        ...yearGroup,
        events: yearGroup.events.filter(event => {
          // Category filter
          const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;

          // Search filter
          const matchesSearch = !searchQuery ||
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.images.some(img =>
              img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              img.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              img.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );

          return matchesCategory && matchesSearch;
        })
      })).filter(yearGroup => yearGroup.events.length > 0);
    }

    return filtered;
  }, [eventData, filterYear, selectedCategory, searchQuery]);

  // Calculate total results
  const totalResults = useMemo(() => {
    return filteredData.reduce((total, yearGroup) => total + yearGroup.events.length, 0);
  }, [filteredData]);

  const toggleEventExpansion = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const openImageModal = useCallback((imageUrl: string, imageTitle: string, eventName: string, description?: string) => {
    setSelectedImage({ url: imageUrl, title: imageTitle, eventName, description });
  }, []);

  // Handle filter changes
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleCategoryFilter = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleYearFilter = useCallback((year: string) => {
    setFilterYear(year);
  }, []);

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (filteredData.length === 0) {
    return (
      <div className="text-center py-12">
        <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No images found</h3>
        <p className="mt-1 text-sm text-gray-500">
          {selectedYear === 'all' 
            ? 'No event images are available at the moment.' 
            : `No images found for ${selectedYear}.`}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8" style={{ backgroundColor: 'white', color: '#333' }}>
      {/* Search and Filter Component */}
      <EventSearchAndFilter
        onSearchChange={handleSearchChange}
        onCategoryFilter={handleCategoryFilter}
        onYearFilter={handleYearFilter}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedYear={filterYear}
        availableYears={availableYears}
        availableCategories={availableCategories}
        totalResults={totalResults}
      />

      {filteredData.map((yearGroup: YearGroup) => (
        <motion.div
          key={yearGroup.year}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ backgroundColor: 'white', color: '#333' }}
        >
          <div className="year-header" style={{ background: 'linear-gradient(to right, #541D67, #B62D71)', color: 'white' }}>
            <h2 className="text-xl font-bold text-white" style={{ color: 'white' }}>
              {yearGroup.year}
              <span className="ml-2 text-sm font-normal">({yearGroup.events.length} events)</span>
            </h2>
          </div>

          <div className="divide-y divide-gray-200 bg-white rounded-lg shadow overflow-hidden" style={{ backgroundColor: 'white', color: '#333' }}>
            {yearGroup.events.map((event: EventCategory) => {
              const isExpanded = expandedEvents.has(event.id);
              
              return (
                <div key={event.id} className="event-container p-6" style={{ backgroundColor: 'white', color: '#333', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <button
                    onClick={() => toggleEventExpansion(event.id)}
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 -m-2 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="event-title" style={{ color: '#541D67', fontWeight: 600 }}>
                          {event.name}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.category === 'Sports' ? 'bg-green-100 text-green-800' :
                          event.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                          event.category === 'Religious' ? 'bg-blue-100 text-blue-800' :
                          event.category === 'Social' ? 'bg-yellow-100 text-yellow-800' :
                          event.category === 'Academic' ? 'bg-indigo-100 text-indigo-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.category}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-1">
                        {event.date && (
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4 text-gray-600" />
                            <span style={{ color: '#4B5563' }}>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center space-x-1">
                            <MapPinIcon className="h-4 w-4 text-gray-600" />
                            <span style={{ color: '#4B5563' }}>{event.location}</span>
                          </div>
                        )}
                        {event.attendees && (
                          <div className="flex items-center space-x-1">
                            <UserGroupIcon className="h-4 w-4 text-gray-600" />
                            <span style={{ color: '#4B5563' }}>{event.attendees} attendees</span>
                          </div>
                        )}
                      </div>

                      {event.description && (
                        <p className="event-description mt-2" style={{ color: '#4B5563' }}> 
                          {event.description}
                        </p>
                      )}

                      <p className="text-sm text-gray-500">
                        {event.images.length} image{event.images.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-[#B62D71] transition-transform duration-200 ml-4 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Image Grid */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {event.images.map((image, index) => (
                            <motion.div
                              key={image.filename}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                              onClick={() => openImageModal(image.url, image.title, event.name, image.description)}
                            >
                              <img
                                src={getOptimizedImageUrl(image.url, getImageSizes('gallery'))}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                                onError={(e) => {
                                  // Fallback to original URL if optimized version fails
                                  const target = e.target as HTMLImageElement;
                                  if (target.src !== image.url) {
                                    target.src = image.url;
                                  }
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                              <div className="event-image-overlay absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)' }}>
                                <p className="event-image-text text-xs font-semibold truncate" style={{ color: '#111827' }}>
                                  {image.title}
                                </p>
                                {image.description && (
                                  <p className="event-image-text text-xs truncate mt-1" style={{ color: '#4B5563' }}>
                                    {image.description}
                                  </p>
                                )}
                                {image.tags && image.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="event-tag text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' }}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageUrl={selectedImage.url}
          imageTitle={selectedImage.title}
          eventName={selectedImage.eventName}
          description={selectedImage.description}
        />
      )}
    </div>
  );
};

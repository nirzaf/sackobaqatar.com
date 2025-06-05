import { FC, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PhotoIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { getEventImageData, EventCategory, YearGroup } from '../../data/eventImageData';
import { ImageModal } from './ImageModal';
import { EventSearchAndFilter } from './EventSearchAndFilter';
import { getOptimizedImageUrl, getImageSizes } from '../../utils/imageOptimization';
import { getCategoryClasses, getCategoryDisplayName } from '../../utils/eventCategories';



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

  const eventData = useMemo(() => getEventImageData(), []);

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
    <div className="space-y-8">
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
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Year Header */}
          <div className="bg-gradient-to-r from-[#541D67] to-[#B62D71] px-6 py-4">
            <h2 className="text-2xl font-bold text-white">{yearGroup.year}</h2>
            <p className="text-white/80 text-sm">
              {yearGroup.events.length} event{yearGroup.events.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Events */}
          <div className="divide-y divide-gray-200">
            {yearGroup.events.map((event: EventCategory) => {
              const isExpanded = expandedEvents.has(event.id);
              
              return (
                <div key={event.id} className="p-6 bg-white">
                  {/* Event Header */}
                  <button
                    onClick={() => toggleEventExpansion(event.id)}
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 -m-2 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-[#541D67]">
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
                            <span className="text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center space-x-1">
                            <MapPinIcon className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-600">{event.location}</span>
                          </div>
                        )}
                        {event.attendees && (
                          <div className="flex items-center space-x-1">
                            <UserGroupIcon className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-600">{event.attendees} attendees</span>
                          </div>
                        )}
                      </div>

                      {event.description && (
                        <p className="text-sm text-gray-700 mb-2 line-clamp-2">
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
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-medium truncate">
                                  {image.title}
                                </p>
                                {image.description && (
                                  <p className="text-white/80 text-xs truncate mt-1">
                                    {image.description}
                                  </p>
                                )}
                                {image.tags && image.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
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

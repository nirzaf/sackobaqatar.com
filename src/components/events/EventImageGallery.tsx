import { FC, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PhotoIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { getCompleteEventImageData, EventCategory, YearGroup } from '../../data/completeEventImageData';
import { ImageModal } from './ImageModal';
import { EventSearchAndFilter } from './EventSearchAndFilter';
// import { getOptimizedImageUrl, getImageSizes } from '../../utils/imageOptimization';
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

  const eventData = useMemo(() => {
    const data = getCompleteEventImageData();
    console.log('🔍 EventImageGallery: Loaded event data:', data);
    console.log('📊 EventImageGallery: Total year groups:', data.length);
    if (data.length > 0) {
      console.log('📅 EventImageGallery: First year group:', data[0]);
      if (data[0].events.length > 0) {
        console.log('🎉 EventImageGallery: First event:', data[0].events[0]);
        if (data[0].events[0].images.length > 0) {
          console.log('🖼️ EventImageGallery: First image:', data[0].events[0].images[0]);
          console.log('🔗 EventImageGallery: First image URL:', data[0].events[0].images[0].url);
        }
      }
    }
    return data;
  }, []);

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

    console.log('🔍 Filtered data:', filtered);
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



  if (!eventData || eventData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <PhotoIcon className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Event Images Available</h3>
        <p className="text-gray-500 text-center max-w-md">
          There are currently no event images to display. Please check back later or contact the administrator.
        </p>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="space-y-6">
        <EventSearchAndFilter
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedYear={filterYear}
          availableCategories={availableCategories}
          availableYears={availableYears}
          onSearchChange={handleSearchChange}
          onCategoryFilter={handleCategoryFilter}
          onYearFilter={handleYearFilter}
          totalResults={totalResults}
        />

        <div className="flex flex-col items-center justify-center py-12">
          <PhotoIcon className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Found</h3>
          <p className="text-gray-500 text-center max-w-md">
            No events match your current filters. Try adjusting your search criteria or clearing the filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <EventSearchAndFilter
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedYear={filterYear}
        availableCategories={availableCategories}
        availableYears={availableYears}
        onSearchChange={handleSearchChange}
        onCategoryFilter={handleCategoryFilter}
        onYearFilter={handleYearFilter}
        totalResults={totalResults}
      />

      {filteredData.map((yearGroup: YearGroup) => (
        <motion.div
          key={yearGroup.year}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${event.category === 'Sports' ? 'bg-green-100 text-green-800' :
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

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          {event.images.length} image{event.images.length !== 1 ? 's' : ''}
                        </p>
                        <p className="text-xs text-[#B62D71] font-medium">
                          Click to {isExpanded ? 'collapse' : 'expand'} gallery
                        </p>
                      </div>

                      {/* Preview images when collapsed */}
                      {!isExpanded && event.images.length > 0 && (
                        <div className="flex space-x-2 mt-3 overflow-hidden">
                          {event.images.slice(0, 4).map((image, index) => {
                            console.log(`🖼️ Rendering preview image ${index + 1}:`, image.url);
                            return (
                              <div
                                key={image.filename}
                                className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openImageModal(image.url, image.title, event.name, image.description);
                                }}
                              >
                                <img
                                  src={image.url}
                                  alt={image.title}
                                  className="w-full h-full object-cover"
                                  style={{
                                    backgroundColor: '#f3f4f6',
                                    border: '1px solid #d1d5db',
                                    minHeight: '64px',
                                    minWidth: '64px'
                                  }}
                                  loading="eager"
                                  onLoad={() => {
                                    console.log('✅ Preview image loaded successfully:', image.url);
                                  }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    console.error('❌ Preview image failed to load:', image.url);
                                    console.error('❌ Error details:', e);
                                    target.style.backgroundColor = '#fee2e2';
                                    target.style.border = '2px solid #dc2626';
                                    target.style.color = '#dc2626';
                                    target.style.fontSize = '10px';
                                    target.style.display = 'flex';
                                    target.style.alignItems = 'center';
                                    target.style.justifyContent = 'center';
                                    target.textContent = 'Failed to load';
                                  }}
                                />
                                {index === 3 && event.images.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      +{event.images.length - 4}
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-[#B62D71] transition-transform duration-200 ml-4 ${isExpanded ? 'rotate-180' : ''
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
                          {event.images.map((image, index) => {
                            console.log(`🖼️ Rendering gallery image ${index + 1}:`, image.url);
                            return (
                              <motion.div
                                key={image.filename}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                                onClick={() => openImageModal(image.url, image.title, event.name, image.description)}
                              >
                                <img
                                  src={image.url}
                                  alt={image.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  style={{
                                    backgroundColor: '#f3f4f6',
                                    border: '1px solid #d1d5db',
                                    minHeight: '200px'
                                  }}
                                  loading="eager"
                                  onLoad={() => {
                                    console.log('✅ Gallery image loaded successfully:', image.url);
                                  }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    console.error('❌ Gallery image failed to load:', image.url);
                                    console.error('❌ Error details:', e);
                                    target.style.backgroundColor = '#fee2e2';
                                    target.style.border = '2px solid #dc2626';
                                    target.style.color = '#dc2626';
                                    target.style.fontSize = '14px';
                                    target.style.display = 'flex';
                                    target.style.alignItems = 'center';
                                    target.style.justifyContent = 'center';
                                    target.textContent = 'Image failed to load';
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
                            );
                          })}
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

import { FC, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { getEventImageData, EventCategory, YearGroup } from '../../data/eventImageData';
import { ImageModal } from './ImageModal';

interface EventImageGalleryProps {
  selectedYear?: string;
}

export const EventImageGallery: FC<EventImageGalleryProps> = ({ selectedYear = 'all' }) => {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    eventName: string;
  } | null>(null);

  const eventData = useMemo(() => getEventImageData(), []);

  const filteredData = useMemo(() => {
    if (selectedYear === 'all') {
      return eventData;
    }
    return eventData.filter(yearGroup => yearGroup.year === selectedYear);
  }, [eventData, selectedYear]);

  const toggleEventExpansion = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const openImageModal = (imageUrl: string, imageTitle: string, eventName: string) => {
    setSelectedImage({ url: imageUrl, title: imageTitle, eventName });
  };

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
                <div key={event.id} className="p-6">
                  {/* Event Header */}
                  <button
                    onClick={() => toggleEventExpansion(event.id)}
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 -m-2 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-[#541D67] mb-1">
                        {event.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {event.images.length} image{event.images.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-[#B62D71] transition-transform duration-200 ${
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
                              onClick={() => openImageModal(image.url, image.title, event.name)}
                            >
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-medium truncate">
                                  {image.title}
                                </p>
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
        />
      )}
    </div>
  );
};

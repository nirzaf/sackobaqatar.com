import { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageTitle: string;
  eventName: string;
  description?: string;
}

export const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageTitle,
  eventName,
  description
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageTitle || 'event-image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[#541D67] truncate">
                  {imageTitle}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {eventName}
                </p>
                {description && (
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {description}
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-500 hover:text-[#B62D71] hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  title="Download image"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  title="Close"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative bg-gray-50 flex items-center justify-center min-h-[400px] max-h-[calc(90vh-120px)]">
              <img
                src={imageUrl}
                alt={imageTitle}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: 'calc(90vh - 120px)' }}
              />
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Click outside or press ESC to close</span>
                <span className="text-xs">
                  Part of {eventName}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

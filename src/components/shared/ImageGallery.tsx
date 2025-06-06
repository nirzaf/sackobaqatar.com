import { motion } from 'framer-motion';
import { galleryImages } from './galleryData';

interface ImageGalleryProps {
  images?: typeof galleryImages;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = galleryImages, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-gray-200/50">
            <div className="absolute bottom-4 left-4 text-gray-900">
              <p className="text-sm font-semibold">{image.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;

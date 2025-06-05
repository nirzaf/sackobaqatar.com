import { motion } from 'framer-motion';

export const galleryImages = [
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_01.jpg?updatedAt=1734611436610&tr=w-640,h-360,fo-auto',
    alt: 'St. Anthony\'s College Main Building'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_03.jpg?updatedAt=1734611454619&tr=w-640,h-360,fo-auto',
    alt: 'College Architecture'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_14.jpg?updatedAt=1734611536269&tr=w-640,h-360,fo-auto',
    alt: 'College Grounds'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_11.jpg?updatedAt=1734611533820&tr=w-640,h-360,fo-auto',
    alt: 'College Building'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_08.jpg?updatedAt=1734611533720&tr=w-640,h-360,fo-auto',
    alt: 'College Campus'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_09.jpg?updatedAt=1734611534185&tr=w-640,h-360,fo-auto',
    alt: 'College View'
  }
];

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

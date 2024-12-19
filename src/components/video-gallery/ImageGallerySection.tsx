import { motion } from 'framer-motion';
import ImageGallery from '../shared/ImageGallery';

const extraGalleryImages = [
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_13.jpg?updatedAt=1734611533797&tr=w-640,h-360,fo-auto',
    alt: 'College Architecture Detail'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_14.jpg?updatedAt=1734611536269&tr=w-640,h-360,fo-auto',
    alt: 'College Courtyard'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_15.jpg?updatedAt=1734611536402&tr=w-640,h-360,fo-auto',
    alt: 'College Facade'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_17.jpg?updatedAt=1734611536330&tr=w-640,h-360,fo-auto',
    alt: 'College Grounds View'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_19.jpg?updatedAt=1734611537180&tr=w-640,h-360,fo-auto',
    alt: 'College Building Detail'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_20.jpg?updatedAt=1734611536898&tr=w-640,h-360,fo-auto',
    alt: 'College Architecture View'
  }
];

const ImageGallerySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#541D67] to-[#B62D71] bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and grandeur of St. Anthony's College through our carefully curated collection of photographs
          </p>
        </motion.div>

        <ImageGallery images={extraGalleryImages} className="mb-12" />
      </div>
    </section>
  );
};

export default ImageGallerySection;

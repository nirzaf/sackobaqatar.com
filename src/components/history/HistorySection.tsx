import { FC } from 'react';
import { motion } from 'framer-motion';

// Import history images
import historyImage1 from '../../assets/images/history/Untitled-2-01.png';
import historyImage2 from '../../assets/images/history/Untitled-2-04.png';
import historyImage3 from '../../assets/images/history/Untitled-2-13.png';
import historyImage4 from '../../assets/images/history/Untitled-2-17.png';
import collegeLogoOld from '../../assets/images/history/St_Anthony\'s_College_Logo2.png';

interface HistorySectionProps {
  title: string;
  content: string;
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const HistorySection: FC<HistorySectionProps> = ({ title, content }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="prose prose-lg max-w-none mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">{title}</h2>
          <p className="text-primary-600 leading-relaxed mb-6">{content}</p>
          
          {/* Old College Logo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="flex justify-center mb-8 md:mb-0"
          >
            <img
              src={collegeLogoOld}
              alt="St. Anthony's College Historical Logo"
              className="w-32 h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={historyImage1}
              alt="Historical Image 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={historyImage2}
              alt="Historical Image 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={historyImage3}
              alt="Historical Image 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={historyImage4}
              alt="Historical Image 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

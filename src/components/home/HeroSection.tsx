import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#FFFAF0]">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFAF0] via-[#FFF8DC]/50 to-[#FFFAF0]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F5DEB3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFE4B5]/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link 
            to="/about"
            className="inline-block px-8 py-3 bg-gray-800 text-[#FFFAF0] font-semibold rounded-full 
                     hover:bg-gray-900 transition-colors shadow-lg 
                     hover:shadow-gray-400/20 hover:shadow-xl"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFAF0] to-transparent" />
    </section>
  );
};

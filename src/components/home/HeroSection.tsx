import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F9FA] to-[#B1B3CE]/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B1B3CE]/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#9A78AB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#5B4886]/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/about"
            className="inline-block bg-[#541D67] text-white px-8 py-3 rounded-full text-lg font-medium
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                     hover:bg-[#B62D71] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#541D67]
                     relative z-10"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Additional Light Effects */}
      <div className="absolute inset-0 bg-white/40 mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60" />
    </section>
  );
};

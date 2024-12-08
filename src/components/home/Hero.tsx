import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero: FC = memo(() => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#F8F6F9]">
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0F7] to-[#F0E6EC] opacity-95" />
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8E1F0]/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#F0E6EC]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#F5F0F7]/30 rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-black mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to SACKOBA Qatar
      </motion.h1>
      <motion.p 
        className="text-xl text-black/90 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        St. Anthony's College Kandy Old Boys' Association - Qatar, bringing together Antonian alumni since 2009
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Link 
          to="/about"
          className="inline-block px-8 py-3 bg-white text-[#000000] font-semibold rounded-full hover:bg-[#B1B3CE] transition-colors"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  </section>
));

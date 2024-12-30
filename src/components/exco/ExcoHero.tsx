import { FC } from 'react';
import { motion } from 'framer-motion';

/**
 * ExcoHero component displays the hero section of the Exco page
 * with animated title and subtitle
 */
export const ExcoHero: FC = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#541D67] to-[#B62D71]">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white">
        <motion.h1 
          className="text-4xl md:text-3xl text-white font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Executive Committee
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Meet the dedicated team leading SACKOBA Qatar
        </motion.p>
      </div>
    </section>
  );
};

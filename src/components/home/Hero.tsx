import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

/**
 * Enhanced Hero component with improved animations, visual effects, and modern design
 * Features parallax-like effects, floating elements, and smooth scroll indicator
 */
export const Hero: FC = memo(() => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg?updatedAt=1734610625018")' }}>

    {/* Enhanced layered overlays for depth */}
    <div className="absolute inset-0 bg-black/30" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/40 to-primary-600/50" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

    {/* Floating background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.9, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/6 w-1.5 h-1.5 bg-white/25 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.25, 0.7, 0.25]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center min-h-screen justify-center pt-safe-top">
      {/* Enhanced logo with glow effect - Mobile optimized */}
      <motion.div
        className="relative mb-6 sm:mb-8 mt-4 sm:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-110" />
        <motion.img
          src="https://ik.imagekit.io/sackoba/logos/sackoba-qatar-logo.png?updatedAt=1735206623574"
          alt="SACKOBA Logo"
          className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative
            filter brightness-110 contrast-110 drop-shadow-2xl mx-auto
            max-w-none flex-shrink-0"
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced typography with staggered animations - Mobile optimized */}
      <motion.h1
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6 font-['Cinzel'] tracking-wider flex flex-col hero-text px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="drop-shadow-lg leading-tight"
        >
          St. Anthony's College
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="drop-shadow-lg leading-tight"
        >
          Old Boys' Association - Qatar
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-2 sm:mb-3 hero-text font-medium drop-shadow-md px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Uniting Antonians Across Qatar Since 2009
      </motion.p>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8 sm:mb-10 hero-text leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        Building lifelong connections, fostering brotherhood, and preserving the Antonian legacy in the heart of the Middle East
      </motion.p>

      {/* Enhanced CTA buttons with improved hover effects - Mobile optimized */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            to="/about"
            className="group relative inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-primary-700 font-bold rounded-full transition-all duration-300 
            shadow-xl hover:shadow-2xl text-base sm:text-lg overflow-hidden w-full sm:w-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10">Explore Our Community</span>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            to="/events"
            className="group relative inline-block px-6 sm:px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-full transition-all duration-300
            hover:bg-white hover:text-primary-700 shadow-lg hover:shadow-xl backdrop-blur-sm w-full sm:w-auto text-center"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <span className="relative z-10">View Events</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center cursor-pointer hover:text-white transition-colors duration-300"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm font-medium mb-2 tracking-wider">SCROLL</span>
        <ChevronDownIcon className="w-5 h-5" />
      </motion.div>
    </motion.div>
  </section>
));

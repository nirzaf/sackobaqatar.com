import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero: FC = memo(() => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg?updatedAt=1734610625018")' }}>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-primary-700/60" />

    <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
      <motion.img
        src="https://ik.imagekit.io/sackoba/logos/sackoba-qatar-logo.png?updatedAt=1735206623574"
        alt="SACKOBA Logo"
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 relative
          filter brightness-110 contrast-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7
        }}
      />

      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-4 font-['UnifrakturMaguntia'] tracking-wide flex flex-col hero-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span>St. Anthony's College</span>
        <span>Old Boys' Association - Qatar</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-2 hero-text font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Uniting Antonians Across Qatar Since 2009
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8 hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Building lifelong connections, fostering brotherhood, and preserving the Antonian legacy in the heart of the Middle East
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Link
          to="/about"
          className="inline-block px-10 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 relative 
          before:content-[''] before:absolute before:-inset-[3px] before:bg-gradient-to-r before:from-primary-600 before:to-primary-700 before:rounded-full before:-z-10
          hover:transform hover:scale-105 hover:shadow-2xl shadow-lg text-lg"
        >
          Explore Our Community
        </Link>

        <Link
          to="/events"
          className="inline-block px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white hover:text-primary-700 transition-all duration-300
          hover:transform hover:scale-105 hover:shadow-xl"
        >
          View Events
        </Link>
      </motion.div>
    </div>
  </section>
));

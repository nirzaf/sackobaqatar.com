import { FC, memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

/**
 * Revolutionary Hero component with dynamic geometric patterns, theme color integration,
 * and innovative asymmetrical layout with advanced animations
 */
export const Hero: FC = memo(() => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden bg-gradient-to-br from-[#0F0E40] via-[#586992] to-[#7CA9CF]">
      {/* Static Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static geometric shapes with theme colors */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `linear-gradient(135deg, #B80F8A 0%, #90072A 100%)`,
          }}
        />

        <div
          className="absolute top-1/4 right-0 w-80 h-80 opacity-15"
          style={{
            background: `linear-gradient(45deg, #89C3EA 0%, #7CA9CF 100%)`,
            clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)',
          }}
        />

        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 opacity-25"
          style={{
            background: `conic-gradient(from 0deg, #B80F8A, #586992, #89C3EA, #B80F8A)`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      </div>

      {/* Main Content Grid */}
      <motion.div
        className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28 sm:pt-32 lg:pt-24"
        style={{ opacity }}
      >
        {/* Left Content Section */}
        <motion.div
          className="lg:col-span-7 text-left space-y-6 lg:space-y-8"
          style={{ y: y1 }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/30 shadow-lg"
          >
            <SparklesIcon className="w-4 h-4 text-[#89C3EA] drop-shadow-sm" />
            <span className="text-white text-sm font-medium drop-shadow-sm">Since 2009</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}
          >
            <motion.span
              className="block bg-gradient-to-r from-white via-[#89C3EA] to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
            >
              SACKOBA
            </motion.span>
            <motion.span
              className="block text-[#B80F8A] font-light"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 15px rgba(184,15,138,0.3)' }}
            >
              Qatar
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
          >
            St. Anthony's College Old Boys' Association
            <span className="block text-white font-medium mt-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(137,195,234,0.3)' }}>
              Uniting Antonians Across Qatar
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B80F8A] to-[#90072A] text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#90072A] to-[#B80F8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AcademicCapIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Explore Our Legacy</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/events"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <SparklesIcon className="w-5 h-5" />
                <span>View Events</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content Section - Logo */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end items-center"
          style={{ y: y2 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B80F8A] via-[#89C3EA] to-[#7CA9CF] rounded-full blur-3xl opacity-30 scale-150" />

            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 border-4 border-dashed border-[#89C3EA]/50 rounded-full scale-125"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo */}
            <motion.img
              src="https://ik.imagekit.io/sackoba/logos/sackoba-qatar-logo.png?updatedAt=1735206623574"
              alt="SACKOBA Qatar Logo"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative z-10 filter drop-shadow-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        style={{ opacity }}
      >
        <motion.div
          className="cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
            animate={{
              borderColor: ['rgba(255,255,255,0.6)', 'rgba(137,195,234,0.8)', 'rgba(255,255,255,0.6)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30 lg:from-black/30 lg:via-black/10 lg:to-black/20" />
    </section>
  );
});

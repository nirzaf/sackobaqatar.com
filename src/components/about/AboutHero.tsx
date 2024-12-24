import { FC } from 'react';
import { motion } from 'framer-motion';

export const AboutHero: FC = () => (
  <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E40] to-[#B80F8A] opacity-90" />
    <div 
      className="absolute inset-0 opacity-20"
      style={{ 
        backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="relative z-10 flex flex-col items-center">
      <motion.img 
        src="https://ik.imagekit.io/sackoba/sack_badge_color_512X512.png"
        alt="SACKOBA Logo"
        className="w-32 h-32 mb-4 filter brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <motion.h2 
        className="text-4xl md:text-3xl font-bold text-white mb-2 font-old-english text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About SACKOBA Qatar
      </motion.h2>
      <motion.p
        className="text-xl text-white/90 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        A Legacy of Brotherhood and Excellence Since 2009
      </motion.p>
    </div>
  </section>
);

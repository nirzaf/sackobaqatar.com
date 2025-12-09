import { FC, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutHero: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced mobile-optimized parallax
  const parallaxMultiplier = isMobile ? 0.5 : 1;
  const bgParallax = useTransform(scrollY, [0, 500], [0, 140 * parallaxMultiplier]);
  const logoY = useTransform(scrollY, [0, 500], [0, -50 * parallaxMultiplier]);
  const textY = useTransform(scrollY, [0, 500], [0, 30 * parallaxMultiplier]);
  const subtextY = useTransform(scrollY, [0, 500], [0, 40 * parallaxMultiplier]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Gradient Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0F0E40] to-[#B80F8A] opacity-90 w-full"
        style={{ y: useTransform(scrollY, [0, 500], [0, isMobile ? 40 : 80]) }}
      />

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgParallax
        }}
      />

      {/* Floating Decorative Elements (Desktop) */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl"
            style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#89C3EA]/10 blur-3xl"
            style={{ y: useTransform(scrollY, [0, 500], [0, -60]) }}
          />
        </>
      )}

      {/* Content with Layered Parallax */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4"
        style={{ opacity, scale }}
      >
        <motion.img
          src="https://ik.imagekit.io/sackoba/sack_badge_color_512X512.png"
          alt="SACKOBA Logo"
          className="w-24 h-24 md:w-32 md:h-32 mb-4 filter brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          style={{
            y: logoY,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-2 font-old-english text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ y: textY }}
        >
          About SACKOBA Qatar
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white/90 text-center max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ y: subtextY }}
        >
          A Legacy of Brotherhood and Excellence Since 2009
        </motion.p>
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

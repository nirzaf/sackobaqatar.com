import { FC, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFadeInParallax } from '../../hooks/useParallax';

interface ParallaxContentSectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

/**
 * Parallax content section for About page
 * Fades in and moves as user scrolls
 */
export const ParallaxContentSection: FC<ParallaxContentSectionProps> = ({
  children,
  title,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { opacity, y } = useFadeInParallax(sectionRef, true);

  return (
    <motion.div
      ref={sectionRef}
      className={`py-8 md:py-12 ${className}`}
      style={{ opacity, y }}
    >
      {title && (
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#0F0E40] mb-8 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </motion.div>
  );
};

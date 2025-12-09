import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxConfig {
  speed?: number;
  direction?: 'up' | 'down';
  range?: [number, number];
  enableOnMobile?: boolean;
}

interface ParallaxResult {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

/**
 * Custom hook for creating parallax scroll effects
 * Optimized for mobile performance with conditional enabling
 */
export const useParallax = (
  ref?: RefObject<HTMLElement>,
  config: ParallaxConfig = {}
): ParallaxResult => {
  const {
    speed = 50,
    direction = 'down',
    range = [0, 1],
    enableOnMobile = true,
  } = config;

  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = enableOnMobile || !isMobile;

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate movement range based on direction
  const movement = direction === 'down' ? [0, speed] : [0, -speed];
  const mobileMovement = direction === 'down' ? [0, speed * 0.5] : [0, -speed * 0.5];

  // Apply transforms with mobile optimization
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimate ? (isMobile ? mobileMovement : movement) : [0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [range[0], 1, range[1]]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldAnimate ? [0.95, 1, 0.95] : [1, 1, 1]
  );

  return { y, opacity, scale };
};

/**
 * Hook for background parallax effects
 * Creates subtle background movement for depth
 */
export const useBackgroundParallax = (
  enableOnMobile: boolean = false
): MotionValue<number> => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = enableOnMobile || !isMobile;

  const { scrollY } = useScroll();

  return useTransform(
    scrollY,
    [0, 1000],
    shouldAnimate ? (isMobile ? [0, 50] : [0, 150]) : [0, 0]
  );
};

/**
 * Hook for fade-in parallax on scroll
 * Elements fade in as they enter viewport
 */
export const useFadeInParallax = (
  ref: RefObject<HTMLElement | null>,
  enableOnMobile: boolean = true
): { opacity: MotionValue<number>; y: MotionValue<number> } => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = enableOnMobile || !isMobile;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    shouldAnimate ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    shouldAnimate ? (isMobile ? [30, 0, -30] : [50, 0, -50]) : [0, 0, 0]
  );

  return { opacity, y };
};

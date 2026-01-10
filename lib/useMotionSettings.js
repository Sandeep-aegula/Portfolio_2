import { useMemo } from 'react';
import { getDevicePerformance } from './performance.js';

/**
 * Custom hook for optimized motion settings based on user preferences and device performance
 */
export const useMotionSettings = () => {
  const settings = useMemo(() => {
    // Check for user's reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;
    
    // Get device performance
    const devicePerformance = getDevicePerformance();
    
    // Base settings for different performance levels
    const performanceSettings = {
      high: {
        enableAnimations: true,
        reducedDuration: false,
        maxInfiniteAnimations: 6,
        transitionDuration: 0.6,
        staggerDelay: 0.1,
        enableDrag: true,
        enableHover: true,
        enableScroll: true,
      },
      medium: {
        enableAnimations: true,
        reducedDuration: true,
        maxInfiniteAnimations: 3,
        transitionDuration: 0.4,
        staggerDelay: 0.05,
        enableDrag: true,
        enableHover: true,
        enableScroll: true,
      },
      low: {
        enableAnimations: true,
        reducedDuration: true,
        maxInfiniteAnimations: 1,
        transitionDuration: 0.2,
        staggerDelay: 0.02,
        enableDrag: false,
        enableHover: false,
        enableScroll: false,
      }
    };
    
    const baseSettings = performanceSettings[devicePerformance];
    
    // If user prefers reduced motion, further reduce animations
    if (prefersReducedMotion) {
      return {
        ...baseSettings,
        enableAnimations: false,
        maxInfiniteAnimations: 0,
        transitionDuration: 0.1,
        staggerDelay: 0,
        enableDrag: false,
        enableHover: false,
        enableScroll: false,
      };
    }
    
    return baseSettings;
  }, []);
  
  return settings;
};

/**
 * Get optimized transition settings
 */
export const useOptimizedTransition = (baseDuration = 0.5) => {
  const { transitionDuration, reducedDuration } = useMotionSettings();
  
  return useMemo(() => ({
    duration: reducedDuration ? Math.min(baseDuration, transitionDuration) : baseDuration,
    ease: "easeOut",
  }), [baseDuration, transitionDuration, reducedDuration]);
};

/**
 * Get optimized variants with performance considerations
 */
export const useOptimizedVariants = () => {
  const { enableAnimations, transitionDuration, staggerDelay } = useMotionSettings();
  
  return useMemo(() => {
    if (!enableAnimations) {
      return {
        container: {
          hidden: {},
          visible: {},
        },
        item: {
          hidden: {},
          visible: {},
        }
      };
    }
    
    return {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: transitionDuration,
            staggerChildren: staggerDelay,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: transitionDuration },
        },
      }
    };
  }, [enableAnimations, transitionDuration, staggerDelay]);
};

/**
 * Check if infinite animations should be enabled
 */
export const useInfiniteAnimation = () => {
  const { maxInfiniteAnimations } = useMotionSettings();
  let usedInfiniteAnimations = 0;
  
  return () => {
    if (usedInfiniteAnimations >= maxInfiniteAnimations) {
      return false;
    }
    usedInfiniteAnimations++;
    return true;
  };
};
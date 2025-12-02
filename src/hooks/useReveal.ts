import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * Uses IntersectionObserver to detect when element enters viewport
 * Respects prefers-reduced-motion user preference
 * 
 * @param threshold - Percentage of element visibility required to trigger (0-1)
 * @returns Object with ref to attach to element and seen state
 */
export function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, set seen immediately
    if (prefersReducedMotion) {
      setSeen(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true);
            // Unobserve after first intersection (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -200px 0px', // Trigger when element is well into viewport
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref, seen };
}


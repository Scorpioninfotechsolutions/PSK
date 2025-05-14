import { useState, useEffect, useCallback } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  startOnScroll?: boolean;
}

export const useCountUp = ({ end, duration = 2000, delay = 0, startOnScroll = true }: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnScroll);

  // Memoize the animation function
  const animate = useCallback((timestamp: number, startTimestamp: number | null = null) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const percentage = Math.min(progress / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
    const currentCount = Math.floor(easeOutQuart * end);
    
    setCount(currentCount);

    if (percentage < 1) {
      requestAnimationFrame((newTimestamp) => animate(newTimestamp, startTimestamp));
    }
  }, [end, duration]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame((timestamp) => animate(timestamp, startTimestamp));
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay, hasStarted, animate]);

  useEffect(() => {
    if (!startOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById('stats-section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [startOnScroll]);

  return count;
}; 
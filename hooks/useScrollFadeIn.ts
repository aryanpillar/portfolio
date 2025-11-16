
import { useEffect, useRef, useState } from 'react';

export const useScrollFadeIn = <T extends HTMLElement,>() => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after it's visible
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const transitionClasses = `transition-all duration-1000 ease-in-out`;
  const initialClasses = `opacity-0 transform translate-y-6`;
  const finalClasses = `opacity-100 transform translate-y-0`;
  const animationClasses = `${transitionClasses} ${isVisible ? finalClasses : initialClasses}`;

  return { ref: domRef, animationClasses };
};

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ScrollState {
  scrollY: number;
  scrollProgress: number; // 0 to 1
  scrollVelocity: number;
  direction: 'down' | 'up' | 'idle';
  isAtTop: boolean;
  prefersReducedMotion: boolean;
}

const defaultState: ScrollState = {
  scrollY: 0,
  scrollProgress: 0,
  scrollVelocity: 0,
  direction: 'idle',
  isAtTop: true,
  prefersReducedMotion: false,
};

const ScrollContext = createContext<ScrollState>(defaultState);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollState, setScrollState] = useState<ScrollState>(defaultState);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let ticking = false;

    // Detect prefers-reduced-motion media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => {
      setScrollState((prev) => ({ ...prev, prefersReducedMotion: mediaQuery.matches }));
    };
    updateReducedMotion();
    mediaQuery.addEventListener('change', updateReducedMotion);

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const currentTime = performance.now();
          const timeDelta = Math.max(currentTime - lastTime, 1);
          const distance = currentY - lastScrollY;
          const velocity = distance / timeDelta;

          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;
          const direction: 'down' | 'up' | 'idle' = distance > 0 ? 'down' : distance < 0 ? 'up' : 'idle';

          setScrollState((prev) => ({
            ...prev,
            scrollY: currentY,
            scrollProgress: progress,
            scrollVelocity: Math.abs(velocity),
            direction,
            isAtTop: currentY < 10,
          }));

          lastScrollY = currentY;
          lastTime = currentTime;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      mediaQuery.removeEventListener('change', updateReducedMotion);
    };
  }, []);

  return <ScrollContext.Provider value={scrollState}>{children}</ScrollContext.Provider>;
};

export const useScrollSystem = () => useContext(ScrollContext);

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type CursorMode = 'default' | 'view' | 'open' | 'explore' | 'visit' | 'drag';

interface EnvironmentContextValue {
  mouseX: number;
  mouseY: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  cursorMode: CursorMode;
  setCursorMode: (mode: CursorMode) => void;
  isTouchDevice: boolean;
}

const EnvironmentContext = createContext<EnvironmentContextValue>({
  mouseX: -100,
  mouseY: -100,
  normalizedX: 0,
  normalizedY: 0,
  cursorMode: 'default',
  setCursorMode: () => {},
  isTouchDevice: false,
});

export const EnvironmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100, normX: 0, normY: 0 });
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          const normX = (targetX / window.innerWidth) * 2 - 1;
          const normY = (targetY / window.innerHeight) * 2 - 1;
          setMousePos({ x: targetX, y: targetY, normX, normY });
          rafId.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <EnvironmentContext.Provider
      value={{
        mouseX: mousePos.x,
        mouseY: mousePos.y,
        normalizedX: mousePos.normX,
        normalizedY: mousePos.normY,
        cursorMode,
        setCursorMode,
        isTouchDevice,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = () => useContext(EnvironmentContext);

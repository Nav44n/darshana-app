import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * UX-015 — Persistent reading size.
 *
 * Long-form verse commentaries and thread narratives serve readers from
 * phones to desktops, including low-vision users. Three rem steps
 * (100 / 112.5 / 125%) scale the whole interface proportionally — every
 * layout clearance in the app is rem-based (BottomBar budget, PageShell
 * padding), so nothing breaks. Persisted like the language preference;
 * storage failure simply stays at default.
 */

const SCALES = [100, 112.5, 125];
const STORAGE_KEY = 'darsana_reading_scale';

interface ReadingContextType {
  scale: number;
  maxScale: number;
  decrease: () => void;
  increase: () => void;
}

const ReadingContext = createContext<ReadingContextType>({
  scale: 0,
  maxScale: SCALES.length - 1,
  decrease: () => {},
  increase: () => {},
});

export const ReadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scale, setScale] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = Number(window.localStorage.getItem(STORAGE_KEY));
      if (saved >= 0 && saved < SCALES.length && Number.isInteger(saved)) return saved;
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.style.fontSize = `${SCALES[scale]}%`;
    try {
      window.localStorage.setItem(STORAGE_KEY, String(scale));
    } catch {
      // Private mode — the session simply keeps the default size.
    }
  }, [scale]);

  return (
    <ReadingContext.Provider
      value={{
        scale,
        maxScale: SCALES.length - 1,
        decrease: () => setScale((s) => Math.max(0, s - 1)),
        increase: () => setScale((s) => Math.min(SCALES.length - 1, s + 1)),
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReading = () => useContext(ReadingContext);

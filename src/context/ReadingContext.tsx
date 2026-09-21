import React, { createContext, useContext } from 'react';
import { usePreferences } from './PreferencesContext';

interface ReadingContextType {
  scale: number;
  maxScale: number;
  decrease: () => void;
  increase: () => void;
}

const ReadingContext = createContext<ReadingContextType>({
  scale: 0,
  maxScale: 2,
  decrease: () => {},
  increase: () => {},
});

export const ReadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefs = usePreferences();
  return (
    <ReadingContext.Provider
      value={{
        scale: prefs.fontScale,
        maxScale: 2,
        decrease: prefs.decreaseFontScale,
        increase: prefs.increaseFontScale,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReading = () => useContext(ReadingContext);

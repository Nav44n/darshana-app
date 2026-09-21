import React, { createContext, useContext } from 'react';
import { SupportedLanguage } from '../types/i18n';
import { usePreferences } from './PreferencesContext';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ml',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefs = usePreferences();
  return (
    <LanguageContext.Provider
      value={{
        language: prefs.language,
        setLanguage: prefs.setLanguage,
        toggleLanguage: prefs.toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

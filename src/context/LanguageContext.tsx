import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage } from '../types/i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darsana_language');
      if (saved === 'en' || saved === 'ml') return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darsana_language', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ml' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

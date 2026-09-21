import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage } from '../types/i18n';
import { ReadingLens, AppTheme, PreferencesContextValue } from '../types/preferences';

const STORAGE_KEYS = {
  LANGUAGE: 'darsana_language',
  THEME: 'darsana_theme',
  LENS: 'darsana_reading_lens',
  SCALE: 'darsana_reading_scale',
  REDUCED_MOTION: 'darsana_reduced_motion',
} as const;

const SCALES = [100, 112.5, 125];

export const PreferencesContext = createContext<PreferencesContextValue>({
  language: 'ml',
  theme: 'dark',
  readingLens: 'sattva',
  fontScale: 0,
  reducedMotion: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  setTheme: () => {},
  toggleTheme: () => {},
  setReadingLens: () => {},
  setFontScale: () => {},
  increaseFontScale: () => {},
  decreaseFontScale: () => {},
  setReducedMotion: () => {},
  resetPreferences: () => {},
});

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language — Malayalam first per Session 5 charter
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (saved === 'en' || saved === 'ml') return saved;
    }
    return 'ml';
  });

  // 2. Theme — Dark (Ink Night Ground) is foundational; Light (Warm Palm Parchment) supported
  const [theme, setThemeState] = useState<AppTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // 3. Reading Lens — Sattva (clarity) default, with Rajas (analytic) and Tamas (source apparatus)
  const [readingLens, setReadingLensState] = useState<ReadingLens>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.LENS);
      if (saved === 'sattva' || saved === 'rajas' || saved === 'tamas') return saved;
    }
    return 'sattva';
  });

  // 4. Font scale
  const [fontScale, setFontScaleState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = Number(localStorage.getItem(STORAGE_KEYS.SCALE));
      if (saved >= 0 && saved < SCALES.length && Number.isInteger(saved)) return saved;
    }
    return 0;
  });

  // 5. Reduced motion
  const [reducedMotion, setReducedMotionState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.REDUCED_MOTION);
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Apply DOM side-effects
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch {
      // safe fallback in restricted contexts
    }
  }, [language]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
    }
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch {
      // safe fallback
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-lens', readingLens);
    try {
      localStorage.setItem(STORAGE_KEYS.LENS, readingLens);
    } catch {
      // safe fallback
    }
  }, [readingLens]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.style.fontSize = `${SCALES[fontScale]}%`;
    try {
      localStorage.setItem(STORAGE_KEYS.SCALE, String(fontScale));
    } catch {
      // safe fallback
    }
  }, [fontScale]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEYS.REDUCED_MOTION, String(reducedMotion));
    } catch {
      // safe fallback
    }
  }, [reducedMotion]);

  const setLanguage = (lang: SupportedLanguage) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'ml' ? 'en' : 'ml'));
  const setTheme = (t: AppTheme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const setReadingLens = (lens: ReadingLens) => setReadingLensState(lens);
  const setFontScale = (scale: number) => setFontScaleState(Math.max(0, Math.min(SCALES.length - 1, scale)));
  const increaseFontScale = () => setFontScaleState((s) => Math.min(SCALES.length - 1, s + 1));
  const decreaseFontScale = () => setFontScaleState((s) => Math.max(0, s - 1));
  const setReducedMotion = (reduced: boolean) => setReducedMotionState(reduced);

  const resetPreferences = () => {
    setLanguageState('ml');
    setThemeState('dark');
    setReadingLensState('sattva');
    setFontScaleState(0);
    setReducedMotionState(false);
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch {}
  };

  return (
    <PreferencesContext.Provider
      value={{
        language,
        theme,
        readingLens,
        fontScale,
        reducedMotion,
        setLanguage,
        toggleLanguage,
        setTheme,
        toggleTheme,
        setReadingLens,
        setFontScale,
        increaseFontScale,
        decreaseFontScale,
        setReducedMotion,
        resetPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);

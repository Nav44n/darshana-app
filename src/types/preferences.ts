import { SupportedLanguage } from './i18n';

export type { SupportedLanguage };

export type ReadingLens = 'sattva' | 'rajas' | 'tamas';
export type AppTheme = 'dark' | 'light';

export interface PreferencesState {
  language: SupportedLanguage;
  theme: AppTheme;
  readingLens: ReadingLens;
  fontScale: number; // 0 = standard (100%), 1 = large (112.5%), 2 = extra large (125%)
  reducedMotion: boolean;
}

export interface PreferencesContextValue extends PreferencesState {
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  setReadingLens: (lens: ReadingLens) => void;
  setFontScale: (scale: number) => void;
  increaseFontScale: () => void;
  decreaseFontScale: () => void;
  setReducedMotion: (reduced: boolean) => void;
  resetPreferences: () => void;
}

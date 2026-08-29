import { darkColors, lightColors, fonts as staticFonts } from './tokens';
import { useReadingPrefs } from '../state/ReadingPrefs';

export function useTheme() {
  const { themeMode, toggleThemeMode } = useReadingPrefs();
  const colors = themeMode === 'light' ? lightColors : darkColors;
  return { colors, fonts: staticFonts, mode: themeMode, toggleThemeMode };
}

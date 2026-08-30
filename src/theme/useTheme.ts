import { darkColors, lightColors, fonts as staticFonts, type, gunaStops, getElevation, getSystemAccent, auroraStops, glowText } from './tokens';
import { useReadingPrefs } from '../state/ReadingPrefs';

export function useTheme() {
  const { themeMode, toggleThemeMode } = useReadingPrefs();
  const colors = themeMode === 'light' ? lightColors : darkColors;

  return {
    colors,
    fonts: staticFonts,
    type,
    mode: themeMode,
    toggleThemeMode,
    // The tri-colour guṇa sequence resolved against whichever palette is
    // active, ready to hand straight to a <LinearGradient colors={...} />.
    gunaGradient: gunaStops(colors),
    // The full jewel-tone sweep, for the one or two genuinely luminous
    // moments per screen (see <AuroraGlow />).
    auroraGradient: auroraStops(colors),
    // Per-darśana identity — pass a systemId ('samkhya' | 'yoga' | undefined).
    systemAccent: (systemId?: string) => getSystemAccent(colors, systemId),
    // elevation(1|2|3) — a shadow/border treatment that already knows
    // whether it should read as a light drop-shadow or a dark-mode glow.
    elevation: (level: 1 | 2 | 3 = 1) => getElevation(themeMode, level),
    glowText,
  };
}

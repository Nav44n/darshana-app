export type ColorPalette = typeof darkColors;

export const darkColors = {
  avyakta: '#12141c',
  avyakta2: '#1a1d29',
  avyakta3: '#232636',
  sattva: '#e8d9b0',
  sattvaDim: '#c9b98a',
  rajas: '#a8452b',
  rajasDim: '#7a3220',
  tamas: '#5b5f72',
  ink: '#eae7de',
  inkDim: '#9b9cad',
  hair: '#2c2f40',
  bg: '#05060a',
};

export const lightColors: ColorPalette = {
  avyakta: '#f7f1e3',
  avyakta2: '#ffffff',
  avyakta3: '#efe6d0',
  sattva: '#8a6a1f',
  // Was #a68a4a — only ~3.3:1 against white, failing WCAG AA for the small
  // text it's used on (Eyebrow labels, verse counts, etc). Darkened to clear
  // 4.5:1 against both avyakta2 (white) and avyakta while staying visibly
  // more muted than sattva itself.
  sattvaDim: '#7d5e22',
  rajas: '#a8452b',
  rajasDim: '#7a3220',
  tamas: '#9a9cab',
  ink: '#211f1a',
  inkDim: '#5c5750',
  hair: '#e0d5bd',
  bg: '#f7f1e3',
};

// Legacy static export — kept so any file not yet migrated to useTheme()
// still compiles against the dark palette rather than breaking.
export const colors = darkColors;

export const fonts = {
  display: 'Fraunces_500Medium',
  serif: 'CormorantGaramond_400Regular',
  serifItalic: 'CormorantGaramond_400Regular_Italic',
  sanskrit: 'NotoSerifDevanagari_400Regular',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansBold: 'Inter_600SemiBold',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28 };
export const radius = { sm: 8, md: 12, lg: 16, xl: 20 };

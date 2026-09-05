// ─────────────────────────────────────────────────────────────────────────
// Darśana design tokens
//
// The palette is named after the three guṇas of Sāṃkhya — sattva (clarity),
// rajas (activity), tamas (inertia) — the three qualities said to compose
// all of prakṛti (manifest nature), plus avyakta, the unmanifest ground
// they arise from. That's not decoration: it's the actual conceptual
// vocabulary of the texts this app renders, so the tokens double as a
// small teaching device — anyone who reads the theme file learns the
// terms the content uses.
// ─────────────────────────────────────────────────────────────────────────

export type ColorPalette = typeof darkColors;

export const darkColors = {
  // Ground — avyakta, the unmanifest. Not flat black: a near-black indigo,
  // because prakṛti is never truly void, only unresolved.
  avyakta: '#12141c',
  avyakta2: '#1a1d29',
  avyakta3: '#232636',
  avyakta4: '#2c2f45', // highest elevation: modals, popovers, active chips

  // Sattva — clarity, illumination, the guṇa of knowledge. Warm parchment-gold.
  sattva: '#e8d9b0',
  sattvaDim: '#c9b98a',
  sattvaGlow: 'rgba(232, 217, 176, 0.16)', // soft luminous wash, not a solid fill

  // Rajas — activity, passion, the guṇa of motion. Terracotta / oxide-copper,
  // like a temple seal stamped in red ochre.
  rajas: '#a8452b',
  rajasDim: '#7a3220',
  rajasGlow: 'rgba(168, 69, 43, 0.20)',

  // Tamas — inertia, obscuration, the guṇa of weight and shadow. A dim slate,
  // never a "muted grey" — it should read as substance withheld, not absence.
  tamas: '#5b5f72',

  // Puruṣa — the witness-consciousness Sāṃkhya sets opposite prakṛti:
  // still, single, uninflected by the three guṇas. A cool amethyst-violet,
  // the one hue in the palette that isn't a guṇa — used sparingly, for
  // the ontology graph and moments of "seeing," never for action or mood.
  purusha: '#a48ce8',
  purushaDim: '#7c68b8',
  purushaGlow: 'rgba(164, 140, 232, 0.22)',

  // Prakṛti in motion — jewel-toned amber/teal used for the two darśanas'
  // individual identities (see systemAccents below) and for the aurora
  // wash behind hero art: manifest nature showing its full colour, the
  // guṇas caught actually mixing rather than resting in their pure form.
  amber: '#e8a23d',
  amberDim: '#b97a24',
  teal: '#4fb3a3',
  tealDim: '#347a70',

  // Ink — the reader's own register: text, not doctrine.
  ink: '#eae7de',
  inkDim: '#9b9cad',

  hair: '#2c2f40',
  bg: '#05060a',

  shadow: 'rgba(0,0,0,0.45)',
  overlay: 'rgba(5,6,10,0.72)', // modal / sheet scrim
};

export const colors = darkColors;

export const fonts = {
  display: 'Fraunces_500Medium',
  displaySemibold: 'Fraunces_600SemiBold',
  serif: 'CormorantGaramond_400Regular',
  serifItalic: 'CormorantGaramond_400Regular_Italic',
  sanskrit: 'NotoSerifDevanagari_400Regular',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansBold: 'Inter_600SemiBold',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, xxxl: 36 };
export const radius = { sm: 8, md: 12, lg: 16, xl: 20, pill: 999 };

// ─────────────────────────────────────────────────────────────────────────
// Type scale — one place that fixes family + size + line-height + tracking
// per role, so screens stop re-deriving the same numbers ad hoc. Serif for
// anything that is text-to-be-read (translation, commentary, narrative);
// display for titles; sans for interface chrome (labels, buttons, counts).
// ─────────────────────────────────────────────────────────────────────────
export const type = {
  eyebrow: { fontFamily: fonts.sansBold, fontSize: 10.5, letterSpacing: 1.8, textTransform: 'uppercase' as const },
  display1: { fontFamily: fonts.display, fontSize: 28, lineHeight: 34 },
  display2: { fontFamily: fonts.display, fontSize: 22, lineHeight: 28 },
  h3: { fontFamily: fonts.display, fontSize: 17, lineHeight: 22 },
  subtitle: { fontFamily: fonts.serifItalic, fontSize: 14.5, lineHeight: 20 },
  body: { fontFamily: fonts.serif, fontSize: 16, lineHeight: 25 },
  bodySans: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 23 },
  caption: { fontFamily: fonts.sans, fontSize: 12, lineHeight: 17 },
  label: { fontFamily: fonts.sansBold, fontSize: 11, letterSpacing: 1.1, textTransform: 'uppercase' as const },
  sanskritNum: { fontFamily: fonts.sanskrit, fontSize: 14, letterSpacing: 1.4 },
};

// The three guṇas in sequence — sattva rising into rajas settling into
// tamas — used as the app's one recurring graphic signature: a thin
// tri-colour rule under page titles and along hero-card edges. Every
// darśana in the library agrees the three qualities are inseparable and
// always co-present, in different proportions; the rule is a literal
// rendering of that idea rather than a generic "brand gradient."
export const gunaStops = (c: ColorPalette): [string, string, string] => [c.sattvaDim, c.rajas, c.tamas];

// ─────────────────────────────────────────────────────────────────────────
// Each darśana gets its own jewel-tone identity — literally "a viewpoint,"
// so it's appropriate that the two systems currently in the library don't
export const auroraStops = (c: ColorPalette): string[] => [c.purushaGlow, c.sattvaGlow, c.amber, c.rajasGlow, c.tealDim];

// Soft platform-appropriate elevation. Dark mode leans on a faint glow
// border rather than a shadow (shadows barely read on near-black surfaces);
// light mode uses a real drop shadow. `level` 1–3, low to high.
export function getElevation(mode: 'dark' | 'light', level: 1 | 2 | 3 = 1) {
  if (mode === 'light') {
    const cfg = { 1: [2, 4, 0.08], 2: [4, 10, 0.10], 3: [8, 18, 0.14] } as const;
    const [h, r, o] = cfg[level];
    return {
      shadowColor: '#3c2e14',
      shadowOffset: { width: 0, height: h },
      shadowOpacity: o,
      shadowRadius: r,
      elevation: level * 2,
    };
  }
  const cfg = { 1: [2, 6, 0.28], 2: [4, 12, 0.34], 3: [6, 20, 0.4] } as const;
  const [h, r, o] = cfg[level];
  return {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: h },
    shadowOpacity: o,
    shadowRadius: r,
    elevation: level * 2,
  };
}

export const motion = {
  fast: 140,
  base: 220,
  slow: 340,
};

// A soft luminous halo behind a display title — spend this on the two or
// three headlines per screen that should feel touched by sattva (light),
// not on body text or anything read at length (a glow behind paragraph
// text just reads as blur / low contrast).
export const glowText = (color: string, radius = 12) => ({
  textShadowColor: color,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: radius,
});

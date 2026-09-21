// ─────────────────────────────────────────────────────────────────────────
// Web truth lives in src/index.css (@theme). This file is the canonical
// hex registry shared across components — keep values in sync with
// index.css when adding or renaming tokens. Components must not hardcode
// hexes; web code uses Tailwind classes (bg-avyakta-2, text-sattva, ...)
// backed by index.css, via getSystemAccent in src/utils/theme.ts.
//
// The palette is rooted in Sāṃkhya metaphysics (The Guṇas):
// - Avyakta (The unmanifest ground)
// - Sattva (Clarity, illumination, wisdom)
// - Rajas (Energy, movement, dialectic action)
// - Tamas (Inertia, stability, structural ground)
// - Puruṣa (The witness-consciousness)
// ─────────────────────────────────────────────────────────────────────────

export const darkColors = {
  // Ground — avyakta (Ink Night)
  avyakta: "#141420",
  avyakta2: "#1c1d2c",
  avyakta3: "#242538",
  avyakta4: "#2b2d42",

  // Sattva — clarity (Warm Ivory)
  sattva: "#f4ecd8",
  sattvaDim: "#c4baa6",
  sattvaBright: "#f5e9c8",
  sattvaGlow: "rgba(244, 236, 216, 0.12)",

  // Rajas — activity (Terracotta Red)
  rajas: "#c66c55",
  rajasDim: "#a65541",
  rajasGlow: "rgba(198, 108, 85, 0.2)",

  // Tamas — stability & structure (Weathered Slate)
  tamas: "#62687a",
  tamasDeep: "#494d5a",

  // Puruṣa — witness consciousness (Lavender Amethyst)
  purusha: "#a48ce8",
  purushaDim: "#7c68b8",
  purushaGlow: "rgba(164, 140, 232, 0.22)",

  // System Accents
  amber: "#e8a23d",
  amberDim: "#b97a24",
  teal: "#4fb3a3",
  tealDim: "#347a70",
  cerulean: "#4a7fc4",
  ceruleanDim: "#33588c",
  sage: "#6b9078",
  sageDim: "#496356",
  crimson: "#c73e4a",
  crimsonDim: "#8f2c35",
  indigo: "#5a5aa0",
  indigoDim: "#3d3d75",
  shakti: "#d14e7e",
  shaktiDim: "#96355a",

  ink: "#eae7de",
  inkDim: "#9b9cad",
  hair: "#2c2f40",
  bg: "#05060a",
  overlay: "rgba(5, 6, 10, 0.72)",
  shadow: "rgba(0, 0, 0, 0.45)",
};

export const lightColors: typeof darkColors = {
  // Ground — avyakta (Warm Palm Parchment)
  avyakta: "#fbf9f4",
  avyakta2: "#f3eee4",
  avyakta3: "#eae2d3",
  avyakta4: "#dfd5c2",

  // Sattva — clarity (Soot Ink)
  sattva: "#2a2825",
  sattvaDim: "#5c564d",
  sattvaBright: "#121110",
  sattvaGlow: "rgba(42, 40, 37, 0.08)",

  // Rajas — activity (Deep Cinnabar)
  rajas: "#a64b35",
  rajasDim: "#823420",
  rajasGlow: "rgba(166, 75, 53, 0.15)",

  // Tamas — stability & structure (Granite Sand)
  tamas: "#7d776b",
  tamasDeep: "#d8d2c5",

  // Puruṣa — witness consciousness (Deep Violet)
  purusha: "#654ca8",
  purushaDim: "#4c3783",
  purushaGlow: "rgba(101, 76, 168, 0.15)",

  // System Accents for light parchment
  amber: "#b97a24",
  amberDim: "#8f5a13",
  teal: "#2d7a6e",
  tealDim: "#1e554d",
  cerulean: "#2d5f9e",
  ceruleanDim: "#1d416f",
  sage: "#456c52",
  sageDim: "#304d3a",
  crimson: "#a32a35",
  crimsonDim: "#791a22",
  indigo: "#48488e",
  indigoDim: "#32326b",
  shakti: "#b03463",
  shaktiDim: "#842146",

  ink: "#2a2825",
  inkDim: "#5c564d",
  hair: "#e5ded0",
  bg: "#f5f0e6",
  overlay: "rgba(240, 235, 224, 0.78)",
  shadow: "rgba(60, 50, 40, 0.12)",
};

export type ColorPalette = typeof darkColors;

export const fonts = {
  serif: "Cormorant Garamond, serif",
  serifItalic: "Cormorant Garamond, serif",
  serifMedium: "Cormorant Garamond, serif",
  display: "Fraunces, serif",
  displaySemibold: "Fraunces, serif",
  sans: "Inter, sans-serif",
  sansMedium: "Inter, sans-serif",
  sansBold: "Inter, sans-serif",
  sanskrit: "Noto Serif Devanagari, serif",
  malayalamBody: "Noto Serif Malayalam, system-ui, -apple-system, serif",
  malayalamDisplay: "Gayathri, Noto Serif Malayalam, serif",
};

export const spacing = {
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 36,
  "2xl": 48,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 9999,
};

export const motion = {
  instant: 0,
  fast: 140,
  base: 220,
  slow: 340,
  easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
  easeSpring: "cubic-bezier(0.34, 1.4, 0.64, 1)",
};

export const gunaStops = (c: ColorPalette): [string, string, string] => [c.sattvaDim, c.rajas, c.tamas];

export function getSystemAccent(c: ColorPalette, systemId?: string) {
  switch (systemId) {
    case "samkhya":
      return { primary: c.amber, dim: c.amberDim, glow: "rgba(232, 162, 61, 0.22)", pair: [c.sattva, c.amber, c.rajas] as [string, string, string] };
    case "yoga":
      return { primary: c.teal, dim: c.tealDim, glow: "rgba(79, 179, 163, 0.22)", pair: [c.purusha, c.teal, c.rajasDim] as [string, string, string] };
    case "nyaya":
      return { primary: c.cerulean, dim: c.ceruleanDim, glow: "rgba(74, 127, 196, 0.22)", pair: [c.sattva, c.cerulean, c.tamas] as [string, string, string] };
    case "vaisesika":
      return { primary: c.sage, dim: c.sageDim, glow: "rgba(107, 144, 120, 0.22)", pair: [c.sattva, c.sage, c.tamasDeep] as [string, string, string] };
    case "mimamsa":
      return { primary: c.crimson, dim: c.crimsonDim, glow: "rgba(199, 62, 74, 0.22)", pair: [c.sattva, c.crimson, c.rajas] as [string, string, string] };
    case "vedanta":
      return { primary: c.indigo, dim: c.indigoDim, glow: "rgba(90, 90, 160, 0.22)", pair: [c.purusha, c.indigo, c.avyakta4] as [string, string, string] };
    case "kashmir-shaivism":
      return { primary: c.purusha, dim: c.purushaDim, glow: c.purushaGlow, pair: [c.purusha, c.crimson, c.avyakta4] as [string, string, string] };
    case "shakta":
      return { primary: c.rajas, dim: c.rajasDim, glow: c.rajasGlow, pair: [c.sattva, c.rajas, c.crimson] as [string, string, string] };
    case "tantra":
      return { primary: c.shakti, dim: c.shaktiDim, glow: "rgba(209, 78, 126, 0.22)", pair: [c.sattva, c.shakti, c.rajas] as [string, string, string] };
    case "kundalini-tantra":
      return { primary: c.teal, dim: c.tealDim, glow: "rgba(79, 179, 163, 0.22)", pair: [c.sattva, c.teal, c.rajasDim] as [string, string, string] };
    default:
      return { primary: c.sattva, dim: c.sattvaDim, glow: c.sattvaGlow, pair: gunaStops(c) };
  }
}

export function getElevation(level: 1 | 2 | 3 = 1) {
  const cfg = { 1: [2, 6, 0.28], 2: [4, 12, 0.34], 3: [6, 20, 0.4] } as const;
  const [h, r, o] = cfg[level];
  return {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: h },
    shadowOpacity: o,
    shadowRadius: r,
    elevation: level * 2,
  };
}

export const glowText = (color: string, radius = 12) => ({
  textShadowColor: color,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: radius,
});

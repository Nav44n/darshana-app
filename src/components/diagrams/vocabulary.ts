import { SupportedLanguage } from '../../types/i18n';

// A central dictionary for all text rendered inside SVG diagrams.
// This decouples the visual geometry from the language strings.

export const diagramVocab: Record<string, Record<SupportedLanguage, string>> = {
  // Antahkarana.tsx
  outerSenses: { en: 'OUTER SENSES', ml: 'ബാഹ്യേന്ദ്രിയങ്ങൾ' },
  manas: { en: 'MANAS', ml: 'മനസ്സ്' },
  manasSub: { en: 'Synthesizes', ml: '' },
  ahamkara: { en: 'AHAṂKĀRA', ml: 'അഹങ്കാരം' },
  ahamkaraSub: { en: 'Claims as "Mine"', ml: '' },
  buddhi: { en: 'BUDDHI', ml: 'ബുദ്ധി' },
  buddhiSub: { en: 'Determines', ml: '' },
  purusha: { en: 'PURUṢA', ml: 'പുരുഷൻ' },

  // GunaLamp.tsx
  sattva: { en: 'SATTVA', ml: 'സത്ത്വം' },
  sattvaSub: { en: 'illumines', ml: '' },
  rajas: { en: 'RAJAS', ml: 'രജസ്സ്' },
  rajasSub: { en: 'moves', ml: '' },
  tamas: { en: 'TAMAS', ml: 'തമസ്സ്' },
  tamasSub: { en: 'restrains', ml: '' },
  lampCaption: { en: 'one flame, three strands', ml: '' },

  // DuhkhaTraya.tsx
  duhkha: { en: 'duḥkha', ml: 'ദുഃഖം' },
  adhyatmika: { en: 'ādhyātmika', ml: 'ആദ്ധ്യാത്മികം' },
  adhyatmikaSub: { en: 'body / mind', ml: '' },
  adhibhautika: { en: 'ādhibhautika', ml: 'ആധിഭൗതികം' },
  adhibhautikaSub: { en: 'beings, world', ml: '' },
  adhidaivika: { en: 'ādhidaivika', ml: 'ആധിദൈവികം' },
  adhidaivikaSub: { en: 'unseen forces', ml: '' },

  // PurushaPrakritiUnion.tsx
  purushaSees: { en: 'sees', ml: '' },
  purushaBlind: { en: '(the blind one — sight, no legs)', ml: '' },
  prakritiCarries: { en: 'carries', ml: '' },
  prakritiLame: { en: '(the lame one — legs, no sight)', ml: '' },
  unionCaption: { en: 'travel together, part at the destination', ml: '' },

  // SatkaryavadaChain.tsx
  seed: { en: 'seed', ml: 'ബീജം' },
  latent: { en: 'latent', ml: '' },
  withinCause: { en: 'within cause', ml: '' },
  oil: { en: 'oil', ml: 'എണ്ണ' },
  satkaryavadaCaption: { en: 'the effect pre-exists in its cause', ml: '' },

  // LingaSharira.tsx
  lingaShariraTitle: { en: 'LIṄGA-ŚARĪRA (Subtle Body)', ml: '' },
  tenOrgans: { en: '10 ORGANS', ml: '' },
  tenOrgansSub: { en: '(Cognition & Action)', ml: '' },
  fiveTanmatras: { en: '5 TANMĀTRAS', ml: '' },
  fiveTanmatrasSub: { en: '(Subtle Elements)', ml: '' },
};
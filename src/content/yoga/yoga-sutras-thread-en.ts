import { ThreadStep } from '../../types/content';
import { yogaSutrasThreadMl } from './yoga-sutras-thread-ml';

const threadBase = [
  {
    id: "the-definition",
    textId: "yoga-sutras",
    conceptId: "citta-vritti-nirodha",
    verseIds: ["I.2", "I.3"],
    content: {
      en: {
        title: "The Beginning of Inquiry: What is Yoga?",
        narrative: "Unlike Sa?khya, which builds a cosmological model first, Patajali opens with immediate action: Yoga is the stilling of the mind's changing states (citta-v?tti-nirodha). This is not just a calming exercise; it is an epistemological necessity. Only when the mind is as still as a clear lake can the Seer (Puru?a) rest in its own true nature, rather than identifying with the ripples on the surface."
      }
    }
  },
  {
    id: "pancha-vritti",
    textId: "yoga-sutras",
    conceptId: "pancha-vritti",
    verseIds: ["I.5", "I.6"],
    content: {
      en: {
        title: "The Five States of Mind: Citta V?ttis",
        narrative: "The mind always operates through five types of thought patterns (v?ttis): Pramana (right knowledge), Viparyaya (misconception), Vikalpa (imagination), Nidra (sleep), and Sm?ti (memory). These modifications can either cause deep affliction (kli??a) or be non-afflicted (akli??a). On the ultimate path of Yoga, every single one of these five v?ttis must be mastered and eventually brought to a halt."
      }
    }
  },
  {
    id: "the-method",
    textId: "yoga-sutras",
    conceptId: "abhyasa-vairagya",
    verseIds: ["I.12", "I.13", "I.15"],
    content: {
      en: {
        title: "The Means of Control: Abhyasa and Vairagya",
        narrative: "How do we still these endlessly flowing thoughts? Patajali prescribes two foundational pillars: Abhyasa (practice) and Vairagya (dispassion). Abhyasa is the continuous, dedicated effort to anchor the mind in a state of absolute stillness. Meanwhile, Vairagya is the complete letting go of attachment to worldly and heavenly experiences. One without the other fails; only together can the mental modifications be truly arrested."
      }
    }
  },
  {
    id: "the-devotional-path",
    textId: "yoga-sutras",
    conceptId: "ishvara",
    verseIds: ["I.23", "I.24", "I.27", "I.28"],
    content: {
      en: {
        title: "The Concept of Isvara and Surrender",
        narrative: "For those who find the rigorous practice of Abhyasa and Vairagya difficult, Patajali offers an alternative path: Isvara Pra?idhana-total surrender to the Divine. In Yoga, Isvara is a special, ever-liberated Puru?a untouched by afflictions or karma. The sacred syllable 'Om' (Pra?ava) represents Him. Chanting and meditating on Om grants the yogi swift access to Samadhi."
      }
    }
  },
  {
    id: "the-obstacles",
    textId: "yoga-sutras",
    conceptId: "nava-antaraya",
    verseIds: ["I.30", "I.32"],
    content: {
      en: {
        title: "The Obstacles on the Path",
        narrative: "As soon as practice begins, nine primary obstacles (Antarayas) arise to scatter the mind: disease, dullness, doubt, carelessness, laziness, worldly attachment, false perception, failure to attain concentration, and the inability to maintain it. These are accompanied by physical and mental turbulence. They must be overcome by unwavering, continuous practice focused on a single principle (Ekatattva)."
      }
    }
  },
  {
    id: "chitta-prasadana",
    textId: "yoga-sutras",
    conceptId: "chitta-prasadana",
    verseIds: ["I.33"],
    content: {
      en: {
        title: "Calming the Mind: Citta Prasadana",
        narrative: "To maintain mental peace in daily life, the yogi must deliberately cultivate four distinct attitudes: Maitri (friendliness) towards the happy, Karu?a (compassion) for the suffering, Mudita (gladness) for the virtuous, and Upek?a (indifference) towards the wicked. This psychological mastery helps keep the consciousness (citta) perpetually serene, clear, and undisturbed by external events."
      }
    }
  },
  {
    id: "the-descent",
    textId: "yoga-sutras",
    conceptId: "samadhi-types",
    verseIds: ["I.17", "I.18", "I.51"],
    content: {
      en: {
        title: "The Ultimate Goal: States of Samadhi",
        narrative: "When concentration reaches perfection, the yogi enters Samadhi. In the initial stage (Samprajata Samadhi), the yogi becomes fully absorbed in a specific object of focus, stripping away its layers. But in the highest state (Asamprajata or Nirbija Samadhi), there is no object left to meditate upon. All mental modifications are entirely arrested, and the soul shines purely in its absolute, unconditioned state (Kaivalya)."
      }
    }
  },
  {
    id: "the-root-problem",
    textId: "yoga-sutras",
    conceptId: "five-klesas",
    verseIds: ["II.3", "II.4"],
    content: {
      en: {
        title: "The five Klesas",
        narrative: "If stillness is our true nature, why is the mind so turbulent? Chapter II identifies the five Klesas (afflictions): ignorance, egoism, attachment, aversion, and fear of death. Ignorance (avidya) is the fertile soil for the other four - mistaking the temporary for the eternal, the painful for the pleasant, and the non-self (Prak?ti) for the true Self (Puru?a)."
      }
    }
  },
  {
    id: "the-wheel-of-karma",
    textId: "yoga-sutras",
    conceptId: "five-klesas",
    verseIds: ["II.12", "II.13"],
    content: {
      en: {
        title: "The mechanics of rebirth",
        narrative: "These Klesas drive our actions, and every action (karma) leaves a deep, latent impression (sa?skara) in the mind. Like seeds waiting for rain, these impressions eventually ripen, determining our next birth, lifespan, and the exact mixture of pleasure and pain we will experience. Yoga is the process of roasting these seeds so they can no longer sprout."
      }
    }
  },
  {
    id: "the-eight-limbs",
    textId: "yoga-sutras",
    conceptId: "eight-limbs",
    verseIds: ["II.28", "II.29"],
    content: {
      en: {
        title: "The A??a?ga path",
        narrative: "To roast these seeds, Patajali lays out the famous eight limbs (A??a?ga). It is a journey from the outer world to the inner: starting with ethical restraints (Yamas) and personal observances (Niyamas), moving to the physical body (Asana) and breath (Pra?ayama), withdrawing the senses (Pratyahara), and finally entering the pure mental disciplines of concentration, meditation, and absorption."
      }
    }
  },
  {
    id: "the-inner-limbs",
    textId: "yoga-sutras",
    conceptId: "samyama",
    verseIds: ["III.1", "III.2", "III.3", "III.4"],
    content: {
      en: {
        title: "Sa?yama and the powers",
        narrative: "The final three limbs - Dhara?a (concentration), Dhyana (meditation), and Samadhi (absorption) - form a single continuous process called Sa?yama. When this laser-like focus is applied to various objects, from the pole star to the structure of the body, extraordinary insights and powers (siddhis) naturally arise. Yet, Patajali warns that these powers are themselves obstacles to final liberation."
      }
    }
  },
  {
    id: "the-transformations",
    textId: "yoga-sutras",
    conceptId: "samyama",
    verseIds: ["III.9", "III.11", "III.12"],
    content: {
      en: {
        title: "The mastery of time",
        narrative: "As Sa?yama deepens, the yogi fundamentally alters how the mind relates to time itself (Pari?ama). Instead of constantly shifting from one thought to another, the mind learns to sustain a single moment of restriction (Nirodha), then shrinks the gaps between distractions (Samadhi), and finally achieves a continuous flow of absolutely identical, one-pointed moments (Ekagrata)."
      }
    }
  },
  {
    id: "the-end",
    textId: "yoga-sutras",
    conceptId: "kaivalya-yoga",
    verseIds: ["IV.34"],
    content: {
      en: {
        title: "Kaivalya - absolute independence",
        narrative: "When the mind is as pure and luminous as Puru?a itself, the purpose of their union is fulfilled. The Gu?as, having nothing left to show the Seer, resolve back into their unmanifest state. This is Kaivalya: absolute independence. The Seer rests entirely in its own nature, eternally free from the machinery of the mind, action, and time."
      }
    }
  }
];

export const yogaSutrasThreadEn = threadBase.map(t => ({
  ...t,
  content: {
    en: t.content.en,
    ml: yogaSutrasThreadMl[t.id]
  }
}));

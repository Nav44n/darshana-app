import { ThreadStep } from '../../types/content';
import { vaisesikaThreadMl } from './vaisesika-sutras-thread-ml';

const threadBase = [
  {
    id: "v-thread-1-dharma",
    textId: "vaisesika-sutras",
    conceptId: "dharma",
    verseIds: ["1.1.1", "1.1.2", "1.1.4"],
    content: {
      en: {
        title: "The Physics of Liberation",
        narrative: "Welcome to Vaiśeṣika, the ancient Indian school of atomic pluralism and rigorous ontology. Founded by Maharṣi Kaṇāda, it approaches ultimate liberation (Mokṣa) not through mysticism, but through the uncompromising, objective analysis of reality. It begins with a profound claim: true spiritual exaltation (Abhyudaya) and final liberation (Niḥśreyasa) are achieved through 'Dharma'—which Kaṇāda defines as the precise, categorical understanding of the physical and metaphysical universe."
      }
    }
  },
  {
    id: "v-thread-2-padarthas",
    textId: "vaisesika-sutras",
    conceptId: "padartha",
    verseIds: ["1.1.4", "1.1.8"],
    content: {
      en: {
        title: "The Six Categories of Reality",
        narrative: "To understand the universe, we must first map it. Vaiśeṣika argues that absolutely everything that exists, can be known, and can be named falls into six fundamental categories (Padārthas). These are the blueprints of existence: Substance (Dravya), Quality (Guṇa), Action (Karma), Generality (Sāmānya), Particularity (Viśeṣa), and Inherence (Samavāya). By grasping the shared and differing properties of these six, the intellect pierces through the illusion of reality."
      }
    }
  },
  {
    id: "v-thread-3-dravya",
    textId: "vaisesika-sutras",
    conceptId: "dravya",
    verseIds: ["1.1.5", "1.1.15", "1.1.18"],
    content: {
      en: {
        title: "Dravya: The Substantive Foundation",
        narrative: "Of the six categories, Substance (Dravya) is the absolute foundation. Qualities and Actions cannot exist in a vacuum; they must inhabit a Substrate. Vaiśeṣika identifies exactly nine eternal substrates that compose reality: The five elements (Earth, Water, Fire, Air, Ether), the coordinates of reality (Time and Space), the observing Soul (Ātman), and the instrument of thought (Mind/Manas). Nothing else physically exists."
      }
    }
  },
  {
    id: "v-thread-4-guna-karma",
    textId: "vaisesika-sutras",
    conceptId: "guna-karma",
    verseIds: ["1.1.6", "1.1.7", "1.1.16", "1.1.17"],
    content: {
      en: {
        title: "Guṇa & Karma: The Dynamics of Being",
        narrative: "Substances are static without attributes and movement. Guṇa (Quality) defines the nature of a substance—such as color, taste, number, and dimension—but also includes psychological qualities like pleasure, pain, and intellect (which inhere only in the Soul). Karma (Action) governs absolute motion: upward, downward, contraction, expansion, and locomotion. Together, Guṇa and Karma weave the static Substrates into a dynamic, living universe."
      }
    }
  },
  {
    id: "v-thread-5-paramanu",
    textId: "vaisesika-sutras",
    conceptId: "paramanu",
    verseIds: ["4.1.1", "4.1.2", "4.1.4", "4.1.5"],
    content: {
      en: {
        title: "Paramāṇuvāda: The Atomic Reality",
        narrative: "If we divide matter continually, do we reach nothingness? Vaiśeṣika says no. At the absolute limit of physical division lies the Paramāṇu (Atom)—eternal, indestructible, spherical, and invisible. The four elements (Earth, Water, Fire, Air) are fundamentally composed of these distinct elemental atoms. Creation is simply the temporary conjunction of these eternal atoms; destruction is their disjunction. Matter is never destroyed, only rearranged."
      }
    }
  },
  {
    id: "v-thread-6-samanya-visesa",
    textId: "vaisesika-sutras",
    conceptId: "samanya-visesa",
    verseIds: ["1.2.3", "1.2.4", "1.2.5", "1.2.6"],
    content: {
      en: {
        title: "Universals and the Ultimate Particular",
        narrative: "How do we recognize a cow as a 'cow'? Through Sāmānya (Generality)—the objective, universal essence shared by all instances of a class. But what makes two identical atoms different? That requires Viśeṣa (Particularity)—the ultimate, indivisible uniqueness inherent in eternal substances. It is this intense focus on 'Viśeṣa' (the particular) that gives the Vaiśeṣika system its very name."
      }
    }
  },
  {
    id: "v-thread-7-samavaya",
    textId: "vaisesika-sutras",
    conceptId: "samavaya",
    verseIds: ["7.2.26"],
    content: {
      en: {
        title: "Samavāya: The Invisible Glue",
        narrative: "If a cloth is made of threads, how do they relate? They are bound by Samavāya (Inherence)—the inseparable, eternal relationship between a whole and its parts, a substance and its qualities, or a motion and the moving object. Unlike a temporary contact (like a hand touching a table), Samavāya is the structural glue of reality. Without it, the universe would disintegrate into isolated, unrelated fragments."
      }
    }
  },
  {
    id: "v-thread-8-abhava",
    textId: "vaisesika-sutras",
    conceptId: "abhava",
    verseIds: ["9.1.1", "9.1.2", "9.1.4", "9.1.9"],
    content: {
      en: {
        title: "Abhāva: The Power of Non-Existence",
        narrative: "Though originally possessing six categories, the tradition later formalized a seventh: Abhāva (Non-existence). In Vaiśeṣika logic, 'nothingness' is a knowable, observable reality. Knowing that 'a pot does not exist on this table' is a specific, valid form of cognition. Whether it is prior non-existence (before a pot is made) or posterior non-existence (after a pot is smashed), Abhāva allows us to logically map the boundaries of existence."
      }
    }
  },
  {
    id: "v-thread-9-epistemology",
    textId: "vaisesika-sutras",
    conceptId: "manas",
    verseIds: ["8.1.1", "8.1.2", "8.1.11", "9.1.11"],
    content: {
      en: {
        title: "The Mechanics of the Mind",
        narrative: "How does the eternal Soul know the atomic world? Through the Manas (Mind). Unlike Vedanta, Vaiśeṣika considers the Mind to be an atomic, internal substance. Because the Mind is infinitely small (atomic), it can only process one piece of sensory data at a time. The illusion of multitasking is merely the mind moving at incomprehensible speeds. Cognition is a mechanical spark resulting from the sequential contact of Soul, Mind, Sense Organ, and Object."
      }
    }
  },
  {
    id: "v-thread-10-causality",
    textId: "vaisesika-sutras",
    conceptId: "asatkaryavada",
    verseIds: ["1.2.1", "1.2.2", "10.2.1", "10.2.2"],
    content: {
      en: {
        title: "Asatkāryavāda: The New Creation",
        narrative: "Unlike Sāṃkhya, which believes the effect already exists hidden inside the cause (the statue is hiding in the marble), Vaiśeṣika champions Asatkāryavāda (Non-existence of the effect). When atoms combine to form a new object, that object is a completely new, emergent entity that did not exist before. Reality is constantly generating novel phenomena through the relentless conjunction of eternal causes."
      }
    }
  },
  {
    id: "v-thread-11-atman",
    textId: "vaisesika-sutras",
    conceptId: "atman",
    verseIds: ["3.2.4", "3.2.19", "3.2.20"],
    content: {
      en: {
        title: "Ātman: The Substrate of Consciousness",
        narrative: "The Soul (Ātman) in Vaiśeṣika is a remarkable concept. It is eternal and all-pervading (infinite in size), yet inherently unconscious. Consciousness, desire, pleasure, and pain are not the essence of the Soul; they are adventitious 'Qualities' (Guṇas) that temporarily arise in the Soul only when it comes into contact with the atomic Mind (Manas) inside a physical body. Without the Mind, the Soul is entirely inert."
      }
    }
  },
  {
    id: "v-thread-12-moksha",
    textId: "vaisesika-sutras",
    conceptId: "moksha",
    verseIds: ["5.2.16", "5.2.18"],
    content: {
      en: {
        title: "Mokṣa: The Grand Disjunction",
        narrative: "If consciousness and suffering are produced by the contact between the Soul and the Mind, then liberation (Mokṣa) is their ultimate separation. When a yogi acquires absolute knowledge of the Padārthas, the unseen forces (Adṛṣṭa) of Karma cease. The atomic Mind detaches from the Soul. The Soul remains eternal, infinite, and utterly devoid of all qualities—free from pain, but also free from consciousness itself. A state of pure, absolute stillness."
      }
    }
  }
];

export const vaisesikaThreadEn = threadBase.map(t => ({...t, content: { ...t.content, ml: vaisesikaThreadMl[t.id] }}));

export type ThreadItemType = "sutra" | "concept" | "note";

export interface ThreadItem {
  id: string;
  type: ThreadItemType;
  refId?: string; // Matches sutra.id (e.g., "1.1.1") or concept.id (e.g., "concept_brahman")
  text?: string;  // Markdown or plain text for 'note' type items
}

export interface ThreadModule {
  id: string;
  title: string;
  description: string;
  items: ThreadItem[];
}

export interface LearningThread {
  id: string;
  title: string;
  description: string;
  modules: ThreadModule[];
}

export const brahmaSutrasThreadEn: LearningThread = {
  id: "thread_brahma_sutras_core",
  title: "The Heart of Vedanta: A Brahma Sutras Journey",
  description: "A guided pathway through the profound philosophy of the Brahma Sutras. This thread weaves together key concepts of Advaita Vedanta with the direct aphorisms of Sage Vyasa, moving from the initial inquiry into Brahman to the ultimate liberation (Moksha).",
  modules: [
    {
      id: "module_1_samanvaya",
      title: "1. The Call to Inquiry (Samanvaya)",
      description: "Adhyaya 1 establishes Brahman as the ultimate, unifying truth of all Upanishadic texts. We begin by understanding the prerequisites for this study and the core nature of Reality.",
      items: [
        {
          id: "m1_i1",
          type: "note",
          text: "Before studying the ultimate reality, a student must be prepared. Vedanta is not just intellectual philosophy; it requires a purified mind."
        },
        {
          id: "m1_i2",
          type: "concept",
          refId: "concept_sadhana_chatushtaya"
        },
        {
          id: "m1_i3",
          type: "note",
          text: "With the qualifications met, Sage Vyasa opens the Brahma Sutras with the famous *Catussutri* (the first four sutras), which contain the essence of the entire work."
        },
        {
          id: "m1_i4",
          type: "sutra",
          refId: "1.1.1"
        },
        {
          id: "m1_i5",
          type: "concept",
          refId: "concept_nirguna_brahman"
        },
        {
          id: "m1_i6",
          type: "sutra",
          refId: "1.1.2"
        },
        {
          id: "m1_i7",
          type: "concept",
          refId: "concept_saguna_brahman"
        },
        {
          id: "m1_i8",
          type: "sutra",
          refId: "1.1.3"
        },
        {
          id: "m1_i9",
          type: "concept",
          refId: "concept_pramana"
        },
        {
          id: "m1_i10",
          type: "sutra",
          refId: "1.1.4"
        }
      ]
    },

    {
      id: "module_2_maya_causality",
      title: "2. The Architecture of Illusion",
      description: "How does the infinite, formless, and unchanging Brahman project a finite, changing universe? We explore the mechanics of Maya and Causality.",
      items: [
        {
          id: "m2_i1",
          type: "note",
          text: "To understand the relationship between the Absolute (Brahman) and the relative world, we must understand the mysterious cosmic power of illusion."
        },
        {
          id: "m2_i2",
          type: "concept",
          refId: "concept_maya"
        },
        {
          id: "m2_i3",
          type: "concept",
          refId: "concept_adhyasa"
        },
        {
          id: "m2_i4",
          type: "sutra",
          refId: "1.4.23"
        },
        {
          id: "m2_i5",
          type: "concept",
          refId: "concept_abhinna_nimitta_upadana"
        },
        {
          id: "m2_i6",
          type: "note",
          text: "Unlike milk turning into curd (a real transformation), Brahman projects the universe without undergoing any actual change."
        },
        {
          id: "m2_i7",
          type: "concept",
          refId: "concept_vivartavada"
        }
      ]
    },

    {
      id: "module_3_avirodha",
      title: "3. Defending the Non-Dual Truth (Avirodha)",
      description: "Adhyaya 2 is dedicated to refuting opposing philosophies (like Sankhya and Vaiseshika) and resolving logical objections against Vedanta.",
      items: [
        {
          id: "m3_i1",
          type: "note",
          text: "The primary rival to Vedanta in ancient India was the Sankhya school, which argued that an insentient nature (Pradhana) created the universe."
        },
        {
          id: "m3_i2",
          type: "concept",
          refId: "concept_pradhana"
        },
        {
          id: "m3_i3",
          type: "concept",
          refId: "concept_samkhya_purusha"
        },
        {
          id: "m3_i4",
          type: "sutra",
          refId: "2.2.1"
        },
        {
          id: "m3_i5",
          type: "note",
          text: "Another rival was the Vaiseshika school, which proposed that the universe was built from eternal, indivisible atoms."
        },
        {
          id: "m3_i6",
          type: "concept",
          refId: "concept_paramanuvada"
        },
        {
          id: "m3_i7",
          type: "sutra",
          refId: "2.2.11"
        },
        {
          id: "m3_i8",
          type: "note",
          text: "Having refuted the rivals, Vyasa addresses why Brahman would create a world at all if it is already perfect and lacks nothing."
        },
        {
          id: "m3_i9",
          type: "sutra",
          refId: "2.1.33"
        }
      ]
    },

    {
      id: "module_4_jiva_karma",
      title: "4. The Bound Soul (Jiva) and Samsara",
      description: "Who are we, really? This module breaks down the anatomy of the individual soul, the layers of ignorance, and the mechanics of Karma.",
      items: [
        {
          id: "m4_i1",
          type: "concept",
          refId: "concept_jiva"
        },
        {
          id: "m4_i2",
          type: "concept",
          refId: "concept_upadhi"
        },
        {
          id: "m4_i3",
          type: "concept",
          refId: "concept_pancha_kosha"
        },
        {
          id: "m4_i4",
          type: "note",
          text: "The Brahma Sutras deeply analyze the states of human consciousness to prove that the true Self is the untouched witness of all states."
        },
        {
          id: "m4_i5",
          type: "concept",
          refId: "concept_avastha_traya"
        },
        {
          id: "m4_i6",
          type: "sutra",
          refId: "3.2.1"
        },
        {
          id: "m4_i7",
          type: "note",
          text: "Ignorance of this true Self binds the Jiva to the endless wheel of birth and death, fueled by action (Karma)."
        },
        {
          id: "m4_i8",
          type: "concept",
          refId: "concept_samsara"
        },
        {
          id: "m4_i9",
          type: "concept",
          refId: "concept_karma"
        }
      ]
    },

    {
      id: "module_5_sadhana",
      title: "5. The Path of Practice (Sadhana)",
      description: "Adhyaya 3 explores the practical means to achieve liberation, reconciling various meditations (Vidyas) and establishing the supremacy of Knowledge.",
      items: [
        {
          id: "m5_i1",
          type: "concept",
          refId: "concept_jnana_yoga"
        },
        {
          id: "m5_i2",
          type: "concept",
          refId: "concept_nididhyasana"
        },
        {
          id: "m5_i3",
          type: "sutra",
          refId: "3.4.1"
        },
        {
          id: "m5_i4",
          type: "note",
          text: "Meditation and reflection must be practiced continuously until realization occurs."
        },
        {
          id: "m5_i5",
          type: "sutra",
          refId: "4.1.1"
        },
        {
          id: "m5_i6",
          type: "note",
          text: "Upon the dawn of Self-knowledge, the immense backlog of accumulated Karma is incinerated."
        },
        {
          id: "m5_i7",
          type: "sutra",
          refId: "4.1.13"
        },
        {
          id: "m5_i8",
          type: "sutra",
          refId: "4.1.15"
        }
      ]
    },

    {
      id: "module_6_phala",
      title: "6. The Ultimate Goal (Phala)",
      description: "Adhyaya 4 details the culmination of the spiritual journey: the departure of the soul, the paths taken after death, and the absolute freedom of Moksha.",
      items: [
        {
          id: "m6_i1",
          type: "note",
          text: "For the ignorant, death means rebirth. But for the meditator on Saguna Brahman, the soul departs via a specific path of light."
        },
        {
          id: "m6_i2",
          type: "sutra",
          refId: "4.2.1"
        },
        {
          id: "m6_i3",
          type: "sutra",
          refId: "4.3.1"
        },
        {
          id: "m6_i4",
          type: "concept",
          refId: "concept_krama_mukti"
        },
        {
          id: "m6_i5",
          type: "note",
          text: "However, for the one who realizes Nirguna Brahman directly in this life, there is no travel, no departing. They are liberated right here, right now."
        },
        {
          id: "m6_i6",
          type: "concept",
          refId: "concept_jivanmukti"
        },
        {
          id: "m6_i7",
          type: "concept",
          refId: "concept_moksha"
        },
        {
          id: "m6_i8",
          type: "sutra",
          refId: "4.4.1"
        },
        {
          id: "m6_i9",
          type: "concept",
          refId: "concept_videhamukti"
        },
        {
          id: "m6_i10",
          type: "note",
          text: "The Brahma Sutras conclude with a resounding assurance: the liberated soul, merged in the Absolute, never returns to the cycle of suffering."
        },
        {
          id: "m6_i11",
          type: "sutra",
          refId: "4.4.22"
        }
      ]
    }
  ]
};

/**
 * ============================================================================
 * TANTRĀLOKA: MASTER ONTOLOGY & CONCEPTS DIRECTORY (VOL 1 COMPLETE)
 * ============================================================================
 * This file represents the systematic conceptual mapping of Abhinavagupta's 
 * Tantrāloka (Volume 1). It maps the non-dual Shaiva philosophy (Trika).
 * ============================================================================
 */

export interface TantralokaConcept {
  id: string;
  sanskrit: string;
  iast: string;
  english: string;
  category: "Absolute Reality" | "Epistemology" | "Cosmology" | "Subtle Physiology" | "Ritual & Mantra" | "Soteriology" | "Philosophy of Language" | "Aesthetics & Experience";
  definition: string;
  significance: string;
  relatedConcepts: string[];
}

export const tantralokaConceptsEn: TantralokaConcept[] = [
{
    id: "anuttara",
    sanskrit: "अनुत्तर",
    iast: "anuttara",
    english: "The Unsurpassed / The Absolute",
    category: "Absolute Reality",
    definition: "The ultimate, non-dual reality in Trika Shaivism. It literally means 'that beyond which there is nothing higher'. It is the pure, undifferentiated source of all existence.",
    significance: "Anuttara is the foundational concept of the Tantrāloka. It represents the state before the division of subject and object, encompassing both Śiva (consciousness) and Śakti (energy) in perfect union.",
    relatedConcepts: ["siva", "sakti", "kula", "akula"]
  },
  {
    id: "prakasa",
    sanskrit: "प्रकाश",
    iast: "prakāśa",
    english: "Luminosity / Pure Consciousness",
    category: "Absolute Reality",
    definition: "The foundational, static light of consciousness. It is the self-revealing nature of reality that makes the manifestation of all objects possible.",
    significance: "Without Prakāśa, nothing could be known or exist, as existence requires illumination by consciousness. It is the 'Śiva' aspect of the Absolute.",
    relatedConcepts: ["vimarsa", "siva", "citi"]
  },
  {
    id: "vimarsa",
    sanskrit: "विमर्श",
    iast: "vimarśa",
    english: "Reflective Awareness / Dynamic Power",
    category: "Absolute Reality",
    definition: "The active, self-reflective capacity of consciousness. It is the power of the Light (Prakāśa) to know itself and to freely manifest as the universe.",
    significance: "While Prakāśa is the light, Vimarśa is the awareness of that light. It is the 'Śakti' aspect. Without Vimarśa, consciousness would be inert like a crystal; with it, consciousness is vibrant, creative, and autonomous.",
    relatedConcepts: ["prakasa", "sakti", "svatantrya"]
  },
  {
    id: "svatantrya",
    sanskrit: "स्वातन्त्र्य",
    iast: "svātantrya",
    english: "Absolute Free Will / Sovereign Autonomy",
    category: "Absolute Reality",
    definition: "The unconditioned, absolute freedom of Supreme Consciousness to project, maintain, and dissolve the universe entirely within itself, without any external material.",
    significance: "It explains how the non-dual Absolute can appear as the diverse, dualistic universe without undergoing any real change or requiring a second principle (like Prakṛti in Sāṃkhya).",
    relatedConcepts: ["vimarsa", "sakti", "maya"]
  },
  {
    id: "akula",
    sanskrit: "अकुल",
    iast: "akula",
    english: "The Transcendent / Śiva",
    category: "Cosmology",
    definition: "That which is beyond 'Kula' (totality/embodiment). It represents the pure, unmanifest, transcendent aspect of the Absolute (Śiva).",
    significance: "Often invoked in the opening mangalācaraṇa (auspicious verses), Akula pairs with Kula to form the complete spectrum of reality—transcendent and immanent.",
    relatedConcepts: ["kula", "siva", "anuttara"]
  },
  {
    id: "kula",
    sanskrit: "कुल",
    iast: "kula",
    english: "The Totality / Embodied Cosmos / Śakti",
    category: "Cosmology",
    definition: "The immanent, manifest universe, the body, the senses, and the family of energies. It is the domain of Śakti.",
    significance: "Trika Shaivism embraces Kula (the world/body) as a direct expression of the Divine, not as an illusion to be escaped. Liberation involves recognizing Akula within Kula.",
    relatedConcepts: ["akula", "sakti", "kaula"]
  },
  {
    id: "uccara",
    sanskrit: "उच्चार",
    iast: "uccāra",
    english: "Ascending Resonance / Recitation",
    category: "Ritual & Mantra",
    definition: "The yogic practice of focusing on the upward movement of breath (prāṇa) and the subtle sound resonance (like OM) rising through the subtle centers of the body.",
    significance: "As noted in Chapter 1, this is not merely verbal chanting, but the energetic tracking of a mantra from the heart or navel up through the crown, dissolving into pure consciousness.",
    relatedConcepts: ["pranava", "bindu", "dvadasanta", "nada"]
  },
  {
    id: "bindu",
    sanskrit: "बिन्दु",
    iast: "bindu",
    english: "The Point / Infinite Potency",
    category: "Subtle Physiology",
    definition: "The condensed, point-limit of sound and energy. In the stages of Uccāra (mantra recitation), it is the stage where audible sound condenses into pure energetic potential.",
    significance: "Bindu represents the concentration of Śakti just before she expands into creation, or conversely, the point through which the yogi's awareness passes upon returning to the Absolute.",
    relatedConcepts: ["uccara", "nada", "ardhacandra"]
  },
  {
    id: "nada",
    sanskrit: "नाद",
    iast: "nāda",
    english: "Unstruck Sound / Subtle Resonance",
    category: "Subtle Physiology",
    definition: "The continuous, subtle, internal resonance of consciousness that persists beyond physical or articulated sound.",
    significance: "In the ascent of the mantra (like OM), Nāda is a higher stage of subtlety above Bindu, leading the practitioner closer to the silent void of pure awareness.",
    relatedConcepts: ["bindu", "uccara", "sakti"]
  },
  {
    id: "unmana",
    sanskrit: "उन्मना",
    iast: "unmanā",
    english: "The Trans-mental State",
    category: "Soteriology",
    definition: "The ultimate stage in the ascent of consciousness (uccāra), translating to 'beyond mind'. It is the state where all mental fluctuation ceases, and only pure, uninterrupted awareness remains.",
    significance: "According to the Tantrāloka (and texts like the Svacchandatantra), reaching Unmanā marks the final dissolution of the limited self into Śiva. It has no temporal duration (mātrā).",
    relatedConcepts: ["samana", "uccara", "dvadasanta"]
  },
  {
    id: "dvadasanta",
    sanskrit: "द्वादशान्त",
    iast: "dvādaśānta",
    english: "The End of the Twelve",
    category: "Subtle Physiology",
    definition: "A subtle yogic spatial marker located twelve finger-breadths (aṅgulas) from a specific physical point (usually the tip of the nose externally, or above the crown of the head internally).",
    significance: "It is the terminal 'location' where the highest state of recitation (uccāra) of a mantra dissolves into the Absolute void. Focusing here induces sudden spiritual awakening.",
    relatedConcepts: ["uccara", "unmana", "brahmarandhra"]
  },
  {
    id: "matra",
    sanskrit: "मात्रा",
    iast: "mātrā",
    english: "Measure / Duration",
    category: "Ritual & Mantra",
    definition: "The precise temporal duration or measure of each phonetic component of a mantra (such as the parts of A-U-M) as it ascends through the subtle body.",
    significance: "As Abhinavagupta points out, as the mantra ascends to higher, subtler states (Bindu, Nāda, Śakti, Vyāpinī), the 'mātrā' becomes infinitesimally small (e.g., 1/64th, 1/128th) until it reaches the timeless state of Unmanā.",
    relatedConcepts: ["uccara", "unmana"]
  },

// --- DYNAMICS OF CONSCIOUSNESS & AESTHETICS ---
  {
    id: "spanda",
    sanskrit: "स्पन्द",
    iast: "spanda",
    english: "Vibration / Divine Pulsation",
    category: "Absolute Reality",
    definition: "The subtle, creative throb or pulsation of absolute consciousness. It is the unmoving movement—a dynamic stillness that is the source of all energy and physical vibration.",
    significance: "Spanda explains how the static, unchanging Absolute (Prakāśa) can also be the source of all dynamic activity in the universe without moving from its own center.",
    relatedConcepts: ["vimarsa", "sphurana", "sakti"]
  },
  {
    id: "sphurana",
    sanskrit: "स्फुरण",
    iast: "sphuraṇa",
    english: "Flashing Forth / Sudden Manifestation",
    category: "Absolute Reality",
    definition: "The spontaneous, instantaneous shining forth of the universe within consciousness. It describes manifestation not as a mechanical creation, but as a luminous 'flash' of awareness.",
    significance: "Emphasizes the immediacy of creation; the universe does not take time to be created from Śiva's perspective; it flashes into existence as an act of joyful self-recognition.",
    relatedConcepts: ["abhasa", "spanda", "camatkara"]
  },
  {
    id: "camatkara",
    sanskrit: "चमत्कार",
    iast: "camatkāra",
    english: "Aesthetic Rapture / Blissful Wonder",
    category: "Aesthetics & Experience",
    definition: "The thrilling, blissful rapture of self-awareness. It is the feeling of absolute wonder that consciousness experiences when resting in its own infinite nature or when tasting an object completely.",
    significance: "Abhinavagupta elevates aesthetic enjoyment to a spiritual paradigm. Liberation is not dull voidness, but a continuous, vibrant state of 'wonder' (vismaya) and rapturous joy.",
    relatedConcepts: ["ananda", "rasa", "vimarsa"]
  },
  {
    id: "visarga",
    sanskrit: "विसर्ग",
    iast: "visarga",
    english: "Creative Emission / Pouring Forth",
    category: "Cosmology",
    definition: "The expansive power of consciousness pouring itself out to become the universe. Symbolized in Sanskrit grammar by the two dots of the visarga (ḥ), representing the upper (Śiva) and lower (Śakti) currents of creation.",
    significance: "Visarga is the mechanism of creation in Trika. It is the energetic release of the Absolute's internal fullness into external multiplicity.",
    relatedConcepts: ["sakti", "kula", "pratibimba"]
  },
  {
    id: "samvid",
    sanskrit: "संविद्",
    iast: "saṃvid",
    english: "Pure, Undivided Consciousness",
    category: "Absolute Reality",
    definition: "The ultimate perceiving reality. It is pure, unadulterated consciousness before it takes on the forms of subject (knower) and object (known).",
    significance: "All things—thoughts, emotions, physical objects, and voids—are made entirely of Saṃvid. Realization is the recognition that only Saṃvid exists.",
    relatedConcepts: ["prakasa", "citi", "anuttara"]
  },

  // --- PHILOSOPHY OF LANGUAGE & PHONEMATICS ---
  {
    id: "matrika",
    sanskrit: "मातृका",
    iast: "mātṛkā",
    english: "The Phonetic Matrix / The Un-understood Mother",
    category: "Philosophy of Language",
    definition: "The hidden, esoteric power of the letters of the Sanskrit alphabet. When un-understood, Mātṛkā binds the soul through limiting language and concepts; when understood, she is the liberating power of Śiva.",
    significance: "Explains how the mind is trapped by its own internal dialogue. Words are not just labels, but living energies that dictate our perception of reality.",
    relatedConcepts: ["malini", "vikalpa", "para-vac"]
  },
  {
    id: "malini",
    sanskrit: "मालिनी",
    iast: "mālinī",
    english: "The Garland of Letters / The Scrambled Alphabet",
    category: "Philosophy of Language",
    definition: "An esoteric arrangement of the Sanskrit alphabet where vowels and consonants are mixed chaotically, rather than in their standard logical order (Mātṛkā).",
    significance: "Mālinī represents the wild, unbridled, and transcendent power of Śakti that defies ordinary human logic. Initiations using the Mālinī arrangement are considered highly potent in Trika.",
    relatedConcepts: ["matrika", "kula"]
  },
  {
    id: "para-vac",
    sanskrit: "परावाक्",
    iast: "parā-vāc",
    english: "Supreme Speech / The Ultimate Word",
    category: "Philosophy of Language",
    definition: "The highest level of speech. It is the silent, pure, non-dual throb of consciousness prior to any intention to create or communicate. It is identical with Vimarśa.",
    significance: "All lower forms of speech and physical manifestation devolve from Parā Vāc. Realizing this level is equivalent to final liberation.",
    relatedConcepts: ["pasyanti", "vimarsa", "spanda"]
  },
  {
    id: "pasyanti",
    sanskrit: "पश्यन्ती",
    iast: "paśyantī",
    english: "Visionary Speech",
    category: "Philosophy of Language",
    definition: "The second stage of speech. It is intuitive, holistic vision where the intent to manifest arises, but subject and object are still held in an undifferentiated unity.",
    significance: "Often compared to a peacock egg—the fluid inside contains the potential for all the brilliant colors of the peacock, but the colors are not yet distinct.",
    relatedConcepts: ["para-vac", "madhyama"]
  },
  {
    id: "madhyama",
    sanskrit: "मध्यमा",
    iast: "madhyamā",
    english: "Intermediate Speech / Mental Discourse",
    category: "Philosophy of Language",
    definition: "The third stage of speech occurring in the subtle body. It is the realm of discursive thought, internal dialogue, and mental concepts where separation (differentiation) first occurs.",
    significance: "This is the level where Vikalpas (dualistic thoughts) operate and where the yogi must exert effort to unify their awareness before reaching Paśyantī.",
    relatedConcepts: ["pasyanti", "vaikhari", "vikalpa"]
  },
  {
    id: "vaikhari",
    sanskrit: "वैखरी",
    iast: "vaikharī",
    english: "Articulated / Physical Speech",
    category: "Philosophy of Language",
    definition: "The final, grossest stage of speech. It is spoken language, physical sound, and the fully materialized external universe.",
    significance: "While it is the most bound and differentiated state, the Tantrāloka teaches that tracking Vaikharī back to its source (Uccāra) is a direct path to the Absolute.",
    relatedConcepts: ["madhyama", "uccara", "nada"]
  },

  // --- EPISTEMOLOGY: THE TRIAD OF KNOWLEDGE ---
  {
    id: "pramatri",
    sanskrit: "प्रमातृ",
    iast: "pramātṛ",
    english: "The Subject / The Knower",
    category: "Epistemology",
    definition: "The conscious subject who perceives or knows. In ultimate reality, Śiva is the only true Pramātṛ; in limited reality, it is the bound individual (jīva).",
    significance: "Trika epistemology asserts that the Knower, Knowing, and Known are ultimately one. Ignorance is viewing the Subject as separate from the Object.",
    relatedConcepts: ["pramana", "prameya", "samvid"]
  },
  {
    id: "pramana",
    sanskrit: "प्रमाण",
    iast: "pramāṇa",
    english: "The Means of Knowledge / The Act of Knowing",
    category: "Epistemology",
    definition: "The cognitive mechanism, sense organs, or energetic link that connects the subject (knower) to the object (known).",
    significance: "It is the bridge of consciousness. Through yogic practice, one rests in the Pramāṇa (the pure act of seeing) without grasping at the Pramātṛ (I) or Prameya (That).",
    relatedConcepts: ["pramatri", "prameya"]
  },
  {
    id: "prameya",
    sanskrit: "प्रमेय",
    iast: "prameya",
    english: "The Object of Knowledge / The Known",
    category: "Epistemology",
    definition: "The object that is perceived, known, or experienced by the subject.",
    significance: "In non-dual Shaivism, the Prameya is not dead matter; it is the Pramātṛ (Śiva) condensed and appearing externally to Himself.",
    relatedConcepts: ["pramatri", "pramana", "abhasa"]
  },

  // --- COSMOLOGY: THE PURE TATTVAS & LIMITATION ---
  {
    id: "sadasiva-tattva",
    sanskrit: "सदाशिवतत्त्व",
    iast: "sadāśiva-tattva",
    english: "The Stage of Pure Being (I am This)",
    category: "Cosmology",
    definition: "The third of the 36 Tattvas (following Śiva and Śakti). It is the first stir of cosmic manifestation where the Absolute experiences 'I am This universe,' with the emphasis heavily on the 'I'.",
    significance: "The universe exists purely as an internal, nebulous idea within consciousness. It is the dominance of Will (Icchā) over Action.",
    relatedConcepts: ["isvara-tattva", "sadvidya-tattva"]
  },
  {
    id: "isvara-tattva",
    sanskrit: "ईश्वरतत्त्व",
    iast: "īśvara-tattva",
    english: "The Stage of Pure Mastery (This am I)",
    category: "Cosmology",
    definition: "The fourth Tattva. Here, the experience shifts to 'This universe am I.' The emphasis is heavily on the 'This' (the objective manifestation), though it is still felt as one with the self.",
    significance: "Represents the dominance of Knowledge (Jñāna). The universe begins to gain distinct definition while remaining completely unified with the Creator.",
    relatedConcepts: ["sadasiva-tattva", "sadvidya-tattva"]
  },
  {
    id: "sadvidya-tattva",
    sanskrit: "सद्विद्यातत्त्व",
    iast: "sadvidyā-tattva",
    english: "The Stage of Pure Knowledge (Equal I and This)",
    category: "Cosmology",
    definition: "The fifth Tattva, also known as Śuddhavidyā. The experience is a perfectly balanced 'I am I, and This is This.' Subject and object are equal, clear, yet still mutually identified.",
    significance: "This is the final stage of the 'Pure Creation' (Śuddha Adhvan). It represents the dominance of Action (Kriyā) and is the launching pad before consciousness falls into Maya (illusion).",
    relatedConcepts: ["sadasiva-tattva", "isvara-tattva", "maya-tattva"]
  },
  {
    id: "maya-tattva",
    sanskrit: "मायातत्त्व",
    iast: "māyā-tattva",
    english: "The Principle of Limitation and Differentiation",
    category: "Cosmology",
    definition: "The sixth Tattva. The powerful veil that splits the unified 'I am This' of Sadvidyā into 'I am not That.' It is the source of all dualistic separation.",
    significance: "Unlike Advaita Vedanta which views Māyā as an inexplicable illusion, Trika views Māyā as the real, sovereign power (Svātantrya) of Śiva intentionally limiting Himself to play the game of worldly existence.",
    relatedConcepts: ["kancuka", "mala", "svatantrya"]
  },
  {
    id: "kancuka",
    sanskrit: "कञ्चुक",
    iast: "kañcuka",
    english: "The Five Coverings / Sheaths of Limitation",
    category: "Cosmology",
    definition: "The five offshoots of Māyā that contract the infinite powers of Śiva into the limited capacities of an individual (Jīva). They are Kalā (limited agency), Vidyā (limited knowledge), Rāga (desire/attachment), Kāla (time), and Niyati (spatial restriction/destiny).",
    significance: "These five 'cloaks' perfectly reverse Śiva's five infinite powers (Omnipotence, Omniscience, Fullness, Eternity, Omnipresence), creating the bound human condition.",
    relatedConcepts: ["maya-tattva", "mala", "jiva"]
  },
  {
    id: "bhairava",
    sanskrit: "भैरव",
    iast: "bhairava",
    english: "The Supreme / The Terrifying Form",
    category: "Absolute Reality",
    definition: "The supreme, absolute reality in its entirety. Esoterically broken down by Abhinavagupta as: Bha (Bharana - maintenance), Ra (Ravana - withdrawal/destruction), and Va (Vamana - projection/creation).",
    significance: "Bhairava is not just a deity, but the state of absolute consciousness that holds the universe together, withdraws it, and projects it seamlessly. To recognize oneself as Bhairava is the goal of the Tantrāloka.",
    relatedConcepts: ["anuttara", "siva", "camatkara"]
  },

// --- THE FIVE ACTS OF SIVA (PAÑCAKṚTYA) ---
  {
    id: "pancakritya",
    sanskrit: "पञ्चकृत्य",
    iast: "pañcakṛtya",
    english: "The Fivefold Act of Śiva",
    category: "Cosmology",
    definition: "The five continuous, eternal actions performed by Supreme Consciousness: Creation (Sṛṣṭi), Maintenance (Sthiti), Dissolution (Saṃhāra), Concealment (Tirodhāna), and Grace/Revelation (Anugraha).",
    significance: "Abhinavagupta teaches that these five acts are not just cosmic events occurring on a universal scale, but are happening continuously within every micro-moment of human cognition and perception.",
    relatedConcepts: ["srishti", "sthiti", "samhara", "tirodhana", "anugraha"]
  },
  {
    id: "srishti",
    sanskrit: "सृष्टि",
    iast: "sṛṣṭi",
    english: "Creation / Emission",
    category: "Cosmology",
    definition: "The first of the five acts. The outpouring or manifesting of the universe outward from the fullness of consciousness. Microcosmically, it is the arising of a thought or perception.",
    significance: "Sṛṣṭi is never a creation out of 'nothing' or out of dead matter, but a projection of consciousness into external form.",
    relatedConcepts: ["pancakritya", "visarga", "abhasa"]
  },
  {
    id: "sthiti",
    sanskrit: "स्थिति",
    iast: "sthiti",
    english: "Maintenance / Persistence",
    category: "Cosmology",
    definition: "The second act. The stabilization and lingering of the created universe or object. Microcosmically, it is the fleeting moment a perception or thought is held in the mind.",
    significance: "Provides the illusion of continuity and stability in a universe that is actually constantly vibrating (Spanda) and flashing forth instantaneously.",
    relatedConcepts: ["pancakritya", "maya-tattva"]
  },
  {
    id: "samhara",
    sanskrit: "संहार",
    iast: "saṃhāra",
    english: "Dissolution / Withdrawal",
    category: "Cosmology",
    definition: "The third act. The reabsorption of the universe back into the undifferentiated source. Microcosmically, it is the fading away of a thought or object from the field of awareness.",
    significance: "In Trika, dissolution is not destruction, but a 'resting' or 'bringing back home' of manifested energies into the quietude of Śiva.",
    relatedConcepts: ["pancakritya", "bhairava", "akula"]
  },
  {
    id: "tirodhana",
    sanskrit: "तिरोधान",
    iast: "tirodhāna",
    english: "Concealment / Self-Veiling",
    category: "Cosmology",
    definition: "The fourth act. The sovereign, playful act of Śiva hiding His own infinite nature to assume the form of a limited, bound individual (Jīva/Paśu).",
    significance: "Explains the existence of ignorance (Ajñāna) and suffering not as an accident or flaw, but as a deliberate expression of divine free will (Svātantrya) to make the 'game' of life possible.",
    relatedConcepts: ["pancakritya", "ajnana", "mala", "maya-tattva"]
  },
  {
    id: "anugraha",
    sanskrit: "अनुग्रह",
    iast: "anugraha",
    english: "Grace / Self-Revelation",
    category: "Soteriology",
    definition: "The fifth act. The act of Śiva revealing His true, boundless nature to the limited individual, thereby destroying ignorance and granting liberation.",
    significance: "This is synonymous with Śaktipāta (Descent of Grace). It completes the cycle of the five acts, bringing the contracted soul back to its original universal status.",
    relatedConcepts: ["pancakritya", "saktipata", "diksa"]
  },

  // --- SUPREME IDENTITY & CONSCIOUSNESS ---
  {
    id: "aham",
    sanskrit: "अहम्",
    iast: "ahaṃ",
    english: "The Supreme 'I' / I-Consciousness",
    category: "Absolute Reality",
    definition: "The absolute, unbroken awareness of Self. Esoterically in Trika, 'A' represents the transcendent Śiva (Anuttara), 'Ha' represents the immanent energy (Śakti/Visarga), and 'M' (Bindu) represents their absolute, non-dual union.",
    significance: "True 'Ahaṃ' is not the limited ego (Ahaṃkāra), but the container of the entire universe. To rest in Ahaṃ is to experience 'I am everything'.",
    relatedConcepts: ["purnahamvimarsa", "anuttara", "visarga", "bindu"]
  },
  {
    id: "idam",
    sanskrit: "इदम्",
    iast: "idaṃ",
    english: "The 'This' / Objectivity",
    category: "Epistemology",
    definition: "The objective universe; anything that is perceived as external to the observer. In the descent of manifestation, 'Ahaṃ' (I) projects 'Idaṃ' (This).",
    significance: "Ignorance is experiencing 'Idaṃ' as separate from 'Ahaṃ'. Realization is reabsorbing 'Idaṃ' back into 'Ahaṃ', recognizing the object as one's own consciousness.",
    relatedConcepts: ["aham", "prameya", "maya-tattva"]
  },
  {
    id: "purnahamvimarsa",
    sanskrit: "पूर्णाहंविमर्श",
    iast: "pūrṇāhaṃvimarśa",
    english: "Perfect, Full I-Consciousness",
    category: "Absolute Reality",
    definition: "The supreme state of reflective awareness where consciousness knows itself as absolutely full and complete, lacking nothing, containing all 'This' (Idaṃ) within its 'I' (Ahaṃ).",
    significance: "This is the ultimate goal of the Trika system. It contrasts with the void of Buddhism or the static Brahman of Advaita, as it is dynamic, self-aware, and brimming with the universe.",
    relatedConcepts: ["aham", "vimarsa", "camatkara"]
  },
  {
    id: "yamala",
    sanskrit: "यामल",
    iast: "yāmala",
    english: "The Divine Couple / The Twin Unity",
    category: "Absolute Reality",
    definition: "The state of intimate, indivisible, and blissful union of opposites—most notably Śiva (Prakāśa) and Śakti (Vimarśa).",
    significance: "Central to Kaula and Trika ritual/theology. Reality is neither purely singular nor dual, but a 'Yāmala'—a dynamic polarity operating as a single, ecstatic whole.",
    relatedConcepts: ["samarasya", "kula", "siva", "sakti"]
  },
  {
    id: "samarasya",
    sanskrit: "सामरस्य",
    iast: "sāmarasya",
    english: "Equal Flavor / Perfect Equilibrium",
    category: "Aesthetics & Experience",
    definition: "The state of harmonious blending and fusion where dualities (subject/object, internal/external, Siva/Sakti) dissolve into a single, unified experience of bliss.",
    significance: "Like salt dissolving in water, the distinct identities merge, resulting in a single 'taste' (Rasa) of pure absolute consciousness.",
    relatedConcepts: ["yamala", "rasa", "camatkara"]
  },

  // --- EPISTEMOLOGY, REASONING & REVELATION ---
  {
    id: "pratyabhijna",
    sanskrit: "प्रत्यभिज्ञा",
    iast: "pratyabhijñā",
    english: "Recognition",
    category: "Soteriology",
    definition: "The direct realization of what was already there but forgotten. Realizing 'I am that Supreme Śiva' not by attaining a new state, but by recognizing one's true identity.",
    significance: "The philosophical foundation built by Utpaladeva (which Abhinavagupta comments upon extensively). It asserts that you are already Śiva; you just require the 'recognition' to remove the veil of forgetting.",
    relatedConcepts: ["ajnana", "paurusa-ajnana", "sattarka"]
  },
  {
    id: "sattarka",
    sanskrit: "सत्तर्क",
    iast: "sattarka",
    english: "Pure Reasoning / Luminous Logic",
    category: "Epistemology",
    definition: "A highly refined, intuitive logic grounded in scriptural revelation (Āgama) and the Guru's grace, used to destroy intellectual ignorance (Bauddha-ajñāna).",
    significance: "Abhinavagupta argues in Vol 1 that blind faith is insufficient. One must use Sattarka to actively deconstruct false beliefs (Vikalpas) until the mind reaches absolute clarity (Śuddha-vidyā).",
    relatedConcepts: ["bauddha-ajnana", "vikalpa", "saktopaya"]
  },
  {
    id: "agama",
    sanskrit: "आगम",
    iast: "āgama",
    english: "Revelation / Scripture / Tradition",
    category: "Epistemology",
    definition: "The continuous, unbroken stream of divine knowledge descending from Śiva. It refers both to the physical texts (Tantras) and the inner voice of intuitive truth (Pratibhā).",
    significance: "In Ahnika 1, Āgama is described as the foundational valid means of knowledge (Pramāṇa) that gives rise to Pure Reasoning (Sattarka), paving the way to liberation.",
    relatedConcepts: ["sattarka", "vimarsa", "para-vac"]
  },

  // --- THE AGENTS OF SAṂSĀRA ---
  {
    id: "pasu",
    sanskrit: "पशु",
    iast: "paśu",
    english: "The Bound Soul / The Animal",
    category: "Epistemology",
    definition: "The limited, contracted individual who is bound by the three Malas (impurities) and ignorant of their true nature as Śiva.",
    significance: "Paśu translates to a tethered animal. The Paśu views the world dualistically and is driven by karma and external desires.",
    relatedConcepts: ["pati", "mala", "pasa", "jiva"]
  },
  {
    id: "pati",
    sanskrit: "पति",
    iast: "pati",
    english: "The Lord / The Master",
    category: "Absolute Reality",
    definition: "The supreme consciousness (Śiva) functioning as the liberated, autonomous master of the universe and of the tethered souls (Paśu).",
    significance: "Liberation (Mokṣa) in Trika is the transition from the state of Paśu (the bound beast) to the state of Pati (the sovereign Lord).",
    relatedConcepts: ["pasu", "pasa", "svatantrya"]
  },
  {
    id: "pasa",
    sanskrit: "पाश",
    iast: "pāśa",
    english: "The Bond / The Tether",
    category: "Epistemology",
    definition: "The fetters that bind the soul (Paśu), fundamentally composed of the three Malas (Āṇava, Māyīya, and Kārma) and the Kañcukas (cloaks of limitation).",
    significance: "These bonds are not physical chains, but conceptual and energetic contractions born of Śiva's own power of self-concealment (Tirodhāna).",
    relatedConcepts: ["pasu", "mala", "kancuka"]
  },
  {
    id: "krama",
    sanskrit: "क्रम",
    iast: "krama",
    english: "Succession / Sequence",
    category: "Cosmology",
    definition: "The sequential, step-by-step unfolding of time, space, and events. It is the fundamental characteristic of the realm of Māyā and bounded reality.",
    significance: "Limited minds process reality in Krama (past, present, future). Yoga involves moving from Krama (sequence) back to the timeless center.",
    relatedConcepts: ["akrama", "maya-tattva", "kancuka"]
  },
  {
    id: "akrama",
    sanskrit: "अक्रम",
    iast: "akrama",
    english: "Simultaneity / Non-sequential",
    category: "Absolute Reality",
    definition: "The timeless, eternal 'Now' of absolute consciousness. The state where all sequences, past, present, and future, exist simultaneously as a single, undivided whole.",
    significance: "Śiva creates the universe Akrama (all at once, instantaneously), while it appears to the limited individual in Krama (sequentially over time). Reaching Akrama is synonymous with Unmanā (the trans-mental state).",
    relatedConcepts: ["krama", "sphurana", "unmana"]
  },

// --- THE TRIAD (TRIKA) & MANIFESTATION ---
  {
    id: "trika",
    sanskrit: "त्रिक",
    iast: "trika",
    english: "The Triad / The Threefold Reality",
    category: "Absolute Reality",
    definition: "The overarching philosophy of Abhinavagupta's tradition, which views all of reality through interconnected triads. The most fundamental triads are: Śiva (God), Śakti (Energy), and Nara (Man/Bound Soul); and Parā (Supreme), Parāparā (Intermediate), and Aparā (Immanent).",
    significance: "Trika philosophy does not reject the lower/immanent realities, but sees them as essential components of the whole. Liberation is harmonizing and recognizing the unity within the triad.",
    relatedConcepts: ["siva", "sakti", "nara", "para", "parapara", "apara"]
  },
  {
    id: "para",
    sanskrit: "परा",
    iast: "parā",
    english: "The Supreme / The Transcendent Goddess",
    category: "Absolute Reality",
    definition: "The highest, non-dual level of reality and manifestation. In this state, there is only pure, undifferentiated consciousness where subject and object are perfectly one.",
    significance: "Parā is the ultimate destination and source. In the context of language (Parā-vāc), it is the silent, pure throb of awareness.",
    relatedConcepts: ["trika", "parapara", "para-vac"]
  },
  {
    id: "parapara",
    sanskrit: "परापरा",
    iast: "parāparā",
    english: "The Supreme-cum-Non-Supreme / Unity in Diversity",
    category: "Epistemology",
    definition: "The intermediate level of reality. Here, diversity and difference exist, but they are perceived as completely unified with the observer. It is the experience of 'I am all this.'",
    significance: "This is the domain of pure knowledge (Śuddhavidyā) and the subtle bridging state between absolute oneness and complete fragmentation.",
    relatedConcepts: ["trika", "para", "apara", "bhedabheda"]
  },
  {
    id: "apara",
    sanskrit: "अपरा",
    iast: "aparā",
    english: "The Non-Supreme / The Immanent Goddess",
    category: "Cosmology",
    definition: "The lowest, most externalized level of reality. It is the realm of complete duality, limitation, sequence (krama), and separation between subject and object.",
    significance: "While seemingly bound, Aparā is still an expression of the Divine. The Tantrāloka teaches that one can achieve liberation by tracking Aparā back through Parāparā to Parā.",
    relatedConcepts: ["trika", "nara", "krama"]
  },
  {
    id: "nara",
    sanskrit: "नर",
    iast: "nara",
    english: "The Bound Individual / The Objective Universe",
    category: "Cosmology",
    definition: "The third element of the primary Trika triad (Śiva, Śakti, Nara). It represents the fragmented, contracted human being and the seemingly inert material world.",
    significance: "Nara is not ultimately separate from Śiva. Through the descent of grace (Śaktipāta) and the path of yoga, Nara expands into Śakti, and ultimately realizes their identity as Śiva.",
    relatedConcepts: ["trika", "pasu", "apara"]
  },

  // --- COSMIC PHASES (EXPANSION & CONTRACTION) ---
  {
    id: "unmesa",
    sanskrit: "उन्मेष",
    iast: "unmeṣa",
    english: "Opening of the Eyes / Expansion",
    category: "Cosmology",
    definition: "The outward unfolding or expansion of the universe. It is metaphorically described as the Supreme Lord 'opening His eyes'. Microcosmically, it is the arising of an external perception or thought.",
    significance: "When Śiva opens His eyes (Unmeṣa), the universe appears, but His own absolute, undivided nature is playfully concealed. In yoga, finding the brief gap (Unmeṣa) between thoughts reveals the underlying consciousness.",
    relatedConcepts: ["nimesa", "srishti", "spanda"]
  },
  {
    id: "nimesa",
    sanskrit: "निमेष",
    iast: "nimeṣa",
    english: "Closing of the Eyes / Contraction",
    category: "Cosmology",
    definition: "The inward withdrawal or dissolution of the universe. Metaphorically, when the Lord 'closes His eyes', the external world vanishes into pure, resting consciousness.",
    significance: "Unmeṣa and Nimeṣa occur continuously and simultaneously. By understanding this pulse, the yogi realizes that both creation and dissolution are merely the playful blinking of divine awareness.",
    relatedConcepts: ["unmesa", "samhara", "spanda"]
  },

  // --- IMMERSION, MUDRA & LIBERATION ---
  {
    id: "samavesa",
    sanskrit: "समावेश",
    iast: "samāveśa",
    english: "Immersion / Penetration into the Divine",
    category: "Soteriology",
    definition: "The profound yogic state of being entirely swallowed up by or completely merged into universal consciousness. It is the absolute penetration of the limited self by the Supreme Self.",
    significance: "Samāveśa is the energetic and experiential hallmark of liberation in Trika. It is not merely an intellectual understanding, but a total, consuming immersion of one's being.",
    relatedConcepts: ["vyutthana", "moksha", "camatkara"]
  },
  {
    id: "vyutthana",
    sanskrit: "व्युत्थान",
    iast: "vyutthāna",
    english: "Emergence / The Waking State",
    category: "Soteriology",
    definition: "The state of coming out of deep meditation or samādhi and returning to ordinary, dualistic waking consciousness and worldly activity.",
    significance: "A central challenge in yoga is maintaining the realization gained during Samāveśa when one returns to Vyutthāna. The ultimate goal is to fuse the two states so that everyday life remains illuminated.",
    relatedConcepts: ["samavesa", "krama-mudra"]
  },
  {
    id: "krama-mudra",
    sanskrit: "क्रममुद्रा",
    iast: "krama-mudrā",
    english: "The Sequence Seal / Alternating Absorption",
    category: "Soteriology",
    definition: "A highly advanced yogic practice where the practitioner rapidly oscillates between inner absorption (Samāveśa) and outer worldly perception (Vyutthāna), back and forth in sequence.",
    significance: "This rapid alternation eventually breaks down the boundary between inner and outer. They merge, resulting in a permanent state where the outer world is experienced with the same bliss as the inner void.",
    relatedConcepts: ["samavesa", "vyutthana", "bhairava-mudra"]
  },
  {
    id: "bhairava-mudra",
    sanskrit: "भैरवमुद्रा",
    iast: "भैरवमुद्रा",
    english: "The Seal of Bhairava",
    category: "Aesthetics & Experience",
    definition: "A supreme physical and mental posture where the eyes are open and gazing outward at the world, but the inner awareness is completely withdrawn and resting in absolute void/consciousness.",
    significance: "It symbolizes the pinnacle of non-dual realization: one does not need to close their eyes or run to a cave to find Śiva. The external world is faced head-on, but perceived entirely as the self.",
    relatedConcepts: ["samavesa", "krama-mudra", "bhairava"]
  },
  {
    id: "moksha",
    sanskrit: "मोक्ष",
    iast: "mokṣa",
    english: "Liberation",
    category: "Soteriology",
    definition: "In Trika, Mokṣa is explicitly defined as the removal of ignorance (Ajñāna) and the direct recognition of one's inherent, already-existing nature as Śiva.",
    significance: "Abhinavagupta famously declares in Ahnika 1 that Mokṣa is not a physical place one travels to after death, nor is it a new state to be acquired. It is simply the dropping of the knot of ignorance.",
    relatedConcepts: ["ajnana", "pratyabhijna", "jivanmukti"]
  },
  {
    id: "jivanmukti",
    sanskrit: "जीवन्मुक्ति",
    iast: "jīvanmukti",
    english: "Liberation while Living",
    category: "Soteriology",
    definition: "The state of achieving total liberation (Mokṣa) while still inhabiting a physical body.",
    significance: "Because the physical body (Kula/Aparā) is recognized as a manifestation of Śiva, one does not need to die to be free. The Jīvanmukta lives in the world, performing actions, but remains totally untethered by karma.",
    relatedConcepts: ["moksha", "samavesa", "pati"]
  },
  {
    id: "pratibha",
    sanskrit: "प्रतिभा",
    iast: "pratibhā",
    english: "Intuitive Insight / The Inner Guru",
    category: "Epistemology",
    definition: "The spontaneous, luminous flash of innate intuitive wisdom. It is the self-revealing power of consciousness that operates independent of logical deduction or sensory input.",
    significance: "Pratibhā is the inner voice of Śiva. When a practitioner's mind is purified, Pratibhā guides them directly to liberation, acting as an internal Guru.",
    relatedConcepts: ["agama", "sattarka", "sphurana"]
  },
  {
    id: "purnata",
    sanskrit: "पूर्णता",
    iast: "pūrṇatā",
    english: "Absolute Fullness / Completeness",
    category: "Absolute Reality",
    definition: "The state of absolute wholeness where consciousness contains all time, space, and objectivity within itself, lacking nothing.",
    significance: "Trika philosophy contrasts sharply with paths seeking 'emptiness' (śūnyatā). The ultimate reality is not a void, but Pūrṇatā—a dynamic, overflowing fullness of infinite potential.",
    relatedConcepts: ["purnahamvimarsa", "anuttara", "camatkara"]
  },
  {
    id: "caitanya",
    sanskrit: "चैतन्य",
    iast: "caitanya",
    english: "Dynamic Consciousness / Supreme Awareness",
    category: "Absolute Reality",
    definition: "The absolute, free, and self-aware consciousness that is the essence of the Self (Ātman). As stated in the first Śiva Sūtra: 'Caitanyam ātmā'.",
    significance: "It combines both Prakāśa (Light) and Vimarśa (Awareness). Caitanya is not just knowing something; it is the absolute freedom and power to act and manifest.",
    relatedConcepts: ["prakasa", "vimarsa", "svatantrya"]
  },

// --- EXPANSION, CONTRACTION & CONTEMPLATION ---
  {
    id: "samkoca",
    sanskrit: "संकोच",
    iast: "saṃkoca",
    english: "Contraction / Limitation",
    category: "Cosmology",
    definition: "The self-imposed contraction of universal consciousness into a localized, limited point. It is the energetic mechanism behind the creation of the finite individual (jīva).",
    significance: "Saṃkoca is not viewed as a flaw or an evil accident, but as a brilliant display of Śiva's absolute freedom (Svātantrya) to hide Himself within Himself.",
    relatedConcepts: ["vikasa", "maya-tattva", "mala", "tirodhana"]
  },
  {
    id: "vikasa",
    sanskrit: "विकास",
    iast: "vikāsa",
    english: "Expansion / Unfolding",
    category: "Soteriology",
    definition: "The outward expansion or blossoming of consciousness. In yoga, it refers to the breaking of limited boundaries (saṃkoca) and the return to infinite, universal awareness.",
    significance: "Spiritual practice in Trika is often framed as the transition from Saṃkoca to Vikāsa. Experiencing intense emotions or aesthetic wonder (camatkāra) can trigger sudden Vikāsa.",
    relatedConcepts: ["samkoca", "spanda", "camatkara", "samavesa"]
  },
  {
    id: "bhavana",
    sanskrit: "भावना",
    iast: "bhāvanā",
    english: "Creative Contemplation / Meditative Assimilation",
    category: "Soteriology",
    definition: "An intense, active form of imaginative contemplation where the practitioner repeatedly impresses a non-dual truth (like 'I am Śiva') onto their consciousness until it becomes their living reality.",
    significance: "Bhāvanā is heavily utilized in the Śāktopāya (Means of Knowledge). It transforms dry intellectual understanding into direct, vibrant experiential realization.",
    relatedConcepts: ["saktopaya", "vikalpa", "sattarka"]
  },

  // --- THE WHEEL OF ENERGIES (THE SENSES) ---
  {
    id: "rasmi",
    sanskrit: "रश्मि",
    iast: "raśmi",
    english: "Rays of Consciousness",
    category: "Epistemology",
    definition: "The radiant extensions of the central fire of consciousness. Usually refers to the sensory and cognitive powers (seeing, hearing, thinking) that shoot out from the subject to illuminate objects.",
    significance: "Abhinavagupta teaches that one should not suppress the senses, but recognize them as divine rays (Raśmi) of Bhairava, tasting the world on His behalf.",
    relatedConcepts: ["prakasa", "khecari", "caitanya"]
  },
  {
    id: "khecari",
    sanskrit: "खेचरी",
    iast: "khecarī",
    english: "Roamers in the Void (Awareness)",
    category: "Epistemology",
    definition: "The highest class of Śiva's energies. 'Kha' means the void or sky of pure consciousness, and 'carī' means to move. These are the powers of pure, formless subjective awareness.",
    significance: "For the ignorant, the Khecarī energies bind them to the illusion of emptiness; for the awakened, they bestow the supreme realization of the absolute void.",
    relatedConcepts: ["gocari", "dikcari", "bhucari", "rasmi"]
  },
  {
    id: "gocari",
    sanskrit: "गोचरी",
    iast: "gocarī",
    english: "Roamers in the Sphere of the Mind",
    category: "Epistemology",
    definition: "The energies operating within the subtle inner organ (antaḥkaraṇa): the intellect, ego, and mind. They move in the realm of thoughts, decisions, and identity.",
    significance: "They form the bridge between pure awareness (Khecarī) and external perception. They can either construct dualistic illusions (vikalpa) or intuitive clarity (pratibhā).",
    relatedConcepts: ["khecari", "dikcari"]
  },
  {
    id: "dikcari",
    sanskrit: "दिक्चरी",
    iast: "dikcarī",
    english: "Roamers in Space (The Outer Senses)",
    category: "Epistemology",
    definition: "The energies operating as the external sense organs (sight, sound, touch, taste, smell) that perceive objects in directional space (Dik).",
    significance: "Instead of being traps, the Dikcarī goddesses are seen in Trika as gatherers of bliss, feeding the aesthetic rapture of the world back to the central Subject.",
    relatedConcepts: ["gocari", "bhucari"]
  },
  {
    id: "bhucari",
    sanskrit: "भूचरी",
    iast: "bhūcarī",
    english: "Roamers on the Earth (Physical Objects)",
    category: "Epistemology",
    definition: "The energies that constitute the external, physical objects themselves. In Trika, matter is not dead; it is highly condensed consciousness (Śakti) in physical form.",
    significance: "Completes the non-dual circuit: the Subject (Khecarī), the Mind (Gocarī), the Senses (Dikcarī), and the Object (Bhūcarī) are all one continuous manifestation of the same Divine Mother.",
    relatedConcepts: ["dikcari", "idam", "prameya"]
  },

  // --- LEVELS OF DIVINE GRACE (ŚAKTIPĀTA) ---
  {
    id: "tivra-saktipata",
    sanskrit: "तीव्र शक्तिपात",
    iast: "tīvra-śaktipāta",
    english: "Intense / Supreme Grace",
    category: "Soteriology",
    definition: "The highest, most overwhelming descent of divine grace. It instantaneously shatters all ignorance and grants immediate liberation without the need for incremental practice.",
    significance: "A recipient of Tīvra-śaktipāta qualifies directly for Anupāya (the Methodless Method). They require no initiation, as Śiva Himself has directly initiated them from within.",
    relatedConcepts: ["saktipata", "anupaya", "moksha"]
  },
  {
    id: "madhya-saktipata",
    sanskrit: "मध्य शक्तिपात",
    iast: "madhya-śaktipāta",
    english: "Medium / Intermediate Grace",
    category: "Soteriology",
    definition: "A moderate descent of grace that sparks a profound desire for liberation and philosophical truth, but requires the individual to seek a Guru and engage in intellectual or meditational effort.",
    significance: "Recipients of this level generally align with Śāmbhavopāya or Śāktopāya. They possess intuitive wisdom but still need to actively dissolve lingering dualistic conditioning (vikalpas).",
    relatedConcepts: ["saktipata", "sambhavopaya", "saktopaya", "guru"]
  },
  {
    id: "manda-saktipata",
    sanskrit: "मन्द शक्तिपात",
    iast: "manda-śaktipāta",
    english: "Mild / Slow Grace",
    category: "Soteriology",
    definition: "A gentle descent of grace that awakens a basic spiritual interest, but the aspirant is still heavily bound by worldly desires, societal rules, and an inability to grasp non-dual truth directly.",
    significance: "Such aspirants are qualified for Āṇavopāya (the Means of Action). They require structured rituals, physical yoga, mantras, and strict adherence to external discipline to slowly purify their minds.",
    relatedConcepts: ["saktipata", "anavopaya", "diksa"]
  },

  // --- PATHS, PROCEDURES, AND TRUE KNOWLEDGE ---
  {
    id: "adhikarin",
    sanskrit: "अधिकारिन्",
    iast: "adhikārin",
    english: "The Qualified Aspirant",
    category: "Soteriology",
    definition: "An individual who possesses the necessary readiness, spiritual hunger, and descent of grace (Śaktipāta) to undertake the study and practice of the Tantrāloka.",
    significance: "Abhinavagupta stresses that qualification is not based on caste, gender, or social status, but entirely on the intensity of one's devotion (Bhakti) and the level of grace received.",
    relatedConcepts: ["saktipata", "diksa"]
  },
  {
    id: "tantraprakriya",
    sanskrit: "तन्त्रप्रक्रिया",
    iast: "tantraprakriyā",
    english: "The Tantric System / Procedure",
    category: "Ritual & Mantra",
    definition: "The structured, orthodox Shaiva system of dualistic or semi-dualistic rituals, initiations, and yogas, primarily rooted in the Siddhānta and Bhairava Āgamas.",
    significance: "Abhinavagupta synthesizes this with the Kaula system. Tantraprakriyā provides the massive structural and ritual framework that he fills with non-dual Kaula realization.",
    relatedConcepts: ["kulaprakriya", "agama", "kula"]
  },
  {
    id: "kulaprakriya",
    sanskrit: "कुलप्रक्रिया",
    iast: "kulaprakriyā",
    english: "The Kaula System / Procedure",
    category: "Ritual & Mantra",
    definition: "The highly esoteric, transgressive, and fiercely non-dual system of the Kaula lineages. It emphasizes direct realization through the body, intense energies, and unconventional practices.",
    significance: "The Tantrāloka is fundamentally a work that elevates Kulaprakriyā as the ultimate essence, infusing its radical non-duality into the more structured Tantraprakriyā.",
    relatedConcepts: ["tantraprakriya", "kaula", "yamala"]
  },
  {
    id: "krida",
    sanskrit: "क्रीडा",
    iast: "krīḍā",
    english: "Divine Play / Sport (Also Līlā)",
    category: "Cosmology",
    definition: "The concept that the manifestation, maintenance, and dissolution of the universe is a spontaneous, joyous, and effortless 'game' played by the Absolute.",
    significance: "It removes the burden of existential purpose. Śiva does not create out of lack, karma, or necessity, but purely out of the overflowing bliss (Ānanda) of playful self-expression.",
    relatedConcepts: ["svatantrya", "ananda", "camatkara"]
  },
  {
    id: "vyapti",
    sanskrit: "व्याप्ति",
    iast: "vyāpti",
    english: "Pervasion / Omnipresence",
    category: "Absolute Reality",
    definition: "The state of being infused throughout all things. In yoga, it is the realization that one's own consciousness pervades every object and atom of the universe.",
    significance: "To realize Vyāpti is to dissolve the boundary between the inner self and the outer world, directly experiencing the truth that 'I am all this' (Ahaṃ eva idaṃ sarvam).",
    relatedConcepts: ["purnata", "samavesa", "aham"]
  },
  {
    id: "jnana",
    sanskrit: "ज्ञान",
    iast: "jñāna",
    english: "True Knowledge / Direct Realization",
    category: "Epistemology",
    definition: "Not mere intellectual information, but the living, experiential recognition (Pratyabhijñā) of one's absolute identity with Śiva.",
    significance: "Because Abhinavagupta defines bondage strictly as Ignorance (Ajñāna), Jñāna is the sole, absolute requirement for Mokṣa (Liberation). Action (Karma) cannot remove ignorance; only light can remove darkness.",
    relatedConcepts: ["ajnana", "pratyabhijna", "moksha", "prakasa"]
  },

// --- ANUPĀYA: THE PATHLESS PATH ---
  {
    id: "anupaya",
    sanskrit: "अनुपाय",
    iast: "anupāya",
    english: "The Pathless Path / The Null Means",
    category: "Soteriology",
    definition: "The highest 'method' of realization in Trika, which is actually the total absence of any method. It is the spontaneous, unmediated recognition of the Absolute (Anuttara) without relying on rituals, meditation, or cognitive efforts.",
    significance: "It forms the core subject of Chapter 2. Abhinavagupta argues that the ultimate reality cannot be 'produced' or 'reached' by any means, because it is already the ever-present, self-luminous ground of all existence. Any 'means' implies a distance that does not exist.",
    relatedConcepts: ["upaya-upeya-bhava", "sakrjjnana", "tivrativra-saktipata"]
  },
  {
    id: "tivrativra-saktipata",
    sanskrit: "तीव्रतीव्र शक्तिपात",
    iast: "tīvratīvra śaktipāta",
    english: "Supremely Intense Descent of Grace",
    category: "Soteriology",
    definition: "The highest, most absolute level of divine grace (Śaktipāta). It is so powerful that it instantly burns away all limitations, ignorance, and karma upon mere contact, requiring no subsequent effort from the recipient.",
    significance: "This specific intensity of grace is the sole 'cause' or prerequisite for a disciple to enter Anupāya. It results in immediate, spontaneous liberation (Jīvanmukti) without the need for any progressive spiritual practice or initiation.",
    relatedConcepts: ["anupaya", "saktipata", "jivanmukti-anupaya"]
  },
  {
    id: "svatah-siddha",
    sanskrit: "स्वतःसिद्ध",
    iast: "svataḥ-siddha",
    english: "Self-Established / Self-Evident",
    category: "Absolute Reality",
    definition: "The nature of supreme consciousness as being intrinsically proven, existing, and shining by its own light. It does not need external proof, logical deduction, or a 'cause' to be known.",
    significance: "Because Śiva (Consciousness) is svataḥ-siddha, it cannot be revealed by any external means (upāya). Abhinavagupta points out that means are only useful for illuminating things that are insentient or hidden in darkness, not the very Light that illuminates the darkness.",
    relatedConcepts: ["prakasa", "anupaya", "bhava-svabhava"]
  },
  {
    id: "upaya-upeya-bhava",
    sanskrit: "उपाय-उपेय भाव",
    iast: "upāya-upeya bhāva",
    english: "The Duality of Means and Goal",
    category: "Epistemology",
    definition: "The conceptual, dualistic division between a 'method' or practice (upāya) used to achieve something, and the 'goal' (upeya) that is to be achieved.",
    significance: "In Chapter 2, Abhinavagupta fiercely deconstructs this duality. In the absolute state, the means and the goal are identical. Consciousness cannot be the goal of a means because it is the very fabric that makes the operation of any means possible.",
    relatedConcepts: ["anupaya", "pratipadya-pratipadaka"]
  },
  {
    id: "sakrjjnana",
    sanskrit: "सकृज्ज्ञान",
    iast: "sakṛjjñāna",
    english: "Once-and-for-all Realization / Instantaneous Knowledge",
    category: "Epistemology",
    definition: "A sudden, complete, and unalterable flash of spiritual recognition that requires no subsequent reinforcement, meditation, or repetition to maintain.",
    significance: "This contrasts sharply with paths requiring continuous practice. In Anupāya, once the truth of one's identity with Śiva is realized, it is permanently established. Just as one does not need to repeatedly remind oneself that a pot is a pot once seen, the Self requires no repeated realization.",
    relatedConcepts: ["anupaya", "abhyasa", "pratyabhijna"]
  },
  {
    id: "abhyasa",
    sanskrit: "अभ्यास",
    iast: "abhyāsa",
    english: "Repeated Practice / Spiritual Effort",
    category: "Soteriology",
    definition: "The continuous, repetitive application of a method (like meditation, mantra recitation, or yogic breathing) to achieve a spiritual goal.",
    significance: "In the strict context of Anupāya (Chapter 2), Abhyāsa is considered redundant and even a product of ignorance. Since the Self is ever-present and self-luminous, trying to 'practice' to attain it implies it is absent, which reinforces ignorance.",
    relatedConcepts: ["anupaya", "sakrjjnana", "upaya-upeya-bhava"]
  },
  {
    id: "pratipadya-pratipadaka",
    sanskrit: "प्रतिपाद्य-प्रतिपादक भाव",
    iast: "prātipādya-pratipādaka bhāva",
    english: "The Duality of the Explained and the Explainer",
    category: "Philosophy of Language",
    definition: "The distinction between the ultimate truth that is being taught or explained (prātipādya) and the text, words, or teacher doing the teaching (pratipādaka).",
    significance: "Similar to means/goal duality, Abhinavagupta deconstructs this in Anupāya. The ultimate reality (Anuttara) cannot be truly 'taught' by texts or words, because language is a limited construct that arises *from* the very consciousness it attempts to describe.",
    relatedConcepts: ["upaya-upeya-bhava", "anuttara"]
  },
  {
    id: "jivanmukti-anupaya",
    sanskrit: "जीवन्मुक्ति",
    iast: "jīvanmukti",
    english: "Spontaneous Liberation in Life",
    category: "Soteriology",
    definition: "The state of being completely, irrevocably liberated from all bondage while still residing in the physical body, achieved instantaneously through Anupāya.",
    significance: "For the Anupāya adept, liberation is not a post-mortem state. Because they realize that bondage was an illusion to begin with, they live entirely spontaneously. Their continued existence is pure play (līlā), driven only by compassion, not karma.",
    relatedConcepts: ["tivrativra-saktipata", "vidhi-nisedha"]
  },
  {
    id: "vidhi-nisedha",
    sanskrit: "विधि-निषेध",
    iast: "vidhi-niṣedha",
    english: "Injunctions and Prohibitions",
    category: "Ritual & Mantra",
    definition: "The religious, moral, and ritualistic rules dictating what a practitioner must do (vidhi) and what they must avoid (niṣedha) to achieve spiritual merit or avoid impurity.",
    significance: "In Chapter 2, Abhinavagupta asserts that the realized being in Anupāya is entirely free from all vidhi and niṣedha. Such dualistic rules apply only in the realm of limited means (māyā), not in the absolute freedom and purity of supreme consciousness.",
    relatedConcepts: ["jivanmukti-anupaya", "anupaya"]
  },
  {
    id: "bhava-svabhava",
    sanskrit: "भाव / स्वभाव",
    iast: "bhāva / svabhāva",
    english: "Existence / Innate Nature",
    category: "Absolute Reality",
    definition: "The true, intrinsic, and unalterable nature of reality, which is pure, vibrant consciousness, as opposed to the temporary states, objects, or mental constructs that arise within it.",
    significance: "Anupāya emphasizes effortlessly resting in one's Svabhāva. Because this nature is innate, it cannot be acquired, generated, or destroyed—it can only be recognized. Any striving to 'attain' it implies it is alien, thus destroying the realization.",
    relatedConcepts: ["svatah-siddha", "anupaya", "sakrjjnana"]
  },

// --- ŚĀMBHAVOPĀYA: THE MEANS OF ŚIVA ---
  {
    id: "sambhavopaya",
    sanskrit: "शाम्भवोपाय",
    iast: "śāmbhavopāya",
    english: "The Means of Śiva / The Divine Method",
    category: "Soteriology",
    definition: "The highest active method (upāya) in Trika, functioning strictly at the level of Will (Icchā). It involves the sudden, thought-free realization of the Self through a sheer flash of intuition, without relying on mantras, meditation on objects, or intellectual reasoning.",
    significance: "Detailed in Chapter 3 of the Tantrāloka. It is for highly advanced practitioners who, upon simply hearing the truth from a Guru, can instantaneously absorb their mind into pure consciousness by dissolving all dualistic thoughts (vikalpa-kṣaya).",
    relatedConcepts: ["icchashakti", "vikalpa-kshaya", "saktopaya", "pratibimba"]
  },
  {
    id: "icchashakti",
    sanskrit: "इच्छाशक्ति",
    iast: "icchā-śakti",
    english: "The Power of Will",
    category: "Absolute Reality",
    definition: "The supreme, unimpeded drive of Śiva to manifest, maintain, and dissolve. In the practitioner, it is the pure, unconditioned spiritual urge towards liberation that precedes thought or action.",
    significance: "Śāmbhavopāya operates entirely within the domain of Icchā-śakti. Realization here occurs not by 'doing' anything or 'thinking' anything, but by resting in the sheer, vibrating Will of the Divine before it fractures into specific desires.",
    relatedConcepts: ["jnanashakti", "kriyashakti", "sambhavopaya"]
  },
  {
    id: "vikalpa-kshaya",
    sanskrit: "विकल्पक्षय",
    iast: "vikalpa-kṣaya",
    english: "The Dissolution of Dualistic Thought",
    category: "Soteriology",
    definition: "The sudden cessation or silencing of all discursive, dualistic mental constructs (vikalpas), leaving the mind in a state of naked, vibrant awareness.",
    significance: "This is the primary technique of Śāmbhavopāya. Instead of replacing bad thoughts with good thoughts (as in Śāktopāya), the practitioner abruptly stops the thought-generating process itself, revealing the underlying screen of pure consciousness.",
    relatedConcepts: ["sambhavopaya", "vikalpa", "unmana"]
  },
  {
    id: "pratibimba",
    sanskrit: "प्रतिबिम्ब",
    iast: "pratibimba",
    english: "Reflection / The Mirror Analogy",
    category: "Cosmology",
    definition: "The philosophical analogy that the entire universe is merely a reflection appearing within the mirror of supreme consciousness (Śiva).",
    significance: "Crucial to Chapter 3. Unlike a physical reflection which requires an external object and a physical mirror, Śiva's reflection is entirely autonomous (Svātantrya)—He is the mirror, the reflection, and the entity casting the reflection, all at once.",
    relatedConcepts: ["bimba", "prakasa", "abhasa"]
  },
  {
    id: "bimba",
    sanskrit: "बिम्ब",
    iast: "bimba",
    english: "The Original Object / The Source",
    category: "Absolute Reality",
    definition: "The original source that casts a reflection. In Trika's cosmology of reflection (Pratibimba-vāda), the Bimba is the supreme, unmanifest consciousness (Anuttara).",
    significance: "The universe (Pratibimba) is totally dependent on the Source (Bimba), but the Source remains completely unaffected and untainted by the reflection it manifests.",
    relatedConcepts: ["pratibimba", "anuttara"]
  },
  {
    id: "akincaccintaka",
    sanskrit: "अकिञ्चच्चिन्तक",
    iast: "akiñcaccintaka",
    english: "Thinking of Absolutely Nothing",
    category: "Soteriology",
    definition: "A specific meditative state in Śāmbhavopāya where the practitioner fiercely holds the mind in a state of complete conceptual void, refusing to entertain even a single thought.",
    significance: "By actively arresting the mind's tendency to grasp at objects, the practitioner forces consciousness to collapse back into its own self-luminous nature. This is a violent, sudden technique to achieve vikalpa-kṣaya.",
    relatedConcepts: ["vikalpa-kshaya", "bhairava-mudra"]
  },
  {
    id: "matrka-cakra",
    sanskrit: "मातृकाचक्र",
    iast: "mātṛkā-cakra",
    english: "The Wheel of Phonemic Energies",
    category: "Philosophy of Language",
    definition: "The complete circuit of the 50 phonemes of the Sanskrit alphabet, viewed not as dead letters, but as sentient, vibrating goddesses that construct all human perception and reality.",
    significance: "In the context of Śāmbhavopāya, recognizing the Mātṛkā-cakra means seeing that all words and thoughts are just manifestations of Śiva's energy. Realizing this prevents one from being bound by their own mental narratives.",
    relatedConcepts: ["matrika", "vikalpa"]
  },
  {
    id: "nirvikalpa",
    sanskrit: "निर्विकल्प",
    iast: "nirvikalpa",
    english: "Thought-Free / Non-discursive",
    category: "Epistemology",
    definition: "A state of direct, unmediated perception devoid of any linguistic or conceptual framing. It is raw, naked experience.",
    significance: "Śāmbhavopāya aims to stabilize the yogi in continuous Nirvikalpa awareness. Even while engaging with the world, the underlying consciousness remains undisturbed by the labeling and categorizing functions of the mind.",
    relatedConcepts: ["vikalpa", "vikalpa-kshaya", "pramana"]
  },
  {
    id: "jnana-shakti",
    sanskrit: "ज्ञानशक्ति",
    iast: "jñāna-śakti",
    english: "The Power of Knowledge",
    category: "Absolute Reality",
    definition: "The second of Śiva's three primary powers. It is the capacity of consciousness to know, perceive, and illuminate both itself and the manifested universe.",
    significance: "While Śāmbhavopāya aligns with Will (Icchā), the next lower means, Śāktopāya, aligns with Knowledge (Jñāna). Jñāna-śakti is what allows the dualistic universe to be recognized and understood.",
    relatedConcepts: ["icchashakti", "kriyashakti", "saktopaya"]
  },
  {
    id: "kriya-shakti",
    sanskrit: "क्रियाशक्ति",
    iast: "kriyā-śakti",
    english: "The Power of Action",
    category: "Absolute Reality",
    definition: "The third of Śiva's primary powers. It is the capacity to actually execute, construct, and physically manifest the universe in time and space.",
    significance: "Kriyā-śakti is the domain of Āṇavopāya (the lowest means). It represents the grossest level of manifestation, where physical rituals, breath control (prāṇāyāma), and bodily yogas are required to reverse the outward flow of energy.",
    relatedConcepts: ["icchashakti", "jnanashakti", "anavopaya"]
  },

// --- ŚĀKTOPĀYA: THE MEANS OF ENERGY / COGNITION ---
  {
    id: "saktopaya",
    sanskrit: "शाक्तोपाय",
    iast: "śāktopāya",
    english: "The Means of Śakti / The Cognitive Method",
    category: "Soteriology",
    definition: "The intermediate method of realization in Trika, operating at the level of Knowledge (Jñāna-śakti). It involves using purified, non-dual thought (vikalpa) to destroy binding, dualistic thoughts, eventually leading the mind to a thought-free state.",
    significance: "Detailed in Chapter 4. It is designed for practitioners who cannot instantly stop their thoughts (as in Śāmbhavopāya). Instead of violently suppressing the mind, the yogi uses the mind to repeatedly contemplate non-dual truths until the mind dissolves into that truth.",
    relatedConcepts: ["jnanashakti", "sattarka", "vikalpa-samskara", "sambhavopaya"]
  },
  {
    id: "vikalpa-samskara",
    sanskrit: "विकल्पसंस्कार",
    iast: "vikalpa-saṃskāra",
    english: "The Purification of Thought",
    category: "Soteriology",
    definition: "The deliberate process of replacing contracted, limiting beliefs (e.g., 'I am weak', 'I am the body') with expansive, non-dual convictions (e.g., 'I am Śiva', 'All this is my own play').",
    significance: "The core mechanism of Śāktopāya. A thorn is used to remove a thorn. A pure thought (Śuddha-vikalpa) is used to extract an impure thought (Aśuddha-vikalpa). Once the impurity is removed, the pure thought also drops away, leaving raw awareness.",
    relatedConcepts: ["saktopaya", "sattarka", "vikalpa"]
  },
  {
    id: "sattarka-saktopaya", // Specific contextualization of Sattarka for Saktopaya
    sanskrit: "सत्तर्क",
    iast: "sattarka",
    english: "Pure, Illuminating Logic",
    category: "Epistemology",
    definition: "In the context of Śāktopāya, Sattarka is not dry academic debate, but an intensely focused, scripture-guided stream of reasoning that cuts through illusions and firmly establishes non-dual awareness.",
    significance: "Abhinavagupta elevates Sattarka above all traditional yogic limbs (like breath control or posture). He asserts that without pure reasoning, mechanical yoga is useless; with pure reasoning, mechanical yoga is unnecessary.",
    relatedConcepts: ["saktopaya", "vikalpa-samskara", "agama"]
  },
  {
    id: "mantra-virya",
    sanskrit: "मन्त्रवीर्य",
    iast: "mantra-vīrya",
    english: "The Virility / Potency of Mantra",
    category: "Ritual & Mantra",
    definition: "The living, vibrating awareness (Vimarśa) of the practitioner that gives a mantra its power. Without it, a mantra is just dead, mechanical sound.",
    significance: "In Śāktopāya, mantra practice is entirely internal and cognitive. The repetition of the mantra is not for acquiring merit, but for repeatedly infusing the mind with the realization that the practitioner is identical to the deity of the mantra.",
    relatedConcepts: ["saktopaya", "vimarsa", "uccara"]
  },
  {
    id: "bhavana-saktopaya",
    sanskrit: "भावना",
    iast: "bhāvanā",
    english: "Creative Contemplation / Meditative Assimilation",
    category: "Soteriology",
    definition: "The active, intense, and imaginative dwelling upon a spiritual truth until it is no longer just an intellectual concept, but a direct, visceral experience.",
    significance: "Bhāvanā transforms the 'thought' of Śiva into the 'experience' of Śiva. It bridges the gap between the intellectual logic of Sattarka and the thought-free immersion of Śāmbhavopāya.",
    relatedConcepts: ["saktopaya", "vikalpa-samskara", "camatkara"]
  },
  {
    id: "suddha-vikalpa",
    sanskrit: "शुद्धविकल्प",
    iast: "śuddha-vikalpa",
    english: "Pure Thought / Non-dual Concept",
    category: "Epistemology",
    definition: "A concept or thought that, although inherently dualistic (because all language and thought is dualistic), points directly toward non-duality and expansiveness.",
    significance: "Examples include 'I am the universe' or 'Śiva alone exists.' These thoughts are the essential tools of Śāktopāya, cultivated through studying Āgamas and listening to the Guru.",
    relatedConcepts: ["asuddha-vikalpa", "vikalpa-samskara"]
  },
  {
    id: "asuddha-vikalpa",
    sanskrit: "अशुद्धविकल्प",
    iast: "aśuddha-vikalpa",
    english: "Impure Thought / Binding Concept",
    category: "Epistemology",
    definition: "Thoughts and beliefs rooted in limitation, lack, separation, and bodily identification. They are the actual 'bonds' (pāśa) that tie the soul to saṃsāra.",
    significance: "In Trika, bondage is purely cognitive. You are not bound by your past actions (karma) directly, but by the aśuddha-vikalpas (binding beliefs) that those actions have ingrained in your mind.",
    relatedConcepts: ["suddha-vikalpa", "pasa", "mala"]
  },
  {
    id: "jnana-diksha",
    sanskrit: "ज्ञानदीक्षा",
    iast: "jñāna-dīkṣā",
    english: "Initiation through Knowledge",
    category: "Soteriology",
    definition: "A subtle form of spiritual initiation where the Guru transmits the non-dual truth to the disciple not through physical rituals, but through profound philosophical instruction that triggers an inner awakening.",
    significance: "Aligned with Śāktopāya, this dīkṣā relies on the disciple's intellectual and intuitive readiness to grasp the absolute truth, destroying Bauddha-ajñāna (intellectual ignorance).",
    relatedConcepts: ["diksa", "sattarka", "bauddha-ajnana"]
  },
  {
    id: "bauddha-ajnana",
    sanskrit: "बौद्ध अज्ञान",
    iast: "bauddha-ajñāna",
    english: "Intellectual Ignorance",
    category: "Epistemology",
    definition: "Ignorance residing in the intellect (buddhi). It is the possession of false philosophical views, incorrect logic, and the belief that the body/mind is the Self.",
    significance: "According to Abhinavagupta, this must be destroyed first through Sattarka (pure logic). If intellectual ignorance remains, even profound spiritual experiences (which remove Pauruṣa-ajñāna) will be misinterpreted or lost when the yogi returns to waking consciousness.",
    relatedConcepts: ["paurusa-ajnana", "sattarka", "saktopaya"]
  },
  {
    id: "paurusa-ajnana",
    sanskrit: "पौरुष अज्ञान",
    iast: "pauruṣa-ajñāna",
    english: "Spiritual / Innate Ignorance",
    category: "Epistemology",
    definition: "The deep-seated, intuitive, non-verbal sense of limitation and separation that affects the very core of the soul (Puruṣa). It is the innate feeling of 'I am incomplete'.",
    significance: "This ignorance cannot be removed by reading books or studying logic. It is only removed through spiritual initiation (dīkṣā) and direct yogic immersion (Samāveśa). Complete liberation requires the removal of both Bauddha and Pauruṣa ignorance.",
    relatedConcepts: ["bauddha-ajnana", "samavesa", "diksa"]
  },

// --- THE EMANATION OF THE VOWELS (PURE ENERGIES) ---
  {
    id: "akara-anuttara",
    sanskrit: "अकार / अनुत्तर",
    iast: "akāra / anuttara",
    english: "The Phoneme 'A' / The Supreme Absolute",
    category: "Philosophy of Language",
    definition: "The first letter of the Sanskrit alphabet, representing pure, unconditioned, non-dual consciousness (Śiva). It is the source of all subsequent letters and energies.",
    significance: "In Chapter 3, 'A' is not just a sound, but the resting place of all existence. It is implicitly present in every other consonant and vowel, just as Śiva's consciousness pervades all of reality.",
    relatedConcepts: ["anuttara", "aham", "svara"]
  },
  {
    id: "akara-ananda",
    sanskrit: "आकार / आनन्द",
    iast: "ākāra / ānanda",
    english: "The Phoneme 'Ā' / Supreme Bliss",
    category: "Philosophy of Language",
    definition: "The second vowel ('Ā'), formed by the union of 'A' (Anuttara) with itself (A + A = Ā). It represents Śiva's sheer bliss and the initial impulse to expand or create.",
    significance: "Bliss (Ānanda) is the energy of Śiva resting in His own fullness. It is the first vibration of consciousness celebrating its own limitless nature before projecting the universe.",
    relatedConcepts: ["akara-anuttara", "camatkara", "iccha-sakti"]
  },
  {
    id: "ikara-iccha",
    sanskrit: "इकार / इच्छा",
    iast: "ikāra / icchā",
    english: "The Phoneme 'I' / Pure Will",
    category: "Philosophy of Language",
    definition: "The third vowel ('I'), representing the energy of Will (Icchā-śakti). It is the unmanifest, unfragmented desire of Śiva to manifest the cosmos.",
    significance: "At this stage, the universe exists purely as an intention within consciousness. There is no separation yet between the wisher and what is wished for.",
    relatedConcepts: ["sambhavopaya", "isana", "akara-ananda"]
  },
  {
    id: "ikara-isana",
    sanskrit: "ईकार / ईशान",
    iast: "īkāra / īśana",
    english: "The Phoneme 'Ī' / Supreme Lordship",
    category: "Philosophy of Language",
    definition: "The fourth vowel ('Ī'), representing Lordship or Mastery (Īśana). It is the intensification of Will ('I' + 'I' = 'Ī').",
    significance: "It denotes the absolute sovereignty of consciousness over its own impending creation, a sovereign awareness that 'I am the master of all that will appear.'",
    relatedConcepts: ["ikara-iccha", "svatantrya"]
  },
  {
    id: "ukara-unmesa",
    sanskrit: "उकार / उन्मेष",
    iast: "ukāra / unmeṣa",
    english: "The Phoneme 'U' / Emergence (Knowledge)",
    category: "Philosophy of Language",
    definition: "The fifth vowel ('U'), representing the energy of Knowledge (Jñāna-śakti) and the sudden unfolding or emergence (Unmeṣa) of the objective universe within the mind of Śiva.",
    significance: "Here, the cosmos begins to take shape as an idea or form within consciousness, similar to how an image first clearly appears in the mind's eye.",
    relatedConcepts: ["jnana-sakti", "unata"]
  },
  {
    id: "ukara-unata",
    sanskrit: "ऊकार / ऊनता",
    iast: "ūkāra / ūnatā",
    english: "The Phoneme 'Ū' / Deficiency (Objective Appearance)",
    category: "Philosophy of Language",
    definition: "The sixth vowel ('Ū'), representing a state of 'deficiency' or 'lack'. It occurs when consciousness begins to view the unfolding universe as an object slightly separate from its own fullness.",
    significance: "This 'deficiency' is not a flaw, but a necessary step for creation. By slightly concealing His absolute fullness, Śiva allows the objective world to appear as if it were distinct.",
    relatedConcepts: ["ukara-unmesa", "maya-tattva"]
  },
  {
    id: "sandhyaksara",
    sanskrit: "सन्ध्यक्षर",
    iast: "sandhyakṣara",
    english: "The Diphthongs (E, AI, O, AU) / Blended Energies",
    category: "Philosophy of Language",
    definition: "The complex vowels (E, AI, O, AU), which in Sanskrit are formed by combining the base energies (e.g., A + I = E; A + U = O).",
    significance: "Esoterically, these represent the geometric and dynamic fusion of Absolute Consciousness (A/Ā) with Will (I/Ī) and Knowledge (U/Ū), forming the 'Triangles' (Śṛṅgāṭaka) of emission that lead to action (Kriyā).",
    relatedConcepts: ["sringataka", "kriya-sakti"]
  },
  {
    id: "bindu",
    sanskrit: "बिन्दु / अं",
    iast: "bindu / aṃ",
    english: "The Point (Anusvāra) / Undivided Knowing",
    category: "Philosophy of Language",
    definition: "The nasal sound (Aṃ) at the end of the vowel series. It represents the compression of all preceding energies into a single, intensely concentrated, dimensionless point of pure awareness.",
    significance: "Bindu is the state where the entire universe is held in potential, like a seed. It is the perfect fusion of the subjective (Śiva) and objective (Śakti) poles of reality.",
    relatedConcepts: ["visarga", "aham", "prakasa"]
  },
  {
    id: "visarga",
    sanskrit: "विसर्ग / अः",
    iast: "visarga / aḥ",
    english: "Emission (Aḥ) / The Creative Outpouring",
    category: "Philosophy of Language",
    definition: "The final vowel sound, an aspirated release of breath (Aḥ). It represents Śakti as the power of emission, projecting the inner universe outward into manifestation.",
    significance: "Visarga is the supreme creative act. It is depicted as two points (colon-like), representing the inner and outer, or the upper and lower realms, connected by the flow of divine breath.",
    relatedConcepts: ["bindu", "kriya-sakti", "aham"]
  },
  {
    id: "aham-vimarsa",
    sanskrit: "अहं विमर्श",
    iast: "ahaṃ vimarśa",
    english: "The Supreme 'I' Awareness",
    category: "Absolute Reality",
    definition: "The absolute, self-referential consciousness of Śiva. Esoterically constructed from the alphabet: 'A' (the first letter, Śiva) to 'Ha' (the last letter, Śakti), bound together by 'M' (Bindu, non-dual union).",
    significance: "This is the climax of the vowel emanation in Chapter 3. Ahaṃ is not the limited human ego; it is the infinite, cosmic container that holds all letters (and thus all realities) from A to Z within itself.",
    relatedConcepts: ["matrika", "purnata", "anuttara"]
  },

// --- THE EMANATION OF THE CONSONANTS (OBJECTIVE WORLD) ---
  {
    id: "vyanjana",
    sanskrit: "व्यञ्जन",
    iast: "vyañjana",
    english: "Consonants / The Manifesting Letters",
    category: "Philosophy of Language",
    definition: "The consonants of the Sanskrit alphabet. In the esoteric Trika system, while vowels represent the autonomous, self-shining consciousness of Śiva, the consonants represent the dependent, objective universe (the 'created' things).",
    significance: "Consonants cannot be pronounced without a vowel (usually 'a'). This phonetically proves the philosophical point that the objective world (consonants) cannot exist without the underlying support of Śiva's consciousness (the vowel).",
    relatedConcepts: ["svara", "matrika", "tattva"]
  },
  {
    id: "sparsha-varna",
    sanskrit: "स्पर्श वर्ण",
    iast: "sparśa varṇa",
    english: "The Mute Consonants (Ka to Ma)",
    category: "Philosophy of Language",
    definition: "The 25 specific consonants ranging from 'Ka' to 'Ma'. They are called 'sparśa' (contact) because the tongue makes full contact with the mouth to pronounce them.",
    significance: "Abhinavagupta maps these 25 letters exactly to the lowest 25 Tattvas of the Sāṃkhya system, from the gross material elements (Earth) up to the limited individual soul (Puruṣa). They represent the fully condensed, material realm.",
    relatedConcepts: ["kavarga", "pavarga", "tattva"]
  },
  {
    id: "kavarga",
    sanskrit: "कवर्ग",
    iast: "kavarga",
    english: "The Guttural Consonants (Ka, Kha, Ga, Gha, Ṅa)",
    category: "Cosmology",
    definition: "The first group of five consonants. In the process of cosmic emanation, they correspond to the Pañcamahābhūtas: the five gross physical elements (Earth, Water, Fire, Air, Ether/Space).",
    significance: "They form the outermost, densest layer of manifestation, rooted in the throat (guttural), which is esoterically linked to the gross physical plane.",
    relatedConcepts: ["sparsha-varna", "mahabhuta"]
  },
  {
    id: "cavarga",
    sanskrit: "चवर्ग",
    iast: "cavarga",
    english: "The Palatal Consonants (Ca, Cha, Ja, Jha, Ña)",
    category: "Cosmology",
    definition: "The second group of five consonants. They correspond to the Pañcatanmātras: the five subtle elements or sensory potentials (Odor, Taste, Form/Color, Touch, Sound).",
    significance: "These subtle elements are the energetic templates or 'blueprints' from which the gross physical elements (Kavarga) eventually solidify.",
    relatedConcepts: ["kavarga", "tanmatra"]
  },
  {
    id: "tavarga-cerebrals",
    sanskrit: "टवर्ग",
    iast: "ṭavarga",
    english: "The Cerebral Consonants (Ṭa, Ṭha, Ḍa, Ḍha, Ṇa)",
    category: "Cosmology",
    definition: "The third group of five consonants. They correspond to the Pañcakarmendriyas: the five organs of action (Resting, Evacuation, Locomotion, Handling, Speech).",
    significance: "This represents the universe of dynamic physical interaction and the capacities of the individual soul to act within the materialized world.",
    relatedConcepts: ["karmendriya", "vyanjana"]
  },
  {
    id: "tavarga-dentals",
    sanskrit: "तवर्ग",
    iast: "tavarga",
    english: "The Dental Consonants (Ta, Tha, Da, Dha, Na)",
    category: "Cosmology",
    definition: "The fourth group of five consonants. They correspond to the Pañcajñānendriyas: the five organs of sense/perception (Smell, Taste, Sight, Touch, Hearing).",
    significance: "This represents the cognitive interface of the soul—the capacities required to perceive the objective universe.",
    relatedConcepts: ["jnanendriya", "vyanjana"]
  },
  {
    id: "pavarga",
    sanskrit: "पवर्ग",
    iast: "pavarga",
    english: "The Labial Consonants (Pa, Pha, Ba, Bha, Ma)",
    category: "Cosmology",
    definition: "The fifth group of five consonants. They correspond to the inner psychological instruments and their source: Mind (Manas), Ego (Ahaṃkāra), Intellect (Buddhi), Root Nature (Prakṛti), and the limited Soul (Puruṣa) corresponding to 'Ma'.",
    significance: "The letter 'Ma' represents the limited subject (the bound human). Thus, from 'Ka' to 'Ma', the entire lower universe of the bound soul and its environment is completely mapped.",
    relatedConcepts: ["purusa", "prakriti", "sparsha-varna"]
  },
  {
    id: "antahstha",
    sanskrit: "अन्तःस्थ",
    iast: "antaḥstha",
    english: "The Semivowels (Ya, Ra, La, Va)",
    category: "Cosmology",
    definition: "The intermediate consonants. In the Tattva system, these correspond to the restrictive forces (Kañcukas) that bind the soul, and the great illusion itself: Niyati, Kāla, Rāga, Vidyā, and Māyā.",
    significance: "They exist 'in between' (antaḥstha) the pure spiritual realms and the completely materialized realm (Ka to Ma). They are the veils that transform infinite Śiva into the limited Puruṣa.",
    relatedConcepts: ["kancuka", "maya-tattva"]
  },
  {
    id: "usman",
    sanskrit: "ऊष्मन्",
    iast: "ūṣman",
    english: "The Fricatives/Sibilants (Śa, Ṣa, Sa)",
    category: "Absolute Reality",
    definition: "The heated or aspirate sounds. These correspond to the highest, pure stages of cosmic emanation (Śuddha Adhvan): Śuddhavidyā, Īśvara, and Sadāśiva.",
    significance: "These represent the states of consciousness where the universe is known purely as an expression of the Self (e.g., 'I am this Universe'), before the veil of Māyā divides subject and object.",
    relatedConcepts: ["suddha-adhvan", "sadasiva"]
  },
  {
    id: "hakara",
    sanskrit: "हकार",
    iast: "hakāra",
    english: "The Phoneme 'Ha'",
    category: "Absolute Reality",
    definition: "The final foundational consonant of the alphabet. It corresponds directly to the pure Śakti (Energy/Emission) of Śiva.",
    significance: "Together, 'A' (Anuttara/Śiva) and 'Ha' (Śakti) encompass the entire alphabet and reality. When bound together by the point of non-dual awareness ('M'/Bindu), they form 'Ahaṃ'—the Supreme 'I'.",
    relatedConcepts: ["aham", "sakti", "visarga"]
  },

// --- MANTRA POTENCY & THE HEART ---
  {
    id: "mantra-virya2",
    sanskrit: "मन्त्रवीर्य",
    iast: "mantra-vīrya",
    english: "The Virility / Potency of Mantra",
    category: "Ritual & Mantra",
    definition: "The true, living power of a mantra, which is nothing other than the supreme 'I-consciousness' (Ahaṃ-vimarśa) of Śiva. Without this inner realization, mantras are merely dead letters.",
    significance: "Abhinavagupta emphasizes that reciting a mantra millions of times is useless without Mantra-vīrya. The practitioner must infuse the sound with the fierce, vibrant awareness of their own absolute freedom (Svātantrya) for the mantra to bear fruit.",
    relatedConcepts: ["aham-vimarsa", "matrika", "prana"]
  },
  {
    id: "hridaya",
    sanskrit: "हृदय",
    iast: "hṛdaya",
    english: "The Heart / The Core of Consciousness",
    category: "Absolute Reality",
    definition: "Not the physical organ, but the absolute center and resting place of supreme consciousness. It is the infinite space (kha) where the entire alphabet (and thus the universe) emerges and dissolves.",
    significance: "In Śāmbhavopāya, the yogi is instructed to dissolve all objective reality (consonants) and subjective energies (vowels) back into this radiant Heart, realizing that everything is a pulsation (Spanda) of their own core being.",
    relatedConcepts: ["visranti", "madhya-dhaman", "khecari-mudra"]
  },

  // --- SUBTLE PHYSIOLOGY & DISSOLUTION ---
  {
    id: "puryastaka",
    sanskrit: "पुर्यष्टक",
    iast: "puryaṣṭaka",
    english: "The City of Eight / The Subtle Body",
    category: "Subtle Physiology",
    definition: "The subtle body consisting of eight components: the five subtle elements (tanmātras), plus mind (manas), intellect (buddhi), and ego (ahaṃkāra).",
    significance: "This is the vehicle that transmigrates from life to life. In Śāmbhavopāya, the yogi metaphorically 'burns' this city in the fire of supreme consciousness, purifying it so it no longer acts as a limiting veil (Kañcuka).",
    relatedConcepts: ["kancuka", "tanmatra", "jiva"]
  },
  {
    id: "madhya-dhaman",
    sanskrit: "मध्यधामन्",
    iast: "madhya-dhāman",
    english: "The Central Abode / The Middle Channel",
    category: "Subtle Physiology",
    definition: "Esoterically corresponding to the Suṣumnā nerve, but in Śāmbhavopāya it refers to the absolute center of awareness, completely devoid of the duality of subject (Prāṇa) and object (Apāna).",
    significance: "Entering the Middle Channel means stopping the outward flow of attention and resting in the non-dual center. All genuine spiritual transformation in Trika occurs here.",
    relatedConcepts: ["hridaya", "susumna", "prana-apana"]
  },

  // --- THE SUPREME SEALS (MUDRĀ) & RESTING ---
  {
    id: "bhairavi-mudra",
    sanskrit: "भैरवी मुद्रा",
    iast: "bhairavī mudrā",
    english: "The Seal of Bhairavī",
    category: "Soteriology",
    definition: "A supreme state of awareness where the yogi's eyes are open and looking outward at the physical world, but their entire attention and consciousness are rooted completely inward in Śiva.",
    significance: "This embodies the pinnacle of Trika non-duality: one does not need to close their eyes or flee the world to meditate. The world itself is perceived as a reflection (Pratibimba) within the mirror of one's own awareness.",
    relatedConcepts: ["pratibimba", "khecari-mudra", "unmesa"]
  },
  {
    id: "khecari-mudra",
    sanskrit: "खेचरी मुद्रा",
    iast: "khecarī mudrā",
    english: "The Seal of Roaming in the Void",
    category: "Soteriology",
    definition: "From 'Kha' (the void/ether of consciousness) and 'Carī' (moving). It is the state where the yogi's awareness moves freely and limitlessly in the vast, unconditioned expanse of absolute consciousness.",
    significance: "While Hatha Yoga views this as a physical tongue lock, Abhinavagupta defines it as an internal, energetic posture of the soul. It is the ultimate freedom of the realized master to roam the universe as Śiva.",
    relatedConcepts: ["hridaya", "bhairavi-mudra", "svatantrya"]
  },
  {
    id: "visranti",
    sanskrit: "विश्रान्ति",
    iast: "viśrānti",
    english: "Repose / Ultimate Resting",
    category: "Aesthetics & Experience",
    definition: "The state of profound, dynamic stillness. It is the effortless resting of the self within its own essential nature (Svabhāva), free from the agitation of striving or becoming.",
    significance: "Viśrānti is the goal of Śāmbhavopāya. It is not an inert sleep, but a vibrant, blissful settling into the 'I-consciousness' (Ahaṃ) after all mental constructs (vikalpas) have been dissolved.",
    relatedConcepts: ["camatkara", "nirvikalpa", "ananda"]
  },
  {
    id: "sarva-svarupatva",
    sanskrit: "सर्वस्वरूपत्व",
    iast: "sarva-svarūpatva",
    english: "The State of Being the Form of All Things",
    category: "Absolute Reality",
    definition: "The ultimate realization concluding Śāmbhavopāya: the undeniable, lived experience that 'I am the universe' and that all 36 Tattvas and all phonemes are synthesized within my own body and consciousness.",
    significance: "This brings the teachings of Volume 2 full circle. The Anuttara (Absolute) discussed in Anupāya is finally realized in Śāmbhavopāya not as a distant goal, but as the very fabric of one's own embodied existence.",
    relatedConcepts: ["aham", "pratibimba", "purnata"]
  },

// --- ŚĀKTOPĀYA & THE PURIFICATION OF THOUGHT ---
  {
    id: "saktopaya-vol3",
    sanskrit: "शाक्तोपाय",
    iast: "śāktopāya",
    english: "The Empowered Means",
    category: "Soteriology",
    definition: "The category of spiritual practice (upāya) based on the power of knowledge/perception (Jñāna-śakti). It involves the penetration of consciousness using the mind alone, without relying on outer physical supports like rituals or breath control.",
    significance: "Unlike Śāmbhavopāya (which operates in the thought-free realm), Śāktopāya works directly with the flux of discursive thoughts (vikalpa). By refining and purifying these thoughts, the yogi uses the mind to eventually transcend the mind, leading to thought-free (nirvikalpa) realization.",
    relatedConcepts: ["vikalpa-samskara", "sattarka", "jñāna-sakti"]
  },
  {
    id: "vikalpa-samskara-vol3",
    sanskrit: "विकल्पसंस्कार",
    iast: "vikalpa-saṃskāra",
    english: "The Purification / Refinement of Thought",
    category: "Epistemology",
    definition: "The cognitive process wherein an initially unclear notion of reality (e.g., 'I am Śiva') is repeatedly contemplated and refined until it becomes supremely clear (sphuṭatama) and transforms into direct, thought-free insight.",
    significance: "Abhinavagupta teaches that thought is not merely an obstacle to be destroyed, but a vehicle that can be purified. A slightly purified thought generates a purer one, forming a progressive chain that ultimately dissolves the dualizing nature of the mind, merging it with pure consciousness.",
    relatedConcepts: ["saktopaya", "sattarka", "vikalpa"]
  },
  {
    id: "vikalpa-vol3",
    sanskrit: "विकल्प",
    iast: "vikalpa",
    english: "Discursive Thought / Differentiated Perception",
    category: "Epistemology",
    definition: "The dualistic, conceptual representation of reality where things are perceived as distinct from one another and from the perceiver. It is the 'unclear' indirect perception typical of daily life.",
    significance: "While binding in its ordinary state, vikalpa is the primary working material of Śāktopāya. The goal is not instant eradication, but progressive clarification until the thought construct aligns perfectly with absolute reality and tapers off into non-dual awareness.",
    relatedConcepts: ["nirvikalpa", "vikalpa-samskara", "bheda"]
  },

  // --- REASONING, INSIGHT & CONTEMPLATION ---
  {
    id: "sattarka-vol3",
    sanskrit: "सत्तर्क",
    iast: "sattarka",
    english: "Sound Discriminative Reasoning / True Intuitive Logic",
    category: "Epistemology",
    definition: "The highest form of reasoning, defined as the capacity to discern what should be adopted (truth/non-duality) and what should be abandoned (ignorance/duality). It is metaphorically described as the fully sharpened axe that severs the tree of harmful duality.",
    significance: "In the context of the Empowered Means, Sattarka is considered the most excellent, and indeed the *only* necessary, ancillary of Yoga (yogānga). It is distinct from dry, formal logic (śuṣkatarka); it is an intuitive, spiritually charged insight that matures into Pure Knowledge.",
    relatedConcepts: ["śuddhavidya", "bhavana", "yoganga"]
  },
  {
    id: "bhavana-vol3",
    sanskrit: "भावना",
    iast: "bhāvanā",
    english: "Creative Contemplation",
    category: "Soteriology",
    definition: "The state of intense, creative concentration that results when Sound Reasoning (sattarka) reaches its supreme summit. It is the capacity to render ultimate reality vividly evident and directly apparent.",
    significance: "Abhinavagupta likens Bhāvanā to 'the cow who grants all wishes' (Kāmadhenu). It takes abstract philosophical truths and, through intense contemplation, transforms them into living, experiential reality that is beyond mere wishful imagination.",
    relatedConcepts: ["sattarka", "dhyana", "vikalpa-samskara"]
  },
  {
    id: "suddhavidya",
    sanskrit: "शुद्धविद्या",
    iast: "śuddhavidyā",
    english: "Pure Knowledge",
    category: "Absolute Reality",
    definition: "The stage of consciousness where the duality of subject and object is bridged by the unifying awareness that 'I am all this universe and all this universe is me'.",
    significance: "Sound Reasoning (sattarka) is equated directly with Śuddhavidyā. It is the divine will of the Supreme Lord operating within the yogi as the pure, thoughtless insight that recognizes the innate unity of existence.",
    relatedConcepts: ["sattarka", "aham-idam", "vikalpana"]
  },

  // --- DIVINE CONCEALMENT & LOWER PATHS ---
  {
    id: "svatmapracchadana-krida",
    sanskrit: "स्वात्मप्रच्छादनक्रीडा",
    iast: "svātmapracchādana-krīḍā",
    english: "The Game of Self-Concealment",
    category: "Cosmology",
    definition: "The playful, autonomous act of the Supreme Lord hiding His own unconditioned, infinite nature to manifest as limited subjects and objects.",
    significance: "This concept explains the existence of duality and ignorance without compromising Śiva's absolute perfection. Concealment is not a flaw or an external force, but a manifestation of Śiva's omnipotent freedom (svātantrya) to accomplish the impossible.",
    relatedConcepts: ["maya", "svatantrya", "lila"]
  },
  {
    id: "raga-niyati",
    sanskrit: "राग-नियति",
    iast: "rāga-niyati",
    english: "Attachment and Necessity (Constraint)",
    category: "Cosmology",
    definition: "Two of the obscuring coverings (Kañcukas) of Māyā. Rāga is the general craving for objects, while Niyati is the restrictive law of cause and effect that focuses this craving onto specific, limited goals.",
    significance: "Abhinavagupta explains that it is the combination of Rāga and Niyati that binds ignorant souls to lower, incomplete spiritual paths and false philosophies, preventing them from recognizing the supreme Śaiva non-duality.",
    relatedConcepts: ["kancuka", "maya", "vama-sakti"]
  },
  {
    id: "pralayakala",
    sanskrit: "प्रलयाकल",
    iast: "pralayākala",
    english: "The Dissolution Deconditioned Perceiver",
    category: "Subtle Physiology",
    definition: "A state of the individual soul where it is temporarily free from the active forces of limitation (kalā) but remains in a state of deep sleep or suspended animation, retaining the impurities of Māyā and Karma.",
    significance: "In a radical critique, Abhinavagupta equates the ultimate liberation goals of rival schools (like the Vaiṣṇava 'union' or Buddhist 'extinction') to merely this suspended, deep-sleep state. He argues they have not truly transcended Māyā, and will inevitably be reborn.",
    relatedConcepts: ["sakala", "vijnanakala", "maya-mala"]
  },
  {
    id: "yoganga",
    sanskrit: "योगाङ्ग",
    iast: "yogānga",
    english: "Ancillaries / Limbs of Yoga",
    category: "Soteriology",
    definition: "The traditional stages or practices of Yoga (like breath control, posture, withdrawal of senses).",
    significance: "In the context of Śāktopāya, Abhinavagupta radically devalues the physical and restrictive limbs of Yoga, declaring them useless external artificial constructs. He asserts that Sound Discriminative Reasoning (Tarka) is the only true and excellent ancillary of Yoga.",
    relatedConcepts: ["sattarka", "pranayama", "dhyana"]
  },

// --- PURIFICATION OF THOUGHT & REASONING ---
  {
    id: "sattarka-vol3-p2",
    sanskrit: "सत्तर्क",
    iast: "sattarka",
    english: "Pure Reasoning / Sound Logic",
    category: "Epistemology",
    definition: "Not mere intellectual debate or dry logic, but reasoning that is perfectly aligned with the non-dual truth (Āgama) and directed toward liberation. It is the clearest and most elevated function of the intellect (Buddhi).",
    significance: "In Śāktopāya, Sattarka is considered the highest limb of Yoga. It is the mental instrument that cuts through ignorance and leads the mind to realize its own divine nature, serving as the bridge between limited thought and pure awareness.",
    relatedConcepts: ["agama", "pramana", "vikalpa-samskara"]
  },
  {
    id: "vikalpa-samskara-vol3-p2",
    sanskrit: "विकल्पसंस्कार",
    iast: "vikalpa-saṃskāra",
    english: "Purification / Refinement of Thought",
    category: "Soteriology",
    definition: "The methodical process in Śāktopāya of replacing limiting, dualistic thoughts ('I am bound', 'I am imperfect') with expansive, non-dual thoughts ('I am Śiva', 'The universe is my expression').",
    significance: "Unlike Śāmbhavopāya (which instantly drops thought), Śāktopāya uses thought to conquer thought. By constantly refining vikalpas through Sattarka and Āgama, the mind eventually exhausts its dualizing tendency and dissolves into non-discursive reality (Nirvikalpa).",
    relatedConcepts: ["sattarka", "bhavana", "nirvikalpa"]
  },
  {
    id: "bhavana-vol3-p2",
    sanskrit: "भावना",
    iast: "bhāvanā",
    english: "Creative Contemplation / Absorptive Meditation",
    category: "Soteriology",
    definition: "The intense, repeated, and focused contemplation of a spiritual truth until it ceases to be a mere intellectual concept and becomes a vividly experienced reality.",
    significance: "Through Bhāvanā, the practitioner digests the teachings of the Guru and Āgama. It is the energetic engine of Śāktopāya that transforms the pure thought (Sattarka) into the actual state of divine consciousness.",
    relatedConcepts: ["vikalpa-samskara", "sattarka"]
  },

  // --- THE ROLE OF THE MASTER (GURU) ---
  {
    id: "guru-tattva",
    sanskrit: "गुरुतत्त्व",
    iast: "guru-tattva",
    english: "The Principle of the Master",
    category: "Soteriology",
    definition: "The Guru is not merely a human teacher, but the very embodiment of Śiva's grace (Anugraha). In Chapter 4, the Guru is described as the ultimate Pramāṇa (authority/proof) because they possess direct, living experience of the Absolute.",
    significance: "Sattarka (pure reasoning) cannot be cultivated in a vacuum; it is ignited through contact with a genuine Guru. The Guru's transmission validates the scriptures and awakens the disciple's own inner intuitive wisdom (Pratibhā).",
    relatedConcepts: ["pratibha", "agama", "saktipata"]
  },
  {
    id: "sadguru",
    sanskrit: "सद्गुरु",
    iast: "sadguru",
    english: "The True / Authentic Master",
    category: "Soteriology",
    definition: "A master who has fully realized the non-dual state and is capable of transmitting this realization to others. Abhinavagupta contrasts the Sadguru with false teachers who are merely learned in texts but lack experiential realization.",
    significance: "The Tantrāloka asserts that taking refuge in a Sadguru is the most reliable way to awaken Sattarka. A true master cuts through the disciple's doubts instantly, whereas solitary study of texts may lead to further mental entanglement.",
    relatedConcepts: ["guru-tattva", "diksha"]
  },
  {
    id: "diksha",
    sanskrit: "दीक्षा",
    iast: "dīkṣā",
    english: "Initiation",
    category: "Ritual & Mantra",
    definition: "The spiritual transmission and ritual act performed by the Guru that destroys the disciple's limiting bonds (pāśa) and awakens their innate divine consciousness.",
    significance: "In the context of Chapter 4, Dīkṣā is intimately tied to the transmission of pure knowledge. It is not just a physical ritual, but the profound transfer of awakened awareness from the Guru to the disciple, sparking the process of Vikalpa-saṃskāra.",
    relatedConcepts: ["guru-tattva", "pasa", "saktipata"]
  },

  // --- TRANSITION TO THE COGNITIVE CYCLE ---
  {
    id: "krama-cakra",
    sanskrit: "क्रमचक्र",
    iast: "krama-cakra",
    english: "The Wheel of Sequence (Cognitive Cycle)",
    category: "Epistemology",
    definition: "The cyclical sequence of consciousness as it projects, maintains, and withdraws the objective world through the act of perception. Every single cognition goes through a micro-cycle of creation, persistence, and dissolution.",
    significance: "This concept bridges the purification of thought with the esoteric practices of Śāktopāya. By observing the Krama of their own thoughts and perceptions, the yogi realizes that they themselves are the creator and destroyer of all cognitive universes.",
    relatedConcepts: ["dvadasakali", "srishti", "samhara"]
  },
  {
    id: "dvadasakali",
    sanskrit: "द्वादशकाली",
    iast: "dvādaśakālī",
    english: "The Twelve Kālīs",
    category: "Cosmology",
    definition: "The esoteric sequence of twelve goddesses representing the twelve stages of cognitive movement (from the initial impulse to perceive an object, to its perception, to its dissolution back into pure awareness).",
    significance: "This is one of the most profound and secret teachings in Chapter 4, drawn from the Krama lineage. Contemplating the cycle of the Twelve Kālīs allows the practitioner of Śāktopāya to find the eternal, unchanging Absolute (Śiva) hidden within the constant flux of time and mental activity.",
    relatedConcepts: ["krama-cakra", "samvid", "vikalpa-samskara"]
  },

// --- THE COGNITIVE CYCLE OF KĀLĪ (KRAMA) ---
  {
    id: "kalanakarana",
    sanskrit: "कलनकरण",
    iast: "kalanakaraṇa",
    english: "The Act of Devouring / Generating Time",
    category: "Epistemology",
    definition: "The dual function of the Supreme Power (Kālī): she generates the illusion of sequential time (krama) to project the universe, and she devours or assimilates this time back into the eternal present of consciousness.",
    significance: "In Śāktopāya, recognizing this function allows the yogi to realize that every passing second and every fleeting thought is actually the Goddess actively projecting and withdrawing reality. Time is not an external cage, but the play of awareness.",
    relatedConcepts: ["krama-cakra", "dvadasakali", "samvit-devi"]
  },
  {
    id: "samvit-devi",
    sanskrit: "संवित् देवी",
    iast: "saṃvit devī",
    english: "The Goddess of Pure Awareness",
    category: "Absolute Reality",
    definition: "The ultimate, dynamic, and pulsating essence of consciousness, personified in the Krama system as the Supreme Kālī. She is the background upon which the twelve phases of cognition occur.",
    significance: "She is not an object to be worshipped externally, but the very faculty of perception within the yogi. By tracing the birth and death of thoughts, the yogi is actually tracking the footprints of Saṃvit Devī.",
    relatedConcepts: ["dvadasakali", "bhairava", "pratibha"]
  },

  // --- PHASES OF THE CYCLE (REPRESENTATIVE KĀLĪS) ---
  {
    id: "srishti-kali",
    sanskrit: "सृष्टिकाली",
    iast: "sṛṣṭikālī",
    english: "The Kālī of Emanation",
    category: "Epistemology",
    definition: "The specific cognitive phase (and its presiding energy) where the initial impulse to perceive an object arises out of pure consciousness. It is the spontaneous externalization of awareness.",
    significance: "This marks the moment the non-dual subject first allows a 'this' (an object or a thought) to appear distinct from 'I'. Recognizing Sṛṣṭikālī allows the yogi to catch the genesis of duality before it solidifies.",
    relatedConcepts: ["srishti", "rakta-kali"]
  },
  {
    id: "rakta-kali",
    sanskrit: "रक्तकाली",
    iast: "raktakālī",
    english: "The Kālī of Passion / Persistence",
    category: "Epistemology",
    definition: "Also known as Sthitikālī, she represents the phase where the subject becomes 'attached' or 'colored' (rakta) by the perceived object, sustaining its existence in awareness.",
    significance: "This is the phase of active, dualistic experience. The mind holds onto the thought or sensory input, believing it to be a separate reality. In Śāktopāya, the yogi learns to witness this grasping without being bound by it.",
    relatedConcepts: ["srishti-kali", "samhara-kali"]
  },
  {
    id: "samhara-kali",
    sanskrit: "संहारकाली",
    iast: "saṃhārakālī",
    english: "The Kālī of Withdrawal",
    category: "Epistemology",
    definition: "The phase where the perception of the object begins to dissolve, receding from external manifestation back into the internal subjective memory or void.",
    significance: "Every perception naturally dies. By focusing on Saṃhārakālī, the yogi rides the fading of a thought back to the source, using the death of the object to reveal the immortal subject.",
    relatedConcepts: ["rakta-kali", "yama-kali"]
  },
  {
    id: "yama-kali",
    sanskrit: "यमकाली",
    iast: "yamakālī",
    english: "The Kālī of Restraint / Death",
    category: "Epistemology",
    definition: "The phase where the object is entirely withdrawn and rests as a latent impression (saṃskāra) within the mind. She 'binds' the dissolved universe within the subject.",
    significance: "She represents the darkness of unmanifest potential. If the yogi stops here, they fall into the void of deep sleep (śūnya). The cycle must continue to completely burn the latent impressions.",
    relatedConcepts: ["samhara-kali", "bhadrākali"]
  },
  
  // --- THE CLIMAX OF THE CYCLE ---
  {
    id: "anakhya",
    sanskrit: "अनाख्य",
    iast: "anākhya",
    english: "The Ineffable / The Unnamable State",
    category: "Absolute Reality",
    definition: "The supreme phase of the Krama cycle, transcending creation, persistence, and withdrawal. It is the state where both the object and the subject's limited ego are completely devoured.",
    significance: "In Anākhya, consciousness does not just withdraw the object; it devours its own previous states of devouring. All traces of sequence and time are annihilated, leaving only the pure, unspeakable Absolute.",
    relatedConcepts: ["mahabhairavacandograghorakali", "nirvikalpa"]
  },
  {
    id: "mahabhairavacandograghorakali",
    sanskrit: "महाभैरवचण्डोग्रघोरकाली",
    iast: "mahābhairavacaṇḍograghorakālī",
    english: "The Supreme, Terrifying, Fierce Kālī of Great Bhairava",
    category: "Absolute Reality",
    definition: "The ultimate, transcendent 13th Goddess (often synthesized into the 12th in Trika). She represents the absolute culmination of the Krama cycle—the ultimate Light that has consumed all darkness, all time, and all dualities.",
    significance: "She is the ultimate goal of Śāktopāya. Realizing her means recognizing one's own consciousness as the supreme sovereign power that effortlessly projects and annihilates the entire cosmos in the fraction of a second of cognition.",
    relatedConcepts: ["anakhya", "bhairava", "anuttara"]
  },
  {
    id: "pitha-sthana",
    sanskrit: "पीठस्थान",
    iast: "pīṭhasthāna",
    english: "The Sacred Seats (of the Goddesses)",
    category: "Subtle Physiology",
    definition: "In the esoteric practice of Chapter 4, the yogi visualizes these cognitive goddesses not in external temples, but at specific 'seats' (pīṭhas) within their own subtle body and sensory organs.",
    significance: "This internalizes the entire Tantric ritual. The eyes, ears, mind, and the void of the heart become the sacred geometry where the cosmic drama of projection and withdrawal is worshipped continuously.",
    relatedConcepts: ["samvit-devi", "hridaya"]
  },

// --- THE ALCHEMY OF DIGESTING DUALITY ---
  {
    id: "hatha-paka",
    sanskrit: "हठपाक",
    iast: "hāṭha-pāka",
    english: "Violent / Forceful Digestion",
    category: "Soteriology",
    definition: "The aggressive, intense, and immediate assimilation of dualistic thoughts and objective reality into the fire of pure consciousness. It is the refusal to let a limiting thought persist.",
    significance: "In Śāktopāya, the yogi does not passively watch thoughts, but actively 'cooks' them in the fire of awareness. By recognizing an object or emotion as an expression of Śiva, its limited, binding nature is forcefully destroyed.",
    relatedConcepts: ["alamgrasa", "vimarśa", "vikalpa-samskara"]
  },
  {
    id: "alamgrasa",
    sanskrit: "अलं ग्रास",
    iast: "alaṃ-grāsa",
    english: "Total Devouring / Complete Assimilation",
    category: "Soteriology",
    definition: "The culmination of hāṭhapāka. It is the state where the objective universe has been completely 'eaten' by the supreme consciousness, leaving absolutely no residue (saṃskāra) of duality behind.",
    significance: "When total devouring occurs, the yogi realizes that the universe is not something external to be feared or desired, but is simply the fuel that makes the fire of their own 'I-consciousness' blaze brighter.",
    relatedConcepts: ["hatha-paka", "anakhya", "bhairava"]
  },

  // --- INTERNALIZATION OF RITUAL (ŚĀKTOPĀYA) ---
  {
    id: "antaryaga",
    sanskrit: "अन्तर्याग",
    iast: "antaryāga",
    english: "Internal Sacrifice / Inner Worship",
    category: "Ritual & Mantra",
    definition: "The true, esoteric sacrifice where the offerings are not physical flowers or incense, but the practitioner's own thoughts, breath, sensory perceptions, and ego.",
    significance: "Abhinavagupta asserts that external rituals belong to Āṇavopāya (the lowest means). In Śāktopāya, the supreme sacrifice is continuously offering the illusion of duality into the blazing fire of non-dual awareness.",
    relatedConcepts: ["sakticakra", "hatha-paka"]
  },
  {
    id: "sakticakra-vol3",
    sanskrit: "शक्तिचक्र",
    iast: "śakticakra",
    english: "The Wheel of Energies",
    category: "Subtle Physiology",
    definition: "The host of divine energies operating within the individual, specifically referring to the sensory organs, mental faculties, and vital breaths.",
    significance: "In Antaryāga, the yogi recognizes their own senses not as mere biological functions, but as a host of goddesses (Śaktis) radiating from the Heart, eagerly consuming sensory objects as offerings for the Supreme Lord (Śiva) at the center.",
    relatedConcepts: ["antaryaga", "bhairava", "indriya"]
  },
  {
    id: "esoteric-snana",
    sanskrit: "स्नान",
    iast: "snāna",
    english: "Esoteric Bathing / Purification",
    category: "Ritual & Mantra",
    definition: "True purification is not washing the physical body with water. In Śāktopāya, Snāna is immersing the mind in the uninterrupted, radiant light of one's own pure consciousness.",
    significance: "A yogi who has 'bathed' in non-dual awareness is eternally pure, regardless of physical circumstances. Abhinavagupta rejects orthodox concepts of physical purity and impurity as mere mental constructs (vikalpas).",
    relatedConcepts: ["vrata", "vikalpa-samskara"]
  },
  {
    id: "esoteric-vrata",
    sanskrit: "व्रत",
    iast: "vrata",
    english: "Esoteric Vow / Observance",
    category: "Ritual & Mantra",
    definition: "Instead of orthodox vows like fasting or celibacy, the supreme Vrata in Śāktopāya is the unbroken, unshakeable conviction and continuous realization that 'I am Śiva' and 'Everything is my expression.'",
    significance: "Maintaining this non-dual perspective in the midst of daily life, amidst both pain and pleasure, is considered the most difficult and highest of all spiritual vows.",
    relatedConcepts: ["esoteric-snana", "bhavana", "sarva-svarupatva"]
  },
  {
    id: "esoteric-japa",
    sanskrit: "जप",
    iast: "japa",
    english: "Esoteric Recitation / The Unstruck Sound",
    category: "Ritual & Mantra",
    definition: "True Japa is not the mechanical muttering of syllables with the lips. It is the continuous, spontaneous, and silent reverberation (Vimarśa) of the Supreme 'I' awareness within the Heart.",
    significance: "This connects back to Mantra-vīrya. The highest recitation happens automatically with every breath (the natural 'So'ham' or 'Haṃsa' mantra) when the yogi is anchored in self-awareness.",
    relatedConcepts: ["mantra-virya", "uccara", "hamsa"]
  },

  // --- SEED AND MANIFESTATION ---
  {
    id: "bija",
    sanskrit: "बीज",
    iast: "bīja",
    english: "The Seed (Syllable / Consciousness)",
    category: "Philosophy of Language",
    definition: "In the context of Śāktopāya mantric science, Bīja refers to the vowels (representing pure Śiva/subjectivity). It is the intensely concentrated point of consciousness containing the potential of the entire universe.",
    significance: "Just as a massive banyan tree is hidden within a tiny seed, the entire cosmos is held within the pure 'I-consciousness'. Realizing the Bīja state is to return to the source before manifestation.",
    relatedConcepts: ["pinda", "svara", "bindu"]
  },
  {
    id: "pinda",
    sanskrit: "पिण्ड",
    iast: "piṇḍa",
    english: "The Corporeal / The Mass",
    category: "Philosophy of Language",
    definition: "Corresponding to the consonants in mantric science, Piṇḍa represents the manifest, objective, and dense universe.",
    significance: "The practice involves dissolving the Piṇḍa (the heavy, objective reality) back into the Bīja (the subtle seed of pure awareness) through the process of Hāṭhapāka.",
    relatedConcepts: ["bija", "vyanjana", "samhara"]
  },

// --- THE PRACTITIONER OF ŚĀKTOPĀYA ---
  {
    id: "vira",
    sanskrit: "वीर",
    iast: "vīra",
    english: "The Tantric Hero",
    category: "Soteriology",
    definition: "The fearless practitioner of Śāktopāya who does not flee from the terrifying, dualistic, or intense experiences of the world, but confronts them to digest them into pure consciousness.",
    significance: "Unlike the bound soul (Paśu) who is terrified of impurity and bound by orthodox rules, the Vīra uses the intense energies of life (passion, fear, sensory input) as fuel for the fire of non-dual realization (Hāṭhapāka).",
    relatedConcepts: ["pasu", "hatha-paka", "cakresvara"]
  },
  {
    id: "cakresvara",
    sanskrit: "चक्रेश्वर",
    iast: "cakreśvara",
    english: "The Lord of the Wheel (of Energies)",
    category: "Soteriology",
    definition: "The supreme state achieved by the Vīra, where the yogi sits immovable in the Heart (the center) while perfectly commanding the peripheral 'wheel' of sensory and mental energies (Śakticakra).",
    significance: "Instead of the senses dragging the yogi outward into illusion, the Cakreśvara directs the senses to gather the nectar of objective reality and offer it back into the central fire of 'I-consciousness'.",
    relatedConcepts: ["sakticakra", "vira", "bhairava"]
  },

  // --- MANTRA VS VIDYĀ ---
  {
    id: "vidya",
    sanskrit: "विद्या",
    iast: "vidyā",
    english: "Feminine Mantric Power / Pure Knowledge",
    category: "Ritual & Mantra",
    definition: "In the specific context of Chapter 4, Vidyā refers to the sonic embodiments of the Goddess (Śakti), just as Mantra typically refers to the masculine deity (Śiva). It is the unconditioned knowledge that 'I am all this.'",
    significance: "Śāktopāya is primarily the domain of Vidyā, as it relies on the cognitive power of the Goddess to purify thought (Vikalpa) and dissolve the illusion of sequence (Krama) back into the Absolute.",
    relatedConcepts: ["mantra-virya", "samvit-devi"]
  },

  // --- STABILIZATION OF TRANSCENDENCE ---
  {
    id: "turya",
    sanskrit: "तुर्य",
    iast: "turya",
    english: "The Fourth State",
    category: "Aesthetics & Experience",
    definition: "The state of pure, witnessing consciousness that underlies and transcends the three ordinary states of waking (jāgrat), dreaming (svapna), and deep sleep (suṣupti).",
    significance: "In Śāktopāya, the goal is not just to glimpse Turya in deep meditation, but to actively infuse the waking, dreaming, and deep sleep states with the unbroken awareness of the Fourth.",
    relatedConcepts: ["turyatita", "samavesa"]
  },
  {
    id: "turyatita",
    sanskrit: "तुर्यातीत",
    iast: "turyātīta",
    english: "Beyond the Fourth State",
    category: "Absolute Reality",
    definition: "The absolute, ultimate condition where even the distinction between the 'witnessing consciousness' (Turya) and the 'states witnessed' collapses. The universe and the self become completely indistinguishable.",
    significance: "This is the final culmination of Alaṃgrāsa (total devouring). The yogi no longer steps 'back' into Turya to observe the world; the world itself is realized as the blazing manifestation of their own supreme body.",
    relatedConcepts: ["turya", "alamgrasa", "anakhya"]
  },
  {
    id: "jnanadiksha-vol3",
    sanskrit: "ज्ञानदीक्षा",
    iast: "jñānadīkṣā",
    english: "Initiation through Pure Knowledge",
    category: "Ritual & Mantra",
    definition: "An initiation that occurs purely through the transmission of non-dual wisdom from the Guru, independent of any external fire rituals, maṇḍalas, or physical materials.",
    significance: "Abhinavagupta concludes that for the qualified disciple on the path of Śāktopāya, this intellectual/spiritual transmission of Sattarka (pure reasoning) is entirely sufficient to burn the bonds of karma and grant liberation.",
    relatedConcepts: ["diksha", "sadguru", "sattarka"]
  },
  {
    id: "svikalpa-nirvikalpa-samarasya",
    sanskrit: "सविकल्प-निर्विकल्प-सामरस्य",
    iast: "savikalpa-nirvikalpa-sāmarasya",
    english: "The Perfect Harmony of Thought and Thoughtlessness",
    category: "Epistemology",
    definition: "The culminating realization of Śāktopāya where the presence of thoughts (savikalpa) no longer disturbs the underlying thought-free awareness (nirvikalpa). Both are recognized as the exact same fluid energy of Śiva.",
    significance: "The yogi realizes they do not need to forcibly stop their mind to be free. The very movement of thought is experienced as the blissful pulsation (Spanda) of the Absolute.",
    relatedConcepts: ["vikalpa-samskara", "nirvikalpa", "spanda"]
  }
];

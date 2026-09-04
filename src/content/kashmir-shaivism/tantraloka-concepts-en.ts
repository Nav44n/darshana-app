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
  }
];

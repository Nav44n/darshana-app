export type BrahmaSutraConceptCategory =
  | "1. Metaphysics & Foundations"
  | "2. Causality & Cosmology"
  | "3. Epistemology (Knowledge & Error)"
  | "4. Psychology & Anatomy of the Soul"
  | "5. Soteriology (Liberation & Path)"
  | "6. Rival Systems (Samkhya & Others)";

export interface BrahmaSutraConcept {
  id: string;
  term: string;
  sanskrit: string;
  category: BrahmaSutraConceptCategory;
  diagramId?: string;
  basicDefinition: string;
  advancedExplanation: string;
  relatedConcepts?: string[];
}

export const brahmaSutrasConceptsEn: BrahmaSutraConcept[] = [
  // ==========================================
  // 1. METAPHYSICS & FOUNDATIONS
  // ==========================================
  {
    id: "concept_brahman",
    term: "Brahman (The Absolute)",
    sanskrit: "ब्रह्मन्",
    category: "1. Metaphysics & Foundations",
    diagramId: "brahman-jiva-ishvara",
    basicDefinition: "The ultimate, unchanging, infinite, immanent, and transcendent reality which is the divine ground of all existence.",
    advancedExplanation: "Brahman is the central theme of the Brahma Sutras. Establishing its nature as both the intelligent and material cause of the universe is the primary goal of Adhyaya 1 (Samanvaya). In Advaita, it is pure consciousness (Sat-Chit-Ananda).",
    relatedConcepts: ["concept_atman", "concept_ishvara", "concept_abhinna_nimitta_upadana"]
  },
  {
    id: "concept_atman",
    term: "Ātman (The Self)",
    sanskrit: "आत्मन्",
    category: "1. Metaphysics & Foundations",
    basicDefinition: "The true, witnessing self of an individual, beyond identification with phenomena (body, mind, intellect).",
    advancedExplanation: "In Advaita Vedanta, Ātman is completely identical with Nirguna Brahman. The realization of this non-difference (Abheda) between Jiva (individual) and Atman/Brahman is the sole means to Moksha (liberation).",
    relatedConcepts: ["concept_brahman", "concept_jiva", "concept_pancha_kosha"]
  },
  {
    id: "concept_jiva",
    term: "Jīva (The Individual Soul)",
    sanskrit: "जीव",
    category: "1. Metaphysics & Foundations",
    basicDefinition: "The empirical self; pure consciousness (Atman) associated with a limiting adjunct (Upadhi) such as the mind and ignorance.",
    advancedExplanation: "The Brahma Sutras (especially Adhyaya 2, Pada 3) extensively debate the size, origin, and agency of the Jiva, concluding it is a reflection or apparent limitation of the infinite Brahman.",
    relatedConcepts: ["concept_atman", "concept_antahkarana"]
  },
  {
    id: "concept_ishvara",
    term: "Īśvara (The Supreme Lord)",
    sanskrit: "ईश्वर",
    category: "1. Metaphysics & Foundations",
    basicDefinition: "Saguna Brahman; Brahman associated with the power of Maya, acting as the creator, preserver, and destroyer of the universe.",
    advancedExplanation: "While Nirguna Brahman is the ultimate reality, Ishvara is the highest reading of the Absolute from the empirical (Vyavaharika) standpoint, acting as the dispenser of the fruits of Karma (Adhyaya 3, Pada 2).",
    relatedConcepts: ["concept_brahman", "concept_maya", "concept_karma_traya"]
  },

  // ==========================================
  // 2. CAUSALITY & COSMOLOGY
  // ==========================================
  {
    id: "concept_maya",
    term: "Māyā (Cosmic Illusion)",
    sanskrit: "माया",
    category: "2. Causality & Cosmology",
    diagramId: "maya-powers",
    basicDefinition: "The mysterious power of Brahman that conceals the true nature of reality and projects the multiplicity of the universe.",
    advancedExplanation: "Maya explains how the changeless, non-dual Brahman appears as the changing, manifold universe without undergoing any real transformation. It possesses both veiling (Avarana) and projecting (Vikshepa) powers.",
    relatedConcepts: ["concept_vivartavada", "concept_adhyasa"]
  },
  {
    id: "concept_abhinna_nimitta_upadana",
    term: "Abhinna-nimitta-upādāna (Undifferentiated Cause)",
    sanskrit: "अभिन्ननिमित्तोपादान",
    category: "2. Causality & Cosmology",
    diagramId: "abhinna-nimitta-upadana",
    basicDefinition: "The doctrine that Brahman is simultaneously both the intelligent designer (Nimitta) and the raw material (Upadana) of the universe.",
    advancedExplanation: "Established in Sutra 1.4.23 ('Prakritischa...'). This refutes the Samkhya view (which posits an independent material cause, Prakriti) and the Nyaya view (which posits God only as an intelligent designer).",
    relatedConcepts: ["concept_brahman", "concept_vivartavada"]
  },
  {
    id: "concept_vivartavada",
    term: "Vivartavāda (Apparent Manifestation)",
    sanskrit: "विवर्तवाद",
    category: "2. Causality & Cosmology",
    diagramId: "vivarta-vs-parinama",
    basicDefinition: "The theory that the cause (Brahman) appears as the effect (the universe) without undergoing any actual, substantive change.",
    advancedExplanation: "This maintains the strict immutability and perfection of Brahman while accounting for the empirical world, much like a rope appearing as a snake in the twilight.",
    relatedConcepts: ["concept_maya", "concept_satkaryavada"]
  },
  {
    id: "concept_satkaryavada",
    term: "Satkāryavāda (Theory of Pre-existent Effect)",
    sanskrit: "सत्कार्यवाद",
    category: "2. Causality & Cosmology",
    basicDefinition: "The theory that the effect pre-exists in its material cause before its manifestation; creation is merely manifestation.",
    advancedExplanation: "Both Vedanta and Samkhya accept this, using it to refute the Nyaya-Vaiseshika theory (Asatkaryavada) which claims the effect is a completely new creation out of previously non-existent parts.",
    relatedConcepts: ["concept_vivartavada"]
  },

  // ==========================================
  // 3. EPISTEMOLOGY (KNOWLEDGE & ERROR)
  // ==========================================
  {
    id: "concept_adhyasa",
    term: "Adhyāsa (Superimposition)",
    sanskrit: "अध्यास",
    category: "3. Epistemology (Knowledge & Error)",
    basicDefinition: "The false cognition of a thing as something else, specifically superimposing the non-Self onto the Self.",
    advancedExplanation: "Adi Shankara opens his Brahma Sutra Bhashya with a famous preamble on Adhyasa, stating it is the root cause of all human suffering and the prerequisite for worldly existence and action.",
    relatedConcepts: ["concept_maya", "concept_anirvacaniya_khyati"]
  },
  {
    id: "concept_satta_traya",
    term: "Sattā-traya (Three Degrees of Reality)",
    sanskrit: "सत्तात्रय",
    category: "3. Epistemology (Knowledge & Error)",
    basicDefinition: "The classification of reality into Absolute (Paramarthika), Empirical (Vyavaharika), and Apparent/Subjective (Pratibhasika).",
    advancedExplanation: "This critical framework allows Vedanta to accept the validity of worldly activities, science, and rituals (at the Vyavaharika level) while asserting that only Brahman is ultimately real (Paramarthika).",
    relatedConcepts: ["concept_brahman", "concept_maya", "concept_adhyasa"]
  },
  {
    id: "concept_anirvacaniya_khyati",
    term: "Anirvacanīya-khyāti (Inexpressible Error)",
    sanskrit: "अनिर्वचनीयख्याति",
    category: "3. Epistemology (Knowledge & Error)",
    basicDefinition: "The theory that the object of an illusion is neither absolutely real (because it is sublated) nor absolutely unreal (because it is perceived).",
    advancedExplanation: "This provides the epistemological backing for Maya—the universe itself is Anirvacaniya, neither absolutely real (Sat) nor entirely non-existent (Asat).",
    relatedConcepts: ["concept_maya", "concept_satta_traya"]
  },
  {
    id: "concept_pramana",
    term: "Pramāṇa (Valid Means of Knowledge)",
    sanskrit: "प्रमाण",
    category: "3. Epistemology (Knowledge & Error)",
    basicDefinition: "The valid instruments of knowledge, with scripture (Shabda) being the ultimate authority for supra-sensible truths.",
    advancedExplanation: "The Brahma Sutras assert that for supra-sensible realities (like Brahman), Shabda (Sruti/Scripture) is the *only* valid Pramana, subordinating pure logic (Anumana) to scriptural revelation.",
    relatedConcepts: []
  },

  // ==========================================
  // 4. PSYCHOLOGY & ANATOMY OF THE SOUL
  // ==========================================
  {
    id: "concept_avastha_traya",
    term: "Avasthā-traya (Three States of Consciousness)",
    sanskrit: "अवस्थात्रय",
    category: "4. Psychology & Anatomy of the Soul",
    basicDefinition: "The analysis of human experience through three states: Jagrat (Waking), Svapna (Dreaming), and Sushupti (Deep sleep).",
    advancedExplanation: "Analyzed deeply in Adhyaya 3, Pada 2. By analyzing these states, Vedanta proves that the true Self (Turiya) is the unchanging, eternal witness of all three transient states.",
    relatedConcepts: ["concept_atman", "concept_turiya"]
  },
  {
    id: "concept_turiya",
    term: "Turīya (The Fourth)",
    sanskrit: "तुरीय",
    category: "4. Psychology & Anatomy of the Soul",
    basicDefinition: "The underlying background of pure consciousness that witnesses the three states of waking, dreaming, and deep sleep.",
    advancedExplanation: "It is not a 'state' per se, but the very nature of Atman/Brahman. The ultimate realization is identifying oneself as Turiya rather than the ego traversing the three states.",
    relatedConcepts: ["concept_avastha_traya", "concept_atman"]
  },
  {
    id: "concept_antahkarana",
    term: "Antaḥkaraṇa (The Inner Instrument)",
    sanskrit: "अन्तःकरण",
    category: "4. Psychology & Anatomy of the Soul",
    basicDefinition: "The subtle cognitive apparatus consisting of mind, intellect, memory, and ego.",
    advancedExplanation: "It is the primary Upadhi (limiting adjunct) of the Jiva. Liberation involves purifying the Antahkarana so it can perfectly reflect the light of Atman without distortion.",
    relatedConcepts: ["concept_jiva"]
  },
  {
    id: "concept_pancha_kosha",
    term: "Pañca-kośa (The Five Sheaths)",
    sanskrit: "पञ्चकोश",
    category: "4. Psychology & Anatomy of the Soul",
    basicDefinition: "The five illusory layers hiding the Atman, ranging from the physical body to the causal sheath of bliss.",
    advancedExplanation: "Spiritual inquiry (Vichara) involves systematically negating identification with each of these sheaths (Neti, Neti) to realize the underlying untouched Atman.",
    relatedConcepts: ["concept_atman"]
  },

  // ==========================================
  // 5. SOTERIOLOGY (LIBERATION & PATH)
  // ==========================================
  {
    id: "concept_sadhana_chatushtaya",
    term: "Sādhana-catuṣṭaya (Fourfold Qualifications)",
    sanskrit: "साधनचतुष्टय",
    category: "5. Soteriology (Liberation & Path)",
    basicDefinition: "The prerequisites for studying Vedanta: Discrimination, Dispassion, Six Virtues, and Desire for Liberation.",
    advancedExplanation: "Sutra 1.1.1 ('Atha...') uses the word 'Atha' (Now, therefore) to imply that one must first acquire these four qualifications before beginning the inquiry into Brahman.",
    relatedConcepts: ["concept_brahman", "concept_jivanmukti"]
  },
  {
    id: "concept_karma_traya",
    term: "Karma-traya (Three Types of Karma)",
    sanskrit: "कर्मत्रय",
    category: "5. Soteriology (Liberation & Path)",
    basicDefinition: "The division of karma into Sanchita (accumulated past), Prarabdha (currently fructifying), and Agami (future-generating).",
    advancedExplanation: "Adhyaya 4 explains that upon Brahma-Jnana (Self-realization), Sanchita and Agami karmas are destroyed. The Jnani only lives out the Prarabdha karma until the body falls.",
    relatedConcepts: ["concept_jivanmukti"]
  },
  {
    id: "concept_jivanmukti",
    term: "Jīvanmukti (Liberation while Living)",
    sanskrit: "जीवन्मुक्ति",
    category: "5. Soteriology (Liberation & Path)",
    basicDefinition: "The state of attaining liberation from ignorance and the cycle of rebirth while still residing in the physical body.",
    advancedExplanation: "A central tenet of Advaita Vedanta. The Jivanmukta perceives the world as a mere appearance and operates without ego, waiting only for Prarabdha Karma to exhaust.",
    relatedConcepts: ["concept_karma_traya"]
  },
  {
    id: "concept_krama_mukti",
    term: "Krama-mukti (Gradual Liberation)",
    sanskrit: "क्रममुक्ति",
    category: "5. Soteriology (Liberation & Path)",
    basicDefinition: "The path where a soul travels to Brahmaloka after death and attains final liberation at the end of the cosmic cycle.",
    advancedExplanation: "Detailed heavily in Adhyaya 4, Pada 3. It contrasts with Sadyo-mukti (immediate liberation) and is meant for those who practiced deep meditation (Upasana) on Saguna Brahman.",
    relatedConcepts: ["concept_ishvara"]
  },
  {
    id: "concept_nididhyasana",
    term: "Nididhyāsana (Profound Contemplation)",
    sanskrit: "निदिध्यासन",
    category: "5. Soteriology (Liberation & Path)",
    basicDefinition: "The uninterrupted, deep meditation on the truth 'I am Brahman', following hearing and logical reflection.",
    advancedExplanation: "This continuous absorption removes contrary habitual thoughts (Viparita Bhavana) and leads to direct, experiential realization (Aparokshanubhuti).",
    relatedConcepts: ["concept_sadhana_chatushtaya"]
  },

  // ==========================================
  // 6. RIVAL SYSTEMS (SAMKHYA & OTHERS)
  // ==========================================
  {
    id: "concept_pradhana",
    term: "Pradhāna / Prakriti (Unconscious First Cause)",
    sanskrit: "प्रधान",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The insentient, material matrix in Samkhya philosophy acting as the independent cause of the universe.",
    advancedExplanation: "The Brahma Sutras (specifically Adhyaya 1 and Adhyaya 2, Pada 1 & 2) direct their heaviest intellectual artillery against this Samkhya concept, proving logically that an insentient entity cannot independently design a highly ordered universe.",
    relatedConcepts: ["concept_brahman", "concept_samkhya_gunas"]
  },
  {
    id: "concept_samkhya_purusha",
    term: "Purusha (Pure Consciousness/Soul)",
    sanskrit: "पुरुष",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The sentient, observing, unmoving spiritual principle in Samkhya philosophy.",
    advancedExplanation: "Unlike Vedanta's Atman which is singular and non-dual, Samkhya posits an infinite number of separate Purushas. The Brahma Sutras argue that a completely inactive Purusha cannot logically prompt the inert Pradhana into creation without an intervening, intelligent God (Ishvara).",
    relatedConcepts: ["concept_pradhana"]
  },
  {
    id: "concept_samkhya_gunas",
    term: "The Three Gunas (Sattva, Rajas, Tamas)",
    sanskrit: "गुण",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The three fundamental threads or qualities that perfectly balance to form Prakriti (Nature) in Samkhya.",
    advancedExplanation: "According to Samkhya, creation begins when the equilibrium of these three Gunas is disturbed. The Brahma Sutras refute this by arguing that inert Gunas cannot spontaneously disturb their own balance without a conscious, guiding intelligence.",
    relatedConcepts: ["concept_pradhana"]
  },
  {
    id: "concept_paramanuvada",
    term: "Paramāṇuvāda (Theory of Atomism)",
    sanskrit: "परमाणुवाद",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The Nyaya-Vaiseshika doctrine that the universe is created by the aggregation of eternal, indivisible atoms.",
    advancedExplanation: "Refuted in Adhyaya 2, Pada 2. Vyasa argues that insentient atoms have no inherent tendency to move or combine without a sentient, presiding consciousness to direct them.",
    relatedConcepts: []
  },
  {
    id: "concept_kshanikavada",
    term: "Kṣaṇikavāda (Theory of Momentariness)",
    sanskrit: "क्षणिकवाद",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The Buddhist doctrine that all entities exist only for a split second before vanishing.",
    advancedExplanation: "Refuted in Adhyaya 2, Pada 2. Vedanta argues that if everything is strictly momentary, memory, personal identity, and the law of Karma become logically impossible.",
    relatedConcepts: []
  },
  {
    id: "concept_syadvada",
    term: "Syādvāda (Doctrine of Relative Truth)",
    sanskrit: "स्याद्वाद",
    category: "6. Rival Systems (Samkhya & Others)",
    basicDefinition: "The Jain epistemological theory that all judgments are conditional.",
    advancedExplanation: "Refuted by Vyasa in Sutra 2.2.33. Shankara argues that contradictory attributes (like existence and non-existence) cannot simultaneously belong to the exact same entity, rendering the philosophy unstable.",
    relatedConcepts: []
  }
];




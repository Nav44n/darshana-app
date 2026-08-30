export interface NyayaConcept {
  id: string;
  sanskrit: string;
  iast: string;
  english: string;
  category: 'Epistemology' | 'Metaphysics' | 'Dialectics' | 'Hermeneutics' | 'Cognition';
  definition: string;
  significance: string;
  relatedConcepts?: string[];
}

export const nyayaConceptsEn: NyayaConcept[] = [
  {
    id: "pramana",
    sanskrit: "प्रमाण",
    iast: "pramāṇa",
    english: "Means of Valid Knowledge",
    category: "Epistemology",
    definition: "The fundamental instruments or sources through which accurate, valid knowledge (pramā) of the world is acquired. Nyaya accepts four: Perception, Inference, Analogy, and Verbal Testimony.",
    significance: "Pramana is the foundational bedrock of Nyaya philosophy. Before any metaphysical claims about the soul, universe, or liberation can be made, the means of knowing must be rigorously tested and established.",
    relatedConcepts: ["pratyaksha", "anumana", "upamana", "shabda"]
  },
  {
    id: "pratyaksha",
    sanskrit: "प्रत्यक्ष",
    iast: "pratyakṣa",
    english: "Perception",
    category: "Epistemology",
    definition: "Direct, unmediated knowledge arising from the contact (sannikarsha) of a sense organ with its object. It must be non-erroneous, determinate, and not dependent on verbal cognition.",
    significance: "As the primary and most undeniable means of knowledge, Perception is the anchor for all other pramanas. Inference and Analogy ultimately depend on prior sensory data.",
    relatedConcepts: ["sannikarsha", "manas", "atman", "jnana"]
  },
  {
    id: "anumana",
    sanskrit: "अनुमान",
    iast: "anumāna",
    english: "Inference",
    category: "Epistemology",
    definition: "Cognition that follows a prior perception. It is the logical deduction of an unperceived object (like fire) based on the perception of a logical sign or mark (like smoke), relying on the memory of their invariable concomitance (vyapti).",
    significance: "Inference is the cornerstone of Nyaya logic, allowing human beings to expand their knowledge beyond the immediate reach of the senses, enabling science, philosophy, and rational inquiry.",
    relatedConcepts: ["pratyaksha", "vyabhicara", "hetvabhasa", "drishtanta"]
  },
  
  {
    id: "upamana",
    sanskrit: "उपमान",
    iast: "upamāna",
    english: "Analogy / Comparison",
    category: "Epistemology",
    definition: "Knowledge of the relationship between a name and the object it denotes, based on a recognized similarity to a familiar object (e.g., identifying a wild gavaya because one was told it looks like a cow).",
    significance: "It validates the practical acquisition of new vocabulary and taxonomy in unknown environments, acting as a bridge between linguistic instruction and direct sensory experience.",
    relatedConcepts: ["shabda", "pratyaksha"]
  },
  {
    id: "shabda",
    sanskrit: "शब्द",
    iast: "śabda",
    english: "Verbal Testimony / Word",
    category: "Epistemology",
    definition: "The instructive assertion of a reliable, trustworthy authority (Apta). It provides valid knowledge regarding both perceptible things (worldly facts) and imperceptible things (spiritual realms).",
    significance: "Acknowledges that humans cannot personally verify everything. Civilizational knowledge, history, and spiritual truths are transmitted through the valid testimony of reliable witnesses.",
    relatedConcepts: ["apta", "samaya", "veda"]
  },

  {
    id: "apta",
    sanskrit: "आप्त",
    iast: "āpta",
    english: "Trustworthy Authority",
    category: "Hermeneutics",
    definition: "A person who has direct, accurate knowledge of a subject, is devoid of prejudices or motives to deceive, and communicates clearly out of compassion or a sense of duty.",
    significance: "The validity of Shabda (Testimony) rests entirely on the Apta. Trust is placed not in the magical nature of words, but in the epistemic and moral integrity of the speaker.",
    relatedConcepts: ["shabda", "veda"]
  },
  {
    id: "samaya",
    sanskrit: "समय",
    iast: "samaya",
    english: "Linguistic Convention",
    category: "Hermeneutics",
    definition: "The established, historical agreement within a community that a specific word denotes a specific object or meaning.",
    significance: "Refutes the idea that words have an inherent, physical connection to objects. Language is shown to be a social, arbitrary construct, separating it from natural logical signs used in Inference.",
    relatedConcepts: ["shabda", "vakya"]
  },
  {
    id: "veda",
    sanskrit: "वेद",
    iast: "veda",
    english: "Scripture / Sacred Texts",
    category: "Hermeneutics",
    definition: "The ultimate corpus of spiritual and ritual knowledge in Indian philosophy, considered valid because they are the testimony of supreme Aptas (ancient seers or God).",
    significance: "Nyaya defends the authority of the Vedas using the same logical framework applied to medical science (Ayurveda), insisting that scriptural authority is based on empirical reliability.",
    relatedConcepts: ["shabda", "vidhi", "arthavada", "anuvada"]
  },

  {
    id: "vidhi",
    sanskrit: "विधि",
    iast: "vidhi",
    english: "Injunction / Command",
    category: "Hermeneutics",
    definition: "A direct prescriptive statement or command in a text urging the listener to perform a specific action to achieve a specific result.",
    significance: "Considered the operational core of the Veda or any instructional manual, around which all other sentences revolve.",
    relatedConcepts: ["veda", "arthavada", "anuvada"]
  },
  {
    id: "arthavada",
    sanskrit: "अर्थवाद",
    iast: "arthavāda",
    english: "Explanatory Assertion",
    category: "Hermeneutics",
    definition: "Sentences that provide praise, blame, historical context, or mythological backing to support and motivate the performance of a primary Injunction (Vidhi).",
    significance: "Helps resolve apparent absurdities in scripture by categorizing them not as empirical facts, but as rhetorical tools designed for psychological motivation.",
    relatedConcepts: ["vidhi", "veda"]
  },
  {
    id: "anuvada",
    sanskrit: "अनुवाद",
    iast: "anuvāda",
    english: "Re-inculcation / Purposeful Repetition",
    category: "Hermeneutics",
    definition: "The repetition of a previously stated command or concept for the sake of emphasis, clarification, or instructional continuity.",
    significance: "Defends scriptural texts against charges of tautology (pointless repetition), proving that repetition in pedagogy serves a vital, functional role.",
    relatedConcepts: ["vidhi", "arthavada"]
  },

  {
    id: "purvapaksha",
    sanskrit: "पूर्वपक्ष",
    iast: "pūrvapakṣa",
    english: "Prima Facie View / Opponent's Objection",
    category: "Dialectics",
    definition: "The initial argument, counter-claim, or skeptical objection presented against an established doctrine.",
    significance: "The engine of Indian philosophical discourse. Truth is not handed down rigidly; it is dynamically forged by anticipating, presenting, and dismantling the strongest possible counter-arguments.",
    relatedConcepts: ["siddhanta"]
  },
  {
    id: "siddhanta",
    sanskrit: "सिद्धान्त",
    iast: "siddhānta",
    english: "Established Tenet / Conclusion",
    category: "Dialectics",
    definition: "The final, proven doctrinal truth established after thoroughly refuting the opponent's view (Purvapaksha) using valid means of knowledge.",
    significance: "Represents the intellectual destination of the debate—a stable, defensible philosophical truth.",
    relatedConcepts: ["purvapaksha", "pramana"]
  },

  {
    id: "atman",
    sanskrit: "आत्मन्",
    iast: "ātman",
    english: "Soul / Self",
    category: "Metaphysics",
    definition: "The eternal, immaterial substance that is the substratum of consciousness, desire, aversion, effort, pleasure, and pain.",
    significance: "In Nyaya, the soul is not inherently conscious but acquires consciousness as an attribute when it comes into contact with the mind and senses.",
    relatedConcepts: ["manas", "jnana"]
  },
  {
    id: "manas",
    sanskrit: "मनस्",
    iast: "manas",
    english: "Mind / Internal Organ",
    category: "Cognition",
    definition: "The atomic, internal sense organ that mediates between the eternal soul and the external senses. It can only process one cognition at a time.",
    significance: "Explains why we do not experience all sensory inputs simultaneously. The mind acts as a highly focused, serial processor of reality.",
    relatedConcepts: ["atman", "sannikarsha", "pratyaksha"]
  },
  {
    id: "sannikarsha",
    sanskrit: "सन्निकर्ष",
    iast: "sannikarṣa",
    english: "Sense-Object Contact",
    category: "Cognition",
    definition: "The physical and cognitive connection between a sense organ (like the eye) and its corresponding object (like color) that triggers direct perception.",
    significance: "The indispensable physical trigger for all empirical knowledge, proving that human knowledge is grounded in objective reality.",
    relatedConcepts: ["pratyaksha"]
  },
  {
    id: "avayavin",
    sanskrit: "अवयविन्",
    iast: "avayavin",
    english: "The Whole",
    category: "Metaphysics",
    definition: "A distinct, unified substance that comes into existence when its parts (avayava) combine. A pot is not just a pile of clay atoms; it is a new entity: 'The Whole'.",
    significance: "Defends common-sense realism against Buddhist and Atomist reductionism. It proves that macroscopic objects are real, cohesive entities with their own properties, not just illusions created by microscopic parts.",
    relatedConcepts: ["pratyaksha"]
  },
  {
    id: "kala",
    sanskrit: "काल",
    iast: "kāla",
    english: "Time",
    category: "Metaphysics",
    definition: "The eternal, all-pervading substance that causes our cognitions of past, present, and future, and acts as the universal container for all actions.",
    significance: "Gautama staunchly defends the reality of the 'Present' moment as the continuous duration of action, countering skeptical claims that time is merely an illusion of past and future.",
    relatedConcepts: ["pratyaksha"]
  }
];
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
  },
  {
    id: "samsaya",
    sanskrit: "????",
    iast: "sa?saya",
    english: "Doubt",
    category: "Dialectics",
    definition: "A conflicting judgment regarding the exact character of an object, arising from the perception of properties common to many objects.",
    significance: "Doubt is the starting point of all philosophical inquiry and debate in Nyaya. Without doubt, there is no need for investigation or the application of Pramanas."
  },
  {
    id: "shodasha-padartha",
    sanskrit: "??? ?? ????????",
    iast: "?o?a?a-padartha",
    english: "The Sixteen Categories",
    category: "Epistemology",
    definition: "The sixteen topics of inquiry outlined by Gautama: means of knowledge, objects of knowledge, doubt, purpose, familiar instance, established tenet, members of a syllogism, confutation, ascertainment, discussion, wrangling, cavil, fallacies, quibbling, futile rejoinders, and clinchers.",
    significance: "Nyaya states that true knowledge of these sixteen categories leads to the attainment of the highest good (liberation)."
  },
  {
    id: "pariksha",
    sanskrit: "???????",
    iast: "parik?a",
    english: "Examination",
    category: "Dialectics",
    definition: "The critical investigation and testing of a subject that has been defined.",
    significance: "Once a concept is defined (lakshana), it must undergo rigorous logical examination to ascertain its validity."
  },
  {
    id: "duhkha-chain-nyaya",
    sanskrit: "????-???????",
    iast: "du?kha-nirodha",
    english: "The Chain of Suffering",
    category: "Metaphysics",
    definition: "The causal chain leading from false knowledge to suffering, and its reversal leading to liberation.",
    significance: "Gautama posits that false knowledge causes defects, which cause activity, which cause birth, which causes suffering. Destroying false knowledge unravels the whole chain."
  },
  {
    id: "jnana",
    sanskrit: "????",
    iast: "jñana",
    english: "Knowledge / Cognition",
    category: "Cognition",
    definition: "The apprehension or apprehension-producing activity that illuminates objects.",
    significance: "In Nyaya, cognition is not the essence of the soul, but an adventitious quality that arises when the soul, mind, sense-organ, and object come into contact."
  },
  {
    id: "vipratipatti",
    sanskrit: "???????????",
    iast: "vipratipatti",
    english: "Contradiction / Conflicting Opinion",
    category: "Dialectics",
    definition: "Mutually exclusive statements about the same object, leading to doubt.",
    significance: "It is one of the causes of doubt, forcing the need for critical examination."
  },
  {
    id: "avyavastha",
    sanskrit: "????????",
    iast: "avyavastha",
    english: "Irregularity / Lack of Uniformity",
    category: "Dialectics",
    definition: "Irregularity in apprehension or non-apprehension, leading to doubt.",
    significance: "Another cause of doubt in the Nyaya system. When there is no uniform rule about whether something should be perceived or not, doubt arises."
  },
  {
    id: "vada",
    sanskrit: "????",
    iast: "vada",
    english: "Discussion",
    category: "Dialectics",
    definition: "A debate where both parties sincerely aim to discover the truth, establishing their own position using pramāṇas and logic.",
    significance: "Unlike wrangling (jalpa) or cavil (vitaṇḍa) which aim only at defeating an opponent, vāda aims at ascertaining the truth."
  },
  {
    id: "prameya",
    sanskrit: "??????",
    iast: "prameya",
    english: "Object of Valid Knowledge",
    category: "Epistemology",
    definition: "That which is to be known through pramāṇas. The objects of knowledge.",
    significance: "While everything is technically knowable, Nyaya restricts prameya to the specific objects (soul, body, senses, etc.) whose knowledge leads to liberation."
  },
  {
    id: "dvadasha-prameya",
    sanskrit: "?????? ??????",
    iast: "dvada?a prameya",
    english: "The Twelve Objects of Knowledge",
    category: "Metaphysics",
    definition: "The twelve specific objects of knowledge: Soul, Body, Senses, Objects of Senses, Intellect, Mind, Activity, Fault, Transmigration, Fruit, Pain, and Liberation.",
    significance: "These twelve constitute the essential reality that must be rightly understood to break the chain of suffering and achieve liberation."
  },
  {
    id: "buddhi",
    sanskrit: "?????",
    iast: "buddhi",
    english: "Intellect / Apprehension",
    category: "Cognition",
    definition: "Synonymous with knowledge and apprehension in the Nyaya system.",
    significance: "Nyaya distinguishes buddhi (knowledge) from the eternal soul, viewing it as a transitory property."
  },
  {
    id: "tarka",
    sanskrit: "????",
    iast: "tarka",
    english: "Confutation / Hypothetical Reasoning",
    category: "Dialectics",
    definition: "A process of reasoning that assists in knowing the true nature of a thing by revealing the absurdities of contrary suppositions.",
    significance: "While not a pramāṇa itself, tarka acts as an essential auxiliary to pramāṇas by clearing away doubts."
  },
  {
    id: "sharira-indriya-bhuta",
    sanskrit: "?????-???????-???",
    iast: "?arira-indriya-bhuta",
    english: "Body, Senses, and Elements",
    category: "Metaphysics",
    definition: "The physical architecture of interaction: the body is the site of experience, the senses are the instruments, and the material elements are their objects.",
    significance: "Nyaya provides a rigorous physicalist mapping of how consciousness interacts with the material world."
  },
  {
    id: "drishtanta",
    sanskrit: "????????",
    iast: "d???anta",
    english: "Familiar Instance / Example",
    category: "Dialectics",
    definition: "An undisputed example that both ordinary people and experts agree upon.",
    significance: "Crucial for inference. A logical argument (syllogism) must point to a real-world example (like a kitchen with fire and smoke) to ground its logic in reality."
  },
  {
    id: "anavastha",
    sanskrit: "????????",
    iast: "anavastha",
    english: "Infinite Regress",
    category: "Dialectics",
    definition: "A logical fallacy where a proposition requires an infinite series of justifications, without ever reaching a foundational grounding.",
    significance: "Nyaya frequently uses the threat of infinite regress to disprove opposing theories, arguing that valid knowledge must eventually rest on self-evident perception."
  },
  {
    id: "pravritti-dosha-phala",
    sanskrit: "????????-???-??",
    iast: "prav?tti-do?a-phala",
    english: "Activity, Fault, and Fruit",
    category: "Metaphysics",
    definition: "The core components of the karmic cycle: Faults (attachment, aversion) drive Activity (speech, mind, body), which inevitably produce a Fruit (experience of pleasure or pain).",
    significance: "This explains the mechanism of rebirth. By eliminating faults through right knowledge, activity ceases to bind the soul, preventing future fruits (rebirth)."
  },
  {
    id: "hetvabhasa",
    sanskrit: "?????????",
    iast: "hetvabhasa",
    english: "Fallacy of the Reason",
    category: "Dialectics",
    definition: "A 'pseudo-probans'. A reason (hetu) that appears to be valid but is actually defective and fails to establish the conclusion.",
    significance: "Nyaya rigorously classifies logical fallacies to ensure that inference remains a reliable means of knowledge."
  },
  {
    id: "apavarga",
    sanskrit: "??????",
    iast: "apavarga",
    english: "Liberation / Final Release",
    category: "Metaphysics",
    definition: "Absolute deliverance from pain. The state of the soul freed from the cycle of birth, activity, and fault.",
    significance: "In Nyaya, liberation is not a state of blissful joy, but an absolutely negative state of total cessation of suffering and consciousness."
  },
  {
    id: "vyabhicara",
    sanskrit: "????????",
    iast: "vyabhicara",
    english: "Inconstancy / Deviation",
    category: "Dialectics",
    definition: "A logical fallacy where the reason (hetu) exists both where the probandum (sadhya) exists and where it does not.",
    significance: "If smoke existed in both kitchens (where there is fire) and lakes (where there is no fire), smoke would be an inconstant reason for inferring fire."
  },
  {
    id: "prayojana",
    sanskrit: "??????",
    iast: "prayojana",
    english: "Purpose / Motive",
    category: "Dialectics",
    definition: "The objective or motive that induces someone to act or engage in a discussion.",
    significance: "Without a purpose (either to attain good or avoid evil), no philosophical inquiry or action occurs."
  },
  {
    id: "vakya",
    sanskrit: "?????",
    iast: "vakya",
    english: "Sentence / Statement",
    category: "Hermeneutics",
    definition: "A meaningful arrangement of words. In Nyaya, it refers specifically to the statements of an authoritative person (apta).",
    significance: "Crucial for understanding how verbal testimony (shabda) conveys valid knowledge."
  },
  {
    id: "avayava",
    sanskrit: "????",
    iast: "avayava",
    english: "Members of a Syllogism / Parts",
    category: "Dialectics",
    definition: "The five members of a formal inference used to convince others: Proposition, Reason, Example, Application, and Conclusion.",
    significance: "While one can infer something internally in three steps, convincing another person in debate strictly requires these five members to avoid rhetorical flaws."
  },
  {
    id: "chhala",
    sanskrit: "???",
    iast: "chhala",
    english: "Quibble / Casuistry",
    category: "Dialectics",
    definition: "The opposition to a statement by assigning to it an unintended meaning.",
    significance: "A common tactic in wrangling (jalpa). Nyaya identifies it to protect truth-seekers from falling prey to verbal tricks."
  },
  {
    id: "jati",
    sanskrit: "????",
    iast: "jati",
    english: "Futile Rejoinder",
    category: "Dialectics",
    definition: "An objection based on mere similarity or dissimilarity, without addressing the underlying logical connection.",
    significance: "A sophistical rebuttal that fails to actually counter the opponent's argument."
  },
  {
    id: "nigrahasthana",
    sanskrit: "???????????",
    iast: "nigrahasthana",
    english: "Ground of Defeat",
    category: "Dialectics",
    definition: "The point in a debate where a participant is defeated due to a contradiction, evasion, or inability to grasp the opponent's point.",
    significance: "The formal conclusion of a philosophical dispute, marking the failure of one party's reasoning."
  },
  {
    id: "pradipa-prakasha",
    sanskrit: "???????-??????",
    iast: "pradipa-prakasa",
    english: "Illumination of a Lamp",
    category: "Epistemology",
    definition: "An analogy explaining how a means of knowledge (pramāṇa) validates itself while validating an object, just as a lamp illuminates itself while illuminating a room.",
    significance: "Used to solve the paradox of infinite regress in epistemology, showing that not everything requires an external validator."
  }
];
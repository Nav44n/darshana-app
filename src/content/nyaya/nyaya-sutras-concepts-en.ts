/**
 * ============================================================================
 * NYĀYA SŪTRAS: MASTER ONTOLOGY & CONCEPTS DIRECTORY
 * ============================================================================
 * 
 * This file is the complete, canonical representation of all philosophical 
 * concepts (Padārthas, Pramāṇas, Siddhāntas, etc.) across the ENTIRE Nyāya system.
 * 
 * ARCHITECTURAL LAW:
 * As new Books (e.g., Book 5) or new commentaries (e.g., Vātsyāyana Bhāṣya) 
 * are integrated into the app, ANY new `conceptIds` referenced in those sutra 
 * files MUST be defined here. 
 * 
 * FUTURE INTEGRATION PROTOCOL:
 * 1. When adding a new Book (e.g. `nyaya-sutras-book5-en.ts`), run the 
 *    `identify-missing-concepts.js` script located in this directory.
 * 2. The script will statically analyze the new sutra payloads and output a 
 *    list of `conceptIds` that are referenced but missing from this file.
 * 3. Append the missing concepts to this array, ensuring they conform strictly 
 *    to the `NyayaConcept` interface, with accurate Devanagari, IAST, and 
 *    semantic `relatedConcepts` linkages.
 * 
 * This ensures the `nyaya-graph-data.ts` Knowledge Graph never encounters 
 * orphaned nodes and remains a perfectly mapped, high-dimensional web.
 * ============================================================================
 */
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
,
  {
    id: "atma-pariksha",
    sanskrit: "आत्मपरीक्षा",
    iast: "ātma-parīkṣā",
    english: "Examination of the Soul",
    category: "Metaphysics",
    definition: "The critical investigation into the existence, nature, and eternal status of the self (ātman) as distinct from the body, senses, and mind.",
    significance: "Establishes that the self is the permanent substratum of consciousness, memory, and agency, refuting materialist and Buddhist views of no-self.",
    relatedConcepts: ["atman", "buddhi", "manas"]
  },
  {
    id: "atma-nityatva",
    sanskrit: "आत्मनित्यत्व",
    iast: "ātma-nityatva",
    english: "Eternality of the Soul",
    category: "Metaphysics",
    definition: "The doctrine that the soul (ātman) is uncreated and indestructible, existing continuously across different bodies through transmigration.",
    significance: "A crucial tenet for justifying the laws of karma and moral responsibility; if the soul were destroyed at death, actions would bear no fruit.",
    relatedConcepts: ["atman", "pretyabhava", "karma"]
  },
  {
    id: "prapyakaritva",
    sanskrit: "प्राप्यकारित्व",
    iast: "prāpyakāritva",
    english: "Action by Direct Contact",
    category: "Epistemology",
    definition: "The principle that senses operate by physically reaching or coming into direct contact with their objects (e.g., visual rays traveling to the object).",
    significance: "Explains the mechanism of perception (pratyaksha) and why there are spatial and temporal limits to what can be perceived.",
    relatedConcepts: ["pratyaksha", "sannikarsha", "sharira-indriya-bhuta"]
  },
  {
    id: "buddhi-pariksha",
    sanskrit: "बुद्धिपरीक्षा",
    iast: "buddhi-parīkṣā",
    english: "Examination of Intellect",
    category: "Cognition",
    definition: "The critical investigation of cognition or intellect (buddhi), establishing it as a temporary quality of the soul rather than an eternal substance.",
    significance: "Refutes the Sāmkhya view that intellect is an eternal, independent cosmic principle, reinforcing Nyāya's substance-attribute ontology.",
    relatedConcepts: ["buddhi", "jnana", "atman"]
  },
  {
    id: "kshanabhangavada",
    sanskrit: "क्षणभङ्गवाद",
    iast: "kṣaṇabhaṅgavāda",
    english: "Theory of Momentariness",
    category: "Dialectics",
    definition: "The Buddhist doctrine that all entities exist only for a single instant before ceasing to be, completely replaced by a new entity in the next instant.",
    significance: "Nyāya fiercely refutes this theory to defend the enduring nature of substances (like the soul and material objects) necessary for memory and karma.",
    relatedConcepts: ["vada", "atman", "purvapaksha"]
  },
  {
    id: "adrshta",
    sanskrit: "अदृष्ट",
    iast: "adṛṣṭa",
    english: "The Unseen Force",
    category: "Metaphysics",
    definition: "The invisible moral force or latent potential generated by past actions (karma) that determines future experiences and the initial formation of the universe.",
    significance: "Provides the mechanical link between moral actions and their eventual, often delayed, physical or psychological consequences.",
    relatedConcepts: ["karma", "phala", "apūrva", "pretyabhava"]
  },
  {
    id: "pravrtti",
    sanskrit: "प्रवृत्ति",
    iast: "pravṛtti",
    english: "Activity / Volition",
    category: "Metaphysics",
    definition: "The operation of speech, mind, and body, driven by desire or aversion, which initiates the cycle of karma and rebirth.",
    significance: "Activity is the direct cause of merit and demerit. Stopping ego-driven activity is a prerequisite for liberation.",
    relatedConcepts: ["dosha", "karma", "pravritti-dosha-phala"]
  },
  {
    id: "dosha",
    sanskrit: "दोष",
    iast: "doṣa",
    english: "Psychological Defects",
    category: "Cognition",
    definition: "The underlying psychological flaws—attachment (rāga), aversion (dveṣa), and delusion (moha)—that compel a person to act.",
    significance: "They are the root cause of worldly activity and suffering. Liberation (apavarga) is attained only upon their complete eradication.",
    relatedConcepts: ["raga", "dvesha", "moha", "pravrtti"]
  },
  {
    id: "raga",
    sanskrit: "राग",
    iast: "rāga",
    english: "Attachment / Desire",
    category: "Cognition",
    definition: "The strong attraction or desire for objects that yield pleasure, leading to continued bondage and repeated activity.",
    significance: "One of the three primary doshas; it binds the soul to the cycle of samsara by generating future-oriented desires.",
    relatedConcepts: ["dosha", "pravrtti"]
  },
  {
    id: "dvesha",
    sanskrit: "द्वेष",
    iast: "dveṣa",
    english: "Aversion / Hatred",
    category: "Cognition",
    definition: "The strong repulsion or hatred toward objects or situations that yield pain, driving aggressive or avoidance behaviors.",
    significance: "One of the three primary doshas; equally as binding as attachment, as it forces the soul into reactive karma.",
    relatedConcepts: ["dosha", "pravrtti"]
  },
  {
    id: "moha",
    sanskrit: "मोह",
    iast: "moha",
    english: "Delusion / Ignorance",
    category: "Cognition",
    definition: "The fundamental ignorance or misconception of reality, primarily mistaking the non-self (body/mind) for the self.",
    significance: "The root of all other defects (rāga and dveṣa). Eradicating moha through true knowledge (tattvajñāna) is the ultimate goal of Nyāya.",
    relatedConcepts: ["dosha", "tatva-jnana", "apavarga"]
  },
  {
    id: "pretyabhava",
    sanskrit: "प्रेत्यभाव",
    iast: "pretyabhāva",
    english: "Transmigration / Rebirth",
    category: "Metaphysics",
    definition: "The cycle of dying and being born again in a new physical body, driven by the accumulated merit and demerit of past actions.",
    significance: "Explains the continuity of existence and the disparities in human birth; it is the fundamental problem that Nyāya seeks to escape.",
    relatedConcepts: ["atman", "karma", "phala"]
  },
  {
    id: "karma",
    sanskrit: "कर्म",
    iast: "karma",
    english: "Action / Moral Causation",
    category: "Metaphysics",
    definition: "Any physical, verbal, or mental action that generates an unseen moral consequence (adṛṣṭa) affecting the agent's future.",
    significance: "The mechanism of cosmic justice in Nyāya, ensuring that all experiences of pleasure and pain are earned.",
    relatedConcepts: ["pravrtti", "adrshta", "phala"]
  },
  {
    id: "shunyavada",
    sanskrit: "शून्यवाद",
    iast: "śūnyavāda",
    english: "Doctrine of Emptiness",
    category: "Dialectics",
    definition: "The Buddhist Madhyamaka theory that all things are fundamentally empty (śūnya) of intrinsic nature or independent existence.",
    significance: "Nyāya opposes this by arguing for the absolute reality of objects, categories, and the self, grounded in direct perception and logic.",
    relatedConcepts: ["purvapaksha", "kshanabhangavada", "prameya"]
  },
  {
    id: "ishvara",
    sanskrit: "ईश्वर",
    iast: "īśvara",
    english: "God / Supreme Lord",
    category: "Metaphysics",
    definition: "The supreme, eternal soul who creates, sustains, and destroys the universe, and who dispenses the fruits of karma to individual souls.",
    significance: "While early Nyāya focused on logic, later Nyāya developed sophisticated cosmological arguments to prove the existence of an intelligent creator.",
    relatedConcepts: ["atman", "adrshta", "phala"]
  },
  {
    id: "yadrccha-vada",
    sanskrit: "यदृच्छावाद",
    iast: "yadṛcchā-vāda",
    english: "Doctrine of Chance",
    category: "Dialectics",
    definition: "The materialist view that the universe and living beings emerge purely by random chance without any intelligent cause or moral design.",
    significance: "Nyāya refutes this to defend the necessity of karma and Īśvara, arguing that complex order requires an intelligent agent.",
    relatedConcepts: ["purvapaksha", "ishvara"]
  },
  {
    id: "sarva-anityatva",
    sanskrit: "सर्वानित्यत्व",
    iast: "sarva-anityatva",
    english: "Doctrine of Universal Impermanence",
    category: "Dialectics",
    definition: "The assertion that absolutely everything in existence is temporary and subject to destruction.",
    significance: "Nyāya refutes this by pointing out that certain things, like atoms, space, and the soul, must be eternal to serve as the foundation for the temporary.",
    relatedConcepts: ["nitya", "anitya"]
  },
  {
    id: "nitya",
    sanskrit: "नित्य",
    iast: "nitya",
    english: "Eternal",
    category: "Metaphysics",
    definition: "That which is uncreated, indestructible, and exists forever without modification (e.g., souls, atoms, ether).",
    significance: "Provides the stable ontological ground in Nyāya-Vaiśeṣika upon which the transient universe is built.",
    relatedConcepts: ["anitya", "atman", "paramanu"]
  },
  {
    id: "anitya",
    sanskrit: "अनित्य",
    iast: "anitya",
    english: "Impermanent",
    category: "Metaphysics",
    definition: "That which is produced and eventually destroyed; any composite object made of parts.",
    significance: "Distinguishing between the eternal and impermanent is vital for overcoming attachment to worldly objects.",
    relatedConcepts: ["nitya", "kshanabhangavada"]
  },
  {
    id: "sarva-nityatva",
    sanskrit: "सर्वनित्यत्व",
    iast: "sarva-nityatva",
    english: "Doctrine of Universal Eternality",
    category: "Dialectics",
    definition: "The view that everything that exists is permanent, and change is merely an illusion or a shift in manifestation (often associated with strict Advaita or Sāmkhya).",
    significance: "Nyāya rejects this, affirming the reality of change, creation, and destruction in the physical world.",
    relatedConcepts: ["nitya", "sarva-anityatva"]
  },
  {
    id: "sarva-prthaktva",
    sanskrit: "सर्वपृथक्त्व",
    iast: "sarva-pṛthaktva",
    english: "Doctrine of Universal Separateness",
    category: "Dialectics",
    definition: "The extreme pluralist view that every entity is entirely isolated and distinct, denying any real unifying categories or universals.",
    significance: "Nyāya argues against this to defend the reality of universals (sāmānya) and inherence (samavāya), which link diverse objects.",
    relatedConcepts: ["prameya", "shodasha-padartha"]
  },
  {
    id: "sarva-abhava",
    sanskrit: "सर्वाभाव",
    iast: "sarva-abhāva",
    english: "Doctrine of Universal Non-existence",
    category: "Dialectics",
    definition: "The extreme nihilist view that nothing truly exists at all.",
    significance: "Nyāya dismisses this as self-contradictory, as the very act of asserting non-existence requires the existence of the assertor and the assertion.",
    relatedConcepts: ["shunyavada", "pramana"]
  },
  {
    id: "phala",
    sanskrit: "फल",
    iast: "phala",
    english: "Fruit / Result",
    category: "Metaphysics",
    definition: "The experiential result (pleasure or pain) of one's past actions, representing the fruition of karma.",
    significance: "It is the ultimate driver of the cycle of rebirth. Understanding that all worldly 'fruits' are ultimately tied to suffering motivates the pursuit of liberation.",
    relatedConcepts: ["karma", "adrshta", "duhkha"]
  },
  {
    id: "apūrva",
    sanskrit: "अपूर्व",
    iast: "apūrva",
    english: "The Unprecedented Force",
    category: "Hermeneutics",
    definition: "A concept primarily from Mīmāṃsā, representing the unseen intermediary force generated by a ritual that brings about a future result.",
    significance: "In Nyāya, it is often synthesized with adṛṣṭa to explain how fleeting actions can cause effects long after the action has ceased.",
    relatedConcepts: ["adrshta", "karma"]
  },
  {
    id: "duhkha",
    sanskrit: "दुःख",
    iast: "duḥkha",
    english: "Suffering / Pain",
    category: "Metaphysics",
    definition: "The fundamental nature of worldly existence; the physical and psychological pain inevitably linked to birth and attachment.",
    significance: "The starting point of the Nyāya path. The realization that even worldly pleasure is tainted by pain drives the seeker toward ultimate release.",
    relatedConcepts: ["duhkha-chain-nyaya", "apavarga"]
  },
  {
    id: "moksha",
    sanskrit: "मोक्ष",
    iast: "mokṣa",
    english: "Liberation",
    category: "Metaphysics",
    definition: "The ultimate release from the cycle of rebirth and suffering, synonymous with Apavarga.",
    significance: "The highest goal of human life in Nyāya, achieved when the soul is completely freed from all qualities, including pain, pleasure, and cognition.",
    relatedConcepts: ["apavarga", "tatva-jnana"]
  },
  {
    id: "tatva-jnana",
    sanskrit: "तत्त्वज्ञान",
    iast: "tattva-jñāna",
    english: "Knowledge of Truth",
    category: "Epistemology",
    definition: "The accurate, direct realization of the true nature of the sixteen categories (padārthas) and the distinction between the soul and non-soul.",
    significance: "The sole mechanism that destroys delusion (moha), subsequently eliminating faults, activity, rebirth, and suffering.",
    relatedConcepts: ["apavarga", "duhkha-chain-nyaya", "moha"]
  },
  {
    id: "ahankara",
    sanskrit: "अहङ्कार",
    iast: "ahaṅkāra",
    english: "Ego / I-maker",
    category: "Cognition",
    definition: "The false identification of the true self (ātman) with the physical body, mind, or senses.",
    significance: "A primary manifestation of delusion (moha) that binds the soul to samsara.",
    relatedConcepts: ["moha", "atman"]
  },
  {
    id: "sankalpa",
    sanskrit: "सङ्कल्प",
    iast: "saṅkalpa",
    english: "Volition / Intention",
    category: "Cognition",
    definition: "The mental resolve or intentionality that precedes physical or verbal action.",
    significance: "It is the psychological origin of karma; purifying intentions is necessary to stop the generation of adṛṣṭa.",
    relatedConcepts: ["pravrtti", "manas"]
  },
  {
    id: "paramanu",
    sanskrit: "परमाणु",
    iast: "paramāṇu",
    english: "Atom",
    category: "Metaphysics",
    definition: "The eternal, indivisible, infinitesimal building block of the physical universe in Nyāya-Vaiśeṣika ontology.",
    significance: "Explains the composition and eventual destruction of all material objects without violating the principle that something cannot come from nothing.",
    relatedConcepts: ["nitya", "anitya"]
  },
  {
    id: "samadhi",
    sanskrit: "समाधि",
    iast: "samādhi",
    english: "Meditative Absorption",
    category: "Cognition",
    definition: "The state of deep, undisturbed concentration on the true nature of the soul.",
    significance: "Adopted from Yoga, Nyāya prescribes it as the practical method to internalize philosophical truth and achieve direct realization (tattvajñāna).",
    relatedConcepts: ["yoga", "abhyasa"]
  },
  {
    id: "abhyasa",
    sanskrit: "अभ्यास",
    iast: "abhyāsa",
    english: "Practice / Repetition",
    category: "Cognition",
    definition: "The continuous, disciplined repetition of philosophical reflection and meditation.",
    significance: "Necessary to overcome ingrained habits of false identification and stabilize true knowledge.",
    relatedConcepts: ["samadhi", "yoga"]
  },
  {
    id: "yoga",
    sanskrit: "योग",
    iast: "yoga",
    english: "Spiritual Discipline",
    category: "Cognition",
    definition: "The practical methods of mental and physical control used to focus the mind.",
    significance: "Nyāya explicitly endorses Yogic practices as the necessary complement to logical analysis for achieving liberation.",
    relatedConcepts: ["samadhi", "yama", "niyama"]
  },
  {
    id: "yama",
    sanskrit: "यम",
    iast: "yama",
    english: "Moral Restraints",
    category: "Cognition",
    definition: "The foundational ethical disciplines (like non-violence and truthfulness) required to purify the mind.",
    significance: "A prerequisite for effective meditation and the cessation of negative karma.",
    relatedConcepts: ["yoga", "niyama"]
  },
  {
    id: "niyama",
    sanskrit: "नियम",
    iast: "niyama",
    english: "Positive Observances",
    category: "Cognition",
    definition: "The constructive personal disciplines (like study and purity) that support spiritual growth.",
    significance: "Works alongside Yama to create the mental environment necessary for Tattvajñāna.",
    relatedConcepts: ["yoga", "yama"]
  },
  {
    id: "samvada",
    sanskrit: "संवाद",
    iast: "saṃvāda",
    english: "Constructive Dialogue",
    category: "Dialectics",
    definition: "A sincere discussion with teachers or peers aimed purely at discovering the truth, without the desire to defeat the other.",
    significance: "The preferred mode of philosophical inquiry (Vāda), essential for clarifying doubts and solidifying knowledge.",
    relatedConcepts: ["vada", "tarka"]
  },
  {
    id: "jalpa",
    sanskrit: "जल्प",
    iast: "jalpa",
    english: "Wrangling / Competitive Debate",
    category: "Dialectics",
    definition: "A debate where the primary goal is victory over the opponent rather than the discovery of truth, using any logical means necessary.",
    significance: "While risky, Nyāya permits it for defending the truth against hostile opponents who refuse constructive dialogue.",
    relatedConcepts: ["vada", "vitanda", "chhala"]
  },
  {
    id: "vitanda",
    sanskrit: "वितण्डा",
    iast: "vitaṇḍā",
    english: "Destructive Debate",
    category: "Dialectics",
    definition: "A form of debate where the participant only attacks the opponent's thesis without establishing any thesis of their own.",
    significance: "Viewed as the lowest form of debate, often associated with skeptics or nihilists. Nyāya studies it primarily to know how to counter it.",
    relatedConcepts: ["vada", "jalpa", "shunyavada"]
  }
];

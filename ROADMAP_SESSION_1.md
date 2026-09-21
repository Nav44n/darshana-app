# DARŚANA — PRODUCT VISION & NON-NEGOTIABLE PRINCIPLES
**Document Status:** Frozen / Immutable Foundation  
**Scope:** Universal governing charter for all architecture, content models, ingestion pipelines, UI/UX systems, and implementation phases.

---

## 1. Final Product Vision

**Darśana** is defined as a:
> **Malayalam-first, beginner-first, source-grounded digital environment for learning and exploring Indian philosophy.**

Its purpose is to enable any person—regardless of background, education, or prior exposure—to begin with zero knowledge of Indian philosophy and progressively journey toward rigorous, source-grounded philosophical study.

Darśana is **not** a passive digital library, an e-book reader, or a disconnected verse index. It is an interconnected, multi-dimensional knowledge graph structured across twelve relational planes:

```
Philosophical Systems (ദർശനങ്ങൾ)
  └── Traditions & Lineages (പരമ്പരകൾ / സമ്പ്രദായങ്ങൾ)
        └── Foundational Texts (ഗ്രന്ഥങ്ങൾ)
              └── Chapters & Sections (അധ്യായങ്ങൾ / പാദങ്ങൾ / ആഹ്നികങ്ങൾ)
                    └── Verses & Aphorisms (സൂത്രങ്ങൾ / കാരികകൾ / ശ്ലോകങ്ങൾ)
                          └── Core Concepts (തത്ത്വങ്ങൾ / സങ്കല്പങ്ങൾ)
                                └── Dialectical Arguments (യുക്തികൾ / വാദങ്ങൾ)
                                      └── Multi-layered Explanations (വിശദീകരണങ്ങൾ)
                                            └── Related Concepts & Analogies (ബന്ധപ്പെട്ട സങ്കല്പങ്ങൾ)
                                                  └── Intra-text & Inter-Darśana Cross-references
                                                        └── Divergent Traditions & Counter-positions (പൂർവ്വപക്ഷ-സിദ്ധാന്തങ്ങൾ)
                                                              └── Primary Sources & Critical Apparatus (മൂലഗ്രന്ഥങ്ങളും ആധാരരേഖകളും)
```

---

## 2. Language Architecture (Fixed)

### 2.1 Primary Language: Malayalam (മലയാളം)
* **Default and Primary Intellectual Experience:** Malayalam is the core native medium of the platform, not a secondary translation or an afterthought.
* **Complete Linguistic Parity:** In Malayalam mode, the entire environment—navigation, metadata, concepts, introductory primers, intermediate expositions, dialectical reasoning, and UI controls—must be conceived, structured, and presented natively in Malayalam.
* **Linguistic Tone:** The Malayalam register must be clear, dignified, accessible, and philosophically precise—avoiding both impenetrable archaic pedantry and shallow oversimplification.

### 2.2 Secondary Language: Indian English
* **Full Support:** Indian English is the co-equal secondary language, accommodating scholars, learners from the diaspora, and non-Malayalam readers.
* **Idiomatic Nuance:** English explanations must preserve Indian philosophical context rather than uncritically applying Western theological or Cartesian categories (e.g., distinguishing *Prakṛti* from Western "Nature", *Mokṣa* from "Salvation", or *Pramāṇa* from generic "Epistemology").

### 2.3 Extensible Multi-lingual Engine
* The underlying schema and storage abstractions must completely decouple semantic entities (systems, texts, concepts, arguments, relationships) from localized string payloads.
* The system must allow the addition of further languages (e.g., Hindi, Tamil, Telugu, Kannada, Sanskrit commentary layers) in future iterations without refactoring or breaking existing schemas.

---

## 3. Sanskrit & Verse Representation (Fixed)

### 3.1 Strict Preservation of Original Sanskrit
* Under no circumstances will original Sanskrit texts be omitted, abbreviated, or replaced.
* In Malayalam mode, the Sanskrit verses must be presented in **Malayalam-script transcription** (ലിപിമാറ്റം) to enable fluid, natural reading for Malayalam users, accompanied by the standard **Devanāgarī** text.

### 3.2 Discrete, Independent Textual Layers
Every verse, aphorism, or foundational passage must support distinct, non-conflated layers that can be toggled, stacked, or inspected individually:

| Layer | Identification | Description |
| :--- | :--- | :--- |
| **Layer 1** | **Devanāgarī Original** (*മൂലസംസ്കൃതം*) | Canonical text in Devanāgarī with accurate sandhi, punctuation, and visarga/anusvāra conventions. |
| **Layer 2** | **Malayalam Transcription** (*മലയാള ലിപിമാറ്റം*) | Phonetically precise transcription into Malayalam script adhering to traditional Malayalam Sanskrit-transcription rules. |
| **Layer 3** | **IAST Transliteration** (*അന്താരാഷ്ട്ര ലിപിമാറ്റം*) | Standard International Alphabet of Sanskrit Transliteration with diacritics for scholarly accuracy and search. |
| **Layer 4** | **Padaccheda & Anvaya** (*പദവിഭാഗവും അന്വയവും*) | Word-by-word grammatical decomposition and syntactical reordering in prose order. |
| **Layer 5** | **Padārtha** (*പദാർത്ഥം*) | Precise word-by-word literal meanings in Malayalam and Indian English. |
| **Layer 6** | **Malayalam Translation** (*മലയാള വിവർത്തനം*) | Rigorous, faithful modern translation capturing the direct import of the verse. |
| **Layer 7** | **Indian English Translation** (*ഇംഗ്ലീഷ് വിവർത്തനം*) | Clear, fluent English translation faithful to traditional syntax. |
| **Layer 8** | **Traditional Commentary** (*പരമ്പരാഗത വ്യാഖ്യാനം*) | Historical lineage commentaries (e.g., Śaṅkara-bhāṣya, Vyāsa-bhāṣya, Vātsyāyana-bhāṣya, Jayanta Bhaṭṭa, etc.) clearly attributed to their authors. |
| **Layer 9** | **Darśana Beginner Primer** (*ലളിത വിവരണം*) | Plain-language, conversational introduction explaining the core message without technical jargon. |
| **Layer 10** | **Philosophical Depth & Analysis** (*താത്ത്വിക അപഗ്രഥനം*) | Nuanced dialectical exposition of the underlying argument, implications, and polemical context. |
| **Layer 11** | **Network Connections** (*ബന്ധപ്പെട്ടവ*) | Explicit bidirectional links to related concepts, related verses (within the text and across other Darśanas), and analogies. |
| **Layer 12** | **Scholarly Apparatus & Sources** (*ആധാരസൂചിക*) | Specific manuscript variants, print edition provenance, page/verse citations, and licensing metadata. |

### 3.3 Fundamental Separation of Categories
The platform strictly recognizes that:
$$\text{Original Text} \neq \text{Transcription} \neq \text{Transliteration} \neq \text{Translation} \neq \text{Commentary} \neq \text{Interpretation}$$
These categories must never be merged, conflated, or rendered ambiguously in data models or visual UI components.

---

## 4. The Absolute-Beginner Principle

### 4.1 Zero-Knowledge Baseline
* **The Tabula Rasa Rule:** The design assumes the reader has never encountered Indian philosophy, does not know Sanskrit, and does not understand foundational categories.
* **No Unexplained Vocabulary:** Terms such as *Ātman*, *Brahman*, *Puruṣa*, *Prakṛti*, *Guṇa*, *Pramāṇa*, *Mokṣa*, *Dharma*, *Karma*, *Māyā*, *Adhyāsa*, *Pratītyasamutpāda*, etc., must never appear in isolation without immediate context, tooltip definitions, or progressive scaffolding.

### 4.2 The 7-Step Pedagogical Ladder
Whenever a philosophical concept, doctrine, or technical term is introduced, the system must support progressive disclosure along this seven-tier sequence:

```
[ Step 1: What is it? ] 
    → Ultra-clear 1-2 sentence definition using everyday language.
[ Step 2: Why does it matter? ] 
    → The human/existential question or practical problem it answers.
[ Step 3: Simple Intuitive Explanation ] 
    → Conversational breakdown of the mechanism without dense jargon.
[ Step 4: Concrete Real-World Example / Analogy (ദൃഷ്ടാന്തം) ] 
    → Classical or modern analogy grounding the idea in lived experience.
[ Step 5: Structural Context & Relationships ] 
    → How this concept connects with adjacent concepts within the system.
[ Step 6: Full Philosophical Rigor & Nuances ] 
    → Technical debates, school-specific subtleties, counter-arguments.
[ Step 7: Primary Sources & Lineage Expositions ] 
    → Direct citations, root aphorisms, and traditional commentaries.
```

A novice user must never be forced through Level 6 before being offered Levels 1 through 4. Conversely, an advanced learner must be able to bypass initial primers and directly engage Levels 6 and 7.

---

## 5. Philosophical Exploration: Core Future Experience

Each philosophical tradition (Nyāya, Vaiśeṣika, Sāṅkhya, Yoga, Mīmāṁsā, Advaita Vedānta, Viśiṣṭādvaita, Dvaita, Cārvāka, Jaina, Bauddha, Kashmir Śaivism, etc.) must feature an autonomous **Philosophical Exploration Engine** rather than a flat index of texts.

A learner must be guided through eleven systematic inquiry vectors:

1. **Orientation & Identity:** What is this system? What is its historical and intellectual trajectory?
2. **The Foundational Human Problem:** What human dilemma or existential friction provoked this inquiry? (e.g., suffering, cognitive delusion, ethical duty, the nature of knowledge).
3. **Core Quest & Inquiries:** What fundamental questions does it ask?
4. **Metaphysics & Ontology (തത്ത്വവിചാരം):** What does it claim about ultimate reality, matter, change, causality (*Kāryakāraṇa-vāda*), and creation?
5. **The Nature of the Self (ആത്മവിചാരം):** What is consciousness? Is there a persistent self, an illusion of self, or a witness consciousness?
6. **Epistemology (പ്രമാണവിചാരം):** How do we know what is true? Which instruments of valid knowledge (*Pramāṇas*—perception, inference, testimony, comparison, postulation, non-cognition) are accepted, and why?
7. **The Anatomy of Suffering (ദുഃഖഹേതു):** Why do beings suffer? Where does bondage originate?
8. **The Path to Freedom (മോക്ഷവിചാരം):** What constitutes liberation (*Mokṣa*, *Kaivalya*, *Nirvāṇa*)? What is the practical discipline to achieve it?
9. **Conceptual Constellation (സങ്കല്പഭൂപടം):** What are its primary building blocks, and how do they interact dynamically?
10. **Dialectical Method & Debate (വാദരീതിയും തർക്കവും):** How does this school defend its positions, formulate syllogisms, and critique rival worldviews (*Pūrva-pakṣa* vs. *Siddhānta*)?
11. **Textual Canon & Lineage (ആധാരഗ്രന്ഥങ്ങൾ):** What are the canonical sūtras, kārikās, commentaries, and historical luminaries?

From any exploratory portal, navigation must be fluid, continuous, and bidirectional:  
**Inquiry $\rightarrow$ Concepts $\rightarrow$ Arguments $\rightarrow$ Verses $\rightarrow$ Commentaries $\rightarrow$ Cross-Tradition Comparisons.**

---

## 6. Source-Grounded Principle & Legal Integrity

### 6.1 Systematic Source Extraction
* Primary literature and commentaries supplied via digitized resources (including Google Drive repositories, archival scans, and critical editions) form the bedrock of Darśana.
* Content must be extracted, structured, cross-referenced, and preserved systematically with strict editorial rigor, avoiding haphazard, superficial, or lossy summarization.

### 6.2 Strict Copyright, Licensing, and Permissions Compliance
* Public access to a PDF does not automatically confer redistribution rights.
* Every source ingested into the Darśana pipeline must undergo a copyright and public domain classification:
  * **Public Domain / Open License:** Direct reproduction, transcription, and translation permitted with full scholarly attribution.
  * **In-Copyright / Proprietary Sources:** Full verbatim text must **not** be republished. The system must utilize legally sound methodologies:
    * Factual and structural extraction (taxonomies, chapter divisions, verse coordinate mappings).
    * Original synthesized summaries and didactic primers.
    * Fair-use scholarly excerpts and short citations where legally permitted.
    * Independent translations where authorized or lawful.
    * Precise bibliographical attribution, persistent identifiers, page references, and external reference links.
* **Integrity of Attribution:** Never present third-party research, commentary, or translation as original Darśana material. Attribution must remain unambiguous.

---

## 7. Source Fidelity & Intellectual Honesty

### 7.1 Prohibition of Synthetic Inventions
* Darśana will never manufacture modern philosophical compromises or synthesize an artificial "universal agreement" where traditions historically disagree.
* The integrity of distinct positions must be meticulously preserved.

### 7.2 Explicit Classification of Statements
Every statement published within the platform must be tagged with its epistemic status:
1. **Source Material:** The exact words, terms, and direct propositions formulated in the primary text.
2. **Historical Commentary:** The exposition, analogies, and defense authored by a historical commentator.
3. **Tradition / Lineage Reading:** The specific hermeneutic lens of a particular school or sub-school.
4. **Darśana Didactic Layer:** Pedagogical explanations, contemporary examples, and structural introductions authored to help modern beginners understand.

### 7.3 Preservation of Philosophical Conflict
* When two traditions or commentators diverge (e.g., Śaṅkara vs. Rāmānuja on *Brahmasūtra*, or Nyāya vs. Bauddha on perception), their disagreement is an essential philosophical asset.
* Contradictions, debates, and divergent textual readings (*pāṭha-bheda*) must be highlighted and contrasted, never smoothed away or suppressed.

---

## 8. Multi-Source Architecture & Cumulative Growth

### 8.1 Monotonic Knowledge Growth
The knowledge base grows cumulatively and additively:
$$\text{System } A \;\longrightarrow\; \text{Source}_1 \;+\; \text{Source}_2 \;+\; \text{Source}_3 \;+\; \dots \;+\; \text{Source}_n$$
The ingestion of a subsequent source must **never** overwrite, corrupt, or erase valid data, translations, or annotations introduced by an earlier source.

### 8.2 Architectural Accommodations for Multiplicity
The underlying data and relationship models must natively accommodate:
* Multiple independent commentaries on a single sūtra.
* Conflicting verse numberings across different historical editions.
* Alternative verse readings (*pāṭhāntara*).
* Multiple translations in the same target language reflecting different scholarly lineages.
* Distinct structural organizations of the same work (e.g., alternate chapter or topic boundaries).
* Divergent concept mappings and taxonomic disputes.

---

## 9. Creative Freedom & Architectural Agnosticism

### 9.1 Zero Legacy Entanglement
Future technical and design roadmaps are completely unconstrained by prior artifacts:
* Existing UI layouts, components, CSS rules, palettes, and navigation trees are subject to total redesign or replacement.
* Existing database schemas, static TypeScript datasets, serialization formats, build tooling, and directory layouts may be refactored or rewritten from the ground up.
* No technological choice or architectural pattern may be defended purely on grounds of legacy inertia or backward compatibility unless it serves the ultimate product vision.

### 9.2 The Benchmark for Design Decisions
Every design, architectural, or technical decision must be evaluated against a single question:  
*"Does this make Indian philosophical knowledge more deeply understandable to a beginner while preserving absolute source fidelity and scholarly depth?"*

---

## 10. Visual & UX Vision

### 10.1 Aesthetic Demeanor
The user interface must embody:
* **Elegance & Serenity:** Deeply considered typography, spacious reading environments, dignified palette harmonies, and minimal visual noise.
* **Modernity & Craft:** State-of-the-art responsiveness, flawless fluid animations, micro-interactions that clarify state changes, and tactile polish.
* **Immersion & Focus:** Distraction-free reading views tailored for contemplative study, complemented by rich multi-panel exploratory modes.

### 10.2 Advanced Cognitive Visualizations
Visual models must be employed whenever spatial or diagrammatic representation accelerates intellectual comprehension:
* **Interactive Concept Graphs:** Node-edge graphs illustrating ontological hierarchies (e.g., Sāṅkhya 25 tattvas, Vaiśeṣika 7 padārthas).
* **Dialectical Flowcharts & Argument Trees:** Step-by-step visualizations of classical syllogisms (e.g., Nyāya 5-member inference / *pañcāvayava*).
* **Chronological & Lineage Timelines:** Historical evolution of commentaries, texts, and masters.
* **Comparative Multi-Column Matrices:** Parallel contrast views highlighting how different Darśanas analyze identical categories (e.g., *Pramāṇa* comparison table).
* **Interactive Verse Visualizers:** Morphological breakdowns where hovering over a word reveals its grammatical role, root (*dhātu*), and cross-text occurrences.

### 10.3 Functional Animation & Accessibility
* Animations must serve semantic and spatial orientation (e.g., showing hierarchical depth or relationship transitions), never visual vanity.
* **Universal Accessibility:** Comprehensive screen-reader accessibility, ARIA semantic landmark compliance, keyboard navigability, high-contrast clarity, and full support for `prefers-reduced-motion`.
* **Malayalam Typography:** Typographic systems must be engineered specifically for the complex rendering requirements, conjuncts (*kūṭṭakṣaraṅṅaḷ*), and line-heights of modern and traditional Malayalam fonts.

---

## 11. The Pedagogical Continuum (The Ultimate Measure)

Every screen, system, and feature in Darśana must be designed to guide the human mind along this uninterrupted five-stage progression:

$$\begin{array}{rcl}
\text{Stage 1: Encounter} & \longrightarrow & \text{“I know nothing, but I am curious.”} \\
\downarrow & & \\
\text{Stage 2: Intuition} & \longrightarrow & \text{“I grasp the basic dilemma and the central idea.”} \\
\downarrow & & \\
\text{Stage 3: Literacy} & \longrightarrow & \text{“I understand the core concepts and vocabulary.”} \\
\downarrow & & \\
\text{Stage 4: Reasoning} & \longrightarrow & \text{“I can follow and evaluate the philosophical arguments.”} \\
\downarrow & & \\
\text{Stage 5: Scholarship} & \longrightarrow & \text{“I can engage the primary sources and commentaries directly.”}
\end{array}$$

---

## 12. Charter Status

This document constitutes the immutable constitutional foundation of the **Darśana** project.  
All subsequent roadmap specifications—including Architecture (Session 2), Content Models (Session 3), Source-Ingestion Pipelines (Session 4), UI/UX Specifications (Session 5), and Implementation Sprints—must remain fully subordinate to and consistent with the principles established here.

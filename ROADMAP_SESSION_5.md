# DARŚANA — ROADMAP SESSION 5
## UI/UX Architecture, Design System & Philosophical Exploration Experience

**Document Status:** Frozen / Authoritative Specification  
**Governing Charters:** `ROADMAP_SESSION_1.md` (Product Vision), `ROADMAP_SESSION_2.md` (Target Architecture), `ROADMAP_SESSION_3.md` (Canonical Content & Entity Models), `ROADMAP_SESSION_4.md` (Source Ingestion, Provenance & Rights)  
**Scope:** Universal architectural specification for the visual language, user experience, information architecture, interaction design, accessibility, and component topology of the Darśana digital environment.

---

## 1. Core UX Philosophy

Darśana is an intellectual and contemplative sanctuary designed to make classical Indian philosophy accessible, living, and rigorous. It actively rejects the clichés of modern engagement-driven software—infinite feeds, gamified badges, aggressive banners, and superficial summaries. Instead, it embodies the calm, unhurried dignity of traditional *śāstraic* inquiry combined with the finest practices of modern information design and typography.

### 1.1 The Three Invariant Questions
At every moment, on every screen, regardless of whether a reader is an absolute beginner or a senior scholar, the interface must answer three questions with effortless clarity:

1. **Where am I? (ഞാൻ ഇപ്പോൾ എവിടെയാണ്?)**  
   The user must understand their exact locus within the vast Indian philosophical universe: which system (*Darśana*), which lineage or tradition (*Sampradāya*), which foundational text (*Grantha*), which chapter or section (*Adhyāya / Pāda*), which verse or aphorism (*Sūtra / Kārikā*), or which philosophical inquiry (*Vicāra*) they are currently contemplating.

2. **What am I learning? (ഞാൻ എന്താണ് ഗ്രഹിക്കുന്നത്?)**  
   The user must perceive the central thesis, concept, definition, or argument without having to wade through impenetrable philological apparatus unless they explicitly seek it. Meaning precedes technical complexity.

3. **Where can I go deeper? (എനിക്ക് എങ്ങോട്ട് കൂടുതൽ ആഴത്തിൽ പോകാം?)**  
   Every philosophical truth is an open doorway. From a verse, the user must see its foundational concepts; from a concept, its divergent interpretations across systems; from an argument, its counter-objections (*pūrvapakṣa*); and from any statement, its ultimate source provenance (*pramāṇa* and original manuscript witnesses).

### 1.2 The "Tethered Graph" Principle
A fatal flaw in modern digital knowledge gardens is the unmoored graph—a floating cloud of nodes where users wander without pedagogical orientation. In Darśana, **all knowledge is tethered**. The knowledge graph is not an aimless maze; it is organized hierarchically around existential inquiries, canonical systems, and foundational primary texts. A learner can venture arbitrarily deep into cross-references and comparative matrices while always retaining an unbreakable tether back to their point of origin.

---

## 2. Complete User Journey

The pedagogical progression of Darśana maps directly to the classical Indic intellectual continuum: *Śravaṇa* (receptive listening / introduction), *Manana* (reflective inquiry and logical analysis), and *Nididhyāsana* (deep assimilation and grounded mastery).

```text
[ 1. First Visit ] 
       │
       ▼
[ 2. What is Darśana? (ദർശനം എന്നാൽ എന്ത്?) ]
       │
       ▼
[ 3. What is Indian Philosophy? (ഭാരതീയ തത്ത്വചിന്താ പ്രപഞ്ചം) ]
       │
       ▼
[ 4. Choose / Discover a Philosophical Question (മഹാചോദ്യങ്ങൾ) ]
       │
       ▼
[ 5. Discover a System (ദർശന പരിചയം: സാംഖ്യം, യോഗം, ന്യായം...) ]
       │
       ▼
[ 6. Understand its Basic Worldview (പ്രപഞ്ചവീക്ഷണം & മുഖ്യപ്രശ്നം) ]
       │
       ▼
[ 7. Explore Concepts (തത്ത്വങ്ങളും സങ്കല്പങ്ങളും: പുരുഷൻ, പ്രകൃതി...) ]
       │
       ▼
[ 8. Encounter Primary Texts (മൂലഗ്രന്ഥങ്ങളിലേക്ക്: സാംഖ്യകാരിക...) ]
       │
       ▼
[ 9. Read Layered Verse (12-തല വായനാനുഭവം: പദച്ഛേദം, അന്വയം...) ]
       │
       ▼
[ 10. Explore Arguments (യുക്തികളും വാദമുഖങ്ങളും: പഞ്ചാവയവങ്ങൾ) ]
       │
       ▼
[ 11. Compare Traditions (താരതമ്യ വിചാരം: സാംഖ്യവും അദ്വൈതവും) ]
       │
       ▼
[ 12. Inspect Sources (ആധാരശിലകൾ: താളിയോലകൾ, ഗ്രന്ഥാലയങ്ങൾ) ]
       │
       ▼
[ 13. Move Toward Scholarly Study (ശാസ്ത്രപഠനം & ഗവേഷണം) ]
```

### 2.1 Stage-by-Stage Experience Specification
* **Stage 1 (First Visit):** Welcoming, high-contrast, uncluttered sanctuary. Ambient calm. The user is greeted with a direct existential question rather than technical catalogs.
* **Stage 2–3 (Orientation):** Clear 2-minute visual primers defining *Darśana* as an experiential "vision of reality" rather than dry academic dogma.
* **Stage 4 (Inquiry Discovery):** Entry via fundamental human concerns: suffering (*duḥkha*), the self (*ātman*), the nature of mind (*citta*), the reality of the external world (*jagat*), and the possibility of freedom (*mokṣa*).
* **Stage 5–6 (System Worldview):** Grounded orientation to a specific school (e.g., Sāṃkhya's dualism, Nyāya's epistemology). The core problem each system solves.
* **Stage 7 (Concepts):** Interactive lexical encounters where terms are unmasked with plain analogies before technical definitions.
* **Stage 8–9 (Primary Texts & Layered Reading):** First encounter with the sacred cadence of original aphorisms, supported by the 12-layer reading engine.
* **Stage 10 (Dialectics):** Dissecting arguments into proposition, reason, example, and conclusion.
* **Stage 11 (Comparative Dialectic):** Witnessing the historic debates between schools without false harmonisation.
* **Stage 12–13 (Scholarly Source Provenance):** Direct inspection of historic editions, printed witnesses, and manuscript scans verified by the Session 4 ingestion pipeline.

---

## 3. Absolute-Beginner Experience

The absolute beginner is Darśana's most sacred constituency. The interface assumes **zero prior knowledge**: no Sanskrit, no philosophical training, no acquaintance with the six orthodox systems (*ṣaḍ-darśana*), and no familiarity with technical epistemology (*pramāṇa*).

### 3.1 The "Jargon Shield" & Interactive Lexical Anchors
No Sanskrit or philosophical term may appear as inert, frightening text. Every technical term (e.g., *Prakṛti*, *Guṇa*, *Anumāna*, *Samavāya*, *Apūrva*, *Māyā*) is styled as an interactive **Lexical Anchor**:
* **Subtle Visual Cue:** A delicate dotted warm-amber underline signals interactivity without visual fatigue.
* **Tap / Hover (The Dhvani Card):** Instant display of an unhurried popover containing:
  1. *Plain Translation:* Instant everyday meaning (e.g., *Prakṛti* → "The primordial root-nature of matter and energy").
  2. *Pronunciation Guide:* Audio snippet and phonetic guide in Malayalam and English.
  3. *"Why does this matter?" (പ്രസക്തി):* A single sentence explaining its existential or logical consequence.
  4. *Deep Link:* An option to open the full Concept Explorer.

### 3.2 Progressive Disclosure: The 3-Zoom Reading Framework
Instead of overwhelming a newcomer with philological variants and Sanskrit grammatical sandhi, Darśana organizes every view into three progressive mental zoom levels:
* **Zoom Level 1: Orientation (അവബോധം):** Plain Malayalam/English translation, central idea, and the "Why this matters" existential anchor.
* **Zoom Level 2: Conceptual Rigor (വിചാരം):** The underlying philosophical argument, key concepts, word-by-word meaning (*padārtha*), and natural word order (*anvaya*).
* **Zoom Level 3: Philological Bedrock (നിർണ്ണയം):** Sanskrit text, sandhi split (*padaccheda*), traditional commentaries (*bhāṣya*), variant readings, and page-level source witnesses.

### 3.3 The Visual Analogy Archive
Indian philosophy excels at pedagogical similes (*dṛṣṭānta*). Darśana elevates these classical analogies into first-class, beautifully illustrated UI components:
* *Rope and Snake (രജ്ജു-സർപ്പ ന്യായം)* — illustrating Advaitic superimposition (*adhyāsa*).
* *Clay and Pot (മൃത്-ഘട ന്യായം)* — illustrating material causation (*upādāna-kāraṇa*).
* *Dancer and Spectator (നർത്തകീ-പ്രേക്ഷക ന്യായം)* — illustrating Sāṃkhya's Prakṛti ceasing her dance before the liberated Puruṣa.
* *Iron and Magnet (അയസ്കാന്ത ന്യായം)* — illustrating unconscious Prakṛti acting in the presence of Puruṣa.

---

## 4. Malayalam-First Architecture

Malayalam is not an afterthought or a translated UI skin; it is the **primary intellectual consciousness** of Darśana.

### 4.1 Native Conceptualization
Information architecture, taxonomy, category definitions, and pedagogical paths are conceived natively in Malayalam. The platform speaks the dignified, philosophically rich vocabulary of the Kerala intellectual tradition, which historically harmonized Vedic, Tantric, Buddhist, and literary currents.

### 4.2 Malayalam Typographic Engine
Malayalam typography requires specialized optical and structural handling due to its rounded contours, vertical conjuncts (*kūṭṭakṣaraṅṅaḷ*), chillu characters (*cillukaḷ*), and intricate vowel diacritics:
* **Font Stacks:**
  * *Display & Headings:* Customized serifs with strong calligraphic ductus (*Gayathri*, *Anek Malayalam*, *Chilanka* for contemplative poetry).
  * *Body Text:* Highly legible, optically balanced text typefaces (*Noto Serif Malayalam*, *Manjari*).
* **Line-Height Multiplier:** Standard Latin line-height (1.5) causes catastrophic collisions between Malayalam ascenders and descenders. The Malayalam line-height must be **1.85 to 2.05**.
* **Measure (Line Length):** Constrained to **55–65 characters** per line to prevent horizontal drift and reading fatigue.
* **Tracking & Kerning:** Open, unconstrained tracking. Tight tracking is strictly forbidden as it crushes complex conjuncts.

### 4.3 Sanskrit in Malayalam Script (മലയാള ലിപിയിലെ സംസ്കൃതം)
Historically, Kerala preserved one of the world's largest repositories of Sanskrit manuscripts written entirely in Malayalam script. Darśana honors this heritage:
* Any Sanskrit verse or commentary can be rendered in authentic **Malayalam Script** with complete phonetic precision (handling *visarga*, *anusvāra*, *avagraha*, and vowel lengths).
* Readers who know Malayalam script but cannot read Devanāgarī can engage directly with authentic Sanskrit texts without friction.

---

## 5. Language Switching Experience

Language switching between **Malayalam (മലയാളം)** and **Indian English** must be continuous, resilient, and non-destructive.

### 5.1 Contextual State Preservation
When the user toggles languages, the application **MUST NOT**:
* Reset to the homepage.
* Collapse open accordions or active panels.
* Reset the scroll position.
* Lose active graph node focus or zoom coordinates.
* Clear filter criteria or command palette queries.

### 5.2 Deterministic Entity Synchronization
Every URL encapsulates language at its root (`/ml/...` vs `/en/...`). Toggling language swaps the root language segment while preserving the exact path and search parameters:
* `/ml/text/samkhya-karika/verse/1?layer=padartha`  
  ↔ `/en/text/samkhya-karika/verse/1?layer=padartha`

### 5.3 Graceful Fallback Protocol
Where a localized Malayalam rendering is still in the editorial or scholarly certification pipeline:
* The UI displays the original Sanskrit alongside the verified English translation.
* A subtle, respectful provenance banner states:  
  *“ഈ ഭാഗത്തിന്റെ ആധികാരിക മലയാള പരിഭാഷ പണ്ഡിതപരിശോധനയിലാണ്. ഇംഗ്ലീഷ് പരിഭാഷ താഴെ നൽകുന്നു.”*  
  *(The authoritative Malayalam translation of this passage is under scholarly review. The English translation is provided below.)*

---

## 6. Global Information Architecture

The global architecture is pared down to four essential, mutually exclusive pillars:

```text
                                [ DARŚANA ]
                                     │
         ┌───────────────────┬───────┴───────────┬───────────────────┐
         ▼                   ▼                   ▼                   ▼
    [ തുടക്കം ]         [ ദർശനങ്ങൾ ]         [ തത്ത്വവിചാരം ]       [ ഗ്രന്ഥശാല ]
      Home                Systems              Inquiries             Library
  (Orientation &      (The 8 Schools &      (Great Questions &    (Primary Texts &
   Daily Insight)       Worldviews)            Dialectics)            Verses)
```

### 6.1 The Four Navigation Pillars
1. **തുടക്കം (Home):** The threshold. Existential questions, daily philosophical contemplations, guided onboarding pathways, and reading continuity.
2. **ദർശനങ്ങൾ (Systems):** Structural portals into the 8 classical traditions (Sāṃkhya, Yoga, Nyāya, Vaiśeṣika, Mīmāṃsā, Vedānta, Tantra, Kashmir Shaivism).
3. **തത്ത്വവിചാരം (Inquiries & Concepts):** Thematic, question-first, and comparative exploration. Cross-school dialectics, arguments, and universal concepts.
4. **ഗ്രന്ഥശാല (Library):** The philological repository. Direct access to texts, layered verse readers, commentaries, and source witness archives.

### 6.2 Secondary Global Utilities
Accessible from any screen via discrete header triggers:
* **ആഗോള തിരച്ചിൽ (Universal Search - `Ctrl/⌘K`):** Multi-script search palette.
* **വായനാക്രമം (Reading Preferences):** Guṇa theme selection, font scale, script toggles.
* **അടയാളങ്ങൾ (Bookmarks & Trail):** Locally persisted reading history and saved passages.

---

## 7. Home Experience (തുടക്കം)

The Home experience is designed as an architectural courtyard (*Muttom*) leading to intellectual sanctuaries. It actively avoids generic marketing hero banners and dashboard clutter.

```text
┌────────────────────────────────────────────────────────────────────────┐
│  [ ദർശനം / DARŚANA ]                                  [ തിരച്ചിൽ ] [ EN/മല ]│
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│              ജീവിതത്തിൽ നാം അനുഭവിക്കുന്ന ദുഃഖങ്ങൾക്ക് ശാശ്വതമായ         │
│                         പരിഹാരമുണ്ടോ?                                  │
│         "Is there a permanent resolution to human suffering?"          │
│                                                                        │
│             [ ഈ ചോദ്യം പരിശോധിക്കുക ]    [ ദർശനങ്ങളിലൂടെ തുടങ്ങുക ]      │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  [ വായന തുടരുക ] (Continue Reading)                                    │
│  സാംഖ്യകാരിക — കാരിക 3: മൂലപ്രകൃതിരവികൃതിഃ... (8 മിനിറ്റ് മുൻപ്)          │
├────────────────────────────────────────────────────────────────────────┤
│  [ മഹാചോദ്യങ്ങൾ ] (The Great Questions)                                │
│  ┌───────────────────────┐ ┌──────────────────────┐ ┌────────────────┐ │
│  │ ഞാൻ ആരാണ്?            │ │ പ്രപഞ്ചം യാഥാർത്ഥ്യമോ? │ │ അറിവ് എന്നാൽ...?│ │
│  │ (Who am I?)           │ │ (Is reality real?)   │ │ (What is truth?)│ │
│  └───────────────────────┘ └──────────────────────┘ └────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│  [ അഷ്ടദർശനങ്ങൾ ] (The Eight Systems)                                  │
│  [ സാംഖ്യം ]  [ യോഗം ]  [ ന്യായം ]  [ വൈശേഷികം ]                       │
│  [ മീമാംസ ]   [ വേദാന്തം ] [ തന്ത്രം ] [ കാശ്മീർ ശൈവം ]                     │
└────────────────────────────────────────────────────────────────────────┘
```

### 7.1 Key Elements
1. **The Contemplative Aperture:** A single profound philosophical inquiry rotated regularly or chosen deliberately by the learner.
2. **Continue Reading Shelf (വായന തുടരുക):** Instant, one-tap resumption of the user’s exact verse, text, or thread with zero login friction.
3. **The Great Questions (മഹാചോദ്യങ്ങൾ):** Direct thematic entry points for newcomers.
4. **The System Hexagram/Octagon:** Visually restrained gateway into each school's distinct worldview.

---

## 8. Philosophical Exploration Screen

The Philosophical Exploration experience is Darśana’s crowning conceptual innovation. It transforms abstract systems into structured, navigable landscapes of ideas.

### 8.1 The 7-Fold Exploration Framework
Every philosophical system features an Exploration Screen structured around seven invariant philosophical dimensions:

```text
                             [ സാംഖ്യ ദർശനം: തത്ത്വവിചാരം ]
                                          │
        ┌──────────────┬──────────────┬───┴──────────┬──────────────┬──────────────┐
        ▼              ▼              ▼              ▼              ▼              ▼
   [ പ്രശ്നം ]     [ പ്രമാണം ]    [ തത്ത്വങ്ങൾ ]  [ കാര്യകാരണം ]  [ മോക്ഷം ]   [ വാദമുഖങ്ങൾ ]
   The Problem     Epistemology     Ontology       Causation      Liberation     Dialectics
```

1. **പ്രശ്നം (The Human Problem):** The fundamental dilemma that prompted the school’s emergence (e.g., Sāṃkhya’s triple suffering: *ādhyātmika*, *ādhibhautika*, *ādhidaivika*).
2. **പ്രമാണം (Means of Valid Knowledge):** How does this school determine truth? (e.g., Sāṃkhya’s 3 pramāṇas vs Nyāya’s 4 pramāṇas vs Cārvāka’s 1 pramāṇa).
3. **തത്ത്വങ്ങൾ (Ontological Architecture):** The foundational building blocks of reality (e.g., Sāṃkhya’s 25 Tattvas).
4. **കാര്യകാരണവാദം (Theory of Causation):** How does change occur? (*Satkāryavāda*, *Vivartavāda*, *Asatkāryavāda*).
5. **ആത്മസ്വരൂപം (Nature of Self & Consciousness):** What is the observer? (Puruṣa as inactive witness vs Advaitic non-dual Brahman vs Buddhist Anattā).
6. **ബന്ധവും മോക്ഷവും (Bondage & Liberation):** Why is the self trapped, and what breaks the knot (*granthi*)?
7. **വാദമുഖങ്ങൾ (Dialectical Engagements):** The school’s historic polemics against rival traditions (*pūrvapakṣa* and *siddhānta*).

---

## 9. System Overview vs. Exploration vs. Primary Text

To prevent cognitive overload, Darśana enforces a strict tripartite separation of concerns:

| Dimension | System Overview (അവലോകനം) | Philosophical Exploration (തത്ത്വവിചാരം) | Primary Text Study (മൂലഗ്രന്ഥപഠനം) |
| :--- | :--- | :--- | :--- |
| **Primary Audience** | Curious beginners, newcomers | Systematic students, philosophy lovers | Philologists, serious learners, researchers |
| **Cognitive Goal** | Broad orientation & worldview | Conceptual mastery & relational inquiry | Textual exegesis & verse-level rigor |
| **Core Artifacts** | Summary essays, timelines, sage bios | 7-Fold Framework, ontology graphs | 12-layer reader, commentaries, witnesses |
| **Reading Mode** | Continuous narrative scrolling | Multi-dimensional node navigation | Line-by-line contemplative study |
| **Technical Jargon** | Minimal, shielded with Dhvani cards | Rigorous, contextualized with pramāṇas | Unabridged Sanskrit, sandhi, variants |

These three experiences cross-link seamlessly, but **never collapse into a single cluttered view**.

---

## 10. The 12-Layer Verse Reader

The verse reader is the philological core of Darśana. It accommodates 12 distinct analytical planes without degrading into an unreadable wall of text.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ സാംഖ്യകാരിക — കാരിക 1                                    [ ലെയറുകൾ (3/12) ] │
├────────────────────────────────────────────────────────────────────────┤
│ [Layer 1] Devanāgarī:                                                  │
│   दुःखत्रयाभिघाताज्जिज्ञासा तदपघातके हेतौ ।                           │
│   दृष्टे साऽपार्था चेन्नैकान्तात्यन्ततोऽभावात् ॥ १ ॥                   │
│                                                                        │
│ [Layer 2] Malayalam Script Sanskrit:                                   │
│   ദുഃഖത്രയാഭിഘാതാജ്ജിജ്ഞാസാ തദപഘാതകേ ഹേതൗ ।                          │
│   ദൃഷ്ടേ സാഽപാർത്ഥാ ചേന്നൈകാന്താത്യന്തതോഽഭാവാത് ॥ ൧ ॥                  │
│                                                                        │
│ [Layer 7] Malayalam Translation (സരളാർത്ഥം):                           │
│   മൂന്നുവിധ ദുഃഖങ്ങളുടെ പീഡനം നിമിത്തം അവയെ എന്നെന്നേക്കുമായി ഇല്ലാതാക്കാനുള്ള   │
│   ഉപായത്തെക്കുറിച്ചുള്ള അന്വേഷണം ജനിക്കുന്നു. പ്രത്യക്ഷമായ ലൗകികോപായങ്ങളാൽ     │
│   ഇതു സാധ്യമാണല്ലോ അതിനാൽ ഈ വിചാരം വ്യർത്ഥമെന്നു പറയുന്നതു ശരിയല്ല; കാരണം   │
│   ലൗകിക പ്രതിവിധികൾ ശാശ്വതമോ ഏകാന്തമോ ആയ ദുഃഖനിവൃത്തി നൽകുന്നില്ല.        │
├────────────────────────────────────────────────────────────────────────┤
│  ▶ [Layer 4] പദച്ഛേദം (Word Separation / Sandhi Split)                    │
│  ▶ [Layer 5] അന്വയം (Natural Word Order)                               │
│  ▶ [Layer 6] പദാർത്ഥം (Word-by-Word Lexicon)                           │
│  ▼ [Layer 9] പാരമ്പര്യ വ്യാഖ്യാനങ്ങൾ (Traditional Commentaries - 3)      │
│     • ഗൗഡപാദഭാഷ്യം (Gauḍapāda)                                         │
│     • സാങ്ഖ്യതത്ത്വകൗമുദി (Vācaspati Miśra)                             │
│  ▶ [Layer 10] ലളിത വിശദീകരണം (Beginner Explanation)                     │
│  ▶ [Layer 12] പാഠഭേദങ്ങളും ആധാരരേഖകളും (Critical Apparatus & Witnesses)   │
└────────────────────────────────────────────────────────────────────────┘
```

### 10.1 Complete Specification of the 12 Layers
1. **Devanāgarī Original (देवनागरी मूलम्):** Standard metrical layout with poetic line preservation.
2. **Malayalam Script Sanskrit (മലയാള ലിപിയിലെ സംസ്കൃതം):** Exact transliteration honoring Malayalam phonetic characters.
3. **IAST Transliteration:** Complete international diacritic precision.
4. **Padaccheda (പദച്ഛേദം):** Sandhi broken into grammatical roots and terminations.
5. **Anvaya (അന്വയം):** Prose rearrangement reflecting syntactic dependencies.
6. **Padārtha (പദാർത്ഥം):** Word-by-word Malayalam and English lexicon.
7. **Malayalam Translation (സരള മലയാള തർജ്ജമ):** Clear, idiomatic, high-register translation.
8. **Indian English Translation:** Contextual translation preserving Indic philosophical categories.
9. **Traditional Commentaries (പാരമ്പര്യ ഭാഷ്യങ്ങൾ):** Original Sanskrit/Malayalam commentary texts.
10. **Beginner Explanation (ലളിത വിശദീകരണം):** Intuitive, analogy-rich exposition for newcomers.
11. **Philosophical Analysis (തത്ത്വവിശകലനം):** Epistemic, metaphysical, and dialectical breakdown.
12. **Critical Apparatus & Source Witnesses (പാഠഭേദങ്ങളും ആധാരരേഖകളും):** Variant readings, manuscript provenance, and page image snippets.

---

## 11. Progressive Disclosure & Reader Lenses

Darśana decisively rejects rigid "User Role" selectors (e.g., forcing a user to self-identify as "Beginner" or "Scholar" via a modal). Instead, it implements **Contemplative Reading Lenses (ത്രിവിധ ദൃഷ്ടി)**:

```text
      [ സത്ത്വം (Sattva) ]         [ രജസ്സ് (Rajas) ]         [ തമസ്സ് (Tamas) ]
        Clear / Intuitive            Analytical / Deep          Philological / Bedrock
        (Layers 1, 2, 7, 10)       (Layers 1–8, 10, 11)          (All 12 Layers)
```

* **സത്ത്വ ദൃഷ്ടി (Sattva Lens - Default):** Focused on contemplative clarity. Displays Devanāgarī/Malayalam Sanskrit, Malayalam translation, and beginner explanation. All other layers remain one tap away.
* **രജോ ദൃഷ്ടി (Rajas Lens - Analytical):** Expands Padaccheda, Anvaya, Padārtha, and Philosophical Analysis.
* **തമോ ദൃഷ്ടി (Tamas Lens - Philological Bedrock):** Full critical apparatus, traditional commentaries, source witnesses, manuscript variants, and OCR page comparisons.

Readers can adjust their default lens in preferences or expand any individual layer ad-hoc without altering global settings.

---

## 12. Source Witness Experience

Grounded in the rigorous provenance model of `ROADMAP_SESSION_4.md`, every verse, commentary, and translation features verifiable connection to historical reality.

### 12.1 The "View Source" (ആധാരം കാണുക) Interaction
Clicking or tapping **ആധാരം കാണുക** opens a non-intrusive split-tray or modal:
* **Bibliographic Metadata:** Exact title, editor, translator, publication year, publisher, volume, and certified page coordinates.
* **Facsimile Snippet Viewer:** An optimized, high-resolution crop of the original printed or manuscript page from which the text was extracted.
* **Visual Coordinate Highlight:** A golden bounding box overlaying the exact passage on the historical page image.
* **OCR Confidence & Certification Badge:**  
  *“പണ്ഡിതപരിശോധിതം (Scholarly Certified)”* with timestamp and reviewer ID, or *“യന്ത്രപരിശോധിതം (Machine Extracted, Confidence: 99.4%)”*.
* **Licensing & Rights Notice:** Transparent declaration (Public Domain / CC BY-SA / Educational Fair Use).

---

## 13. Multiple Translations Experience

Translations in Indian philosophy are interpretative acts (*vyākhyāna-rūpa*). The interface teaches that differing translations reflect distinct legitimate hermeneutic traditions rather than errors.

### 13.1 Translation Comparison Engine
* **Primary Translation:** The vetted canonical Malayalam rendering sits front and center.
* **Alternate Translations Drawer:** A single toggle reveals alternate renderings (e.g., Swami Vivekananda vs. P. N. Menon vs. Dr. S. Radhakrishnan).
* **Hermeneutic Badges:** Each translation is tagged with its methodological approach:
  * *പദാനുപദം (Strictly Literal / Word-for-word)*
  * *ഭാവാത്മകം (Philosophical-Interpretive)*
  * *കാവ്യാത്മകം (Poetic / Metrical)*
* **Diff Highlighter:** Optional side-by-side comparison mode highlighting where translators diverged on key terms (e.g., rendering *Avyakta* as "Unmanifest" vs "Primordial Matter" vs "Nature").

---

## 14. Commentary Experience

Darśana rigorously separates the words of ancient/medieval commentators from modern editorial analysis.

### 14.1 Visual Anatomy of a Commentary Block
* **Commentator Header:** Portrait/iconographic emblem, commentator name in Malayalam/Sanskrit/IAST (e.g., വാചസ്പതി മിശ്രൻ / Vācaspati Miśra), approximate date (c. 9th Century CE), and philosophical lineage.
* **Textual Frame:** Set within an illuminated, subtly bordered card with distinct typography (traditional serif) to distinguish it from modern commentary.
* **Multi-Layer Commentary Text:**
  1. Original Sanskrit commentary text (Devanāgarī or Malayalam script).
  2. Malayalam commentary translation.
  3. Contextual summary (*Bhāṣya-sāra*).
  4. Sub-commentary threads (*Ṭīkā* and *Ṭippaṇī* nested hierarchically below).

---

## 15. Concept Explorer

The Concept Explorer treats philosophical concepts as living, multi-dimensional semantic entities rather than static dictionary entries.

### 15.1 Handling Polysemy & Divergent Senses
Certain words mean radically different things across systems (e.g., *Puruṣa* in Sāṃkhya is an inactive multiplicity of witness consciousnesses; in Advaita Vedānta, it is non-dual Brahman; in Nyāya, it is an individual locus of cognition).
* **Disambiguation Switcher:** Prominent tabs allow instantaneous switching between system-specific senses:
  * `[ സാംഖ്യം: സാക്ഷിചൈതന്യം ]`  
  * `[ അദ്വൈതം: നിർഗുണബ്രഹ്മം ]`  
  * `[ ന്യായം: ആത്മാവ് / ജ്ഞാനാശ്രയം ]`
* **Concept Anatomy:**
  * *Nirvacana (നിർവ്വചനം):* Exact canonical Sanskrit definition with source citation.
  * *Etymology (വ്യുല്പത്തി):* Linguistic root and formation.
  * *Existential Import (ജീവിതപ്രസക്തി):* Why this concept matters to personal liberation and mental clarity.
  * *Associated Verses (ബന്ധപ്പെട്ട സൂത്രങ്ങൾ):* Direct links to foundational occurrences.
  * *Counter-Concepts (പ്രതിയോഗി):* Concepts in opposition (e.g., *Puruṣa* ↔ *Prakṛti*; *Vidyā* ↔ *Avidyā*).

---

## 16. Argument Explorer

Indian philosophy is fundamentally dialectical (*vāda-pradhāna*). The Argument Explorer renders classical reasoning visibly and interactively.

### 16.1 The Nyāya Five-Member Syllogism (പഞ്ചാവയവങ്ങൾ)
For formal arguments, the UI renders the classical 5-step deduction as an intuitive vertical flow:

```text
┌────────────────────────────────────────────────────────┐
│ 1. പ്രതിജ്ഞ (Proposition): പർവ്വതം അഗ്നിമയമാകുന്നു.       │
│    "The mountain possesses fire."                      │
├────────────────────────────────────────────────────────┤
│ 2. ഹേതു (Reason): പുകയുള്ളതുകൊണ്ട്.                    │
│    "Because it possesses smoke."                       │
├────────────────────────────────────────────────────────┤
│ 3. ഉദാഹരണം (Exemplification / Vyāpti): അടുക്കളപോലെ.    │
│    "Where there is smoke, there is fire, as in a kitchen."│
├────────────────────────────────────────────────────────┤
│ 4. ഉപനയം (Application): ഈ പർവ്വതത്തിലും പുകയുണ്ട്.      │
│    "This mountain likewise possesses smoke."           │
├────────────────────────────────────────────────────────┤
│ 5. നിഗമനം (Conclusion): അതിനാൽ പർവ്വതം അഗ്നിമയമാണ്.   │
│    "Therefore, the mountain possesses fire."           │
└────────────────────────────────────────────────────────┘
```

### 16.2 Dialectical Tension (പൂർവ്വപക്ഷവും സിദ്ധാന്തവും)
Every major thesis is presented alongside its classical opponent's objection (*pūrvapakṣa*) and the school’s refutation (*siddhānta*), making philosophy an active courtroom of living ideas.

---

## 17. Question-Based Exploration (മഹാചോദ്യങ്ങൾ)

For many seekers, questions precede texts. The Question-Based Explorer flips the entire architecture upside down:

```text
[ ചോദ്യം: ഞാൻ ആരാണ്? (Who am I?) ]
       │
       ├─► സാംഖ്യ വീക്ഷണം: "താങ്കൾ പ്രകൃതിയല്ല, സാക്ഷിയായ പുരുഷനാണ്." (കാരിക 19)
       ├─► അദ്വൈത വീക്ഷണം: "താങ്കൾ പ്രപഞ്ചാതീതമായ അഖണ്ഡ ബ്രഹ്മമാണ്." (സൂത്രം 1.1.4)
       ├─► ന്യായം വീക്ഷണം: "താങ്കൾ ജ്ഞാനേച്ഛാപ്രയത്നങ്ങളുടെ ആശ്രയമായ ആത്മാവാണ്."
       └─► ബൗദ്ധ വീക്ഷണം: "ശാശ്വതമായ ഒരു ആത്മാവില്ല; നിരന്തര പ്രവാഹം മാത്രം."
```

Clicking any tradition’s answer leads directly into its detailed proofs, concepts, and primary verses.

---

## 18. Knowledge Graph UX

Visual graphs are employed strictly where they enhance comprehension, never as decorative technological stunts.

### 18.1 Localized "Ego-Graphs"
Rather than rendering thousands of unreadable nodes simultaneously, Darśana displays **Contextual Neighborhoods**:
* When reading about *Prakṛti*, the graph reveals only her 23 emergent evolutes (*vikāra/tattva*), their puruṣic counterpart, and the three guṇas.
* Maximum depth is constrained to 2 degrees of separation with smooth click-to-recenter dynamics.

### 18.2 Complete Non-Visual Equivalence (A11y)
Every knowledge graph features an immediate **പട്ടികാ രൂപം (Structured Table / Outline View)** toggle. Screen reader users and readers desiring tabular precision can interact with the graph’s relational data without opening an SVG canvas.

---

## 19. Comparative Philosophy UX

Comparative philosophy in Darśana is grounded in mutual integrity (*Svarūpa-rakṣā*):
* **No Artificial Harmonization:** Sāṃkhya dualism is not diluted to match Vedāntic non-dualism; Buddhist momentariness is not contorted to agree with Nyāya realism. Disagreements are honored as profound intellectual achievements.
* **Comparative Matrix Layout:** Structured tables comparing two or three traditions across specific criteria (e.g., Number of Pramāṇas, Nature of Liberation, Reality of the External World, Role of Īśvara).

---

## 20. Universal Search Experience (`Ctrl/⌘K`)

Search is Darśana’s primary cognitive locomotive.

### 20.1 Quad-Script Normalization Engine
A user can enter search terms in any script or phonetic convention:
* `sankhya` (Latin / English phonetics)
* `Sāṃkhya` (IAST with scholarly diacritics)
* `സാംഖ്യം` (Malayalam script)
* `सांख्य` (Devanāgarī script)

The query normalizer folds all four into a unified phonetic token stream, returning identical ranked results instantly.

### 20.2 Faceted Result Categorization
Search results are grouped by semantic plane:
* **സൂത്രങ്ങൾ / ശ്ലോകങ്ങൾ (Verses & Aphorisms)**
* **സങ്കല്പങ്ങൾ (Philosophical Concepts)**
* **ദർശനങ്ങൾ (Systems & Lineages)**
* **ഗ്രന്ഥങ്ങൾ (Texts)**
* **ചോദ്യങ്ങൾ (Existential Inquiries)**
* **വ്യാഖ്യാതാക്കൾ (Commentators & Thinkers)**

---

## 21. Navigation & Contextual Wayfinding

To ensure the reader is never lost inside the deep knowledge graph:

### 21.1 The Epistemic Breadcrumb
Breadcrumbs reflect conceptual nesting rather than mechanical folder paths:
`ദർശനങ്ങൾ > സാംഖ്യം > ഗ്രന്ഥങ്ങൾ > സാംഖ്യകാരിക > അധ്യായം 1 > കാരിക 3`

### 21.2 The Return-to-Origin Anchor (യാത്രാവഴി)
When a reader follows a cross-reference link from Sāṃkhya Kārikā 3 to an Advaita Vedānta concept in Brahma Sūtra, a floating, non-intrusive chip anchors to the bottom of the viewport:  
*“← സാംഖ്യകാരിക 3-ലേക്ക് മടങ്ങുക (Return to Sāṃkhya Kārikā 3)”*.

---

## 22. URL & Deep-Link Experience

In accordance with Sessions 2 and 3, all URLs are human-readable, semantic, canonical, and shareable:

* `/ml/system/samkhya` — Sāṃkhya system overview.
* `/ml/system/samkhya/explore` — Sāṃkhya 7-fold philosophical exploration.
* `/ml/text/samkhya-karika` — Sāṃkhya Kārikā text overview and index.
* `/ml/text/samkhya-karika/verse/1` — Verse 1 reading environment.
* `/ml/concept/purusha` — Concept page for Puruṣa.
* `/ml/inquiry/nature-of-self` — Comparative inquiry into the Self.
* `/ml/source/sampurnanand-sk-1953` — Source witness record and metadata.

Every reading layer, active filter, and search query is serializable into URL query parameters.

---

## 23. Visual Design Language: The Temple Sanctuary

The aesthetic philosophy of Darśana is **The Digital Palm-Leaf & Temple Stone (താളിയോലയും ശിലാശാസനങ്ങളും)**. It evokes the silent stone corridors of ancient Indian libraries (*Jnāna-bhāṇḍāra*), palm-leaf manuscripts inscribed with iron styluses, and the contemplative stillness of deep study.

### 23.1 Design Principles
* **Austere Dignity:** Zero bright neon gradients, zero arbitrary glassmorphism, zero floating marketing badges.
* **Warm Neutrality:** Backgrounds and surfaces carry warm organic undertones reflecting aged handmade paper, terracotta clay, and granite stone.
* **Typographic Supremacy:** 85% of visual delight derives from masterful typographic pairing, generous negative space, and rhythmic line heights.

---

## 24. Theme & Color Architecture

Color in Darśana is rooted in the metaphysics of the **Three Guṇas** from Sāṃkhya philosophy:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ THE SĀṂKHYA GUṆA PALETTE                                               │
├────────────────────────────────────────────────────────────────────────┤
│ • അവ്യക്തം (Avyakta Ground): Deepest Void / Ground Canvas                │
│   Dark: #141420 (Ink Night)        Light: #FBF9F4 (Warm Palm Parchment)│
│                                                                        │
│ • സത്ത്വം (Sattva - Clarity & Illumination): Text & Wisdom Accents      │
│   Dark: #F4ECD8 (Warm Ivory)       Light: #2A2825 (Soot Ink)           │
│                                                                        │
│ • രജസ്സ് (Rajas - Energy & Movement): Interactive & Dialectic Accents    │
│   Dark: #C66C55 (Terracotta Red)   Light: #A64B35 (Deep Cinnabar)      │
│                                                                        │
│ • തമസ്സ് (Tamas - Stability & Structure): Borders, Hairlines & Metals   │
│   Dark: #494D5A (Weathered Slate)  Light: #D8D2C5 (Granite Sand)       │
│                                                                        │
│ • പുരുഷൻ (Puruṣa - Pure Witness): Philosophical Highlights & Insight   │
│   Dark: #A48CE8 (Lavender Amethyst) Light: #654CA8 (Deep Violet)       │
└────────────────────────────────────────────────────────────────────────┘
```

### 24.1 High-Contrast Readability Standards
All text-to-background combinations achieve a minimum contrast ratio of **7:1** for body text and **4.5:1** for secondary captions, easily exceeding WCAG 2.2 AAA thresholds.

---

## 25. Motion Design: Contemplative Physics

Motion in Darśana is calm, purposeful, and reverent. It is never used for kinetic distraction.

### 25.1 Motion Tokens & Physics
* **Tokens:**
  * `--duration-instant: 0ms` (for reduced-motion mode)
  * `--duration-fast: 140ms` (for micro-interactions, tooltips)
  * `--duration-base: 220ms` (for panel transitions, card expansions)
  * `--duration-slow: 340ms` (for modal sheets, graph recentering)
* **Easing Curve:** `cubic-bezier(0.2, 0, 0, 1)` — a serene settle with zero unnatural bounce or elastic wobble.

### 25.2 Reduced Motion Invariant
When `prefers-reduced-motion: reduce` is active:
* All spatial movements (translate, scale, rotate) are eliminated.
* Transitions collapse to subtle cross-fades or immediate state updates.

---

## 26. Data Visualization Language

Visualizations in Darśana are austere philosophical schematics, avoiding decorative 3D effects.

### 26.1 Visualization Formats
1. **Tattva Trees (തത്ത്വോല്പത്തി ക്രമം):** Strict vertical and branching hierarchical diagrams showing metaphysical evolution (e.g., *Avyakta → Mahat → Ahaṃkāra → Tanmātras & Indriyas*).
2. **Epistemological Flowcharts (പ്രമാണ ചക്രം):** Directed graphs illustrating how sense data is processed into valid cognition (*pramā*) or distorted into error (*viparyaya*).
3. **Pūrvapakṣa-Siddhānta Scales:** Balanced balance-beam schematics showing objections and orthodox resolutions.

---

## 27. Mobile-First Architecture

Over 70% of readers in Kerala and the global diaspora engage with texts on mobile phones. Darśana is designed for single-handed mobile contemplation.

### 27.1 Mobile Ergonometrics
* **The 44px Invariant:** All interactive touch targets (links, buttons, accordion headers, chips) maintain a minimum dimension of **44×44 CSS pixels**.
* **Thumb Zone Architecture:** Primary actions (layer toggles, search trigger, next/previous verse paging) reside in the lower half of the screen.
* **Bottom Sheets over Center Modals:** Lexical popups, source witness scans, and commentary drawers slide smoothly from the bottom, preventing awkward thumb-stretching.
* **Overscroll Containment:** Horizontal swiping between verses has strict `overscroll-behavior-x: none` to prevent accidental browser history traversal.

---

## 28. Accessibility Architecture (WCAG 2.2 AA Compliance)

Darśana is an inclusive sanctuary open to all seekers regardless of physical or cognitive ability.

### 28.1 Key Accessibility Measures
* **Full Keyboard Operability:** Every function (searching, expanding layers, navigating verses, opening sources) is reachable via keyboard alone.
* **Visible Focus:** High-contrast 2px Sattva-ivory perimeter ring (`outline-offset: 2px`) on all focused elements.
* **Screen Reader Semantic Tree:** Proper ARIA role tagging (`role="region"`, `aria-expanded`, `aria-controls`, `aria-describedby` for lexical anchors).
* **Phonetic Pronunciation Hints:** Hidden screen-reader attributes translating complex conjuncts into phonetically smooth sequences for assistive synthesizers.

---

## 29. Component Architecture (Conceptual Topology)

To guarantee modularity, maintainability, and clean separation of concerns, the future Darśana interface is built from 16 canonical conceptual UI primitives:

```text
┌────────────────────────┬────────────────────────┬────────────────────────┐
│ Navigation & Shell     │ Reading & Exegesis     │ Exploration & Graph    │
├────────────────────────┼────────────────────────┼────────────────────────┤
│ • AppShell             │ • VerseReader          │ • SystemExplorer       │
│ • BreadcrumbTrail      │ • LayerAccordion       │ • ConceptCard          │
│ • SearchPalette        │ • LexicalAnchor        │ • ArgumentFlow         │
│ • BottomSheetTray      │ • CommentaryBlock      │ • TattvaGraph          │
│ • LanguageSwitcher     │ • SourceWitnessModal   │ • ComparativeMatrix    │
│ • GuṇaThemeToggle      │ • TranslationDiffView  │ • InquiryCarousel      │
└────────────────────────┴────────────────────────┴────────────────────────┘
```

---

## 30. Responsive Layout Architecture

Page layouts adapt intelligently across viewport breakpoints:

```text
[ Large Desktop: 1440px+ ]
┌─────────────────┬──────────────────────────────────┬─────────────────┐
│ Left Navigation │ Main Content Canvas              │ Right Auxiliary │
│ (Systems/Texts) │ (12-Layer Verse / Concept Study) │ (Witness/Graph) │
└─────────────────┴──────────────────────────────────┴─────────────────┘

[ Laptop & Tablet: 768px – 1439px ]
┌──────────────────────────────────────────────┬───────────────────────┐
│ Main Reading Stream (Full Width)             │ Collapsible Inspector │
│ (Sanskrit, Translations, Commentaries)       │ (Lexicon, Sources)    │
└──────────────────────────────────────────────┴───────────────────────┘

[ Mobile Phone: < 768px ]
┌──────────────────────────────────────────────────────────────────────┐
│ Sticky Header (Title, Search, Language)                              │
├──────────────────────────────────────────────────────────────────────┤
│ Single Vertical Flow (Verse, Meaning, Selected Layers)               │
├──────────────────────────────────────────────────────────────────────┤
│ Bottom Sheets on Demand (Lexicon, Source Witnesses, Graph Nodes)     │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 31. Cognitive Load Management

Information overload is the greatest enemy of spiritual and philosophical comprehension.

### 31.1 Anti-Overwhelm Safeguards
1. **The "Quiet Canvas":** Zero floating badges, zero unread-count badges, zero promotional prompts.
2. **Defensive Disclosure:** A screen never reveals more than two levels of semantic depth at once without explicit user intent.
3. **Generous Whitespace:** Minimum container paddings and line-heights ensure the eye never feels cornered.

---

## 32. Error, Empty & Uncertainty States

Intellectual honesty demands that uncertainties in historical sources be communicated transparently.

### 32.1 Specific Uncertainty Patterns
* **Uncertain Manuscript Reading:** Rendered with a delicate dotted box accompanied by an explanatory note:  
  *“ഈ പാഠഭേദത്തിൽ പണ്ഡിതന്മാർക്കിടയിൽ ഭിന്നാഭിപ്രായമുണ്ട് (Scholars diverge on this reading).”*
* **Pending Malayalam Translation:** Clean placeholder showing original Sanskrit and certified English, with a calm status notice indicating translation is underway.
* **Low OCR Confidence Warning:** Clear notification when an unreviewed scan snippet is shown, inviting scholarly scrutiny.

---

## 33. Offline & PWA Experience

Integrating Session 2’s offline specification:
* **Selective System Download:** Users can download an entire Darśana (e.g., "Sāṃkhya - Complete Corpus with Commentaries", ~8 MB) for 100% offline study during retreats or travel.
* **Storage Manager:** Accessible settings screen showing storage consumption and cache status.
* **Fail-Silent Search:** Offline client-side search index continues to operate smoothly when offline.

---

## 34. First-Time Experience (Frictionless Sanctuary)

When a reader visits Darśana for the first time:
* **Zero Interruption:** No cookie banners, no sign-up popups, no mandatory onboarding carousels.
* **Immediate Intellectual Immersion:** The user is instantly placed in front of an inspiring, accessible question with immediate answers.
* **Silent Local Defaults:** Automatically detects language preference (defaulting to Malayalam with English toggle immediately visible).

---

## 35. Local-First Personalization

All personal user data is stored strictly on the user’s device using `localStorage` and `IndexedDB`:
* **Bookmarks Shelf:** Verses, concepts, and arguments marked for contemplation.
* **Reading Progress:** Per-system and per-text completion markers.
* **Custom Reading Preferences:** Preferred lens (Sattva/Rajas/Tamas), custom font scaling (100% / 112.5% / 125%), and Guṇa theme preference.

---

## 36. Design System Token Specifications

```text
SPACING TOKENS:
  --space-2xs: 0.25rem (4px)    --space-sm: 0.75rem (12px)   --space-lg: 1.5rem (24px)
  --space-xs:  0.5rem (8px)     --space-md: 1.0rem (16px)    --space-xl: 2.25rem (36px)

TYPOGRAPHY TOKENS:
  --font-display: "Fraunces", serif
  --font-serif: "Cormorant Garamond", serif
  --font-sans: "Inter", sans-serif
  --font-malayalam-body: "Noto Serif Malayalam", serif
  --font-malayalam-display: "Gayathri", serif
  --font-sanskrit: "Noto Serif Devanagari", serif

LINE-HEIGHT TOKENS:
  --leading-tight: 1.25         --leading-normal: 1.6        --leading-malayalam: 1.95
```

---

## 37. Comprehensive Screen Inventory

The future Darśana web environment comprises 15 primary screens and 8 contextual drawers/modals:

### Primary Screens
1. **ഹോം / തുടക്കം (Home Screen)**
2. **ദർശന അവലോകനം (System Overview Screen)**
3. **ദർശന തത്ത്വവിചാരം (Philosophical Exploration Screen)**
4. **ഗ്രന്ഥ സൂചിക (Text Index & Table of Contents)**
5. **മൂലഗ്രന്ഥ വായനശാല (12-Layer Verse Reader Screen)**
6. **സങ്കല്പ നിഘണ്ടു (Concept Explorer Screen)**
7. **വാദവിചാരം (Argument & Dialectics Screen)**
8. **മഹാചോദ്യങ്ങൾ (Question-Based Exploration Screen)**
9. **താരതമ്യ തത്ത്വവിചാരം (Comparative Philosophy Screen)**
10. **ആഗോള തിരച്ചിൽ (Dedicated Full-Screen Search Screen)**
11. **പഠനവഴികൾ (Curated Learning Paths Screen)**
12. **ആധാരശിലകൾ (Source Witness Archive Screen)**
13. **ഗ്രന്ഥകാരന്മാരും വ്യാഖ്യാതാക്കളും (Thinkers & Commentators Screen)**
14. **വായനാ ചരിത്രവും അടയാളങ്ങളും (Bookmarks & Trail Screen)**
15. **ക്രമീകരണങ്ങളും സംഭരണവും (Settings & Offline Storage Screen)**

### Contextual Overlays (Drawers & Modals)
1. **ആധാരരേഖ പരിശോധന (Source Witness Inspection Modal)**
2. **ത്വരിത ശബ്ദതാരാവലി (Dhvani Lexical Tooltip / Bottom Sheet)**
3. **തർജ്ജമാ താരതമ്യം (Translation Comparison Drawer)**
4. **പാരമ്പര്യ ഭാഷ്യങ്ങൾ (Commentary Inspector Panel)**
5. **ദ്രുത തിരച്ചിൽ പലക (Command Palette `Ctrl/⌘K`)**
6. **വായനാക്രമം പലക (Reading Preferences Palette)**
7. **സൂത്ര നാവിഗേറ്റർ (Verse Jumper / Pager)**
8. **പൂർവ്വപക്ഷ-സിദ്ധാന്ത താരതമ്യം (Dialectic Split Panel)**

---

## 38. Complete User Flow Diagrams

### Flow A: The Absolute Beginner
```text
[ Home ] 
   │ Tap "ഞാൻ ആരാണ്? (Who am I?)"
   ▼
[ Question Explorer: Nature of Self ]
   │ Select "സാംഖ്യ വീക്ഷണം (Sāṃkhya View)"
   ▼
[ Sāṃkhya System Overview ]
   │ Tap Dhvani card on "സാക്ഷിചൈതന്യം (Witness Consciousness)"
   ▼
[ Concept Explorer: Puruṣa ]
   │ Tap "Foundational Occurrence"
   ▼
[ Sāṃkhya Kārikā 19 (Layered Reader - Sattva Lens) ]
```

### Flow B: The Philological Researcher
```text
[ Library ] 
   │ Select "Sāṃkhya Kārikā"
   ▼
[ Verse Reader: Verse 1 ]
   │ Activate "തമോ ദൃഷ്ടി (Tamas Lens)"
   ▼
[ Inspect Padaccheda, Anvaya & Gauḍapādabhāṣya ]
   │ Click "ആധാരം കാണുക (View Source)"
   ▼
[ Source Witness Modal: High-res crop of 1953 Sampurnanand Edition, p. 4 ]
```

---

## 39. Current Repository Gap Analysis

An audit of the existing codebase (`src/components/*` and `src/content/*`) against the authoritative specifications of Sessions 1–5 reveals:

| Component | Current State | Future Roadmap Action |
| :--- | :--- | :--- |
| `src/App.tsx` | Basic client HashRouter with simple header jump | **Redesign** into 4-pillar shell supporting deep links & persistent breadcrumbs |
| `src/components/Home.tsx` | Simple list of systems | **Redesign** into Contemplative Aperture + Great Questions + Systems portal |
| `src/components/SystemDetail.tsx` | Flat text view with text links | **Refactor** into System Overview vs. 7-Fold Philosophical Exploration |
| `src/components/TextIndex.tsx` | Accordion list of verses | **Retain & Refactor** to support multi-layered metadata and thread progress |
| `src/components/VerseDetail.tsx` | Basic translation and notes | **Replace** with the 12-Layer Verse Reader and Reading Lens engine |
| `src/components/ConceptDetail.tsx`| Text-based concept cards | **Refactor** into the Polysemic Concept Explorer |
| `src/components/SearchPalette.tsx`| Basic string matcher | **Upgrade** to Quad-script normalizer (`Ctrl/⌘K`) with faceted grouping |
| `src/components/diagrams.ts` | Hardcoded SVG diagrams | **Migrate** into accessible, thematic Data Visualization Engine |
| `src/utils/theme.ts` | Basic Tailwind colors | **Align** with the authoritative Sāṃkhya Guṇa Palette tokens |

---

## 40. Unresolved Design Decisions (Deliberately Postponed)

To ensure maximum design agility during prototyping, the following implementation choices are deliberately deferred to implementation sprints:
1. **Specific Interactive Graph Library:** Final selection between a pure SVG/D3 engine, React Flow, or Canvas/Pixi.js is postponed until performance benchmarking with 100+ nodes on low-end Android mobile devices.
2. **Specific Malayalam Custom Webfont Hosting:** Final decision on self-hosting variable WOFF2 fonts vs serving from Google Fonts CDN is deferred to bundle optimization.
3. **Page Snippet Zoom Engine:** Final choice between OpenSeadragon (tiled deep zoom) and simple CSS transform pinch-zoom is deferred to witness asset ingestion.

---

## 41. Architectural Consequences for Session 6

This document establishes the binding blueprint for **Session 6 (Design System Prototyping & Client Shell Implementation)**:
1. Session 6 must implement the **Guṇa Design System Tokens** in Tailwind CSS and CSS Custom Properties.
2. Session 6 must build the foundational accessible primitives (`LexicalAnchor`, `LayerAccordion`, `VerseReader`, `SourceWitnessModal`).
3. Session 6 must construct the **4-Pillar Application Shell** with language and deep-linking parity.

---

## 42. Charter Status

This document is **FROZEN & IMMUTABLE**. It forms the definitive, authoritative UX and Visual Architecture specification for Darśana. No feature, layout, or visual component may be introduced in subsequent phases that violates the principles established herein.

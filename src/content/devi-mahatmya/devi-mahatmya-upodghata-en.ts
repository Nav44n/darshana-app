// Guptavati Upodghata (Introduction) - English paraphrase/digest
// Source: DurgaSaptashati_pages_1-30.txt - the Upodghata (introductory section)
// of Bhaskararaya Dikshita's 18th-century Durga-saptasati commentary "Guptavati",
// as printed in a modern "Guptavaty-adi-sapta-tika-samvalita" edition.
//
// This file is a substantive PARAPHRASE, not a translation or transcription.
// The bulk of this specific printed edition's front matter is not reproduced
// verbatim/in full - see gv-00-provenance for what is and isn't ancient/public-domain
// material here. Each entry below explains one topic block in the author's own
// argument, in plain English, with only short illustrative Sanskrit tags (a few
// words) rather than full verses.

export interface UpodghataTopicEn {
  id: string;
  title: string;
  sanskritTag: string;
  summary: string;
  keyPoints: string[];
}

export const guptavatiUpodghataEn: UpodghataTopicEn[] = [
  {
    id: 'gv-00-provenance',
    title: 'What this document actually is',
    sanskritTag: `इति ... भास्कररायदीक्षितमहाग्निचिता रचितायाम् ... उपोद्घातप्रकरणं सम्पूर्णम्`,
    summary: `The colophon at the end names the author outright: Bhāskararāya Dīkṣita (also called Bhāratī), son of Gambhīrarāya Dīkṣita, "great Agnicit" (a title for one who has performed the Agnicayana rite) - the well-known 18th-century (c. 1690-1785) polymath and Śrīvidyā authority. This confirms the core Upodghāta is his own introduction to his celebrated Durgā-saptaśatī commentary named 'Guptavatī' ('the concealing/concealed one'), not a modern preface. A separate, unrelated opening invocation (naming one Harikṛṣṇa, son of Vyaṅkaṭa, describing a Jyotiṣārṇava compilation on Durgā-worship) precedes it in this file and appears to belong to a different, later work bound together with it in this particular printed edition.`,
    keyPoints: [
      "**Two different authors, one file**: A later Harikrishna invocation opens the file; the substantial Upodghata itself is Bhaskararaya's own 18th-century introduction.",
      "**Not modern front matter**: This is a centuries-old scholarly introduction, not something newly written for a recent printing."
    ]
  },
  {
    id: 'gv-01-title-purpose',
    title: 'Bhaskararaya\'s own account of his purpose',
    sanskritTag: `सप्तशती लुप्तसृतीराप्तवती ... गुप्तवती बिभ्रतीं विवृतिम् मम तु नाम`,
    summary: `In a set of self-introductory verses, Bhaskararaya explains why he named his commentary 'Guptavati'. He describes the Saptashati as having lost some of its transmitted meanings over time, and presents his own commentary as recovering ('attaining') those lost threads - hence a name built on the idea of uncovering what had become hidden or concealed. He notes that earlier commentators approached the text from the angles of poetics, grammar, logic, and Upanishadic philosophy respectively, each producing genuinely admirable but partial readings, and positions his own work as aiming specifically at the practical ritual sense needed by someone actually reciting the text, performing japa, homa and tarpana - not just admiring it as literature or philosophy.`,
    keyPoints: [
      "**A name with a purpose**: 'Guptavati' signals recovering meanings the author felt earlier readers had let slip.",
      "**A stated gap in prior commentaries**: Earlier commentaries (poetic, grammatical, logical, Vedantic) are praised but described as missing the practical ritual angle this one supplies."
    ]
  },
  {
    id: 'gv-02-toc-fourteen-verses',
    title: 'The fourteen-verse table of contents',
    sanskritTag: `उपोद्धातप्रकरणं प्रथमं परिकीर्तितम् ... तत्र चादौ वक्ष्यमाणार्थानुक्रमणीश्लोकाश्चतुर्दश`,
    summary: `Bhaskararaya opens with a fourteen-verse index describing exactly what his Upodghata will cover, in order: (1) an auspicious opening and summary of the whole work's subject matter; (2) the meaning of the words 'Chandi' and 'Saptashati' themselves; (3) the extraction (uddhara) of the nine-syllable Navarna mantra from within the text, with its meaning; (4) how the mantra relates to the wider hymn; (5) praise of the term 'Saptashati'; (6) the practice of 'undoing the curse' (shapoddhara) and 'removing the nail' (utkilana) said to restrict the text's power, plus the order of recitation; (7) the meaning of the Kavacha, Argala and Kilaka (protective auxiliary texts); (8) the 'guru-kilaka' passage found in the Rahasya-tantra section; (9)-(12) a running explanatory digest of all three caritas (episodes) and their chapters; (13)-(14) explanation of the three esoteric appendices (Prathanika, Vaikritika and Murti Rahasya) and a closing index. This is essentially the chapter plan for everything that follows in the fuller commentary.`,
    keyPoints: [
      "**A stated roadmap**: Fourteen verses lay out, topic by topic, everything the fuller work will cover.",
      "**Two special practices flagged early**: Shapoddhara and Utkilana are treated as necessary preliminaries, not optional extras."
    ]
  },
  {
    id: 'gv-03-meaning-of-chandi',
    title: 'What \'Chandi\' means - the philosophical argument',
    sanskritTag: `चण्डी परब्रह्मणः पट्टमहिषी देवता`,
    summary: `Bhaskararaya first states plainly that Chandi is the chief queen-deity of the supreme Brahman - not a lesser or merely fierce local goddess. He then defends the word's derivation at length: though 'chand' as a verbal root ordinarily means 'anger', he argues (citing multiple Upanishadic and epic passages on fearsome divine power, e.g. the idea that the sun, wind, fire and death themselves move only out of fear of Brahman) that this very fierceness/wrath is itself read in the tradition as a mark of ultimate, unconditioned power - not a flaw needing explaining away. He then works through a purely grammatical derivation showing how the feminine agent-noun 'Chandi' can be legitimately formed from this root, satisfying both the philosophical and technical-grammatical objections a Sanskrit pandit would raise.`,
    keyPoints: [
      "**Fierceness as attribute of the Absolute, not a lesser trait**: The 'wrath' in the name is argued to be a mark of supreme power, not something needing to be softened.",
      "**Philology in service of theology**: A technical grammatical derivation is built specifically to support the philosophical claim."
    ]
  },
  {
    id: 'gv-04-shakti-as-brahman',
    title: 'The philosophical excursus on Shakti and Brahman',
    sanskritTag: `एकमेव ब्रह्मानादिसिद्धया धर्मी धर्मश्चेति द्विविधमभूत् ... इच्छादिरूपा`,
    summary: `This is the densest philosophical section of the Upodghata. Bhaskararaya argues, drawing on Advaita-adjacent Kashmir Shaiva/Shakta sources (including material paralleling the Shiva-sutras and Trika vocabulary - consciousness, spanda/vibration, self-awareness), that non-dual Brahman itself has two inseparable aspects: the substrate (dharmin) and its own innate power or 'nature' (dharma) - and that this dharma-aspect is precisely what is meant by 'Shakti'. He distinguishes this primordial divine cognition/will/action from the limited, fragmented cognition of ordinary embodied beings, and traces how the single undifferentiated Shakti differentiates into a triad - Mahakali, Mahalakshmi and Mahasarasvati - corresponding to will, action and knowledge respectively, each subdivided further (e.g. Vama/Jyestha/Raudri; Pashyanti/Madhyama/Vaikhari; Brahma/Vishnu/Rudra) across different tantric schemes. He closes the point by quoting a verse attributed to Shankaracharya addressing the Goddess as 'immeasurable in glory' and 'the fourth' beyond the named triad, tying his exposition back to a revered non-sectarian authority.`,
    keyPoints: [
      "**Shakti defined technically**: Not a separate being alongside Brahman, but Brahman's own inherent power/nature (dharma), argued in formal philosophical terms.",
      "**One power, three names**: A single undivided Shakti is presented as differentiating into Mahakali/Mahalakshmi/Mahasarasvati by function (will/action/knowledge).",
      "**A citation to Shankaracharya**: The argument is anchored, at its close, to a verse ascribed to Adi Shankara addressing the Goddess as beyond even that triad."
    ]
  },
  {
    id: 'gv-05-navarna-mantra-uddhara',
    title: 'Deriving the nine-syllable Navarna mantra from the opening verse',
    sanskritTag: `सावर्णिः सूर्यतनयो यो मनुः कथ्यतेऽष्टमः। निशामय तदुत्पत्तिं विस्तराद्गदतो मम॥`,
    summary: `This is a showcase of the classical tantric technique of mantroddhara: extracting a seed-mantra hidden letter-by-letter inside an ordinary narrative verse. Working through the text's very first verse, Bhaskararaya walks through more than one traditional derivation offered by earlier authorities, each treating individual syllables (or their positions counted from the start/end of the Sanskrit alphabet, e.g. 'the eighth letter from Ya', 'the fourteenth vowel') as coded pointers to the bijas Aim, Hrim and Klim - the three seed-syllables that together make up the Navarna ('nine-syllabled') mantra central to Durga worship. He also gives his own preferred derivation, differing in some technical particulars, and cross-checks the result against parallel extractions given for this same mantra in other tantras (e.g. the Yoginī-tantra). He is explicit that more than one derivation-path exists and that this diversity itself is treated in the tradition as unproblematic, since scriptural language is held to speak 'in every direction' (sarvatomukha).`,
    keyPoints: [
      "**Hidden mantra, visible verse**: An entire liturgical seed-mantra is presented as encoded, letter by letter, in the text's opening narrative verse.",
      "**Multiple valid derivations accepted**: Bhaskararaya offers his own extraction alongside others', treating the plurality itself as expected rather than a contradiction to be resolved."
    ]
  },
  {
    id: 'gv-06-chamunda-etymology',
    title: 'Why the Goddess is called Chamunda',
    sanskritTag: `यस्माच्चण्डं च मुण्डं च गृहीत्वा त्वमुपागता। चामुण्डेति ततो लोके ख्याता देवी भविष्यसि`,
    summary: `Bhaskararaya surveys several proposed derivations of 'Chamunda' beyond the narrative one given in the text itself (that she is so named for having brought back the heads of the demons Chanda and Munda). He offers a philosophical reading in which 'Chanda' and 'Munda' stand allegorically for two kinds of ignorance (gross and subtle), so that 'Chamunda' becomes a name for the very knowledge of Brahman that removes both. He also works through purely grammatical derivations (from roots meaning 'to devour' or 'to shave/cut away what is lesser than the essential'), and notes a reading from Gaudapada's commentary tradition in which 'having a body' versus 'bodilessness', mapped onto 'munda' and 'a-munda', yields the compound sense 'Chamunda'. As with the Navarna derivation, multiple explanations are laid out side by side rather than one being declared exclusively correct.`,
    keyPoints: [
      "**A name read on two levels at once**: The narrative sense (heads of two demons) sits alongside an allegorical sense (two kinds of ignorance overcome).",
      "**Grammar mobilised for theology, again**: Root-by-root derivations are used to defend a philosophical reading of the name."
    ]
  },
  {
    id: 'gv-07-vichche-and-navarna-meaning',
    title: 'The meaning of \'Vichche\' and the full sense of the Navarna mantra',
    sanskritTag: `विच्चे इति तु वित् च इ इति पदत्रयात्मकं ... सङ्ग्रहः - महासरस्वति चिते महालक्ष्मि सदात्मके...`,
    summary: `The closing syllable-cluster 'vichche' of the Navarna mantra is analysed as a compressed address meaning roughly 'O empress of bliss-consciousness' - built from elements read as pointing to knowledge (vit) and to the vocative feminine ending. Bhaskararaya then gives a plain-sense paraphrase of the whole nine-syllable mantra as an invocation: 'O Mahasarasvati of the nature of consciousness, O Mahalakshmi of the nature of being, O Mahakali of the nature of bliss - we meditate upon you in the lotus of the heart, for the attainment of knowledge of your true nature.' He also notes and briefly addresses the technical question of why the seed-syllable usually associated with Mahalakshmi elsewhere (Shrim) differs slightly from the one used here (Hrim), treating the two as functionally near-identical (an argument he supports by pointing to variant Vedic readings of a parallel phrase) rather than as a discrepancy requiring resolution.`,
    keyPoints: [
      "**A working translation of the mantra is given**: Bhaskararaya glosses the entire nine syllables as a single coherent prayer to consciousness, being and bliss addressed as three goddess-forms.",
      "**Minor variant, not a contradiction**: A seed-syllable inconsistency across texts is treated as an accepted variation rather than an error."
    ]
  },
  {
    id: 'gv-08-why-called-seven-hundred',
    title: 'Why the text is called \'Saptashati\' (seven hundred) at all',
    sanskritTag: `अस्य सप्तशतीति व्यवहारस्तु न श्लोकसंख्यया ... सप्तानां सतीनां देवीनां प्रतिपादनादेव तथा व्यवहारः`,
    summary: `This section tackles a real puzzle noted by commentators for centuries: depending on edition and how one counts, the text runs anywhere from about 578 to under 700 full verses - never a literal 700 - so why is it called the 'Seven Hundred'? Bhaskararaya rejects several proposed solutions (that it refers to seven named goddess-forms, or to combining the text with its three esoteric appendices, both of which he finds produce the wrong totals) and instead favours reading 'sapta-shati' as 'the [text] proclaiming the seven [true/eternal] goddesses' (from 'sati', 'the true/existent one', rather than literally counting to 700), noting that homophony between 's' and 'sh' sounds in the tradition supports this reading. He also reconciles the varying verse-counts across different named tantras (Katyayani-tantra, Yamala-tantra, Varahi-tantra) by comparing it to the way different Vedic shakhas or different Puranic recensions of the same core material can legitimately vary in length while still being treated as authoritative versions of one text.`,
    keyPoints: [
      "**The name isn't a literal verse-count**: 'Seven hundred' is argued to encode a different meaning (seven true goddess-forms) rather than being a strict tally.",
      "**Cross-recension variation is treated as normal**: Differing verse-counts across parallel tantric sources are explained the way Vedic shakha-variation is - not as corruption."
    ]
  },
  {
    id: 'gv-09-dhyana-verses-three-forms',
    title: 'The three meditation (dhyana) images: Mahakali, Mahalakshmi, Mahasarasvati',
    sanskritTag: `खड्गं चक्रगदेषुचापपरिघान् शूलं भुशुण्डीं शिरः शवं सन्दधतीं करैस्त्रिनयनां...`,
    summary: `Before describing the ritual worship (puja) proper, three dhyana-verses are given, each visualising one of the three principal forms invoked across the text's three episodes: a dark-complexioned, three-eyed Mahakali bearing a sword, discus, mace, arrows, bow, iron-club, trident, a skull-topped staff and a severed head, adorned in every limb; a lotus-seated, demon-subduing Mahalakshmi holding an array of weapons and a conch, bell and vessel; and a Gauri-born Mahasarasvati, radiant as the moon behind clouds, holding a bell, trident, plough, conch, pestle, discus, bow and arrows, described as the support of the three worlds and destroyer of Shumbha and the other demons. These visualisations are meant to be held in mind before internal worship (antaryaga) and then externalised into the ritual diagram (yantra).`,
    keyPoints: [
      "**Three distinct iconographic forms**: Each goddess-name is paired with a specific, detailed visual image to be meditated on, not treated as interchangeable.",
      "**Meditation precedes ritual**: The text explicitly sequences inner visualisation (dhyana) before the external yantra-worship."
    ]
  },
  {
    id: 'gv-10-yantra-and-purashcharana',
    title: 'The ritual diagram (yantra) and preliminary practice (purashcharana)',
    sanskritTag: `लिखेदष्टदलं पद्मं कुङ्कुमागरुचन्दनैः। पद्ममध्ये लिखेच्चक्रं षट्कोणं चण्डिकामयम्`,
    summary: `Instructions are given for drawing an eight-petalled lotus in saffron, aloeswood and sandalwood paste, with a six-pointed diagram at its centre representing the Goddess, on which the mantra's seed-syllables are placed petal by petal in a specified clockwise order. Two alternative purashcharana (preliminary mantra-mastery practice) schedules are then given - one requiring 400,000 recitations of the Navarna mantra with a tenth of that number offered in fire-oblation (homa) using items like milk-sweetened rice, and another tied to a specific lunar fortnight and set of dates. Both versions are to be 'enclosed' (samputita) within recitations of the main Saptashati text itself, a practice justified by a citation from the Damara-tantra describing this combination as the reliable way to attain one's wish.`,
    keyPoints: [
      "**A concrete ritual diagram, precisely specified**: Materials, shape and syllable-placement are all given in exact procedural detail.",
      "**Purashcharana and Saptashati-recitation are linked, not separate**: The mantra-practice is meant to be framed within, not performed apart from, reciting the full text."
    ]
  },
  {
    id: 'gv-11-further-bija-extractions',
    title: 'Further seed-syllables extracted from later verses',
    sanskritTag: `मेधासि देवि विदिताखिलशास्त्रसारा ... दुर्गासि दुर्गभवसागरनौरसङ्गा`,
    summary: `Beyond the opening verse's Navarna extraction, Bhaskararaya shows the same letter-decoding technique applied to other well-known verses praising the Goddess - for instance extracting the Vagbhava-bija (a seed connected with speech/Sarasvati) from the phrase praising her as 'essence of all scripture', and working out how a phrase describing her as 'the boat that crosses the ocean of difficult existence' encodes a further syllable-combination. He treats this as evidence that the entire hymn is saturated with encoded mantra-material beyond the one explicit Navarna passage, citing a verse to the effect that 'mantras concealed within every chapter make this hymn supreme above all others' as the guiding principle behind this style of reading.`,
    keyPoints: [
      "**Not a one-off technique**: The same encoding method is shown at work in multiple separate verses across the hymn, not just the opening one.",
      "**A stated rationale**: The commentator explicitly frames this as the text being deliberately mantra-saturated throughout, not an isolated curiosity."
    ]
  },
  {
    id: 'gv-12-shapoddhara-utkilana',
    title: 'Undoing the curse (Shapoddhara) and removing the nail (Utkilana)',
    sanskritTag: `त्रयोदशप्रथमौ द्वादशद्वितीयौ एकादशतृतीयौ ... आदौ मध्यमचरित्रं पठित्वा ततः प्रथमचरित्रं ततस्तृतीयचरित्रं पठेत्`,
    summary: `Two preparatory recitation-sequences, believed necessary to make the text's power fully available, are explained. 'Shapoddhara' (removing a curse said to have been placed on the hymn) involves reading the text's chapters in a specific paired, criss-crossing order (chapter 13 with chapter 1, chapter 12 with chapter 2, and so on inward, with chapter 7 read twice) rather than straight through. 'Utkilana' (removing a 'nail' or blocking pin) involves reading the three episodes (caritas) out of their normal order - middle episode first, then the first, then the third. Bhaskararaya explains both practices as formally required preliminary rites rather than optional flourishes, comparing their status to certain preparatory Vedic rites that produce no result on their own but are still mandatory before the main rite, and promises fuller detail in his later chapter on the Kilaka (a separate short auxiliary text).`,
    keyPoints: [
      "**Two distinct preparatory rites, not interchangeable**: Shapoddhara reorders chapters; Utkilana reorders the three episodes - different techniques for different obstacles.",
      "**Framed as mandatory, not optional**: Both are compared to preparatory Vedic rites that must be performed even though they aren't the 'main' offering."
    ]
  },
  {
    id: 'gv-13-recitation-etiquette',
    title: 'Rules for how the text should be recited',
    sanskritTag: `यावन्न पूर्यतेऽध्यायस्तावन्न विरमेत्पठन् ... न स्वयं लिखितं स्तोत्रं नाब्राह्मणलिपिं पठेत्`,
    summary: `A set of practical etiquette-rules for recitation is laid out, drawn from the Varahi-tantra and related sources: one should not break off mid-chapter once started (if interrupted by accident, the whole chapter must be restarted); the text should always be read aloud, never merely recited mentally; a manuscript not in one's own handwriting, and not written by a Brahmin, should not be used for recitation; if reciting from memory is not possible, the book may be read directly, or (for very long recitation counts) placed on a stand rather than held in the hand, with a stated formula for how much loss of merit results from holding the book instead of using a stand.`,
    keyPoints: [
      "**Oral performance is treated as essential**: Silent, purely mental recitation is explicitly ruled insufficient - the text must be voiced.",
      "**Manuscript provenance matters ritually**: Whose handwriting the text is copied in is treated as affecting the recitation's validity."
    ]
  },
  {
    id: 'gv-14-rishi-chandas-devata-nyasa',
    title: 'Assigning seer, metre and deity to each episode (nyasa)',
    sanskritTag: `सप्तशत्याश्चरित्रे प्रथमे पद्मभूर्मुनिः ... छन्दो गायत्रमुदितं महाकाली तु देवता`,
    summary: `Each of the three episodes is formally assigned its own traditional seer (rishi), poetic metre (chandas), presiding deity, seed-syllable, cosmic element and specific practical aim, in the standard tantric style used to consecrate any mantra before use: the first episode is linked to Brahma as seer, Gayatri metre, Mahakali as deity, the Vagbhava seed and the element fire, oriented toward dharma; the middle episode to Vishnu, Ushnik metre, Mahalakshmi, the Maya-seed and the element wind, oriented toward wealth; the final episode to Shiva, Trishtubh metre, Mahasarasvati, the Kama-seed and the element sun, oriented toward desire/love. This threefold assignment is then used as the basis for the ritual hand- and body-placements (nyasa) performed before reciting each section.`,
    keyPoints: [
      "**Each episode is ritually 'branded' differently**: Distinct seer/metre/deity/element/aim combinations mark the three episodes as ritually distinct units, not just narrative divisions.",
      "**The threefold pattern repeats**: Dharma/artha/kama (duty/wealth/desire) map onto the three episodes exactly as the three goddess-forms do elsewhere in the Upodghata."
    ]
  },
  {
    id: 'gv-15-appendix-purashcharana-prayoga',
    title: 'Appendix: verse-specific applications for particular aims',
    sanskritTag: `एवं देवि मया प्रोक्तः पौरश्चरणिकः क्रमः ... सर्वापन्निवारणाय दुर्गे स्मृतेत्यर्धम्`,
    summary: `A closing appendix (drawing on the Katyayani-tantra, Durga-pradipa and other sources) works through the text almost verse by verse, prescribing which specific line or half-line should be repeated, how many times, and for what specific practical aim - protection from untimely death, removal of planetary affliction, ending epidemic disease, recovering a lost kingdom, attracting wealth, curing speech disorders, subjugation, exorcism of hostile spirits, and general obstacle-removal, among others, each with its own count (from a handful of repetitions up to lakhs) and, in several cases, its own auxiliary seed-syllable to enclose the verse with. The appendix closes by noting that further, even more specific applications exist in other treatises for those who need them.`,
    keyPoints: [
      "**A practical index, not a general principle**: Almost every entry names a specific verse, a specific repetition-count, and a specific real-world aim.",
      "**Explicitly presented as partial**: The text itself notes that further applications beyond this list exist elsewhere for the specialist."
    ]
  },
];

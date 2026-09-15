// Prayoga Vidhi: Nyasa, Dhyana, and recitation procedure for the Saptashati
// Source: DurgaSaptashati_prayoga.txt (OCR extract, pp. 47-115 of an 814-page
// edition carrying the same seven-commentary apparatus as the Argala file:
// Pradipa, Guptavati, Caturdhari, Santanavi, Nagojibhatti, Jagaccandracandrika,
// Damsoddhara, plus the Hindi Candraprabha). This file covers the ritual
// application (prayoga) material specifically - how the text is set up to be
// recited - not more narrative or Argala commentary.
//
// Coverage note, stated plainly rather than silently: the source document is
// far larger than what's below. Two things were deliberately left out rather
// than rendered in full:
//  1. A long philosophical digression (not reproduced here) arguing the
//     non-difference of Mahakali/Mahalakshmi/Mahasarasvati from
//     Brahma/Vishnu/Shiva and their consorts - real content, but doctrinal
//     argument rather than ritual procedure, better suited to a concepts-style
//     treatment than this verse-shaped schema.
//  2. The source's specialised-application section (vashikarana/uchchatana/
//     marana - subjugation, expulsion, and harm-rites, a standard traditional
//     six-rite [shatkarma] category in this genre of ritual manual) is
//     summarised at the level of "this category exists in the source" rather
//     than reproduced as exact mantra-count-substance recipes.
// Also: one short stretch of the source (part of the directional nyasa,
// dm-prayoga-navarna) was OCR-corrupted beyond reconstruction - noted inline
// rather than silently filled in from general knowledge.
//
// Part of the Devi Mahatmya EN verses. Merged by devi-mahatmya-verses-en.ts
// (same pattern as devi-mahatmya-verses-en-argala.ts). Do not import directly;
// import { deviMahatmyaVersesEnPrayoga } from './devi-mahatmya-verses-en'.
import type { RawVerseEn } from './devi-mahatmya-verses-en';

export const deviMahatmyaVersesEnPrayoga: RawVerseEn[] = [
{
    id: 'dm-prayoga-navarna',
    number: 'Prayoga: Navārṇa Nyāsa',
    section: 'Prayoga Vidhi: Nyāsa Preceding Recitation',
    devanagari: "",
    iast: "",
    conceptIds: ['devi-kavaca', 'argala-stotra', 'keelaka-stotra', 'sadhana-samara'],
    translation: `"Oṃ, to Cāmuṇḍā of the seed-sounds Aiṃ-Hrīṃ-Klīṃ, Vicce" - the nine-syllable Navārṇa mantra that this whole recitation is built around. What follows it is not translation but procedure: karanyāsa touches each syllable in turn to the thumb, index, middle, ring, and little fingers, then to the palms and their backs together. hṛdayādinyāsa then touches the same syllables to the heart, the crown of the head, the tuft of hair, both shoulders together (the "armour"), the space between the eyes and forehead (the "three eyes"), and finally traces the right hand overhead from left to back to front while clapping the left palm (the "weapon").`,
    commentary: `**What this actually is:** before reciting the Saptaśatī itself, tradition has the reciter place the nine syllables of the core mantra onto the fingers and then onto the body, part by part. This isn't decorative - it's the standard preparatory nyāsa done before most Śākta recitation, meant to make the reciter's own body and hands, quite literally, the site where the mantra is first "installed" before it's spoken aloud.

The source document continues from here into a **dig-nyāsa** (placing the same syllables toward each of the eight compass directions while snapping the fingers) — this section of the source scan is badly corrupted (the OCR extraction has scrambled individual Devanagari glyphs into an unreadable vertical jumble at this exact point) and is not reconstructed here from general knowledge, since a ritual mantra sequence is exactly the kind of content where guessing at what a damaged source "probably" said isn't a reasonable substitute for what it actually says.

**Seven-Commentary Digest:** the source groups this under the general heading of preparatory rites shared by the Kavaca-Argala-Kīlaka trio and the main text alike - Guptavati and Pradīpa's apparatus (as already excerpted in the Argala file's own commentary) treats all such nyāsa as functionally continuous with the "armour" logic of the Kavaca: you do not approach the deity, or the difficult inner material she represents, with an unprepared, undefended attention.`,
    keyPoints: ["The Navārṇa mantra (Aiṃ Hrīṃ Klīṃ Cāmuṇḍāyai Vicce) is the nine-syllable core the whole nyāsa procedure is built around.", "Karanyāsa (fingers) and hṛdayādinyāsa (body: heart, head, crown, shoulders, brow, and a final weapon-gesture) are the two stages actually reconstructable from this source.", "One further stage (dig-nyāsa, toward the compass directions) is present in the source but too OCR-damaged to reproduce reliably here."]
  },
{
    id: 'dm-prayoga-dhyana-tridevi',
    number: 'Prayoga: Dhyāna of the Three Forms',
    section: 'Prayoga Vidhi: Meditation Verses Before Each Carita',
    devanagari: "",
    iast: "",
    conceptIds: ['mahishasura', 'raktabija', 'shumbha-nishumbha', 'kali-chamunda'],
    translation: `I meditate on Mahākālī: holding sword, discus, mace, arrow, bow, iron-club, spear, human head and shield in her many hands, three-eyed, adorned all over, dark as blue stone, her ten faces and feet in view — the form Brahmā praised, while Viṣṇu slept, so that he would rise and destroy Madhu and Kaiṭabha.

I meditate on Mahālakṣmī, seated on a lotus: holding rosary, axe, mace, arrow, thunderbolt, lotus, bow, water-pot, spear, sword, and the Sāraṅga bow, spear, noose and discus in her many hands, serene-faced, the destroyer of the buffalo-demon (Mahiṣāsura).

I meditate on Mahāsarasvatī: holding bell, spear, plough, conch, pestle, discus, bow and arrow in her lotus hands, radiant as the moon breaking through clouds, born from Gaurī's own body, the foundation of the three worlds, the ancient one, the destroyer of Śumbha and the other demons.`,
    commentary: `**What this actually is:** three visualisation verses (dhyāna), one for each of the three forms the Goddess takes across the text's three Caritas - Mahākālī for the Madhu-Kaiṭabha episode, Mahālakṣmī for the Mahiṣāsura episode, Mahāsarasvatī for the Śumbha-Niśumbha episode. Tradition places these immediately before beginning the corresponding chapter, so the reciter forms a specific, detailed mental image of the specific form being invoked before that section starts, rather than one generic image of "the Goddess" for the whole text.

Each verse follows the same pattern: a list of what's held in each hand (the standard iconographic attributes for that form), a physical description (colour, number of faces where relevant), and then a one-line reminder of which story this form belongs to - Mahākālī is explicitly tied back to the moment Brahmā praised her so Viṣṇu would wake and fight Madhu-Kaiṭabha; Mahālakṣmī to the defeat of Mahiṣāsura; Mahāsarasvatī, born from Gaurī, to the defeat of Śumbha.

**Seven-Commentary Digest:** these three dhyāna verses are treated in the source as belonging to the Nāvarṇa/Saptaśatī-nyāsa apparatus rather than to any single commentator's exegesis of the main text - they function as a shared, standard visualisation used regardless of which specific chapter-by-chapter commentary (Guptavati's grammatical approach vs. Pradīpa's more expansive etymological one) the reciter is otherwise following.`,
    keyPoints: ["Three separate visualisation verses, one per Carita: Mahākālī (Madhu-Kaiṭabha), Mahālakṣmī (Mahiṣāsura), Mahāsarasvatī (Śumbha-Niśumbha).", "Each lists specific hand-held attributes and a physical description, then names the specific demon-defeat the form belongs to.", "Recited immediately before the corresponding chapter begins, not once for the whole text."]
  },
{
    id: 'dm-prayoga-mala-puja',
    number: 'Prayoga: Mālā Pūjā',
    section: 'Prayoga Vidhi: Worship of the Rosary Before Japa',
    devanagari: "",
    iast: "",
    conceptIds: ['sadhana-samara'],
    translation: `Salutations to the rosary (Akṣamālikā). "O rosary, Mahāmāyā, embodiment of all power — in you the four aims of life are placed; therefore grant me success." "Rosary, remove obstacles; I take you in my right hand; be gracious at the time of recitation, for my success." "O ruler of the rosary, accomplisher of the meaning of every mantra, grant success again and again, accomplish, accomplish every success for me." Then, offering the completed recitation into the Goddess's left hand: "Guardian of the deepest secret, accept this recitation I have made; by your grace, O great Goddess, let it succeed."`,
    commentary: `**What this actually is:** a short worship of the rosary (mālā) itself, done before starting the count of recitations (japa) - the physical object used to count repetitions is first addressed directly and asked to remove obstacles and support the practice, then, after the recitation, offered the completed count as if handing it to the Goddess's own hand.

This is a small but telling detail about how this tradition treats ritual tools generally: the rosary isn't a neutral counting device, it's addressed as itself an embodiment of the same power (Mahāmāyā) being invoked through it, worth a moment of direct address both before and after use rather than picked up and put down without acknowledgment.

**Seven-Commentary Digest:** the source treats this as a shared preliminary across nearly all Śākta japa practice, not specific commentary on the Saptaśatī's own verses - it appears here as part of the procedural apparatus surrounding recitation (alongside the nyāsa and dhyāna) rather than as exegesis of a numbered śloka.`,
    keyPoints: ["The rosary is addressed directly, before use, as an embodiment of the same power being invoked, not treated as a neutral counting tool.", "A closing verse formally offers the completed count of recitations back to the Goddess.", "This is shared preliminary procedure, not commentary on a specific verse of the main text."]
  },
{
    id: 'dm-prayoga-saptashati-nyasa',
    number: 'Prayoga: Saptaśatī Nyāsa & Durgā Dhyāna',
    section: 'Prayoga Vidhi: The Text\u2019s Own Ritual Assignment',
    devanagari: "",
    iast: "",
    conceptIds: ['sadhana-samara', 'matrikas', 'cit-shakti'],
    translation: `A separate ritual assignment for the text as a whole, distinct from the assignment given to Kavaca/Argala/Kīlaka individually: Brahmā, Viṣṇu, and Rudra as seers for the first, middle, and final Caritas respectively; Mahākālī, Mahālakṣmī, and Mahāsarasvatī as their deities; the meters Gāyatrī, Uṣṇik, and Anuṣṭubh; Nandā, Śākambharī, and Bhīmā as their powers (śakti); Raktadantikā, Durgā, and Bhrāmarī as their seed-syllables; fire, wind, and sun as their underlying elements — dedicated to the fulfilment of every wish.

Six verses of protection follow, each paired with a specific finger or hand gesture: "O sword-bearer, spear-bearer, terrible one, mace-bearer, discus-bearer, conch-bearer, bow-bearer, armed with arrow, club and iron bar" (thumbs); "protect us with your spear, protect us, Ambikā, with your sword, with the sound of your bell, with the twang of your bowstring" (index fingers); "protect the east, the west, Caṇḍikā, protect the south by whirling your own spear, and the north as well, O Sovereign" (middle fingers); "whatever gentle forms of yours move through the three worlds, and whatever extremely terrible ones — protect us and this earth with them" (ring fingers); "whatever weapons — sword, spear, mace and the rest — are held in your hands, O Ambikā, protect us with them from every side" (little fingers); "you who are the form of everything, ruler of everything, endowed with every power — save us from fears, O Goddess Durgā, salutations to you" (palms and their backs). Finally, a dhyāna of Durgā herself: bright as a flash of lightning, seated on a lion's back, terrible, attended by maiden-warriors with swords and shields, herself holding discus, mace, sword, shield, arrows, bow and bowstring and pointing with her finger, fiery in nature, moon-crested, three-eyed.`,
    commentary: `**What this actually is:** the text's own name, "Saptaśatī" (seven hundred [verses]), gets its own separate ritual assignment here, on top of the individual assignments Kavaca/Argala/Kīlaka each already carry - as if the whole text, taken as a single unit, is itself a mantra with a rishi, deity, meter, and so on. This is then followed by six short protection verses, each one explicitly paired with touching a specific finger or part of the hand, and closes with a full visualisation (dhyāna) of Durgā herself, distinct from the earlier three-form dhyāna (which was per-Carita).

Worth noting plainly: this dhyāna's Durgā is explicitly lion-mounted, three-eyed, fire-natured, and attended by weapon-bearing maiden-warriors (kanyābhiḥ) — closely related in imagery to, but a separate verse from, the Mātṛkā material covered elsewhere.

**Seven-Commentary Digest:** the source treats this Saptaśatī-nyāsa as textually distinct from (and, per its own internal cross-references, later in compilation than) the three-form dhyāna above — it exists specifically to let the reciter treat "the whole 700-verse text" as one addressable unit of practice, the same way the Navārṇa mantra lets nine syllables function as one addressable unit.`,
    keyPoints: ["The text as a whole gets its own rishi/deity/meter/power/seed-syllable/element assignment, separate from Kavaca/Argala/Kīlaka's individual ones.", "Six protection verses are each tied to touching a specific finger or part of the hand in sequence.", "The closing dhyāna verse visualises Durgā herself - lion-mounted, three-eyed, fire-natured - distinct from the earlier three-form (Mahākālī/Mahālakṣmī/Mahāsarasvatī) dhyāna."]
  },
{
    id: 'dm-prayoga-patha-vidhi',
    number: 'Prayoga: General Rules of Recitation',
    section: 'Prayoga Vidhi: How the Text Wants to Be Read',
    devanagari: "",
    iast: "",
    conceptIds: ['sadhana-samara', 'phalastuti'],
    translation: `Rest the book on a stand before reading from it — reading it propped in the hand, the text says, earns only half the benefit. Once a chapter is begun, do not stop until it's finished; if a break happens by accident partway through, begin that chapter again from the start and read it through completely, in order, without agitation. Recite the syllable "Oṃ" before a hymn or continuous text, and add it again at the end (this is the convention for texts, like this one, that open with a narrator's "he said" - uvāca); a hymn that instead ends in "namaḥ" (salutation) is better read by the reciter's own understanding of its form. Recite only after placing the seer, meter, and limb-assignments correctly, with full attention; where a hymn shows no opening "Oṃ," don't force the nyāsa procedure onto it either. Recite with a clean, undistracted mind and real effort — never a hymn you copied out yourself, never one in a non-Brahminical script, never one you composed yourself or that someone else composed for the purpose, because in this age what's praised is specifically what the ancient seers themselves spoke. On the eighth or fourteenth day of the dark lunar fortnight, done with full attention, she both gives and receives; she isn't pleased any other way.`,
    commentary: `**What this actually is:** general procedural etiquette for reciting the Saptaśatī (and, by the text's own extension, other major stotras) — not tied to any specific chapter or verse, but rules for the act of recitation itself. Several of these are genuinely practical regardless of belief: read from a stand rather than holding the book (steadier posture, presumably fewer mistakes); don't stop mid-chapter, and if you accidentally do, restart that chapter rather than resuming from where you left off; recite with real attention rather than mechanically.

The more pointed rule — don't recite a copy you wrote out yourself, and don't recite something you or anyone else composed for the occasion, only what the tradition's own seers spoke — is worth stating plainly rather than softening: this source text is explicit that authenticity of source matters to it, not just sincerity of the reciter. It also lists several other canonical hymns (elsewhere in the source, only briefly touched on here) that share this same "must be received, not personally composed" requirement — the Bhagavad Gītā, the Viṣṇu Sahasranāma, hymns to Nṛsiṃha and Rāma among them — situating the Saptaśatī within that same category of text.

**Seven-Commentary Digest:** these rules are drawn in the source from a named work, the Vārāhī Tantra, and from the Saptaśatī's own Kīlaka chapter — the source is explicit about citing them as coming from a different text than the Saptaśatī itself being applied to it, rather than treating them as the Saptaśatī's own internal instruction.`,
    keyPoints: ["Practical rules: read from a book-stand, never stop mid-chapter (restart the whole chapter if you accidentally do), recite with real attention rather than mechanically.", "A stricter rule: never recite a copy you wrote yourself or a composition made for the occasion - only what tradition attributes to the original seers, the same requirement applied to the Gita, Vishnu Sahasranama, and a few other major hymns.", "The eighth or fourteenth day of the dark lunar fortnight is named as the most receptive time for this practice specifically."]
  },
{
    id: 'dm-prayoga-carita-assignments',
    number: 'Prayoga: Ritual Assignment of Kavaca, Argala, Kīlaka, and the Three Caritas',
    section: 'Nāgojībhaṭṭīsthaḥ Prayogavidhiḥ (Concluding Ritual Manual)',
    devanagari: "",
    iast: "",
    conceptIds: ['devi-kavaca', 'argala-stotra', 'keelaka-stotra', 'three-caritas', 'shumbha-nishumbha'],
    translation: `For the Kavaca: Cāmuṇḍā is the deity, Brahmā the seer, Anuṣṭubh the meter, the armed Mother-goddesses installed on the limbs are its seed-power, and the deities who bind the directions are its underlying element. For the Argala: Viṣṇu is the seer, Anuṣṭubh the meter, the Navārṇa mantra its power, the goddesses named within it its seed, the Saptaśatī-mantra itself its underlying element. For the Kīlaka: Śiva is the seer; the rest follows the Argala's pattern.

For the first Carita: Brahmā is the seer, Anuṣṭubh the meter, Mahākālī the deity, Nandajā the power, Raktadantikā the seed-syllable, fire the element — its application is for nourishment/prosperity (pauṣṭika). For the middle Carita: Viṣṇu the seer, Mahālakṣmī the deity, Śākambharī the power, Durgā the seed, Uṣṇik the meter, wind the element — its application is for obtaining a specific desired outcome. For the final Carita: Śiva the seer, Anuṣṭubh and Jagatī the meters, Mahāsarasvatī the deity, Bhīmā the power, Bhrāmarī the seed, the sun the element — its application is specifically for uccāṭana (dislodging or driving off an obstacle).`,
    commentary: `**What this actually is:** the closing section of the source manual, attributed to the commentator Nāgojī Bhaṭṭa, gives the full formal ritual assignment (ṛṣi, chandas, devatā, śakti, bīja, tattva, and the specific purpose it's used for) to every major section of the text in turn - the same kind of assignment a Vedic mantra would traditionally carry, applied here to Kavaca, Argala, and Kīlaka individually, and then again to each of the three Caritas.

One assignment is worth being direct about rather than glossing over: the final Carita (Śumbha-Niśumbha) is explicitly assigned to uccāṭana - a traditional category meaning something like "dislodging" or "driving off" an obstacle or opposing influence, one of six traditional categories of ritual application (śātkarma) in this genre alongside prosperity-rites, subjugation, and others the source discusses elsewhere at length but which are not reproduced here in operational detail (see the file header note) - because they shade into rites aimed at controlling or harming another specific person, and this file sticks to describing what the source says these categories are named, rather than providing exact enactable specifications for them.`,
    keyPoints: ["Kavaca, Argala, and Kīlaka each carry their own full ritual assignment (seer, meter, deity, power, seed-syllable, underlying element), not just the main text.", "Each of the three Caritas carries its own separate, distinct assignment matching its own deity form (Mahākālī/Mahālakṣmī/Mahāsarasvatī) and stated ritual purpose.", "The final Carita's stated purpose - uccāṭana, dislodging an obstacle - is one of a traditional six-fold category of ritual application; the source's more specific, person-targeted instructions in this category aren't reproduced here operationally."]
  },
];

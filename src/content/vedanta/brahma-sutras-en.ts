export interface BrahmaSutra {
  id: string; // The standard reference format: Adhyaya.Pada.Sutra
  adhyaya: number; // Chapter (1-4)
  pada: number;    // Section (1-4)
  sutraNumber: number; // Sutra number within the section
  translation: string; // The definitive English translation
  sanskrit?: string; // The Devanagari text
}

export const brahmaSutrasEn: BrahmaSutra[] = [
  
  // ADHYAYA 1: SAMANVAYA ADHYAYA (The Harmony of Vedanta Texts)
  // PADA 1
  {
    id: "1.1.1",
    sanskrit: "अथातो ब्रह्मजिज्ञासा ॥ १ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 1,
    translation: "Now, therefore, the enquiry into Brahman."
  },
  {
    id: "1.1.2",
    sanskrit: "जन्माद्यस्य यतः ॥ २ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 2,
    translation: "(Brahman is that) from which the origin, etc., (i.e., origin, sustenance, and dissolution) of this (universe) proceed."
  },
  {
    id: "1.1.3",
    sanskrit: "शास्त्रयोनित्वात् ॥ ३ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 3,
    translation: "The scripture being the source of right knowledge (concerning Brahman)."
  },
  {
    id: "1.1.4",
    sanskrit: "तत्तु समन्वयात् ॥ ४ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 4,
    translation: "But that (Brahman is to be known only from the Scriptures and not independently by any other means) is established, because it is the main purport (of all Vedanta texts)."
  },
  {
    id: "1.1.5",
    sanskrit: "ईक्षतेर्नाशब्दम् ॥ ५ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 5,
    translation: "On account of seeing (i.e., thinking being attributed in the Upanishads to the First Cause), the Pradhana is not the first cause; it is not based on the scriptures."
  },
  {
    id: "1.1.6",
    sanskrit: "गौणश्चेन्नात्मशब्दात् ॥ ६ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 6,
    translation: "If it is said that (the word 'seeing') has a figurative meaning, we deny that, on account of the word 'Self' (being applied to the cause of the world)."
  },
  {
    id: "1.1.7",
    sanskrit: "तन्निष्ठस्य मोक्षोपदेशात् ॥ ७ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 7,
    translation: "(The Pradhana cannot be designated by the term Self) because liberation is taught of him who takes his stand on that (the Sat)."
  },
  {
    id: "1.1.8",
    sanskrit: "हेयत्वावचनाच्च ॥ ८ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 8,
    translation: "And (because there is no statement of its having to be set aside), it cannot be Pradhana."
  },
  {
    id: "1.1.9",
    sanskrit: "स्वाप्ययात् ॥ ९ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 9,
    translation: "On account of (the individual soul) merging in its own Self (in deep sleep, the Self cannot be the Pradhana)."
  },
  {
    id: "1.1.10",
    sanskrit: "गतिसामान्यात् ॥ १० ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 10,
    translation: "On account of the uniformity of view (of the Vedanta texts, Brahman is the cause)."
  },

  {
    id: "1.1.11",
    sanskrit: "श्रुतत्वाच्च ॥ ११ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 11,
    translation: "And because it is directly stated in the Sruti (therefore the all-knowing Brahman alone is the cause of the universe)."
  },
  {
    id: "1.1.12",
    sanskrit: "आनन्दमयोऽभ्यासात् ॥ १२ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 12,
    translation: "(The Self) consisting of Bliss (Anandamaya is the highest Brahman) on account of the repetition (of the word 'bliss' in the text)."
  },
  {
    id: "1.1.13",
    sanskrit: "विकारशब्दान्नेति चेन्न प्राचुर्यात् ॥ १३ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 13,
    translation: "If (it be objected that the term Anandamaya) denotes the individual soul on account of the word denoting a modification, (we reply) no, on account of the word denoting abundance (i.e., the highest Brahman)."
  },
  {
    id: "1.1.14",
    sanskrit: "तद्धेतुव्यपदेशाच्च ॥ १४ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 14,
    translation: "And because he is declared to be the cause of it (i.e., the cause of bliss, therefore the Anandamaya is Brahman)."
  },
  {
    id: "1.1.15",
    sanskrit: "मान्त्रवर्णिकमेव च गीयते ॥ १५ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 15,
    translation: "Moreover, (the Anandamaya is Brahman because) the very same (Brahman) which had been referred to in the mantra is sung (in the Brahmana passage as the Anandamaya)."
  },
  {
    id: "1.1.16",
    sanskrit: "नेतरोऽनुपपत्तेः ॥ १६ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 16,
    translation: "(The Self consisting of bliss is the highest Brahman) and not the other (i.e., the individual soul) because it is impossible (for the latter to be the cause of the universe)."
  },
  {
    id: "1.1.17",
    sanskrit: "भेदव्यपदेशाच्च ॥ १७ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 17,
    translation: "And on account of the declaration of the difference (between the two, i.e., the individual soul and the Anandamaya), (the latter is not the individual soul)."
  },
  {
    id: "1.1.18",
    sanskrit: "कामाच्च नानुमानापेक्षा ॥ १८ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 18,
    translation: "Because of desiring (i.e., willing, the Anandamaya cannot be the Pradhana)."
  },
  {
    id: "1.1.19",
    sanskrit: "अस्मिन्नस्य च तद्योगं शास्ति ॥ १९ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 19,
    translation: "And, moreover, the scripture teaches the joining of this (i.e., the individual soul) with that (i.e., bliss) on that (being fully comprehended)."
  },
  {
    id: "1.1.20",
    sanskrit: "अन्तस्तद्धर्मोपदेशात् ॥ २० ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 20,
    translation: "The one within (the sun and the eye) (is Brahman) because His attributes are declared (therein)."
  },

  {
    id: "1.1.21",
    sanskrit: "भेदव्यपदेशाच्चान्यः ॥ २१ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 21,
    translation: "And there is another one (i.e., the Lord who is different from the individual souls animating the sun etc.) on account of the declaration of distinction."
  },
  {
    id: "1.1.22",
    sanskrit: "आकाशस्तल्लिङ्गात् ॥ २२ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 22,
    translation: "The ether (Akasa) (is Brahman) on account of characteristic marks (of Brahman being mentioned)."
  },
  {
    id: "1.1.23",
    sanskrit: "अत एव प्राणः ॥ २३ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 23,
    translation: "For the same reason breath (Prana) (is Brahman)."
  },
  {
    id: "1.1.24",
    sanskrit: "ज्योतिश्चरणाभिधानात् ॥ २४ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 24,
    translation: "The 'light' (is Brahman) on account of the mention of feet (in a passage which is connected with the passage about the light)."
  },
  {
    id: "1.1.25",
    sanskrit: "छन्दोऽभिधानान्नेति चेन्न तथा चेतोऽर्पणनिगदात्तथा हि दर्शनम् ॥ २५ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 25,
    translation: "If it be objected that (Brahman is) not (spoken of) on account of the metre (Gayatri) being denoted; (we reply) not so, because thus (by means of the metre) the direction of the mind (on Brahman) is declared; for so it is seen (in other passages)."
  },
  {
    id: "1.1.26",
    sanskrit: "भूतादिपादव्यपदेशोपपत्तेश्चैवम् ॥ २६ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 26,
    translation: "And thus also (we must conclude that Brahman is the subject) because (thus only) the declaration as to the beings etc. being the feet is possible."
  },
  {
    id: "1.1.27",
    sanskrit: "उपदेशभेदान्नेति चेन्नोभयस्मिन्नप्यविरोधात् ॥ २७ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 27,
    translation: "The objection that (the Brahman of the former passage cannot be recognised in the latter) on account of the difference of designation, is not valid because in either (case) there is nothing contrary (to the recognition)."
  },
  {
    id: "1.1.28",
    sanskrit: "प्राणस्तथानुगमात् ॥ २८ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 28,
    translation: "Prana (is Brahman) on account of being so connected (with the highest Brahman in the text)."
  },
  {
    id: "1.1.29",
    sanskrit: "न वक्तुरात्मोपदेशादिति चेदध्यात्मसम्बन्धभूमा ह्यस्मिन् ॥ २९ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 29,
    translation: "If it be said that (Brahman is not denoted) on account of the speaker denoting himself, (we reply) not so, because the multitude of connections with the inner Self (is possible only in that)."
  },
  {
    id: "1.1.30",
    sanskrit: "शास्त्रदृष्ट्या तूपदेशो वामदेववत् ॥ ३० ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 30,
    translation: "The declaration (made by Indra about himself, viz., that he is one with Brahman) is possible through intuition as attested by Sruti, as in the case of Vamadeva."
  },
  {
    id: "1.1.31",
    sanskrit: "जीवमुख्यप्राणलिङ्गान्नेति चेन्नोपासात्रैविध्यादाश्रितत्वादिह तद्योगात् ॥ ३१ ॥",
    adhyaya: 1,
    pada: 1,
    sutraNumber: 31,
    translation: "If it be said (that Brahman is not meant) on account of characteristic marks of the individual soul and the chief vital air (being mentioned); we say no, because (such a view) would lead to a threefold meditation; because Prana has been accepted (as Brahman elsewhere); and because here also (words denoting Brahman) are mentioned with reference to Prana."
  },

  // PADA 2
  {
    id: "1.2.1",
    sanskrit: "सर्वत्र प्रसिद्धोपदेशात् ॥ १ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 1,
    translation: "(That which consists of the mind 'Manomaya' is Brahman) because there is taught (in this text) (that Brahman which is) well-known (as the cause of the world) in the Upanishads."
  },
  {
    id: "1.2.2",
    sanskrit: "विवक्षितगुणोपपत्तेश्च ॥ २ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 2,
    translation: "And because the qualities desired to be expressed are possible (in Brahman; therefore the Manomaya is Brahman)."
  },
  {
    id: "1.2.3",
    sanskrit: "अनुपपत्तेस्तु न शारीरः ॥ ३ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 3,
    translation: "On account of impossibility (of these qualities in the individual soul) it is not the embodied (soul that is meant)."
  },
  {
    id: "1.2.4",
    sanskrit: "कर्मकर्तृव्यपदेशाच्च ॥ ४ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 4,
    translation: "Because of the declaration of the attainer and the object attained, He (the individual soul) is not meant."
  },
  {
    id: "1.2.5",
    sanskrit: "शब्दविशेषात् ॥ ५ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 5,
    translation: "Because of the difference (of words) (the individual soul is not meant)."
  },
  {
    id: "1.2.6",
    sanskrit: "स्मृतेश्च ॥ ६ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 6,
    translation: "And because of the Smriti (the embodied soul is not the Manomaya)."
  },
  {
    id: "1.2.7",
    sanskrit: "अर्भकौकस्त्वात्तद्व्यपदेशाच्च नेति चेन्न निचाय्यत्वादेवं व्योमवच्च ॥ ७ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 7,
    translation: "If it be said that (the passage does not refer to Brahman) on account of the smallness of the abode (the heart) and also on account of the denotation of that (minuteness) (we say) no; because (Brahman) has thus to be meditated upon, and because the case is similar to that of ether."
  },
  {
    id: "1.2.8",
    sanskrit: "सम्भोगप्राप्तिरिति चेन्न वैशेष्यात् ॥ ८ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 8,
    translation: "If it is said that (since Brahman is connected with the hearts of all souls) It is subject to experience (of pleasure and pain), (we say) no, on account of the difference of nature (of Brahman from the individual soul)."
  },
  {
    id: "1.2.9",
    sanskrit: "अत्ता चराचरग्रहणात् ॥ ९ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 9,
    translation: "The eater (is Brahman), because both the movable and immovable (i.e., the whole world) is taken (as His food)."
  },
  {
    id: "1.2.10",
    sanskrit: "प्रकरणाच्च ॥ १० ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 10,
    translation: "And on account of the context (the eater is Brahman)."
  },

  {
    id: "1.2.11",
    sanskrit: "गुहां प्रविष्टावात्मानौ हि तद्दर्शनात् ॥ ११ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 11,
    translation: "The two entered into the cavity (of the heart) are indeed the individual soul and the Supreme Soul, because it is so seen (that the two refer to them in that category)."
  },
  {
    id: "1.2.12",
    sanskrit: "विशेषणाच्च ॥ १२ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 12,
    translation: "And on account of distinctive qualities (the two are the individual soul and the Supreme Brahman)."
  },
  {
    id: "1.2.13",
    sanskrit: "अन्तर उपपत्तेः ॥ १३ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 13,
    translation: "The person within the eye (is Brahman) on account of the agreement (of the attributes of that person with those of Brahman)."
  },
  {
    id: "1.2.14",
    sanskrit: "स्थानादिव्यपदेशाच्च ॥ १४ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 14,
    translation: "And on account of the statement of place and so on."
  },
  {
    id: "1.2.15",
    sanskrit: "सुखविशिष्टाभिधानादेव च ॥ १५ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 15,
    translation: "And on account of the passage referring to that which is distinguished by bliss (i.e., Brahman)."
  },
  {
    id: "1.2.16",
    sanskrit: "श्रुतोपनिषत्कगत्यभिधानाच्च ॥ १६ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 16,
    translation: "And on account of the statement of the way of him who has heard the Upanishads."
  },
  {
    id: "1.2.17",
    sanskrit: "अनवस्थितेरसम्भवाच्च नेतरः ॥ १७ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 17,
    translation: "(The person within the eye is the Supreme Brahman) and not any other (i.e., the individual soul etc.) as they do not exist always; and on account of the impossibility (of the qualities of the entity in the eye being ascribed to the others)."
  },
  {
    id: "1.2.18",
    sanskrit: "अन्तर्याम्यधिदैवादिषु तद्धर्मव्यपदेशात् ॥ १८ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 18,
    translation: "The internal ruler over the deities and so on (is Brahman) because the attributes of that (Brahman) are mentioned."
  },
  {
    id: "1.2.19",
    sanskrit: "न च स्मार्तमतद्धर्माभिलापात् ॥ १९ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 19,
    translation: "And (the Internal Ruler is) not that which is taught in the Sankhya Smriti (viz., Pradhana) because qualities contrary to its nature are mentioned (here)."
  },
  {
    id: "1.2.20",
    sanskrit: "शारीरश्चोभयेऽपि हि भेदेनैनमधीयते ॥ २० ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 20,
    translation: "And the embodied soul (is also not the Internal Ruler) for both (recensions of the Brihadaranyaka) also speak of it as different (from the Internal Ruler)."
  },

  {
    id: "1.2.21",
    sanskrit: "अदृश्यत्वादिगुणको धर्मोक्तेः ॥ २१ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 21,
    translation: "That which possesses the attributes of invisibility and so on (is Brahman) on account of the declaration of Its attributes."
  },
  {
    id: "1.2.22",
    sanskrit: "विशेषणभेदव्यपदेशाभ्यां च नेतरौ ॥ २२ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 22,
    translation: "The other two (viz., the individual soul and the Pradhana) are not (the source of all beings) because there are distinctive attributes and statement of difference."
  },
  {
    id: "1.2.23",
    sanskrit: "रूपोपन्यासाच्च ॥ २३ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 23,
    translation: "And on account of its form being mentioned (the Supreme Brahman is the source of all beings)."
  },
  {
    id: "1.2.24",
    sanskrit: "वैश्वानरः साधारणशब्दविशेषात् ॥ २४ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 24,
    translation: "Vaiśvānara (is Brahman) on account of the distinction qualifying the common terms (Vaiśvānara and Self)."
  },
  {
    id: "1.2.25",
    sanskrit: "स्मर्यमाणमनुमानं स्यादिति ॥ २५ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 25,
    translation: "Because that (which is stated in the Smriti) is an inference (i.e., an indicator of the Sruti, therefore the Vaisvanara is the Supreme Brahman)."
  },
  {
    id: "1.2.26",
    sanskrit: "शब्दादिभ्योऽन्तःप्रतिष्ठानाच्च नेति चेन्न तथा दृष्ट्युपदेशादसम्भवात्पुरुषमपि चैनमधीयते ॥ २६ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 26,
    translation: "If it be said that (Vaisvanara is) not the highest Lord on account of the term (having a different settled meaning) and on account of His abiding within (the gastric fire); (we say) no, because there is the meditation (taught) on Brahman as having such a condition; also on account of the impossibility; and finally because they read of Him as man (a form of Brahman)."
  },
  {
    id: "1.2.27",
    sanskrit: "अत एव न देवता भूतं च ॥ २७ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 27,
    translation: "For the same reasons (the Vaisvanara) cannot be the deity (of fire) or the element (of fire)."
  },
  {
    id: "1.2.28",
    sanskrit: "साक्षादप्यविरोधं जैमिनिः ॥ २८ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 28,
    translation: "Jaimini (is of opinion that) there is no contradiction (even) if (the word Agni is taken in its direct meaning) on account of the direct statement (of the sruti)."
  },
  {
    id: "1.2.29",
    sanskrit: "अभिव्यक्तेरित्याश्मरथ्यः ॥ २९ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 29,
    translation: "On account of the manifestation, so says Asmarathya."
  },
  {
    id: "1.2.30",
    sanskrit: "अनुस्मृतेर्बादरिः ॥ ३0 ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 30,
    translation: "On account of meditation, so says Badari."
  },
  {
    id: "1.2.31",
    sanskrit: "सम्पत्तेरिति जैमिनिस्तथा हि दर्शयति ॥ ३१ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 31,
    translation: "Because of imaginary identity, so says Jaimini; for thus it is declared (by the Sruti)."
  },
  {
    id: "1.2.32",
    sanskrit: "आमनन्ति चैनमस्मिन् ॥ ३२ ॥",
    adhyaya: 1,
    pada: 2,
    sutraNumber: 32,
    translation: "Moreover, they (the Jabalas) speak of Him (the Supreme Brahman) in that (i.e., the interstice between the top of the head and the chin)."
  },

  // PADA 3
  {
    id: "1.3.1",
    sanskrit: "द्युभ्वाद्यायतनं स्वशब्दात् ॥ १ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 1,
    translation: "The abode of heaven, earth, and so on (is Brahman) on account of the term 'own' (i.e., Self) and the like."
  },
  {
    id: "1.3.2",
    sanskrit: "मुक्तोपसृप्यव्यपदेशात् ॥ २ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 2,
    translation: "And because of the declaration that it is the object to be approached by the liberated."
  },
  {
    id: "1.3.3",
    sanskrit: "नानुमानमतच्छब्दात् ॥ ३ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 3,
    translation: "(The abode of heaven etc.) is not that which is inferred (i.e., Pradhana), because there is no term denoting it."
  },
  {
    id: "1.3.4",
    sanskrit: "प्राणभृच्च ॥ ४ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 4,
    translation: "(Nor is the abode of heaven etc.) the bearer of Pranas (i.e., the individual soul)."
  },
  {
    id: "1.3.5",
    sanskrit: "भेदव्यपदेशात् ॥ ५ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 5,
    translation: "On account of the declaration of difference."
  },
  {
    id: "1.3.6",
    sanskrit: "प्रकरणात् ॥ ६ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 6,
    translation: "On account of the context."
  },
  {
    id: "1.3.7",
    sanskrit: "स्थित्यदनाभ्यां च ॥ ७ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 7,
    translation: "And on account of the two conditions of standing and eating (of which the former is characteristic of the Supreme Lord and the latter of the individual soul)."
  },
  {
    id: "1.3.8",
    sanskrit: "भूमा सम्प्रसादादध्युपदेशात् ॥ ८ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 8,
    translation: "The Bhuman (is Brahman) because it is taught after the state of deep sleep (i.e., after Prana or the vital air)."
  },
  {
    id: "1.3.9",
    sanskrit: "धर्मोपपत्तेश्च ॥ ९ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 9,
    translation: "And on account of the suitability of the attributes (declared of the Bhuman, it is Brahman)."
  },
  {
    id: "1.3.10",
    sanskrit: "अक्षरमम्बरान्तधृतेः ॥ १० ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 10,
    translation: "The Imperishable (Akshara) (is Brahman) on account of (its) supporting (everything) up to ether (Akasa)."
  },
  {
    id: "1.3.11",
    sanskrit: "सा च प्रशासनात् ॥ ११ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 11,
    translation: "This (supporting), on account of the command (attributed to the Imperishable, can be the work of the Supreme Lord only)."
  },
  {
    id: "1.3.12",
    sanskrit: "अन्यभावव्यावृत्तेश्च ॥ १२ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 12,
    translation: "And on account of (the Sruti) separating (the Akshara) from that whose nature is different (from Brahman)."
  },
  {
    id: "1.3.13",
    sanskrit: "ईक्षतिकर्मव्यपदेशात्सः ॥ १३ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 13,
    translation: "Because of His being mentioned as the object of sight, (He is the Supreme Brahman)."
  },
  {
    id: "1.3.14",
    sanskrit: "दहर उत्तरेभ्यः ॥ १४ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 14,
    translation: "The small (ether, Akasa) (is Brahman) on account of the subsequent arguments."
  },
  {
    id: "1.3.15",
    sanskrit: "गतिशब्दाभ्यां तथा हि दृष्टं लिङ्गं च ॥ १५ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 15,
    translation: "(The small Akasa is Brahman) because of the movement (of the soul to Brahman) and of the word (Brahmaloka); for thus it is seen (i.e., that Brahman is meant)."
  },

  {
    id: "1.3.16",
    sanskrit: "धृतेश्च महिम्नोऽस्यास्मिन्नुपलब्धेः ॥ १६ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 16,
    translation: "And on account of the supporting also (attributed to it), (the small Akasa must be Brahman) because that greatness is observed in Him (according to other scriptural passages)."
  },
  {
    id: "1.3.17",
    sanskrit: "प्रसिद्धेश्च ॥ १७ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 17,
    translation: "And on account of the settled meaning."
  },
  {
    id: "1.3.18",
    sanskrit: "इतरपरामर्शात्स इति चेन्नासम्भवात् ॥ १८ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 18,
    translation: "If it is said that the other one (i.e., the individual soul) is meant on account of a reference to it (in a complementary passage), (we say) no, on account of the impossibility."
  },
  {
    id: "1.3.19",
    sanskrit: "उत्तराच्चेदाविर्भूतस्वरूपस्तु ॥ १९ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 19,
    translation: "If it is said that from the subsequent (context it appears that the individual soul is meant), (we say) no; what is there described is (the individual soul) in so far as its true nature has become manifest (i.e., as non-different from Brahman)."
  },
  {
    id: "1.3.20",
    sanskrit: "अन्यार्थश्च परामर्शः ॥ २० ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 20,
    translation: "And the reference (to the individual soul) has a different meaning."
  },
  {
    id: "1.3.21",
    sanskrit: "अल्पश्रुतेरिति चेत्तदुक्तम् ॥ २१ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 21,
    translation: "If it be said that owing to the scriptural declaration of the smallness (the soul is meant), (we say) no, because that has been explained (before)."
  },
  {
    id: "1.3.22",
    sanskrit: "अनुकृतेस्तस्य च ॥ २२ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 22,
    translation: "On account of the acting after (i.e., the shining after), (that after which sun, moon, etc. are said to shine is the Supreme Self), and (because by the light) of Him (all this is lighted)."
  },
  {
    id: "1.3.23",
    sanskrit: "अपि च स्मर्यते ॥ २३ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 23,
    translation: "Moreover, it is so stated in the Smriti."
  },
  {
    id: "1.3.24",
    sanskrit: "शब्दादेव प्रमितः ॥ २४ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 24,
    translation: "From the very term (viz., the term lord applied to it) the (person) measured (by the size of a thumb) (is the Supreme Lord)."
  },
  {
    id: "1.3.25",
    sanskrit: "हृद्यपेक्षया तु मनुष्याधिकारत्वात् ॥ २५ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 25,
    translation: "But with reference to the heart (the highest Self is said to be of the size of a thumb), as men are entitled (to the study of the Vedas)."
  },
  {
    id: "1.3.26",
    sanskrit: "तदुपर्यपि बादरायणः सम्भवात् ॥ २६ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 26,
    translation: "Also (beings) above them (viz., deities) (are entitled to the study of the Vedas), on account of the possibility (of it) according to Badarayana."
  },
  {
    id: "1.3.27",
    sanskrit: "विरोधः कर्मणीति चेन्नानेकप्रतिपत्तेर्दर्शनात् ॥ २७ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 27,
    translation: "If it be said that (the corporeal individuality of the gods involves) a contradiction to (sacrificial) works; we deny that, on account of the observation of the assumption (on the part of the gods) of several (forms at the same time)."
  },
  {
    id: "1.3.28",
    sanskrit: "शब्द इति चेन्नातः प्रभवात्प्रत्यक्षानुमानाभ्याम् ॥ २८ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 28,
    translation: "If it be said (that a contradiction will result) in respect of the word (i.e., the Veda); we deny that, on account of the origin (of the world) from that (i.e., the Word); (this is manifest) from perception (Sruti) and inference (Smriti)."
  },
  {
    id: "1.3.29",
    sanskrit: "अत एव च नित्यत्वम् ॥ २९ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 29,
    translation: "And from this very reason there results the eternity (of the Vedas)."
  },
  {
    id: "1.3.30",
    sanskrit: "समाननामरूपत्वाच्चावृत्तावप्यविरोधो दर्शनात्स्मृतेश्च ॥ ३० ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 30,
    translation: "And on account of the sameness of names and forms (in every cycle of creation) there is no contradiction (to the eternity of the word of the Veda) even in the revolving of the world-cycles, as is seen (from the Sruti) and from the Smriti."
  },

  {
    id: "1.3.31",
    sanskrit: "मध्वादिष्वसम्भवादनधिकारं जैमिनिः ॥ ३१ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 31,
    translation: "On account of the impossibility (of the gods being qualified) for the Madhu-Vidya etc., Jaimini (maintains that the gods do not have the right for knowledge)."
  },
  {
    id: "1.3.32",
    sanskrit: "ज्योतिषि भावाच्च ॥ ३२ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 32,
    translation: "And (the gods are not qualified for Vidyas) because (the words indicating the gods) are used in the sense of (sphere of) light."
  },
  {
    id: "1.3.33",
    sanskrit: "भावं तु बादरायणोऽस्ति हि ॥ ३३ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 33,
    translation: "Badarayana, on the other hand, (maintains) the existence (of qualification on the part of the gods) for there is (possibility of it)."
  },
  {
    id: "1.3.34",
    sanskrit: "शुगस्य तदनादरश्रवणात्तदाद्रवणात्सूच्यते हि ॥ ३४ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 34,
    translation: "(The Sudra's) grief arose on hearing his (i.e., the Rishi's) disrespectful word, on account of his rushing on of that (i.e., grief); (this is indicated) by his (the Rishi's) approaching him."
  },
  {
    id: "1.3.35",
    sanskrit: "क्षत्रियत्वगतेश्चोत्तरत्र चैत्ररथेन लिङ्गात् ॥ ३५ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 35,
    translation: "And because the Kshatriyahood (of Janasruti) is understood from the inferential mark (supplied by his being mentioned) later on with Chaitraratha (who was a Kshatriya himself)."
  },
  {
    id: "1.3.36",
    sanskrit: "संस्कारपरामर्शात्तदभावाभिलापाच्च ॥ ३६ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 36,
    translation: "On account of the purificatory ceremonies being mentioned (in the case of the twice-born) and their absence being declared (in the case of the Sudra)."
  },
  {
    id: "1.3.37",
    sanskrit: "तदभावनिर्धारणे च प्रवृत्तेः ॥ ३७ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 37,
    translation: "And because the inclination (on the part of Gautama to impart knowledge is seen only) on the ascertainment of the absence of that (i.e., Sudrahood)."
  },
  {
    id: "1.3.38",
    sanskrit: "श्रवणाध्ययनार्थप्रतिषेधात्स्मृतेश्च ॥ ३८ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 38,
    translation: "And on account of the prohibition in the Smriti of (the Sudras') hearing, studying, and acquiring the meaning (of the Veda)."
  },
  {
    id: "1.3.39",
    sanskrit: "कम्पनात् ॥ ३९ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 39,
    translation: "(The Prana is Brahman), on account of the trembling (of the whole world)."
  },
  {
    id: "1.3.40",
    sanskrit: "ज्योतिर्दर्शनात् ॥ ४० ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 40,
    translation: "The light (is Brahman), on account of (its) being seen (as Brahman in other scriptural passages)."
  },
  {
    id: "1.3.41",
    sanskrit: "आकाशोऽर्थान्तरत्वादिव्यपदेशात् ॥ ४१ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 41,
    translation: "The ether (is Brahman) as it is designated as something different from name and form, (and) that which is within them (is Brahman)."
  },
  {
    id: "1.3.42",
    sanskrit: "सुषुप्त्युत्क्रान्त्योर्भेदेन ॥ ४२ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 42,
    translation: "And (the individual soul is different from Brahman) because of the states of deep sleep and departing (from the body) (in which states the Supreme Lord is described as different from the individual soul)."
  },
  {
    id: "1.3.43",
    sanskrit: "पत्यादिशब्देभ्यः ॥ ४३ ॥",
    adhyaya: 1,
    pada: 3,
    sutraNumber: 43,
    translation: "And on account of the words like 'Lord' etc."
  },

  // PADA 4
  {
    id: "1.4.1",
    sanskrit: "आनुमानिकमप्येकेषामिति चेन्न शरीररूपकविन्यस्तगृहीतेर्दर्शयति च ॥ १ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 1,
    translation: "If it be said that some (the Sankhyas) also find a scriptural authority (for their Pradhana in the Katha Upanishad); (we say) no, on account of the inferential mark (being mentioned); (what is stated there) is the body, so the Sruti reveals."
  },
  {
    id: "1.4.2",
    sanskrit: "सूक्ष्मं तु तदर्हत्वात् ॥ २ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 2,
    translation: "But the subtle (body is meant by the term Avyakta) on account of its capability (of being so designated)."
  },
  {
    id: "1.4.3",
    sanskrit: "तदधीनत्वादर्थवत् ॥ ३ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 3,
    translation: "On account of its dependence (on the Lord, such a previous seminal condition of the world may be admitted); for if it were otherwise (i.e., independent) there would be no purpose."
  },
  {
    id: "1.4.4",
    sanskrit: "ज्ञेयत्वावचनाच्च ॥ ४ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 4,
    translation: "And because it is not stated that it (the Avyakta) is to be known."
  },
  {
    id: "1.4.5",
    sanskrit: "वदतीति चेन्न प्राज्ञो हि प्रकरणात् ॥ ५ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 5,
    translation: "And if you maintain that the text speaks (of the Pradhana as something to be known, we say) no, for the intelligent (Supreme Self) (is the topic)."
  },
  {
    id: "1.4.6",
    sanskrit: "त्रयाणामेव चैवमुपन्यासः प्रश्नश्च ॥ ६ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 6,
    translation: "And there is question and explanation (concerning three things only)."
  },
  {
    id: "1.4.7",
    sanskrit: "महद्वच्च ॥ ७ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 7,
    translation: "And (the case of the term Mahat) is like that of the term Mahat."
  },
  {
    id: "1.4.8",
    sanskrit: "चमसवदविशेषात् ॥ ८ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 8,
    translation: "If it be said that (the Pradhana) cannot be denoted (by the word 'Aja'), because no special characteristic is stated, (we reply) no, for the teaching is given by means of a cup."
  },
  {
    id: "1.4.9",
    sanskrit: "ज्योतिरुपक्रमा तु तथा ह्यधीयत एके ॥ ९ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 9,
    translation: "But the (elements) beginning with light (are meant by the word Aja); for some read so in their text."
  },
  {
    id: "1.4.10",
    sanskrit: "कल्पनोपदेशाच्च मध्वादिवदविरोधः ॥ १० ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 10,
    translation: "And on account of the statement of the assumption (of these elements for the production of the world) there is nothing contrary to reason (in Aja denoting the elements)."
  },
  {
    id: "1.4.11",
    sanskrit: "न संख्योपसंग्रहादपि नानाभावादतिरेकाच्च ॥ ११ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 11,
    translation: "Even if the number (referred to in the passage of the Svetasvatara Upanishad) be assumed to refer to the (Sankhya categories), there is no defect, on account of the difference of the principles and the excess (over the number twenty-five)."
  },
  {
    id: "1.4.12",
    sanskrit: "प्राणादयो वाक्यशेषात् ॥ १२ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 12,
    translation: "The Pranas etc. (are meant by the five-five people) on account of the complementary passage."
  },
  {
    id: "1.4.13",
    sanskrit: "ज्योतिषैकेषामसत्यन्ने ॥ १३ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 13,
    translation: "In the case of some recensions (the number five is reached by adding) light, food not being mentioned."
  },
  {
    id: "1.4.14",
    sanskrit: "कारणत्वेन चाकाशादिषु यथाव्यपदिष्टोक्तेः ॥ १४ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 14,
    translation: "As (the creator etc. of the world) is described as the cause of ether etc., (Brahman is the cause of the world)."
  },

  {
    id: "1.4.15",
    sanskrit: "समाकर्षात् ॥ १५ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 15,
    translation: "On account of the connection (with Brahman)."
  },
  {
    id: "1.4.16",
    sanskrit: "जगद्वाचित्वात् ॥ १६ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 16,
    translation: "Because it denotes the creator of the world."
  },
  {
    id: "1.4.17",
    sanskrit: "जीवमुख्यप्राणलिङ्गान्नेति चेत्तद्व्याख्यातम् ॥ १७ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 17,
    translation: "On account of the characteristic marks of the individual soul and the chief vital air (it is not Brahman); if it be said so, (we reply) no, because it has already been explained."
  },
  {
    id: "1.4.18",
    sanskrit: "अन्यार्थं तु जैमिनिः प्रश्नव्याख्यानाभ्यामपि चैवमेके ॥ १८ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 18,
    translation: "But Jaimini thinks that (the reference to the individual soul in the text) has another purpose, on account of the question and answer; and thus some also (read in their text)."
  },
  {
    id: "1.4.19",
    sanskrit: "वाक्यान्वयात् ॥ १९ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 19,
    translation: "(The Self to be seen, to be heard etc. is the Supreme Self) on account of the connected meaning of the sentences."
  },
  {
    id: "1.4.20",
    sanskrit: "प्रतिज्ञासिद्धेर्लिङ्गमाश्मरथ्यः ॥ २० ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 20,
    translation: "(The reference to the individual soul is) an indication of the fulfillment of the promise; so Asmarathya thinks."
  },
  {
    id: "1.4.21",
    sanskrit: "उत्क्रमिष्यत एवं भावादित्यौडुलोमिः ॥ २१ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 21,
    translation: "(The initial statement identifies the soul with Brahman) because the soul when it will depart (from the body) is such (i.e., one with Brahman); thus Audulomi thinks."
  },
  {
    id: "1.4.22",
    sanskrit: "अवस्थितेरिति काशकृत्स्नः ॥ २२ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 22,
    translation: "(The initial statement is made) because (Brahman) exists in the condition (of the individual soul); so Kasakritsna thinks."
  },
  {
    id: "1.4.23",
    sanskrit: "प्रकृतिश्च प्रतिज्ञादृष्टान्तानुपरोधात् ॥ २३ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 23,
    translation: "(Brahman is) the material cause also, on account of (this view) not being in conflict with the promissory statements and the illustrating instances."
  },
  {
    id: "1.4.24",
    sanskrit: "अभिध्योपदेशाच्च ॥ २४ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 24,
    translation: "And on account of the statement of will (to create)."
  },
  {
    id: "1.4.25",
    sanskrit: "साक्षाच्चोभयाम्नानात् ॥ २५ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 25,
    translation: "And because both (the origin and the dissolution) are directly stated (to have Brahman as their material cause)."
  },
  {
    id: "1.4.26",
    sanskrit: "आत्मकृतेः परिणामात् ॥ २६ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 26,
    translation: "(Brahman is the material cause) because It created Itself by undergoing modification."
  },
  {
    id: "1.4.27",
    sanskrit: "योनिश्च हि गीयते ॥ २७ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 27,
    translation: "And because Brahman is called the source."
  },
  {
    id: "1.4.28",
    sanskrit: "एतेन सर्वे व्याख्याता व्याख्याताः ॥ २८ ॥",
    adhyaya: 1,
    pada: 4,
    sutraNumber: 28,
    translation: "Hereby all (the doctrines concerning the origin of the world which are opposed to the Vedanta texts) are explained, are explained."
  }
];
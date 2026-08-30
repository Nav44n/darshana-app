export interface VaisesikaSutra {
  id: string;        // Canonical standard ID e.g., "1.1.1"
  book: number;      // Adhyaya (1-10)
  chapter: number;   // Ahnika (1-2)
  sutra: number;     // Canonical Sutra number within the Ahnika
  sanskrit: string;  // Devanagari root text
  text: string;      // The English translation
  topic: string;     // Grouping topic for UI categorization
  commentary: string; // Synthesized philosophical commentary
  diagramId?: string;
  conceptIds?: string[];
}

export const vaisesikaSutrasEn: VaisesikaSutra[] = [

  {
    id: "1.1.1",
    book: 1, chapter: 1, sutra: 1,
    sanskrit: "अथातो धर्मं व्याख्यास्यामः ॥ १ ॥",
    text: "Now, therefore, we shall explain dharma.",
    topic: "Opening of the Treatise",
    commentary: "The opening word 'atha' signals that this treatise presupposes prior learning and now turns to a new subject. Kanada announces that the entire work to follow is an exposition of dharma, framing the whole system of categories as ultimately in service of that goal."
  },
  {
    id: "1.1.2",
    book: 1, chapter: 1, sutra: 2,
    sanskrit: "यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः ॥ २ ॥",
    text: "That by which the attainment of worldly prosperity and final liberation is accomplished is dharma.",
    topic: "Definition of Dharma",
    commentary: "Kanada defines dharma not by listing prescribed acts but functionally, by its twofold fruit: abhyudaya (temporal flourishing) and nihsreyasa (ultimate liberation). This makes dharma an instrumental cause rather than a fixed code of ritual conduct."
  },
  {
    id: "1.1.3",
    book: 1, chapter: 1, sutra: 3,
    sanskrit: "तद्वचनादाम्नायस्य प्रामाण्यम् ॥ ३ ॥",
    text: "The authority of the scriptural tradition rests on the fact that it teaches this dharma.",
    topic: "Authority of the Veda",
    commentary: "The validity (pramanya) of the Vedic tradition is grounded pragmatically: it is authoritative because it successfully communicates dharma as just defined, not on account of any independent claim to revealed status."
  },
  {
    id: "1.1.4",
    book: 1, chapter: 1, sutra: 4,
    sanskrit: "धर्मविशेषप्रसूताद् द्रव्यगुणकर्मसामान्यविशेषसमवायानां पदार्थानां साधर्म्यवैधर्म्याभ्यां तत्त्वज्ञानान्निःश्रेयसम् ॥ ४ ॥",
    text: "Liberation follows from true knowledge — arrived at through the similarities and differences among substance, attribute, action, generality, particularity and inherence — a knowledge that is itself born of a special merit of dharma.",
    topic: "The Aim of the Treatise",
    commentary: "This programmatic sutra sets out the entire remaining project: liberation is reached through accurate knowledge of the six padarthas (later a seventh, absence, is added by the tradition), gained by discerning what they share and how they differ. Everything that follows in the work elaborates this single claim."
  },
  {
    id: "1.1.5",
    book: 1, chapter: 1, sutra: 5,
    sanskrit: "पृथिव्यापस्तेजो वायुराकाशं कालो दिगात्मा मन इति द्रव्याणि ॥ ५ ॥",
    text: "Earth, water, fire, air, ether, time, direction, self and mind — these are the substances (dravyas).",
    topic: "The Nine Substances",
    commentary: "Kanada enumerates the nine fundamental substances that serve as the substrata for all attributes and actions. Five (earth, water, fire, air, ether) are physical elements, while time, direction, self and mind are the non-material substrata needed to account for temporal, spatial, conscious and cognitive phenomena."
  },
  {
    id: "1.1.6",
    book: 1, chapter: 1, sutra: 6,
    sanskrit: "रूपरसगन्धस्पर्शाः संख्याः परिमाणानि पृथक्त्वं संयोगविभागौ परत्वापरत्वे बुद्धयः सुखदुःखे इच्छाद्वेषौ प्रयत्नाश्च गुणाः ॥ ६ ॥",
    text: "Colour, taste, smell and touch; number; magnitude; distinctness; conjunction and disjunction; remoteness and nearness; cognitions; pleasure and pain; desire and aversion; and effort — these are the attributes (gunas).",
    topic: "The Attributes (Gunas)",
    commentary: "The initial list of gunas spans physical qualities (colour, taste, smell, touch), relational and quantitative properties (number, magnitude, conjunction/disjunction), and mental qualities (cognition, pleasure, desire, effort) — all of which inhere in substances rather than existing independently."
  },
  {
    id: "1.1.7",
    book: 1, chapter: 1, sutra: 7,
    sanskrit: "उत्क्षेपणमवक्षेपणमाकुञ्चनं प्रसारणं गमनमिति कर्माणि ॥ ७ ॥",
    text: "Throwing upward, throwing downward, contracting, expanding, and going — these are the actions (karmas).",
    topic: "The Actions (Karmas)",
    commentary: "All physical motion is reduced to five basic types. 'Going' (gamana) is treated as a broad category that later commentators subdivide further, but these five suffice to classify any instance of movement."
  },
  {
    id: "1.1.8",
    book: 1, chapter: 1, sutra: 8,
    sanskrit: "सदनित्यं द्रव्यवत् कार्यं कारणं सामान्यविशेषवदिति द्रव्यगुणकर्मणामविशेषः ॥ ८ ॥",
    text: "Being existent yet non-eternal, having the character of substance, being both effect and cause, and possessing generality and particularity — these are features common to substance, attribute, and action alike.",
    topic: "Shared Features of the First Three Categories",
    commentary: "Before distinguishing dravya, guna and karma from one another, Kanada first notes what unites them: all three are existent, impermanent, and stand as both causes and effects, and all three fall under the twin lenses of generality and particularity."
  },
  {
    id: "1.1.9",
    book: 1, chapter: 1, sutra: 9,
    sanskrit: "द्रव्यगुणयोः सजातीयारम्भकत्वं साधर्म्यम् ॥ ९ ॥",
    text: "That substance and attribute each generate further members of their own kind is a property they share.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "A substance gives rise to new substances and an attribute gives rise to new attributes of the same category — a parallel behavior that marks a genuine similarity between these two padarthas."
  },
  {
    id: "1.1.10",
    book: 1, chapter: 1, sutra: 10,
    sanskrit: "द्रव्याणि द्रव्यान्तरमारभन्ते गुणाश्च गुणान्तरम् ॥ १० ॥",
    text: "Substances produce other substances, and attributes likewise produce other attributes.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "This elaborates the previous sutra: threads (substances) combine to produce cloth (a substance), while the colour of the threads (an attribute) produces the colour of the cloth (an attribute) — cause and effect stay within the same ontological category."
  },
  {
    id: "1.1.11",
    book: 1, chapter: 1, sutra: 11,
    sanskrit: "कर्म कर्मसाध्यं न विद्यते ॥ ११ ॥",
    text: "Action, however, is never produced by another action.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "Unlike substance and attribute, action does not reproduce itself: one motion never directly generates a second motion as its effect, marking a key point of difference (vaidharmya) between karma and the other two categories."
  },
  {
    id: "1.1.12",
    book: 1, chapter: 1, sutra: 12,
    sanskrit: "न द्रव्यं कार्यं कारणं च बाधति ॥ १२ ॥",
    text: "A substance is not destroyed by either its effect or its cause.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "The persistence of substance is asserted here: the arising of an effect-substance or the presence of a cause-substance does not annihilate a given substance, distinguishing its mode of continuity from that of attributes."
  },
  {
    id: "1.1.13",
    book: 1, chapter: 1, sutra: 13,
    sanskrit: "उभयथा गुणाः ॥ १३ ॥",
    text: "Attributes, by contrast, are destroyed in both ways — by their effect and by their cause.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "Where substance survives both its cause and effect, an attribute (such as a particular colour) can be superseded by the arising of a new attribute or undone along with the cause that supported it, showing a genuine asymmetry between dravya and guna."
  },
  {
    id: "1.1.14",
    book: 1, chapter: 1, sutra: 14,
    sanskrit: "कार्यविरोधि कर्म ॥ १४ ॥",
    text: "Action stands opposed to its own effect.",
    topic: "Properties of Dravya, Guna and Karma",
    commentary: "The occurrence of an action (motion) is incompatible with the state its effect produces — for instance the motion of falling ceases the moment its effect, contact with the ground, is achieved — so action is inherently self-terminating in a way substance and attribute are not."
  },
  {
    id: "1.1.15",
    book: 1, chapter: 1, sutra: 15,
    sanskrit: "क्रियागुणवत् समवायिकारणमिति द्रव्यलक्षणम् ॥ १५ ॥",
    text: "Possessing action and attribute, and serving as the inherent (material) cause — this is the defining mark of substance.",
    topic: "Definition of Dravya",
    commentary: "Having established the shared features and differences among the three, Kanada now gives formal definitions. Substance is marked out as whatever can bear both action and attribute and function as the material cause (samavayi-karana) from which an effect inheres."
  },
  {
    id: "1.1.16",
    book: 1, chapter: 1, sutra: 16,
    sanskrit: "द्रव्याश्रय्यगुणवान् संयोगविभागेष्वकारणमनपेक्ष इति गुणलक्षणम् ॥ १६ ॥",
    text: "Residing in a substance, itself devoid of further attributes, and not serving as an independent cause of conjunction or disjunction — this is the defining mark of attribute.",
    topic: "Definition of Guna",
    commentary: "Attribute is defined negatively as much as positively: it depends on a substrate substance, does not itself carry further attributes, and — unlike action — never independently causes contact or separation between things."
  },
  {
    id: "1.1.17",
    book: 1, chapter: 1, sutra: 17,
    sanskrit: "एकद्रव्यमगुणं संयोगविभागेष्वनपेक्षकारणमिति कर्मलक्षणम् ॥ १७ ॥",
    text: "Residing in a single substance, being without attributes, and serving as the independent cause of conjunction and disjunction — this is the defining mark of action.",
    topic: "Definition of Karma",
    commentary: "Completing the trio of definitions, action is what inheres in exactly one substance at a time, carries no attribute of its own, and unlike guna, is precisely what does independently cause conjunction and disjunction."
  },
  {
    id: "1.1.18",
    book: 1, chapter: 1, sutra: 18,
    sanskrit: "द्रव्यगुणकर्मणां द्रव्यं कारणं सामान्यम् ॥ १८ ॥",
    text: "Substance is the common cause of substance, attribute and action.",
    topic: "Common Causality",
    commentary: "Because attributes and actions cannot exist without a substance to inhere in, substance functions as a general (samanya) cause underlying the production of all three categories."
  },
  {
    id: "1.1.19",
    book: 1, chapter: 1, sutra: 19,
    sanskrit: "तथा गुणः ॥ १९ ॥",
    text: "So too is attribute a common cause of substance, attribute and action.",
    topic: "Common Causality",
    commentary: "Just as substance underlies all three, an attribute such as colour or conjunction likewise plays a causal role across the production of substances, further attributes, and actions."
  },
  {
    id: "1.1.20",
    book: 1, chapter: 1, sutra: 20,
    sanskrit: "संयोगविभागवेगानां कर्म समानम् ॥ २० ॥",
    text: "Action is the common cause of conjunction, disjunction and velocity (further motion).",
    topic: "Common Causality",
    commentary: "Rounding out the picture of general causality, action's own distinctive contribution is that it is the shared cause behind contact, separation, and continued motion."
  },
  {
    id: "1.1.21",
    book: 1, chapter: 1, sutra: 21,
    sanskrit: "न द्रव्याणां कर्म ॥ २१ ॥",
    text: "Action is not a cause of substances.",
    topic: "Limits of Karma as Cause",
    commentary: "Having shown what action does cause, Kanada now marks its limit: action alone never gives rise to a new substance, correcting any temptation to treat motion as a material cause in its own right."
  },
  {
    id: "1.1.22",
    book: 1, chapter: 1, sutra: 22,
    sanskrit: "व्यतिरेकात् ॥ २२ ॥",
    text: "Because it is excluded — action is absent at the moment a substance actually arises.",
    topic: "Limits of Karma as Cause",
    commentary: "The reason for the previous claim is given tersely: whenever the effect-substance actually comes into being, the causal action has already ceased, so the two are never co-present, showing action cannot be the substance's producing cause."
  },
  {
    id: "1.1.23",
    book: 1, chapter: 1, sutra: 23,
    sanskrit: "द्रव्याणां द्रव्यं कार्यं सामान्यम् ॥ २३ ॥",
    text: "Substance is the common effect of substances.",
    topic: "Limits of Karma as Cause",
    commentary: "In contrast to action, substances do generally produce further substances as their effect — reaffirming, from the side of effect rather than cause, the special causal role of dravya established earlier."
  },
  {
    id: "1.1.24",
    book: 1, chapter: 1, sutra: 24,
    sanskrit: "गुणवैधर्म्यान्न कर्मणां कर्म ॥ २४ ॥",
    text: "Because of its dissimilarity to attribute, action is not the cause of further actions.",
    topic: "Limits of Karma as Cause",
    commentary: "This closes the sub-argument begun at 1.1.9: although attributes reproduce further attributes, action's dissimilar nature (established across sutras 11-14) means it cannot likewise reproduce further actions — setting up the fuller causal analysis of numbers, conjunctions and throwing that follows."
  },
  {
    id: "1.1.25",
    book: 1, chapter: 1, sutra: 25,
    sanskrit: "द्वित्वप्रभृतयः संख्याः पृथक्त्व संयोग विभागाश्च ॥ २५ ॥",
    text: "Numbers from two upwards, separateness, conjunctions, and disjunctions (are originated by more than one substance).",
    topic: "Causality of Attributes",
    commentary: "Kanada specifies that certain attributes uniquely require multiple substances to exist. While a single attribute like color can reside in one object, you cannot have the number 'two' or the attribute of 'conjunction' with only a single, isolated object."
  },
  {
    id: "1.1.26",
    book: 1, chapter: 1, sutra: 26,
    sanskrit: "असमवायात् सामान्यकार्यं कर्म न विद्यते ॥ २६ ॥",
    text: "Action, which is the joint effect (of an aggregate), is not known, because of its non-combinative nature.",
    topic: "Nature of Action",
    commentary: "Unlike attributes such as conjunction, a single action cannot reside in multiple substances simultaneously. If two objects are moving, there are two separate actions occurring, not one shared action, because action only ever inheres in a single substance at a time."
  },
  {
    id: "1.1.27",
    book: 1, chapter: 1, sutra: 27,
    sanskrit: "संयोगानां द्रव्यम् ॥ २७ ॥",
    text: "A substance is the effect of conjunctions.",
    topic: "Causality of Substance",
    commentary: "When constituent parts (like threads) are brought together, that specific attribute of conjunction acts as the non-inherent cause (asamavayi karana) for the production of the new composite substance (like a cloth)."
  },
  {
    id: "1.1.28",
    book: 1, chapter: 1, sutra: 28,
    sanskrit: "रूपाणां रूपम् ॥ २८ ॥",
    text: "Colour is the effect of colours.",
    topic: "Causality of Attributes",
    commentary: "The attributes of a composite whole are produced by the corresponding attributes of its parts. The color of the constituent threads directly causes and determines the color of the woven cloth."
  },
  {
    id: "1.1.29",
    book: 1, chapter: 1, sutra: 29,
    sanskrit: "गुरुत्वप्रयत्नसंयोगानामुत्क्षेपणम् ॥ २९ ॥",
    text: "Throwing upwards (is the effect) of gravity, volition, and conjunction.",
    topic: "Causality of Action",
    commentary: "Physical actions are complex effects born from multiple causes. To lift an object, the inherent gravity of the object, the conscious effort (volition) of the person, and the physical contact (conjunction) of the hand all act together as necessary causes."
  },
  {
    id: "1.1.30",
    book: 1, chapter: 1, sutra: 30,
    sanskrit: "संयोगविभागाश्च कर्मणाम् ॥ ३० ॥",
    text: "And conjunctions and disjunctions are the effects of actions.",
    topic: "Effects of Action",
    commentary: "This reiterates that the direct, primary result of any physical motion (Karma) is separating from a previous point in space (disjunction) and connecting with a new point (conjunction)."
  },
  {
    id: "1.1.31",
    book: 1, chapter: 1, sutra: 31,
    sanskrit: "कारणसामान्ये द्रव्यकर्मणां कर्माकारणमुक्तम् ॥ ३१ ॥",
    text: "In respect of the general causality of substances and actions, it has been stated that action is not a cause (of substances and actions).",
    topic: "Limits of Action",
    commentary: "Concluding the chapter, Kanada summarizes a key physics rule: while substances and attributes can be the material or non-material causes of new substances or actions, an action itself is never the direct material or combinative cause of a substance or another action."
  },

  {
    id: "1.2.1",
    book: 1, chapter: 2, sutra: 1,
    sanskrit: "कारणाभावात् कार्याभावः ॥ १ ॥",
    text: "In the absence of the cause, there is the absence of the effect.",
    topic: "Nature of Cause and Effect",
    commentary: "Opening the second Ahnika, Kanada states the basic asymmetric dependence of effect upon cause: an effect simply cannot occur unless its cause is present."
  },
  {
    id: "1.2.2",
    book: 1, chapter: 2, sutra: 2,
    sanskrit: "न तु कार्याभावात् कारणाभावः ॥ २ ॥",
    text: "But the absence of the effect does not entail the absence of the cause.",
    topic: "Nature of Cause and Effect",
    commentary: "The dependency runs only one way: a cause can exist prior to, or independent of, whether its effect has yet arisen — clay exists before any pot is made from it."
  },
  {
    id: "1.2.3",
    book: 1, chapter: 2, sutra: 3,
    sanskrit: "सामान्यं विशेष इति बुद्ध्यपेक्षम् ॥ ३ ॥",
    text: "'Generality' and 'particularity' are notions that depend upon the cognizing intellect.",
    topic: "Nature of Cause and Effect; Samanya and Visesa",
    commentary: "Kanada introduces the crucial pair samanya (generality) and visesa (particularity) by noting that which aspect of a thing strikes the mind as general or as particular is relative to the act of cognition itself — the same property can be treated either way depending on the comparison being made."
  },
  {
    id: "1.2.4",
    book: 1, chapter: 2, sutra: 4,
    sanskrit: "भावोऽनुवृत्तेरेव हेतुत्वात् सामान्यमेव ॥ ४ ॥",
    text: "Because it is solely the cause of a recurring, uniform cognition, 'being/existence' (bhava) is generality alone.",
    topic: "Generality and Specificity in Dravya, Guna and Karma",
    commentary: "Whereas most properties can function as either samanya or visesa depending on context, the highest property — existence itself — only ever produces the cognition 'it is', uniformly, and so counts as pure generality, never particularity."
  },
  {
    id: "1.2.5",
    book: 1, chapter: 2, sutra: 5,
    sanskrit: "द्रव्यत्वं गुणत्वं कर्मत्वं च सामान्यानि विशेषाश्च ॥ ५ ॥",
    text: "Substanceness, attributeness, and actionness are each both a generality and a particularity.",
    topic: "Generality and Specificity in Dravya, Guna and Karma",
    commentary: "Unlike bare existence, the category-defining universals — substanceness, attributeness, actionness — are general relative to the many individuals they unite, yet particular relative to the higher universal of existence itself that comprehends them all."
  },
  {
    id: "1.2.6",
    book: 1, chapter: 2, sutra: 6,
    sanskrit: "अन्यत्रान्त्येभ्यो विशेषेभ्यः ॥ ६ ॥",
    text: "Except in the case of the ultimate particulars (visesas), which are particularity alone.",
    topic: "Generality and Specificity in Dravya, Guna and Karma",
    commentary: "The one exception to the dual (general-and-particular) character described above is the class of ultimate, atomic particulars (visesa proper) — these serve only to differentiate and never to unify, so they function purely as particularity, independent of any perceiving mind."
  },
  {
    id: "1.2.7",
    book: 1, chapter: 2, sutra: 7,
    sanskrit: "सदिति यतो द्रव्यगुणकर्मसु सा सत्ता ॥ ७ ॥",
    text: "That by virtue of which substance, attribute and action are each cognized as 'existent' — that is Existence (satta).",
    topic: "Definition of Satta",
    commentary: "Kanada now names and defines the single highest universal: satta, or Existence, is whatever grounds the shared cognition 'it is' across all three of the first categories."
  },
  {
    id: "1.2.8",
    book: 1, chapter: 2, sutra: 8,
    sanskrit: "द्रव्यगुणकर्मभ्योऽर्थान्तरं सत्ता ॥ ८ ॥",
    text: "Existence is something distinct from substance, attribute, and action.",
    topic: "Satta in Dravya, Guna and Karma",
    commentary: "Although existence pervades substance, attribute and action, it is not identical with any of them — it is a separate, seventh-order property that inheres in all three while remaining conceptually distinct from each."
  },
  {
    id: "1.2.9",
    book: 1, chapter: 2, sutra: 9,
    sanskrit: "गुणकर्मसु भावान्न कर्म न गुणः ॥ ९ ॥",
    text: "Since it merely occurs in attribute and action (rather than being one with them), Existence is itself neither an attribute nor an action.",
    topic: "Satta in Dravya, Guna and Karma",
    commentary: "Existence's presence in guna and karma is a relation of residing-in, not identity, so despite inhering there it cannot itself be classified as a guna or a karma — it stands apart as its own kind of universal."
  },
  {
    id: "1.2.10",
    book: 1, chapter: 2, sutra: 10,
    sanskrit: "सामान्यविशेषाभावेन च ॥ १० ॥",
    text: "And also because it has no further generality or particularity of its own.",
    topic: "Satta in Dravya, Guna and Karma",
    commentary: "A second reason Existence cannot be reduced to guna or karma is that, being the highest universal, it has no higher genus above it and no differentiating particulars within it — a criterion the tradition will shortly apply to dravyatva, gunatva and karmatva as well."
  },
  {
    id: "1.2.11",
    book: 1, chapter: 2, sutra: 11,
    sanskrit: "अनेकद्रव्यवत्त्वेन द्रव्यत्वमुक्तम् ॥ ११ ॥",
    text: "'Substanceness' has been explained by the fact of its being applicable to many substances.",
    topic: "The Universal 'Substanceness'",
    commentary: "'Substanceness' (Dravyatva) is a valid universal (Samanya) because it comprehensively applies to all the nine disparate substances (Earth, Soul, Time, etc.), uniting them under a single cognitive classification."
  },
  {
    id: "1.2.12",
    book: 1, chapter: 2, sutra: 12,
    sanskrit: "सामान्यविशेषाभावेन च ॥ १२ ॥",
    text: "And because there is no (higher) generality or particularity in it.",
    topic: "The Universal 'Substanceness'",
    commentary: "Substanceness is a strict universal. It does not possess its own further sub-universals or particularities in the way physical objects do; otherwise, it would lead to an infinite, illogical regress of categories."
  },
  {
    id: "1.2.13",
    book: 1, chapter: 2, sutra: 13,
    sanskrit: "तथा गुणेषु भावाद्गुणत्वमुक्तम् ॥ १३ ॥",
    text: "Similarly, 'Attributeness' has been explained by its existence in all attributes.",
    topic: "The Universal 'Attributeness'",
    commentary: "Just as substanceness unites all substances, the universal 'Attributeness' (Gunatva) unites all 24 disparate qualities (color, taste, desire, etc.) under one categorical umbrella."
  },
  {
    id: "1.2.14",
    book: 1, chapter: 2, sutra: 14,
    sanskrit: "सामान्यविशेषाभावेन च ॥ १४ ॥",
    text: "And because there is no generality or particularity in it.",
    topic: "The Universal 'Attributeness'",
    commentary: "Like substanceness, attributeness is an abstract universal category and does not possess other generalities or particularities within itself."
  },
  {
    id: "1.2.15",
    book: 1, chapter: 2, sutra: 15,
    sanskrit: "कर्मसु भावात्कर्मत्वमुक्तम् ॥ १५ ॥",
    text: "'Actionness' has been explained by its existence in all actions.",
    topic: "The Universal 'Actionness'",
    commentary: "The universal 'Karmatva' unites all forms of motion (upward, downward, expansion, etc.) into the single category of Action."
  },
  {
    id: "1.2.16",
    book: 1, chapter: 2, sutra: 16,
    sanskrit: "सामान्यविशेषाभावेन च ॥ १६ ॥",
    text: "And because there is no generality or particularity in it.",
    topic: "The Universal 'Actionness'",
    commentary: "Actionness is purely a universal concept inhering in all actions, free from possessing its own further abstract properties."
  },
  {
    id: "1.2.17",
    book: 1, chapter: 2, sutra: 17,
    sanskrit: "सदितिलिङ्गाविशेषाद् विशेषलिङ्गाभावच्चैको भावः ॥ १७ ॥",
    text: "Existence (Bhava/Satta) is one, because the mark of 'being existent' is undifferentiated, and because there is no mark of particularity.",
    topic: "Absolute Existence (Satta)",
    commentary: "Concluding Book 1, Kanada asserts that 'Existence' or 'Being' (Satta) is the highest, singular universal. Whether we say 'a pot is' or 'a soul is', the cognition of existence is identical across all categories, proving Satta is one, indivisible, and universal."
  }
,
  // ==========================================
  // BOOK 3: EXAMINATION OF ATMA AND MANA — COMPLETE (41 sutras)
  // CHAPTER 1 (Ahnika 1): sutras 1-20
  // CHAPTER 2 (Ahnika 2): sutras 1-21
  // ==========================================
  {
    id: "3.1.1", book: 3, chapter: 1, sutra: 1,
    sanskrit: "प्रसिद्धा इन्द्रियार्थाः ॥ १ ॥",
    text: "The objects of the senses are well known (uncontroversial).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Opening Book 3, Kanada starts from common ground: nobody disputes that the senses and their objects (colour, sound, and so on) exist. The question to be built from here is what, beyond these, must also exist."
  },
  {
    id: "3.1.2", book: 3, chapter: 1, sutra: 2,
    sanskrit: "इन्द्रियार्थप्रसिद्धिरिन्द्रियार्थेभ्योऽर्थान्तरस्य हेतुः ॥ २ ॥",
    text: "The very fact that senses and their objects are cognized is itself the ground for inferring something other than the senses and objects.",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Kanada's key move: the act of cognizing sense-objects cannot itself be explained by the senses and objects alone — something further (ultimately, atma) must be posited as what does the cognizing."
  },
  {
    id: "3.1.3", book: 3, chapter: 1, sutra: 3,
    sanskrit: "सोऽनपदेशः ॥ ३ ॥",
    text: "That argument (which claims cognition belongs to the body alone) is invalid.",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Kanada anticipates and rejects the materialist rival view that the body itself, without any further self, could account for cognition."
  },
  {
    id: "3.1.4", book: 3, chapter: 1, sutra: 4,
    sanskrit: "कारणाज्ञानात् ॥ ४ ॥",
    text: "Because there is no cognition in the cause (the mere material body).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "The material elements that compose the body show no sign of cognition on their own, so cognition cannot be attributed simply to the causal matter of the body."
  },
  {
    id: "3.1.5", book: 3, chapter: 1, sutra: 5,
    sanskrit: "कार्येषु ज्ञानात् ॥ ५ ॥",
    text: "And yet there would (on the rival view) have to be cognition in every effect (of that matter).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "If cognition were simply an inherent property of matter, absurd consequences follow — every material effect would need to be cognizant, which plainly is not observed."
  },
  {
    id: "3.1.6", book: 3, chapter: 1, sutra: 6,
    sanskrit: "अज्ञानाच्च ॥ ६ ॥",
    text: "And also because of the (observed) absence of cognition (in matter generally).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "The plain, ordinary observation that inert matter does not cognize anything is offered as further, direct confirmation against the materialist position."
  },
  {
    id: "3.1.7", book: 3, chapter: 1, sutra: 7,
    sanskrit: "अन्यदेव हेतुरित्यनपदेशः ॥ ७ ॥",
    text: "'Some other entity is the cause' — this alternative argument too is invalid, as stated.",
    topic: "Nature and Types of Proofs",
    commentary: "Kanada begins a methodological digression on inference itself, first dismissing an under-specified appeal to 'some other cause' as too vague to count as a valid proof."
  },
  {
    id: "3.1.8", book: 3, chapter: 1, sutra: 8,
    sanskrit: "अर्थान्तरं ह्यर्थान्तरस्यानपदेशः ॥ ८ ॥",
    text: "A wholly unconnected entity offered as evidence for another wholly unconnected entity is likewise not a valid proof.",
    topic: "Nature and Types of Proofs",
    commentary: "For an inference to work, the mark and what it proves must stand in a genuine relation; citing something entirely unrelated proves nothing."
  },
  {
    id: "3.1.9", book: 3, chapter: 1, sutra: 9,
    sanskrit: "संयोगिसमवाय्येकार्थसमवायिविरोधि च ॥ ९ ॥",
    text: "What is conjoined, what is inherent, what co-inheres in one and the same thing, and what stands in opposition — these (relations ground valid marks).",
    topic: "Nature and Types of Proofs",
    commentary: "Kanada catalogues the legitimate relations (conjunction, inherence, co-inherence, and opposition/contradiction) by which one thing can validly serve as the mark or proof of another."
  },
  {
    id: "3.1.10", book: 3, chapter: 1, sutra: 10,
    sanskrit: "कार्यं कार्यान्तरस्य ॥ १० ॥",
    text: "An effect can be the mark (proving the existence) of another effect.",
    topic: "Nature and Types of Proofs",
    commentary: "Where two effects share a common cause, the presence of one licenses an inference to the other — smoke, for instance, as a mark of fire's other effects."
  },
  {
    id: "3.1.11", book: 3, chapter: 1, sutra: 11,
    sanskrit: "विरोध्यभूतं भूतस्य ॥ ११ ॥",
    text: "A non-existent contradictory is the mark of what exists.",
    topic: "Nature and Types of Proofs",
    commentary: "The absence of what would contradict a thing can itself serve as valid evidence for that thing's existence."
  },
  {
    id: "3.1.12", book: 3, chapter: 1, sutra: 12,
    sanskrit: "भूतम भूतस्य ॥ १२ ॥",
    text: "What exists is (also) the mark of what does not (yet) exist.",
    topic: "Nature and Types of Proofs",
    commentary: "An existing cause can serve as evidence for an effect not yet manifest, since the cause's presence points toward the effect it is capable of producing."
  },
  {
    id: "3.1.13", book: 3, chapter: 1, sutra: 13,
    sanskrit: "भूतो भूतस्य ॥ १३ ॥",
    text: "What exists is also the mark of what has (already) existed.",
    topic: "Nature and Types of Proofs",
    commentary: "A present existent can equally point back to a prior existent it depended on, rounding out the temporal directions in which valid marks can operate."
  },
  {
    id: "3.1.14", book: 3, chapter: 1, sutra: 14,
    sanskrit: "प्रसिद्धिपूर्वकत्वादपदेशस्य ॥ १४ ॥",
    text: "Because the citing of a mark is always preceded by already-established knowledge (of the relation between mark and marked).",
    topic: "Nature and Types of Proofs",
    commentary: "All of the above inference-patterns are valid precisely because the underlying connection between mark and conclusion was already reliably known beforehand — inference builds on prior certainty, not guesswork."
  },
  {
    id: "3.1.15", book: 3, chapter: 1, sutra: 15,
    sanskrit: "अप्रसिद्धोऽनपदेशः ॥ १५ ॥",
    text: "What is unestablished is a fallacious (invalid) mark.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Turning to what goes wrong in inference, Kanada first names the fallacy of citing a mark whose connection to the conclusion was never actually established."
  },
  {
    id: "3.1.16", book: 3, chapter: 1, sutra: 16,
    sanskrit: "असन् संदिग्धश्चाऽनपदेशः ॥ १६ ॥",
    text: "The non-existent and the doubtful are (both types of) fallacious marks.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Two further fallacies are named: citing a mark that doesn't actually exist in the case at hand, and citing one whose presence is itself uncertain."
  },
  {
    id: "3.1.17", book: 3, chapter: 1, sutra: 17,
    sanskrit: "यस्माद् विषाणी तस्मादश्वः ॥ १७ ॥",
    text: "'Because it has horns, therefore it is a horse' — (an example of a baseless, fallacious mark).",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "A concrete absurd example illustrates the first type of fallacy: horns bear no established connection to horse-hood, so no valid inference to 'horse' follows."
  },
  {
    id: "3.1.18", book: 3, chapter: 1, sutra: 18,
    sanskrit: "यस्माद् विषाणी तस्माद् गौरित्यनैकान्तिकस्योदाहरणम् ॥ १८ ॥",
    text: "'Because it has horns, therefore it is a cow' — an example of the fallacy of an inconclusive (too-broad) mark.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Here the mark (horns) is at least genuinely associated with cows, but since other horned animals exist too, the inference remains inconclusive — a subtler fallacy than the horse example."
  },
  {
    id: "3.1.19", book: 3, chapter: 1, sutra: 19,
    sanskrit: "आत्मेन्द्रियार्थसन्निकर्षादयन्निष्पद्यते तदन्यत् ॥ १९ ॥",
    text: "That (knowledge) which is produced through the proximity of atma, sense, and object is a different (valid) matter, distinct from these fallacious cases.",
    topic: "Existence of Other Atmas",
    commentary: "Having catalogued valid and fallacious inference, Kanada returns to the main line of argument: genuine cognition, properly arising from the conjunction of self, sense-organ, and object, is not vulnerable to the fallacies just described."
  },
  {
    id: "3.1.20", book: 3, chapter: 1, sutra: 20,
    sanskrit: "प्रवृत्तिनिवृत्ती च प्रत्यगात्मानि दृष्टे परत्र लिंगम् ॥ २० ॥",
    text: "Activity and cessation of activity, observed in relation to one's own atma, serve as the mark (of atma) in others as well.",
    topic: "Existence of Other Atmas",
    commentary: "Closing the first Ahnika, Kanada extends the argument from one's own case to other selves: the same behavioral marks (purposive activity and its cessation) that reveal one's own atma license the inference that other bodies, too, are governed by their own atmas."
  },
  {
    id: "3.2.1", book: 3, chapter: 2, sutra: 1,
    sanskrit: "आत्मेन्द्रियार्थसन्निकर्षे ज्ञानस्य भावोऽभावश्च मनसो लिंगम् ॥ १ ॥",
    text: "In cases of proximity between atma, sense, and object, the presence or absence of resulting cognition is the mark of manas (mind).",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "Turning to mind, Kanada notes a puzzle: self, sense-organ and object can all be present together and yet cognition sometimes fails to occur (as in distraction) — this variability itself proves a further factor, mana, that must also be present for cognition to arise."
  },
  {
    id: "3.2.2", book: 3, chapter: 2, sutra: 2,
    sanskrit: "तस्य द्रव्यत्वनित्यत्वे वायुना व्याख्याते ॥ २ ॥",
    text: "Its substancehood and eternality are explained as with vayu.",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "Mind's status as a genuine, eternal substance is established via the same argument-pattern already used for air, rather than requiring separate proof from scratch."
  },
  {
    id: "3.2.3", book: 3, chapter: 2, sutra: 3,
    sanskrit: "प्रयत्नायौगपद्याज्ज्ञानायौगपद्याच्चैकम् ॥ ३ ॥",
    text: "Because efforts do not occur simultaneously, and cognitions do not occur simultaneously, mind is (established to be) one (in each person).",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "The fact that a person can only attend to, or exert effort toward, one thing at a time is explained by mind being a single, minute substance rather than a diffuse plurality — its singularity is what bottlenecks cognition into a strict sequence."
  },
  {
    id: "3.2.4", book: 3, chapter: 2, sutra: 4,
    sanskrit: "प्राणापाननिमेषोन्मेषजीवनमनोगतीन्द्रियान्तरविकाराः सुखदुःखेच्छाद्वेषप्रयत्नाश्चात्मनो लिंगानि ॥ ४ ॥",
    text: "The ascent and descent of vital breath, the closing and opening of the eyes, life, the movements of mind and the other senses, together with pleasure, pain, desire, aversion and effort — these are the marks of atma.",
    topic: "Atma — Marks and Substancehood",
    commentary: "Kanada now assembles a comprehensive list of vital and mental phenomena — breathing, blinking, life itself, sensation, feeling and volition — all of which point beyond mere matter to the presence of a self."
  },
  {
    id: "3.2.5", book: 3, chapter: 2, sutra: 5,
    sanskrit: "तस्य द्रव्यत्वनित्यत्वे वायुना व्याख्याते ॥ ५ ॥",
    text: "Its substancehood and eternality are explained as with vayu.",
    topic: "Atma — Marks and Substancehood",
    commentary: "Just as with air and mind before it, atma's status as a genuine eternal substance follows the same established pattern of argument."
  },
  {
    id: "3.2.6", book: 3, chapter: 2, sutra: 6,
    sanskrit: "यज्ञदत्त इति सन्निकर्षे प्रत्यक्षाभावाद् दृष्टं लिंगं न विद्यते ॥ ६ ॥",
    text: "In the case of (knowing another's atma as) 'this is Yajnadatta', there is no directly perceptible mark even where the senses and cognition are in proximity.",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Kanada notes a genuine limit: while one's own atma is known through internal marks, another person's atma cannot be directly perceived by us at all — the felt certainty 'this is Yajnadatta' does not rest on seeing his soul."
  },
  {
    id: "3.2.7", book: 3, chapter: 2, sutra: 7,
    sanskrit: "सामान्यतोदृष्टाच्चाविशेषः ॥ ७ ॥",
    text: "On the basis of general observation alone, it (another's atma) cannot be inferred as a particular.",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Even general inference from common patterns of behavior can establish that other selves exist in general, but not pin down the particular identity of any one of them."
  },
  {
    id: "3.2.8", book: 3, chapter: 2, sutra: 8,
    sanskrit: "तस्मादागमिकः ॥ ८ ॥",
    text: "Therefore, this (recognition of a particular other self) rests upon tradition/testimony (agama).",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Since neither perception nor general inference can identify a specific other person's atma, our practical certainty about who someone is must ultimately depend on communicated testimony — being told a name, and trusting it."
  },
  {
    id: "3.2.9", book: 3, chapter: 2, sutra: 9,
    sanskrit: "अहमितिशब्दस्य व्यतिरेकान्नागमिकम् ॥ ९ ॥",
    text: "Since the word 'I' differs for each person, (knowledge of one's own atma) is not merely a matter of tradition.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Unlike knowledge of others, the first-person 'I' cannot be a borrowed, testimony-based label, since each person's use of it picks out something different and immediate to themselves."
  },
  {
    id: "3.2.10", book: 3, chapter: 2, sutra: 10,
    sanskrit: "यदि दृष्टमन्वक्षमहं देवदत्तोऽहं यज्ञदत्त इति ॥ १० ॥",
    text: "If it were (merely) a matter of perception (one could simply say) 'I am Devadatta, I am Yajnadatta.'",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada raises a testing case: if the self were straightforwardly perceived like any object, there would be nothing to stop anyone from directly perceiving and claiming to be any other named person — an absurd consequence."
  },
  {
    id: "3.2.11", book: 3, chapter: 2, sutra: 11,
    sanskrit: "दृष्ट आत्मनि लिङ्गे एक एव दृढत्वात् प्रत्यक्षवत् प्रत्ययः ॥ ११ ॥",
    text: "When the mark is seen with reference to one's own atma alone, the resulting cognition, being firm, is as good as direct perception.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "The certainty of self-awareness, though technically arrived at through inference from internal marks, is so immediate and firm that it functions psychologically just like direct perception."
  },
  {
    id: "3.2.12", book: 3, chapter: 2, sutra: 12,
    sanskrit: "देवदत्तो गच्छति यज्ञदत्तो गच्छतीत्युपचाराच्छरीरे प्रत्ययः ॥ १२ ॥",
    text: "'Devadatta goes, Yajnadatta goes' — this could, through a figurative usage, be understood as referring merely to the body.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada considers whether everyday statements about a person 'going' might really just be shorthand for bodily motion, without implying reference to atma at all."
  },
  {
    id: "3.2.13", book: 3, chapter: 2, sutra: 13,
    sanskrit: "सन्दिग्धस्तूपचारः ॥ १३ ॥",
    text: "But this figurative reading itself remains doubtful.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada flags that reducing 'Devadatta goes' to mere bodily reference is not obviously correct either — the matter is left genuinely undecided at this point in the argument."
  },
  {
    id: "3.2.14", book: 3, chapter: 2, sutra: 14,
    sanskrit: "अहमिति प्रत्यगात्मनि भावात्परत्राभावादर्थान्तरप्रत्यक्षः ॥ १४ ॥",
    text: "Because the cognition 'I' occurs with reference to one's own atma and not with reference to another's, it is clearly perceived as a distinct entity.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "The fact that 'I' is never mistakenly applied to someone else's self shows that each person's use of 'I' picks out their own particular atma as something genuinely distinct from every other."
  },
  {
    id: "3.2.15", book: 3, chapter: 2, sutra: 15,
    sanskrit: "देवदत्तो गच्छतीत्युपचारादभिमानात्तावच्छरीरे प्रत्यक्षोऽहंकारः ॥ १५ ॥",
    text: "'Devadatta goes' — through this figurative usage born of self-identification (abhimana), the ego-sense ('I') is, to that extent, perceived with reference to the body.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Ordinary self-identification (ahankara) does loosely bind the felt sense of 'I' to the body in everyday speech, even though a deeper analysis will distinguish body from atma proper."
  },
  {
    id: "3.2.16", book: 3, chapter: 2, sutra: 16,
    sanskrit: "सन्दिग्धस्तूपचारः ॥ १६ ॥",
    text: "But this figurative usage, too, remains doubtful.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Kanada repeats the earlier caution: identifying 'I' with the body via ahankara is only a loose, everyday manner of speaking, not a settled philosophical conclusion."
  },
  {
    id: "3.2.17", book: 3, chapter: 2, sutra: 17,
    sanskrit: "न तु शरीरविशेषाद् यज्ञदत्तविष्णुमित्रयोर्ज्ञानं विषयः ॥ १७ ॥",
    text: "But the cognitions of Yajnadatta and Visnumitra do not, by virtue of any particular feature of their bodies, become objects of each other's awareness.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Whatever loose connection ahankara draws between 'I' and body, one person's bodily particulars never grant them access to another person's private cognition — confirming that cognition tracks the distinct self, not merely the body."
  },
  {
    id: "3.2.18", book: 3, chapter: 2, sutra: 18,
    sanskrit: "अहमिति मुख्ययोग्याभ्यां शब्दवत् व्यतिरेकाव्यभिचाराद् विशेषसिद्धेर्नागमिकः ॥ १८ ॥",
    text: "The cognition of 'I', established individually through its primary and its associated sense — like sabda — is, by its consistent particularity across persons, not dependent on tradition alone.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Kanada concludes this sub-argument: the reliable, person-specific way 'I' functions parallels how sound (sabda) was earlier shown to be reliably known through inference, not testimony alone — so self-awareness stands on its own inferential footing."
  },
  {
    id: "3.2.19", book: 3, chapter: 2, sutra: 19,
    sanskrit: "सुखदुःखज्ञाननिष्पत्त्यविशेषादैकात्म्यम् ॥ १९ ॥",
    text: "Because of the undifferentiated way pleasure, pain and cognition arise (in every body), atma is (in this respect) one.",
    topic: "Unity and Plurality of Atma",
    commentary: "Considered purely in terms of the general kind of thing it is, atma appears as a single universal type, since the same basic process of pleasure, pain and cognition arises identically in every instance."
  },
  {
    id: "3.2.20", book: 3, chapter: 2, sutra: 20,
    sanskrit: "व्यवस्थातो नाना ॥ २० ॥",
    text: "But owing to particular circumstances and limitations, it is many.",
    topic: "Unity and Plurality of Atma",
    commentary: "Despite that underlying uniformity, individual atmas are distinguished from one another by their particular embodied circumstances, giving rise to a real plurality of selves in practice."
  },
  {
    id: "3.2.21", book: 3, chapter: 2, sutra: 21,
    sanskrit: "शास्त्रसामर्थ्याच्च ॥ २१ ॥",
    text: "And also on the strength of the authority of the sastras (scriptures).",
    topic: "Unity and Plurality of Atma",
    commentary: "Closing Book 3, Kanada adds scriptural authority as a further, independent support for the doctrine of a plurality of individual selves, completing the examination of atma and mana."
  }

];

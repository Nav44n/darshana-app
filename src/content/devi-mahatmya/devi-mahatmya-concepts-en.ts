export interface RawConceptEn {
  id: string;
  title: string;
  category: string;
  summary: string;
  relatedVerseIds?: string[];
  relatedConceptIds?: string[];
}

export const deviMahatmyaConceptsEn: RawConceptEn[] = [
  {
    id: 'sadhana-samara',
    title: 'Sādhana-Samara (The Inner Spiritual Warfare)',
    category: 'Spiritual Methodology',
    summary: `**Category**: Spiritual Methodology & Metaphysical Psychology

**Definition**: 
*Sādhana-Samara* (साधना-समर) is the foundational interpretive hermeneutic formulated by Swami Pratyagātmānanda Saraswatī (Brahmachari Eran). It reveals the *Devī Māhātmya* not merely as mythological battles fought in external history, but as the systematic inner war of the human psyche (*Citta*) seeking liberation from ignorance, egoism, and subconscious conditioning.

**Significance**:
Every demon, weapon, chariot, and goddess in the text corresponds to an exact psychospiritual force inside the aspirant (*Sādhaka*). 
- *The Battleground*: The human consciousness (*Kṣetra*).
- *The Adversaries*: The Asuras—instinctual inertia (*Tamas* / Madhu), violent intellectual agitation (*Rajas* / Kaiṭabha), animalistic brute ego (*Mahiṣāsura*), multiplicitous desires (*Raktabīja*), possessiveness (*Niśumbha*), and haughty self-assertion (*Śumbha*).
- *The Weapons*: Mantras, discrimination (*Viveka*), breath restraint (*Prāṇāyāma*), and pure one-pointed focus (*Ekāgratā*).
- *The Victor*: The Divine Mother (*Cit-Śakti*), whose grace descends when human effort reaches sincere, total surrender (*Śaraṇāgati*).`,
    relatedVerseIds: ['dm-1-1', 'dm-2-9', 'dm-3-38', 'dm-8-39', 'dm-13-13'],
    relatedConceptIds: ['cit-shakti', 'suratha-samadhi', 'mahamaya']
  },
  {
    id: 'suratha-samadhi',
    title: 'Suratha & Samādhi (The Active Will & Contemplative Heart)',
    category: 'Human Condition',
    summary: `**Category**: Ontology of Human Aspiration

**Definition**:
The narrative frame of the *Devī Māhātmya* begins with King Suratha and the merchant Samādhi meeting at the forest hermitage of Sage Medhas. 
- **Suratha** (सु-रथ, literally 'he of the well-directed chariot'): Represents the soul\'s active ruling faculty—the ethical intellect and will (*Rājasika-sattva*). Though just and capable, he was betrayed by deceitful ministers and cast out of his city.
- **Samādhi** (समाधि, literally 'absorbed contemplation'): Represents the feeling heart and merchant mind (*Tāmasika-vairāgya* converting to Sattva). Expelled by greedy sons and kin who plundered his life\'s savings, he nevertheless weeps with unceasing affection for them.

**Significance**:
Both characters embody the central paradox of human suffering: knowing that worldly attachments are fleeting, hollow, and deceptive, yet remaining helplessly bound by emotional pain. 
They seek Sage Medhas (Intuitive Wisdom) not for worldly therapy, but to understand why even the wise (*Vivekī*) are dragged into delusion. Suratha\'s eventual boon represents the fulfillment of righteous action in the world (*Pravṛtti Mārga*), while Samādhi\'s boon represents total spiritual liberation (*Nivṛtti Mārga*).`,
    relatedVerseIds: ['dm-1-1', 'dm-1-4', 'dm-13-13'],
    relatedConceptIds: ['sadhana-samara', 'mahamaya']
  },
  {
    id: 'mahamaya',
    title: 'Mahāmāyā (The Divine Veiling & Unveiling Power)',
    category: 'Metaphysics',
    summary: `**Category**: Supreme Metaphysics & Theology

**Definition**:
*Mahāmāyā* (महामाया) is the sovereign transcendental power of the Supreme Lord (*Bhagavatī*), identical with Pure Consciousness (*Cit-Śakti*). She is not a negative illusion (*Mithyā* in the sense of void), but the real, dynamic creative matrix of all manifest existence.

**Significance**:
Sage Medhas defines Her dual cosmic operation:
1. **Avidyā-Rūpa (The Veiling Power)**: She casts the spell of duality over the universe, forcibly dragging (*Balād-ākṛṣya*) even enlightened intellects into identification with body and mind.
2. **Vidyā-Rūpa (The Liberating Grace)**: When recognized, revered, and propitiated through spiritual surrender (*Śaraṇāgati*), She removes the veil of ignorance and becomes the giver of supreme beatitude and liberation (*Muktir-bhavati muktaye*).
Thus, the world is neither an accidental error nor an evil prison; it is Her conscious play (*Līlā*), through which the soul travels from slumber to divine awakening.`,
    relatedVerseIds: ['dm-1-4', 'dm-1-54', 'dm-13-13'],
    relatedConceptIds: ['cit-shakti', 'sadhana-samara']
  },
  {
    id: 'cit-shakti',
    title: 'Cit-Śakti (Conscious Energy as the Ground of Reality)',
    category: 'Non-Dual Philosophy',
    summary: `**Category**: Core Non-Dual Epistemology

**Definition**:
In Śākta philosophy, *Cit-Śakti* (चित्-शक्ति) is the dynamic, self-luminous power of Pure Consciousness. Unlike classical Sāṃkhya (where Prakṛti is insentient) or certain Vedantic interpretations (where Māyā is an inexplicable illusion), the *Devī Māhātmya* establishes that Nature, Energy, and Consciousness are indivisibly one.

**Significance**:
The Goddess is celebrated as both the transcendent witness beyond the Guṇas (*Guṇāśrayā*) and the intimate texture of manifest reality (*Guṇamayī*). 
In the *Aparājitā Stuti*, She is recognized as present in every heartbeat: as consciousness (*Cetanā*), intellect (*Buddhi*), sleep (*Nidrā*), memory (*Smṛti*), hunger (*Kṣudhā*), and compassion (*Mātṛ-rūpa*). 
To fight the spiritual war (*Sādhana-Samara*) is not to repress the mind, but to perceive Cit-Śakti shining through every mental ripple.`,
    relatedVerseIds: ['dm-1-54', 'dm-1-66', 'dm-2-9', 'dm-5-14', 'dm-11-10'],
    relatedConceptIds: ['mahamaya', 'aparajita-stuti']
  },
  {
    id: 'madhu-kaitabha',
    title: 'Madhu & Kaiṭabha (Sensual Lethargy & Mental Obstinacy)',
    category: 'Psychological Obstacles',
    summary: `**Category**: Obstacles of the First Episode (*Prathama Carita*)

**Definition**:
The two demons that arose from the ear-wax of the sleeping Lord Viṣṇu during the cosmic dissolution (*Pralaya*):
- **Madhu** (मधु, 'sweetness'): Represents *Tamas*—the sweet, narcotic lethargy of sensory pleasure, spiritual sleepiness, and contentment in inertia.
- **Kaiṭabha** (कैटभ, 'crooked insect'): Represents *Rajas*—stubborn mental restlessness, aggressive argumentation, and unyielding intellectual doubt.

**Significance**:
Together, they threaten Lord Brahmā (the creative spiritual impulse). They cannot be defeated so long as the soul\'s higher consciousness (Lord Viṣṇu) remains trapped in the slumber of *Yoga-Nidrā*. 
Only when Brahmā prays to Mahāmāyā to withdraw Her veil from Viṣṇu\'s senses does Divine Consciousness awaken and crush the demons on His thighs—symbolizing the solid foundation of ethical purity and unwavering spiritual determination (*Tapas*).`,
    relatedVerseIds: ['dm-1-66'],
    relatedConceptIds: ['sadhana-samara', 'mahamaya']
  },
  {
    id: 'mahishasura',
    title: 'Mahiṣāsura (The Shapeshifting Animalistic Ego)',
    category: 'Psychological Obstacles',
    summary: `**Category**: Obstacles of the Middle Episode (*Madhyama Carita*)

**Definition**:
The buffalo-demon who overthrew Indra and all the gods to conquer heaven. In *Sādhana-Samara*, Mahiṣāsura represents the brute, stubborn, animalistic ego (*Ahaṅkāra*).

**Significance**:
Mahiṣa is uniquely characterized as *Kāmarūpī*—capable of assuming any form at will. When challenged:
- He becomes a wild buffalo (brute instinct).
- He transforms into a roaring lion (pride and ferocity).
- He changes into an elephant (stubborn weight and immovable habit).
- He morphs into an armed swordsman (intellectual justification).
This illustrates how the human ego constantly adopts disguises: crushed in the guise of vanity, it resurfaces as spiritual conceit, false martyrdom, or self-pity. 
He can only be killed by Durgā stepping on his throat (restraining the speech and breath centers of *Viśuddha*) and piercing his heart with the trident of integrated Gunas.`,
    relatedVerseIds: ['dm-2-9', 'dm-3-38'],
    relatedConceptIds: ['sadhana-samara', 'cit-shakti']
  },
  {
    id: 'aparajita-stuti',
    title: 'Aparājitā Stuti (The Invincible Hymn to All-Pervading Mother)',
    category: 'Philosophical Hymns',
    summary: `**Category**: Contemplative Non-Dual Hymns

**Definition**:
The hymn in Chapter 5 sung by the gods to invoke the Goddess on the snow-clad peaks of the Himalayas: *"Yā devī sarvabhūteṣu cetanetyabhidhīyate..."*

**Significance**:
This hymn is the philosophical foundation of Śākta mysticism. The gods do not praise an anthropomorphic deity, but recognize the Goddess as the twenty-four ontological principles manifest in all beings:
1. *Cetanā* (Consciousness)
2. *Buddhi* (Intellect)
3. *Nidrā* (Rest / Sleep)
4. *Kṣudhā* (Hunger / Vital Desire)
5. *Chāyā* (Shadow / Physical Vessel)
6. *Śakti* (Dynamic Power)
7. *Tṛṣṇā* (Yearning / Thirst)
8. *Kṣānti* (Patience and Forgiveness)
9. *Śānti* (Peace)
10. *Śraddhā* (Unshakable Faith)
11. *Mātṛ-rūpa* (Motherly Love and Compassion)
Recitation of this hymn aligns the individual psyche with the macrocosmic Goddess, transforming everyday human experiences into doorways of divine recognition.`,
    relatedVerseIds: ['dm-5-14'],
    relatedConceptIds: ['cit-shakti', 'narayani-stuti']
  },
  {
    id: 'raktabija',
    title: 'Raktabīja (The Infinite Reproduction of Vāsanās)',
    category: 'Psychological Obstacles',
    summary: `**Category**: Obstacles of the Final Episode (*Uttama Carita*)

**Definition**:
The demon whose each fallen drop of blood upon the earth instantly generates a thousands-strong army of identical clones. 

**Significance**:
*Raktabīja* represents the deep-seated subconscious impressions (*Vāsanās* / *Saṃskāras*) of desire and craving. 
When an aspirant attempts to suppress or fight a desire directly on the plane of the conscious mind (the earth), each violent blow merely causes the desire to branch out into new rationalizations and subtle cravings. 
No weapon of the individual faculties can prevail against this self-multiplying demon. The only resolution is *Kālī*—who catches the blood directly on Her outstretched tongue in the unmanifest sky of consciousness before it touches the soil of the mind, starving the chain reaction at its root.`,
    relatedVerseIds: ['dm-8-39'],
    relatedConceptIds: ['kali-chamunda', 'sadhana-samara']
  },
  {
    id: 'kali-chamunda',
    title: 'Kālī / Cāmuṇḍā (The Transcendent Time-Devouring Consciousness)',
    category: 'Divine Forms',
    summary: `**Category**: Transcendental Divine Manifestation

**Definition**:
The dark, awe-inspiring form of the Mother that emanated from the furrow of Durgā\'s forehead when attacked by Caṇḍa and Muṇḍa. Wearing a garland of severed heads and a skirt of human arms, She wields the scimitar of absolute detachment and the noose of divine restraint.

**Significance**:
*Kālī* represents the unconditioned, time-devouring (*Kāla*) transcendental consciousness. 
- *The Dark Complexion*: Represents the unmanifest Void (*Śūnya*) in which all colors and mental forms dissolve.
- *The Garland of Fifty Heads*: The fifty letters of the Sanskrit alphabet (*Mātṛkā-Varṇa*), symbolizing the destruction of the illusion of conceptual language and thought.
- *The Tongue Devouring Raktabīja\'s Blood*: Pure, alert witness-consciousness (*Sākṣī-Caitanya*) intercepting incoming sensory impressions before they seed subconscious attachments.`,
    relatedVerseIds: ['dm-8-39'],
    relatedConceptIds: ['raktabija', 'cit-shakti']
  },
  {
    id: 'shumbha-nishumbha',
    title: 'Śumbha & Niśumbha (Asmitā & Mamakāra)',
    category: 'Psychological Obstacles',
    summary: `**Category**: Obstacles of the Final Episode (*Uttama Carita*)

**Definition**:
The brother demons who represent the final, most refined fortress of human bondage:
- **Śumbha** (शुम्भ): The master ego (*Asmitā*—"I am the supreme controller and sovereign").
- **Niśumbha** (निशुम्भ): The clinging possessiveness (*Mamakāra*—"All treasures, women, and lands belong to me").

**Significance**:
Together with their emissaries *Dhūmralocana* (smoky/distorted perception) and *Caṇḍa-Muṇḍa* (cruelty and low intellectual pettiness), they conquer the cosmic order. 
When Niśumbha is destroyed, Śumbha confronts the Goddess alone, mocking Her for relying on the Mātṛkās. In response, Devi utters the supreme non-dual revelation: *"Ekaivāhaṃ jagatyatra dvitīyā kā mamāparā"* ("I alone exist in this universe; who is there second to Me?"). 
The re-absorption of all goddesses into Her single person dissolves the last dualistic illusion of egoism, ushering in the peace of supreme liberation.`,
    relatedVerseIds: ['dm-10-5'],
    relatedConceptIds: ['matrikas', 'cit-shakti']
  },
  {
    id: 'matrikas',
    title: 'Saptamātṛkās (The Seven Divine Energy Centers)',
    category: 'Divine Forms',
    summary: `**Category**: Sacred Psychospiritual Energies

**Definition**:
The divine mothers who emerged from the bodies of the gods to assist Durgā:
1. **Brahmāṇī**: Creative life-breath and speech (seated on a swan, holding a rosary and water-pot).
2. **Māheśvarī**: Transcendental stillness and supreme knowledge (riding a bull, holding a trident).
3. **Kaumārī**: Untainted spiritual willpower and youth (riding a peacock, holding a spear).
4. **Vaiṣṇavī**: All-sustaining cosmic preservation and harmony (riding Garuḍa, holding a conch and discus).
5. **Vārāhī**: Steadfast downward grounding, lifting consciousness out of the mire of matter (boar-faced).
6. **Nārasiṃhī**: Terrible fiery dissolution of fear and inner demons (lion-headed).
7. **Aindrī**: Cosmic sovereignty and sensory mastery (thousand-eyed, wielding the thunderbolt).

**Significance**:
In *Sādhana-Samara*, the Mātṛkās represent the specialized chakric energies and vital prāṇic streams functioning within the human body. When unified under the central direction of Durgā, they effortlessly rout the demonic forces of distraction and ignorance.`,
    relatedVerseIds: ['dm-10-5'],
    relatedConceptIds: ['cit-shakti', 'shumbha-nishumbha']
  },
  {
    id: 'narayani-stuti',
    title: 'Nārāyaṇī Stuti (The Hymn of Universal Auspiciousness)',
    category: 'Philosophical Hymns',
    summary: `**Category**: The Supreme Benediction of Chapter 11

**Definition**:
The triumphant choral hymn sung by the Devas after the destruction of Śumbha and Niśumbha: *"Sarvamaṅgalamāṅgalye śive sarvārthasādhike..."*

**Significance**:
The *Nārāyaṇī Stuti* represents the culmination of all spiritual practice (*Sādhanā*). 
The Mother is revealed as *Nārāyaṇī*—the conscious sovereign partner of the Indwelling Self (*Nārāyaṇa*). 
- She is *Sarvamaṅgala-māṅgalyā*: The auspiciousness within all that is auspicious.
- She is *Śivā*: The benevolent, non-dual silence beyond fear.
- She is *Sarvārtha-sādhikā*: The fulfiller of the four noble aims of life (Dharma, Artha, Kāma, Mokṣa).
- She is *Śaraṇyā*: The unconditional refuge for the destitute, troubled, and striving souls.
For the spiritual warrior who has conquered inner obstacles through *Sādhana-Samara*, this hymn is the sweet dawn of unshakeable non-dual peace (*Śānti*).`,
    relatedVerseIds: ['dm-4-3', 'dm-11-10'],
    relatedConceptIds: ['cit-shakti', 'aparajita-stuti']
  }
];

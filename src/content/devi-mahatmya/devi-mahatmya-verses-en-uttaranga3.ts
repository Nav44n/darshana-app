// Uttaranga auxiliaries, set 3: the Parishista collection (pp.760-794).
//
// SOURCE: same Guptavati-adi sapta-tika Drive PDF (814 pp) as
// devi-mahatmya-verses-en-uttaranga.ts / -uttaranga2.ts. Page map lives in
// devi-mahatmya-source-provenance.ts — each entry below cites its pages.
// (Citations give the PDF-index page; the edition's own printed foliation
// runs ~6 behind, e.g. index p760 = printed 754.)
// Nothing here duplicates ch01-ch13, Kavaca/Argala/Kilaka, Rgvedokta
// Devi Sukta, Rahasya digests, Kshama, mantra-vibhaga notes, or sets 1-2.
// Short stotras are transcribed in full; long lists (Pitha 108, Mahavidya
// samvada, Kalika-mahatmya, Laghu 18, Kali 17, Para-devi 1000-name mala,
// 30 Samputas) follow this directory's digest rule: frame + opening and
// closing verses summarised, bodies indexed with counts, mula not reproduced.
// Part of the Devi Mahatmya EN verses. Merged by
// devi-mahatmya-verses-en.ts. Do not import directly.
import type { RawVerseEn } from './devi-mahatmya-verses-en';

const PROVENANCE =
  'Guptavati-adi sapta-tika Durga-Saptashati edition (Drive PDF, 814 pp).';

export const deviMahatmyaVersesEnUttaranga3: RawVerseEn[] = [
  {
    id: 'dm-pitha-rahasya',
    number: 'Pīṭha-rahasya (108 seats, digest)',
    section: 'Pariśiṣṭa: Pīṭha-rahasya (Matsya-purāṇa)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Pitha-rahasya, index pp.760-762 (printed 754-756): Suta-Devi samvada, "Shrimatsya-purane trayodasho'dhyaye varnitam" colophon; Daksha's question (v.10) + Devi's sarvavyapi-uttara (vv.11-12) + 108 pitha-name verses (vv.13-40: Varanasi-Vishalakshi ... Chitta-Brahmakala) + phala (vv.41-46) summarised here (mula not reproduced) in frame and close; middle names indexed.`
      }
    ],
    translation: `Suta said: "Thus addressed, Daksha asked: 'Faultless one — in which holy seats am I to behold You, and by which names to praise You?' The Goddess answered: 'At all times, in all beings, everywhere on earth am I to be beheld; in all worlds there is nothing at all apart from Me. Yet the seats where seekers of success should behold Me, seekers of welfare remember Me — those I shall tell in truth. In Varanasi as Vishalakshi, in Naimisha as Lingadharini; in Prayaga the Goddess Lalita, on Gandhamadana as Kamakshi...' (108 seats through Bhairava-dharana, Pitha-names to Chitta-Brahmakala). 'Who remembers or hears this is freed from all sins; the man who, having bathed in these seats, beholds Me, freed of every sin dwells a kalpa in Shivapura.'"`,
    commentary: `**Condensed digest (Matsya-purana adhyaya 13; frame + close summarised (mula not reproduced)):** the theology comes before the geography — verse 11 first refuses all pitha-limitation ("nothing apart from Me"), and only then verse 12 concedes the concession-seats for siddhi/bhuti seekers. The 108 run Varanasi to Chitta, mixing tirtha (Prayaga, Pushkara, Kedara, Ganga, Prabhasa), kshetras (Vindhya-Vindhyavasini, Karavira-Mahalakshmi, Dakshina-Kamakhya implied), and inner seats (Chitta-Brahmakala, Sarvasharira-Shakti, Vedavadana-Gayatri) — outer and inner pithas in one garland, like the Ashtottara hiding antahkarana names. Phala (vv.41-46): smarana/shravana frees all papa; snana-darshana wins a kalpa in Shivapura; tritya/ashtami shravana before Shiva wins many sons; daily patha in devarchana-vidhi reaches Brahman.`,
    keyPoints: ["**Nothing apart from Me first**: Sarvavyapi-uttara (v.11) precedes the 108 — geography serves, never bounds.", "**108 outer + inner**: Tirtha-ksetras and Chitta/Brahmakala in one garland."]
  },
  {
    id: 'dm-mahavidya-rahasya',
    number: 'Mahāvidyā-rahasya (10 forms, digest)',
    section: 'Pariśiṣṭa 3: Mahāvidyā-rahasya (Mahābhāgavata)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'mahamaya', 'cit-shakti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Mahavidya-rahasya (Mahabhagavata Upapurana, ashtama adhyaya) index pp.763-769 (printed 757-763): Daksha-yajna samvada vv.1-46 (Sati's plea 23-29, Shiva's niti 3-22 + 30-36 refusal) + Sati's bhayanaka-rupa assumption vv.44-60 (digambara, chaturbhuja, mundamala, ardha-chandra-shekhara) + ten-direction stations vv.56-60 + Sati's self-naming vv.61-62 + Shiva's prashna v.63 + Devi's per-direction mapping vv.64-70 + phala/secrecy vv.71-75; key verses summarised here (mula not reproduced).`
      }
    ],
    translation: `Sati said: "Go or not, Mahadeva, as You please — I shall go there; give me leave, Maheshvara! A daughter who hears of a great sacrifice-festival at her father's house — how can she hold firm and stay home?" Shiva answered: "Sati — those who fear no dishonour, the ill-souled, go where dishonour awaits; the honoured never enter the house of the non-worshipper, for a non-worshipper's worship is no worship." ... Then, enraged, red-eyed, Sati assumed the terrible form — ash-smeared limbs, fearful laugh, four arms, garlanded with heads — and, as Shiva fled in fear to every quarter, stood before him in ten directions as ten supreme forms. Shiva asked, trembling: "Who are You, dark one — where is Sati, my life's beloved?" Sati answered: "Do You not see me, Mahadeva — Sati standing before You? Kali, Tara, Lokeshvari, Kamala, Bhuvaneshvari; Chhinnamasta, Shodashi, Sundari, Bagalamukhi; Dhumavati and Matangi — these are their names." The Goddess mapped them: "Dark before You is Kali; above, Tara of Mahakala-form; headless and fearful at Your side, Chhinnamasta; at Your left, Bhuvaneshvari; behind You, foe-crushing Bagala; in the fire-corner, widow-formed Dhumavati; southwest, Tripurasundari; in the wind-quarter, Matanga-maiden; northeast, Shodashi. And I am terrible Bhairavi — Shiva, fear not!"`,
    commentary: `**Condensed digest (Mahabhagavata 8; stations summarised (mula not reproduced)):** the samvada first stages dharma-niti (uninvited going = death, vv.3-22; jamata-shvashura reciprocity vv.6-10) only to overrule it by Shakti-svatantra — Sati's "ajnapaya va no va, satyam vadami" (v.32) and Shiva's own surrender ("yatharuchi kuru", v.43). The ten forms are directional guards (dig-bandha): Kali front, Tara above, Chhinnamasta at side, Bhuvaneshvari left, Bagala behind, Dhumavati agneya, Sundari nairritya, Matangi vayavya, Shodashi aishanya, Bhairavi centre — the compass itself as Her body. Close (vv.71-75): all ten grant chaturvarga to daily bhaktas and perform the shatkarmas; all are gopaniya — mantra, yantra, puja-homa-vidhi, purashcharana, stotra, kavaca, achara-niyama — "tvameva vakshyasi, vibho" (only Shiva may speak them; His agama-shastra shall be famed on earth). Operative prayogas are indexed, not reproduced.`,
    keyPoints: ["Aham tu Bhairavi"]
  },
  {
    id: 'dm-kalika-mahatmya',
    number: 'Kālikā-sthāna-māhātmya (Śaila-kṣetra, digest)',
    section: 'Pariśiṣṭa 4: Kālikā-māhātmya (Skanda-purāṇa)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'future-avatars'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Kalika-sthana-mahatmya-stuti, index pp.770-774 (printed 764-774+fn): Vyasa frame vv.1-12 (Shaila-kshetra praise, Kaushiki/Chanda-Munda/Raktabija past, deva-matri worship) + deva-stuti vv.14-19 (Yoganidra, Madhu-Kaitabha, Mahisha pasts) + Devi's Jahnavi-snana appearance + Indra's sharanagati vv.24-26 + Devi's pratijna vv.28-29 + sthala-phala vv.34-42 ("iti Skandapurane Manasakhande Shaila-parvata-Kalika-mahatmye saptanavatitamo'dhyayah", 97/3-44); key verses summarised here (mula not reproduced). Edition footnote (p.774) glosses Shaila as the Pithoragarh hill and Jahnavi as its stream, and cross-refs Saptashati 5/10 and 5/84-88.`
      }
    ],
    translation: `Vyasa said: "Fortunate ones — in the Shaila region the field of Kali is praised; as Kalika She is famed in that most-beautiful Shaila land. Even by remembering Kali, destroyer of Kali-age stains — child-seizers, planet-lords flee; fear-giving demons run; men win their longed-for success." ... Indra said: "Now, cheated and conquered by the demon Shumbha, the gods have come to You for refuge, Supreme Lady!" The Goddess answered: "I shall slay the ill-conducted one with friends and kin — Shumbha and Nishumbha, Chanda and Munda both. Till I slay that vilest demon, here in the Shaila land I shall dwell — no doubt." ... "Who read collectedly on ashtami and chaturdashi, who hear with devotion — they reach the supreme goal."`,
    commentary: `**Condensed digest (Skanda-purana Manasa-khanda 97):** the tract does for place what Pitha-rahasya does for seats — fixes ONE ksetra (Shaila, glossed by the edition as the Pithoragarh hill, not "any mountain") where Kaushiki's past victories (Chanda-Munda, Raktabija-blood-drinking) make Her permanently resident with deva-shaktis and sixteen Matris. The deva-stuti (vv.14-19) recaps all three caritas as credentials before asking; Devi's pratijna (vv.28-29) mirrors the Murti-rahasya future-tense ("hanishyami... yavat... vasishyami"). Sthala-phala (vv.36-40): worshipped with bali/gandha/pushpa/akshata per Agama, devotees never see durgati, daridrya-bhaya, graha-roga or shatru-bhaya; snana in Kalika-waters + puja leads to Shivapura.`,
    keyPoints: ["I shall slay... till then I dwell"]
  },
  {
    id: 'dm-laghu-saptashati',
    number: 'Laghu-Saptaśatī (Pr̥thvīdhara, digest)',
    section: 'Pariśiṣṭa 5: Laghu-Saptaśatī-stotra (Caṇḍī-stotra)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Laghu-Saptashati-stotra (Chandi-stotra, Prithvidhara, grace of Shambhunatha/Siddhanatha) index pp.775-778 (printed 769-772): mangala-sharanagati + karana-stotra (Brahma-adi worship, sindura-varna dhyana) + siddhanatha-bhasha verse + 15 charita-smarana verses (Varuna-bija, Vishnu-mohana, Madhu-Kaitabha, Mahisha, Dhumralochana, Chanda-Munda, Shivadvaiti, Raktabija, Shumbha-Nishumbha, pralaya-tejas, aruna-dhyana v.13, antar-bahir kshama v.15) + phala v.16 + karta colophon vv.17-18 + full viniyoga (Sadashiva rishi, Anushtubh, Trimurti devata, Aim bija, Hrim shakti, Shrilakshmi kilaka, chaturvidha-purushartha); frame and close summarised here (mula not reproduced).`
      }
    ],
    translation: `"Salutations to Shankara's beloved, to Narayana's beloved — to Shri Chandika I go for refuge. What knowers call the home of karma and dharma — sacrifice and all — bears fruit only through You; since You are the sentience within, weighing this in mind, O Eternal — I take refuge at Your feet." (Then the whole Saptashati in fifteen breaths: Her Varuna-seed remembered daily wins kingdoms; Vishnu Himself lies enchanted in Her delusion-net; Madhu-Kaitabha, Mahisha, Dhumralochana-as-homa, Chanda-Munda under Her sword, Shiva Himself as Her messenger, Raktabija-seeds swallowed from the sky, Shumbha-Nishumbha led to heaven, demons as moths in Her world-fire.) "Whatever whole offence I did from delusion — Mother, boon-giver, dwelling within and without — forgive! Who reads this demon-ending, matchless Chandi-charita daily at three times — fortunate, happy, victorious, beloved, patient, generous, long-bodied, a king of poets he becomes. By grace of Shambhunatha, named Siddhanatha, lord of the single world, and from all Agamas — Prithvidhara made this hymn."`,
    commentary: `**Condensed digest (18 verses + viniyoga):** the Laghu earns its name — each carita-episode compressed to one shloka (vv.2-12), so the whole war fits a single sitting between two sharanagatis. Verse 13 fixes the aruna-dhyana (lightning-dark? no — aruna-hued, sudha-kalasha + matulunga + khetaka + gada in four hands); verse 14 turns inward ("antah sthita... tantu-rupa... bahir vishva-rupa") then begs avana as nishprapancha; verse 15 makes the kshama internal-external ("bahir-antar-sthe"). The karta-colophon (vv.17-18) attributes authorship to prasada + Agama, and the viniyoga seals it as mantra (Trimurti-devata, Aim-Hrim-Shrilakshmi) for all four purusharthas — a pocket Saptashati, complete with rishi-chandas-devata.`,
    keyPoints: ["**Whole war, one sitting**: Fifteen verses carry Madhu to Shumbha — epitome between two refuges.", "**Pocket mantra**: Full viniyoga for four aims; Prithvidhara claims prasada, not invention."]
  },
  {
    id: 'dm-apaduddhara',
    number: 'Durgā-āpaduddhāra-stotra 1-13',
    section: 'Pariśiṣṭa 6: Durgā-āpaduddhāra-stotra',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Durga-apaduddhara-stotra complete, pp.779-780 (printed 773-774): 9 refrain-verses (vv.1-9, each closing "namaste jagattarini! trahi Durge!") + phala vv.10-13 + "jagadambarpaṇamastu"; verse 2 (Mahayogini/jnana/sadananda) summarised in brackets, all else verbatim.`
      }
    ],
    translation: `"Salutations, Refuge, Shivaa, Compassionate! All-pervading, world-formed! Worshipped-lotus-feet! Form pondered by the world! World-ferrying one — save, Durga! (To the Great Yogini, Gnosis-formed, ever-bliss-formed!) Of the orphan, the lowly, the thirst-crazed, the pain-struck, the frightened, the bound creature — You alone are the way, the crossing. In forest, in battle, in the dreadful, amid foes, in fire, in ocean, in wilderness, in the king's house — You alone are the way, the crossing-boat. For embodied ones drowning in the shoreless, most-uncrossable, most-dreadful sea of calamity — You alone are the way, the crossing-cause. Chandika — whose fierce-staff sport cuts yet leaves whole every foe — You alone are the way, the crossing-seed. You are Ida, Pingala, Sushumna; Devi Durga of dread sound, Sarasvati, Arundhati, unfailing-formed; Glory, Shachi, Kalaratri — You are the goal. Refuge of gods, siddhas, vidyadharas, sages, men, beasts, the robber-terrified, the palace-held, the disease-crushed — You alone are refuge, Devi Durga — be gracious! This hymn I have spoken for lifting from calamity; read at three twilights or one, it frees from dread crisis — no doubt — in earth, heaven or underworld. Whole or single verse, read ever with devotion — all ill done is dropped, the supreme station won. What on earth is not accomplished by its reading? This king of praises I have told in brief."`,
    commentary: `**One refrain, nine waves:** every verse lands on "trahi Durge" — the stotra is a single cry with changing addresses (Sharanye, Mahayogini, eka-gati, nistara-nauka/hetu/bija, nadi-traya, nama-vali, eka-sharana). Verse 4's disaster-list (aranya/rana/shatru/anala/sagara/prantara/rajagriha) is the Phalashruti inventory compressed to one line; verse 7 internalises Her as breath-channels; verse 9 universalises refuge across gods to beasts. Phala (vv.10-13): eka-shloka suffices; trisandhya or eka-sandhya; "kim na sidhyati bhutale". Closed with offering to Jagadamba.`,
    keyPoints: ["trahi Durge"]
  },
  {
    id: 'dm-kali-stotra',
    number: 'Kālī-stotra 1-17 (Kālī-rahasya, digest)',
    section: 'Pariśiṣṭa 7: Kālī-stotra (Kālī-rahasya)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Kali-stotra (Kalirahasyoktam) pp.781-783 (printed 775-777): 17 shardulavikridita verses, single refrain "kshantavyo me'paradhah prakatitavadane! Kamarupe! Karale!"; life-stage confessions 1-5 (past births, childhood, youth, householder-anxiety, old age), worship-failures 6-7, dhyana 8, Brahma-etc vs self 9, raga-dvesha 10, roga-daridrya 11, mithya-moha 12, garbha-tattva surrender 13-14, Mahavidya-identity 15, phala 16-17; frame and close summarised here (mula not reproduced), middle indexed.`
      }
    ],
    translation: `"Since in former bodies I never took to Your feet nor worshipped them, today I am crushed by strong belly-fires of fame-hunger; cast through births, never to return — where is refuge, where service? Forgive my offence, open-faced, wish-formed, Terrible! In childhood, dull-minded with childish wants, sunk in child's play — I never knew You, Mother, remover of Kali-stains, giver of enjoyment and release; no conduct, no worship, no sacrifice-tale, no remembrance, no service — forgive! ... (Youth with serpent-senses looting others' women and wealth; householder begging-bowled, body broken by 'where shall I get, where go' worry; old age witless, coughing, toothless, burnt by remorse with only death to meditate; never bath-flower-offering-feeling-devotion-nyasa-worship; Brahma-Vishnu-Isha ever ripen at Your lotus while I, luckless, beg lust-driven; wrath-lust, kaula-less; sick, poor, sleep-slothful; false passions; womb-born, sense-made — all Yours.) You are Kali and Tara, mountain-daughter, Sundari, Bhairavi; Durga, Chhinnamasta, Bhuvana, Lakshmi, Shiva; Dhuma, Matangini, Bagala — and all auspicious names are Yours — forgive! Who bows to Devi with this hymn ever devoted crosses a hundred hard-pass sins; obstacles perish; he becomes knower, speaker, king of poets, wealthy, generous, merciful, sinless, stainless, house-lord, truth-voiced, righteous — and crosses the world-ocean holding Girija's feet."`,
    commentary: `**A life in fifteen confessions:** where Shankara's Kshamapana pleads theology (kuputro), the Kali-stotra pleads biography — five age-bands (past-birth, bala, yauvana, praudha, vrddha) then five failure-bands (achara, snana-pushpa, dhyana, lobha, raga-dvesha) then surrender-bands (roga, moha, garbha, tattva: "tvam bhumis... tvam akasham... atma tvam"). Verse 15 resolves identity into the ten Vidyas (Mahavidya-rahasya in one line: Kali, Tara, Girisuta, Sundari, Bhairavi, Durga, Chhinnamasta, Bhuvana, Lakshmi, Shiva, Dhuma, Matangini, Bagala). Phala (vv.16-17): putra-buddhi kshamapana ("kshamaye putrabuddhaya"), jnata-vakta-kavisha, Girija-pada-avalamba across samsara-abdhi.`,
    keyPoints: ["**Biography as apology**: Five ages, five failures — confession by life-stage, not doctrine.", "**Ten Vidyas, one forgiveness**: Verse 15 gathers Mahavidyas; refrain never varies."]
  },
  {
    id: 'dm-shanti-stotra',
    number: 'Śānti-stotra 1-9 (Yāmala)',
    section: 'Pariśiṣṭa 8: Śānti-stotra (Yāmala)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Shanti-stotra (Yamaloktam) complete, p.784 (printed 778): 9 verses — raksho-ghna opening (v.1), jayanti benedictions (vv.2-3), deva-vastu-tushti (vv.4-5), sarva-bhuta-sukha (v.6), rishi-shanti (v.7), Bhairava-ajna curse on dushakas (v.8), Shiva-ajna close (v.9); verbatim.`
      }
    ],
    translation: `"Om. Perish the preta-kushmandas; perish the human corrupters. Auspicious be the guardians of the lineage to the seekers. Victorious all Mothers; victorious the Yogini hosts; victorious the perfected Dakinis; victorious the guru-lines. All the good sacrifice, the pure Kaulas; endowed with samaya-conduct, victorious the worshipping men. Let the Anima-perfected sacrifice; rejoice the kula-deities; guard the Indra-led gods; be satisfied the dwelling-deities. Moon, sun and gods — be pleased by my devotion; stars, planets, yogas, karanas, signs. Go all happy — serpents, rivers, birds; beasts, crawlers, mountains, valleys, caves. Rishis and brahmanas all — ever make peace for me; well-offered be the good; friends abide; worshippers stand. Who with sinful mind corrupt — mockers of me and of worshippers, blind-hearted worldly mockers who saw the order — let them go to destruction here, now, by Shri Bhairava's command. Who harm seekers, corrupt gods-and-lineage, mock me, hate seekers — into Dakini mouths they go; perish by Shiva's command."`,
    commentary: `**Two movements:** benediction (vv.1-7) then boundary (vv.8-9). The first half blesses every order — Matris to gurus, sadhus to Kaulas, Anima-siddhas to kula-devatas, grahas to guhas, snakes to caves — "sarve te sukhino yantu" extended to landscape itself. The second half draws the Kaula line: vidushana (corrupting the rite) and ninda (mocking the seeker) are the unforgivables, answered not by argument but by Bhairava/Shiva-ajna. Placed right after the Kali confessional and before the Pauranika abhishekas, it functions as raksha-bandha for the whole Uttaranga.`,
    keyPoints: ["**Bless all, then bound all**: Sukha for every being through caves; destruction only for rite-corrupters.", "**Ajna, not anger**: Both curses run by Bhairava/Shiva command — lineage authority, not personal revenge."]
  },
  {
    id: 'dm-pauranika-shanti',
    number: 'Paurāṇika-śānti-mantrāḥ 1-9',
    section: 'Pariśiṣṭa 9: Paurāṇika-śānti-mantrāḥ',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Pauranika-shanti-mantras complete, p.785 (printed 779): 9 abhisheka-mantras — Trimurti + Chaturvyuha (vv.1-2), Dikpalas (vv.2-3), fourteen Matris + devapatnis (v.4), navagrahas (vv.5-6), rishi-to-apsaras orders (v.7), astra-shastra-herb-jewel-kala (v.8), river-to-mountain landscape (v.9, "dharmakamarthasiddhaye"); verbatim.`
      }
    ],
    translation: `"Om. Let the gods anoint you — Brahma, Vishnu, Maheshvara; Vasudeva, Jagannatha, mighty Sankarshana; Pradyumna and Aniruddha — be for my victory. Akhandala, lord Fire, Yama, Nirriti; Varuna, Wind, the wealth-lord, Shiva; with Brahma, Shesha — the world-guardians ever guard you. Kirti, Lakshmi, Dhriti, Medha, Pushti, Shraddha, Kshama, Mati; Buddhi, Lajja, Vapus, Shanti, Kanti, Tushti — these Mothers; let these divine wives, assembled, anoint you. Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn — the planets anoint you; Rahu and Ketu, satisfied; gods, danavas, gandharvas, yakshas, rakshasas, pannagas. Om — rishis, munis, cows, divine mothers; divine wives, planets, nagas, daityas, apsaras-women; weapons, all sciences, kings, vehicles; herbs, jewels, time's limbs; rivers, oceans, hills, tirthas, clouds, trees — let these anoint you for the winning of dharma, kama, artha."`,
    commentary: `**Abhisheka, not stuti:** every verse lands on abhishinchantu/pantu — the seeker (or the Devi-image, per prayoga) is sprinkled by ranks in order: Trimurti, Chaturvyuha, Dikpalas, Matris, Grahas, all orders of beings, all instruments of power, all landscape. Where the Yamala Shanti (previous card) blesses outward ("sukhino yantu"), these pour inward ("tvam abhishinchantu") — the pair closes protection from both sides. Note the trivarga seal (v.9: dharmakamartha, moksha implied) — abhisheka for the worldly aims, consistent with parishista function.`,
    keyPoints: ["**Pour inward**: Abhishinchantu ranks from Trimurti to rivers — consecration by the whole cosmos.", "**Trivarga seal**: Dharma-kama-artha named; the fourth aim walks in unsaid."]
  },
  {
    id: 'dm-para-devi-sukta',
    number: 'Para-devī-sūkta-mālā-mantra (digest)',
    section: 'Pariśiṣṭa 10: Śrī-para-devī-sūkta (mālā-mantra)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'mahamaya', 'cit-shakti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Shri-para-devi-sukta (mala-mantra) index pp.786-789 (printed 780-783): Chandika-namaskara + prithvi/adhara-shakti asana + atma/vidya/shiva/sarva-tattva-shodhana + achamana/pranayama + viniyoga (Markandeya-Medha rishis, Gayatri-adi chandas, Trishakti-Paramba devata, Aim-Hrim-Klim) + rishi-chandas-devata/anga nyasas + kara/hridaya/shikha-netra-karna-nasa-mukha-guhya + dig-nyasa + yogadhya-dhyana + manasopachara + akshamala-puja/prarthana + 108 "Om Aim Hrim Klim" samputa + 1000-name mala (hundreds 100-1000 marked in print: Jagadadyabija ... Namaste-svaha) + phala vv.1-7 ("Shrijagadambarpaṇamastu"); frame, dhyana and phala summarised here (mula not reproduced), 1000-name body indexed.`
      }
    ],
    translation: `Ritual frame (verbatim) then thousand-name garland (indexed): viniyoga assigns the hymn to Markandeya-Medha, many metres, triple-Shakti Paramba, seed-power-pin Aim-Hrim-Klim, "for all my pondered wishes' winning, in reading and in japa." Nyasas plant rishi in head, metres in mouth, Devi in heart, seed in secret, power in feet, pin in navel; fingers, heart-to-weapon, crown-to-secret, ten directions; then the Yogadhya dhyana — born of the great fire that left the gods' bodies rich in yoga, moon-white, play-arch-browed, fair-high-breasted, halo-blazing, bandhuka-red — "let Shri Chandika guard on every side." Mala worshipped ("in you the four aims are laid — grant me success"), then 108 Aim-Hrim-Klim, then the thousand names (Jagadadyabija, dayakure, sarvadeva-tejas, Mahamaya-forms, Viriñchi-praised, Vishnu-body-clad, Madhu-Kaitabha-slayer, Indra-served, Jaya-Jayanti-Aparajita, sun-crore-fire ... Matris, Narasimhi, thirty-three-crore-praised, universe-queen, eighty-four-lakh-muni-praised, seven-crore-mantra-formed, Kala-Kashtha-time, fourteen-world-mother, Garuda-rider, bija-kuta-bodied, Sundari-host-served-feet, Mahatripurasundari, bow-arrow-sword-staff-conch-lotus-bearer, Bhairava-worshipped, Yogini-ringed, Kali-Tara-Tarala-Sutara-Jvalamukhi-Chhinnamasta-Bhuvaneshvari-Tripura, Vishnu-chest-ornament, womb-sorrow-remover, Kumari, Devi-sukta-ten-hundred-syllabled, Chandi-Chamunda, Kali-Lakshmi-Sarasvati-triple-bodied — "be gracious, fulfil all wishes, cut all obstacles, destroy planet-fever-fears, tame all worlds, show liberation's roads, light knowledge's road, kill ignorance-dark, grow grain-wealth, make all welfare, guard me, ferry all dangers, perfect my diamond-body" — sealed Chamundayai-vicche-svaha, namaste-svaha). Phala: "who reads  — all success, victory everywhere; lion over elephant-foes in battle; wishes tamed, kings tamed; thrice-daily reading melts obstacles and cruel planet-pains; ends hostile rites; thousandfold recitation grants wishes, two-thousand tames even queens; three lakh over three years — beholds Chandika face to face, boon-risen. This supreme secret guard strivingly, speak to none, like a treasure."`,
    commentary: `**Why an index:** the mala is a small book (tattva-shodhana, six nyasa sets, dhyana, mala-prarthana, 1000 names, 7 phala verses); transcribing 1000 names would triple this file. This entry fixes the prayoga skeleton verbatim (viniyoga-dhyana-phala) and inventories the name-body by its print-hundreds so every epithet-cluster is findable. Note the architecture: Vedic frame (tattva-shodhana) + Tantric body (bija-kuta-sharira, "nanabija-mantra-raja-virajite") + Puranic close (darshana-phala) — the whole corpus in one mala. The gopaniya seal (v.7, "nidhanam iva") matches Kunjika/Mahavidya secrecy.`,
    keyPoints: ["Nanabija-mantra-raja-virajite"]
  },
  {
    id: 'dm-siddha-samputa',
    number: 'Siddha-sampuṭa-mantrāḥ (30 purposes, index)',
    section: 'Pariśiṣṭa 11: Siddha-sampuṭa-mantrāḥ (prayoga table)',
    devanagari: "",
    iast: "",
    conceptIds: ['parishista-samgraha', 'phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Siddha-samputa-mantras (30 numbered purposes) index pp.790-794 (printed 784-788): Hindi prayoga introduction (700 mantra-units; shraddha-vidhi parayana; samputa method) + 30 purpose-heads each with adhyaya-excerpt verse(s): 1 samuhika-kalyana (1.57-devya-yaya) ... 30 svapna-siddhi (svapna-prarthana); first and last summarised here (mula not reproduced), all 30 purposes inventoried in commentary; closing "***" (mantra-vibhaga tables follow p.795).`
      }
    ],
    translation: `Prayoga table (first/last summarised, 30 purposes indexed (mula not reproduced)): "In the Markandeya-Purana Devi-mahatmya, shloka + ardha-shloka + uvacha together make 700 mantras, famed as Durga-Saptashati, granting all four aims; whatever feeling and wish a man recites with faith and rule, that very fruit ripens — countless men have directly felt it. Here some chosen mantras: read the Saptashati samputa-wrapped (samputita) with them, duly, and personal-and-collective aims ripen." 1 collective welfare (devya-yaya) → 2 world-inauspiciousness/fear (yasya-prabhava) → 3 world-guardianship (ya-shrih) → 4 world-abhyudaya (vishveshvari-tvam) → 5 pervasive calamity (devi-prapannarti) → 6 papa-tapa (devi-prasida-paripalaya) → 7 vipatti (sharanagata-dina) → 8 vipatti+shubha (karotu-sa-nah) → 9 fear, triple (sarvasvarupe / etatte-vadanam / jvala-karala) → 10 papa (ghanta verse) → 11 roga (rogan-asheshan) → 12 mahamari (jayanti-mangala-kali) → 13 arogya-saubhagya (dehi-saubhagyam) → 14 sulakshana-patni (patnim-manoramam) → 15 badha-shanti (sarvabadha) → 16 sarva-abhyudaya (te-sammata) → 17 daridrya-duhkha (durge-smrita) → 18 raksha (shulena-pahi) → 19 vidya + matri-bhava (vidya-samasta) → 20 kalyana (sarvamangala) → 21 shakti (srishti-sthiti) → 22 prasannata (pranatanam) → 23 upadrava (rakshamsi-yatra) → 24 badha-mukti + dhana-putra (sarvabadha-vinirmukto) → 25 bhukti-mukti (vidhehi-devi) → 26 papa-bhakti (natebhyah) → 27 svarga-moksha (sarvabhuta-yada) → 28 svarga-mukti (sarvasya-buddhi) → 29 moksha (tvam-vaishnavi) → 30 dream-verdict (durge-devi-namas-tubhyam ... svapne sarvam pradarshaya).`,
    commentary: `**How samputa works (per the Hindi intro, p.790):** the chosen verse wraps (samputa = envelope) the Saptashati recitation — read before and after, or capping each adhyaya — so the whole 700-unit parayana is aimed at one purpose. The 30 heads run loka-scale (1-6: samuhika, ashuba-bhaya, raksha, abhyudaya, vipatti, papa-tapa) down to deha-scale (10-14: papa, roga, mahamari, arogya, patni) then up to moksha-scale (24-29: badha-mukti, bhukti-mukti, svarga, moksha), closing with the one meta-purpose: asking Her in dream whether the siddhi ripened (30). Every verse is an adhyaya excerpt already transcribed in ch01-ch13 — hence index, not duplicate, under the no-double-counting rule.`,
    keyPoints: ["**Envelope, not excerpt**: Samputa wraps the whole parayana toward one aim — recite the verse around the 700.", "**Loka to moksha ladder**: Collective welfare descends to body, ascends to release; dream-verdict closes."]
  }
];

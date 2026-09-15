// Uttaranga auxiliaries, set 2: Guru-Kilaka, Kshamapana, Saptashloki,
// Dvatrimsha-namamala, Kunjika (full), plus condensed indexes for the
// long lists (Ashtottara-108, Manasa-puja, Atharvashirsha).
//
// SOURCE: same Guptavati-adi sapta-tika Drive PDF (814 pp) as
// devi-mahatmya-verses-en-uttaranga.ts. Page map lives in
// devi-mahatmya-source-provenance.ts — each entry below cites its pages.
// Nothing here duplicates ch01-ch13, Kavaca/Argala/Kilaka, Rgvedokta
// Devi Sukta, Rahasya digests, Kshama-prarthana or mantra-vibhaga notes.
// Part of the Devi Mahatmya EN verses. Merged by
// devi-mahatmya-verses-en.ts. Do not import directly.
import type { RawVerseEn } from './devi-mahatmya-verses-en';

const PROVENANCE =
  'Guptavati-adi sapta-tika Durga-Saptashati edition (Drive PDF, 814 pp).';

export const deviMahatmyaVersesEnUttaranga2: RawVerseEn[] = [
  {
    id: 'dm-guru-kilaka',
    number: 'Guru-Kīlaka-paṭala (digest)',
    section: 'Pūrvāṅga: Rahasya-tantra Guru-Kīlaka (unpinning rite)',
    devanagari: "",
    iast: "",
    conceptIds: ['keelaka-stotra', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Guru-Kilaka-patala pp.62-64 (Rahasya-tantra; Shiva-uvacha; 23 verses; opening 6 summarised here (mula not reproduced); dana-pratigraha vidhi gloss p.63).`
      }
    ],
    translation: `Shiva said: "Faultless one, this was given by me of old to Sanatkumara; he gave it to Samvarta, and he to another in turn. When the Chandi-hymn spread everywhere on earth, the Vedic, ritual and Tantric paths were all alike obstructed by this swift-success-granting (text). Then, desiring to make them fruitful on earth, I pinned this mantra under the name of giving-and-receiving (dana-pratigraha) — that giving-receiving is declared the pin (kilaka). From then this mantra stands pinned; it ripens to success for none who turn their face from the pin. But men who recite it WITH the pin, in supreme gladness — on them the Goddess is pleased, and thence all prosperities."`,
    commentary: `**Condensed digest (23 verses, pp.62-64; opening 6 verbatim):** verses 7-12 stage the inner vow ("tvatprasutas-tvadajnapta...": born of You, commanded by You, Your servant, set to Your purpose; all my earned wealth — kingdom, strength, treasury, army — I lay at Your feet) performed on Krishna-chaturdashi/ashtami, offered then received back by Her grace (the Kilaka's dadati-pratigrihnati in ritual form). Verses 13-14 divide the received wealth fivefold (three parts own use, one part deva-pitri-atithi rites, one part to the guru — "tena devi prasidati"). Verses 15-23 close with the Navakshara-jnana vow (jiva-brahma ground, "tattvamasi" essence, lifelong Saptashati-japa without pramada, Chandogya "naaham brahma nirakuryam" seal, yearly Sharada/varshika observance, gopaniya injunctions). The p.63 Hindi gloss walks the whole dana-pratigraha sankalpa step by step; no verse invented here.`,
    keyPoints: ["**Pin = giving-receiving**: Dana-pratigraha is the kilaka; recitation without it does not ripen.", "**Fivefold division**: Three parts own use, one part five-yajna dharma-expense, one part to the guru.", "**Lifelong vow**: Navakshara known as jiva-brahma medicine, Saptashati-japa without negligence."]
  },
  {
    id: 'dm-kshamapana-1',
    number: 'Devyaparādha-kṣamāpana 1-6 (Śaṅkara)',
    section: 'Uttarāṅga: Devyaparādha-kṣamāpana-stotra',
    devanagari: "",
    iast: "",
    conceptIds: ['phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Devyaparadha-kshamapana-stotra (Shankaracharya) pp.725-726, verses 1-6 summarised with Hindi rendering noted; refrain "kuputro jayeta kvacidapi kumata na bhavati".`
      }
    ],
    translation: `"Mother, I know no mantra, no yantra, no praise; no invocation, no meditation, no hymns or legends; not your gestures, nor how to wail in longing — one thing only I know: following after You, which takes away all suffering. Whatever lapse at your feet came from not knowing the rule, from having no wealth, from sloth, from inability to perform — forgive all that, Mother, saviour of all; a bad son may sometimes be born, but never a bad mother. On earth you have many straightforward sons, Mother; among them I am your most wayward child; my abandonment of you is unworthy — but yours of me would be too, Shivaa, for a bad son may be, never a bad mother. Mother of worlds, I never served your feet nor gave you much wealth, yet the matchless love you show me has one cause only: a bad son may be, never a bad mother. Past eighty-five, tangled in serving many gods, I have now dropped them all; if even now, Mother of Lambodara, your grace does not come, supportless, to whose refuge shall I go? Aparna — when a single letter of your mantra enters the ear, even a dog-cooker becomes a honey-voiced speaker and a pauper sports fearless among crores of gold; who then can know, Mother, the fruit of those who duly practise the recitation?"`,
    commentary: `**What this is:** Shankara's 12-verse apology, placed right after the 6-verse Kshama-prarthana (p.723). Where Kshama-prarthana is terse and liturgical ("mantrahina kriyahina bhaktihina... paripurnam"), Kshamapana is autobiographical — an old man (past 85) who spent life serving many gods, owns no mantra/yantra/stuti, and pleads the one theology the whole Uttaranga has built: kuputro jayeta (refrain, vv.2-4). The Hindi rendering (pp.725-726) tracks each verse plainly. Second half (7-12) in dm-kshamapana-2.`,
    keyPoints: ["**One theology, thrice sealed**: Kuputro jayeta — a bad son may be, never a bad mother (vv.2-4).", "**Following suffices**: Tvad-anusarana alone is klesha-harana (v.1).", "**Single letter suffices**: One mantra-letter in the ear remakes speaker and pauper (v.6)."]
  },
  {
    id: 'dm-kshamapana-2',
    number: 'Devyaparādha-kṣamāpana 7-12 (Śaṅkara)',
    section: 'Uttarāṅga: Devyaparādha-kṣamāpana-stotra',
    devanagari: "",
    iast: "",
    conceptIds: ['phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Devyaparadha-kshamapana-stotra concl. pp.727-728, verses 7-12 verbatim; colophon "iti Shankaracharya-virachitam".`
      }
    ],
    translation: `"Smeared with pyre-ash, poison-fed, sky-clad, matted, snake-garlanded, skull-bearing Pashupati holds the sole rank of Lord of worlds — Bhavani, this is the fruit of the tradition of taking YOUR hand in marriage. Moon-faced Mother, I crave neither liberation nor worldly splendour, neither gnosis nor even happiness; this only I beg: may my life pass crying 'Mridani, Rudrani, Shiva, Shiva, Bhavani!' Shyama, never duly worshipped with many offerings, what has my harsh brooding speech not done amiss? Yet if you yourself bestow even a little grace on me, the orphan — Mother, that alone befits YOU. Durga, ocean of mercy, sunk in calamity I remember you now — count it not my cunning; hungry-thirsty children remember their mother. Jagadamba, what wonder if your mercy rests whole on me? A mother never forsakes even a son heaped with offence upon offence. No sinner equals me, no sin-destroyer equals You — knowing this, Mahadevi, do as befits."`,
    commentary: `**Close of the apology:** verse 7 turns the lens on Shiva himself — even Pashupati's Jagadisha-rank is phala of Her panigrahana. Verse 8 refuses all four purusharthas for one boon: a life spent japing Her names. Verse 10 answers the obvious charge ("you remember Her only in trouble") with hunger-thirst. Verse 12 is the signature Shankara close (matsamah pataki / tvatsama papa-ghni). Colophon attributes to Shankaracharya; Hindi rendering pp.727-728.`,
    keyPoints: ["**Shiva’s rank is Hers**: Even Pashupati’s lordship is Her panigrahana-phala (v.7).", "**One boon**: No moksha, no bhoga — only a life of name-japa (v.8).", "**No sinner like me, no cleanser like You** (v.12)."]
  },
  {
    id: 'dm-saptashloki',
    number: 'Saptaślokī Durgā 1-7',
    section: 'Uttarāṅga: Saptaślokī Durgā (Kali-age epitome)',
    devanagari: "",
    iast: "",
    conceptIds: ['narayani-stuti', 'phalastuti', 'mahamaya'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Saptashloki Durga pp.729-731 complete (Shiva-Devi samvada frame: "kalau karyasiddhyartham upayam bruhi"; viniyoga: Narayana rishi, Anushtubh, Mahakali-Mahalakshmi-Mahasarasvati; 7 verses summarised (mula not reproduced); Hindi rendering; closed "iti saptashloki durga sampurna"). Verses excerpt adhyayas (1.55, 4.17/11.12-family, 11.10-12, 4.23/5.29-family, 12/11-family).`
      }
    ],
    translation: `"Even the minds of the wise the Goddess Mahamaya forcibly drags to delusion. Durga — remembered, you take fear from every creature; pondered by the well, you grant most wholesome wisdom; remover of poverty, sorrow, fear — who but You is ever-moist-hearted to help all? O all-auspicious of auspicious things, Shivaa, accomplisher of all aims, refuge, three-eyed Gauri, Narayani, salutations! Devoted to saving the surrendered lowly anguished, remover of every pain, Narayani, salutations! All-formed, queen of all, endowed with every power, save us from fears, Durga Devi, salutations! Pleased, you destroy all diseases; angered, you destroy all longed-for desires; the sheltered never perish — the sheltered become shelters. O queen of all, as you quell every affliction of the three worlds, so destroy our foes."`,
    commentary: `**Kali-age epitome:** Shiva asks for a yatna-upaya "kalau karyasiddhyartham"; Devi answers with the Amba-stuti — seven verses excerpted from the adhyayas (hence indexed here in full as parayana text, cross-referenced to dm-1/dm-4/dm-5/dm-11/dm-12). Viniyoga names all three Mahadevis jointly (the only stotra here so assigned). The Hindi rendering (pp.729-731) is plain; no Sanskrit tika glosses these excerpts verse-by-verse in this edition.`,
    keyPoints: ["**Seven verses, whole text**: Mahamaya (1.55) → Durge-smrita → two Narayani salutations → Sarvasvarupa armour → tushta/rushta → Sarvabadha close.", "**Sheltered become shelters** (v.6): Refuge propagates refuge."]
  },
  {
    id: 'dm-dvatrimsha',
    number: 'Durgā-dvātriṃśan-nāmamālā (32 names)',
    section: 'Uttarāṅga: 32-name garland (calamity refuge)',
    devanagari: "",
    iast: "",
    conceptIds: ['phalastuti', 'sadhana-samara'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Durga Dvatrimsha-namamala pp.736-738 complete (deva-prarthana frame: Brahma-adi devas ask the speedy refuge-upaya; Devi answers with the 32; Hindi enumerates 1-32; phala: 108 recitations free all fears; purashcharana 30,000; tila-homa vidhi).`
      }
    ],
    translation: `"Durga, quencher of Durga-pains, warder of Durga-falls, cutter of the hard-to-cross, accomplisher of the hard, destroyer of Durga; lifter from the hard-pass, slayer of Durga, remover of the hard-to-reach; giver of hard-to-win gnosis, wildfire to the demon-world of Durga; the Hard herself, Her hard light, Her hard Self-nature; giver of the hard path, hard to know, shelter of the hard; seat of hard gnosis, shining in hard meditation; hard delusion, hard to approach, hard-meaning-natured; slayer of hard demons, bearer of hard weapons; hard-limbed, hard to fathom, hard to reach, queen of the hard; terrible-hard, radiant-hard, light-hard, cleaver of Durga — the man who reads this garland of My names is freed from all fears, no doubt."`,
    commentary: `**Frame (p.736 Hindi):** after Mahisha's fall, Brahma-adi devas, granted a boon-choice, ask not for goods but for the quick-refuge upaya for beings in ; Devi answers with the 32, "rahasyarupa... trilokya-sama stuti". Phala-vidhi (p.737-738): 108 recitations free the bound, the king-condemned, the battle-ringed, the tiger-caught; 1000/10,000/100,000 recitations (self or brahmana-led) free all apatti; 100,000 madhura-tila homas in siddha-agni; purashcharana 30,000. Operative homa counts are indexed, not ritualised, per this file's header rule.`,
    keyPoints: ["hard-to-cross"]
  },
  {
    id: 'dm-kunjika-1',
    number: 'Siddha-Kuñjikā 1-4 + mūla-mantra (Rudrayāmala)',
    section: 'Uttarāṅga: Siddha-Kunjika (mantra-quickener)',
    devanagari: "",
    iast: "",
    conceptIds: ['sadhana-samara', 'phalastuti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Siddha-Kunjika (Rudrayamala/Gauri-tantra, Shiva-Parvati samvada) pp.745-746: frame verses 1-4 + mula-mantra verbatim with Hindi; shatkarmas listed as attained "pathamatrena" (indexed, not operationalised).`
      }
    ],
    translation: `Shiva said: "Hear, Devi — I shall speak the supreme Kunjika-hymn, by whose mantra-power Chandi-recitation turns out well. No Kavacha, no Argala, no Kilaka, no Rahasya, no Sukta, no dhyana, no nyasa, not even worship (is needed). By Kunjika-reading alone one wins Durga-recitation's fruit. Most secret, Devi, rare even to gods. Guard it strivingly as your own womb, Parvati. Killing, confusing, mastering, arresting, expelling and the rest succeed by mere reading of this supreme Kunjika." Then the mantra: "Om Aim Hrim Klim Chamundaayai Vicche. Om Glaum Hum Klim Jum Sah — burn, burn, blaze, blaze, burn bright, burn bright — Aim Hrim Klim Chamundaayai Vicche — blaze — Ham Sam Lam Ksham Phat Svaha."`,
    commentary: `**The bold claim (v.2) read with the file's header rule:** "na kavacham..." is the tantra's own arthavada for the time-starved — Kunjika-reading alone bearing Durga-patha-phala. This entry transcribes frame + mantra exactly (pp.745-746) with Hindi; the bija-packed verses 5-8 continue in dm-kunjika-2. The edition's closing prayoga note maps marana→kama-krodha-nasha, mohana→ishtadeva-mohana, vashikarana→manas, stambhana→indriya-uparati, ucchatana→moksha-chhatpatahati (inner, not person-targeted rites); operative shatkarma recipes are NOT reproduced.`,
    keyPoints: ["**Guard as womb**: Ati-guhyatara, devanam-api-durlabha — secrecy injunction."]
  },
  {
    id: 'dm-kunjika-2',
    number: 'Siddha-Kuñjikā 5-8 + phala (Rudrayāmala)',
    section: 'Uttarāṅga: Siddha-Kunjika (mantra-quickener)',
    devanagari: "",
    iast: "",
    conceptIds: ['sadhana-samara', 'phalastuti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Siddha-Kunjika concl. pp.746-747 (verses + bija strings summarised (mula not reproduced); closing "iti Rudrayamale Gauri-tantre Shiva-Parvati-samvade"; daily-morning prayoga note).`
      }
    ],
    translation: `"Salutations to Rudra-formed, Madhu-crusher, Kaitabha-slayer, Mahisha-slayer; to Shumbha-slayer and Nishumbha-slayer! Mahadevi, wake my recitation and perfect it! Aim-formed as creation, Hrim-formed as sustainer; Klim-formed as desire-formed, seed-formed — salutations! As Chamunda slayer of Chanda, as 'yai' granter of boons; as 'vicce' ever fear-removing — O mantra-formed, salutations! 'Dham Dhim Dhum' — wife of Dhurjati; 'Vam Vim Vum' — queen of speech; 'Kram Krim Krum' — Kalika Devi, 'Sham Shim Shum' — do me good! 'Hum Hum' — roar-formed, 'Jam Jam Jam' — teeth-gnasher; 'Bhram Bhrim Bhrum' — Bhadra Bhairavi Bhavani, salutations again and again! 'Am Kam Cham Tam Tam Pam Yam Sham Vim Dum Aim Vim Ham Ksham — wake, wake! burst, burst! kindle, kindle! Svaha. Pam Pim Pum — Parvati the Full; Kham Khim Khum — Khechari; Sam Sim Sum — perfect for me the mantra of the Seven-hundred, O Goddess! This Kunjika-hymn exists to wake the mantra; never give it to the devotionless; keep it hidden, guard it, Parvati! Who reads the Seven-hundred bereft of Kunjika wins no success — like weeping in a forest."`,
    commentary: `**Mantra-jagarti:** the hymn's own stated purpose (mantrajagarti-hetave) — waking sleeping mantras — hence the bija volleys and the troṭaya/dipta imperatives. The closing threat ("aranye rodanam yatha") mirrors the Kilaka's jnatva/ajnatva pairing: preparation is mandatory, not decorative. Daily-morning recitation note p.747: all badha-vighna destroyed; Kunjika + Devi Sukta + Saptashati = parama-siddhi.`,
    keyPoints: ["**Waking, not adding**: Kunjika wakes mantras (jagarti); the Saptashati stays the body.", "**Never to the devotionless**: Abhakte naiva datavyam — secrecy closes the hymn."]
  },
  {
    id: 'dm-ashtottara-note',
    number: 'Durgā-aṣṭottara-śata-nāma (108, index)',
    section: 'Uttarāṅga: 108-name litany (Vishvasara-tantra)',
    devanagari: "",
    iast: "",
    conceptIds: ['phalastuti', 'matrikas'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Durga Ashtottara-shata-nama (Vishvasara-tantra) pp.732-735: frame v.1 + 108 names in vv.2-15 (Sati...Brahmavadini; Hindi enumerates 1-108) + phala vv.16-21 (kumari-puja vidhi, yantra-dharana, Bhauma-amavasya shatabhisha prayoga); opening/closing verses summarised (mula not reproduced), middle names indexed.`
      }
    ],
    translation: `Ishvara said: "I shall speak the hundred names; hear, lotus-faced — by whose mere grace Sati Durga is pleased. Om: Sati, Sadhvi, Bhavaprita, Bhavani, Bhavamochani; Arya, Durga, Jaya, Adya, Trinetra, Shuladharini..." (108 names through Kumari, Ekakanya... Kalaratri, Narayani, Bhadrakali, Vishnumaya... Shivadhuti, Karali, Ananta, Parameshvari, Katyayani, Savitri, Pratyaksha, Brahmavadini). "Who daily reads this 108 of Durga's names — nothing unaccomplishable remains in three worlds. Wealth, grain, son, wife, horse, elephant, the four aims, and at the end eternal liberation. Worshipping Kumari, meditating Sureshvari, worshipping with supreme devotion, then reading the 108..."`,
    commentary: `**Index, not reprint:** all 108 names stand in Sanskrit vv.2-15 (pp.732-734) with Hindi enumeration 1-108; this entry transcribes frame + opening + phala and indexes the middle span so the nama-list is findable without a 108-line duplicate card. Yantra-dharana (gorochana/laksha/kumkuma/sindura/karpura/madhutraya, v.20) and Bhauma-amavasya midnight shatabhisha-likhana-patha (v.21) are indexed as vidhi, not ritualised. Colophon: Vishvasara-tantra.`,
    keyPoints: ["**108, Sati to Brahmavadini**: Antahkarana names (manas/buddhi/ahankara/chitta) sit inside the garland — inner faculties as Her names.", "**Kumari-puja first**: Worship the maiden, meditate Sureshvari, then read (v.18)."]
  },
  {
    id: 'dm-manasa-atharva-note',
    number: 'Mānasa-pūjā + Atharvaśīrṣa (indexes)',
    section: 'Uttarāṅga: mental worship + Atharva crown (indexes)',
    devanagari: "",
    iast: "",
    conceptIds: ['cit-shakti', 'phalastuti'],
    interpretiveNotes: [
      {
        note: `${PROVENANCE} Manasa-puja pp.739-744 (Tripurasundari upacharas: paduka/simhasana/gandha/vasana/keshadi, Hindi throughout; condensed index). Devi-Atharvashirsha pp.748-759+ (Atharvaveda; deva-prashna 1, brahmasvarupini-uttara 2-7 incl. Rgvedokta echoes 5-7, deva-stuti 8-14 incl. Panchadashi-vidya; EXPLICITLY non-shadanga per edition footnote p.748: "shadangon mein samavesh na hone par bhi Atharva-mahatmya se labh"; condensed index).`
      }
    ],
    translation: `Two indexes (openings summarised, bodies summarised; mula not reproduced): (1) Manasa-puja — mental upacharas to Tripurasundari from footstool (paduka washed in sandal-kumkuma streams, jewel-pearl set, wiped by surasundaris) through lion-throne, gandha-udvartana, amalaka, kasha-samskara, kasturi, kashmira-vasana to daily alankara; each closed "grihana ambike". (2) Atharvashirsha — all gods approach ("kasi tvam mahadevi?"); She answers "aham brahmasvarupini" (void and non-void from Me; ananda/ananda, vijnana/avijnana, brahma/abrahma, pancha/apanchabhuta, all this world are I; Veda/aveda, vidya/avidya...), then Rgvedokta echoes (rudrebhir-vasubhih...), deva-stuti (namo devyai... agnivarnaam...), Vag-sukta, Kalaratri litany, Mahalakshmi-gayatri, Daksha-duhita, and the Panchadashi mula-vidya with shad-vidha artha pointer (Nityashodashikarnava/Varivasyarahasya).`,
    commentary: `**Why indexes:** both are complete parayana limbs in this edition but each is a small book in itself (Manasa-puja 6+ upachara verses with long Hindi; Atharvashirsha 20+ sections into Pitha/Kalika tracts pp.760-794). The edition's own footnote excludes Atharvashirsha from the shadanga while commending it — this entry honours that distinction instead of inflating the anga count. Full transcription is future work; no verse invented here.`,
    keyPoints: ["**Manasa = inner upachara**: Every outer offering rehearsed mentally to Tripurasundari first.", "**Atharvashirsha non-shadanga**: Commended by Atharva-mahatmya, not counted among the six — per the edition itself."]
  }
];

// Tantrāloka (Ahnika 1 selection) — verse-to-concept links overlay.
//
// The raw verse file carries translation + commentary but almost no concept
// tags (10 of 83 verses), which left the verses graph-orphaned and all 199
// concepts without a single linked verse. This id-keyed overlay supplies
// conceptIds per verse, merged in index.ts like the other overlays; the raw
// verse file is untouched. The factory stitches the reverse direction
// (concept.relatedVerseIds) at runtime.
//
// Derivation, kept here for auditability:
// - TIER A (about half the edges): folded IAST/Devanagari term matching.
//   Diacritic-folded so śuddha-vikalpa finds suddha-vikalpa, with an ṛ→ri
//   variant so mātṛkā finds matrika; short stems take word-boundary-plus-
//   inflection form so para finds Para/Parapara but never separate, and kula
//   never fires inside akula. Devanagari terms match the verse Devanagari
//   directly (piṇḍa in piṇḍapātāc, mātrā morae). Proven-mistag hosts are
//   excluded per concept: madhyama never inside Madhyamaka, vidya never
//   inside vidyate/avidya, akula never at all (its only occurrence is inside
//   amṛtakula/nectar-totality, i.e. Kula). Abhinavagupta-name mentions are
//   attribution boilerplate, never matched.
// - TIER B (about half): hand-curated English-paraphrase rules, because the
//   commentaries name doctrines in English (soul, fetter, lineage, dream).
//   Every pattern was frequency-probed and sample-verified with
//   keyword-in-context; scoped exceptions (future-auxiliary will, motive-
//   reason, verb-sound, convention-practice, work-title tantra, Kali Age,
//   thought-you/experiment, self-citations) each earned by a witnessed
//   mistag. Ignorance splits by qualifier (intellectual→bauddha-ajnana,
//   innate→paurusa-ajnana) instead of tagging both degrees blindly.
// - UNION: the 10 pre-tagged verses keep every curator tag (incl. semantic
//   links like pramana on TL-01-74 that no rule derives).
// - Manual overrides: TL-01-13/20 drop hridaya (bibliographic gloss, not
//   doctrine); TL-01-66-cd gains sarva-svarupatva + anuttara (read whole:
//   one attribute encompassing all the rest).
// - Thin nodes are honest: vak-levels, tattva stages, phoneme details,
//   mudras, cari-goddesses and saktipata degrees barely occur by name in
//   this Ahnika-1-only selection; the thread already carries every concept
//   as a guided step. Enrich only with genuine scholarship, never padding.
// - Known quirk, left alone: bindu and visarga each appear twice as concept
//   ids (the factory Map keeps the last; the ML file notes the same). The
//   overlay references the shared id and both entries resolve identically.

export const tantralokaLinksEn: Record<string, string[]> = {
  'TL-01-01': ['akrama', 'anuttara', 'bhairava', 'caitanya', 'camatkara', 'hridaya', 'icchashakti', 'jnana', 'kula', 'malini', 'mishra-shiva-absolute', 'nara', 'para', 'pasu', 'paurusa-ajnana', 'pramatri', 'sakticakra-vol3', 'saktopaya', 'saktopaya-vol3', 'samvid', 'spanda', 'srishti', 'svatantrya', 'trika', 'vimarsa', 'visarga', 'yamala'],
  'TL-01-02': ['apara', 'bhairava', 'caitanya', 'camatkara', 'icchashakti', 'jnana', 'kula', 'mishra-shiva-absolute', 'para', 'parapara', 'pramana', 'pramatri', 'prameya', 'pratibha', 'purnata', 'rasmi', 'saktopaya', 'saktopaya-vol3', 'samvid', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'sphurana', 'svatantrya', 'trika', 'unmana', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-03': ['apara', 'bhairava', 'caitanya', 'hridaya', 'kriya-shakti', 'maya-tattva', 'mishra-shiva-absolute', 'para', 'parapara', 'prakasa', 'pramana', 'sakrjjnana', 'samvid', 'sphurana', 'tirodhana', 'trika', 'vimarsa'],
  'TL-01-04': ['agama', 'apara', 'caitanya', 'camatkara', 'hridaya', 'icchashakti', 'jnana', 'jnana-shakti', 'mala-traya', 'malini', 'mishra-shiva-absolute', 'nara', 'para', 'parapara', 'pasa', 'prakasa', 'rasmi', 'saktopaya', 'saktopaya-vol3', 'samvid', 'trika', 'vimarsa', 'yamala'],
  'TL-01-05': ['anuttara', 'apara', 'bhairava', 'caitanya', 'hridaya', 'icchashakti', 'jnana', 'krama', 'kula', 'mishra-pratyabhijna', 'mishra-shiva-absolute', 'nara', 'para', 'parapara', 'pati', 'pratyabhijna', 'samvid', 'srishti', 'svatantrya', 'trika', 'vimarsa'],
  'TL-01-06': ['apara', 'caitanya', 'cakresvara', 'para', 'parapara', 'pati', 'prakasa', 'pramana', 'rasmi', 'sakticakra-vol3', 'samvid', 'sthiti', 'trika', 'vimarsa'],
  'TL-01-07': ['guru-tattva', 'kulaprakriya', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'pasa', 'pati', 'raga-niyati', 'sadguru', 'trika'],
  'TL-01-08': ['agama', 'camatkara', 'diksha', 'guru-tattva', 'jnana-diksha', 'jnanadiksha-vol3', 'kulaprakriya', 'mishra-pratyabhijna', 'mishra-shiva-absolute', 'pratyabhijna', 'sadguru', 'trika'],
  'TL-01-09': ['apara', 'dvadasakali', 'guru-tattva', 'krama', 'mahabhairavacandograghorakali', 'mishra-pratyabhijna', 'para', 'pati', 'pratyabhijna', 'rakta-kali', 'sadguru', 'samhara-kali', 'srishti-kali', 'trika', 'yama-kali'],
  'TL-01-10': ['abhyasa', 'caitanya', 'camatkara', 'guru-tattva', 'hridaya', 'mishra-pratyabhijna', 'mishra-shiva-absolute', 'pati', 'pratyabhijna', 'sadguru', 'samvid', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'vimarsa', 'yoganga'],
  'TL-01-11': ['camatkara', 'guru-tattva', 'mishra-pratyabhijna', 'nada', 'pramatri', 'pratyabhijna', 'sadguru', 'samavesa', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2'],
  'TL-01-116': ['abhyasa', 'caitanya', 'mantra-virya', 'mantra-virya2', 'pati', 'pratibha', 'samvid', 'samvit-devi', 'svatantrya', 'tantraprakriya', 'vidya', 'vimarsa'],
  'TL-01-12': ['adhikarin', 'agama', 'apara', 'camatkara', 'guru-tattva', 'mishra-mala-moksa', 'moksha', 'nara', 'pasu', 'purnata', 'sadguru'],
  'TL-01-13': ['abhyasa', 'agama', 'guru-tattva', 'jivanmukti', 'jivanmukti-anupaya', 'kulaprakriya', 'para', 'sadguru', 'trika'],
  'TL-01-14': ['agama', 'anuttara', 'guru-tattva', 'krama', 'sadguru', 'srishti', 'trika'],
  'TL-01-15': ['aham', 'anuttara', 'guru-tattva', 'sadguru', 'trika'],
  'TL-01-16': ['caitanya', 'guru-tattva', 'idam', 'jivanmukti', 'jivanmukti-anupaya', 'kulaprakriya', 'mala-traya', 'pasa', 'sadguru', 'samavesa', 'samvid', 'srishti', 'trika', 'vimarsa'],
  'TL-01-17': ['agama', 'malini', 'pati', 'tantraprakriya', 'trika'],
  'TL-01-18': ['agama', 'bhairava', 'jnana', 'malini', 'mishra-shiva-absolute', 'pati', 'saktopaya', 'saktopaya-vol3', 'tantraprakriya', 'trika'],
  'TL-01-19': ['abhyasa', 'guru-tattva', 'jivanmukti', 'jivanmukti-anupaya', 'sadguru', 'trika'],
  'TL-01-20': ['bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'guru-tattva', 'mishra-shiva-absolute', 'pramatri', 'sadguru'],
  'TL-01-21': ['guru-tattva', 'hridaya', 'mishra-shiva-absolute', 'pati', 'prakasa', 'sadguru'],
  'TL-01-22': ['agama', 'guru-tattva', 'jnana', 'mishra-mala-moksa', 'moksha', 'pasa', 'sadguru', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-23': ['agama', 'bauddha-ajnana', 'jnana', 'mala-traya', 'malini', 'mishra-mala-moksa', 'moksha', 'pasa', 'pasu', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-24': ['agama', 'bauddha-ajnana', 'bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'jnana', 'mishra-mala-moksa', 'moksha', 'pasu', 'paurusa-ajnana', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-25': ['caitanya', 'jnana', 'pramatri', 'saktopaya', 'saktopaya-vol3', 'samvid', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'vimarsa'],
  'TL-01-26': ['jnana', 'mishra-shiva-absolute', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-27': ['akrama', 'caitanya', 'hridaya', 'jnana', 'mishra-shiva-absolute', 'pasu', 'saktopaya', 'saktopaya-vol3', 'samvid', 'vimarsa'],
  'TL-01-28': ['caitanya', 'jnana', 'matra', 'mishra-shiva-absolute', 'pasu', 'pramatri', 'samvid', 'svatantrya', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-31': ['hridaya', 'mishra-error-theory', 'mishra-mala-moksa', 'moksha', 'pasu'],
  'TL-01-32': ['hridaya', 'jnana', 'kancuka', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'prameya', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-33': ['hridaya', 'jnana', 'kancuka', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'pasa', 'pasu', 'raga-niyati', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-34': ['kancuka', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'para', 'pasu', 'srishti', 'svatantrya'],
  'TL-01-35': ['jnana', 'kancuka', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'prameya', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-36': ['bauddha-ajnana', 'jnana', 'kancuka', 'maya-tattva', 'mishra-mala-moksa', 'moksha', 'nara', 'pasu', 'paurusa-ajnana', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-37': ['bhava-svabhava', 'caitanya', 'jnana', 'kancuka', 'mala-traya', 'maya-tattva', 'mishra-shiva-absolute', 'nara', 'pasu', 'paurusa-ajnana', 'samvid', 'svatantrya', 'tirodhana', 'vimarsa'],
  'TL-01-38': ['abhyasa', 'bauddha-ajnana', 'caitanya', 'jnana', 'kancuka', 'maya-tattva', 'pasu', 'paurusa-ajnana', 'pramana', 'samvid', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-39': ['aham', 'bimba', 'caitanya', 'hridaya', 'idam', 'jnana', 'kancuka', 'maya-tattva', 'nara', 'pasu', 'paurusa-ajnana', 'prakasa', 'pratibimba', 'raga-niyati', 'saktopaya', 'saktopaya-vol3', 'samvid', 'tirodhana', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-40': ['bauddha-ajnana', 'jnana', 'kancuka', 'maya-tattva', 'nara', 'pasu', 'paurusa-ajnana', 'saktopaya', 'saktopaya-vol3', 'vikalpa-vol3'],
  'TL-01-41': ['apara', 'bauddha-ajnana', 'caitanya', 'jnana', 'nirvikalpa', 'pasu', 'paurusa-ajnana', 'saktopaya', 'saktopaya-vol3', 'samvid', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-42': ['bauddha-ajnana', 'bimba', 'jnana', 'nirvikalpa', 'paurusa-ajnana', 'pratibimba', 'saktopaya', 'saktopaya-vol3', 'vikalpa-vol3'],
  'TL-01-43': ['diksha', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'mala-traya', 'pasu', 'paurusa-ajnana', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-44': ['agama', 'bauddha-ajnana', 'diksha', 'jivanmukti', 'jivanmukti-anupaya', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'mishra-mala-moksa', 'mishra-shiva-absolute', 'moksha', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-45': ['agama', 'diksha', 'guru-tattva', 'jivanmukti', 'jivanmukti-anupaya', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'mishra-mala-moksa', 'moksha', 'sadguru', 'saktopaya', 'saktopaya-vol3'],
  'TL-01-46': ['agama', 'guru-tattva', 'jnana', 'sadguru', 'saktopaya', 'saktopaya-vol3', 'trika'],
  'TL-01-47': ['agama', 'caitanya', 'guru-tattva', 'hridaya', 'jivanmukti', 'jivanmukti-anupaya', 'jnana', 'mishra-mala-moksa', 'mishra-shiva-absolute', 'moksha', 'prakasa', 'prameya', 'sadguru', 'saktopaya', 'saktopaya-vol3', 'samvid', 'vimarsa'],
  'TL-01-48': ['bauddha-ajnana', 'diksha', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'paurusa-ajnana', 'vikalpa-vol3'],
  'TL-01-49': ['bauddha-ajnana', 'diksha', 'hridaya', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'mishra-mala-moksa', 'moksha', 'paurusa-ajnana', 'svatantrya'],
  'TL-01-50': ['agama', 'bauddha-ajnana', 'diksha', 'jnana', 'jnana-diksha', 'jnanadiksha-vol3', 'mishra-mala-moksa', 'mishra-shiva-absolute', 'moksha', 'nada', 'tantraprakriya', 'vikalpa-vol3'],
  'TL-01-51': ['agama', 'jnana', 'mishra-mala-moksa', 'moksha', 'pinda', 'svatantrya', 'vikalpa-vol3'],
  'TL-01-52': ['agama', 'caitanya', 'nada', 'para', 'prakasa', 'samavesa', 'samvid', 'vimarsa'],
  'TL-01-53': ['bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'caitanya', 'camatkara', 'samvid', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-54': ['caitanya', 'hridaya', 'jnana', 'prakasa', 'pramana', 'saktopaya', 'saktopaya-vol3', 'samvid', 'spanda', 'sphurana', 'vimarsa'],
  'TL-01-55': ['caitanya', 'para', 'pati', 'prakasa', 'pramana', 'samvid', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'vimarsa'],
  'TL-01-56': ['caitanya', 'hridaya', 'jnana', 'pramatri', 'saktopaya', 'saktopaya-vol3', 'samvid', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-57': ['caitanya', 'hridaya', 'jnana', 'pramana', 'pramatri', 'saktopaya', 'saktopaya-vol3', 'samvid', 'vimarsa'],
  'TL-01-58': ['agama', 'para', 'pati', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2', 'vikalpa-vol3'],
  'TL-01-59': ['agama', 'caitanya', 'para', 'samvid', 'vimarsa'],
  'TL-01-59-cd': ['caitanya', 'kancuka', 'krama', 'maya-tattva', 'samvid', 'vimarsa'],
  'TL-01-60': ['caitanya', 'samvid', 'vimarsa'],
  'TL-01-61': ['agama', 'prakasa'],
  'TL-01-62': ['agama', 'bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'bindu', 'malini', 'mantra-virya', 'mantra-virya2', 'nada', 'pasu', 'prakasa', 'tantraprakriya'],
  'TL-01-63': ['abhyasa', 'jnana', 'mantra-virya', 'mantra-virya2', 'mishra-mala-moksa', 'moksha'],
  'TL-01-64': ['hridaya', 'kancuka', 'maya-tattva', 'pati'],
  'TL-01-65': ['agama', 'akula', 'bimba', 'caitanya', 'pati', 'pratibimba', 'samvid', 'vimarsa'],
  'TL-01-66': ['svatantrya'],
  'TL-01-66-cd': ['anuttara', 'sarva-svarupatva'],
  'TL-01-67': ['abhyasa', 'agama', 'caitanya', 'icchashakti', 'jnana', 'saktopaya', 'saktopaya-vol3', 'samvid', 'srishti', 'svatantrya', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-68': ['matrika', 'nada'],
  'TL-01-69': ['icchashakti', 'jnana', 'pati', 'saktopaya', 'saktopaya-vol3', 'sattarka', 'sattarka-vol3', 'sattarka-vol3-p2'],
  'TL-01-70': ['akrama', 'caitanya', 'nada', 'para', 'samvid', 'vimarsa'],
  'TL-01-71': ['akula', 'icchashakti', 'jnana', 'prakasa', 'saktopaya', 'saktopaya-vol3', 'visarga'],
  'TL-01-72': ['bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'bimba', 'caitanya', 'nada', 'nara', 'pramatri', 'pratibimba', 'samvid', 'srishti', 'svatantrya', 'vimarsa'],
  'TL-01-73': ['abhyasa', 'caitanya', 'krama', 'nada', 'prakasa', 'samvid', 'vimarsa'],
  'TL-01-74': ['diksha', 'guru-tattva', 'jnana-diksha', 'jnanadiksha-vol3', 'pramana', 'sadguru', 'vikalpa-vol3'],
  'TL-01-75': ['caitanya', 'jnana', 'nirvikalpa', 'pati', 'samvid', 'suddha-vikalpa', 'trika', 'vikalpa-vol3', 'vimarsa'],
  'TL-01-81': ['agama', 'gramadharma', 'hridaya', 'mishra-creation-tattvas', 'trika'],
  'TL-01-82': ['caitanya', 'gramadharma', 'hridaya', 'samvid', 'sarva-svarupatva', 'srishti', 'vimarsa'],
  'TL-01-85': ['abhyasa', 'bhairava', 'camatkara', 'hridaya', 'jnana', 'madhya-dhaman', 'madhyama', 'ramastha', 'uccara'],
  'TL-01-88': ['agama', 'bhairava', 'bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'esoteric-japa', 'hridaya', 'jnana', 'mala-traya', 'mantra-virya', 'mantra-virya2', 'matra', 'nada', 'vikalpa-vol3'],
  'TL-01-90': ['caitanya', 'hridaya', 'kancuka', 'maya-tattva', 'samvid', 'svatantrya', 'tantraprakriya', 'upaya-upeya-bhava', 'vimarsa'],
  'TL-01-94': ['abhyasa', 'bhairava', 'pati'],
  'TL-01-95': ['anugraha', 'bhairava', 'bhavana', 'bhavana-saktopaya', 'bhavana-vol3', 'bhavana-vol3-p2', 'hridaya', 'madhya-saktipata', 'manda-saktipata', 'nada', 'pati', 'samvit-devi', 'tivra-saktipata', 'tivrativra-saktipata'],
};

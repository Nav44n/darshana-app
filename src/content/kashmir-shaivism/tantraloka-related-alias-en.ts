// Tantrāloka — concept cross-link rescue overlay.
//
// The concept files reference 595 relatedConcepts, of which 124 dangle:
// real Trika terms (vikalpa, diksa, mala, kriyashakti, ...) that simply are
// not concept ids in this ontology (which uses vikalpa-vol3, diksha,
// mala-traya, kriya-shakti, ...). The defensive resolver drops dangling
// refs, so those See-also edges were silently lost. This overlay adds the
// unambiguous rescues (verified one by one; ambiguous ones like siva,
// sakti, saktipata, ajnana or jiva stay dangling rather than guess), merged
// in index.ts as a union with the existing relatedConcepts. Raw concept
// files are untouched.

export const tantralokaRelatedAliasEn: Record<string, string[]> = {
  'adhikarin': ['diksha'],
  'akara-ananda': ['icchashakti'],
  'antaryaga': ['sakticakra-vol3'],
  'anugraha': ['diksha'],
  'asuddha-vikalpa': ['mala-traya'],
  'bhavana': ['vikalpa-vol3'],
  'cakresvara': ['sakticakra-vol3'],
  'esoteric-snana': ['esoteric-vrata'],
  'icchashakti': ['jnana-shakti', 'kriya-shakti'],
  'ikara-iccha': ['ikara-isana'],
  'jnana-diksha': ['diksha'],
  'jnana-shakti': ['kriya-shakti'],
  'kancuka': ['mala-traya'],
  'kriya-shakti': ['jnana-shakti'],
  'kula': ['kulaprakriya'],
  'madhyama': ['vikalpa-vol3'],
  'manda-saktipata': ['diksha'],
  'matrika': ['vikalpa-vol3'],
  'matrka-cakra': ['vikalpa-vol3'],
  'maya-tattva': ['mala-traya'],
  'nirvikalpa': ['vikalpa-vol3'],
  'pasa': ['mala-traya'],
  'pasu': ['mala-traya'],
  'paurusa-ajnana': ['diksha'],
  'raga-niyati': ['maya-tattva'],
  'saktopaya': ['jnana-shakti'],
  'samkoca': ['mala-traya'],
  'sandhyaksara': ['kriya-shakti'],
  'sattarka': ['vikalpa-vol3'],
  'svatantrya': ['maya-tattva'],
  'svatmapracchadana-krida': ['maya-tattva'],
  'tirodhana': ['mala-traya'],
  'ukara-unmesa': ['jnana-shakti', 'ukara-unata'],
  'vikalpa-kshaya': ['vikalpa-vol3'],
  'vikalpa-samskara': ['vikalpa-vol3'],
  'vikalpa-samskara-vol3': ['vikalpa-vol3'],
  'visarga': ['kriya-shakti'],
};

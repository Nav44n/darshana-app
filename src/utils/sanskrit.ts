/**
 * Normalizes Sanskrit transliteration (IAST) into standard ASCII
 * by removing diacritical marks and normalizing common variants
 * so user queries like 'purusha', 'sankhya', 'pramana' match 'puruṣa', 'sāṃkhya', 'pramāṇa'.
 */
export function normalizeSanskrit(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove combining diacritics (macrons, dots, accents)
    .toLowerCase()
    .replace(/ś/g, 's')
    .replace(/ṣ/g, 's')
    .replace(/ṇ/g, 'n')
    .replace(/ñ/g, 'n')
    .replace(/ṅ/g, 'n')
    .replace(/ṛ/g, 'r')
    .replace(/ṝ/g, 'r')
    .replace(/ḷ/g, 'l')
    .replace(/ṭ/g, 't')
    .replace(/ḍ/g, 'd')
    .replace(/ṃ/g, 'm')
    .replace(/ḥ/g, 'h');
}

export function matchesSanskritQuery(target: string, query: string): boolean {
  if (!query) return true;
  if (!target) return false;
  
  const rawTargetLower = target.toLowerCase();
  const rawQueryLower = query.toLowerCase();

  // Direct substring match
  if (rawTargetLower.includes(rawQueryLower)) return true;

  // Normalized diacritic-free match
  const normTarget = normalizeSanskrit(target);
  const normQuery = normalizeSanskrit(query);
  return normTarget.includes(normQuery);
}

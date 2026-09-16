/**
 * Normalises Sanskrit transliteration (IAST) into standard ASCII
 * by removing diacritical marks and normalising common variants
 * so user queries like 'purusha', 'sankhya', 'pramana' match 'puruṣa', 'sāṃkhya', 'pramāṇa'.
 *
 * NFD decomposition plus combining-mark removal already folds every
 * IAST diacritic (macrons, dots, tildes, underdots) to its ASCII base,
 * so no per-character replacements are needed afterwards.
 */
export function normalizeSanskrit(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove combining diacritics (macrons, dots, accents)
    .toLowerCase();
}

export function matchesSanskritQuery(target: string, query: string): boolean {
  if (query.trim() === '') return true;
  if (!target) return false;
  
  const rawTargetLower = target.toLowerCase();
  const rawQueryLower = query.trim().toLowerCase();

  // Direct substring match
  if (rawTargetLower.includes(rawQueryLower)) return true;

  // Normalized diacritic-free match
  const normTarget = normalizeSanskrit(target);
  const normQuery = normalizeSanskrit(query.trim());
  return normTarget.includes(normQuery);
}

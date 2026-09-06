import { ClassicalText } from '../types/content';

export function getVerseTerm(text?: ClassicalText, count: number = 1): string {
  const term = text?.verseTerm || 'Verse';
  if (count === 1) return term;
  if (term === 'Sūtra') return 'Sūtras';
  if (term === 'Kārikā') return 'Kārikās';
  if (term === 'Śloka') return 'Ślokas';
  if (term === 'Mantra') return 'Mantras';
  if (term === 'Śloka / Mantra') return 'Ślokas / Mantras';
  return term.endsWith('s') ? term : `${term}s`;
}

import { getText } from '../content';

export type TextSegment = { text: string; link?: { systemId: string; textId: string; verseId: string } };

const YOGA_REF = /\b([IVXLC]+\.\d+)\b/g;
const SAMKHYA_REF = /\bK[aā]rik[aā](?:s)?\s+(\d+(?:-\d+)?)\b/ig;

function verseExists(systemId: string, textId: string, verseId: string): boolean {
  const text = getText(systemId, textId);
  return !!text?.verses.some((v) => v.id === verseId);
}

/**
 * Splits commentary/narrative prose into plain-text and linkable segments.
 * Recognizes "I.2" / "II.29" style (Yoga Sūtra) and "Kārikā LXVII" style
 * (Sāṃkhya Kārikā, including when prefixed "Sāṃkhya Kārikā ..." for
 * cross-system references) and resolves each against the actual content
 * registry so a stale or out-of-range reference never renders as a dead link.
 */
export function linkifyReferences(raw: string): TextSegment[] {
  type Match = { start: number; end: number; verseId: string; systemId: string; textId: string };
  const matches: Match[] = [];

  let m: RegExpExecArray | null;
  YOGA_REF.lastIndex = 0;
  while ((m = YOGA_REF.exec(raw))) {
    matches.push({ start: m.index, end: m.index + m[0].length, verseId: m[1], systemId: 'yoga', textId: 'yoga-sutras' });
  }
  SAMKHYA_REF.lastIndex = 0;
  while ((m = SAMKHYA_REF.exec(raw))) {
    // link only the roman-numeral portion, not the word "Kārikā" itself
    const numStart = m.index + m[0].indexOf(m[1]);
    matches.push({
      start: numStart,
      end: numStart + m[1].length,
      verseId: m[1],
      systemId: 'samkhya',
      textId: 'samkhya-karika',
    });
  }

  matches.sort((a, b) => a.start - b.start);

  const segments: TextSegment[] = [];
  let cursor = 0;
  for (const mat of matches) {
    if (mat.start < cursor) continue; // overlapping match, skip
    if (!verseExists(mat.systemId, mat.textId, mat.verseId)) continue;
    if (mat.start > cursor) segments.push({ text: raw.slice(cursor, mat.start) });
    segments.push({
      text: raw.slice(mat.start, mat.end),
      link: { systemId: mat.systemId, textId: mat.textId, verseId: mat.verseId },
    });
    cursor = mat.end;
  }
  if (cursor < raw.length) segments.push({ text: raw.slice(cursor) });
  return segments;
}

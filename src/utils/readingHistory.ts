/**
 * UX-017 — Recently-viewed continuity.
 *
 * Study is discontinuous: readers dip in and out across sessions. Every
 * verse visit is recorded (deduplicated, most-recent-first, capped) so Home
 * can offer a one-tap return path. Silent in private mode — recording is a
 * courtesy that must never break reading. Entries that no longer resolve
 * (content edits) are filtered at read time, never at write time.
 */

import { getText, getVerse } from '../content';
import { getVerseTerm } from './textTerminology';

const STORAGE_KEY = 'darsana_recent_verses';
const STORE_MAX = 12;

export interface RecentVisit {
  systemId: string;
  textId: string;
  verseId: string;
}

/** Record a visit; moves existing entries to the front. Never throws. */
export function recordVerseVisit(systemId: string, textId: string, verseId: string): void {
  if (!systemId || !textId || !verseId || typeof window === 'undefined') return;
  try {
    const prev = readStored();
    const next = [
      { systemId, textId, verseId },
      ...prev.filter(
        (v) => !(v.systemId === systemId && v.textId === textId && v.verseId === verseId),
      ),
    ].slice(0, STORE_MAX);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable — reading continues unaffected.
  }
}

/** Most-recent-first visits, malformed entries dropped. Never throws. */
export function getRecentVisits(limit = 6): RecentVisit[] {
  try {
    return readStored()
      .filter((v) => !!v.systemId && !!v.textId && !!v.verseId)
      .slice(0, Math.max(0, limit));
  } catch {
    return [];
  }
}

function readStored(): RecentVisit[] {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(
    (v): v is RecentVisit =>
      !!v && typeof v === 'object' && 'systemId' in v && 'textId' in v && 'verseId' in v,
  );
}

export interface ResolvedVerseRef extends RecentVisit {
  number: string;
  term: string;
  textTitle: string;
}

/** Resolve stored refs to display rows, dropping what no longer exists. */
export function resolveVerseRefs(refs: RecentVisit[]): ResolvedVerseRef[] {
  const out: ResolvedVerseRef[] = [];
  for (const v of refs) {
    const verse = getVerse(v.systemId, v.textId, v.verseId);
    if (!verse) continue;
    const text = getText(v.systemId, v.textId);
    out.push({
      ...v,
      number: String(verse.number),
      term: getVerseTerm(text, 1),
      textTitle: text?.transliteratedTitle ?? v.textId,
    });
  }
  return out;
}

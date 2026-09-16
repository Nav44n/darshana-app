import type { RecentVisit } from './readingHistory';

/**
 * UX-018 — Explicit bookmarks (the README-promised "persistent
 * bookmarking", which had no UI). User-curated verse shelf beside the
 * automatic Recently Viewed trail: toggle on verse pages, managed from
 * Home. Same fail-silent storage contract as the other continuity stores.
 */

const STORAGE_KEY = 'darsana_bookmarks';
const STORE_MAX = 200;

const same = (a: RecentVisit, b: RecentVisit) =>
  a.systemId === b.systemId && a.textId === b.textId && a.verseId === b.verseId;

/** All bookmarks, oldest first (shelf order is stable, not recency). Never throws. */
export function getBookmarks(): RecentVisit[] {
  try {
    return readStored().filter((v) => !!v.systemId && !!v.textId && !!v.verseId);
  } catch {
    return [];
  }
}

export function isBookmarked(systemId: string, textId: string, verseId: string): boolean {
  if (!systemId || !textId || !verseId || typeof window === 'undefined') return false;
  try {
    return readStored().some((v) => same(v, { systemId, textId, verseId }));
  } catch {
    return false;
  }
}

/**
 * Flip the saved state for one verse; returns the new state for the toggle.
 * Never throws (a failed write simply reports unsaved).
 */
export function toggleBookmark(
  systemId: string,
  textId: string,
  verseId: string,
): boolean {
  if (!systemId || !textId || !verseId || typeof window === 'undefined') return false;
  try {
    const ref = { systemId, textId, verseId };
    const prev = readStored();
    const exists = prev.some((v) => same(v, ref));
    // A full shelf retires the oldest bookmark, never the just-added one:
    // slicing the tail keeps the newest entry whatever the prior length.
    const next = (exists ? prev.filter((v) => !same(v, ref)) : [...prev, ref]).slice(
      -STORE_MAX,
    );
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return !exists;
  } catch {
    return false;
  }
}

/** Remove one bookmark (Home shelf management). Never throws. */
export function removeBookmark(systemId: string, textId: string, verseId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const ref = { systemId, textId, verseId };
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(readStored().filter((v) => !same(v, ref))),
    );
  } catch {
    // Shelf stays as-is; the verse page toggle remains the source of truth.
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

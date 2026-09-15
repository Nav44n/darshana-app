/**
 * Recent searches for the corpus palette.
 *
 * Typing the same query twice should cost one effort, not two: the last few
 * successful searches are remembered (most-recent-first, deduplicated, capped)
 * so the empty palette can offer them as one-tap shortcuts. Same fail-silent
 * storage contract as the other continuity stores — private mode simply gets
 * no shortcuts, never an error.
 */

const STORAGE_KEY = 'darsana_recent_searches';
const STORE_MAX = 6;

/** Most-recent-first queries, blanks dropped. Never throws. */
export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (q): q is string => typeof q === 'string' && q.trim().length > 0,
    );
  } catch {
    return [];
  }
}

/** Record a query; moves repeats to the front. Never throws. */
export function recordSearch(query: string): void {
  const q = query.trim();
  if (!q || typeof window === 'undefined') return;
  try {
    const next = [q, ...getRecentSearches().filter((s) => s !== q)].slice(0, STORE_MAX);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable — searching continues unaffected.
  }
}

/** Forget all recent searches. Never throws. */
export function clearSearches(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Shortcuts stay; they expire by rotation instead.
  }
}

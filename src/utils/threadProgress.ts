/**
 * UX-008 — Thread continuity ("continue where you left off").
 *
 * Readers work through threads of 10–90 steps across sessions. Previously
 * every entry without an explicit ?step= restarted at Step 1 with no trace
 * of prior progress. This tiny store remembers the furthest 0-based step
 * index per system in localStorage (same mechanism as the language
 * preference), so TextIndex can offer a Resume entry and ThreadView can
 * restore position on param-less entry. Failures (private mode, quota)
 * fall back to null — the app behaves exactly as before.
 */

function keyFor(systemId: string): string {
  return `darsana_thread_step_${systemId}`;
}

/** Furthest visited 0-based step index, or null when unknown / invalid. */
export function getThreadProgress(systemId: string): number | null {
  if (!systemId || typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(keyFor(systemId));
    if (raw === null) return null;
    const n = Math.floor(Number(raw));
    if (!Number.isFinite(n) || n < 0) return null;
    return n;
  } catch {
    return null;
  }
}

/** Remember the furthest visited 0-based step index. Never throws. */
export function setThreadProgress(systemId: string, stepIndex: number): void {
  if (!systemId || typeof window === 'undefined') return;
  if (!Number.isFinite(stepIndex) || stepIndex < 0) return;
  try {
    window.localStorage.setItem(keyFor(systemId), String(Math.floor(stepIndex)));
  } catch {
    // Storage unavailable — reading progress is a courtesy, never a requirement.
  }
}

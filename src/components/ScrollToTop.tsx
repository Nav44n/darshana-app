import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/**
 * UX-001 — Route-change orientation reset (smallest UX atom).
 *
 * Problem observed: HashRouter preserves scroll position across routes.
 * Tapping Verse 34 → Verse 35 (or Thread Step 3 → 4) left the reader
 * stranded mid-page / at the bottom of a long commentary, below the new
 * Devanagari hero, with the fixed BottomBar covering content. Screen-reader
 * focus also stayed on the now-unmounted Prev/Next control, so the new
 * page was never announced.
 *
 * Behaviour (2026 SPA standard — NN/g wayfinding + W3C APG focus guidance):
 * - On every pathname or search change (covers /verse/:id prev/next and
 *   /thread?step=N), reset scroll to top instantly — never smooth, so
 *   reduced-motion users and motion-sensitive readers are not disoriented.
 * - Take manual control of scroll restoration where the browser allows it.
 * - Move keyboard / screen-reader focus to <main id="main-content"> so the
 *   new screen is announced. `preventScroll: true` keeps the explicit
 *   scrollTo as the single source of truth.
 * - Skip the very first mount so a page refresh keeps its restored position.
 * - Deliberately ignores in-page state (TextIndex accordions, chapter pills)
 *   because those never touch the location — jumpToSection's own
 *   scrollIntoView remains the authority there.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } catch {
      // Older engines — native behaviour remains, manual reset below still runs.
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname, search]);

  return null;
}

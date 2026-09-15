import { useEffect, useRef } from 'react';

/**
 * UX-016 — Arrow-key paging for sequential reading flows (verse ↔ verse,
 * thread step ↔ step, concept ↔ concept). Mirrors the BottomBar prev/next
 * controls for keyboard readers with no visual change.
 *
 * Guards: modified shortcuts pass through; keystrokes from form fields and
 * editable regions are ignored (the palette input keeps its own keys);
 * screen-reader browse-mode arrows never reach the page, so virtual-cursor
 * navigation is unaffected.
 */
export function usePagerKeys(
  onNext: (() => void) | null,
  onPrev: (() => void) | null,
) {
  const nextRef = useRef(onNext);
  const prevRef = useRef(onPrev);
  nextRef.current = onNext;
  prevRef.current = onPrev;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        if (nextRef.current) {
          e.preventDefault();
          nextRef.current();
        }
      } else if (e.key === 'ArrowLeft') {
        if (prevRef.current) {
          e.preventDefault();
          prevRef.current();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}

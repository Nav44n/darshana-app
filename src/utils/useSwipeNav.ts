import { useEffect, useRef } from 'react';

/**
 * Phone-friendly horizontal paging (Batch 1).
 *
 * Why this did not exist before: the app grew up desktop-first with
 * arrow-key paging (`usePagerKeys`) plus BottomBar tap targets. A gesture
 * layer was deferred to avoid conflicts with vertical reading scroll,
 * text selection, the iOS edge-back gesture, and screen-reader browse
 * mode. This hook adds swipe as progressive enhancement only — the
 * BottomBar and keyboard behaviour stay canonical.
 *
 * Behaviour:
 * - Swipe left → next, swipe right → previous (mirrored when
 *   `document.dir === 'rtl'` so the gesture favours reading order).
 * - Vertical drift aborts the gesture so normal reading scroll never
 *   triggers a page turn.
 * - Edge-origin swipes (outer 24px) are ignored so the OS back gesture wins.
 * - Active text selection aborts navigation so highlighting a translation
 *   never flings the reader to the next verse.
 * - Form fields and editable regions are ignored.
 * - Short haptic tick via `navigator.vibrate` where supported; fail-silent.
 *
 * Usage: attach the returned ref to the reading surface and set
 * `touch-action: pan-y` (via `SWIPE_SURFACE_STYLE`) so the browser keeps
 * vertical scroll and pinch-zoom whilst we observe horizontal movement.
 */

export const SWIPE_MIN_X = 64;
export const SWIPE_MAX_Y = 56;
export const SWIPE_EDGE_GUARD = 24;
export const SWIPE_MAX_DURATION_MS = 900;

export const SWIPE_SURFACE_STYLE = {
  touchAction: 'pan-y',
} as const;

export type SwipeDirection = 'next' | 'prev';

/** Pure decision helper — unit-tested, no DOM required. */
export function resolveSwipeDirection(
  dx: number,
  dy: number,
  opts?: { isRtl?: boolean },
): SwipeDirection | null {
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  if (absX < SWIPE_MIN_X) return null;
  if (absY > SWIPE_MAX_Y) return null;
  // Horizontal dominance: diagonal reading scroll must not page.
  if (absX < absY * 1.4) return null;
  const leftward = dx < 0;
  const isRtl = opts?.isRtl ?? false;
  // LTR: left → next. RTL: mirrored so the gesture favours reading order.
  if (isRtl) return leftward ? 'prev' : 'next';
  return leftward ? 'next' : 'prev';
}

function selectionHasText(): boolean {
  try {
    const sel = window.getSelection?.();
    return !!sel && !sel.isCollapsed && sel.toString().trim().length > 0;
  } catch {
    return false;
  }
}

function vibrateTick(): void {
  try {
    const nav = navigator as Navigator & { vibrate?: (p: number) => boolean };
    nav.vibrate?.(8);
  } catch {
    // Haptics are an enhancement; silence is the correct fallback.
  }
}

export function useSwipeNav(
  onNext: (() => void) | null,
  onPrev: (() => void) | null,
  enabled = true,
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef(onNext);
  const prevRef = useRef(onPrev);
  nextRef.current = onNext;
  prevRef.current = onPrev;

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let startT = 0;
    let tracking = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) {
        tracking = false;
        return;
      }
      const touch = e.touches[0];
      // Let the OS edge-back gesture win near the screen edges.
      if (touch.clientX < SWIPE_EDGE_GUARD || touch.clientX > window.innerWidth - SWIPE_EDGE_GUARD) {
        tracking = false;
        return;
      }
      const target = e.target as HTMLElement | null;
      if (
        target?.closest?.(
          'input, textarea, select, [contenteditable="true"], dialog, [role="dialog"]',
        )
      ) {
        tracking = false;
        return;
      }
      startX = touch.clientX;
      startY = touch.clientY;
      startT = Date.now();
      tracking = true;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      // Changed touches carry the lift point for the ended touch.
      const touch = e.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      if (Date.now() - startT > SWIPE_MAX_DURATION_MS) return;
      // Highlighting a translation must never turn the page.
      if (selectionHasText()) return;
      const isRtl =
        typeof document !== 'undefined' && document.documentElement.dir === 'rtl';
      const dir = resolveSwipeDirection(dx, dy, { isRtl });
      if (dir === 'next' && nextRef.current) {
        vibrateTick();
        nextRef.current();
      } else if (dir === 'prev' && prevRef.current) {
        vibrateTick();
        prevRef.current();
      }
    };

    const onTouchCancel = () => {
      tracking = false;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('touchcancel', onTouchCancel, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchCancel);
    };
  }, [enabled]);

  return ref;
}

/**
 * Phone-friendly dismiss (Batch 2): swipe down to close the thread
 * contents dialogue. Vertical dominance required so list scrolling never
 * dismisses by accident. Haptic tick included; fail-silent.
 */
export function useDismissSwipe(
  onDismiss: (() => void) | null,
  enabled = true,
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const dismissRef = useRef(onDismiss);
  dismissRef.current = onDismiss;

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) {
        tracking = false;
        return;
      }
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      tracking = true;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      const touch = e.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      // Downward swipe, clearly vertical, beyond a thumb-friendly distance.
      if (dy >= 72 && dy > Math.abs(dx) * 1.5 && dismissRef.current) {
        vibrateTick();
        dismissRef.current();
      }
    };

    const onTouchCancel = () => {
      tracking = false;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('touchcancel', onTouchCancel, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchCancel);
    };
  }, [enabled]);

  return ref;
}

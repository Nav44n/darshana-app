import { describe, expect, it } from 'vitest';
import { resolveSwipeDirection } from '../useSwipeNav';

describe('resolveSwipeDirection', () => {
  it('maps a left swipe to next in LTR reading order', () => {
    expect(resolveSwipeDirection(-120, 8)).toBe('next');
  });

  it('maps a right swipe to previous in LTR reading order', () => {
    expect(resolveSwipeDirection(120, -6)).toBe('prev');
  });

  it('mirrors the mapping when the document direction is RTL', () => {
    expect(resolveSwipeDirection(-120, 8, { isRtl: true })).toBe('prev');
    expect(resolveSwipeDirection(120, 8, { isRtl: true })).toBe('next');
  });

  it('ignores short drags so taps and text nudges never page', () => {
    expect(resolveSwipeDirection(-30, 4)).toBeNull();
    expect(resolveSwipeDirection(20, 0)).toBeNull();
  });

  it('ignores vertical reading scroll and diagonal drifts', () => {
    expect(resolveSwipeDirection(-90, 80)).toBeNull();
    expect(resolveSwipeDirection(10, -120)).toBeNull();
    // Diagonal: horizontal wins only when clearly dominant.
    expect(resolveSwipeDirection(-70, 60)).toBeNull();
  });
});

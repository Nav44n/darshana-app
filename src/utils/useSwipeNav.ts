import { useRef } from 'react';
import { Animated, PanResponder, Platform } from 'react-native';

// react-native-web maps View to a <div> whose text is selectable by
// default — dragging over it triggers the browser's native text-selection
// instead of (in addition to) the pan gesture. `userSelect` isn't part of
// RN's ViewStyle type (native has no such concept), hence the `any` — it's
// inert on native and only matters for the web target.
export const webNoSelect: any = Platform.OS === 'web' ? {} : { userSelect: 'none' };

// Shared horizontal drag-to-navigate gesture for paged content (verse
// detail, thread steps). Unlike a bare PanResponder that only decides
// anything on release, this tracks the finger/mouse the whole way — the
// content visibly follows the drag, rubber-bands when there's nowhere to
// go, and slides fully off-screen before the page actually changes, so
// "swipe" reads as an actual drag instead of an invisible gesture that
// either works or doesn't.
export function useSwipeNav({
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  // Refs so the PanResponder (created once) always sees current values —
  // hasNext/hasPrev change every time the verse/step does.
  const hasNextRef = useRef(hasNext);
  const hasPrevRef = useRef(hasPrev);
  hasNextRef.current = hasNext;
  hasPrevRef.current = hasPrev;

  const settle = (toValue: number, after?: () => void) => {
    Animated.spring(translateX, { toValue, useNativeDriver: true, bounciness: 6, speed: 16 }).start(after);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 12 && Math.abs(g.dx) > Math.abs(g.dy) * 1.5,
      onPanResponderMove: (_, g) => {
        let dx = g.dx;
        // Rubber-band at either end so dragging past the first/last item
        // visibly resists instead of following the finger 1:1 into nothing.
        if (dx > 0 && !hasPrevRef.current) dx *= 0.3;
        if (dx < 0 && !hasNextRef.current) dx *= 0.3;
        translateX.setValue(dx);
      },
      onPanResponderRelease: (_, g) => {
        const COMMIT = 70;
        if (g.dx <= -COMMIT && hasNextRef.current) {
          Animated.timing(translateX, { toValue: -320, duration: 140, useNativeDriver: true }).start(() => {
            translateX.setValue(0);
            onNext();
          });
        } else if (g.dx >= COMMIT && hasPrevRef.current) {
          Animated.timing(translateX, { toValue: 320, duration: 140, useNativeDriver: true }).start(() => {
            translateX.setValue(0);
            onPrev();
          });
        } else {
          settle(0);
        }
      },
      onPanResponderTerminate: () => settle(0),
    })
  ).current;

  return { 
    panHandlers: Platform.OS === 'web' ? {} : panResponder.panHandlers, 
    translateX 
  };
}

import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';

/**
 * A soft, layered wash of colour meant to sit behind hero content —
 * a "nebula" built from overlapping translucent discs rather than a true
 * radial gradient (React Native has none natively). Where <GunaRule /> is
 * puruṣa-mode design — one still, disciplined line — this is prakṛti-mode:
 * the guṇas actually caught mixing, in full, layered colour.
 *
 * Use ONE per screen, behind the single most important visual (a system
 * hero, the verse-of-the-moment block) — never as general-purpose
 * decoration, or it stops reading as a moment and starts reading as noise.
 *
 * Must be the first child of a `position: relative, overflow: hidden`
 * container; it fills that container absolutely.
 */
export default function AuroraGlow({
  colors: customColors,
  intensity = 1,
}: {
  /** Override the default full-spectrum sweep — e.g. a system's own accent pair. */
  colors?: string[];
  /** 0–1, scales opacity for lighter touches (e.g. behind body text blocks). */
  intensity?: number;
}) {
  const { colors, auroraGradient } = useTheme();
  const stops = customColors && customColors.length > 0 ? customColors : auroraGradient;
  const pulse = useRef(new Animated.Value(0.5)).current; // Default to mid-breathe

  // Animation disabled to prevent battery drain and layout thrashing
  // on the Home Screen for large list views.
  useEffect(() => {
    pulse.setValue(0.5); // Set to middle of the "breath"
  }, [pulse]);

  const breathe = pulse.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.08] });
  const drift = pulse.interpolate({ inputRange: [0, 1], outputRange: [0, 10] });

  const baseOpacity = 0.9 * intensity;

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Animated.View
        style={[
          styles.disc,
          {
            backgroundColor: stops[0] ?? colors.purushaGlow,
            width: 260,
            height: 260,
            top: -70,
            left: -50,
            opacity: baseOpacity,
            transform: [{ scale: breathe }, { translateX: drift }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.disc,
          {
            backgroundColor: stops[2] ?? colors.rajasGlow,
            width: 220,
            height: 220,
            top: 20,
            right: -60,
            opacity: baseOpacity,
            transform: [{ scale: breathe }, { translateX: Animated.multiply(drift, -1) }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.disc,
          {
            backgroundColor: stops[1] ?? colors.sattvaGlow,
            width: 300,
            height: 180,
            bottom: -80,
            left: 30,
            opacity: baseOpacity,
            transform: [{ scale: breathe }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  disc: { position: 'absolute', borderRadius: 999 },
});

import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../theme/useTheme';

/**
 * The app's one recurring graphic signature: a thin horizontal band moving
 * sattva → rajas → tamas, the three guṇas Sāṃkhya holds are always
 * co-present in every part of manifest nature (prakṛti), never found pure
 * or alone. Used sparingly — under a page title, along the top edge of a
 * hero card — as a literal rendering of that idea rather than a generic
 * decorative gradient.
 *
 * `weight`: 'hair' (2px, for tucking under titles) or 'bold' (3px, for
 * card edges and progress-adjacent contexts).
 */
export default function GunaRule({
  weight = 'hair',
  style,
  colors: customColors,
}: {
  weight?: 'hair' | 'bold';
  style?: StyleProp<ViewStyle>;
  /** Override the universal guṇa sequence — e.g. a system's own accent
   *  pair, so a Sāṃkhya card and a Yoga card read as two viewpoints
   *  rather than two copies of the same rule. */
  colors?: string[];
}) {
  const { gunaGradient } = useTheme();
  const stops = customColors && customColors.length >= 2 ? customColors : gunaGradient;
  return (
    <View style={[{ height: weight === 'hair' ? 2 : 3, borderRadius: 2, overflow: 'hidden' }, style]}>
      <LinearGradient
        colors={stops as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Verse } from '../types/content';
import { ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function VerseRow({
  verse,
  onPress,
  bookmarked,
}: {
  verse: Verse;
  onPress: () => void;
  bookmarked?: boolean;
}) {
  const { colors, type } = useTheme();
  const s = makeStyles(colors);
  return (
    <Pressable
      style={({ pressed }) => [s.row, pressed && s.rowPressed]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Verse ${verse.number}: ${verse.content?.en?.translation?.split('.')[0] ?? ''}`}
      accessibilityState={{ selected: !!bookmarked }}
    >
      <Text style={[type.sanskritNum, s.num]}>{verse.number}</Text>
      <View style={{ flex: 1 }}>
        <Text style={[type.body, s.en]} numberOfLines={2}>
          {verse.content?.en?.translation?.split('.')[0] ?? ''}.
        </Text>
        <Text style={[type.caption, s.sa]} numberOfLines={1}>
          {verse.devanagari ? verse.devanagari.split('\n')[0] : verse.iast.split('\n')[0]}
        </Text>
      </View>
      {bookmarked && <Text style={[type.caption, s.star]}>★</Text>}
    </Pressable>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.hair,
      borderRadius: 8, // slight rounding for press state
    },
    rowPressed: {
      backgroundColor: colors.avyakta3,
      opacity: 0.9,
    },
    num: { color: colors.sattva, minWidth: 30, textAlign: 'right' },
    en: { color: colors.ink, lineHeight: 19 },
    sa: { color: colors.inkDim, marginTop: 4, opacity: 0.8 },
    star: { color: colors.sattva, fontSize: 15 },
  });

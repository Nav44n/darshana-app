import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Verse } from '../types/content';
import { fonts, ColorPalette } from '../theme/tokens';
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
  const { colors } = useTheme();
  const s = makeStyles(colors);
  return (
    <Pressable
      style={s.row}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Verse ${verse.number}: ${verse.content?.en?.translation?.split('.')[0] ?? ''}`}
      accessibilityState={{ selected: !!bookmarked }}
    >
      <Text style={s.num}>{verse.number}</Text>
      <View style={{ flex: 1 }}>
        <Text style={s.en} numberOfLines={2}>
          {verse.content?.en?.translation?.split('.')[0] ?? ''}.
        </Text>
        <Text style={s.sa} numberOfLines={1}>
          {verse.devanagari ? verse.devanagari.split('\n')[0] : verse.iast.split('\n')[0]}
        </Text>
      </View>
      {bookmarked && <Text style={s.star}>★</Text>}
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
      paddingHorizontal: 4,
      borderBottomWidth: 1,
      borderBottomColor: colors.hair,
    },
    // minWidth (not width) + right-align: short numerals (I, X) sit flush
    // against the text column; long ones (LXXIII, XXXVIII — over half of the
    // Sāṃkhya Kārikā's 73 verses run 4+ characters) grow the column instead
    // of wrapping onto a second line.
    num: { fontFamily: fonts.sanskrit, fontSize: 17, color: colors.sattva, minWidth: 30, textAlign: 'right' },
    en: { fontFamily: fonts.serif, fontSize: 14, color: colors.ink, lineHeight: 18 },
    sa: { fontFamily: fonts.sanskrit, fontSize: 12, color: colors.inkDim, marginTop: 2 },
    star: { color: colors.sattva, fontSize: 15 },
  });

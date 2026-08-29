import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Verse } from '../types/content';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function JumpToVerseModal({
  visible,
  verses,
  currentIndex,
  onClose,
  onJump,
}: {
  visible: boolean;
  verses: Verse[];
  currentIndex: number;
  onClose: () => void;
  onJump: (index: number) => void;
}) {
  const [dragIndex, setDragIndex] = useState(currentIndex);
  const { colors } = useTheme();
  const s = makeStyles(colors);

  React.useEffect(() => {
    if (visible) setDragIndex(currentIndex);
  }, [visible, currentIndex]);

  const dragVerse = verses[dragIndex];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={s.backdrop} onPress={onClose} accessibilityRole="button" accessibilityLabel="Close jump-to-verse" />
      <View style={s.sheet}>
        <View style={s.handle} />
        <Text style={s.eyebrow}>Jump to verse</Text>
        <View style={s.previewBox}>
          <Text style={s.previewNum}>{dragVerse?.number}</Text>
          <Text style={s.previewSection} numberOfLines={1}>
            {dragVerse?.section}
          </Text>
        </View>

        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={Math.max(verses.length - 1, 0)}
          step={1}
          value={currentIndex}
          minimumTrackTintColor={colors.rajas}
          maximumTrackTintColor={colors.hair}
          thumbTintColor={colors.sattva}
          onValueChange={(v) => setDragIndex(Math.round(v))}
          onSlidingComplete={(v) => onJump(Math.round(v))}
          accessibilityLabel="Jump to verse slider"
          accessibilityHint={`Currently on verse ${dragVerse?.number ?? ''}. Slide to choose a different verse.`}
          accessibilityValue={{ min: 0, max: Math.max(verses.length - 1, 0), now: dragIndex, text: dragVerse?.number }}
        />
        <View style={s.sliderLabels}>
          <Text style={s.sliderLabelText}>{verses[0]?.number}</Text>
          <Text style={s.sliderLabelText}>{verses[verses.length - 1]?.number}</Text>
        </View>

        <Text style={s.gridLabel}>Or tap a verse directly</Text>
        <ScrollView style={{ maxHeight: 220 }}>
          <View style={s.grid}>
            {verses.map((v, i) => (
              <Pressable
                key={v.id}
                style={[s.chip, i === currentIndex && s.chipActive]}
                onPress={() => onJump(i)}
                accessibilityRole="button"
                accessibilityLabel={`Verse ${v.number}`}
                accessibilityState={{ selected: i === currentIndex }}
              >
                <Text style={[s.chipText, i === currentIndex && s.chipTextActive]}>{v.number}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <Pressable style={s.closeBtn} onPress={onClose} accessibilityRole="button" accessibilityLabel="Close">
          <Text style={s.closeBtnText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.avyakta2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 22,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderColor: colors.hair,
  },
  handle: { width: 40, height: 4, borderRadius: 2, backgroundColor: colors.hair, alignSelf: 'center', marginBottom: 14 },
  eyebrow: {
    fontFamily: fonts.sansBold,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.sattvaDim,
    marginBottom: 12,
  },
  previewBox: { alignItems: 'center', marginBottom: 6 },
  previewNum: { fontFamily: fonts.sanskrit, fontSize: 34, color: colors.sattva },
  previewSection: { fontFamily: fonts.serifItalic, fontSize: 13, color: colors.inkDim, marginTop: 2 },
  sliderLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -6, marginBottom: 12 },
  sliderLabelText: { fontFamily: fonts.sanskrit, fontSize: 11, color: colors.tamas },
  gridLabel: { fontFamily: fonts.sansBold, fontSize: 10.5, color: colors.inkDim, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingBottom: 6 },
  chip: {
    minWidth: 38,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.hair,
    alignItems: 'center',
  },
  chipActive: { backgroundColor: colors.rajas, borderColor: colors.rajas },
  chipText: { fontFamily: fonts.sanskrit, fontSize: 12, color: colors.inkDim },
  chipTextActive: { color: '#fff' },
  closeBtn: { marginTop: 16, alignItems: 'center', paddingVertical: 12 },
  closeBtnText: { fontFamily: fonts.sansBold, fontSize: 12, color: colors.sattvaDim, textTransform: 'uppercase', letterSpacing: 1 },
});

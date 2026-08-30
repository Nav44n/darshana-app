import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Verse } from '../types/content';
import { ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import GunaRule from './GunaRule';

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
  const { colors, type, elevation, gunaGradient } = useTheme();
  const s = makeStyles(colors);

  React.useEffect(() => {
    if (visible) setDragIndex(currentIndex);
  }, [visible, currentIndex]);

  const dragVerse = verses[dragIndex];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={[s.backdrop, { backgroundColor: colors.overlay }]} onPress={onClose} accessibilityRole="button" accessibilityLabel="Close jump-to-verse" />
      <View style={[s.sheet, elevation(3)]}>
        <GunaRule weight="bold" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <View style={s.handle} />
        <Text style={[type.eyebrow, { color: colors.sattvaDim, marginBottom: 12 }]}>Jump to verse</Text>
        <View style={s.previewBox}>
          <Text style={[type.display1, { color: colors.sattva, fontSize: 34 }]}>{dragVerse?.number}</Text>
          <Text style={[type.subtitle, { color: colors.inkDim, marginTop: 2, fontSize: 13 }]} numberOfLines={1}>
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
          <Text style={[type.sanskritNum, { color: colors.tamas, fontSize: 11 }]}>{verses[0]?.number}</Text>
          <Text style={[type.sanskritNum, { color: colors.tamas, fontSize: 11 }]}>{verses[verses.length - 1]?.number}</Text>
        </View>

        <Text style={[type.label, { color: colors.inkDim, marginBottom: 8 }]}>Or tap a verse directly</Text>
        <ScrollView style={{ maxHeight: 220 }}>
          <View style={s.grid}>
            {verses.map((v, i) => (
              <Pressable
                key={v.id}
                style={({ pressed }) => [
                  s.chip,
                  i === currentIndex && s.chipActive,
                  pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
                ]}
                onPress={() => onJump(i)}
                accessibilityRole="button"
                accessibilityLabel={`Verse ${v.number}`}
                accessibilityState={{ selected: i === currentIndex }}
              >
                <Text style={[type.sanskritNum, s.chipText, i === currentIndex && s.chipTextActive]}>{v.number}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <Pressable
          style={({ pressed }) => [s.closeBtn, pressed && { opacity: 0.7 }]}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <Text style={[type.label, { color: colors.sattvaDim }]}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  backdrop: { flex: 1 },
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
    overflow: 'hidden',
  },
  handle: { width: 40, height: 4, borderRadius: 2, backgroundColor: colors.hair, alignSelf: 'center', marginBottom: 14, marginTop: 4 },
  previewBox: { alignItems: 'center', marginBottom: 6 },
  sliderLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -6, marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingBottom: 6 },
  chip: {
    minWidth: 38,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.hair,
    alignItems: 'center',
    backgroundColor: colors.avyakta3,
  },
  chipActive: { backgroundColor: colors.avyakta4, borderColor: colors.rajas },
  chipText: { fontSize: 13, color: colors.inkDim },
  chipTextActive: { color: colors.sattva },
  closeBtn: { marginTop: 16, alignItems: 'center', paddingVertical: 12 },
});

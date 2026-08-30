import React, { useRef, useState, useCallback } from 'react';
import { Animated, ScrollView, View, Text, Pressable, StyleSheet, Share, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DiagramFrame, SectionLabel, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { Diagram } from '../components/diagrams';
import JumpToVerseModal from '../components/JumpToVerseModal';
import LinkedText from '../components/LinkedText';
import NotFoundState from '../components/NotFoundState';
import AuroraGlow from '../components/AuroraGlow';
import { getText } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { useSwipeNav, webNoSelect } from '../utils/useSwipeNav';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function VerseDetailScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, textId, verseId } = route.params ?? {};
  const text = getText(systemId, textId);
  const index = text ? text.verses.findIndex((v) => v.id === verseId) : -1;
  const verse = text?.verses[index];
  const [jumpVisible, setJumpVisible] = useState(false);
  const { isBookmarked, toggleBookmark, fontScale, setFontScale, recordLastRead, appLanguage } = useReadingPrefs();
  const { colors, elevation, systemAccent, glowText } = useTheme();
  const accent = systemAccent(systemId);
  const s = makeStyles(colors);
  const scrollRef = useRef<ScrollView>(null);

  React.useEffect(() => {
    if (!text || !verse) return;
    recordLastRead(systemId, textId, verseId);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [systemId, textId, verseId]);

  const goTo = useCallback(
    (i: number) => {
      if (!text || i < 0 || i >= text.verses.length) return;
      nav.setParams({ verseId: text.verses[i].id });
    },
    [nav, text]
  );

  React.useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow default behavior (like scrolling) for everything else
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(index - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goTo, index]);

  const hasPrev = index > 0;
  const hasNext = !!text && index < text.verses.length - 1;

  const { panHandlers, translateX } = useSwipeNav({
    onNext: () => goTo(index + 1),
    onPrev: () => goTo(index - 1),
    hasNext,
    hasPrev,
  });

  const bookmarked = text && verse ? isBookmarked(systemId, textId, verseId) : false;
  const scaledFont = (base: number) => Math.round(base * fontScale);

  const onShare = () => {
    if (!text || !verse) return;
    Share.share({
      message: `${text.transliteratedTitle} ${verse.number}\n\n${verse.content.en?.translation}\n\n— ${text.author}`,
    });
  };

  if (!text || !verse) return <NotFoundState label="That verse" />;

  const progress = (index + 1) / text.verses.length;

  return (
    <View style={{ flex: 1, backgroundColor: colors.avyakta }}>
      <Animated.View style={[{ flex: 1, transform: [{ translateX }] }, webNoSelect]} {...panHandlers}>
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={s.topRow}>
          <Pressable onPress={() => nav.goBack()} style={s.crumb} accessibilityRole="button" accessibilityLabel={`Back to ${text.transliteratedTitle}`}>
            <Text style={s.crumbText} numberOfLines={1}>‹  {text.transliteratedTitle}</Text>
          </Pressable>
          <View style={s.topActions}>
            <Pressable
              onPress={onShare}
              style={({ pressed }) => [s.iconBtn, pressed && s.iconBtnPressed]}
              accessibilityRole="button"
              accessibilityLabel="Share this verse"
            >
              <Text style={s.iconBtnText}>⇪</Text>
            </Pressable>
            <Pressable
              onPress={() => toggleBookmark(systemId, textId, verseId)}
              style={({ pressed }) => [s.iconBtn, bookmarked && s.iconBtnActive, pressed && s.iconBtnPressed]}
              accessibilityRole="button"
              accessibilityLabel={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
              accessibilityState={{ selected: bookmarked }}
            >
              <Text style={[s.iconBtnText, bookmarked && { color: colors.sattva }]}>{bookmarked ? '★' : '☆'}</Text>
            </Pressable>
            <LanguageToggle />
          <ThemeToggle />
          </View>
        </View>

        <View style={s.fontRow}>
          <Text style={s.fontRowLabel}>Text size</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Pressable
              style={({ pressed }) => [s.fontBtn, pressed && s.fontBtnPressed]}
              onPress={() => setFontScale(Math.max(0.85, fontScale - 0.1))}
              accessibilityRole="button"
              accessibilityLabel="Decrease text size"
            >
              <Text style={s.fontBtnText}>A-</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [s.fontBtn, pressed && s.fontBtnPressed]}
              onPress={() => setFontScale(1)}
              accessibilityRole="button"
              accessibilityLabel="Reset text size"
            >
              <Text style={s.fontBtnText}>A</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [s.fontBtn, pressed && s.fontBtnPressed]}
              onPress={() => setFontScale(Math.min(1.4, fontScale + 0.1))}
              accessibilityRole="button"
              accessibilityLabel="Increase text size"
            >
              <Text style={s.fontBtnText}>A+</Text>
            </Pressable>
          </View>
        </View>

        <Text style={[s.detailNum, { color: accent.primary }]}>{verse.number}</Text>
        <Text style={[s.title, glowText(accent.glow, 14)]}>{verse.section}</Text>

        <View style={[s.devaBlock, elevation(1), { borderLeftColor: accent.primary }]}>
          <AuroraGlow colors={accent.pair} intensity={0.35} />
          {verse.devanagari ? (
            <Text style={[s.deva, { fontSize: scaledFont(20) }]}>{verse.devanagari}</Text>
          ) : (
            <Text style={[s.iastPrimary, { fontSize: scaledFont(19) }]}>{verse.iast}</Text>
          )}
          {verse.devanagari && <Text style={[s.iast, { fontSize: scaledFont(15) }]}>{verse.iast}</Text>}
        </View>

        <View style={s.sideBySideBlock}>
          {appLanguage === 'ml' && verse.content.ml?.translation ? (
            <Text style={[s.transMl, { fontSize: scaledFont(18), marginTop: 12 }]}>{verse.content.ml.translation}</Text>
          ) : (
            <Text style={[s.trans, { fontSize: scaledFont(18) }]}>{verse.content.en?.translation}</Text>
          )}
        </View>

        <SectionLabel>{appLanguage === 'ml' && verse.content.ml?.commentary ? 'വ്യാഖ്യാനം (Commentary)' : 'Commentary'}</SectionLabel>

        {appLanguage === 'ml' && verse.content.ml?.commentary ? (
            <LinkedText style={[s.commentaryMl, { fontSize: scaledFont(16) }]}>{verse.content.ml.commentary ?? ''}</LinkedText>
        ) : (
          <LinkedText style={[s.commentary, { fontSize: scaledFont(16) }]}>{verse.content.en?.commentary ?? ''}</LinkedText>
        )}

        {verse.interpretiveNotes && verse.interpretiveNotes.length > 0 && (
          <>
            <SectionLabel>Where sources add or differ</SectionLabel>
            {verse.interpretiveNotes.map((n, i) => (
              <View key={i} style={[s.noteBlock, { borderLeftColor: colors.purushaDim }]}>
                <Text style={[s.noteSource, { color: colors.purushaDim }]}>{n.source}</Text>
                <LinkedText style={[s.noteText, { fontSize: scaledFont(15) }]}>{n.note ?? ''}</LinkedText>
              </View>
            ))}
          </>
        )}

        {verse.content.en?.keyPoints && verse.content.en.keyPoints.length > 0 && (
          <>
            <SectionLabel>Key points</SectionLabel>
            {verse.content.en.keyPoints.map((p, i) => (
              <View key={i} style={s.keyRow}>
                <Text style={[s.keyDash, { color: accent.primary }]}>—</Text>
                <LinkedText style={[s.keyText, { fontSize: scaledFont(13.5) }]}>{p ?? ''}</LinkedText>
              </View>
            ))}
          </>
        )}

        {verse.diagramId && (
          <>
            <SectionLabel>Concept diagram</SectionLabel>
            <DiagramFrame>
              <Diagram id={verse.diagramId} />
            </DiagramFrame>
          </>
        )}

      </ScrollView>
      </Animated.View>

      <View style={[s.bottomBar, elevation(2)]}>
        <Pressable
          style={({ pressed }) => [s.navBtn, !hasPrev && s.navBtnDisabled, pressed && hasPrev && s.navBtnPressed]}
          disabled={!hasPrev}
          onPress={() => goTo(index - 1)}
          accessibilityRole="button"
          accessibilityLabel="Previous verse"
          accessibilityState={{ disabled: !hasPrev }}
        >
          <Text style={[s.navBtnText, !hasPrev && s.navBtnTextDisabled]}>‹ Prev</Text>
        </Pressable>

        <Pressable
          style={s.positionBtn}
          onPress={() => setJumpVisible(true)}
          accessibilityRole="button"
          accessibilityLabel={`Verse ${index + 1} of ${text.verses.length}. Tap to jump to another verse.`}
        >
          <Text style={s.positionText}>
            {index + 1} / {text.verses.length}
          </Text>
          <View style={s.miniTrack}>
            <LinearGradient
              colors={accent.pair as any}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[s.miniFill, { width: `${progress * 100}%` }]}
            />
          </View>
        </Pressable>

        <Pressable
          style={({ pressed }) => [s.navBtn, !hasNext && s.navBtnDisabled, pressed && hasNext && s.navBtnPressed]}
          disabled={!hasNext}
          onPress={() => goTo(index + 1)}
          accessibilityRole="button"
          accessibilityLabel="Next verse"
          accessibilityState={{ disabled: !hasNext }}
        >
          <Text style={[s.navBtnText, !hasNext && s.navBtnTextDisabled]}>Next ›</Text>
        </Pressable>
      </View>

      <JumpToVerseModal
        visible={jumpVisible}
        verses={text.verses}
        currentIndex={index}
        onClose={() => setJumpVisible(false)}
        onJump={(i) => {
          setJumpVisible(false);
          goTo(i);
        }}
      />
    </View>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  crumb: { flex: 1 },
  crumbText: { color: colors.inkDim, fontSize: 13 },
  topActions: { flexDirection: 'row', gap: 6 },
  iconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.hair,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnActive: { borderColor: colors.sattva, backgroundColor: colors.sattvaGlow },
  iconBtnPressed: { backgroundColor: colors.avyakta3 },
  iconBtnText: { fontSize: 16, color: colors.inkDim },
  detailNum: { ...type.sanskritNum },
  title: { fontFamily: fonts.display, fontSize: 26, color: colors.ink, marginTop: 2, marginBottom: 10 },
  devaBlock: {
    backgroundColor: colors.avyakta2,
    borderWidth: 1,
    borderColor: colors.hair,
    borderLeftWidth: 3,
    borderRadius: 4,
    padding: 18,
    marginBottom: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  deva: { fontFamily: fonts.sanskrit, lineHeight: 34, color: colors.sattva },
  iastPrimary: { fontFamily: fonts.serifItalic, lineHeight: 28, color: colors.sattva },
  iast: { fontFamily: fonts.serifItalic, lineHeight: 22, color: colors.inkDim, marginTop: 8 },
  trans: { fontFamily: fonts.serif, lineHeight: 26, color: colors.ink, marginBottom: 8 },
  transMl: { fontFamily: fonts.sans, lineHeight: 26, color: colors.inkDim },
  sideBySideBlock: { marginBottom: 8 },
  commentary: { fontFamily: fonts.serif, lineHeight: 24, color: colors.ink },
  commentaryMl: { fontFamily: fonts.sans, lineHeight: 24, color: colors.inkDim },
  noteBlock: { marginBottom: 12, paddingLeft: 10, borderLeftWidth: 2 },
  noteSource: {
    ...type.label,
    marginBottom: 4,
  },
  noteText: { fontFamily: fonts.serif, lineHeight: 21, color: colors.ink },
  keyRow: { flexDirection: 'row', gap: 8, paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: colors.hair },
  keyDash: { fontSize: 13 },
  keyText: { flex: 1, lineHeight: 19, color: colors.inkDim },
  fontRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.hair,
  },
  fontRowLabel: { ...type.label, color: colors.tamas },
  fontBtn: { borderWidth: 1, borderColor: colors.hair, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  fontBtnPressed: { backgroundColor: colors.avyakta3 },
  fontBtnText: { fontFamily: fonts.sansBold, fontSize: 12, color: colors.inkDim },
  bottomBar: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 800,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: colors.hair,
    backgroundColor: colors.avyakta,
  },
  navBtn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10, backgroundColor: colors.avyakta2, borderWidth: 1, borderColor: colors.hair },
  navBtnPressed: { backgroundColor: colors.avyakta3 },
  navBtnDisabled: { opacity: 0.35 },
  navBtnText: { fontFamily: fonts.sansBold, fontSize: 13, color: colors.sattva },
  navBtnTextDisabled: { color: colors.tamas },
  positionBtn: { flex: 1, alignItems: 'center' },
  positionText: { ...type.sanskritNum, color: colors.ink, marginBottom: 4 },
  miniTrack: { height: 4, width: '80%', backgroundColor: colors.avyakta3, borderRadius: 2, overflow: 'hidden' },
  miniFill: { height: '100%' },
});

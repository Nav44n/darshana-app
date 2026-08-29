import React, { useRef } from 'react';
import { Animated, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DiagramFrame, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { Diagram } from '../components/diagrams';
import LinkedText from '../components/LinkedText';
import NotFoundState from '../components/NotFoundState';
import { getSystem, getText } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { useSwipeNav, webNoSelect } from '../utils/useSwipeNav';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function ThreadScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, stepId } = route.params ?? {};
  const system = getSystem(systemId);
  const thread = system?.thread ?? [];
  const index = stepId ? thread.findIndex((t) => t.id === stepId) : 0;
  const step = thread[index < 0 ? 0 : index];

  const text = step ? getText(systemId, step.textId) : undefined;
  const concept = step?.conceptId ? text?.concepts.find((c) => c.id === step.conceptId) : undefined;
  const verseIds = step?.verseIds ?? concept?.relatedVerseIds ?? [];
  const scrollRef = useRef<ScrollView>(null);
  const { colors } = useTheme();

  const { fontScale, isThreadStepCompleted, toggleThreadStepCompletion, appLanguage } = useReadingPrefs();

  const s = makeStyles(colors);
  const scaledFont = (base: number) => Math.round(base * fontScale);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [stepId]);

  const hasPrev = index > 0;
  const hasNext = index < thread.length - 1;
  const isCompleted = step ? isThreadStepCompleted(step.id) : false;

  const goTo = (i: number) => {
    if (i < 0 || i >= thread.length) return;
    nav.setParams({ stepId: thread[i].id });
  };

  const { panHandlers, translateX } = useSwipeNav({
    onNext: () => goTo(index + 1),
    onPrev: () => goTo(index - 1),
    hasNext,
    hasPrev,
  });

  if (!system || !step) return <NotFoundState label="That thread" />;

  return (
    <View style={{ flex: 1, backgroundColor: colors.avyakta }}>
      <Animated.View style={[{ flex: 1, transform: [{ translateX }] }, webNoSelect]} {...panHandlers}>
        <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={s.topRow}>
            <Pressable
              onPress={() => nav.goBack()}
              style={s.crumb}
              accessibilityRole="button"
              accessibilityLabel={`Back to ${system.title}`}
            >
              <Text style={s.crumbText} numberOfLines={1}>{'<  '}{system.title}</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Pressable onPress={() => toggleThreadStepCompletion(step.id)}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: isCompleted ? colors.sattva : colors.inkDim }}>
                  {isCompleted ? '☑ DONE' : '☐ MARK'}
                </Text>
              </Pressable>
              <LanguageToggle />
              <ThemeToggle />
            </View>
          </View>

          <Text style={s.eyebrow}>
            {system.title} thread — step {index + 1} of {thread.length}
          </Text>
          <View style={s.track} accessibilityLabel={`Step ${index + 1} of ${thread.length}`}>
            {thread.map((t, i) => (
              <View key={i} style={[s.trackDot, isThreadStepCompleted(t.id) && s.trackDotDone, i === index && { borderColor: colors.sattva, borderWidth: 2 }]} />
            ))}
          </View>

          <Text style={[s.title, appLanguage === 'ml' ? s.mlText : {}]}>
            {step.content[appLanguage]?.title || step.content.en?.title}
          </Text>
          <LinkedText style={[s.narrative, { fontSize: scaledFont(18) }, appLanguage === 'ml' ? s.mlText : {}]}>
            {(step.content[appLanguage]?.narrative || step.content.en?.narrative) ?? ''}
          </LinkedText>

          {concept?.diagramId && (
            <DiagramFrame>
              <Diagram id={concept.diagramId} />
            </DiagramFrame>
          )}

          {verseIds.length > 0 && (
            <View style={s.versesBlock}>
              <Text style={s.versesLabel}>Go deeper — read the verses</Text>
              <View style={s.verseChipRow}>
                {verseIds.map((vId) => (
                  <Pressable
                    key={vId}
                    style={s.verseChip}
                    onPress={() => nav.navigate('VerseDetail', { systemId, textId: step.textId, verseId: vId })}
                    accessibilityRole="link"
                    accessibilityLabel={`Read verse ${vId} in full`}
                  >
                    <Text style={s.verseChipText}>{vId}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </Animated.View>

      <View style={s.bottomBar}>
        <Pressable
          style={[s.navBtn, !hasPrev && s.navBtnDisabled]}
          disabled={!hasPrev}
          onPress={() => goTo(index - 1)}
          accessibilityRole="button"
          accessibilityLabel="Previous step"
          accessibilityState={{ disabled: !hasPrev }}
        >
          <Text style={[s.navBtnText, !hasPrev && s.navBtnTextDisabled]}>{'< Prev'}</Text>
        </Pressable>
        <Text style={s.stepCount}>
          {index + 1} / {thread.length}
        </Text>
        {hasNext ? (
          <Pressable
            style={s.navBtn}
            onPress={() => goTo(index + 1)}
            accessibilityRole="button"
            accessibilityLabel="Next step"
          >
            <Text style={s.navBtnText}>{'Next >'}</Text>
          </Pressable>
        ) : (
          <Pressable
            style={s.navBtnPrimary}
            onPress={() => nav.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Finish thread and go back"
          >
            <Text style={s.navBtnPrimaryText}>Finished</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  crumb: { flex: 1 },
  crumbText: { color: colors.inkDim, fontSize: 13 },
  eyebrow: {
    fontFamily: fonts.sansBold,
    fontSize: 10.5,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: colors.sattvaDim,
    marginBottom: 10,
  },
  track: { flexDirection: 'row', gap: 5, marginBottom: 20 },
  trackDot: { flex: 1, height: 4, borderRadius: 2, backgroundColor: colors.avyakta3 },
  trackDotDone: { backgroundColor: colors.rajas },
  title: { fontFamily: fonts.display, fontSize: 26, color: colors.ink, marginBottom: 14, lineHeight: 32 },
  mlText: { fontFamily: fonts.sans, letterSpacing: 0, lineHeight: 28 },
  narrative: { fontFamily: fonts.serif, lineHeight: 27, color: colors.ink, marginBottom: 8 },
  versesBlock: { marginTop: 22 },
  versesLabel: {
    fontFamily: fonts.sansBold,
    fontSize: 11,
    color: colors.inkDim,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  verseChipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  verseChip: {
    borderWidth: 1,
    borderColor: colors.hair,
    borderRadius: 14,
    paddingVertical: 7,
    paddingHorizontal: 14,
    backgroundColor: colors.avyakta2,
  },
  verseChipText: { fontFamily: fonts.sanskrit, fontSize: 13, color: colors.sattva },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: colors.hair,
    backgroundColor: colors.avyakta,
  },
  navBtn: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 10, backgroundColor: colors.avyakta2, borderWidth: 1, borderColor: colors.hair },
  navBtnDisabled: { opacity: 0.35 },
  navBtnText: { fontFamily: fonts.sansBold, fontSize: 13, color: colors.sattva },
  navBtnTextDisabled: { color: colors.tamas },
  navBtnPrimary: { paddingVertical: 10, paddingHorizontal: 18, borderRadius: 10, backgroundColor: colors.rajas },
  navBtnPrimaryText: { fontFamily: fonts.sansBold, fontSize: 13, color: '#fff' },
  stepCount: { fontFamily: fonts.sanskrit, fontSize: 13, color: colors.inkDim },
});
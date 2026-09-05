import React, { useRef, useState, useCallback } from 'react';
import { Animated, ScrollView, View, Text, Pressable, StyleSheet, Share, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DiagramFrame, SectionLabel, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { Diagram } from '../components/diagrams';
import NotFoundState from '../components/NotFoundState';
import AuroraGlow from '../components/AuroraGlow';
import { getText } from '../content';
import { useDisplayPrefs } from '../state/ReadingPrefs';
import { useSwipeNav, webNoSelect } from '../utils/useSwipeNav';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import LinkedText from '../components/LinkedText';

export default function ConceptDetailScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, textId, conceptId } = route.params ?? {};
  const text = getText(systemId, textId);
  const index = text ? text.concepts.findIndex((c) => c.id === conceptId) : -1;
  const concept = text?.concepts[index];
  const { fontScale, appLanguage } = useDisplayPrefs();
  const { colors, systemAccent, elevation } = useTheme();
  const accent = systemAccent(systemId);
  const s = makeStyles(colors);
  const scrollRef = useRef<ScrollView>(null);

  React.useEffect(() => {
    if (!text || !concept) return;
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [systemId, textId, conceptId]);

  const goTo = useCallback(
    (i: number) => {
      if (!text || i < 0 || i >= text.concepts.length) return;
      nav.setParams({ conceptId: text.concepts[i].id });
    },
    [nav, text]
  );

  React.useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handleKeyDown = (e: KeyboardEvent) => {
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
  const hasNext = !!text && index < text.concepts.length - 1;

  const { panHandlers, translateX } = useSwipeNav({
    onNext: () => goTo(index + 1),
    onPrev: () => goTo(index - 1),
    hasNext,
    hasPrev,
  });

  const scaledFont = (base: number) => Math.round(base * fontScale);

  if (!text || !concept) return <NotFoundState label="That concept" />;
  
  const content = concept.content[appLanguage] || concept.content.en;
  
  const progress = (index + 1) / text.concepts.length;

  return (
    <View style={{ flex: 1, backgroundColor: colors.avyakta }}>
      <Animated.View style={[{ flex: 1, transform: [{ translateX }] }, webNoSelect]} {...panHandlers}>
      <ScrollView ref={scrollRef} style={s.screen} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={s.topRow}>
          <Pressable onPress={() => nav.goBack()} style={s.crumb} accessibilityRole="button">
            <Text style={s.crumbText} numberOfLines={1}>{'<'}  {text.transliteratedTitle} Concepts</Text>
          </Pressable>
          <View style={s.topActions}>
            <LanguageToggle />
            <ThemeToggle />
          </View>
        </View>

        <View style={s.card}>
          <LinearGradient
            colors={[accent.glow, 'transparent']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.2 }}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
          />

          <View style={s.cardHeader}>
            <View>
              {concept.category && <Text style={[s.categoryLabel, { color: accent.dim }]}>{concept.category}</Text>}
              <Text style={s.conceptTitle}>{content?.title}</Text>
            </View>
          </View>

          <View style={s.cardBody}>
            {!!content?.summary && (
              <LinkedText style={[s.translation, { fontSize: scaledFont(16), lineHeight: scaledFont(25) }]}>
                {content.summary}
              </LinkedText>
            )}
          </View>

          {!!concept.diagramId && (
            <View style={{ marginTop: 24 }}>
              <DiagramFrame caption="Tap a related verse to read it in full">
                <Diagram id={concept.diagramId} />
              </DiagramFrame>
            </View>
          )}

          {(concept.relatedConceptIds || []).length > 0 && (
            <View style={{ marginTop: 32 }}>
              <SectionLabel>Related Concepts</SectionLabel>
              <View style={s.chipRow}>
                {concept.relatedConceptIds!.map((rcId) => {
                  const relatedConcept = text.concepts.find(c => c.id === rcId);
                  if (!relatedConcept) return null;
                  const rcContent = relatedConcept.content[appLanguage] || relatedConcept.content.en;
                  return (
                    <Pressable
                      key={rcId}
                      style={[s.relatedChip, { borderColor: accent.dim }]}
                      onPress={() => nav.navigate('ConceptDetail', { systemId, textId, conceptId: rcId })}
                    >
                      <Text style={[s.relatedChipText, { color: accent.primary }]}>{rcContent?.title}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          {(concept.relatedVerseIds || []).length > 0 && (
            <View style={{ marginTop: 32 }}>
              <SectionLabel>Mentioned in Verses</SectionLabel>
              <View style={s.chipRow}>
                {concept.relatedVerseIds!.map((vId) => (
                  <Pressable
                    key={vId}
                    style={[s.verseChip, { backgroundColor: accent.glow }]}
                    onPress={() => nav.navigate('VerseDetail', { systemId, textId, verseId: vId })}
                  >
                    <Text style={[s.verseChipText, { color: accent.primary }]}>{vId}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>

        <View style={s.bottomNav}>
          <Pressable
            style={[s.navBtn, !hasPrev && { opacity: 0 }]}
            onPress={() => hasPrev && goTo(index - 1)}
            disabled={!hasPrev}
          >
            <Text style={s.navBtnText}>{'<  '}Prev</Text>
          </Pressable>
          <View style={s.navProgressTrack}>
            <View style={[s.navProgressFill, { width: `${progress * 100}%`, backgroundColor: accent.primary }]} />
          </View>
          <Pressable
            style={[s.navBtn, !hasNext && { opacity: 0 }, { alignItems: 'flex-end' }]}
            onPress={() => hasNext && goTo(index + 1)}
            disabled={!hasNext}
          >
            <Text style={s.navBtnText}>Next{'  >'}</Text>
          </Pressable>
        </View>
      </ScrollView>
      </Animated.View>
    </View>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, padding: 16 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  crumb: { flex: 1, paddingVertical: 8, paddingRight: 16, marginRight: 8 },
  crumbText: { ...type.label, color: colors.inkDim },
  topActions: { flexDirection: 'row', gap: 12 },
  card: {
    backgroundColor: colors.avyakta2,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.hair,
  },
  cardHeader: { marginBottom: 24 },
  categoryLabel: { ...type.label, marginBottom: 8 },
  conceptTitle: { ...type.display2, color: colors.ink },
  cardBody: { gap: 24 },
  translation: { ...type.body, color: colors.ink },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  relatedChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  relatedChipText: { fontFamily: fonts.sansMedium, fontSize: 13 },
  verseChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  verseChipText: { fontFamily: fonts.sansBold, fontSize: 13 },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginTop: 24,
  },
  navBtn: { padding: 12, width: 80 },
  navBtnText: { ...type.label, color: colors.inkDim },
  navProgressTrack: {
    flex: 1,
    height: 2,
    backgroundColor: colors.hair,
    marginHorizontal: 16,
    borderRadius: 1,
    overflow: 'hidden',
  },
  navProgressFill: { height: '100%', borderRadius: 1 },
});

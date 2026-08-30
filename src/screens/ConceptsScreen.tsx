import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, DiagramFrame, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { Diagram } from '../components/diagrams';
import GunaRule from '../components/GunaRule';
import { systems, getSystem } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function ConceptsScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, conceptId } = route.params ?? {};
  const filterSystem = systemId ? getSystem(systemId) : undefined;
  const visibleSystems = filterSystem ? [filterSystem] : systems;
  const { colors, systemAccent } = useTheme();
  const { fontScale, appLanguage } = useReadingPrefs();
  const s = makeStyles(colors);
  const scaledFont = (base: number) => Math.round(base * fontScale);

  return (
    <ScrollView style={s.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>{filterSystem ? filterSystem.title : 'Visual system'}</Eyebrow>
          <PageTitle>Concepts</PageTitle>
        </View>
        <LanguageToggle />
          <ThemeToggle />
      </View>
      <Subtitle>
        {filterSystem ? filterSystem.subtitle : "Philosophy, diagrammed, across every darśana"}
      </Subtitle>
      <GunaRule style={s.headerRule} />
      {filterSystem && (
        <Pressable style={s.clearFilter} onPress={() => nav.setParams({ systemId: undefined })}>
          <Text style={s.clearFilterText}>Show every system ✕</Text>
        </Pressable>
      )}

      {visibleSystems.map((sys) => {
        const accent = systemAccent(sys.id);
        return (
        <View key={sys.id}>
          {!conceptId && sys.thread.length > 0 && (
            <Pressable
              style={({ pressed }) => [s.threadCta, { borderColor: accent.dim }, pressed && { backgroundColor: colors.avyakta3 }]}
              onPress={() => nav.navigate('Thread', { systemId: sys.id, stepId: sys.thread[0].id })}
            >
              <View style={{ flex: 1 }}>
                <Text style={[s.threadCtaTitle, { color: accent.primary }]}>Explore threads</Text>
                <Text style={s.threadCtaSub}>
                  {sys.thread.length} steps · the whole of {sys.title}, one idea leading to the next
                </Text>
              </View>
              <Text style={[s.threadCtaChev, { color: accent.primary }]}>›</Text>
            </Pressable>
          )}

          {sys.texts.map((text) => {
            const filteredConcepts = text.concepts.filter(c => !conceptId || c.id === conceptId);
            if (filteredConcepts.length === 0) return null;
            return (
            <View key={text.id}>
              <SectionLabel>
                {sys.title} · {text.transliteratedTitle}
              </SectionLabel>

              {filteredConcepts.map((c) => {
                const threadStep = sys.thread.find((t) => t.textId === text.id && t.conceptId === c.id);
                return (
                  <View key={c.id} style={s.conceptBlock}>
                    <Text style={s.h3}>{c.content[appLanguage]?.title || c.content.en?.title}</Text>
                    <Text style={[s.p, { fontSize: scaledFont(15) }]}>{c.content[appLanguage]?.summary || c.content.en?.summary}</Text>
                    {c.diagramId && (
                      <DiagramFrame caption="Tap a related verse to read it in full">
                        <Diagram id={c.diagramId} />
                      </DiagramFrame>
                    )}
                    <View style={s.actionsRow}>
                      {threadStep && (
                        <Pressable
                          style={s.inThreadBtn}
                          onPress={() => nav.navigate('Thread', { systemId: sys.id, stepId: threadStep.id })}
                        >
                          <Text style={[s.inThreadBtnText, { color: accent.primary }]}>Read in thread ›</Text>
                        </Pressable>
                      )}
                    </View>
                    {(c.relatedVerseIds || []).length > 0 && (
                      <View style={s.relatedRow}>
                        {(c.relatedVerseIds || []).map((vId) => (
                          <Text
                            key={vId}
                            style={[s.relatedChip, { color: accent.primary, backgroundColor: accent.glow }]}
                            onPress={() =>
                              nav.navigate('VerseDetail', { systemId: sys.id, textId: text.id, verseId: vId })
                            }
                            accessibilityRole="link"
                            accessibilityLabel={`Read verse ${vId} in full`}
                          >
                            {vId}
                          </Text>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
            );
          })}
        </View>
        );
      })}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  headerRule: { width: 46, marginTop: 12, marginBottom: 14 },
  clearFilter: { alignSelf: 'flex-start', marginBottom: 18 },
  clearFilterText: { fontFamily: fonts.sansBold, fontSize: 11.5, color: colors.rajas },
  threadCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.avyakta2,
    borderWidth: 1,
    borderColor: colors.rajasDim,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  threadCtaTitle: { fontFamily: fonts.display, fontSize: 16, color: colors.sattva, marginBottom: 2 },
  threadCtaSub: { fontSize: 11.5, color: colors.inkDim },
  threadCtaChev: { fontSize: 20, color: colors.rajas },
  conceptBlock: {
    marginBottom: 26,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: colors.hair,
  },
  h3: { ...type.h3, fontSize: 18, color: colors.ink, marginBottom: 5 },
  p: { fontFamily: fonts.serif, color: colors.inkDim, lineHeight: 22 },
  actionsRow: { marginTop: 8 },
  inThreadBtn: { alignSelf: 'flex-start' },
  inThreadBtnText: { fontFamily: fonts.sansBold, fontSize: 12, color: colors.rajas },
  relatedRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10 },
  relatedChip: {
    fontFamily: fonts.sanskrit,
    fontSize: 12,
    color: colors.sattva,
    backgroundColor: colors.sattvaGlow,
    borderWidth: 1,
    borderColor: colors.hair,
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
});

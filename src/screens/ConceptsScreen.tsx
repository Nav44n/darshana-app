import React, { useMemo } from 'react';
import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, DiagramFrame, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { Diagram } from '../components/diagrams';
import GunaRule from '../components/GunaRule';
import { systems, getSystem } from '../content';
import { useDisplayPrefs } from '../state/ReadingPrefs';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function ConceptsScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, conceptId } = route.params ?? {};
  const filterSystem = systemId ? getSystem(systemId) : undefined;
  const visibleSystems = filterSystem ? [filterSystem] : systems;
  const { colors, systemAccent } = useTheme();
  const { fontScale, appLanguage } = useDisplayPrefs();
  const s = React.useMemo(() => makeStyles(colors), [colors]);
  const scaledFont = (base: number) => Math.round(base * fontScale);

  const listData = useMemo(() => {
    const data: any[] = [];
    visibleSystems.forEach((sys) => {
      sys.texts.forEach((text) => {
        const filteredConcepts = text.concepts.filter(c => !conceptId || c.id === conceptId);
        if (filteredConcepts.length === 0) return;
        
        data.push({ type: 'header', id: `header-${sys.id}-${text.id}`, title: `${sys.title} · ${text.transliteratedTitle}`, sys });
        
        filteredConcepts.forEach(c => {
          const threadStep = sys.thread.find((t) => t.textId === text.id && t.conceptId === c.id);
          data.push({ type: 'concept', id: `concept-${sys.id}-${text.id}-${c.id}`, c, sys, text, threadStep });
        });
      });
    });
    return data;
  }, [visibleSystems, conceptId]);

  const renderHeader = () => (
    <View style={s.topContainer}>
      {filterSystem && nav.canGoBack() && (
        <Pressable onPress={() => nav.goBack()} style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...type.caption, color: colors.rajas }}>{'< '}Back to {filterSystem.title}</Text>
        </Pressable>
      )}
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

      {!conceptId && filterSystem && filterSystem.thread.length > 0 && (
        <Pressable
          style={({ pressed }) => [s.threadCta, { borderColor: systemAccent(filterSystem.id).dim }, pressed && { backgroundColor: colors.avyakta3 }]}
          onPress={() => nav.navigate('Thread', { systemId: filterSystem.id, stepId: filterSystem.thread[0].id })}
        >
          <View style={{ flex: 1 }}>
            <Text style={[s.threadCtaTitle, { color: systemAccent(filterSystem.id).primary }]}>Explore threads</Text>
            <Text style={s.threadCtaSub}>
              {filterSystem.thread.length} steps · the whole of {filterSystem.title}, one idea leading to the next
            </Text>
          </View>
          <Text style={[s.threadCtaChev, { color: systemAccent(filterSystem.id).primary }]}>›</Text>
        </Pressable>
      )}
    </View>
  );

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === 'header') {
      return (
        <SectionLabel>
          {item.title}
        </SectionLabel>
      );
    }
    
    const { c, sys, text, threadStep } = item;
    const accent = systemAccent(sys.id);
    return (
      <View style={s.conceptBlock}>
        <Text style={s.h3}>{c.content[appLanguage]?.title || c.content.en?.title}</Text>
        <Text style={[s.p, { fontSize: scaledFont(15) }]}>{c.content[appLanguage]?.summary || c.content.en?.summary}</Text>
        {!!c.diagramId && (
          <DiagramFrame caption="Tap a related verse to read it in full">
            <Diagram id={c.diagramId} />
          </DiagramFrame>
        )}
        <View style={s.actionsRow}>
          <Pressable
            style={s.inThreadBtn}
            onPress={() => nav.navigate('ConceptDetail', { systemId: sys.id, textId: text.id, conceptId: c.id })}
          >
            <Text style={[s.inThreadBtnText, { color: accent.primary }]}>View details ›</Text>
          </Pressable>
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
            {(c.relatedVerseIds || []).map((vId: string) => (
              <Text
                key={vId}
                style={[s.relatedChip, { color: accent.primary, backgroundColor: accent.glow }]}
                onPress={() =>
                  nav.navigate('VerseDetail', { systemId: sys.id, textId: text.id, verseId: vId })
                }
              >
                {vId}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList 
      style={s.screen} 
      contentContainerStyle={{ paddingBottom: 40 }}
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      windowSize={5}
    />
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  topContainer: { marginBottom: 16 },
  topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  headerRule: { width: 46, marginTop: 12, marginBottom: 24 },
  clearFilter: { alignSelf: 'flex-start', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, backgroundColor: colors.avyakta3, marginBottom: 24 },
  clearFilterText: { ...type.caption, color: colors.inkDim },
  threadCta: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 16 },
  threadCtaTitle: { ...type.h3, fontSize: 16, marginBottom: 4 },
  threadCtaSub: { fontFamily: fonts.serif, fontSize: 13, color: colors.inkDim, lineHeight: 18 },
  threadCtaChev: { fontFamily: fonts.display, fontSize: 24, paddingLeft: 16 },
  conceptBlock: { marginTop: 12, marginBottom: 32 },
  h3: { ...type.h3, color: colors.ink, marginBottom: 8 },
  p: { fontFamily: fonts.serif, color: colors.inkDim, lineHeight: 22, marginBottom: 16 },
  actionsRow: { flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 8 },
  inThreadBtn: { paddingVertical: 6 },
  inThreadBtnText: { ...type.caption, letterSpacing: 0.5 },
  relatedRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16 },
  relatedChip: { ...type.caption, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden' },
});

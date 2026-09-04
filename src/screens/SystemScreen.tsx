import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { SystemHero } from '../components/diagrams';
import NotFoundState from '../components/NotFoundState';
import GunaRule from '../components/GunaRule';
import AuroraGlow from '../components/AuroraGlow';
import { getSystem } from '../content';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function SystemScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId } = route.params ?? {};
  const system = getSystem(systemId);
  const { colors, systemAccent, glowText } = useTheme();
  const accent = systemAccent(systemId);
  const s = makeStyles(colors);

  if (!system) return <NotFoundState label="That system" />;

  return (
    <ScrollView style={s.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>Darśana</Eyebrow>
          <PageTitle>{system.title}</PageTitle>
        </View>
        <View style={s.topActions}>
          <Pressable
            style={[s.conceptsBtn, { borderColor: accent.primary }]}
            onPress={() => nav.navigate('Concepts', { screen: 'ConceptsMain', params: { systemId: system.id } })}
            accessibilityRole="button"
            accessibilityLabel={`Explore ${system.title} concept by concept`}
          >
            <Text style={[s.conceptsBtnIcon, { color: accent.primary }]}>◈</Text>
          </Pressable>
          <LanguageToggle />
          <ThemeToggle />
        </View>
      </View>
      <Subtitle>{system.subtitle}</Subtitle>
      <GunaRule colors={accent.pair} style={s.headerRule} />

      <View style={[s.hero, { borderColor: accent.dim }]}>
        <AuroraGlow colors={accent.pair} intensity={0.9} />
        <SystemHero systemId={system.id} />
      </View>

      <SectionLabel>Learning Paths</SectionLabel>
      <View style={{ gap: 12, marginBottom: 24 }}>
        {system.thread.length > 0 && (
          <Pressable
            style={({ pressed }) => [
              s.ctaCard,
              { borderColor: accent.dim },
              pressed && { backgroundColor: colors.avyakta3 },
            ]}
            onPress={() => nav.navigate('Thread', { systemId: system.id, stepId: system.thread[0].id })}
          >
            <View style={{ flex: 1 }}>
              <Text style={[s.ctaTitle, { color: accent.primary }, glowText(accent.glow, 10)]}>Guided Thread (Syllabus)</Text>
              <Text style={s.ctaDesc}>A curated, step-by-step narrative journey through {system.title}, connecting the most important concepts in logical order.</Text>
            </View>
            <Text style={[s.chev, { color: accent.primary }]}>›</Text>
          </Pressable>
        )}

        <Pressable
          style={({ pressed }) => [
            s.ctaCard,
            { borderColor: accent.dim },
            pressed && { backgroundColor: colors.avyakta3 },
          ]}
          onPress={() => nav.navigate('Concepts', { screen: 'ConceptsMain', params: { systemId: system.id } })}
        >
          <View style={{ flex: 1 }}>
            <Text style={[s.ctaTitle, { color: accent.primary }, glowText(accent.glow, 10)]}>Concept Dictionary (Ontology)</Text>
            <Text style={s.ctaDesc}>An exhaustive dictionary of all technical terms, categories, and philosophical building blocks defined in {system.title}.</Text>
          </View>
          <Text style={[s.chev, { color: accent.primary }]}>›</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            s.ctaCard,
            { borderColor: accent.dim },
            pressed && { backgroundColor: colors.avyakta3 },
          ]}
          onPress={() => nav.navigate('Graph', { screen: 'GraphMain', params: { systemId: system.id } })}
        >
          <View style={{ flex: 1 }}>
            <Text style={[s.ctaTitle, { color: accent.primary }, glowText(accent.glow, 10)]}>Knowledge Graph</Text>
            <Text style={s.ctaDesc}>An interactive visualization showing how every concept and sutra mathematically connects to each other.</Text>
          </View>
          <Text style={[s.chev, { color: accent.primary }]}>›</Text>
        </Pressable>
      </View>

      <SectionLabel>Texts in this system</SectionLabel>
      {system.texts.map((text) => (
        <Card
          key={text.id}
          onPress={() => nav.navigate('TextIndex', { systemId: system.id, textId: text.id })}
          accessibilityLabel={`Browse ${text.transliteratedTitle} by ${text.author}, ${text.verses.length} verses`}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={[s.folio, { borderColor: accent.dim }]}>
              <Text style={[s.folioText, { color: accent.primary }]}>{text.transliteratedTitle.charAt(0)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.textTitle}>{text.transliteratedTitle}</Text>
              <Text style={s.textAuthor}>{text.author}</Text>
              <Text style={[s.textCount, { color: accent.dim }]}>{text.verses.length} verses transcribed</Text>
            </View>
            <Text style={s.chev}>›</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    headerRule: { width: 46, marginTop: 12, marginBottom: 18 },
    topActions: { flexDirection: 'row', gap: 8 },
    conceptsBtn: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    conceptsBtnIcon: { fontSize: 15 },
    hero: {
      height: 150,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      marginBottom: 16,
      justifyContent: 'center',
      position: 'relative',
    },
    ctaCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderRadius: 16,
      padding: 16,
    },
    ctaTitle: { fontFamily: fonts.display, fontSize: 16, marginBottom: 4 },
    ctaDesc: { fontSize: 12, color: colors.inkDim, lineHeight: 16 },
    folio: {
      width: 32,
      height: 32,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: colors.avyakta3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    folioText: { fontFamily: fonts.sanskrit, fontSize: 14 },
    textTitle: { ...type.h3, color: colors.ink, marginBottom: 2 },
    textAuthor: { fontFamily: fonts.serifItalic, fontSize: 13, color: colors.inkDim },
    textCount: { fontSize: 11, marginTop: 4 },
    chev: { color: colors.tamas, fontSize: 18 },
  });

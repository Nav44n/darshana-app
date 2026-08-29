import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { SystemHero } from '../components/diagrams';
import NotFoundState from '../components/NotFoundState';
import { getSystem } from '../content';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function SystemScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId } = route.params ?? {};
  const system = getSystem(systemId);
  const { colors } = useTheme();
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
            style={s.conceptsBtn}
            onPress={() => nav.navigate('Concepts', { screen: 'ConceptsMain', params: { systemId: system.id } })}
            accessibilityRole="button"
            accessibilityLabel={`Explore ${system.title} concept by concept`}
          >
            <Text style={s.conceptsBtnIcon}>◈</Text>
          </Pressable>
          <LanguageToggle />
          <ThemeToggle />
        </View>
      </View>
      <Subtitle>{system.subtitle}</Subtitle>

      <View style={s.hero}>
        <SystemHero systemId={system.id} />
      </View>

      {system.thread.length > 0 && (
        <Pressable
          style={s.threadCta}
          onPress={() => nav.navigate('Thread', { systemId: system.id, stepId: system.thread[0].id })}
        >
          <View style={{ flex: 1 }}>
            <Text style={s.threadCtaTitle}>Explore threads</Text>
            <Text style={s.threadCtaSub}>
              {system.thread.length} steps · the whole of {system.title}, concept by concept, start to end
            </Text>
          </View>
          <Text style={s.threadCtaChev}>›</Text>
        </Pressable>
      )}

      <SectionLabel>Texts in this system</SectionLabel>
      {system.texts.map((text) => (
        <Card
          key={text.id}
          onPress={() => nav.navigate('TextIndex', { systemId: system.id, textId: text.id })}
          accessibilityLabel={`Browse ${text.transliteratedTitle} by ${text.author}, ${text.verses.length} verses`}
        >
          <Text style={s.textTitle}>{text.transliteratedTitle}</Text>
          <Text style={s.textAuthor}>{text.author}</Text>
          <Text style={s.textCount}>{text.verses.length} verses transcribed</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    topActions: { flexDirection: 'row', gap: 8 },
    conceptsBtn: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      borderColor: colors.hair,
      alignItems: 'center',
      justifyContent: 'center',
    },
    conceptsBtnIcon: { fontSize: 15, color: colors.sattva },
    hero: {
      height: 130,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.hair,
      marginBottom: 14,
      justifyContent: 'center',
    },
    threadCta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.rajasDim,
      borderRadius: 16,
      padding: 16,
      marginBottom: 14,
    },
    threadCtaTitle: { fontFamily: fonts.display, fontSize: 15, color: colors.sattva, marginBottom: 2 },
    threadCtaSub: { fontSize: 11, color: colors.inkDim },
    threadCtaChev: { fontSize: 20, color: colors.rajas },
    textTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.ink, marginBottom: 2 },
    textAuthor: { fontFamily: fonts.serifItalic, fontSize: 13, color: colors.inkDim },
    textCount: { fontSize: 11, color: colors.sattvaDim, marginTop: 4 },
  });

import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { SystemHero } from '../components/diagrams';
import { systems, getText, getVerse } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function HomeScreen() {
  const nav = useNavigation<any>();
  const { lastReadList, bookmarkList } = useReadingPrefs();
  const { colors } = useTheme();
  const s = makeStyles(colors);
  const [, forceTick] = React.useReducer((x) => x + 1, 0);

  useFocusEffect(
    React.useCallback(() => {
      forceTick();
    }, [])
  );

  const continueEntries = lastReadList
    .map(({ systemId, textId, verseId }) => {
      const verse = getVerse(systemId, textId, verseId);
      const text = getText(systemId, textId);
      if (!verse || !text) return null;
      return { systemId, textId, verseId, verse, text };
    })
    .filter(Boolean) as { systemId: string; textId: string; verseId: string; verse: any; text: any }[];

  return (
    <ScrollView style={s.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>Darśana Library</Eyebrow>
          <PageTitle>Systems</PageTitle>
        </View>
        <LanguageToggle />
          <ThemeToggle />
      </View>
      <Subtitle>Classical Indian philosophy, concept by concept</Subtitle>

      {continueEntries.length > 0 && (
        <>
          <SectionLabel>Continue reading</SectionLabel>
          {continueEntries.map((e) => (
            <Card
              key={e.textId}
              onPress={() => nav.navigate('VerseDetail', { systemId: e.systemId, textId: e.textId, verseId: e.verseId })}
              accessibilityLabel={`Continue reading ${e.text.transliteratedTitle}, verse ${e.verse.number}: ${e.verse.section}`}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={s.badge}>
                  <Text style={s.badgeText}>{e.verse.number}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={s.cardTitle}>{e.text.transliteratedTitle}</Text>
                  <Text style={s.cardSub} numberOfLines={1}>
                    {e.verse.section}
                  </Text>
                </View>
                <Text style={s.chev}>›</Text>
              </View>
            </Card>
          ))}
        </>
      )}

      {bookmarkList.length > 0 && (
        <>
          <SectionLabel>Bookmarked</SectionLabel>
          <Card
            onPress={() => nav.navigate('Library')}
            accessibilityLabel={`${bookmarkList.length} bookmarked verse${bookmarkList.length === 1 ? '' : 's'}. Open Library to view them.`}
          >
            <Text style={s.cardTitle}>{bookmarkList.length} verse{bookmarkList.length === 1 ? '' : 's'} saved</Text>
            <Text style={s.cardSub}>Open a text's index to see ★ marked verses</Text>
          </Card>
        </>
      )}

      <SectionLabel>Explore a system</SectionLabel>
      {systems.map((sys) => {
        const textCount = sys.texts.length;
        const verseCount = sys.texts.reduce((n, t) => n + t.verses.length, 0);
        return (
          <View key={sys.id} style={s.sysCard}>
            <Text style={s.sysTitle}>{sys.title}</Text>
            <Text style={s.sysSubtitle}>{sys.subtitle}</Text>
            <View style={s.heroMini}>
              <SystemHero systemId={sys.id} />
            </View>
            <Text style={s.sysText}>
              {textCount} text{textCount === 1 ? '' : 's'} · {verseCount} verses transcribed
            </Text>

            <View style={s.sysActions}>
              <Pressable
                style={s.secondaryBtn}
                onPress={() => nav.navigate('System', { systemId: sys.id })}
                accessibilityRole="button"
                accessibilityLabel={`Explore texts in ${sys.title}`}
              >
                <Text style={s.secondaryBtnText}>Explore texts</Text>
              </Pressable>
              {sys.thread.length > 0 && (
                <Pressable
                  style={s.primaryBtn}
                  onPress={() => nav.navigate('Thread', { systemId: sys.id, stepId: sys.thread[0].id })}
                  accessibilityRole="button"
                  accessibilityLabel={`Explore ${sys.title} concept by concept, start to end`}
                >
                  <Text style={s.primaryBtnText}>Explore threads</Text>
                </Pressable>
              )}
            </View>
          </View>
        );
      })}

      <SectionLabel>About this library</SectionLabel>
      <Card>
        <Text style={s.p}>
          Each darśana — literally a "viewpoint," one of the classical systems for examining reality — is read
          whole: every verse, in order, under one commentary that grows more precise as more sources are consulted
          rather than splitting into competing translations to compare side by side. The diagrams and the
          concept-by-concept thread are two different ways into the same material — pick whichever suits how you
          want to think it through today.
        </Text>
      </Card>
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    badge: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      borderColor: colors.sattvaDim,
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeText: { fontFamily: fonts.sanskrit, fontSize: 13, color: colors.sattva },
    cardTitle: { fontFamily: fonts.display, fontSize: 16.5, color: colors.ink, marginBottom: 2 },
    cardSub: { fontSize: 12, color: colors.inkDim },
    chev: { marginLeft: 'auto', color: colors.tamas, fontSize: 18 },
    sysCard: {
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.hair,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
    },
    sysTitle: { fontFamily: fonts.display, fontSize: 20, color: colors.ink, marginBottom: 2 },
    sysSubtitle: { fontFamily: fonts.serifItalic, fontSize: 14, color: colors.inkDim, marginBottom: 10 },
    heroMini: {
      height: 110,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: colors.avyakta3,
      marginBottom: 10,
      justifyContent: 'center',
    },
    sysText: { fontFamily: fonts.serif, fontSize: 13.5, color: colors.sattvaDim, marginBottom: 14 },
    sysActions: { flexDirection: 'row', gap: 8 },
    secondaryBtn: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.hair,
      borderRadius: 10,
      paddingVertical: 11,
      alignItems: 'center',
    },
    secondaryBtnText: { fontFamily: fonts.sansBold, fontSize: 12.5, color: colors.inkDim },
    primaryBtn: { flex: 1, backgroundColor: colors.rajas, borderRadius: 10, paddingVertical: 11, alignItems: 'center' },
    primaryBtnText: { fontFamily: fonts.sansBold, fontSize: 12.5, color: '#fff' },
    p: { fontFamily: fonts.serif, fontSize: 14.5, color: colors.inkDim, lineHeight: 21 },
  });

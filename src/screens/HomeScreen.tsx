import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { SystemHero } from '../components/diagrams';
import GunaRule from '../components/GunaRule';
import AuroraGlow from '../components/AuroraGlow';
import { systems, getText, getVerse } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function HomeScreen() {
  const nav = useNavigation<any>();
  const { lastReadList, bookmarkList } = useReadingPrefs();
  const { colors, elevation, systemAccent, glowText } = useTheme();
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
      <View style={s.headerWrap}>
        {/* A watermark, not a decoration for its own sake: दर्शन (darśana)
            literally means "viewpoint" / "seeing" — the word this whole
            library is organised around, set once, large and quiet, behind
            the one screen that names it. */}
        <Text style={s.watermark} accessibilityElementsHidden importantForAccessibility="no">दर्शन</Text>
        <View style={s.topRow}>
          <View style={{ flex: 1 }}>
            <Eyebrow>Darśana Library</Eyebrow>
            <PageTitle>Systems</PageTitle>
          </View>
          <LanguageToggle />
            <ThemeToggle />
        </View>
        <Subtitle>Classical Indian philosophy, concept by concept</Subtitle>
        <GunaRule style={s.headerRule} />
      </View>

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
                <View style={[s.badge, { borderColor: systemAccent(e.systemId).primary }]}>
                  <Text style={[s.badgeText, { color: systemAccent(e.systemId).primary }]}>{e.verse.number}</Text>
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
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={[s.badge, s.badgeStar]}>
                <Text style={[s.badgeText, { color: colors.sattva }]}>★</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.cardTitle}>{bookmarkList.length} verse{bookmarkList.length === 1 ? '' : 's'} saved</Text>
                <Text style={s.cardSub}>Open a text's index to see ★ marked verses</Text>
              </View>
              <Text style={s.chev}>›</Text>
            </View>
          </Card>
        </>
      )}

      <SectionLabel>Explore a system</SectionLabel>
      {systems.map((sys) => {
        const textCount = sys.texts.length;
        const verseCount = sys.texts.reduce((n, t) => n + t.verses.length, 0);
        const accent = systemAccent(sys.id);
        return (
          <Pressable 
            key={sys.id} 
            style={({ pressed }) => [
              s.sysCardWrap, 
              elevation(2),
              pressed && { opacity: 0.9 }
            ]}
            onPress={() => nav.navigate('System', { systemId: sys.id })}
          >
            <GunaRule weight="bold" colors={accent.pair} style={s.sysCardEdge} />
            <View style={s.sysCard}>
              <LinearGradient
                colors={[accent.glow, 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={StyleSheet.absoluteFill}
              />
              <Text style={[s.sysTitle, glowText(accent.glow, 16)]}>{sys.title}</Text>
              <Text style={s.sysSubtitle}>{sys.subtitle}</Text>
              <View style={s.heroMini}>
                <AuroraGlow colors={accent.pair} intensity={0.8} />
                <SystemHero systemId={sys.id} />
              </View>
              <Text style={[s.sysText, { color: accent.dim }]}>
                {textCount} text{textCount === 1 ? '' : 's'} · {verseCount} verses transcribed
              </Text>
            </View>
          </Pressable>
        );
      })}

      <SectionLabel>About this library</SectionLabel>
      <Card>
        <Text style={s.quoteMark}>“</Text>
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
    screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    headerWrap: { position: 'relative', overflow: 'hidden' },
    watermark: {
      position: 'absolute',
      top: -18,
      right: -10,
      fontFamily: fonts.sanskrit,
      fontSize: 96,
      color: colors.amber,
      opacity: 0.08,
      transform: [{ rotate: '-6deg' }],
    },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    headerRule: { width: 46, marginTop: 12, marginBottom: 22 },
    badge: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeStar: { borderColor: colors.sattva, backgroundColor: colors.sattvaGlow },
    badgeText: { fontFamily: fonts.sanskrit, fontSize: 13 },
    cardTitle: { ...type.h3, fontSize: 16.5, color: colors.ink, marginBottom: 2 },
    cardSub: { ...type.caption, color: colors.inkDim },
    chev: { marginLeft: 'auto', color: colors.tamas, fontSize: 18 },
    sysCardWrap: {
      borderRadius: 18,
      marginBottom: 16,
      backgroundColor: colors.avyakta2,
      overflow: 'hidden',
    },
    sysCardEdge: { borderRadius: 0 },
    sysCard: {
      borderWidth: 1,
      borderColor: colors.hair,
      borderTopWidth: 0,
      padding: 18,
      overflow: 'hidden',
    },
    sysTitle: { ...type.display2, fontSize: 24, color: colors.ink, marginBottom: 3 },
    sysSubtitle: { ...type.subtitle, color: colors.inkDim, marginBottom: 12 },
    heroMini: {
      height: 120,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: colors.avyakta3,
      marginBottom: 12,
      justifyContent: 'center',
      position: 'relative',
    },
    sysText: { fontFamily: fonts.serif, fontSize: 13.5, marginBottom: 16 },
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
    primaryBtn: { flex: 1, borderRadius: 10, paddingVertical: 11, alignItems: 'center' },
    primaryBtnText: { fontFamily: fonts.sansBold, fontSize: 12.5, color: '#fff' },
    btnPressed: { backgroundColor: colors.avyakta3 },
    quoteMark: {
      fontFamily: fonts.display,
      fontSize: 42,
      color: colors.purushaDim,
      opacity: 0.55,
      lineHeight: 40,
      marginBottom: -10,
    },
    p: { ...type.body, color: colors.inkDim },
  });

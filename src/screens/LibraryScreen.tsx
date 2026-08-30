import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import GunaRule from '../components/GunaRule';
import { systems } from '../content';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function LibraryScreen() {
  const nav = useNavigation<any>();
  const { colors, systemAccent } = useTheme();
  const s = makeStyles(colors);

  return (
    <ScrollView style={s.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>Library</Eyebrow>
          <PageTitle>All Texts</PageTitle>
        </View>
        <LanguageToggle />
          <ThemeToggle />
      </View>
      <Subtitle>Browse by system</Subtitle>
      <GunaRule style={s.headerRule} />

      {systems.map((sys) => {
        const accent = systemAccent(sys.id);
        return (
        <View key={sys.id} style={s.systemBlock}>
          <SectionLabel>{sys.title}</SectionLabel>
          {sys.texts.map((text) => (
            <Card
              key={text.id}
              onPress={() => nav.navigate('TextIndex', { systemId: sys.id, textId: text.id })}
              accessibilityLabel={`${text.transliteratedTitle} by ${text.author}, ${text.verses.length} verses`}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={[s.folio, { borderColor: accent.dim }]}>
                  <Text style={[s.folioText, { color: accent.primary }]}>{text.transliteratedTitle.charAt(0)}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={s.title}>{text.transliteratedTitle}</Text>
                  <Text style={s.sub}>
                    {text.author} · {text.verses.length} verses
                  </Text>
                </View>
                <Text style={s.chev}>›</Text>
              </View>
            </Card>
          ))}
        </View>
        );
      })}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    headerRule: { width: 46, marginTop: 12, marginBottom: 20 },
    systemBlock: { marginBottom: 4 },
    folio: {
      width: 32,
      height: 32,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.hair,
      backgroundColor: colors.avyakta3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    folioText: { fontFamily: fonts.sanskrit, fontSize: 14, color: colors.sattvaDim },
    title: { ...type.h3, fontSize: 16.5, color: colors.ink },
    sub: { ...type.caption, color: colors.inkDim, marginTop: 2 },
    chev: { color: colors.tamas, fontSize: 18 },
  });

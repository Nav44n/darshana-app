import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import { systems } from '../content';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function LibraryScreen() {
  const nav = useNavigation<any>();
  const { colors } = useTheme();
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

      {systems.map((sys) => (
        <View key={sys.id}>
          <SectionLabel>{sys.title}</SectionLabel>
          {sys.texts.map((text) => (
            <Card
              key={text.id}
              onPress={() => nav.navigate('TextIndex', { systemId: sys.id, textId: text.id })}
              accessibilityLabel={`${text.transliteratedTitle} by ${text.author}, ${text.verses.length} verses`}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
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
      ))}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
    topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    title: { fontFamily: fonts.display, fontSize: 16.5, color: colors.ink },
    sub: { fontSize: 12, color: colors.inkDim, marginTop: 2 },
    chev: { color: colors.tamas, fontSize: 18 },
  });

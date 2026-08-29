import React, { useMemo, useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import VerseRow from '../components/VerseRow';
import NotFoundState from '../components/NotFoundState';
import { getText } from '../content';
import { useReadingPrefs } from '../state/ReadingPrefs';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function TextIndexScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, textId } = route.params ?? {};
  const text = getText(systemId, textId);
  const { isBookmarked } = useReadingPrefs();
  const { colors } = useTheme();
  const s = makeStyles(colors);
  const [query, setQuery] = useState('');

  if (!text) return <NotFoundState label="That text" />;


  const q = query.trim().toLowerCase();

  const filteredVerses = useMemo(() => {
    if (!q) return text.verses;
    return text.verses.filter((v) => {
      return (
        v.number.toLowerCase().includes(q) ||
        (v.content.en?.translation || '').toLowerCase().includes(q) ||
        (v.content.en?.commentary || '').toLowerCase().includes(q) ||
        v.section.toLowerCase().includes(q) ||
        (v.content.en?.keyPoints || []).some((k: string) => k.toLowerCase().includes(q))
      );
    });
  }, [q, text.verses]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof text.verses>();
    filteredVerses.forEach((v) => {
      const list = map.get(v.section) ?? [];
      list.push(v);
      map.set(v.section, list);
    });
    return Array.from(map.entries());
  }, [filteredVerses]);

  const bookmarkedInText = text.verses.filter((v) => isBookmarked(systemId, textId, v.id));

  return (
    <ScrollView style={s.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>{text.author}</Eyebrow>
          <PageTitle>{text.transliteratedTitle}</PageTitle>
        </View>
        <LanguageToggle />
          <ThemeToggle />
      </View>
      <Subtitle>{text.verses.length} verses transcribed</Subtitle>

      <Card>
        <Text style={s.sourceLabel}>Active commentary</Text>
        <Text style={s.sourceText}>
          {text.sources.map((src) => `${src.name}${src.year ? ` (${src.year})` : ''}`).join(', ')}
        </Text>
      </Card>

      <View style={s.searchBar}>
        <Text style={s.searchIcon}>⌕</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search a verse, word, or concept…"
          placeholderTextColor={colors.tamas}
          style={s.searchInput}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')}>
            <Text style={s.searchClear}>✕</Text>
          </Pressable>
        )}
      </View>

      {q.length > 0 && (
        <Text style={s.resultsCount}>
          {filteredVerses.length} result{filteredVerses.length === 1 ? '' : 's'}
        </Text>
      )}

      {!q && bookmarkedInText.length > 0 && (
        <View>
          <View style={s.chapterHead}>
            <Text style={s.chapterN}>★</Text>
            <Text style={s.chapterT}>Bookmarked</Text>
          </View>
          {bookmarkedInText.map((v) => (
            <VerseRow
              key={v.id}
              verse={v}
              bookmarked
              onPress={() => nav.navigate('VerseDetail', { systemId, textId, verseId: v.id })}
            />
          ))}
        </View>
      )}

      {grouped.map(([section, verses]) => (
        <View key={section}>
          <View style={s.chapterHead}>
            <Text style={s.chapterN}>§</Text>
            <Text style={s.chapterT}>{section}</Text>
          </View>
          {verses.map((v) => (
            <VerseRow
              key={v.id}
              verse={v}
              bookmarked={isBookmarked(systemId, textId, v.id)}
              onPress={() => nav.navigate('VerseDetail', { systemId, textId, verseId: v.id })}
            />
          ))}
        </View>
      ))}

      {q.length > 0 && filteredVerses.length === 0 && (
        <Text style={s.noResults}>No verses match "{query}"</Text>
      )}

      {!q && (
        <>
          <SectionLabel>Concepts in this text</SectionLabel>
          {text.concepts.map((c) => (
            <Card key={c.id}>
              <Text style={s.conceptTitle}>{c.content.en?.title}</Text>
              <Text style={s.conceptSummary} numberOfLines={2}>
                {c.content.en?.summary}
              </Text>
            </Card>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  sourceLabel: {
    fontFamily: fonts.sansBold,
    fontSize: 10,
    color: colors.sattvaDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  sourceText: { fontFamily: fonts.serif, fontSize: 14, color: colors.ink },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.avyakta2,
    borderWidth: 1,
    borderColor: colors.hair,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  searchIcon: { color: colors.inkDim, fontSize: 14 },
  searchInput: { flex: 1, color: colors.ink, fontSize: 14, paddingVertical: 12 },
  searchClear: { color: colors.inkDim, fontSize: 14, paddingLeft: 6 },
  resultsCount: { fontSize: 12, color: colors.inkDim, marginBottom: 8 },
  noResults: { fontSize: 13, color: colors.tamas, fontStyle: 'italic', paddingVertical: 20, textAlign: 'center' },
  chapterHead: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 20, marginBottom: 8 },
  chapterN: { fontFamily: fonts.display, fontSize: 14, color: colors.rajas },
  chapterT: { fontFamily: fonts.sansBold, fontSize: 11, color: colors.inkDim, textTransform: 'uppercase', letterSpacing: 1.4 },
  conceptTitle: { fontFamily: fonts.display, fontSize: 15, color: colors.ink, marginBottom: 2 },
  conceptSummary: { fontFamily: fonts.serif, fontSize: 13, color: colors.inkDim },
});

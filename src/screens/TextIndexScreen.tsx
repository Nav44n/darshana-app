import React, { useMemo, useState } from 'react';
import { FlatList, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Eyebrow, PageTitle, Subtitle, SectionLabel, Card, ThemeToggle, LanguageToggle } from '../components/Primitives';
import VerseRow from '../components/VerseRow';
import NotFoundState from '../components/NotFoundState';
import GunaRule from '../components/GunaRule';
import { getText } from '../content';
import { useProgressPrefs } from '../state/ReadingPrefs';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function TextIndexScreen() {
  const nav = useNavigation<any>();
  const route = useRoute<any>();
  const { systemId, textId } = route.params ?? {};
  const text = getText(systemId, textId);
  const { isBookmarked } = useProgressPrefs();
  const { colors, systemAccent } = useTheme();
  const accent = systemAccent(systemId);
  // Memoize makeStyles
  const s = React.useMemo(() => makeStyles(colors), [colors]);
  const [query, setQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

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

  const listData = useMemo(() => {
    const data: any[] = [];
    
    // Bookmarked section
    const bookmarkedInText = text.verses.filter((v) => isBookmarked(systemId, textId, v.id));
    if (!q && bookmarkedInText.length > 0) {
      data.push({ type: 'bookmark-header', id: 'bookmark-header' });
      bookmarkedInText.forEach(v => {
        data.push({ type: 'verse', id: `bookmark-${v.id}`, verse: v });
      });
    }

    // Grouped verses
    const map = new Map<string, typeof text.verses>();
    filteredVerses.forEach((v) => {
      const list = map.get(v.section) ?? [];
      list.push(v);
      map.set(v.section, list);
    });
    
    Array.from(map.entries()).forEach(([section, verses]) => {
      data.push({ type: 'section-header', id: `section-${section}`, section });
      verses.forEach(v => {
        data.push({ type: 'verse', id: `verse-${v.id}`, verse: v });
      });
    });

    // Empty state
    if (q.length > 0 && filteredVerses.length === 0) {
      data.push({ type: 'empty', id: 'empty' });
    }

    // Concepts footer
    if (!q && text.concepts.length > 0) {
      data.push({ type: 'concepts-header', id: 'concepts-header' });
      text.concepts.forEach(c => {
        data.push({ type: 'concept', id: `concept-${c.id}`, c });
      });
    }

    return data;
  }, [q, filteredVerses, text.verses, text.concepts, isBookmarked, systemId, textId]);

  const renderHeader = () => (
    <View style={s.topContainer}>
      {systemId && (
        <Pressable
          onPress={() => (nav.canGoBack() ? nav.goBack() : nav.navigate('System', { systemId }))}
          style={s.crumb}
          accessibilityRole="button"
          accessibilityLabel="Back to system overview"
        >
          <Text style={s.crumbText}>‹  Back to Overview</Text>
        </Pressable>
      )}
      <View style={s.topRow}>
        <View style={{ flex: 1 }}>
          <Eyebrow>{text.author}</Eyebrow>
          <PageTitle>{text.transliteratedTitle}</PageTitle>
        </View>
        <LanguageToggle />
        <ThemeToggle />
      </View>
      <Subtitle>{text.verses.length} verses transcribed</Subtitle>
      <GunaRule colors={accent.pair} style={s.headerRule} />

      <Card>
        <Text style={[s.sourceLabel, { color: accent.primary }]}>Active commentary</Text>
        <Text style={s.sourceText}>
          {text.sources.map((src) => `${src.name}${src.year ? ` (${src.year})` : ''}`).join(', ')}
        </Text>
      </Card>

      <View style={[s.searchBar, searchFocused && { borderColor: accent.dim, backgroundColor: colors.avyakta3 }]}>
        <Text style={s.searchIcon}>⌕</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          placeholder="Search a verse, word, or concept…"
          placeholderTextColor={colors.tamas}
          style={s.searchInput}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')} accessibilityRole="button" accessibilityLabel="Clear search">
            <Text style={s.searchClear}>✕</Text>
          </Pressable>
        )}
      </View>

      {q.length > 0 && (
        <Text style={s.resultsCount}>
          {filteredVerses.length} result{filteredVerses.length === 1 ? '' : 's'}
        </Text>
      )}
    </View>
  );

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case 'bookmark-header':
        return (
          <View style={s.chapterHead}>
            <Text style={[s.chapterN, { color: colors.sattva }]}>★</Text>
            <Text style={s.chapterT}>Bookmarked</Text>
          </View>
        );
      case 'section-header':
        return (
          <View style={s.chapterHead}>
            <Text style={[s.chapterN, { color: accent.primary }]}>§</Text>
            <Text style={s.chapterT}>{item.section}</Text>
          </View>
        );
      case 'verse':
        return (
          <VerseRow
            verse={item.verse}
            bookmarked={isBookmarked(systemId, textId, item.verse.id)}
            onPress={() => nav.navigate('VerseDetail', { systemId, textId, verseId: item.verse.id })}
          />
        );
      case 'empty':
        return <Text style={s.noResults}>No verses match "{query}"</Text>;
      case 'concepts-header':
        return <SectionLabel>Concepts in this text</SectionLabel>;
      case 'concept':
        return (
          <Card>
            <Text style={s.conceptTitle}>{item.c.content.en?.title}</Text>
            <Text style={s.conceptSummary} numberOfLines={2}>
              {item.c.content.en?.summary}
            </Text>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList 
      style={s.screen} 
      contentContainerStyle={{ paddingBottom: 40 }}
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      initialNumToRender={15}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  screen: { flex: 1, alignSelf: 'center', width: '100%', maxWidth: 800, backgroundColor: colors.avyakta, paddingHorizontal: 22, paddingTop: 8 },
  crumb: { marginBottom: 10, paddingVertical: 4, alignSelf: 'flex-start' },
  crumbText: { ...type.caption, color: colors.rajas, fontSize: 13, fontWeight: '600' },
  topContainer: { paddingBottom: 8 },
  topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  headerRule: { width: 46, marginTop: 12, marginBottom: 18 },
  sourceLabel: { ...type.label, color: colors.sattvaDim, marginBottom: 4 },
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
    marginTop: 4,
    marginBottom: 8,
  },
  searchIcon: { color: colors.inkDim, fontSize: 14 },
  searchInput: { flex: 1, color: colors.ink, fontSize: 14, paddingVertical: 12 },
  searchClear: { color: colors.inkDim, fontSize: 14, paddingLeft: 6 },
  resultsCount: { fontSize: 12, color: colors.inkDim, marginBottom: 8 },
  noResults: { fontSize: 13, color: colors.tamas, fontStyle: 'italic', paddingVertical: 20, textAlign: 'center' },
  chapterHead: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 22, marginBottom: 10 },
  chapterN: { fontFamily: fonts.display, fontSize: 14, color: colors.rajas },
  chapterT: { ...type.label, color: colors.inkDim, letterSpacing: 1.4 },
  conceptTitle: { ...type.h3, fontSize: 15, color: colors.ink, marginBottom: 2 },
  conceptSummary: { fontFamily: fonts.serif, fontSize: 13, color: colors.inkDim },
});

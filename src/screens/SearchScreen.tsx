import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchService, SearchResult } from '../services/SearchService';
import { useTheme } from '../theme/useTheme';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useNavigation } from '@react-navigation/native';

// One accent per result type, drawn from the same guṇa vocabulary used
// throughout the app, so a glance at the badge colour tells you what kind
// of thing you're looking at before you read the label.
const typeAccent = (colors: ColorPalette, t: SearchResult['type']) =>
  t === 'verse' ? colors.sattva : t === 'concept' ? colors.amber : colors.purusha;

export default function SearchScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const s = makeStyles(colors);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      setResults(SearchService.search(text));
    } else {
      setResults([]);
    }
  };

  const renderItem = ({ item }: { item: SearchResult }) => {
    const accent = typeAccent(colors, item.type);
    return (
      <TouchableOpacity
        style={[s.resultCard, { borderLeftColor: accent }]}
        onPress={() => {
          if (item.type === 'verse') {
            navigation.navigate('Library', {
              screen: 'VerseDetail',
              params: { systemId: item.systemId, textId: item.textId, verseId: item.id },
            });
          } else if (item.type === 'concept') {
            navigation.navigate('Concepts', {
              screen: 'ConceptsMain',
              params: { systemId: item.systemId, conceptId: item.id },
            });
          } else if (item.type === 'node') {
            navigation.navigate('Graph', {
              screen: 'GraphMain',
              params: { highlightNodeId: item.id },
            });
          }
        }}
      >
        <View style={s.resultHeader}>
          <Text style={[s.resultType, { color: accent, borderColor: accent }]}>{item.type.toUpperCase()}</Text>
          <Text style={s.resultTitle} numberOfLines={1}>{item.title}</Text>
        </View>
        {item.subtitle && (
          <Text style={s.resultSubtitle} numberOfLines={2}>
            {item.subtitle}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Search</Text>
        <View style={[s.inputWrap, focused && s.inputWrapFocused]}>
          <Text style={s.inputIcon}>⌕</Text>
          <TextInput
            style={s.input}
            placeholder="Search verses, concepts, ontology…"
            placeholderTextColor={colors.tamas}
            value={query}
            onChangeText={handleSearch}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item, index) => `${item.type}-${item.id}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={s.list}
        ListEmptyComponent={
          query.length > 2 ? (
            <View style={s.emptyState}>
              <Text style={s.emptyTitle}>Nothing matches "{query}"</Text>
              <Text style={s.emptySub}>Try a shorter word, a Sanskrit term, or a concept name.</Text>
            </View>
          ) : (
            <View style={s.emptyState}>
              <Text style={s.emptySub}>Search across every verse, concept, and ontology node in the library.</Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.avyakta },
    header: { padding: 16, borderBottomWidth: 1, borderBottomColor: colors.hair },
    title: { fontFamily: fonts.display, fontSize: 28, color: colors.ink, marginBottom: 16 },
    inputWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.hair,
      borderRadius: 12,
      paddingHorizontal: 14,
    },
    inputWrapFocused: { borderColor: colors.rajasDim, backgroundColor: colors.avyakta3 },
    inputIcon: { color: colors.inkDim, fontSize: 14 },
    input: {
      flex: 1,
      fontFamily: fonts.sans,
      fontSize: 16,
      color: colors.ink,
      paddingVertical: 12,
    },
    list: { padding: 16 },
    resultCard: {
      padding: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.hair,
      borderLeftWidth: 3,
      backgroundColor: colors.avyakta2,
      marginBottom: 12,
    },
    resultHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4,
    },
    resultType: {
      fontFamily: fonts.sansBold,
      fontSize: 10,
      borderWidth: 1,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 4,
      overflow: 'hidden',
    },
    resultTitle: {
      flex: 1,
      fontFamily: fonts.sansBold,
      fontSize: 16,
      color: colors.ink,
    },
    resultSubtitle: {
      fontFamily: fonts.serif,
      fontSize: 14,
      lineHeight: 20,
      marginTop: 4,
      color: colors.inkDim,
    },
    emptyState: { paddingTop: 48, paddingHorizontal: 24, alignItems: 'center' },
    emptyTitle: { ...type.h3, color: colors.ink, marginBottom: 6, textAlign: 'center' },
    emptySub: { fontFamily: fonts.serif, fontSize: 14, color: colors.inkDim, textAlign: 'center', lineHeight: 20 },
  });

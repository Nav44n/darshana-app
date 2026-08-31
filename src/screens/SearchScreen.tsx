import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchService, SearchResult, SearchResultType } from '../services/SearchService';
import { useTheme } from '../theme/useTheme';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useNavigation } from '@react-navigation/native';

const typeAccent = (colors: ColorPalette, t: SearchResult['type']) =>
  t === 'verse' ? colors.sattva : t === 'concept' ? colors.amber : colors.purusha;

const TYPES: { label: string; value: SearchResultType | 'all' }[] = [
  { label: 'All Types', value: 'all' },
  { label: 'Verses', value: 'verse' },
  { label: 'Concepts', value: 'concept' },
  { label: 'Ontology', value: 'node' },
];

const SYSTEMS = [
  { label: 'All Systems', value: 'all' },
  { label: 'Sāṃkhya', value: 'samkhya' },
  { label: 'Yoga', value: 'yoga' },
  { label: 'Nyāya', value: 'nyaya' },
  { label: 'Vaiśeṣika', value: 'vaisesika' },
  { label: 'Mīmāṃsā', value: 'mimamsa' },
  { label: 'Vedānta', value: 'vedanta' },
];

export default function SearchScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [activeType, setActiveType] = useState<SearchResultType | 'all'>('all');
  const [activeSystem, setActiveSystem] = useState<string>('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const s = makeStyles(colors);

  const runSearch = (text: string, tFilter: string, sFilter: string) => {
    if (text.length > 2) {
      let r = SearchService.search(text);
      if (tFilter !== 'all') {
        r = r.filter(i => i.type === tFilter);
      }
      if (sFilter !== 'all') {
        // ontology nodes don't necessarily have systemId, or maybe we just skip system filter for them
        r = r.filter(i => {
          if (i.type === 'node') return true; 
          return i.systemId === sFilter;
        });
      }
      setResults(r);
    } else {
      setResults([]);
    }
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    runSearch(text, activeType, activeSystem);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  const handleTypeSelect = (val: SearchResultType | 'all') => {
    setActiveType(val);
    runSearch(query, val, activeSystem);
  };

  const handleSystemSelect = (val: string) => {
    setActiveSystem(val);
    runSearch(query, activeType, val);
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
        {!!item.subtitle && (
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
          {query.length > 0 && (
            <Pressable onPress={handleClear} style={s.clearBtn}>
              <Text style={s.clearBtnText}>✕</Text>
            </Pressable>
          )}
        </View>

        <View style={s.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filterRow} style={s.filterScroll}>
            {TYPES.map(t => (
              <Pressable 
                key={t.value} 
                style={[s.filterChip, activeType === t.value && s.filterChipActive]}
                onPress={() => handleTypeSelect(t.value)}
              >
                <Text style={[s.filterChipText, activeType === t.value && s.filterChipTextActive]}>{t.label}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {activeType !== 'node' && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filterRow} style={s.filterScroll}>
              {SYSTEMS.map(sys => (
                <Pressable 
                  key={sys.value} 
                  style={[s.filterChip, activeSystem === sys.value && s.filterChipActive]}
                  onPress={() => handleSystemSelect(sys.value)}
                >
                  <Text style={[s.filterChipText, activeSystem === sys.value && s.filterChipTextActive]}>{sys.label}</Text>
                </Pressable>
              ))}
            </ScrollView>
          )}
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
              <Text style={s.emptyTitle}>Nothing matches "${query}"</Text>
              <Text style={s.emptySub}>Try a shorter word, a Sanskrit term, or adjusting your filters.</Text>
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
    clearBtn: {
      padding: 6,
    },
    clearBtnText: {
      color: colors.tamas,
      fontSize: 14,
    },
    filterContainer: {
      marginTop: 12,
      gap: 10,
    },
    filterScroll: {
      flexGrow: 0,
    },
    filterRow: {
      gap: 8,
      paddingRight: 16,
    },
    filterChip: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.hair,
      backgroundColor: colors.avyakta2,
    },
    filterChipActive: {
      borderColor: colors.sattva,
      backgroundColor: colors.sattvaGlow,
    },
    filterChipText: {
      fontFamily: fonts.sans,
      fontSize: 12,
      color: colors.inkDim,
    },
    filterChipTextActive: {
      color: colors.sattva,
      fontFamily: fonts.sansBold,
    },
    list: { padding: 16, paddingBottom: 60 },
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

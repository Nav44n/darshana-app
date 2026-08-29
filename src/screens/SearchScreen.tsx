import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchService, SearchResult } from '../services/SearchService';
import { useTheme } from '../theme/useTheme';
import { fonts } from '../theme/tokens';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      setResults(SearchService.search(text));
    } else {
      setResults([]);
    }
  };

  const renderItem = ({ item }: { item: SearchResult }) => {
    return (
      <TouchableOpacity 
        style={[styles.resultCard, { backgroundColor: colors.avyakta2, borderColor: colors.hair }]}
        onPress={() => {
          if (item.type === 'verse') {
            navigation.navigate('Library', { 
              screen: 'VerseDetail', 
              params: { systemId: item.systemId, textId: item.textId, verseId: item.id } 
            });
          } else if (item.type === 'concept') {
            navigation.navigate('Concepts', { 
              screen: 'ConceptsMain', 
              params: { systemId: item.systemId, conceptId: item.id } 
            });
          } else if (item.type === 'node') {
            navigation.navigate('Graph', { 
              screen: 'GraphMain', 
              params: { highlightNodeId: item.id } 
            });
          }
        }}
      >
        <View style={styles.resultHeader}>
          <Text style={[styles.resultType, { color: colors.sattva }]}>{item.type.toUpperCase()}</Text>
          <Text style={[styles.resultTitle, { color: colors.ink }]}>{item.title}</Text>
        </View>
        {item.subtitle && (
          <Text style={[styles.resultSubtitle, { color: colors.inkDim }]} numberOfLines={2}>
            {item.subtitle}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.avyakta }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.ink }]}>Search</Text>
        <TextInput
          style={[styles.input, { color: colors.ink, borderColor: colors.hair, backgroundColor: colors.avyakta2 }]}
          placeholder="Search verses, concepts, ontology..."
          placeholderTextColor={colors.inkDim}
          value={query}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item, index) => `${item.type}-${item.id}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          query.length > 2 ? <Text style={{ color: colors.inkDim, textAlign: 'center', marginTop: 32 }}>No results found.</Text> : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' },
  title: { fontFamily: fonts.display, fontSize: 28, marginBottom: 16 },
  input: {
    fontFamily: fonts.sans,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  list: { padding: 16 },
  resultCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  resultType: {
    fontFamily: fonts.sansBold,
    fontSize: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  resultTitle: {
    fontFamily: fonts.sansBold,
    fontSize: 16,
  },
  resultSubtitle: {
    fontFamily: fonts.serif,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  }
});

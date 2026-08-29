import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KnowledgeGraphView from '../components/graph/KnowledgeGraphView';
import { colors as staticColors, fonts } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SearchService } from '../services/SearchService';
import { ScrollView } from 'react-native';

export default function GraphScreen() {
  const { colors: themeColors } = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'verses' | 'concepts'>('verses');
  const [system, setSystem] = useState<'Sāṃkhya' | 'Yoga' | 'Both'>('Sāṃkhya');

  React.useEffect(() => {
    if (route.params?.highlightNodeId) {
      const node = SearchService.getNode(route.params.highlightNodeId);
      if (node) {
        setSelectedNode(node);
        setActiveTab('verses');
      }
    }
  }, [route.params?.highlightNodeId]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.avyakta }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: themeColors.ink }]}>Ontology</Text>
        <View style={styles.toggleRow}>
          {['Sāṃkhya', 'Yoga', 'Both'].map((sys) => (
            <TouchableOpacity 
              key={sys} 
              style={[
                styles.toggleBtn, 
                system === sys && { borderColor: 'transparent', backgroundColor: themeColors.sattva }
              ]}
              onPress={() => setSystem(sys as any)}
            >
              <Text style={[styles.toggleText, system === sys && { color: themeColors.avyakta }]}>{sys}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={[styles.graphContainer, { borderColor: themeColors.hair }]}>
        <KnowledgeGraphView 
          systemFilter={system}
          selectedNodeId={selectedNode?.id}
          onNodePress={(node) => {
            setSelectedNode(node.id === selectedNode?.id ? null : node);
            setActiveTab('verses');
          }} 
        />
      </View>

      {selectedNode && (
        <View style={[styles.infoCard, { backgroundColor: themeColors.avyakta3, borderColor: themeColors.hair }]}>
          <Text style={[styles.nodeTitle, { color: themeColors.ink }]}>{selectedNode.label}</Text>
          <Text style={[styles.nodeSubtitle, { color: themeColors.inkDim }]}>
            Type: {selectedNode.type} | System: {selectedNode.properties.system || 'Core'}
          </Text>
          {selectedNode.properties.description && (
            <Text style={[styles.nodeDesc, { color: themeColors.ink, marginBottom: 12 }]}>
              {selectedNode.properties.description}
            </Text>
          )}

          <View style={{ flexDirection: 'row', gap: 16, marginTop: 8, marginBottom: 8, borderBottomWidth: 1, borderBottomColor: themeColors.hair, paddingBottom: 8 }}>
            <TouchableOpacity onPress={() => setActiveTab('verses')}>
              <Text style={[styles.nodeSubtitle, { color: activeTab === 'verses' ? themeColors.sattva : themeColors.inkDim, marginBottom: 0 }]}>Related Verses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('concepts')}>
              <Text style={[styles.nodeSubtitle, { color: activeTab === 'concepts' ? themeColors.sattva : themeColors.inkDim, marginBottom: 0 }]}>Related Concepts</Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'verses' && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
              {(() => {
                const searchResults = SearchService.search(selectedNode.label);
                const matches = searchResults.filter(r => r.type === 'verse');
                
                if (matches.length === 0) return <Text style={{ color: themeColors.inkDim, fontSize: 12 }}>No explicit verse links found.</Text>;

                return matches.map((m, i) => (
                  <TouchableOpacity 
                    key={i} 
                    style={[styles.verseChip, { backgroundColor: themeColors.avyakta, borderColor: themeColors.hair }]}
                    onPress={() => navigation.navigate('VerseDetail', { systemId: m.systemId, textId: m.textId, verseId: m.id })}
                  >
                    <Text style={{ color: themeColors.sattva, fontSize: 12, fontWeight: '600' }}>
                      {m.title}
                    </Text>
                  </TouchableOpacity>
                ));
              })()}
            </ScrollView>
          )}

          {activeTab === 'concepts' && (
             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
               {(() => {
                  if (selectedNode.type === 'Concept') {
                    return (
                      <TouchableOpacity 
                        style={[styles.verseChip, { backgroundColor: themeColors.avyakta, borderColor: themeColors.hair }]}
                        onPress={() => navigation.navigate('ConceptsMain', { conceptId: selectedNode.id })}
                      >
                        <Text style={{ color: themeColors.rajas, fontSize: 12, fontWeight: '600' }}>
                          Open Concept & Diagram
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                  return <Text style={{ color: themeColors.inkDim, fontSize: 12 }}>This node is a {selectedNode.type}. See Verses tab for usage.</Text>;
               })()}
             </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
  },
  toggleRow: { flexDirection: 'row', gap: 8 },
  toggleBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: staticColors.hair,
  },
  toggleText: {
    fontFamily: fonts.sansMedium,
    fontSize: 12,
    color: staticColors.inkDim,
  },
  graphContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  infoCard: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  nodeTitle: {
    fontFamily: fonts.sansBold,
    fontSize: 18,
    marginBottom: 4,
  },
  nodeSubtitle: {
    fontFamily: fonts.sansMedium,
    fontSize: 12,
    marginBottom: 8,
  },
  nodeDesc: {
    fontFamily: fonts.serif,
    fontSize: 16,
    lineHeight: 22,
  },
  verseChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
  }
});

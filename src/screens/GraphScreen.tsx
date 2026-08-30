import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KnowledgeGraphView from '../components/graph/KnowledgeGraphView';
import { fonts, type, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SearchService } from '../services/SearchService';

export default function GraphScreen() {
  const { colors, elevation, systemAccent } = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'verses' | 'concepts'>('verses');
  const [system, setSystem] = useState<'Sāṃkhya' | 'Yoga' | 'Both'>('Sāṃkhya');
  const s = makeStyles(colors);

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
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <View>
          <Text style={s.eyebrow}>Knowledge graph</Text>
          <Text style={s.title}>Ontology</Text>
        </View>
        <View style={s.toggleRow}>
          {(['Sāṃkhya', 'Yoga', 'Both'] as const).map((sys) => {
            const active = system === sys;
            const accent =
              sys === 'Sāṃkhya' ? systemAccent('samkhya') : sys === 'Yoga' ? systemAccent('yoga') : { primary: colors.purusha };
            return (
              <TouchableOpacity
                key={sys}
                style={[s.toggleBtn, active && { borderColor: 'transparent', backgroundColor: accent.primary }]}
                onPress={() => setSystem(sys)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
              >
                <Text style={[s.toggleText, active && s.toggleTextActive]}>{sys}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={s.graphContainer}>
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
        <View style={[s.infoCard, elevation(3)]}>
          <Text style={s.nodeTitle}>{selectedNode.label}</Text>
          <Text style={s.nodeSubtitle}>
            Type: {selectedNode.type} | System: {selectedNode.properties.system || 'Core'}
          </Text>
          {selectedNode.properties.description && (
            <Text style={[s.nodeDesc, { marginBottom: 12 }]}>{selectedNode.properties.description}</Text>
          )}

          <View style={s.tabRow}>
            <TouchableOpacity onPress={() => setActiveTab('verses')} style={s.tabBtn}>
              <Text style={[s.tabLabel, activeTab === 'verses' && s.tabLabelActive]}>Related Verses</Text>
              {activeTab === 'verses' && <View style={s.tabUnderline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('concepts')} style={s.tabBtn}>
              <Text style={[s.tabLabel, activeTab === 'concepts' && s.tabLabelActive]}>Related Concepts</Text>
              {activeTab === 'concepts' && <View style={s.tabUnderline} />}
            </TouchableOpacity>
          </View>

          {activeTab === 'verses' && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
              {(() => {
                const searchResults = SearchService.search(selectedNode.label);
                const matches = searchResults.filter((r) => r.type === 'verse');

                if (matches.length === 0) return <Text style={s.emptyNote}>No explicit verse links found.</Text>;

                return matches.map((m, i) => (
                  <TouchableOpacity
                    key={i}
                    style={s.verseChip}
                    onPress={() => navigation.navigate('VerseDetail', { systemId: m.systemId, textId: m.textId, verseId: m.id })}
                  >
                    <Text style={s.verseChipText}>{m.title}</Text>
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
                      style={s.verseChip}
                      onPress={() => navigation.navigate('ConceptsMain', { conceptId: selectedNode.id })}
                    >
                      <Text style={s.conceptChipText}>Open Concept & Diagram</Text>
                    </TouchableOpacity>
                  );
                }
                return <Text style={s.emptyNote}>This node is a {selectedNode.type}. See Verses tab for usage.</Text>;
              })()}
            </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.avyakta },
    header: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    eyebrow: { ...type.eyebrow, color: colors.sattvaDim, marginBottom: 2 },
    title: {
      fontFamily: fonts.display,
      fontSize: 24,
      color: colors.ink,
    },
    toggleRow: { flexDirection: 'row', gap: 8 },
    toggleBtn: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.hair,
      backgroundColor: colors.avyakta2,
    },
    toggleBtnActive: { borderColor: 'transparent', backgroundColor: colors.sattva },
    toggleText: {
      fontFamily: fonts.sansMedium,
      fontSize: 12,
      color: colors.inkDim,
    },
    toggleTextActive: { color: colors.avyakta, fontFamily: fonts.sansBold },
    graphContainer: {
      flex: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.hair,
    },
    infoCard: {
      position: 'absolute',
      bottom: 24,
      left: 16,
      right: 16,
      padding: 16,
      borderRadius: 14,
      borderWidth: 1,
      backgroundColor: colors.avyakta3,
      borderColor: colors.hair,
    },
    nodeTitle: {
      fontFamily: fonts.sansBold,
      fontSize: 18,
      color: colors.ink,
      marginBottom: 4,
    },
    nodeSubtitle: {
      fontFamily: fonts.sansMedium,
      fontSize: 12,
      color: colors.inkDim,
      marginBottom: 8,
    },
    nodeDesc: {
      fontFamily: fonts.serif,
      fontSize: 16,
      lineHeight: 22,
      color: colors.ink,
    },
    tabRow: {
      flexDirection: 'row',
      gap: 20,
      marginTop: 8,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.hair,
      paddingBottom: 10,
    },
    tabBtn: { alignItems: 'center' },
    tabLabel: { fontFamily: fonts.sansMedium, fontSize: 12, color: colors.inkDim },
    tabLabelActive: { color: colors.sattva, fontFamily: fonts.sansBold },
    tabUnderline: { height: 2, width: '100%', backgroundColor: colors.sattva, marginTop: 6, borderRadius: 1 },
    emptyNote: { color: colors.inkDim, fontSize: 12 },
    verseChip: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      marginRight: 8,
      backgroundColor: colors.avyakta,
      borderColor: colors.hair,
    },
    verseChipText: { color: colors.sattva, fontSize: 12, fontFamily: fonts.sansBold },
    conceptChipText: { color: colors.purusha, fontSize: 12, fontFamily: fonts.sansBold },
  });

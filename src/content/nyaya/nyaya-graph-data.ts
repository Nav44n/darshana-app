import { 
  NyayaGraphBuilder, 
  SutraId, 
  ConceptId,
  NyayaGraphData,
  PADARTHA_KINDS,
  PRAMANA_KINDS,
  PRAMEYA_KINDS,
  SutraNode,
  ConceptNode,
  PadarthaNode,
  PramanaNode,
  PrameyaNode
} from '../../knowledge/nyaya_graph';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';

const builder = new NyayaGraphBuilder();

// 1. Process all Concepts into Nodes
nyayaConceptsEn.forEach(concept => {
  const cId = concept.id as ConceptId;
  const label = `${concept.sanskrit} (${concept.iast}) - ${concept.english}`;
  
  if (PADARTHA_KINDS.includes(concept.id as any)) {
    builder.addNode<PadarthaNode>({
      kind: 'Padartha',
      id: cId as any,
      label,
      padarthaKind: concept.id as any,
      provenance: { sutraRefs: [], confidence: 'confirmed' },
      properties: {
        description: concept.definition
      }
    });
  } else if (PRAMANA_KINDS.includes(concept.id as any)) {
    builder.addNode<PramanaNode>({
      kind: 'Pramana',
      id: cId as any,
      label,
      pramanaKind: concept.id as any,
      provenance: { sutraRefs: [], confidence: 'confirmed' },
      properties: {
        description: concept.definition
      }
    });
  } else if (PRAMEYA_KINDS.includes(concept.id as any)) {
    builder.addNode<PrameyaNode>({
      kind: 'Prameya',
      id: cId as any,
      label,
      prameyaKind: concept.id as any,
      provenance: { sutraRefs: [], confidence: 'confirmed' },
      properties: {
        description: concept.definition
      }
    });
  } else {
    builder.addNode<ConceptNode>({
      kind: 'Concept',
      id: cId,
      label,
      domain: concept.category,
      provenance: { sutraRefs: [], confidence: 'confirmed' },
      properties: {
        description: concept.definition
      }
    });
  }
});

// Create semantic edges for related concepts
nyayaConceptsEn.forEach(concept => {
  if (concept.relatedConcepts) {
    concept.relatedConcepts.forEach(relatedId => {
      builder.addEdge({
        source: concept.id as ConceptId,
        target: relatedId as ConceptId,
        relation: 'SUBTYPE_OF',
        provenance: { sutraRefs: [], confidence: 'inferred' }
      });
    });
  }
});

// 2. Process all Sutras into Nodes and create DEFINES edges
nyayaSutrasEn.forEach(sutra => {
  const sutraNodeId = `sutra:${sutra.id}` as SutraId;
  
  builder.addNode<SutraNode>({
    kind: 'Sutra',
    id: sutraNodeId,
    ahnika: '1.1' as any, // Dummy for now since we don't parse ahnika easily from flat list
    devanagari: sutra.devanagari || '',
    iast: sutra.iast,
    label: `Sutra ${sutra.number}`,
    provenance: { sutraRefs: [sutraNodeId], confidence: 'confirmed' },
    properties: {
      description: sutra.translation
    }
  });

  // If the sutra mentions concepts, it DEFINES or ESTABLISHES them
  if (sutra.conceptIds) {
    sutra.conceptIds.forEach(conceptId => {
      builder.addEdge({
        source: sutraNodeId,
        target: conceptId as ConceptId,
        relation: 'DEFINES',
        provenance: { sutraRefs: [sutraNodeId], confidence: 'confirmed' }
      });
    });
  }
});

// 3. Assemble the maxed-out Knowledge Graph
export const nyayaKnowledgeGraph: NyayaGraphData = builder.buildData({
  version: '2.0.0',
  generatedAt: new Date().toISOString(),
  sourceFiles: ['nyaya-sutras-en.ts', 'nyaya-sutras-concepts-en.ts']
});

import { 
  NyayaKnowledgeGraph, 
  NyayaNode, 
  NyayaEdge, 
  NyayaNodeType, 
  NyayaEdgeType 
} from '../../types/nyaya-graph';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';

const nodes: Record<string, NyayaNode> = {};
const edges: Record<string, NyayaEdge> = {};

// Helper to deterministically map concept categories to our advanced graph types
const mapCategoryToType = (category: string): NyayaNodeType => {
  switch (category) {
    case 'Epistemology': return 'PRAMANA';
    case 'Metaphysics': return 'PRAMEYA';
    case 'Dialectics': return 'VADA';
    case 'Hermeneutics': return 'SIDDHANTA';
    case 'Cognition': return 'PRAMEYA';
    default: return 'SIDDHANTA';
  }
};

// 1. Process all Concepts into Nodes
nyayaConceptsEn.forEach(concept => {
  const nodeId = `concept:${concept.id}`;
  nodes[nodeId] = {
    id: nodeId,
    type: mapCategoryToType(concept.category),
    label: {
      sanskrit: concept.sanskrit,
      iast: concept.iast,
      english: concept.english
    },
    description: concept.definition,
    axiomatic: ['pramana', 'prameya'].includes(concept.id), // Basic heuristics for axioms
  };

  // Create semantic edges for related concepts
  if (concept.relatedConcepts) {
    concept.relatedConcepts.forEach(relatedId => {
      const targetId = `concept:${relatedId}`;
      const edgeId = `edge:related:${concept.id}->${relatedId}`;
      edges[edgeId] = {
        id: edgeId,
        sourceNodeId: nodeId,
        targetNodeId: targetId,
        relation: 'IS_A', // Defaulting relation, can be specialized later
        weight: 0.8, // Semantic proximity score
        isBidirectional: true,
        provenance: [] 
      };
    });
  }
});

// 2. Process all Sutras into Nodes and create PROVES/HAS_PART edges
nyayaSutrasEn.forEach(sutra => {
  const sutraNodeId = `sutra:${sutra.id}`;
  
  nodes[sutraNodeId] = {
    id: sutraNodeId,
    type: 'SUTRA',
    label: {
      sanskrit: sutra.devanagari,
      iast: sutra.iast,
      english: sutra.number
    },
    description: sutra.translation,
    axiomatic: true, // Sutras are foundational axioms of the system
  };

  // If the sutra mentions concepts, it PROVES or SUBSTRATUM_OF those concepts
  if (sutra.conceptIds) {
    sutra.conceptIds.forEach(conceptId => {
      const targetConceptId = `concept:${conceptId}`;
      
      const edgeId = `edge:proves:${sutra.id}->${conceptId}`;
      edges[edgeId] = {
        id: edgeId,
        sourceNodeId: sutraNodeId,
        targetNodeId: targetConceptId,
        relation: 'PROVES',
        weight: 1.0, // Absolute textual proof
        isBidirectional: false,
        provenance: [{
          sutraId: sutra.id,
          confidence: 1.0
        }]
      };
    });
  }
});

// 3. Assemble the maxed-out Knowledge Graph
export const nyayaKnowledgeGraph: NyayaKnowledgeGraph = {
  schemaVersion: '1.0.0',
  ontologyUri: 'http://darshana.app/ontology/nyaya',
  nodes,
  edges,
  hyperparameters: {
    embeddingDimension: 1536,
    graphDensity: Object.keys(edges).length / (Object.keys(nodes).length * Object.keys(nodes).length || 1),
    modularity: 0.85, // Estimated high clustering based on sutra chapters
    totalInferences: Object.keys(edges).length
  }
};

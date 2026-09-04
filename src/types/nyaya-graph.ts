/**
 * Nyāya Sūtras - Advanced Knowledge Graph Architecture
 * 
 * A fully maxed-out, syntax-only schema designed for high-dimensional 
 * data science, Graph Neural Networks (GNNs), and Semantic Web (RDF/OWL) paradigms.
 * Contains zero content—only the structural definitions.
 */

/**
 * Categorical classifications specific to Nyāya ontology and epistemology.
 */
export type NyayaNodeType = 
  | 'PRAMANA'       // Means of Knowledge (e.g., Perception, Inference)
  | 'PRAMEYA'       // Object of Knowledge (e.g., Soul, Body, Mind)
  | 'AVAYAVA'       // Syllogistic Component (e.g., Hypothesis, Reason)
  | 'HETVABHASA'    // Fallacy of Reason
  | 'VADA'          // Debate Construct (e.g., Jalpa, Vitanda)
  | 'SUTRA'         // Source Text/Verse
  | 'SIDDHANTA';    // Established Tenet / Axiom

/**
 * Semantic predicates representing logical and ontological relationships.
 */
export type NyayaEdgeType = 
  | 'PROVES'        // A -> PROVES -> B (Sādhana)
  | 'REFUTES'       // A -> REFUTES -> B (Khaṇḍana)
  | 'IS_A'          // Subclass / Taxonomy
  | 'HAS_PART'      // Mereological inclusion
  | 'CAUSES'        // Cause-and-Effect (Kārya-Kāraṇa)
  | 'CONTRADICTS'   // Logical contradiction (Virodha)
  | 'DERIVED_FROM'  // Epistemic origin
  | 'SUBSTRATUM_OF';// Inherence (Samavāya)

/**
 * High-dimensional vector representation for semantic search, 
 * Retrieval-Augmented Generation (RAG), and clustering.
 */
export type VectorEmbedding = number[] | Float32Array; 

/**
 * Topological and analytical metrics derived from Network Science algorithms.
 */
export interface GraphMetadata {
  centralityScore?: number;      // e.g., PageRank or Eigenvector centrality
  clusteringCoefficient?: number; // Local density of the node's neighborhood
  semanticClusterId?: number;    // Assigned via K-Means or HDBSCAN
  lastComputed?: string;         // ISO-8601 timestamp of last algorithmic pass
}

/**
 * Represents a single entity or concept within the Nyāya framework.
 */
export interface NyayaNode {
  id: string;                    // UUID or deterministic URI (e.g., 'concept:pratyaksha')
  type: NyayaNodeType;
  label: {
    sanskrit: string;
    iast: string;
    english: string;
  };
  description: string;
  
  // --- Data Science & Machine Learning Fields ---
  embedding?: VectorEmbedding;   // Vector representation of the node's semantic meaning
  metadata?: GraphMetadata;      // Algorithmic network metrics
  
  // --- Logical Constraints ---
  axiomatic: boolean;            // True if this is a foundational, unprovable axiom
}

/**
 * Tracks the textual and historical evidence backing a specific relationship.
 */
export interface EdgeProvenance {
  sutraId: string;               // The specific Nyāya Sūtra validating this edge (e.g., '1.1.4')
  commentator?: string;          // e.g., 'Vātsyāyana', 'Uddyotakara' (if derived from Bhāṣya)
  confidence: number;            // 0.0 to 1.0 (Probabilistic weight or fuzzy logic score)
}

/**
 * Represents a directed, weighted relationship between two Nyāya nodes.
 */
export interface NyayaEdge {
  id: string;                    // Deterministic hash of source + target + relation
  sourceNodeId: string;
  targetNodeId: string;
  relation: NyayaEdgeType;
  
  weight: number;                // ML edge weight (e.g., strength of inference or semantic similarity)
  isBidirectional: boolean;
  
  provenance: EdgeProvenance[];  // Citations providing ground-truth for this edge
  
  // Optional tensor/vector for the relationship itself (used in TransE/TransR knowledge graph embeddings)
  relationEmbedding?: VectorEmbedding; 
}

/**
 * The root structure containing the entire graph, optimized for O(1) lookups 
 * and export to graph databases (Neo4j, ArangoDB) or ML pipelines (PyTorch Geometric).
 */
export interface NyayaKnowledgeGraph {
  schemaVersion: string;         // e.g., '1.0.0'
  ontologyUri: string;           // Semantic web namespace (e.g., 'http://darshana.app/ontology/nyaya')
  
  nodes: Record<string, NyayaNode>;
  edges: Record<string, NyayaEdge>;
  
  // Global statistical properties of the graph
  hyperparameters?: {
    embeddingDimension: number;  // e.g., 768 or 1536
    graphDensity: number;
    modularity: number;          // Measure of the graph's community structure
    totalInferences: number;
  };
}

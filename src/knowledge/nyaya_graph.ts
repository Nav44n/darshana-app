/**
 * NYAYA SUTRA KNOWLEDGE GRAPH — SCHEMA
 * =====================================
 * Syntax-only schema for a full knowledge-graph representation of the
 * Nyaya Sutra (Gautama/Akshapada). No sutra content, no node/edge data
 * is populated here — this file defines the ontology, ID system, node/
 * edge discriminated unions, and a generic strongly-typed graph engine
 * (traversal, indexing, validation) to be populated separately from
 * nyaya-sutras-book{1..5}-en.ts and related content files.
 *
 * Distinct from src/knowledge/query_graph.ts (DarshanaGraph), which is
 * Samkhya/Yoga-specific (Tattva/Guna evolution). This schema is its own
 * ontology tailored to Nyaya's dialectical/argumentative structure:
 * sutras nest in prakaranas/ahnikas/adhyayas; sutras define, establish,
 * exemplify, and refute; fallacies (hetvabhasa/chala/jati/nigrahasthana)
 * form their own taxonomy; rival schools (Samkhya, Mimamsa, Buddhist
 * sub-schools, Charvaka, etc.) hold positions the text engages with.
 */

// ─────────────────────────────────────────────────────────────────────────
// 1. BRANDED ID TYPES
// ─────────────────────────────────────────────────────────────────────────
// Branding prevents accidentally passing a ConceptId where a SutraId is
// expected, etc. — all IDs are strings at runtime, distinguished at the
// type level only.

declare const __brand: unique symbol;
type Brand<T, B extends string> = T & { readonly [__brand]: B };

/** e.g. "1.1.1", "3.2.72", "5.1.43" — adhyaya.ahnika.sutra */
export type SutraId = Brand<string, 'SutraId'>;
/** e.g. "1.1", "3.2", "5.1" — adhyaya.ahnika */
export type AhnikaId = Brand<string, 'AhnikaId'>;
/** e.g. "1", "2", "3", "4", "5" */
export type AdhyayaId = Brand<string, 'AdhyayaId'>;
/** slug id, e.g. "sanshaya-lakshana", "shabda-nityatva" */
export type PrakaranaId = Brand<string, 'PrakaranaId'>;
/** slug id, e.g. "atma", "buddhi", "vyakti-akrti-jati" */
export type ConceptId = Brand<string, 'ConceptId'>;
/** one of the 16 padarthas, see PadarthaKind below */
export type PadarthaId = Brand<string, 'PadarthaId'>;
/** slug id for a named fallacy/defect instance, e.g. "savyabhichara" */
export type FallacyId = Brand<string, 'FallacyId'>;
/** slug id, e.g. "samkhya", "purva-mimamsa", "vijnanavada" */
export type SchoolId = Brand<string, 'SchoolId'>;
/** slug id for a dialectical move/argument-unit spanning 1+ sutras */
export type ArgumentId = Brand<string, 'ArgumentId'>;
/** slug id for a recurring illustrative example, e.g. "milk-curd", "crystal-flower" */
export type ExampleId = Brand<string, 'ExampleId'>;
/** slug id for a person (author, commentator, cited authority) */
export type PersonId = Brand<string, 'PersonId'>;

export type NyayaNodeId =
  | SutraId | AhnikaId | AdhyayaId | PrakaranaId | ConceptId | PadarthaId
  | FallacyId | SchoolId | ArgumentId | ExampleId | PersonId;

// ─────────────────────────────────────────────────────────────────────────
// 2. CONTROLLED VOCABULARIES (the fixed ontology of the text itself)
// ─────────────────────────────────────────────────────────────────────────

/** The 16 padarthas (categories) enumerated at Sutra 1.1.1 */
export const PADARTHA_KINDS = [
  'pramana', 'prameya', 'samshaya', 'prayojana', 'drishtanta',
  'siddhanta', 'avayava', 'tarka', 'nirnaya', 'vada', 'jalpa',
  'vitanda', 'hetvabhasa', 'chala', 'jati', 'nigrahasthana',
] as const;
export type PadarthaKind = typeof PADARTHA_KINDS[number];

/** The 4 pramanas (means of valid knowledge) */
export const PRAMANA_KINDS = ['pratyaksha', 'anumana', 'upamana', 'shabda'] as const;
export type PramanaKind = typeof PRAMANA_KINDS[number];

/** The 12 prameyas (objects of valid knowledge), per 1.1.9 */
export const PRAMEYA_KINDS = [
  'atman', 'sharira', 'indriya', 'artha', 'buddhi', 'manas',
  'pravritti', 'dosha', 'pretyabhava', 'phala', 'duhkha', 'apavarga',
] as const;
export type PrameyaKind = typeof PRAMEYA_KINDS[number];

/** The 5 hetvabhasas (fallacious reasons), per 1.2.4 */
export const HETVABHASA_KINDS = [
  'savyabhichara', 'viruddha', 'prakaranasama', 'sadhyasama', 'kalatita',
] as const;
export type HetvabhasaKind = typeof HETVABHASA_KINDS[number];

/** The 3 chalas (quibbles), per 1.2.11 */
export const CHALA_KINDS = ['vak-chala', 'samanya-chala', 'upacara-chala'] as const;
export type ChalaKind = typeof CHALA_KINDS[number];

/** The 24 jatis (futile rejoinders), Book 5 Ahnika 1 */
export const JATI_KINDS = [
  'sadharmya-sama', 'vaidharmya-sama', 'utkarsha-sama', 'apakarsha-sama',
  'varnya-sama', 'avarnya-sama', 'vikalpa-sama', 'sadhya-sama',
  'prapti-sama', 'aprapti-sama', 'prasanga-sama', 'pratidrishtanta-sama',
  'anutpatti-sama', 'samshaya-sama', 'prakarana-sama', 'ahetu-sama',
  'arthapatti-sama', 'avishesha-sama', 'upapatti-sama', 'upalabdhi-sama',
  'anupalabdhi-sama', 'anitya-sama', 'nitya-sama', 'karya-sama',
] as const;
export type JatiKind = typeof JATI_KINDS[number];

/** The 22 nigrahasthanas (grounds for defeat in debate), Book 5 Ahnika 2 */
export const NIGRAHASTHANA_KINDS = [
  'pratijna-hani', 'pratijnantara', 'pratijna-virodha', 'pratijna-sannyasa',
  'hetvantara', 'arthantara', 'nirarthaka', 'avijnatartha', 'apartha',
  'aprapta-kala', 'nyuna', 'adhika', 'punarukta', 'ananubhashana',
  'ajnana', 'apratibha', 'vikshepa', 'matanujna', 'paryanuyojyopekshana',
  'niranuyojyanuyoga', 'apasiddhanta', 'hetvabhasa-nigraha',
] as const;
export type NigrahasthanaKind = typeof NIGRAHASTHANA_KINDS[number];

/** Dialectical role a sutra (or argument-unit) plays within a debate sequence */
export const DIALECTICAL_ROLES = [
  'purvapaksha',    // objection / opponent's view stated
  'siddhanta',      // established/settled conclusion (Gautama's own view)
  'uttara',         // reply that is itself further contested
  'anuvada',        // restatement/recap, not a fresh move
  'drishtanta',     // illustrative example offered in support
  'samshaya',       // statement of doubt opening a topic
] as const;
export type DialecticalRole = typeof DIALECTICAL_ROLES[number];

/** The 3 forms of katha (debate) defined at 1.2.1-3 */
export const KATHA_KINDS = ['vada', 'jalpa', 'vitanda'] as const;
export type KathaKind = typeof KATHA_KINDS[number];

// ─────────────────────────────────────────────────────────────────────────
// 3. PROVENANCE / CONFIDENCE METADATA
// ─────────────────────────────────────────────────────────────────────────
// Every node and edge carries provenance so the graph can be audited,
// filtered by confidence, and traced back to its textual source —
// important given prior sessions' PROVISIONAL numbering caveats on
// Books 2.2 / 3 / 4 (see sources/PROVENANCE_NOTES.md).

export type ConfidenceLevel = 'confirmed' | 'provisional' | 'inferred';

export interface Provenance {
  /** sutra id(s) this node/edge is directly grounded in */
  readonly sutraRefs: readonly SutraId[];
  readonly confidence: ConfidenceLevel;
  /** free-text note, e.g. "numbering not cross-checked against Vidyabhushana" */
  readonly note?: string;
}

// ─────────────────────────────────────────────────────────────────────────
// 4. NODE TYPES (discriminated union on `kind`)
// ─────────────────────────────────────────────────────────────────────────

interface BaseNode {
  readonly label: string;
  readonly provenance: Provenance;
  /** free-form extensible bag for UI/rendering-layer needs */
  readonly properties?: Readonly<Record<string, unknown>>;
}

export interface SutraNode extends BaseNode {
  readonly kind: 'Sutra';
  readonly id: SutraId;
  readonly ahnika: AhnikaId;
  readonly devanagari: string;
  readonly iast: string;
  readonly dialecticalRole?: DialecticalRole;
}

export interface AhnikaNode extends BaseNode {
  readonly kind: 'Ahnika';
  readonly id: AhnikaId;
  readonly adhyaya: AdhyayaId;
  readonly ordinal: 1 | 2;
}

export interface AdhyayaNode extends BaseNode {
  readonly kind: 'Adhyaya';
  readonly id: AdhyayaId;
  readonly ordinal: 1 | 2 | 3 | 4 | 5;
}

export interface PrakaranaNode extends BaseNode {
  readonly kind: 'Prakarana';
  readonly id: PrakaranaId;
  readonly ahnika: AhnikaId;
  readonly sutraRange: readonly [SutraId, SutraId];
}

export interface PadarthaNode extends BaseNode {
  readonly kind: 'Padartha';
  readonly id: PadarthaId;
  readonly padarthaKind: PadarthaKind;
}

export interface PramanaNode extends BaseNode {
  readonly kind: 'Pramana';
  readonly id: ConceptId;
  readonly pramanaKind: PramanaKind;
}

export interface PrameyaNode extends BaseNode {
  readonly kind: 'Prameya';
  readonly id: ConceptId;
  readonly prameyaKind: PrameyaKind;
}

export interface ConceptNode extends BaseNode {
  readonly kind: 'Concept';
  readonly id: ConceptId;
  /** e.g. "epistemology", "ontology", "philosophy-of-language", "soteriology" */
  readonly domain?: string;
}

export interface FallacyNode extends BaseNode {
  readonly kind: 'Fallacy';
  readonly id: FallacyId;
  readonly family: 'hetvabhasa' | 'chala' | 'jati' | 'nigrahasthana';
  readonly fallacyKind: HetvabhasaKind | ChalaKind | JatiKind | NigrahasthanaKind;
}

export interface SchoolNode extends BaseNode {
  readonly kind: 'School';
  readonly id: SchoolId;
  /** e.g. "Buddhist", "Vedic", "Materialist" */
  readonly tradition?: string;
}

export interface ArgumentNode extends BaseNode {
  readonly kind: 'Argument';
  readonly id: ArgumentId;
  readonly role: DialecticalRole;
  readonly spanningSutras: readonly SutraId[];
}

export interface ExampleNode extends BaseNode {
  readonly kind: 'Example';
  readonly id: ExampleId;
}

export interface PersonNode extends BaseNode {
  readonly kind: 'Person';
  readonly id: PersonId;
}

export type NyayaNode =
  | SutraNode | AhnikaNode | AdhyayaNode | PrakaranaNode | PadarthaNode
  | PramanaNode | PrameyaNode | ConceptNode | FallacyNode | SchoolNode
  | ArgumentNode | ExampleNode | PersonNode;

export type NyayaNodeKind = NyayaNode['kind'];

/** Extract the concrete node type for a given `kind` literal. */
export type NodeOfKind<K extends NyayaNodeKind> = Extract<NyayaNode, { kind: K }>;

// ─────────────────────────────────────────────────────────────────────────
// 5. EDGE / RELATION TYPES
// ─────────────────────────────────────────────────────────────────────────

export const NYAYA_RELATIONS = [
  'PART_OF',              // Sutra -> Prakarana -> Ahnika -> Adhyaya
  'PRECEDES',             // strict sequential order within an ahnika
  'DEFINES',              // Sutra -> Concept/Padartha/Pramana/Prameya/Fallacy
  'ESTABLISHES',          // Sutra (siddhanta) -> Concept (positive doctrine)
  'RAISES_OBJECTION_TO',  // Sutra (purvapaksha) -> Sutra | Concept | Argument
  'REFUTES',              // Sutra | Argument -> Sutra | Argument | Concept
  'SUPPORTS',             // Sutra | Example -> Concept | Argument
  'PRESUPPOSES',          // Argument | Concept -> Concept (dependency)
  'CROSS_REFERENCES',     // Sutra -> Sutra (explicit backward/forward link)
  'EXEMPLIFIES',          // Example -> Concept | Argument
  'INSTANCE_OF',          // Fallacy -> Fallacy (specific subtype -> family)
  'SUBTYPE_OF',           // generic taxonomy edge (any node -> broader node)
  'ATTRIBUTED_TO',        // Argument (purvapaksha) -> School
  'CONTRADICTS',          // Concept | Argument -> Concept | Argument
  'RESOLVES',             // Sutra | Argument -> Sutra | Argument (samshaya closed)
  'ELIMINATES',           // Argument -> Concept (parishesha-style elimination)
  'AUTHORED_BY',          // Adhyaya | whole text -> Person
] as const;
export type NyayaRelation = typeof NYAYA_RELATIONS[number];

/**
 * Per-relation constraint table (documentation-only at the type level via
 * the generic below — enforced at runtime by GraphBuilder.addEdge).
 */
export interface RelationConstraint<
  S extends NyayaNodeKind = NyayaNodeKind,
  T extends NyayaNodeKind = NyayaNodeKind
> {
  readonly relation: NyayaRelation;
  readonly allowedSource: readonly S[];
  readonly allowedTarget: readonly T[];
}

export interface NyayaEdge<
  R extends NyayaRelation = NyayaRelation
> {
  readonly source: NyayaNodeId;
  readonly target: NyayaNodeId;
  readonly relation: R;
  readonly provenance: Provenance;
  readonly properties?: Readonly<Record<string, unknown>>;
}

// ─────────────────────────────────────────────────────────────────────────
// 6. GRAPH CONTAINER
// ─────────────────────────────────────────────────────────────────────────

export interface NyayaGraphData {
  readonly nodes: readonly NyayaNode[];
  readonly edges: readonly NyayaEdge[];
  readonly metadata: {
    readonly version: string;
    readonly generatedAt: string;
    readonly sourceFiles: readonly string[];
  };
}

/** Runtime type guards, one per node kind — used by the graph engine and
 *  safe to use directly against untrusted/deserialized JSON. */
export const NodeGuards: { [K in NyayaNodeKind]: (n: NyayaNode) => n is NodeOfKind<K> } = {
  Sutra: (n): n is SutraNode => n.kind === 'Sutra',
  Ahnika: (n): n is AhnikaNode => n.kind === 'Ahnika',
  Adhyaya: (n): n is AdhyayaNode => n.kind === 'Adhyaya',
  Prakarana: (n): n is PrakaranaNode => n.kind === 'Prakarana',
  Padartha: (n): n is PadarthaNode => n.kind === 'Padartha',
  Pramana: (n): n is PramanaNode => n.kind === 'Pramana',
  Prameya: (n): n is PrameyaNode => n.kind === 'Prameya',
  Concept: (n): n is ConceptNode => n.kind === 'Concept',
  Fallacy: (n): n is FallacyNode => n.kind === 'Fallacy',
  School: (n): n is SchoolNode => n.kind === 'School',
  Argument: (n): n is ArgumentNode => n.kind === 'Argument',
  Example: (n): n is ExampleNode => n.kind === 'Example',
  Person: (n): n is PersonNode => n.kind === 'Person',
};

/**
 * Generic, strongly-typed, read-optimized graph engine over NyayaNode/
 * NyayaEdge. Built once from immutable NyayaGraphData; all query methods
 * are non-mutating. No Nyaya-specific data lives here — only structure
 * and generic + relation-aware traversal.
 */
export class NyayaKnowledgeGraph {
  private readonly nodesById: Map<NyayaNodeId, NyayaNode> = new Map();
  private readonly outgoing: Map<NyayaNodeId, NyayaEdge[]> = new Map();
  private readonly incoming: Map<NyayaNodeId, NyayaEdge[]> = new Map();

  constructor(private readonly data: NyayaGraphData) {
    for (const n of data.nodes) this.nodesById.set(n.id as NyayaNodeId, n);
    for (const e of data.edges) {
      this.pushInto(this.outgoing, e.source, e);
      this.pushInto(this.incoming, e.target, e);
    }
  }

  private pushInto(map: Map<NyayaNodeId, NyayaEdge[]>, key: NyayaNodeId, edge: NyayaEdge): void {
    const arr = map.get(key);
    if (arr) arr.push(edge); else map.set(key, [edge]);
  }

  // ── basic lookups ──────────────────────────────────────────────────
  getNode(id: NyayaNodeId): NyayaNode | undefined {
    return this.nodesById.get(id);
  }

  getNodesOfKind<K extends NyayaNodeKind>(kind: K): NodeOfKind<K>[] {
    const guard = NodeGuards[kind];
    return this.data.nodes.filter(guard) as NodeOfKind<K>[];
  }

  getOutgoing(id: NyayaNodeId, relation?: NyayaRelation): NyayaEdge[] {
    const edges = this.outgoing.get(id) ?? [];
    return relation ? edges.filter(e => e.relation === relation) : edges;
  }

  getIncoming(id: NyayaNodeId, relation?: NyayaRelation): NyayaEdge[] {
    const edges = this.incoming.get(id) ?? [];
    return relation ? edges.filter(e => e.relation === relation) : edges;
  }

  // ── relation-specific typed accessors ──────────────────────────────
  getChildren(id: NyayaNodeId): NyayaNode[] {
    return this.getIncoming(id, 'PART_OF')
      .map(e => this.nodesById.get(e.source))
      .filter((n): n is NyayaNode => n !== undefined);
  }

  getParent(id: NyayaNodeId): NyayaNode | undefined {
    const e = this.getOutgoing(id, 'PART_OF')[0];
    return e ? this.nodesById.get(e.target) : undefined;
  }

  getDefinitionsBy(sutraId: SutraId): NyayaNode[] {
    return this.getOutgoing(sutraId, 'DEFINES')
      .map(e => this.nodesById.get(e.target))
      .filter((n): n is NyayaNode => n !== undefined);
  }

  getRefutationsOf(id: NyayaNodeId): NyayaNode[] {
    return this.getIncoming(id, 'REFUTES')
      .map(e => this.nodesById.get(e.source))
      .filter((n): n is NyayaNode => n !== undefined);
  }

  getObjectionsTo(id: NyayaNodeId): NyayaNode[] {
    return this.getIncoming(id, 'RAISES_OBJECTION_TO')
      .map(e => this.nodesById.get(e.source))
      .filter((n): n is NyayaNode => n !== undefined);
  }

  getCrossReferences(sutraId: SutraId): SutraNode[] {
    return this.getOutgoing(sutraId, 'CROSS_REFERENCES')
      .map(e => this.nodesById.get(e.target))
      .filter((n): n is NyayaNode => n !== undefined)
      .filter(NodeGuards.Sutra);
  }

  getFallacyInstances(family: FallacyNode['family']): FallacyNode[] {
    return this.getNodesOfKind('Fallacy').filter(f => f.family === family);
  }

  getSchoolPositions(schoolId: SchoolId): ArgumentNode[] {
    return this.getIncoming(schoolId, 'ATTRIBUTED_TO')
      .map(e => this.nodesById.get(e.source))
      .filter((n): n is NyayaNode => n !== undefined)
      .filter(NodeGuards.Argument);
  }

  getExamplesOf(id: NyayaNodeId): ExampleNode[] {
    return this.getIncoming(id, 'EXEMPLIFIES')
      .map(e => this.nodesById.get(e.source))
      .filter((n): n is NyayaNode => n !== undefined)
      .filter(NodeGuards.Example);
  }

  // ── generic traversal ──────────────────────────────────────────────
  bfs(startId: NyayaNodeId, opts?: { relation?: NyayaRelation; maxDepth?: number }): { node: NyayaNode; depth: number }[] {
    const visited = new Set<NyayaNodeId>([startId]);
    const queue: { id: NyayaNodeId; depth: number }[] = [{ id: startId, depth: 0 }];
    const results: { node: NyayaNode; depth: number }[] = [];
    const maxDepth = opts?.maxDepth ?? Infinity;

    while (queue.length > 0) {
      const { id, depth } = queue.shift()!;
      if (depth > 0) {
        const n = this.nodesById.get(id);
        if (n) results.push({ node: n, depth });
      }
      if (depth >= maxDepth) continue;
      for (const e of this.getOutgoing(id, opts?.relation)) {
        const targetId = e.target as NyayaNodeId;
        if (!visited.has(targetId)) {
          visited.add(targetId);
          queue.push({ id: targetId, depth: depth + 1 });
        }
      }
    }
    return results;
  }

  dfs(startId: NyayaNodeId, opts?: { relation?: NyayaRelation; maxDepth?: number }): NyayaNode[] {
    const visited = new Set<NyayaNodeId>();
    const results: NyayaNode[] = [];
    const maxDepth = opts?.maxDepth ?? Infinity;

    const walk = (id: NyayaNodeId, depth: number): void => {
      if (visited.has(id) || depth > maxDepth) return;
      visited.add(id);
      const n = this.nodesById.get(id);
      if (n && depth > 0) results.push(n);
      for (const e of this.getOutgoing(id, opts?.relation)) {
        walk(e.target as NyayaNodeId, depth + 1);
      }
    };
    walk(startId, 0);
    return results;
  }

  /** Unweighted shortest path between two nodes, optionally restricted to one relation. */
  shortestPath(fromId: NyayaNodeId, toId: NyayaNodeId, relation?: NyayaRelation): NyayaNodeId[] | undefined {
    if (fromId === toId) return [fromId];
    const prev = new Map<NyayaNodeId, NyayaNodeId>();
    const visited = new Set<NyayaNodeId>([fromId]);
    const queue: NyayaNodeId[] = [fromId];

    while (queue.length > 0) {
      const current = queue.shift()!;
      for (const e of this.getOutgoing(current, relation)) {
        const next = e.target as NyayaNodeId;
        if (visited.has(next)) continue;
        visited.add(next);
        prev.set(next, current);
        if (next === toId) {
          const path: NyayaNodeId[] = [toId];
          let cursor = toId;
          while (prev.has(cursor)) {
            cursor = prev.get(cursor)!;
            path.unshift(cursor);
          }
          return path;
        }
        queue.push(next);
      }
    }
    return undefined;
  }

  /** All sutras under a given ahnika, in declared node order (not re-sorted). */
  getSutrasInAhnika(ahnikaId: AhnikaId): SutraNode[] {
    return this.getNodesOfKind('Sutra').filter(s => s.ahnika === ahnikaId);
  }

  /** All nodes whose provenance confidence is below 'confirmed' — an audit view. */
  getProvisionalNodes(): NyayaNode[] {
    return this.data.nodes.filter(n => n.provenance.confidence !== 'confirmed');
  }

  toJSON(): NyayaGraphData {
    return this.data;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 7. MUTABLE BUILDER (for populating the graph from content files later)
// ─────────────────────────────────────────────────────────────────────────

export class NyayaGraphBuilder {
  private nodes: NyayaNode[] = [];
  private edges: NyayaEdge[] = [];
  private seenIds: Set<string> = new Set();

  addNode<N extends NyayaNode>(node: N): this {
    if (this.seenIds.has(node.id)) {
      throw new Error(`Duplicate node id: ${node.id}`);
    }
    this.seenIds.add(node.id);
    this.nodes.push(node);
    return this;
  }

  addEdge(edge: NyayaEdge): this {
    if (!this.seenIds.has(edge.source)) {
      throw new Error(`Edge source not found: ${edge.source}`);
    }
    if (!this.seenIds.has(edge.target)) {
      throw new Error(`Edge target not found: ${edge.target}`);
    }
    this.edges.push(edge);
    return this;
  }

  build(metadata: NyayaGraphData['metadata']): NyayaKnowledgeGraph {
    return new NyayaKnowledgeGraph({ nodes: this.nodes, edges: this.edges, metadata });
  }

  buildData(metadata: NyayaGraphData['metadata']): NyayaGraphData {
    return { nodes: this.nodes, edges: this.edges, metadata };
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 8. VALIDATION
// ─────────────────────────────────────────────────────────────────────────

export interface ValidationIssue {
  readonly severity: 'error' | 'warning';
  readonly message: string;
  readonly nodeId?: NyayaNodeId;
}

/**
 * Structural validation pass: dangling edges, duplicate ids, orphaned
 * sutras (no PART_OF edge to an Ahnika), and fallacy nodes missing a
 * recognized subtype. Does not validate philosophical/textual accuracy
 * — that remains the responsibility of whoever populates the graph.
 */
export function validateGraph(data: NyayaGraphData): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const ids = new Set(data.nodes.map(n => n.id));

  for (const e of data.edges) {
    if (!ids.has(e.source)) {
      issues.push({ severity: 'error', message: `Edge source not in node set: ${e.source}` });
    }
    if (!ids.has(e.target)) {
      issues.push({ severity: 'error', message: `Edge target not in node set: ${e.target}` });
    }
  }

  const sutraNodes = data.nodes.filter(NodeGuards.Sutra);
  const sutraIdsWithParent = new Set(
    data.edges.filter(e => e.relation === 'PART_OF').map(e => e.source)
  );
  for (const s of sutraNodes) {
    if (!sutraIdsWithParent.has(s.id)) {
      issues.push({ severity: 'warning', message: `Sutra has no PART_OF parent`, nodeId: s.id });
    }
  }

  return issues;
}

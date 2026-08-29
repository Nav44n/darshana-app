export interface Node {
  id: string;
  label: string;
  type: 'Tattva' | 'Guna' | 'Concept' | 'Verse';
  properties: Record<string, any>;
}

export interface Edge {
  source: string;
  target: string;
  relation: 'EVOLVES_FROM' | 'COMPOSED_OF' | 'OBSERVES' | 'LIBERATES' | 'ACTIVATED_BY' | 'INCLUDES';
  properties: Record<string, any>;
}

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

export class DarshanaGraph {
  public nodes: Map<string, Node> = new Map();
  public edges: Edge[] = [];

  constructor(data: GraphData) {
    data.nodes.forEach((n: Node) => this.nodes.set(n.id, n));
    this.edges = data.edges;
  }

  getEvolutesOf(sourceId: string): Node[] {
    return this.edges
      .filter(e => e.relation === 'EVOLVES_FROM' && e.target === sourceId)
      .map(e => this.nodes.get(e.source)!);
  }

  getDescendantsOf(sourceId: string, depth = 0): { node: Node, depth: number }[] {
    let results: { node: Node, depth: number }[] = [];
    const children = this.getEvolutesOf(sourceId);
    
    for (const child of children) {
      results.push({ node: child, depth: depth + 1 });
      results = results.concat(this.getDescendantsOf(child.id, depth + 1));
    }
    return results;
  }

  getComponentsOfConcept(conceptId: string): Node[] {
    return this.edges
      .filter(e => e.relation === 'INCLUDES' && e.source === conceptId)
      .map(e => this.nodes.get(e.target)!);
  }

  getTattvasByDominantGuna(gunaId: string): Node[] {
    return this.edges
      .filter(e => e.relation === 'EVOLVES_FROM' && e.properties.dominant_guna === gunaId)
      .map(e => this.nodes.get(e.source)!);
  }
}

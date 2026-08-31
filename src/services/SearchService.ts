import { allTexts } from '../content';
import { Verse, Concept } from '../types/content';
import graphData from '../knowledge/darshana-knowledge-graph.json';
import { Node } from '../knowledge/query_graph';

export type SearchResultType = 'verse' | 'concept' | 'node';

export interface SearchResult {
  type: SearchResultType;
  id: string; // The ID of the item
  title: string; // Display title
  subtitle?: string; // e.g. the translation snippet or summary
  textId?: string; // for verses
  systemId?: string; // for verses/concepts
}

class SearchServiceEngine {
  private indexed = false;
  private verses: (Verse & { systemId: string; textId: string })[] = [];
  private concepts: (Concept & { systemId: string; textId: string })[] = [];
  private nodes: Node[] = [];

  public init() {
    if (this.indexed) return;
    
    // Index Verses and Concepts
    const texts = allTexts();
    texts.forEach(text => {
      text.verses.forEach(v => {
        this.verses.push({ ...v, systemId: text.system, textId: text.id });
      });
      text.concepts.forEach(c => {
        this.concepts.push({ ...c, systemId: text.system, textId: text.id });
      });
    });

    // Index Nodes
    this.nodes = graphData.nodes as Node[];

    this.indexed = true;
  }

  public getNode(id: string): Node | undefined {
    this.init();
    return this.nodes.find(n => n.id === id);
  }

  public search(query: string): SearchResult[] {
    this.init();
    
    const terms = query.toLowerCase().split(/[\s-]+/).filter(t => t.length > 2);
    if (terms.length === 0) return [];

    const results: SearchResult[] = [];

    // Search Verses
    this.verses.forEach(v => {
      const textEn = v.content?.en;
      const textMl = v.content?.ml;
      const content = `${textEn?.translation || ''} ${textEn?.commentary || ''} ${textEn?.keyPoints?.join(' ') || ''} ${textMl?.translation || ''} ${v.iast} ${v.devanagari || ''}`.toLowerCase();
      
      const textAbbreviations: Record<string, string> = {
        'samkhya-karika': 'SK',
        'yoga-sutras': 'YS',
        'nyaya-sutras': 'NS',
        'vaisesika-sutras': 'VS',
        'purva-mimamsa-sutras': 'PMS',
        'brahma-sutras': 'BS'
      };
      
      if (terms.every(term => content.includes(term))) {
        results.push({
          type: 'verse',
          id: v.id,
          title: `${textAbbreviations[v.textId] || v.textId} ${v.number}`,
          subtitle: (textEn?.translation || '').substring(0, 100) + '...',
          textId: v.textId,
          systemId: v.systemId,
        });
      }
    });

    // Search Concepts
    this.concepts.forEach(c => {
      const textEn = c.content?.en;
      const textMl = c.content?.ml;
      const content = `${textEn?.title || ''} ${textEn?.summary || ''} ${textMl?.title || ''}`.toLowerCase();
      if (terms.every(term => content.includes(term))) {
        results.push({
          type: 'concept',
          id: c.id,
          title: textEn?.title || '',
          subtitle: (textEn?.summary || '').substring(0, 100) + '...',
          textId: c.textId,
          systemId: c.systemId,
        });
      }
    });

    // Search Nodes
    this.nodes.forEach(n => {
      const content = `${n.label} ${n.type} ${n.properties.description || ''} ${n.properties.sanskrit || ''}`.toLowerCase();
      if (terms.every(term => content.includes(term))) {
        results.push({
          type: 'node',
          id: n.id,
          title: n.label,
          subtitle: `[${n.type}] ${n.properties.description ? n.properties.description.substring(0, 80) + '...' : ''}`,
        });
      }
    });

    return results;
  }
}

export const SearchService = new SearchServiceEngine();

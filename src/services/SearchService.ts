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

export function stripDiacritics(str: string): string {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

class SearchServiceEngine {
  private indexed = false;
  private verses: (Verse & { systemId: string; textId: string; _shadow: string })[] = [];
  private concepts: (Concept & { systemId: string; textId: string; _shadow: string })[] = [];
  private nodes: (Node & { _shadow: string })[] = [];

  public init() {
    if (this.indexed) return;
    
    // Index Verses and Concepts
    const texts = allTexts();
    texts.forEach(text => {
      text.verses.forEach(v => {
        const textEn = v.content?.en;
        const textMl = v.content?.ml;
        const content = `${textEn?.translation || ''} ${textEn?.commentary || ''} ${textEn?.keyPoints?.join(' ') || ''} ${textMl?.translation || ''} ${v.iast} ${v.devanagari || ''}`;
        this.verses.push({ ...v, systemId: text.system, textId: text.id, _shadow: stripDiacritics(content) });
      });
      text.concepts.forEach(c => {
        const textEn = c.content?.en;
        const textMl = c.content?.ml;
        const content = `${textEn?.title || ''} ${textEn?.summary || ''} ${textMl?.title || ''}`;
        this.concepts.push({ ...c, systemId: text.system, textId: text.id, _shadow: stripDiacritics(content) });
      });
    });

    // Index Nodes
    const rawNodes = graphData.nodes as Node[];
    this.nodes = rawNodes.map(n => {
      const content = `${n.label} ${n.type} ${n.properties.description || ''} ${n.properties.sanskrit || ''}`;
      return { ...n, _shadow: stripDiacritics(content) };
    });

    this.indexed = true;
  }

  public getNode(id: string): Node | undefined {
    this.init();
    return this.nodes.find(n => n.id === id);
  }

  public search(query: string): SearchResult[] {
    this.init();
    
    const terms = stripDiacritics(query).split(/[\s-]+/).filter(t => t.length > 2);
    if (terms.length === 0) return [];

    const results: (SearchResult & { score: number })[] = [];

    const getMatchScore = (terms: string[], title: string, content: string) => {
      let score = 0;
      const shadowTitle = stripDiacritics(title);
      const shadowContent = stripDiacritics(content);
      
      terms.forEach(term => {
        if (shadowTitle.includes(term)) {
          score += 100;
          if (shadowTitle === term) score += 50; // Exact match bonus
        }
        else if (shadowContent.includes(term)) score += 10;
      });
      return score;
    };

    // Search Verses
    this.verses.forEach(v => {
      const textAbbreviations: Record<string, string> = {
        'samkhya-karika': 'SK',
        'yoga-sutras': 'YS',
        'nyaya-sutras': 'NS',
        'vaisesika-sutras': 'VS',
        'purva-mimamsa-sutras': 'PMS',
        'brahma-sutras': 'BS'
      };
      
      if (terms.every(term => v._shadow.includes(term))) {
        const title = `${textAbbreviations[v.textId] || v.textId} ${v.number}`;
        const content = v.content?.en?.translation || '';
        results.push({
          type: 'verse',
          id: v.id,
          title,
          subtitle: content.substring(0, 100) + '...',
          textId: v.textId,
          systemId: v.systemId,
          score: getMatchScore(terms, title, content)
        });
      }
    });

    // Search Concepts
    this.concepts.forEach(c => {
      if (terms.every(term => c._shadow.includes(term))) {
        const title = c.content?.en?.title || '';
        const content = c.content?.en?.summary || '';
        results.push({
          type: 'concept',
          id: c.id,
          title,
          subtitle: content.substring(0, 100) + '...',
          textId: c.textId,
          systemId: c.systemId,
          score: getMatchScore(terms, title, content) + 20 // Concepts get a base boost over verses
        });
      }
    });

    // Search Nodes
    this.nodes.forEach(n => {
      if (terms.every(term => n._shadow.includes(term))) {
        const title = n.label;
        const content = n.properties.description || '';
        results.push({
          type: 'node',
          id: n.id,
          title,
          subtitle: `[${n.type}] ${content.substring(0, 80) + '...'}`,
          score: getMatchScore(terms, title, content) + 30 // Nodes get highest base boost
        });
      }
    });

    return results.sort((a, b) => b.score - a.score);
  }
}

export const SearchService = new SearchServiceEngine();

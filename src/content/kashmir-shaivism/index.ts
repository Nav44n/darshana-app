import { System, ClassicalText } from '../../types/content';
import { tantralokaConceptsEn } from './tantraloka-concepts-en';

export const tantralokaText: ClassicalText = {
  id: 'tantraloka',
  title: 'Tantrāloka',
  transliteratedTitle: 'Tantrāloka',
  author: 'Abhinavagupta',
  system: 'Kashmir Shaivism',
  sources: [],
  verses: [], // Verses not yet mapped
  concepts: tantralokaConceptsEn.map(c => ({
    id: c.id,
    content: {
      en: {
        title: `${c.sanskrit} (${c.iast}) - ${c.english}`,
        summary: c.definition + "\n\nSignificance: " + c.significance
      }
    },
    relatedVerseIds: []
  })),
};

export const kashmirShaivismSystem: System = {
  id: 'kashmir-shaivism',
  title: 'Kashmir Shaivism',
  subtitle: 'The non-dual philosophy of Trika and Spanda',
  texts: [tantralokaText],
  thread: tantralokaConceptsEn.map((c, index) => ({
    id: `ks-step-${index + 1}`,
    textId: 'tantraloka',
    conceptId: c.id,
    content: {
      en: {
        title: c.english,
        narrative: `Part of the master ontology of Kashmir Shaivism.\n\nCategory: ${c.category}\n\n${c.definition}`
      }
    }
  })),
};

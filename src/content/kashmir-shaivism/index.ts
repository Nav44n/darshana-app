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
  thread: [], // Guided thread not yet mapped
};

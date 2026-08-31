import { ClassicalText, Concept } from '../../types/content';
import { brahmaSutrasEn } from './brahma-sutras-en';
import { brahmaSutrasEnAdhyaya2 } from './brahma-sutras-en-adhyaya2';
import { brahmaSutrasEnAdhyaya3Part1 } from './brahma-sutras-en-adhyaya3-1';
import { brahmaSutrasEnAdhyaya3Part2 } from './brahma-sutras-en-adhyaya3-2';
import { brahmaSutrasEnAdhyaya4 } from './brahma-sutras-en-adhyaya4';
import { brahmaSutrasMl } from './brahma-sutras-ml';
import { brahmaSutrasConceptsEn } from './brahma-sutras-concepts-en';
import { brahmaSutrasConceptsMl } from './brahma-sutras-concepts-ml';

export const brahmaSutrasText: ClassicalText = {
  id: 'brahma-sutras',
  title: 'Brahma Sūtras',
  transliteratedTitle: 'Brahma Sūtras',
  author: 'Bādarāyaṇa (with Śaṅkara Bhāṣya)',
  system: 'vedanta',
  sources: [{ name: 'Brahma Sūtras with Śaṅkarācārya Commentary', status: 'integrated' }],
  verses: [...brahmaSutrasEn, ...brahmaSutrasEnAdhyaya2, ...brahmaSutrasEnAdhyaya3Part1, ...brahmaSutrasEnAdhyaya3Part2, ...brahmaSutrasEnAdhyaya4].map(v => {
    const mlVerse = brahmaSutrasMl.find(m => m.id === v.id);
    return {
      id: v.id,
      number: v.id,
      section: `Adhyaya ${v.adhyaya}, Pada ${v.pada}`,
      devanagari: (v as any).sanskrit || '',
      iast: '',
      content: {
        en: {
          translation: v.translation,
        },
        ...(mlVerse && {
          ml: {
            translation: mlVerse.translation,
          }
        })
      }
    };
  }),
  concepts: brahmaSutrasConceptsEn.map((c: any) => {
    const mlConcept = brahmaSutrasConceptsMl.find(m => m.id === c.id);
    return {
      id: c.id,
      diagramId: c.diagramId,
      relatedVerseIds: [],
      content: {
        en: {
          title: `${c.sanskrit} - ${c.term}`,
          summary: `**Category**: ${c.category}\n\n**Definition**: ${c.basicDefinition}\n\n**Explanation**: ${c.advancedExplanation}`
        },
        ...(mlConcept && {
          ml: {
            title: `${mlConcept.sanskrit} - ${mlConcept.term}`,
            summary: `**Category**: ${mlConcept.category}\n\n**Definition**: ${mlConcept.basicDefinition}\n\n**Explanation**: ${mlConcept.advancedExplanation}`
          }
        })
      }
    };
  })
};

import { ClassicalText } from '../../types/content';
import { buildClassicalText } from '../factory';
import { brahmaSutrasEn } from './brahma-sutras-en';
import { brahmaSutrasEnAdhyaya2 } from './brahma-sutras-en-adhyaya2';
import { brahmaSutrasEnAdhyaya3Part1 } from './brahma-sutras-en-adhyaya3-1';
import { brahmaSutrasEnAdhyaya3Part2 } from './brahma-sutras-en-adhyaya3-2';
import { brahmaSutrasEnAdhyaya4 } from './brahma-sutras-en-adhyaya4';
import { brahmaSutrasMl } from './brahma-sutras-ml';
import { brahmaSutrasConceptsEn } from './brahma-sutras-concepts-en';
import { brahmaSutrasConceptsMl } from './brahma-sutras-concepts-ml';

const allEnVerses = [
  ...brahmaSutrasEn, 
  ...brahmaSutrasEnAdhyaya2, 
  ...brahmaSutrasEnAdhyaya3Part1, 
  ...brahmaSutrasEnAdhyaya3Part2, 
  ...brahmaSutrasEnAdhyaya4
];

export const brahmaSutrasText: ClassicalText = buildClassicalText(
  {
    id: 'brahma-sutras',
    title: 'Brahma Sutras',
    transliteratedTitle: 'Brahma Sutras',
    author: 'Bādarāyaṇa (with Śaṅkara Bhāṣya)',
    system: 'vedanta',
    sources: [{ name: 'Brahma Sutras with Śaṅkarācārya Commentary', status: 'pending' }]
  },
  {
    en: allEnVerses,
    ml: brahmaSutrasMl
  },
  {
    en: brahmaSutrasConceptsEn,
    ml: brahmaSutrasConceptsMl
  }
);

import { ClassicalText } from '../../types/content';
import { buildClassicalText, buildSystemThread } from '../factory';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaSutrasMalayalam } from './nyaya-sutras-ml';
import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';
import { nyayaSutrasConceptsMl } from './nyaya-sutras-concepts-ml';
import { nyayaSutrasThreadEn } from './nyaya-sutras-thread-en';
import { nyayaSutrasThreadMl } from './nyaya-sutras-thread-ml';

const mappedNyayaConceptsEn = nyayaConceptsEn.map((c: any) => ({
  id: c.id,
  title: `${c.sanskrit} (${c.iast}) - ${c.english}`,
  summary: `Category: ${c.category}\n\nDefinition: ${c.definition}\n\nSignificance: ${c.significance}`,
  relatedVerseIds: []
}));

export const nyayaSutras: ClassicalText = buildClassicalText(
  {
    id: 'nyaya-sutras',
    title: 'Nyāya Sūtra',
    transliteratedTitle: 'Nyāya Sūtra',
    author: 'Gautama',
    system: 'nyaya',
    sources: [{ name: 'Vātsyāyana Commentary', status: 'integrated' }]
  },
  {
    en: nyayaSutrasEn,
    ml: nyayaSutrasMalayalam
  },
  {
    en: mappedNyayaConceptsEn,
    ml: nyayaSutrasConceptsMl
  }
);

export const nyayaSutrasThread = buildSystemThread('nyaya-sutras', {
  en: nyayaSutrasThreadEn,
  ml: nyayaSutrasThreadMl
});

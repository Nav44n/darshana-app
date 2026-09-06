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
  summary: `Category: ${c.category}\n\nDefinition: ${c.definition}\n\nSignificance: ${c.significance}${c.forBeginners ? "\n\nFor Beginners: " + c.forBeginners : ""}`,
  relatedVerseIds: []
}));

export const nyayaSutras: ClassicalText = buildClassicalText(
  {
    id: 'nyaya-sutras',
    title: 'Nyāya Sūtra',
    transliteratedTitle: 'Nyāya Sūtra',
    author: 'Gautama',
    system: 'nyaya',
    verseTerm: 'Sūtra',
    sources: [
      { name: 'Vātsyāyana Bhāṣya', year: 'c. 4th-5th century CE', status: 'integrated' },
      { name: 'Uddyotakara Vārtika', year: 'c. 6th century CE', status: 'integrated' },
      { name: 'Vācaspati Miśra Tātparyaṭīkā', year: 'c. 9th century CE', status: 'integrated' },
      { name: 'Udayanācārya Pariśuddhi', year: 'c. 10th century CE', status: 'integrated' },
      { name: 'Dr. Gangānātha Jhā Critical Edition', year: '1915-1919', status: 'integrated' }
    ]
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

const enrichedThreadEn = nyayaSutrasThreadEn.map((step: any) => {
  const concept = nyayaConceptsEn.find(c => c.id === step.conceptId);
  if (concept && concept.forBeginners) {
    return { ...step, narrative: step.narrative + "\n\nFor Beginners: " + concept.forBeginners };
  }
  return step;
});

export const nyayaSutrasThread = buildSystemThread('nyaya-sutras', {
  en: enrichedThreadEn,
  ml: nyayaSutrasThreadMl
});

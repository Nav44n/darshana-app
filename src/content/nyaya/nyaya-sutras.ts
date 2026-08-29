import { ClassicalText, Verse, Concept, ThreadStep } from '../../types/content';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaSutrasMalayalam } from './nyaya-sutras-ml';
import { nyayaSutrasConceptsEn } from './nyaya-sutras-concepts-en';
import { nyayaSutrasConceptsMl } from './nyaya-sutras-concepts-ml';
import { nyayaSutrasThreadEn } from './nyaya-sutras-thread-en';
import { nyayaSutrasThreadMl } from './nyaya-sutras-thread-ml';

export const nyayaVerses: Verse[] = nyayaSutrasEn.map(v => {
  const mlSutra = nyayaSutrasMalayalam.find(m => `${m.id}` === v.id);
  
  return {
    id: v.id,
    number: v.number,
    section: v.section,
    devanagari: v.devanagari,
    iast: v.iast,
    diagramId: v.diagramId,
    conceptIds: v.conceptIds,
    interpretiveNotes: undefined,
    content: {
      en: {
        translation: v.translation,
        commentary: v.commentary,
        keyPoints: v.keyPoints
      },
      ml: mlSutra ? {
        translation: mlSutra.malayalamSutra,
        commentary: mlSutra.malayalamCommentary
      } : undefined
    }
  };
});

export const nyayaConcepts: Concept[] = nyayaSutrasConceptsEn.map((c: any) => ({
  id: c.id,
  diagramId: c.diagramId,
  relatedVerseIds: c.relatedVerseIds,
  content: {
    en: {
      title: c.title,
      summary: c.summary
    },
    ml: nyayaSutrasConceptsMl[c.id]
  }
}));

export const nyayaSutrasThread: Omit<ThreadStep, 'textId'>[] = nyayaSutrasThreadEn.map((t: any) => ({
  id: t.id,
  conceptId: t.conceptId,
  verseIds: t.verseIds,
  content: {
    en: { title: t.title, narrative: t.narrative },
    ml: nyayaSutrasThreadMl[t.id]
  }
}));

export const nyayaSutras: ClassicalText = {
  id: 'nyaya-sutras',
  title: 'न्यायसूत्र',
  transliteratedTitle: 'Nyāya Sūtra',
  author: 'Gautama',
  system: 'nyaya',
  sources: [{ name: 'Vātsyāyana Commentary', status: 'integrated' }],
  verses: nyayaVerses,
  concepts: nyayaConcepts,
};

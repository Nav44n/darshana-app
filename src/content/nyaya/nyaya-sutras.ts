import { ClassicalText, Verse, Concept, ThreadStep } from '../../types/content';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaSutrasMalayalam } from './nyaya-sutras-ml';
import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';
import { nyayaSutrasConceptsMl } from './nyaya-sutras-concepts-ml';
import { nyayaSutrasThreadEn } from './nyaya-sutras-thread-en';
import { nyayaSutrasThreadMl } from './nyaya-sutras-thread-ml';

export const nyayaVerses: Verse[] = nyayaSutrasEn.map(v => {
  const mlSutra = nyayaSutrasMalayalam.find((m: any) => `${m.id}` === v.id);
  
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
        translation: mlSutra.translation,
        commentary: mlSutra.commentary,
        keyPoints: mlSutra.keyPoints
      } : undefined
    }
  };
});

export const nyayaConcepts: Concept[] = nyayaConceptsEn.map((c: any) => ({
  id: c.id,
  relatedVerseIds: [],
  content: {
    en: {
      title: `${c.sanskrit} (${c.iast}) - ${c.english}`,
      summary: `**Category**: ${c.category}\n\n**Definition**: ${c.definition}\n\n**Significance**: ${c.significance}`
    },
    ml: nyayaSutrasConceptsMl.find((m: any) => m.id === c.id)
  }
}));

export const nyayaSutrasThread: Omit<ThreadStep, 'textId'>[] = nyayaSutrasThreadEn.map((t: any, index: number) => {
  const mlThread = nyayaSutrasThreadMl.find((m: any) => m.id === t.id) || nyayaSutrasThreadMl[index];
  return {
    id: t.id,
    conceptId: t.conceptId,
    verseIds: t.verseIds,
    content: {
      en: { title: t.title, narrative: t.narrative },
      ml: mlThread ? { title: mlThread.title, narrative: mlThread.narrative } : undefined
    }
  };
});

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

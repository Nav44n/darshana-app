import { ClassicalText, Verse, Concept, ThreadStep } from '../../types/content';
import { nyayaSutrasEn } from './nyaya-sutras-en';
import { nyayaSutrasMalayalam } from './nyaya-sutras-ml';
import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';
import { nyayaSutrasConceptsMl } from './nyaya-sutras-concepts-ml';
import { nyayaSutrasThreadEn } from './nyaya-sutras-thread-en';
import { nyayaSutrasThreadMl } from './nyaya-sutras-thread-ml';

// Build O(1) lookup maps for Malayalam translations
const mlVersesMap = new Map(nyayaSutrasMalayalam.map((m: any) => [`${m.id}`, m]));
const mlConceptsMap = new Map(nyayaSutrasConceptsMl.map((m: any) => [m.id, m]));
const mlThreadMap = new Map(nyayaSutrasThreadMl.map((m: any) => [m.id, m]));

export const nyayaVerses: Verse[] = nyayaSutrasEn.map(v => {
  const mlSutra = mlVersesMap.get(v.id);
  
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
    ml: mlConceptsMap.get(c.id)
  }
}));

export const nyayaSutrasThread: Omit<ThreadStep, 'textId'>[] = nyayaSutrasThreadEn.map((t: any) => {
  const mlThread = mlThreadMap.get(t.id);
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

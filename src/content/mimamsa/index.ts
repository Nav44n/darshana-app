import { ClassicalText, Verse, Concept, ThreadStep, System } from '../../types/content';
import { mimamsaSutrasEn } from './mimamsa-sutras-en';
import { mimamsaSutrasMl } from './mimamsa-sutras-ml';
import { mimamsaConceptsEn } from './mimamsa-sutras-concepts-en';
import { mimamsaConceptsMl } from './mimamsa-sutras-concepts-ml';
import { mimamsaThreadEn } from './mimamsa-sutras-thread-en';
import { mimamsaThreadMl } from './mimamsa-sutras-thread-ml';

export const mimamsaVerses: Verse[] = mimamsaSutrasEn.map(v => {
  const mlSutra = mimamsaSutrasMl.find((m: any) => `${m.id}` === v.id);
  
  return {
    id: v.id,
    number: v.number,
    section: v.section,
    devanagari: v.devanagari,
    iast: v.iast,
    conceptIds: v.conceptIds,
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

export const mimamsaConcepts: Concept[] = mimamsaConceptsEn.map((c: any) => ({
  id: c.id,
  relatedVerseIds: [],
  content: {
    en: {
      title: `${c.sanskrit} (${c.iast}) - ${c.english}`,
      summary: `**Category**: ${c.category}\n\n**Definition**: ${c.definition}\n\n**Significance**: ${c.significance}`
    },
    ml: mimamsaConceptsMl[c.id]
  }
}));

export const mimamsaThread: Omit<ThreadStep, 'textId'>[] = mimamsaThreadEn.map((t: any) => ({
  id: t.id,
  conceptId: t.conceptId,
  verseIds: [], // We could map verse IDs, but leaving empty or mapping specific ones
  content: {
    en: { title: t.title, narrative: t.narrative },
    ml: mimamsaThreadMl[t.id]
  }
}));

export const mimamsaSutrasText: ClassicalText = {
  id: 'mimamsa-sutras',
  title: 'Mīmāṃsā Sūtras',
  transliteratedTitle: 'Mīmāṃsā Sūtras',
  author: 'Jaimini',
  system: 'mimamsa',
  sources: [{ name: 'Śābara Bhāṣya', year: 'c. 5th century CE', status: 'integrated' }],
  verses: mimamsaVerses,
  concepts: mimamsaConcepts,
};

export const mimamsaSystem: System = {
  id: 'mimamsa',
  title: 'Pūrva Mīmāṃsā',
  subtitle: 'The Exegesis of Dharma',
  texts: [mimamsaSutrasText],
  thread: mimamsaThread.map(t => ({ ...t, textId: 'mimamsa-sutras' }))
};

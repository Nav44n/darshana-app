import { ClassicalText, Verse, Concept, ThreadStep } from '../../types/content';
import { yogaSutrasEn } from './yoga-sutras-en';
import { yogaSutrasMalayalam, yogaSutrasSamadhiPadaRemaining, yogaSutrasSadhanaPada1to15, yogaSutrasSadhanaPada16to30, yogaSutrasSadhanaPada31to55, yogaSutrasVibhutiPada1to20, yogaSutrasVibhutiPada21to55, yogaSutrasKaivalyaPada } from './yoga-sutras-ml';
import { yogaSutrasConceptsEn } from './yoga-sutras-concepts-en';
import { yogaSutrasConceptsMl } from './yoga-sutras-concepts-ml';
import { yogaSutrasThreadEn } from './yoga-sutras-thread-en';
import { yogaSutrasThreadMl } from './yoga-sutras-thread-ml';

const samadhiPada = [...yogaSutrasMalayalam, ...yogaSutrasSamadhiPadaRemaining].map(m => ({ ...m, chapter: 'I' }));
const sadhanaPada = [...yogaSutrasSadhanaPada1to15, ...yogaSutrasSadhanaPada16to30, ...yogaSutrasSadhanaPada31to55].map(m => ({ ...m, chapter: 'II' }));
const vibhutiPada = [...yogaSutrasVibhutiPada1to20, ...yogaSutrasVibhutiPada21to55].map(m => ({ ...m, chapter: 'III' }));
const kaivalyaPada = [...yogaSutrasKaivalyaPada].map(m => ({ ...m, chapter: 'IV' }));

const allYogaSutrasMl = [...samadhiPada, ...sadhanaPada, ...vibhutiPada, ...kaivalyaPada];

export const yogaVerses: Verse[] = yogaSutrasEn.map(v => {
  const mlSutra = allYogaSutrasMl.find(m => `${m.chapter}.${m.id}` === v.id);
  
  return {
    id: v.id,
    number: v.number,
    section: v.section,
    devanagari: v.devanagari,
    iast: v.iast,
    diagramId: v.diagramId,
    conceptIds: v.conceptIds,
    interpretiveNotes: v.interpretiveNotes,
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

export const yogaConcepts: Concept[] = yogaSutrasConceptsEn.map(c => ({
  id: c.id,
  diagramId: c.diagramId,
  relatedVerseIds: c.relatedVerseIds,
  content: {
    en: {
      title: c.title,
      summary: c.summary
    },
    ml: yogaSutrasConceptsMl[c.id]
  }
}));

export const yogaSutrasThread: Omit<ThreadStep, 'textId'>[] = yogaSutrasThreadEn.map(t => ({
  id: t.id,
  conceptId: t.conceptId,
  verseIds: t.verseIds,
  content: {
    en: t.content.en,
    ml: yogaSutrasThreadMl[t.id]
  }
}));

export const yogaSutras: ClassicalText = {
  id: 'yoga-sutras',
  title: 'योगसूत्र',
  transliteratedTitle: 'Yoga Sūtra',
  author: 'Patañjali',
  system: 'yoga',
  sources: [{ name: 'Edwin F. Bryant', year: '2014', status: 'integrated' }],
  verses: yogaVerses,
  concepts: yogaConcepts,
};

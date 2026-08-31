import { ClassicalText, Verse, Concept, ThreadStep } from '../../types/content';
import { samkhyaKarikaEn } from './samkhya-karika-en';
import { samkhyaKarikaMl } from './samkhya-karika-ml';
import { samkhyaKarikaConceptsEn } from './samkhya-karika-concepts-en';
import { samkhyaKarikaConceptsMl } from './samkhya-karika-concepts-ml';
import { samkhyaKarikaThread } from './samkhya-karika-thread';

export const samkhyaVerses: Verse[] = samkhyaKarikaEn.map(v => ({
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
    ml: samkhyaKarikaMl[v.id]
  }
}));

export const samkhyaConcepts: Concept[] = samkhyaKarikaConceptsEn.map(c => ({
  id: c.id,
  diagramId: c.diagramId,
  relatedVerseIds: c.relatedVerseIds,
  content: {
    en: {
      title: c.title,
      summary: c.summary
    },
    ml: samkhyaKarikaConceptsMl[c.id]
  }
}));

export const samkhyaKarika: ClassicalText = {
  id: 'samkhya-karika',
  title: 'Sāṃkhyakārikā',
  transliteratedTitle: 'Sāṃkhyakārikā',
  author: 'Īśvarakṛṣṇa',
  system: 'samkhya',
  sources: [{ name: 'Vācaspatimiśra', year: '9th century CE', status: 'integrated' }],
  verses: samkhyaVerses,
  concepts: samkhyaConcepts,
};

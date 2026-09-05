import { ClassicalText } from '../../types/content';
import { buildClassicalText } from '../factory';
import { samkhyaKarikaEn } from './samkhya-karika-en';
import { samkhyaKarikaMl } from './samkhya-karika-ml';
import { samkhyaKarikaConceptsEn } from './samkhya-karika-concepts-en';
import { samkhyaKarikaConceptsMl } from './samkhya-karika-concepts-ml';

export const samkhyaKarika: ClassicalText = buildClassicalText(
  {
    id: 'samkhya-karika',
    title: 'Sāṃkhyakārikā',
    transliteratedTitle: 'Sāṃkhyakārikā',
    author: 'Īśvarakṛṣṇa',
    system: 'samkhya',
    sources: [{ name: 'Vācaspatimiśra', year: '9th century CE', status: 'integrated' }]
  },
  {
    en: samkhyaKarikaEn,
    ml: samkhyaKarikaMl
  },
  {
    en: samkhyaKarikaConceptsEn,
    ml: samkhyaKarikaConceptsMl
  }
);

import { ClassicalText } from '../../types/content';
import { vaisesikaSutrasEn } from './vaisesika-sutras-en';
import { vaisesikaSutrasBooks4To8 } from './vaisesika-sutras-en-books4-8';
import { vaisesikaSutrasBooks9And10 } from './vaisesika-sutras-en-books9-10';
import { vaisesikaSutrasBook8 } from './vaisesika-sutras-en-book8';
import { vaisesikaSutrasMl } from './vaisesika-sutras-ml';
import { vaisesikaConceptsEn } from './vaisesika-sutras-concepts-en';

const allVaisesikaVersesEn = [...vaisesikaSutrasEn, ...vaisesikaSutrasBooks4To8.filter(s => s.book !== 8), ...vaisesikaSutrasBook8, ...vaisesikaSutrasBooks9And10];
const mlVersesMap = new Map(vaisesikaSutrasMl.map(m => [m.id, m]));

export const vaisesikaSutrasText: ClassicalText = {
  id: 'vaisesika-sutras',
  title: 'Vaiśeṣika Sūtras',
  transliteratedTitle: 'Vaiśeṣika Sūtra',
  author: 'Maharṣi Kaṇāda',
  system: 'vaisesika',
  sources: [
    { name: 'Vaiśeṣika Sūtras English Reference', status: 'integrated' }
  ],
  verses: allVaisesikaVersesEn.map(v => {
    const mlVerse = mlVersesMap.get(v.id);
    return {
      id: v.id,
      number: v.id,
      section: v.topic,
      devanagari: v.sanskrit,
      iast: '', // Optional/missing in source
      diagramId: v.diagramId,
      conceptIds: v.conceptIds,
      content: {
        en: {
          translation: v.text,
          commentary: v.commentary,
        },
        ...(mlVerse && {
          ml: {
            translation: mlVerse.text,
            commentary: mlVerse.commentary,
          }
        })
      }
    };
  }),
  concepts: vaisesikaConceptsEn,
};

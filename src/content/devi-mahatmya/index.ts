import { System, ClassicalText, SystemId } from '../../types/content';
import { buildClassicalText, buildSystemThread } from '../factory';
import { deviMahatmyaVersesEn } from './devi-mahatmya-verses-en';
import { deviMahatmyaVersesMl } from './devi-mahatmya-verses-ml';
import { deviMahatmyaConceptsEn } from './devi-mahatmya-concepts-en';
import { deviMahatmyaConceptsMl } from './devi-mahatmya-concepts-ml';
import { deviMahatmyaThreadEn } from './devi-mahatmya-thread-en';
import { deviMahatmyaThreadMl } from './devi-mahatmya-thread-ml';
import {
  guptavatiConceptsEn,
  guptavatiConceptsMl,
  guptavatiIntroTopics,
  guptavatiUpodghataEn
} from './devi-mahatmya-intro-guptavati';
import type { UpodghataTopicEn } from './devi-mahatmya-intro-guptavati';

export {
  guptavatiIntroTopics,
  guptavatiConceptsEn,
  guptavatiConceptsMl,
  guptavatiUpodghataEn
};
export type { UpodghataTopicEn };

export const deviMahatmyaText: ClassicalText = buildClassicalText(
  {
    id: 'devi-mahatmya',
    title: 'देवीमाहात्म्यम् (Devī Māhātmya)',
    transliteratedTitle: 'Devīmāhātmyam',
    author: 'Sage Mārkaṇḍeya / Sage Medhas',
    system: 'shakta',
    contentDepth: 'full',
    verseTerm: 'Śloka',
    sources: [
      {
        name: 'Sādhana-Samara (സാധനാ-സമരം) by Swami Pratyagātmānanda Saraswatī / Brahmachari Eran',
        status: 'integrated'
      },
      {
        name: 'Durgāsaptashatī with Seven Sanskrit Commentaries (Guptavatī, Pradīpa, Caturdharī, Santanavī, Nāgojībhaṭṭī, Jagaccandracandrikā, Daṃśoddhāra) and Candraprabhā Hindī-ṭīkā, ed. Dr. Girijesh Kumar Dixit, Sampurnanand Sanskrit Vishvavidyalaya, Varanasi, 2003',
        status: 'integrated'
      }
    ]
  },
  {
    en: deviMahatmyaVersesEn,
    ml: deviMahatmyaVersesMl
  },
  {
    en: [...deviMahatmyaConceptsEn, ...guptavatiConceptsEn],
    ml: [...deviMahatmyaConceptsMl, ...guptavatiConceptsMl]
  }
);

export const shaktaSystem: System = {
  id: 'shakta' as SystemId,
  title: 'Śākta / Devī Māhātmya',
  subtitle: 'The philosophy of the Supreme Divine Feminine and inner spiritual warfare (Sādhana-Samara)',
  texts: [deviMahatmyaText],
  thread: buildSystemThread('devi-mahatmya', {
    en: deviMahatmyaThreadEn,
    ml: deviMahatmyaThreadMl
  })
};

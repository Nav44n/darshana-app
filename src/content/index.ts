import { System, ThreadStep, ClassicalText } from '../types/content';
import { samkhyaKarika, samkhyaKarikaThread } from './samkhya/samkhya-karika';
import { yogaSutras, yogaSutrasThread } from './yoga/yoga-sutras';
import { nyayaSutras, nyayaSutrasThread } from './nyaya/nyaya-sutras';
import { vaisesikaSutrasText } from './vaisesika/vaisesika-sutras';
import { vaisesikaThreadEn } from './vaisesika/vaisesika-sutras-thread-en';
import { vedantaSystem } from './vedanta';

// Stitches a text's authored thread steps into full ThreadStep objects,
// tagging each with the text it came from. A system with several texts
// would concatenate one of these per text, in reading order, to form one
// continuous start-to-end journey across the whole darśana.
const threadFor = (text: ClassicalText, steps: Omit<ThreadStep, 'textId'>[]): ThreadStep[] =>
  steps.map((step) => ({ ...step, textId: text.id }));

export const systems: System[] = [
  {
    id: 'samkhya',
    title: 'Sāṃkhya',
    subtitle: 'The reckoning of principles',
    texts: [samkhyaKarika],
    thread: threadFor(samkhyaKarika, samkhyaKarikaThread),
  },
  {
    id: 'yoga',
    title: 'Yoga',
    subtitle: "The stilling of the mind's fluctuations",
    texts: [yogaSutras],
    thread: threadFor(yogaSutras, yogaSutrasThread),
  },
  {
    id: 'nyaya',
    title: 'Nyāya',
    subtitle: 'The rules of logic and epistemology',
    texts: [nyayaSutras],
    thread: threadFor(nyayaSutras, nyayaSutrasThread),
  },
  {
    id: 'vaisesika',
    title: 'Vaiśeṣika',
    subtitle: 'The categorization of reality and atomism',
    texts: [vaisesikaSutrasText],
    thread: threadFor(vaisesikaSutrasText, vaisesikaThreadEn),
  },
  vedantaSystem
];

export const getSystem = (id: string) => systems.find((s) => s.id === id);

export const getText = (systemId: string, textId: string) =>
  getSystem(systemId)?.texts.find((t) => t.id === textId);

export const getVerse = (systemId: string, textId: string, verseId: string) =>
  getText(systemId, textId)?.verses.find((v) => v.id === verseId);

export const allTexts = () => systems.flatMap((s) => s.texts);

// Compute bi-directional lookups dynamically so we don't have to hardcode relatedVerseIds in the concepts.
systems.forEach(sys => {
  sys.texts.forEach(text => {
    // Initialize empty arrays if not present
    text.concepts.forEach(c => {
      c.relatedVerseIds = c.relatedVerseIds || [];
    });
    
    // 1. Map from verses to concepts
    text.verses.forEach(v => {
      if (v.conceptIds) {
        v.conceptIds.forEach(cid => {
          const concept = text.concepts.find(c => c.id === cid);
          if (concept) {
            concept.relatedVerseIds = concept.relatedVerseIds || [];
            if (!concept.relatedVerseIds.includes(v.id)) {
              concept.relatedVerseIds.push(v.id);
            }
          }
        });
      }
    });
    
    // 2. Map from concepts to verses (for concepts that statically defined relatedVerseIds)
    text.concepts.forEach(c => {
      if (c.relatedVerseIds && c.relatedVerseIds.length > 0) {
        c.relatedVerseIds.forEach(vid => {
          const verse = text.verses.find(v => v.id === vid);
          if (verse) {
            verse.conceptIds = verse.conceptIds || [];
            if (!verse.conceptIds.includes(c.id)) {
              verse.conceptIds.push(c.id);
            }
          }
        });
      }
    });
  });
});

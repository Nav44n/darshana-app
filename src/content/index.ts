import { System, ThreadStep, ClassicalText } from '../types/content';
import { samkhyaKarika, samkhyaKarikaThread } from './samkhya/samkhya-karika';
import { yogaSutras, yogaSutrasThread } from './yoga/yoga-sutras';
import { nyayaSutras, nyayaSutrasThread } from './nyaya/nyaya-sutras';

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
  }
];

export const getSystem = (id: string) => systems.find((s) => s.id === id);

export const getText = (systemId: string, textId: string) =>
  getSystem(systemId)?.texts.find((t) => t.id === textId);

export const getVerse = (systemId: string, textId: string, verseId: string) =>
  getText(systemId, textId)?.verses.find((v) => v.id === verseId);

export const allTexts = () => systems.flatMap((s) => s.texts);

// Compute reverse lookups dynamically so we don't have to hardcode relatedVerseIds in the concepts.
systems.forEach(sys => {
  sys.texts.forEach(text => {
    // Initialize empty arrays
    text.concepts.forEach(c => {
      c.relatedVerseIds = [];
    });
    
    // Map from verses back to concepts
    text.verses.forEach(v => {
      if (v.conceptIds) {
        v.conceptIds.forEach(cid => {
          const concept = text.concepts.find(c => c.id === cid);
          if (concept) {
            concept.relatedVerseIds!.push(v.id);
          }
        });
      }
    });
  });
});

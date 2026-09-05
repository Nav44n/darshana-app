import { System, ThreadStep, ClassicalText } from '../types/content';
import { samkhyaKarika } from './samkhya/samkhya-karika';
import { samkhyaKarikaThread } from './samkhya/samkhya-karika-thread';
import { yogaSutras, yogaSutrasThread } from './yoga/yoga-sutras';
import { nyayaSutras, nyayaSutrasThread } from './nyaya/nyaya-sutras';
import { vaisesikaSutrasText } from './vaisesika/vaisesika-sutras';
import { vaisesikaThreadEn } from './vaisesika/vaisesika-sutras-thread-en';
import { mimamsaSystem } from './mimamsa';
import { vedantaSystem } from './vedanta';
import { kashmirShaivismSystem } from './kashmir-shaivism';

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
  mimamsaSystem,
  vedantaSystem,
  kashmirShaivismSystem
];

export const getSystem = (id: string) => systems.find((s) => s.id === id);

export const getText = (systemId: string, textId: string) =>
  getSystem(systemId)?.texts.find((t) => t.id === textId);

export const getVerse = (systemId: string, textId: string, verseId: string) =>
  getText(systemId, textId)?.verses.find((v) => v.id === verseId);

export const allTexts = () => systems.flatMap((s) => s.texts);

const verseIndex = new Set<string>();

export const hasVerse = (systemId: string, textId: string, verseId: string) =>
  verseIndex.has(`${systemId}:${textId}:${verseId}`);

// Compute bi-directional lookups dynamically and safely using Maps (O(1) lookups).
// We build Sets to ensure idempotency (Fast Refresh safe) and freeze the results.
systems.forEach(sys => {
  sys.texts.forEach(text => {
    // Populate O(1) global existence index
    text.verses.forEach(v => verseIndex.add(`${sys.id}:${text.id}:${v.id}`));

    // 1. Build lookup maps for O(1) access
    const verseMap = new Map(text.verses.map(v => [v.id, v]));
    const conceptMap = new Map(text.concepts.map(c => [c.id, c]));

    // 2. Use Sets to safely gather relationships without duplicates
    const conceptToVerses = new Map<string, Set<string>>();
    const verseToConcepts = new Map<string, Set<string>>();

    text.concepts.forEach(c => conceptToVerses.set(c.id, new Set(c.relatedVerseIds || [])));
    text.verses.forEach(v => verseToConcepts.set(v.id, new Set(v.conceptIds || [])));

    // 3. Populate sets in both directions
    text.verses.forEach(v => {
      (v.conceptIds || []).forEach(cid => {
        if (conceptMap.has(cid)) {
          conceptToVerses.get(cid)!.add(v.id);
          verseToConcepts.get(v.id)!.add(cid); // enforce bi-directionality from verse->concept
        }
      });
    });

    text.concepts.forEach(c => {
      (c.relatedVerseIds || []).forEach(vid => {
        if (verseMap.has(vid)) {
          verseToConcepts.get(vid)!.add(c.id);
          conceptToVerses.get(c.id)!.add(vid); // enforce bi-directionality from concept->verse
        }
      });
    });

    // 4. Assign frozen arrays back to prevent downstream mutation bugs
    text.concepts.forEach(c => {
      c.relatedVerseIds = Object.freeze(Array.from(conceptToVerses.get(c.id) || [])) as string[];
    });
    text.verses.forEach(v => {
      v.conceptIds = Object.freeze(Array.from(verseToConcepts.get(v.id) || [])) as string[];
    });
  });
});

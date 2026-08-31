import { systems } from '../content';
import { ClassicalText, Concept, Verse, ThreadStep } from '../types/content';

describe('Darshana Data Integrity', () => {
  it('should have unique system IDs', () => {
    const ids = systems.map(s => s.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  describe.each(systems)('System: $id', (system) => {
    
    // Map text ID to text object for quick lookup
    const textMap = new Map<string, ClassicalText>();
    system.texts.forEach(text => {
      textMap.set(text.id, text);
    });

    it('should have unique text IDs within the system', () => {
      const textIds = system.texts.map(t => t.id);
      expect(textIds.length).toBe(new Set(textIds).size);
    });

    describe.each(system.texts)('Text: $id', (text) => {
      it('should have unique verse IDs', () => {
        const verseIds = text.verses.map(v => v.id);
        const duplicates = verseIds.filter((item, index) => verseIds.indexOf(item) !== index);
        expect(duplicates).toEqual([]);
      });

      it('should have unique concept IDs', () => {
        const conceptIds = text.concepts.map(c => c.id);
        const duplicates = conceptIds.filter((item, index) => conceptIds.indexOf(item) !== index);
        expect(duplicates).toEqual([]);
      });

      it('should have valid concept references in verses', () => {
        const validConceptIds = new Set(text.concepts.map(c => c.id));
        text.verses.forEach(verse => {
          if (verse.conceptIds) {
            verse.conceptIds.forEach(conceptId => {
              if (!validConceptIds.has(conceptId)) {
                throw new Error(`Verse ${verse.id} references non-existent concept: ${conceptId}`);
              }
            });
          }
        });
      });

      it('should have valid verse references in concepts', () => {
        const validVerseIds = new Set(text.verses.map(v => v.id));
        text.concepts.forEach(concept => {
          if (concept.relatedVerseIds) {
            concept.relatedVerseIds.forEach(verseId => {
              if (!validVerseIds.has(verseId)) {
                throw new Error(`Concept ${concept.id} references non-existent verse: ${verseId}`);
              }
            });
          }
        });
      });
    });

    describe('Thread Integrity', () => {
      it('should only reference existing texts', () => {
        system.thread.forEach(step => {
          if (!textMap.has(step.textId)) {
             throw new Error(`Step ${step.id} references non-existent text: ${step.textId}`);
          }
        });
      });

      it('should only reference existing concepts within the text', () => {
        system.thread.forEach(step => {
          if (step.conceptId) {
            const text = textMap.get(step.textId);
            if (text) {
              const validConceptIds = new Set(text.concepts.map(c => c.id));
              if (!validConceptIds.has(step.conceptId)) {
                throw new Error(`Thread step ${step.id} references non-existent concept: ${step.conceptId}`);
              }
            }
          }
        });
      });

      it('should only reference existing verses within the text', () => {
        system.thread.forEach(step => {
          if (step.verseIds) {
            const text = textMap.get(step.textId);
            if (text) {
              const validVerseIds = new Set(text.verses.map(v => v.id));
              step.verseIds.forEach(verseId => {
                if (!validVerseIds.has(verseId)) {
                   throw new Error(`Thread step ${step.id} references non-existent verse: ${verseId}`);
                }
              });
            }
          }
        });
      });
    });
  });
});

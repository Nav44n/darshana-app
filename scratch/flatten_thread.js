const fs = require('fs');

let indexTs = fs.readFileSync('src/content/vedanta/index.ts', 'utf8');

// Add import
if (!indexTs.includes('brahmaSutrasThreadEn')) {
  indexTs = indexTs.replace(
    `import { brahmaSutrasText } from './brahma-sutras';`,
    `import { brahmaSutrasText } from './brahma-sutras';\nimport { brahmaSutrasThreadEn } from './brahma-sutras-thread-en';\nimport { ThreadStep } from '../../types/content';`
  );
}

// Flatten logic
const flattenLogic = `
const flattenedThread: ThreadStep[] = [];
brahmaSutrasThreadEn.modules.forEach(mod => {
  // Add a module introduction step
  flattenedThread.push({
    id: mod.id,
    textId: 'brahma-sutras',
    content: {
      en: {
        title: mod.title,
        narrative: mod.description
      }
    }
  });
  
  // Add items
  mod.items.forEach(item => {
    flattenedThread.push({
      id: item.id,
      textId: 'brahma-sutras',
      conceptId: item.type === 'concept' ? item.refId : undefined,
      verseIds: item.type === 'sutra' && item.refId ? [item.refId] : undefined,
      content: {
        en: {
          title: item.type === 'note' ? 'Guide Note' : undefined,
          narrative: item.type === 'note' ? item.text : undefined
        }
      }
    });
  });
});
`;

// Replace `thread: [],` with `thread: flattenedThread,`
if (indexTs.includes('thread: [],')) {
  indexTs = indexTs.replace('export const vedantaSystem: System = {', flattenLogic + '\nexport const vedantaSystem: System = {');
  indexTs = indexTs.replace('thread: [],', 'thread: flattenedThread,');
}

fs.writeFileSync('src/content/vedanta/index.ts', indexTs);
console.log('Updated index.ts to flatten the thread.');

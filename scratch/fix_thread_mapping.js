const fs = require('fs');

let indexTs = fs.readFileSync('src/content/vedanta/index.ts', 'utf8');

const updatedFlattenLogic = `
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
    let stepTitle = '';
    let stepNarrative = '';

    if (item.type === 'note') {
      stepTitle = 'Guide Note';
      stepNarrative = item.text || '';
    } else if (item.type === 'concept') {
      const c = brahmaSutrasText.concepts?.find(x => x.id === item.refId);
      if (c && c.content.en) {
        stepTitle = c.content.en.title || '';
        stepNarrative = c.content.en.summary || '';
      } else {
        stepTitle = 'Concept';
      }
    } else if (item.type === 'sutra') {
      const s = brahmaSutrasText.verses.find(x => x.id === item.refId);
      if (s && s.content.en) {
        stepTitle = 'Sutra ' + s.id;
        stepNarrative = (s.devanagari ? s.devanagari + '\\n\\n' : '') + 
                        (s.iast ? s.iast + '\\n\\n' : '') + 
                        (s.content.en.translation || '');
      } else {
        stepTitle = 'Sutra ' + item.refId;
      }
    }

    flattenedThread.push({
      id: item.id,
      textId: 'brahma-sutras',
      conceptId: item.type === 'concept' ? item.refId : undefined,
      verseIds: item.type === 'sutra' && item.refId ? [item.refId] : undefined,
      content: {
        en: {
          title: stepTitle,
          narrative: stepNarrative
        }
      }
    });
  });
});
`;

// Just replace the whole `const flattenedThread` block down to `export const vedantaSystem`
let parts = indexTs.split('const flattenedThread: ThreadStep[] = [];');
if (parts.length > 1) {
  let bottomParts = parts[1].split('export const vedantaSystem: System = {');
  indexTs = parts[0] + updatedFlattenLogic + '\nexport const vedantaSystem: System = {' + bottomParts[1];
  fs.writeFileSync('src/content/vedanta/index.ts', indexTs);
  console.log('Fixed thread mapping to extract titles and narratives!');
} else {
  console.log('Could not find split point');
}

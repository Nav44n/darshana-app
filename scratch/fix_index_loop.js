const fs = require('fs');
let indexTs = fs.readFileSync('src/content/index.ts', 'utf8');

const oldLoop = `// Compute reverse lookups dynamically so we don't have to hardcode relatedVerseIds in the concepts.
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
});`;

const newLoop = `// Compute bi-directional lookups dynamically so we don't have to hardcode relatedVerseIds in the concepts.
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
          if (concept && !concept.relatedVerseIds.includes(v.id)) {
            concept.relatedVerseIds.push(v.id);
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
});`;

indexTs = indexTs.replace(oldLoop, newLoop);
fs.writeFileSync('src/content/index.ts', indexTs);
console.log('index.ts loop updated');

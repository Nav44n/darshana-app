import { brahmaSutrasText } from './src/content/vedanta/brahma-sutras';
import { brahmaSutrasConceptsEn } from './src/content/vedanta/brahma-sutras-concepts-en';
import { brahmaSutrasThreadEn } from './src/content/vedanta/brahma-sutras-thread-en';

function runIntegrityCheck() {
  const sutraIds = new Set(brahmaSutrasText.verses.map(v => v.id));
  const conceptIds = new Set(brahmaSutrasConceptsEn.map(c => c.id));
  
  let errors = 0;
  
  console.log('--- Checking Thread Item References ---');
  brahmaSutrasThreadEn.modules.forEach(mod => {
    mod.items.forEach(item => {
      if (item.type === 'sutra') {
        if (!sutraIds.has(item.refId!)) {
          console.error(\`[ERROR] Thread module "\${mod.title}" references missing SUTRA: \${item.refId}\`);
          errors++;
        }
      } else if (item.type === 'concept') {
        if (!conceptIds.has(item.refId!)) {
          console.error(\`[ERROR] Thread module "\${mod.title}" references missing CONCEPT: \${item.refId}\`);
          errors++;
        }
      }
    });
  });
  
  console.log('\\n--- Checking Concept "relatedConcepts" References ---');
  brahmaSutrasConceptsEn.forEach(concept => {
    if (concept.relatedConcepts) {
      concept.relatedConcepts.forEach(refId => {
        if (!conceptIds.has(refId)) {
          console.error(\`[ERROR] Concept "\${concept.id}" references missing RELATED CONCEPT: \${refId}\`);
          errors++;
        }
      });
    }
  });

  if (errors === 0) {
    console.log('\\nALL CHECKS PASSED: The Brahma Sutras dataset is perfectly synced.');
  } else {
    console.log(\`\\nFOUND \${errors} ERRORS.\`);
  }
}

runIntegrityCheck();

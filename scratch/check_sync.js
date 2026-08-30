const fs = require('fs');
const path = require('path');

const sutrasDir = path.join(__dirname, '../src/content/vedanta');

// Get sutra IDs
let sutraIds = new Set();
const files = fs.readdirSync(sutrasDir);
files.forEach(f => {
  if (f.startsWith('brahma-sutras-en-adhyaya') && f.endsWith('.ts')) {
    const content = fs.readFileSync(path.join(sutrasDir, f), 'utf8');
    const regex = /id:\s*['"](\d+\.\d+\.\d+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      sutraIds.add(match[1]);
    }
  }
});

// Get concept IDs
let conceptIds = new Set();
let conceptsFileContent = fs.readFileSync(path.join(sutrasDir, 'brahma-sutras-concepts-en.ts'), 'utf8');
let idRegex = /id:\s*['"](concept_[^'"]+)['"]/g;
let cMatch;
while ((cMatch = idRegex.exec(conceptsFileContent)) !== null) {
  conceptIds.add(cMatch[1]);
}

// Check related concepts
console.log('--- Checking Concept Related Links ---');
let errors = 0;
// We can parse the array roughly
const relRegex = /id:\s*['"](concept_[^'"]+)['"][^}]*?relatedConcepts:\s*\[([^\]]*)\]/g;
let relMatch;
while ((relMatch = relRegex.exec(conceptsFileContent)) !== null) {
  const currentConcept = relMatch[1];
  const relatedString = relMatch[2];
  const related = [...relatedString.matchAll(/['"](concept_[^'"]+)['"]/g)].map(m => m[1]);
  related.forEach(r => {
    if (!conceptIds.has(r)) {
      console.error(`[ERROR] Concept "${currentConcept}" references missing related concept: "${r}"`);
      errors++;
    }
  });
}

// Check thread
console.log('\\n--- Checking Thread Item References ---');
let threadContent = fs.readFileSync(path.join(sutrasDir, 'brahma-sutras-thread-en.ts'), 'utf8');
const sutraRefRegex = /type:\s*['"]sutra['"][^}]*?refId:\s*['"]([^'"]+)['"]/g;
let tMatch;
while ((tMatch = sutraRefRegex.exec(threadContent)) !== null) {
  if (!sutraIds.has(tMatch[1])) {
    console.error(`[ERROR] Thread references missing SUTRA: "${tMatch[1]}"`);
    errors++;
  }
}

const conceptRefRegex = /type:\s*['"]concept['"][^}]*?refId:\s*['"]([^'"]+)['"]/g;
while ((tMatch = conceptRefRegex.exec(threadContent)) !== null) {
  if (!conceptIds.has(tMatch[1])) {
    console.error(`[ERROR] Thread references missing CONCEPT: "${tMatch[1]}"`);
    errors++;
  }
}

if (errors === 0) {
  console.log('\\nALL CHECKS PASSED: The Brahma Sutras dataset is perfectly synced.');
} else {
  console.log(`\\nFOUND ${errors} ERRORS.`);
}

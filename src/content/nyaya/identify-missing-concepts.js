const fs = require('fs');
const path = require('path');

/**
 * ============================================================================
 * NYAYA KNOWLEDGE GRAPH: ORPHAN CONCEPT DETECTOR
 * ============================================================================
 * Run this script whenever new Sutra books (e.g., Book 5) are added to the app.
 * It strictly scans all `.ts` sutra files for `conceptIds: [...]` arrays,
 * and cross-references them against `nyaya-sutras-concepts-en.ts`.
 * 
 * Usage: node src/content/nyaya/identify-missing-concepts.js
 * ============================================================================
 */

function extractIds(regex, text) {
  const ids = new Set();
  let m;
  while ((m = regex.exec(text)) !== null) {
    ids.add(m[1]);
  }
  return ids;
}

const dir = __dirname;
const files = fs.readdirSync(dir);
const sutraFiles = files.filter(f => f.startsWith('nyaya-sutras-book') && f.endsWith('.ts'));

let allSutras = '';
sutraFiles.forEach(f => {
  allSutras += fs.readFileSync(path.join(dir, f), 'utf8') + '\n';
});

// Extract all conceptIds defined in Sutra files
const usedConcepts = extractIds(/conceptIds:\s*\[([^\]]+)\]/g, allSutras);
const usedSet = new Set();
usedConcepts.forEach(list => {
  list.split(',').forEach(c => {
    const clean = c.replace(/['"`\s]/g, '');
    if (clean) usedSet.add(clean);
  });
});

// Extract all concepts defined in the master ontology
const conceptsPath = path.join(dir, 'nyaya-sutras-concepts-en.ts');
const conceptsTxt = fs.readFileSync(conceptsPath, 'utf8');
const definedSet = extractIds(/id:\s*['"]([^'"]+)['"]/g, conceptsTxt);

const missing = [...usedSet].filter(c => !definedSet.has(c));

console.log(`\n🔍 Scanning ${sutraFiles.length} sutra files...`);
console.log(`✅ Found ${definedSet.size} canonical concepts defined.`);
console.log(`🔗 Found ${usedSet.size} unique concepts referenced in sutras.\n`);

if (missing.length === 0) {
  console.log(`🏆 SUCCESS: The ontology is perfectly synced! No missing concepts found.`);
} else {
  console.log(`🚨 WARNING: Found ${missing.length} orphaned concepts!`);
  console.log(`Please define the following concepts in nyaya-sutras-concepts-en.ts to complete the Knowledge Graph:\n`);
  missing.forEach(m => console.log(`  - ${m}`));
}
console.log('');

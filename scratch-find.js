const fs = require('fs');

function extractIds(regex, text) {
  const ids = new Set();
  let m;
  while ((m = regex.exec(text)) !== null) {
    ids.add(m[1]);
  }
  return ids;
}

const sutras1 = fs.readFileSync('src/content/nyaya/nyaya-sutras-book1-en.ts', 'utf8');
const sutras2 = fs.readFileSync('src/content/nyaya/nyaya-sutras-book2-en.ts', 'utf8');
const sutras3 = fs.readFileSync('src/content/nyaya/nyaya-sutras-book3-en.ts', 'utf8');
const sutras4 = fs.readFileSync('src/content/nyaya/nyaya-sutras-book4-en.ts', 'utf8');
const allSutras = sutras1 + sutras2 + sutras3 + sutras4;

const usedConcepts = extractIds(/conceptIds:\s*\[([^\]]+)\]/g, allSutras);
const usedSet = new Set();
usedConcepts.forEach(list => {
  list.split(',').forEach(c => {
    const clean = c.replace(/['"`\s]/g, '');
    if (clean) usedSet.add(clean);
  });
});

const conceptsTxt = fs.readFileSync('src/content/nyaya/nyaya-sutras-concepts-en.ts', 'utf8');
const definedSet = extractIds(/id:\s*['"]([^'"]+)['"]/g, conceptsTxt);

const missing = [...usedSet].filter(c => !definedSet.has(c));
console.log('Total used:', usedSet.size);
console.log('Total defined:', definedSet.size);
console.log('Missing referenced concepts:');
missing.forEach(m => console.log('  - ' + m));

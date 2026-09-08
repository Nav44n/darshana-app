import * as fs from 'fs';
const content = fs.readFileSync('old_105.ts', 'utf8');
const ids = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
const unique = new Set(ids);
console.log('Total IDs:', ids.length);
console.log('Unique IDs:', unique.size);

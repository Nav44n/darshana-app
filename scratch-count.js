const fs = require('fs');

const concepts = fs.readFileSync('src/content/nyaya/nyaya-sutras-concepts-en.ts', 'utf8');
const threads = fs.readFileSync('src/content/nyaya/nyaya-sutras-thread-en.ts', 'utf8');

const conceptsCount = (concepts.match(/id\s*:/g) || []).length;
const threadCount = (threads.match(/[\"']?id[\"']?\s*:/g) || []).length;

console.log('Concepts:', conceptsCount);
console.log('Threads:', threadCount);

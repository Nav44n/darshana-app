import * as fs from 'fs';
const content = fs.readFileSync('src/content/devi-mahatmya/devi-mahatmya-concepts-ml.ts', 'utf8');
console.log(content.slice(0, 500));

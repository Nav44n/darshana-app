const fs = require('fs');
const txt = fs.readFileSync('scratch/vaisesika_books4_8_raw.txt', 'utf8');

const start = txt.indexOf('export const vaisesikaSutrasBooks4To8: VaisesikaSutra[]');
const end = txt.indexOf('];', start) + 2;

// Add the interface import
const finalStr = "import { VaisesikaSutra } from './vaisesika-sutras-en';\n\n" + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vaisesika/vaisesika-sutras-en-books4-8.ts', finalStr);
console.log('Extracted successfully');

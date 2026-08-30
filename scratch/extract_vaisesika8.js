const fs = require('fs');
const txt = fs.readFileSync('scratch/vaisesika_book8_raw.txt', 'utf8');

const start = txt.indexOf('export const vaisesikaSutrasBook8: VaisesikaSutra[]');
const end = txt.indexOf('];', start) + 2;

const finalStr = "import { VaisesikaSutra } from './vaisesika-sutras-en';\n\n" + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vaisesika/vaisesika-sutras-en-book8.ts', finalStr);
console.log('Extracted successfully');

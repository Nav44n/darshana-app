const fs = require('fs');
const txt = fs.readFileSync('scratch/vedanta_adhyaya3_2_raw.txt', 'utf8');
const start = txt.indexOf('export const brahmaSutrasEnAdhyaya3Part2');
const end = txt.indexOf('];', start) + 2;

const finalStr = "import { BrahmaSutraWithSanskrit } from './brahma-sutras-en-adhyaya3-1';\n\n" + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vedanta/brahma-sutras-en-adhyaya3-2.ts', finalStr);
console.log('Extracted successfully');

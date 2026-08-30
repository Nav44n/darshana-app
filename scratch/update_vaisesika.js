const fs = require('fs');

let content = fs.readFileSync('src/content/vaisesika/vaisesika-sutras.ts', 'utf8');

if (!content.includes('vaisesikaSutrasBooks4To8')) {
  content = content.replace(
    "import { vaisesikaSutrasEn } from './vaisesika-sutras-en';",
    "import { vaisesikaSutrasEn } from './vaisesika-sutras-en';\nimport { vaisesikaSutrasBooks4To8 } from './vaisesika-sutras-en-books4-8';"
  );
  
  content = content.replace(
    "verses: vaisesikaSutrasEn.map(v => {",
    "verses: [...vaisesikaSutrasEn, ...vaisesikaSutrasBooks4To8].map(v => {"
  );
  
  fs.writeFileSync('src/content/vaisesika/vaisesika-sutras.ts', content);
  console.log('vaisesika-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

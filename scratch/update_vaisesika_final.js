const fs = require('fs');

let content = fs.readFileSync('src/content/vaisesika/vaisesika-sutras.ts', 'utf8');

if (!content.includes('vaisesikaSutrasBooks9And10')) {
  content = content.replace(
    "import { vaisesikaSutrasBooks4To8 } from './vaisesika-sutras-en-books4-8';",
    "import { vaisesikaSutrasBooks4To8 } from './vaisesika-sutras-en-books4-8';\nimport { vaisesikaSutrasBooks9And10 } from './vaisesika-sutras-en-books9-10';"
  );
  
  content = content.replace(
    "...vaisesikaSutrasBooks4To8].map(v => {",
    "...vaisesikaSutrasBooks4To8, ...vaisesikaSutrasBooks9And10].map(v => {"
  );
  
  fs.writeFileSync('src/content/vaisesika/vaisesika-sutras.ts', content);
  console.log('vaisesika-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

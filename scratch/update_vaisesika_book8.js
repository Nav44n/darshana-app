const fs = require('fs');

let content = fs.readFileSync('src/content/vaisesika/vaisesika-sutras.ts', 'utf8');

if (!content.includes('vaisesikaSutrasBook8')) {
  // Add import
  content = content.replace(
    "import { vaisesikaSutrasBooks9And10 } from './vaisesika-sutras-en-books9-10';",
    "import { vaisesikaSutrasBooks9And10 } from './vaisesika-sutras-en-books9-10';\nimport { vaisesikaSutrasBook8 } from './vaisesika-sutras-en-book8';"
  );
  
  // Create a deduped array in the map function, or just remove book 8 from the old array before mapping
  content = content.replace(
    "verses: [...vaisesikaSutrasEn, ...vaisesikaSutrasBooks4To8, ...vaisesikaSutrasBooks9And10].map(v => {",
    "verses: [...vaisesikaSutrasEn, ...vaisesikaSutrasBooks4To8.filter(s => s.book !== 8), ...vaisesikaSutrasBook8, ...vaisesikaSutrasBooks9And10].map(v => {"
  );
  
  fs.writeFileSync('src/content/vaisesika/vaisesika-sutras.ts', content);
  console.log('vaisesika-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

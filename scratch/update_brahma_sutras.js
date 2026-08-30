const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

// Add import for Adhyaya 2
if (!content.includes('brahmaSutrasEnAdhyaya2')) {
  content = content.replace(
    "import { brahmaSutrasEn } from './brahma-sutras-en';",
    "import { brahmaSutrasEn } from './brahma-sutras-en';\nimport { brahmaSutrasEnAdhyaya2 } from './brahma-sutras-en-adhyaya2';"
  );
  
  // Merge the arrays
  content = content.replace(
    "verses: brahmaSutrasEn.map(v => {",
    "verses: [...brahmaSutrasEn, ...brahmaSutrasEnAdhyaya2].map(v => {"
  );
  
  fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
  console.log('brahma-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

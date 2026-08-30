const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

if (!content.includes('brahmaSutrasEnAdhyaya3Part1')) {
  content = content.replace(
    "import { brahmaSutrasEnAdhyaya2 } from './brahma-sutras-en-adhyaya2';",
    "import { brahmaSutrasEnAdhyaya2 } from './brahma-sutras-en-adhyaya2';\nimport { brahmaSutrasEnAdhyaya3Part1 } from './brahma-sutras-en-adhyaya3-1';"
  );
  
  content = content.replace(
    "verses: [...brahmaSutrasEn, ...brahmaSutrasEnAdhyaya2].map(v => {",
    "verses: [...brahmaSutrasEn, ...brahmaSutrasEnAdhyaya2, ...brahmaSutrasEnAdhyaya3Part1].map(v => {"
  );
  
  content = content.replace(
    "devanagari: '', // Not provided yet",
    "devanagari: (v as any).sanskrit || '',"
  );
  
  fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
  console.log('brahma-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

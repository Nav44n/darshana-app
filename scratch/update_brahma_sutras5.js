const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

if (!content.includes('brahmaSutrasEnAdhyaya4')) {
  content = content.replace(
    "import { brahmaSutrasEnAdhyaya3Part2 } from './brahma-sutras-en-adhyaya3-2';",
    "import { brahmaSutrasEnAdhyaya3Part2 } from './brahma-sutras-en-adhyaya3-2';\nimport { brahmaSutrasEnAdhyaya4 } from './brahma-sutras-en-adhyaya4';"
  );
  
  content = content.replace(
    "...brahmaSutrasEnAdhyaya3Part2].map(v => {",
    "...brahmaSutrasEnAdhyaya3Part2, ...brahmaSutrasEnAdhyaya4].map(v => {"
  );
  
  fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
  console.log('brahma-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

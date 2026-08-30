const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

if (!content.includes('brahmaSutrasEnAdhyaya3Part2')) {
  content = content.replace(
    "import { brahmaSutrasEnAdhyaya3Part1 } from './brahma-sutras-en-adhyaya3-1';",
    "import { brahmaSutrasEnAdhyaya3Part1 } from './brahma-sutras-en-adhyaya3-1';\nimport { brahmaSutrasEnAdhyaya3Part2 } from './brahma-sutras-en-adhyaya3-2';"
  );
  
  content = content.replace(
    "...brahmaSutrasEnAdhyaya3Part1].map(v => {",
    "...brahmaSutrasEnAdhyaya3Part1, ...brahmaSutrasEnAdhyaya3Part2].map(v => {"
  );
  
  fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
  console.log('brahma-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}

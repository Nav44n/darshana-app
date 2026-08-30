const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/content/vaisesika/vaisesika-sutras-en.ts');
let content = fs.readFileSync(srcFile, 'utf-8');

// The correct part is from the beginning until the first `  }\n] = [` which is where the corruption started.
const corruptionIndex = content.indexOf('}\\n] = [');
if (corruptionIndex !== -1) {
  // Wait, let's just find the end of book 3 from the first pass.
  // The first pass wrote `before + ',\n' + book3Code + after`.
  // book3Code ends with `];` or `];\n`.
  // So let's find `];` after `3.2.21`.
  const book3End = content.indexOf('];', content.indexOf('"3.2.21"'));
  if (book3End !== -1) {
    const goodContent = content.substring(0, book3End + 2) + '\n';
    fs.writeFileSync(srcFile, goodContent, 'utf-8');
    console.log("File fixed!");
  } else {
    console.log("Could not find book3 end.");
  }
} else {
  console.log("No corruption found?");
}

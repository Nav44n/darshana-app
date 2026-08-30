const fs = require('fs');

const b1Script = fs.readFileSync('C:/Users/navee/.gemini/antigravity/brain/1436659e-71e4-4478-b08f-b4eba4d06c4e/scratch/merge_vaisesika_book1_complete.js', 'utf8');
const b2Script = fs.readFileSync('C:/Users/navee/.gemini/antigravity/brain/1436659e-71e4-4478-b08f-b4eba4d06c4e/scratch/merge_vaisesika_book2_complete.js', 'utf8');
const b3Script = fs.readFileSync('scratch/fix_book3.js', 'utf8');

function extractBatch(scriptContent, arrayName) {
  // Finds `const batch2 = [` and extracts until `];`
  const startIndex = scriptContent.indexOf(`const ${arrayName} = [`);
  if (startIndex === -1) return '';
  const startBracket = scriptContent.indexOf('[', startIndex);
  const endBracket = scriptContent.indexOf('];\n', startBracket);
  if (endBracket === -1) {
    const backup = scriptContent.indexOf('];', startBracket);
    return scriptContent.substring(startBracket + 1, backup);
  }
  return scriptContent.substring(startBracket + 1, endBracket);
}

// from b1Script, we want `batch2`
let book1 = extractBatch(b1Script, 'batch2');

// from b2Script, we want `batch2`
let book2 = extractBatch(b2Script, 'batch2');

// from b3Script, we want `book3Code`
let book3Start = b3Script.indexOf('const book3Code = `');
let book3End = b3Script.indexOf('];`;', book3Start);
let book3 = b3Script.substring(book3Start + 19, book3End);
// book3 actually starts with `  // ====` and ends with `}`

const finalFileContent = `export interface VaisesikaSutra {
  id: string;        // Canonical standard ID e.g., "1.1.1"
  book: number;      // Adhyaya (1-10)
  chapter: number;   // Ahnika (1-2)
  sutra: number;     // Canonical Sutra number within the Ahnika
  sanskrit: string;  // Devanagari root text
  text: string;      // The English translation
  topic: string;     // Grouping topic for UI categorization
  commentary: string; // Synthesized philosophical commentary
}

export const vaisesikaSutrasEn: VaisesikaSutra[] = [
` + book1 + ',\n' + book2 + ',\n' + book3 + '\n];\n';

fs.writeFileSync('src/content/vaisesika/vaisesika-sutras-en.ts', finalFileContent, 'utf-8');
console.log("Successfully rebuilt vaisesika-sutras-en.ts!");


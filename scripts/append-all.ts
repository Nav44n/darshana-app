import * as fs from 'fs';
import * as path from 'path';

const mainFilePath = path.join(__dirname, '../src/content/kashmir-shaivism/tantraloka-concepts-en.ts');
let mainContent = fs.readFileSync(mainFilePath, 'utf8');

const newFilePath = process.argv[2];

if (!newFilePath) {
  console.error("Usage: npx tsx scripts/append-all.ts <path_to_scratch_file>");
  process.exit(1);
}

const absoluteNewFilePath = path.resolve(__dirname, '..', newFilePath);
const newContent = fs.readFileSync(absoluteNewFilePath, 'utf8');

const arrayRegex = /export const \w+\s*=\s*\[([\s\S]*?)\];/g;
let match;
let totalAppended = 0;

while ((match = arrayRegex.exec(newContent)) !== null) {
  let newArrayBody = match[1].trim();
  
  // Find the end of the main array
  const insertionPoint = mainContent.lastIndexOf('];');
  
  if (insertionPoint !== -1) {
    const before = mainContent.substring(0, insertionPoint).trim();
    const hasTrailingComma = before.endsWith(',');
    
    mainContent = before + (hasTrailingComma ? '\n\n' : ',\n\n') + newArrayBody + '\n];\n';
    totalAppended++;
  } else {
    console.log('Could not find the end of the main array in tantraloka-concepts-en.ts');
  }
}

if (totalAppended > 0) {
    fs.writeFileSync(mainFilePath, mainContent, 'utf8');
    console.log(`Appended ${totalAppended} arrays successfully!`);
} else {
    console.log('No arrays found in the source file.');
}

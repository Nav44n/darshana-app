import * as fs from 'fs';
import * as path from 'path';

const mainFilePath = path.join(__dirname, '../src/content/kashmir-shaivism/tantraloka-concepts-en.ts');
let mainContent = fs.readFileSync(mainFilePath, 'utf8');

const newFilePath = process.argv[2];
const arrayName = process.argv[3];

if (!newFilePath || !arrayName) {
  console.error("Usage: npx tsx scripts/append-tantraloka.ts <path_to_scratch_file> <array_name>");
  process.exit(1);
}

const absoluteNewFilePath = path.resolve(__dirname, '..', newFilePath);
const newContent = fs.readFileSync(absoluteNewFilePath, 'utf8');

// Build a dynamic regex to find the array by its exact name
const regex = new RegExp(`export const ${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
const newMatch = newContent.match(regex);

if (newMatch) {
  let newArrayBody = newMatch[1].trim();
  
  // Find the end of the main array
  const insertionPoint = mainContent.lastIndexOf('];');
  
  if (insertionPoint !== -1) {
    const before = mainContent.substring(0, insertionPoint).trim();
    const hasTrailingComma = before.endsWith(',');
    
    mainContent = before + (hasTrailingComma ? '\n\n' : ',\n\n') + newArrayBody + '\n];\n';
    
    fs.writeFileSync(mainFilePath, mainContent, 'utf8');
    console.log('Appended successfully!');
  } else {
    console.log('Could not find the end of the main array in tantraloka-concepts-en.ts');
  }
} else {
  console.log(`Could not parse new content array named ${arrayName} in ${newFilePath}`);
}

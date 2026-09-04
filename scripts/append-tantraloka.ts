import * as fs from 'fs';
import * as path from 'path';

const mainFilePath = path.join(__dirname, '../src/content/kashmir-shaivism/tantraloka-concepts-en.ts');
let mainContent = fs.readFileSync(mainFilePath, 'utf8');

const newFilePath = path.join(__dirname, '../scratch/vol2-part1.ts');
const newContent = fs.readFileSync(newFilePath, 'utf8');

// Extract the array contents
const newMatch = newContent.match(/export const tantralokaConceptsVol2Part1 = \[([\s\S]*?)\];/);
if (newMatch) {
  let newArrayBody = newMatch[1].trim();
  
  // Find the end of the main array
  const insertionPoint = mainContent.lastIndexOf('];');
  
  if (insertionPoint !== -1) {
    const before = mainContent.substring(0, insertionPoint).trim();
    // if there's no trailing comma, add one
    const hasTrailingComma = before.endsWith(',');
    
    mainContent = before + (hasTrailingComma ? '\n\n' : ',\n\n') + newArrayBody + '\n];\n';
    
    fs.writeFileSync(mainFilePath, mainContent, 'utf8');
    console.log('Appended successfully!');
  } else {
    console.log('Could not find the end of the array');
  }
} else {
  console.log('Could not parse new content array');
}

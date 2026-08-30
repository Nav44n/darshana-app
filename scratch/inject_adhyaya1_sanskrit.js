const fs = require('fs');

const raw = fs.readFileSync('scratch/adhyaya1_sanskrit_raw.txt', 'utf8');

// The text is one long line, we need to extract sutras by finding the devanagari numbers
// like ॥ १ ॥, ॥ २ ॥, etc.

const sutras = [];

let currentText = raw;
let adhyaya = 1;
let pada = 1;
let sutraNum = 1;

// Clean up known headers
currentText = currentText.replace('ब्रह्मसूत्रम् - प्रथमोऽध्यायः (Brahma Sutras - Adhyaya 1)', '');

// Split by Padas
const padas = currentText.split(/प्रथमः पादः \(Pada 1\)|द्वितीयः पादः \(Pada 2\)|तृतीयः पादः \(Pada 3\)|चतुर्थः पादः \(Pada 4\)/).filter(p => p.trim());

for (let p = 0; p < padas.length; p++) {
  pada = p + 1;
  let padaText = padas[p];
  
  // Extract all sutras in this pada
  // Matches devanagari sutra text followed by double danda, number (possibly multiple digits), double danda
  const regex = /(.+?)॥\s*([०-९0-9]+)\s*॥/g;
  let match;
  
  while ((match = regex.exec(padaText)) !== null) {
    let sanskritText = match[1].trim() + " ॥ " + match[2] + " ॥";
    // Devanagari numerals to english numerals for the sutra number
    let devanagariToEng = {
      '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', 
      '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
    };
    
    let numStr = match[2].trim();
    let engNumStr = '';
    for (let char of numStr) {
      engNumStr += devanagariToEng[char] || char;
    }
    
    sutraNum = parseInt(engNumStr, 10);
    
    sutras.push({
      id: `${adhyaya}.${pada}.${sutraNum}`,
      sanskrit: sanskritText
    });
  }
}

// Now read the existing TS file and inject the Sanskrit
let tsFile = fs.readFileSync('src/content/vedanta/brahma-sutras-en.ts', 'utf8');

// Change the interface to include sanskrit (since it doesn't currently in adhyaya 1)
if (!tsFile.includes('sanskrit?: string')) {
    tsFile = tsFile.replace(
        "translation: string; // The definitive English translation",
        "translation: string; // The definitive English translation\n  sanskrit?: string; // The Devanagari text"
    );
}

// Update the array objects
sutras.forEach(sutra => {
  // Find the exact object for this sutra
  // A bit tricky with regex, we can match id: "1.1.1", and add the sanskrit field after it
  const idMatch = new RegExp(`id:\\s*"${sutra.id}",`);
  tsFile = tsFile.replace(idMatch, `id: "${sutra.id}",\n    sanskrit: "${sutra.sanskrit}",`);
});

fs.writeFileSync('src/content/vedanta/brahma-sutras-en.ts', tsFile);
console.log(`Updated ${sutras.length} sutras with Sanskrit text in Adhyaya 1.`);

const fs = require('fs');
const content = fs.readFileSync('scratch/ui_payload.txt', 'utf8');

const regexes = [
  { name: 'src/theme/tokens.ts', pattern: /-\s*tokens\s*ts\s*-\s*([\s\S]*?)(?:,\s*usetheme\s*ts\s*-|$)/i },
  { name: 'src/theme/useTheme.ts', pattern: /,\s*usetheme\s*ts\s*-\s*([\s\S]*?)(?:,\s*auroraglow\s*tsx\s*-|$)/i },
  { name: 'src/components/AuroraGlow.tsx', pattern: /,\s*auroraglow\s*tsx\s*-\s*([\s\S]*?)(?:,\s*gunarule\s*tsx\s*-|$)/i },
  { name: 'src/components/GunaRule.tsx', pattern: /,\s*gunarule\s*tsx\s*-\s*([\s\S]*?)(?:,\s*homescreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/HomeScreen.tsx', pattern: /,\s*homescreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*systemscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/SystemScreen.tsx', pattern: /,\s*systemscreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*libraryscreen\s*s?x\s*-|$)/i },
  { name: 'src/screens/LibraryScreen.tsx', pattern: /,\s*libraryscreen\s*s?x\s*-\s*([\s\S]*?)(?:,\s*conceptsscreen\s*tsx?-|$)/i },
  { name: 'src/screens/ConceptsScreen.tsx', pattern: /,\s*conceptsscreen\s*tsx?-\s*([\s\S]*?)(?:,\s*textindexscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/TextIndexScreen.tsx', pattern: /,\s*textindexscreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*versedetailsscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/VerseDetailScreen.tsx', pattern: /,\s*versedetailsscreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*thredscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/ThreadScreen.tsx', pattern: /,\s*thredscreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*graphscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/GraphScreen.tsx', pattern: /,\s*graphscreen\s*tsx\s*-\s*([\s\S]*?)(?:,\s*searchscreen\s*tsx\s*-|$)/i },
  { name: 'src/screens/SearchScreen.tsx', pattern: /,\s*searchscreen\s*tsx\s*-\s*([\s\S]*?)(?:<\/USER_REQUEST>|$)/i },
];

for (const { name, pattern } of regexes) {
  const match = content.match(pattern);
  if (match && match[1]) {
    fs.writeFileSync(name, match[1].trim() + '\n', 'utf8');
    console.log(`Successfully extracted ${name}`);
  } else {
    console.error(`Failed to extract ${name}`);
  }
}

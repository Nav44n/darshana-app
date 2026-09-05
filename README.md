# Darśana App

A React Native (Expo) application designed for deep, structured exploration of classical Indian philosophical systems (Darśanas). The app moves beyond flat text reading to provide guided threads, bidirectional concept-to-verse linking, and interactive ontology diagrams.

## Current Systems Integrated

1. **Sāṃkhya**
   - Text: *Sāṃkhyakārikā*
   - Includes full verses, conceptual breakdowns (Tattvas, Guṇas, etc.), and a guided thread.
2. **Nyāya**
   - Text: *Nyāyasūtra*
   - Includes core epistemological concepts (Pramāṇas) and syllogism structures.
3. **Kashmir Shaivism**
   - Text: *Tantrāloka* (Ahnika 1, Verses 1-80)
   - Includes full verses with rich, multi-layered English commentary (Traditional Context, Beginner Notes, Syncretic Application).

## Features

- **Guided Concept Threads**: Curated pathways through a system's core ideas, connecting abstract concepts directly to their foundational verses.
- **Ontology Diagrams**: Interactive SVG visualizations of complex philosophical structures (e.g., the 25 Tattvas, the Guṇa interplay).
- **Cross-Reference Engine**: Smart auto-linking of internal verse citations across commentaries and notes.
- **Bilingual Support**: Toggle between English and Malayalam translations.
- **Reading Preferences**: Light/Dark mode, scalable typography, and persistent bookmarking.
- **Universal Platform Support**: Runs natively on iOS and Android, and deploys fully responsive to the Web via GitHub Pages.

## Development

The app is built with Expo and React Native.

### Running Locally

```bash
# Install dependencies
npm install

# Start the Expo development server
npx expo start

# Start specifically for web
npm run web
```

### Deployment

The web version is configured for automatic deployment to GitHub Pages.
```bash
# Export the web bundle and push to the gh-pages branch
npm run deploy
```

## Architecture

- **Data Layer (`src/content`)**: Pure TypeScript definitions of systems, texts, verses, and concepts.
- **Compiler (`src/content/factory.ts`)**: An O(1) bi-directional stitcher that connects verses to concepts dynamically at runtime.
- **UI Layer (`src/components` & `src/screens`)**: Theming respects the philosophical "Guṇa" palette (Sattva, Rajas, Tamas, Avyakta) ensuring the design language matches the subject matter.

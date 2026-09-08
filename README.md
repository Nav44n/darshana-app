# Darśana App

A Vite + React web application designed for deep, structured exploration of classical Indian philosophical systems (Darśanas). The app moves beyond flat text reading to provide guided threads, bidirectional concept-to-verse linking, and interactive ontology diagrams.

> Note: The legacy Expo/React-Native shell has been officially retired. The web client in `src/` is the supported target. `App.tsx` at the repo root and `AuroraGlow`/`GunaRule`/`ErrorBoundary` native imports are retained only as reference until the Phase A web cleanup replaces them.

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
- **Reading Preferences**: Light + Guna-dark dual theme, scalable typography, and persistent bookmarking.
- **Web-first**: Fully responsive static web via GitHub Pages. No server, no API keys — all content ships locally.

## Development

The app is built with Vite + React + Tailwind v4 as a fully static client. All philosophical content ships as local TypeScript data — no backend, no API keys, no chatbot.

### Running Locally

```bash
# Install dependencies
npm install

# Dev server with hot reload
npm run dev

# Production build + preview
npm run build
npm run preview
```

### Deployment

- **GitHub Pages (static):** `npm run build` emits `dist/`, served with `base: '/darshana-app/'`. Any static host works — no server component exists.

## Architecture

- **Data Layer (`src/content`)**: Pure TypeScript definitions of systems, texts, verses, and concepts.
- **Compiler (`src/content/factory.ts`)**: An O(1) bi-directional stitcher that connects verses to concepts dynamically at runtime.
- **UI Layer (`src/components` & `src/screens`)**: Theming respects the philosophical "Guṇa" palette (Sattva, Rajas, Tamas, Avyakta) ensuring the design language matches the subject matter.

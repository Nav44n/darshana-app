# Darśana App

A Vite + React web application for deep, structured exploration of classical Indian philosophical systems (Darśanas). The app moves beyond flat text reading to provide guided threads, bidirectional concept-to-verse linking, and interactive ontology diagrams.

> Note: the web client in `src/` is the shipped target (`src/main.tsx`, HashRouter, `vite.config.ts`). The root `App.tsx` is a legacy Expo/RN entry, retained only as reference; it is not typechecked or built.

## Systems & Texts (8 systems)

1. **Sāṃkhya** — *Sāṃkhyakārikā*, *Sāṅkhya-Pravacana-Sūtra*
2. **Yoga** — *Yoga Sūtras*
3. **Nyāya** — *Nyāya Sūtra*
4. **Vaiśeṣika** — *Vaiśeṣika Sūtra* (English compilation in progress)
5. **Mīmāṃsā** — *Mīmāṃsā Sūtras*
6. **Vedānta** — *Brahma Sutras* (English compilation in progress), *Adhyātma Rāmāyaṇa*, *Viṣṇusahasranāma*, *Bhagavad Gita*
7. **Tantra** — *Devīmāhātmyam*, *Kundalini Tantra*, *Lalitāsahasranāma*
8. **Kashmir Shaivism** — *Śiva-sūtras*, *Spanda-kārikās*, *Vijñānabhairava-tantra*, *Tantrāloka*

## Features

- **Guided Concept Threads**: curated, step-by-step pathways through each system's core ideas, linking concepts directly to their source verses, with per-system progress that resumes where you left off.
- **Ontology Diagrams**: interactive SVG visualisations of complex structures (e.g. the 25 Tattvas), organised through a central diagram registry.
- **Cross-Reference Engine**: smart auto-linking of internal verse and concept citations across commentaries and notes.
- **Corpus Search**: command palette (`Ctrl/⌘K`) with ranked verse search — Devanagari, IAST (diacritic-normalised, so `sankhya` finds `Sāṃkhya`), translations and commentary — alongside concept, thread-step and text jumps.
- **Bilingual Support**: English and Malayalam translations with graceful fallback where a Malayalam rendering is still pending.
- **Reading Preferences**: Guna-palette interface with scalable typography (100 / 112.5 / 125%), persisted locally.
- **Continuity**: persistent bookmarks shelf, recently viewed trail, recent searches, and a Home "continue reading" card — all stored locally, all fail-silent in private mode.
- **Web-first**: fully responsive static web via GitHub Pages. No server, no API keys — all content ships locally.

## Development

```bash
# Install dependencies
npm install

# Dev server with hot reload
npm run dev

# Typecheck, tests, production build
npm run lint
npm run test
npm run build
npm run preview
```

## Deployment

- **GitHub Pages (static):** `.github/workflows/deploy.yml` runs `tsc --noEmit`, the vitest suite, and `vite build` on every push to `main`, then publishes `dist/`. The Vite `base` is relative (`./`), so any static host works — no server component exists.

## Architecture

- **Data Layer (`src/content`)**: pure TypeScript definitions of systems, texts, verses, and concepts. One directory per text; no mixing of systems. See `AGENTS.md` for the strict content laws (Guṇa palette, flat threads, ID synchronisation).
- **Compiler (`src/content/factory.ts`)**: bi-directional stitcher that connects verses to concepts dynamically at runtime.
- **Reference Graph (`src/utils/references.ts`)**: central Wikipedia-style interlink layer (verse ↔ concept, thread backlinks, cross-darśana links). UI components query it rather than building ad-hoc lookups.
- **UI Layer (`src/components`)**: shared `Primitives.tsx` (cards, shells, collapsibles, chevrons, badges, bottom bars) and Guna Tailwind classes from `src/index.css`; system accents via `src/utils/theme.ts`.
- **Localisation (`src/i18n`)**: UI chrome strings in English + Malayalam; content translations stay in `src/content/*`.
- **Continuity Stores (`src/utils/bookmarks.ts`, `readingHistory.ts`, `searchHistory.ts`, `threadProgress.ts`)**: small localStorage-backed modules behind a fail-silent contract.

# Darśana — Indian philosophy app

Expo / React Native project. Verse-by-verse, concept-by-concept presentation of
classical Indian texts, organized by darśana (system). Currently built and run
for personal, local use — not published or distributed anywhere.

Two systems are live: **Sāṃkhya** (Sāṃkhya Kārikā, all 73 verses) and **Yoga**
(Yoga Sūtra, all 195 sūtras across all four pādas).

## Run it

```
npm install
npx expo start
```

Press `a` for Android (emulator or Expo Go on a device), `w` for a web preview.

## Project structure

```
src/
  types/content.ts          shared shape: System → ClassicalText → Verse / Concept
  content/
    index.ts                registry of all systems and texts
    samkhya/
      samkhya-karika.ts           the ENTIRE Sāṃkhya Kārikā (verses) lives in this one file
      samkhya-karika-concepts.ts  its diagrammed concepts, in a sibling file
    yoga/
      yoga-sutras.ts               the Yoga Sūtra seed (verses) lives in this one file
      yoga-sutras-concepts.ts      its diagrammed concepts, in a sibling file
  theme/tokens.ts            colors, font names, spacing — the guṇa-based palette
  components/
    Primitives.tsx           Eyebrow, PageTitle, Card, DiagramFrame, etc.
    VerseRow.tsx              one row in a verse index
    diagrams/
      DuhkhaTraya.tsx, GunaLamp.tsx, TattvaTree.tsx, SatkaryavadaChain.tsx,
      PurushaPrakritiUnion.tsx        — Sāṃkhya diagrams
      CittaVritti.tsx, FiveKlesas.tsx, Ashtanga.tsx, Samyama.tsx
                                        — Yoga diagrams
      index.tsx               diagramId -> component registry, shared by all systems
  screens/
    HomeScreen.tsx            darśana picker — one card per system
    LibraryScreen.tsx         flat browse of every text, grouped by system
    TextIndexScreen.tsx       one text's verse index + concepts, by systemId/textId
    VerseDetailScreen.tsx     one verse, by systemId/textId/verseId
    ConceptsScreen.tsx        every system's diagrammed concepts, grouped by text
    SourcesScreen.tsx         every text's commentary sources, grouped by text
  navigation/
    RootNavigator.tsx        bottom tabs (Home, Library, Concepts, Sources), each
                              wrapping a stack so verse detail is reachable from any tab
App.tsx                      font loading, splash screen, mounts RootNavigator
```

## How content is organized (and why)

- **One system = one folder** under `src/content/`. Sāṃkhya is
  `src/content/samkhya/`, Yoga is `src/content/yoga/`. A later system (Vedānta,
  say) gets its own sibling folder the same way, registered in `content/index.ts`.
- **One classical text = one file, plus a sibling concepts file.** The full
  Sāṃkhya Kārikā and the Yoga Sūtra each live entirely inside their own single
  file, verses included — not split per verse or per chapter, since a verse
  list is a sequential transcription, not interdependent logic, and is best
  read/searched as one whole. Each text's small set of diagrammed concepts
  lives in a `<text-id>-concepts.ts` sibling instead, since that's a distinct
  concern (curated cross-cutting ideas, not a transcription) and splitting it
  out costs nothing verses would lose by staying together. A second core text
  on the same system (the Sāṃkhya Sūtra, say, or the Yoga Bhāṣya as an
  independent work rather than a commentary) would get its own such pair,
  registered alongside the first in `content/index.ts`.
- **Commentary is merged, not siloed.** Each verse has one `commentary` string —
  the current best synthesis of what's known about that verse — plus an optional
  `interpretiveNotes[]` array for places where a specific source reads it
  differently or adds something the base commentary doesn't say, each one
  attributed by name. Adding a second commentary means editing the relevant
  text's file: expand `commentary` with what's new, add entries to
  `interpretiveNotes` for genuine disagreements, and add the source's name to
  the text's `sources[]` list. No new screens, no new files, no per-source tabs.
- **Diagrams attach to concepts, not commentaries**, and are shared across every
  system through one registry (`components/diagrams/index.tsx`). A `diagramId`
  on a verse or a `Concept` points into that registry.
- **Devanāgarī is optional per verse** (`devanagari?: string`). Bryant's Yoga
  Sūtra edition prints only IAST transliteration for the sūtras, so most Yoga
  verses fall back to displaying IAST as the primary Sanskrit text; Devanāgarī
  is supplied only where independently well-established. The Sāṃkhya Kārikā
  verses (OCR'd from the Phukan PDF) all carry Devanāgarī.

## What's real vs. placeholder right now

- **Sāṃkhya Kārikā**: all 73 verses (I–LXXIII), transcribed from the uploaded
  Phukan edition — Sanskrit, IAST, translation, and synthesized commentary are
  real throughout.
- **Yoga Sūtra**: all 195 sūtras (I.1–IV.34), transcribed from the uploaded
  Bryant edition — real translation and commentary condensed from Bryant's own
  notes and the traditional commentators he quotes at length (Vyāsa, Vācaspati
  Miśra, Vijñānabhikṣu, Hariharānanda, Bhoja Rāja, and others), including the
  text's sustained argument against Buddhist idealism and momentariness in
  Chapter IV. Bryant's own edition prints sūtras in IAST only (no Devanāgarī),
  so most Yoga verses show IAST as the primary Sanskrit text — a handful of
  the most iconic opening sūtras carry Devanāgarī supplied from the standard
  received text.
- Eleven diagrammed concepts total (5 Sāṃkhya, 6 Yoga, some spanning both
  texts — e.g. `twenty-five-tattvas` and `purusha-prakriti-union` appear as
  concepts in both, since the Yoga Sūtra explicitly assumes and builds on
  Sāṃkhya's metaphysics throughout).
- Next real content step: a second commentary on either text. Per the model
  above, that means editing `commentary` and `interpretiveNotes` on verses
  that already exist — not new files, not new screens.
- **Provenance note**: this build is for personal, local, non-distributed
  use. The Yoga Sūtra content is condensed from a commercially published,
  copyrighted 2014 academic edition; the Sāṃkhya Kārikā content from a 1960
  translation whose copyright status wasn't independently verified. Neither
  has been cleared for public distribution — don't publish this build or its
  content elsewhere without sorting that out first.

## UI/UX — what changed and why

A critical pass on the first version surfaced real gaps: verse detail had no
way to move to the next or previous verse, no way to jump to an arbitrary
verse without backing out to the index, and the "Concepts" screen was a
disconnected grid of cards rather than anything resembling a narrative
through the philosophy. All three are fixed:

- **Prev / Next navigation** on every verse screen — bottom bar, plus swipe
  left/right (via `PanResponder`, no extra gesture dependency needed).
- **A real drag bar** (`@react-native-community/slider`) to jump to any verse
  — tap the position indicator to open a bottom sheet with the slider (live
  preview of the target verse while dragging) and a full tap-grid of every
  verse number as a fallback for precision.
- **Concept Threads** — the actual answer to "verse-by-verse isn't how
  philosophy is understood." Each *system* now has a `thread` (independent of
  any single text within it, so it can span the system start to end even once
  a system holds more than one text): an ordered sequence of steps through its
  core ideas, each with newly written connecting prose ("this is why the next
  question has to be X"), not just the existing per-concept summaries stitched
  together. Swipeable/prev-next, with a progress rail, reachable from Home
  (its own "Explore threads" button, next to "Explore texts"), the System
  screen, and Concepts.
- **Bookmarks**, persisted via AsyncStorage, with a star toggle on every
  verse, a bookmarked-first section in the verse index, and a quick-access
  card on Home.
- **Real search** in the verse index — filters by number, translation,
  commentary, and key points live as you type (the search bar in the first
  version was decorative).
- **Continue reading**, persisted per text, replacing the old hardcoded
  "verse III" card on Home.
- **Reading comfort**: an A-/A/A+ text-size control on verse detail, and a
  share button (native share sheet) for sending a verse's translation out of
  the app.
- **Cross-reference auto-linking** (`src/utils/crossref.ts` +
  `src/components/LinkedText.tsx`) — commentary that mentions "Kārikā LXVII"
  or "II.5" is parsed and rendered as a tappable jump straight to that verse,
  resolved against the real content registry so a stale reference never
  renders as a dead link. Live in verse commentary, interpretive notes, key
  points, and thread narratives. 27 Sāṃkhya self-references, 8 Yoga→Sāṃkhya
  cross-references, and 197 internal Yoga Sūtra references are already
  linkable.
- **Light/dark theme** — a real toggle (☾/☀ on Home), not a stub. Colors live
  in `src/theme/tokens.ts` as two full palettes (`darkColors`/`lightColors`),
  resolved live via `useTheme()` and persisted through the same AsyncStorage
  layer as bookmarks. Every UI-chrome file (all 7 screens, `Primitives.tsx`,
  `VerseRow.tsx`, `JumpToVerseModal.tsx`, `LinkedText.tsx`,
  `RootNavigator.tsx`, `App.tsx`) is converted — the 9 diagram SVGs
  deliberately stay on the fixed guṇa-symbolic palette (sattva/rajas/tamas
  colors mean something specific; they're not chrome to be re-themed).

## Reliability & accessibility

A second critical pass (this one across the whole project, not just UI) found
gaps that don't matter for a demo but do matter for something you'll actually
use day to day. Fixed:

- **Crash safety.** Every screen that reads a verse or text from route params
  (`VerseDetailScreen`, `TextIndexScreen`, `ThreadScreen`) used to assume the
  params were always valid (`getText(...)!`). They now degrade to a
  `NotFoundState` screen instead of crashing if that ever isn't true. An
  `ErrorBoundary` wraps the whole app as a last resort, so a bug in one
  screen shows a "try again" card instead of a white screen.
- **A real test suite** (`npm test`, Jest + jest-expo) — 33 tests across two
  files. `crossref.test.ts` checks the reference-linking logic directly
  (valid refs resolve, invalid ones degrade to plain text, multi-reference
  strings reconstruct exactly). `content-integrity.test.ts` checks every
  verse/concept/thread cross-reference in both content files actually
  resolves — this one **already caught a real bug**: Yoga Sūtra I.5 had an
  empty translation field, shipped silently in the previous version. Fixed
  as part of adding the test, not left as a known issue.
- **Accessibility labels** on every icon-only control — the bookmark star,
  theme toggle, share button, prev/next buttons, the verse-jump slider (with
  a proper `accessibilityValue`), and the tap-grid in the jump modal. None of
  this existed before; a screen reader user could get essentially nothing out
  of the app.
- **Dropped two unused font weights** (`Fraunces_600SemiBold`,
  `NotoSerifDevanagari_600SemiBold`) that were loading at launch and never
  actually referenced anywhere — a small but free win for startup time.

## What's still not done

- No cross-verse comparison view (seeing two related verses side by side).
- Diagram SVGs stay on the guṇa-symbolic palette regardless of light/dark
  mode — a deliberate choice (sattva/rajas/tamas colors are subject-matter,
  not UI chrome), not an oversight.
- Test coverage is real but narrow — the two highest-value, easiest-to-break
  pieces (cross-reference resolution, content cross-linking) are covered;
  screens and components themselves have no tests.

## Running it locally (current focus)

No build pipeline, no store submission, no signing keys needed — `npm install`
and `npx expo start` (above) is the whole workflow for personal use.

## If you ever want a shareable .apk later

This project builds with [EAS Build](https://docs.expo.dev/build/introduction/).
The native Android project (`android/`) is already generated in this zip via
`expo prebuild` — you don't need to run that step yourself.

**Path A — EAS cloud build (recommended, no Android Studio needed):**
```
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```
`eas.json`'s `preview` profile is configured to output a plain, installable
`.apk` (not the `.aab` bundle Play Store submission needs — use the
`production` profile for that). EAS builds in the cloud and gives you a
download link when done — a few minutes, no local Android SDK required.

**Path B — build locally**, if you have Android Studio / the Android SDK
installed on your own machine:
```
cd android
./gradlew assembleDebug     # installable .apk, debug-signed, fastest
# or
./gradlew assembleRelease   # release build — needs your own signing key first
```
Output lands in `android/app/build/outputs/apk/debug/` (or `release/`).

**Why this sandbox can't produce the .apk directly:** its network is
allow-listed to package registries (npm, pip, GitHub) only. Confirmed by
attempting the build here — `./gradlew` fails immediately trying to fetch
Gradle itself:
```
Downloading https://services.gradle.org/distributions/gradle-9.3.1-bin.zip
Exception: Server returned HTTP response code: 403
```
Google's Maven (Android dependencies) is blocked the same way. Everything
short of that network boundary — the native project, the build config, the
app itself — is done and verified (type-checks clean, bundles clean).

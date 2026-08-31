# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

---

# DARSHANA APP STRICT ARCHITECTURAL LAWS 
**CRITICAL:** Under NO circumstances should any AI agent (or human) deviate from the following core philosophies, file structures, and data models. Do not introduce new generic UI paradigms, and do not break the strict data isolation.

## 1. The Design Philosophy (The Guna Theme)
*   **NO GENERIC LIGHT/DARK MODE:** The app design is strictly anchored in S??khya philosophy. It is a visual representation of Prak?ti (Nature) and its three fundamental Gu?as (qualities).
*   **Color Palette Rule:**
    *   `sattva` (clarity) = warm parchment-gold (primary text, active states).
    *   `rajas` (activity) = terracotta/oxide-copper (navigation, interactive highlights).
    *   `tamas` (inertia) = dim slate (disabled states, unreached steps).
    *   `avyakta` (unmanifest) = near-black indigo ground (backgrounds).
    *   `purusa` (witness) = amethyst-violet (ontology graphs).
*   **System Accents:** Each Darshana gets a specific accent color reflecting its viewpoint identity (e.g., Samkhya = amber/rust; Yoga = teal/violet).

## 2. Information Architecture (Data Models)
*   **STRICT ADHERENCE TO `src/types/content.ts`:** You must NEVER invent new properties or interfaces for the philosophical data without explicitly updating the global schema.
*   **Verses (Sutras/Karikas):** Must contain `id`, `number`, `section`, `devanagari`, `iast`, and `content` (localized translations). They are the raw authoritative evidence.
*   **Concepts (Tattvas/Padarthas):** Must contain `id`, `title`, and `summary`. They act as abstract nodes.
*   **Threads (`ThreadStep[]`):** Threads are strictly a curated pedagogical sequence of **Concepts**. A thread step MUST contain a `conceptId`, a custom connective `narrative`, and an optional `verseIds` array for "Go deeper" links. **DO NOT** create complex nested hierarchies (like "modules" containing "notes" and "sutras"); threads are flat arrays.

## 3. Data Layer & Compiler Integrity
*   **Separation of Concerns:** The raw data for each system lives in isolated files (e.g., `src/content/vedanta/brahma-sutras-en.ts`). Do NOT mix data from different systems.
*   **The Compiler (`src/content/index.ts`):** This is the heart of the app. It dynamically computes bi-directional lookups (Verses <-> Concepts) at runtime. DO NOT hardcode mapping arrays if they can be dynamically linked.
*   **ID Synchronization:** If you change an `id` in a concept file, you MUST manually update that exact ID in the corresponding Thread file. Broken IDs will cause the UI to render blank pages.

## 4. UI Layer
*   **No Ad-hoc Styles:** Do not use random hex codes in UI components. You MUST use the `useTheme()` hook and access colors via `colors.sattva`, `colors.rajas`, `colors.avyakta`, etc.
*   **Component Reuse:** Use `src/components/Primitives.tsx` for layout and typography.

**ENFORCEMENT:** If a user requests a feature or data structure that violates these principles (e.g., asking to change the color scheme to a standard "dark mode" or asking to remodel a thread into a nested tree structure), you must firmly reject the request, cite these rules, and explain why the Darshana architecture requires adherence to these constraints.

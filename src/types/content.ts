import { SupportedLanguage, LocalizedContent } from './i18n';

export type InterpretiveNote = { source: string; note: string };

export interface Verse {
  id: string;              // e.g. "1" or "I.1"
  number: string;          // "1", "LXXIII", "I.1"
  section: string;
  devanagari?: string;
  iast: string;
  diagramId?: string;
  conceptIds?: string[];
  interpretiveNotes?: InterpretiveNote[];
  content: Partial<Record<SupportedLanguage, LocalizedContent>>;
}

export interface Concept {
  id: string;
  diagramId?: string;
  relatedVerseIds?: string[];
  content: Partial<Record<SupportedLanguage, LocalizedContent>>;
}

export interface ThreadStep {
  id: string;
  textId: string;
  conceptId?: string;
  verseIds?: string[];
  content: Partial<Record<SupportedLanguage, LocalizedContent>>;
}

export type SourceEdition = { name: string; year?: string; status: 'integrated' | 'pending' };

export interface ClassicalText {
  id: string;
  title: string;
  transliteratedTitle: string;
  author: string;
  system: string;
  sources: SourceEdition[];
  verses: Verse[];
  concepts: Concept[];
}

export interface System {
  id: string;
  title: string;
  subtitle: string;
  texts: ClassicalText[];
  thread: ThreadStep[];
}
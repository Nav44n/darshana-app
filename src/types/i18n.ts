export type SupportedLanguage = 'en' | 'ml';

export interface LocalizedContent {
  title?: string;
  translation?: string;
  commentary?: string;
  summary?: string;
  narrative?: string;
  keyPoints?: string[];
}
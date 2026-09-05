import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type BookmarkKey = string; // `${systemId}:${textId}:${verseId}`
type LastReadEntry = { key: BookmarkKey; at: number }; // at = Date.now() when recorded

type ReadingPrefsState = {
  bookmarks: Set<BookmarkKey>;
  fontScale: number;
  appLanguage: 'en' | 'ml';
  toggleLanguage: () => void;
  toggleBookmark: (systemId: string, textId: string, verseId: string) => void;
  isBookmarked: (systemId: string, textId: string, verseId: string) => boolean;
  setFontScale: (scale: number) => void;
  recordLastRead: (systemId: string, textId: string, verseId: string) => void;
  bookmarkList: { systemId: string; textId: string; verseId: string }[];
  lastReadList: { systemId: string; textId: string; verseId: string }[];
  completedThreadSteps: Set<string>;
  toggleThreadStepCompletion: (stepId: string) => void;
  isThreadStepCompleted: (stepId: string) => boolean;
};

const ReadingPrefsContext = createContext<ReadingPrefsState | null>(null);

const STORAGE_KEY = 'darshana:reading-prefs:v1';

// Pre-timestamp storage saved `lastRead` as `{ [textId]: composite-key }` — a
// plain string, not an entry object. Treat any string value as an
// untimestamped legacy read so old local data loads without crashing.
function normalizeLastRead(raw: unknown): Record<string, LastReadEntry> {
  if (!raw || typeof raw !== 'object') return {};
  const out: Record<string, LastReadEntry> = {};
  for (const [textId, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value === 'string') out[textId] = { key: value, at: 0 };
    else if (value && typeof value === 'object' && typeof (value as LastReadEntry).key === 'string') {
      out[textId] = { key: (value as LastReadEntry).key, at: (value as LastReadEntry).at ?? 0 };
    }
  }
  return out;
}

export function ReadingPrefsProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Set<BookmarkKey>>(new Set());
  const [fontScale, setFontScaleState] = useState(1);
  const [lastRead, setLastRead] = useState<Record<string, LastReadEntry>>({});
  const [appLanguage, setAppLanguage] = useState<'en' | 'ml'>('en');
  const [completedThreadSteps, setCompletedThreadSteps] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          setBookmarks(new Set(parsed.bookmarks ?? []));
          setFontScaleState(parsed.fontScale ?? 1);
          setLastRead(normalizeLastRead(parsed.lastRead));
          setAppLanguage(parsed.appLanguage ?? 'en');
          setCompletedThreadSteps(new Set(parsed.completedThreadSteps ?? []));
        }
      } catch {
        // ignore - start fresh
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => {
      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ 
          bookmarks: Array.from(bookmarks), 
          fontScale, 
          lastRead, 
          appLanguage,
          completedThreadSteps: Array.from(completedThreadSteps)
        })
      ).catch(() => {});
    }, 1000);
    return () => clearTimeout(timer);
  }, [bookmarks, fontScale, lastRead, appLanguage, completedThreadSteps, loaded]);

  const toggleBookmark = useCallback((systemId: string, textId: string, verseId: string) => {
    const key = `${systemId}:${textId}:${verseId}`;
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (systemId: string, textId: string, verseId: string) =>
      bookmarks.has(`${systemId}:${textId}:${verseId}`),
    [bookmarks]
  );

  const recordLastRead = useCallback((systemId: string, textId: string, verseId: string) => {
    setLastRead((prev) => ({ ...prev, [textId]: { key: `${systemId}:${textId}:${verseId}`, at: Date.now() } }));
  }, []);



  const toggleLanguage = useCallback(() => {
    setAppLanguage((prev) => (prev === 'en' ? 'ml' : 'en'));
  }, []);

  const toggleThreadStepCompletion = useCallback((stepId: string) => {
    setCompletedThreadSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  }, []);

  const isThreadStepCompleted = useCallback((stepId: string) => completedThreadSteps.has(stepId), [completedThreadSteps]);

  const bookmarkList = React.useMemo(() => Array.from(bookmarks).map((key) => {
    const [systemId, textId, verseId] = key.split(':');
    return { systemId, textId, verseId };
  }), [bookmarks]);

  const lastReadList = React.useMemo(() => Object.values(lastRead)
    .sort((a, b) => b.at - a.at)
    .map(({ key }) => {
      const [systemId, textId, verseId] = key.split(':');
      return { systemId, textId, verseId };
    }), [lastRead]);

  const providerValue = React.useMemo(() => ({
    bookmarks,
    fontScale,
    toggleBookmark,
    isBookmarked,
    setFontScale: setFontScaleState,
    recordLastRead,
    appLanguage,
    toggleLanguage,
    bookmarkList,
    lastReadList,
    completedThreadSteps,
    toggleThreadStepCompletion,
    isThreadStepCompleted,
  }), [
    bookmarks, fontScale, appLanguage, 
    completedThreadSteps, bookmarkList, lastReadList,
    toggleBookmark, isBookmarked, recordLastRead, 
    toggleLanguage, toggleThreadStepCompletion, isThreadStepCompleted
  ]);

  return (
    <ReadingPrefsContext.Provider value={providerValue}>
      {children}
    </ReadingPrefsContext.Provider>
  );
}

export function useReadingPrefs() {
  const ctx = useContext(ReadingPrefsContext);
  if (!ctx) throw new Error('useReadingPrefs must be used within ReadingPrefsProvider');
  return ctx;
}

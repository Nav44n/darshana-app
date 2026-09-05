import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type BookmarkKey = string; // `${systemId}:${textId}:${verseId}`
type LastReadEntry = { key: BookmarkKey; at: number }; // at = Date.now() when recorded

type DisplayPrefsState = {
  fontScale: number;
  appLanguage: 'en' | 'ml';
  toggleLanguage: () => void;
  setFontScale: (scale: number) => void;
};

type ProgressPrefsState = {
  bookmarks: Set<BookmarkKey>;
  toggleBookmark: (systemId: string, textId: string, verseId: string) => void;
  isBookmarked: (systemId: string, textId: string, verseId: string) => boolean;
  bookmarkList: { systemId: string; textId: string; verseId: string }[];
  
  recordLastRead: (systemId: string, textId: string, verseId: string) => void;
  lastReadList: { systemId: string; textId: string; verseId: string }[];
  
  completedThreadSteps: Set<string>;
  toggleThreadStepCompletion: (stepId: string) => void;
  isThreadStepCompleted: (stepId: string) => boolean;
};

const DisplayPrefsContext = createContext<DisplayPrefsState | null>(null);
const ProgressPrefsContext = createContext<ProgressPrefsState | null>(null);

const STORAGE_KEY = 'darshana:reading-prefs:v2'; // bumped to v2 for structure change if needed, but we keep the same structure below

// Pre-timestamp storage saved `lastRead` as `{ [textId]: composite-key }` - a
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
  const [completedThreadSteps, setCompletedThreadSteps] = useState<Set<string>>(new Set());
  const [appLanguage, setAppLanguage] = useState<'en' | 'ml'>('en');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(saved => {
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.bookmarks) setBookmarks(new Set(parsed.bookmarks));
          if (parsed.fontScale) setFontScaleState(parsed.fontScale);
          if (parsed.lastRead) setLastRead(normalizeLastRead(parsed.lastRead));
          if (parsed.completedThreadSteps) setCompletedThreadSteps(new Set(parsed.completedThreadSteps));
          if (parsed.appLanguage) setAppLanguage(parsed.appLanguage);
        } catch (e) {
          console.warn('Failed to parse reading prefs', e);
        }
      }
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const saveState = {
      bookmarks: Array.from(bookmarks),
      fontScale,
      lastRead,
      completedThreadSteps: Array.from(completedThreadSteps),
      appLanguage,
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(saveState));
  }, [bookmarks, fontScale, lastRead, completedThreadSteps, appLanguage, loaded]);

  const toggleBookmark = useCallback((systemId: string, textId: string, verseId: string) => {
    const key = `${systemId}:${textId}:${verseId}`;
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (systemId: string, textId: string, verseId: string) => {
      return bookmarks.has(`${systemId}:${textId}:${verseId}`);
    },
    [bookmarks]
  );

  const bookmarkList = Array.from(bookmarks).map(key => {
    const [systemId, textId, verseId] = key.split(':');
    return { systemId, textId, verseId };
  });

  const recordLastRead = useCallback((systemId: string, textId: string, verseId: string) => {
    const key = `${systemId}:${textId}:${verseId}`;
    setLastRead(prev => {
      if (prev[textId]?.key === key) return prev; // no-op if identical
      return { ...prev, [textId]: { key, at: Date.now() } };
    });
  }, []);

  const lastReadList = Object.values(lastRead)
    .sort((a, b) => b.at - a.at)
    .map(entry => {
      const [systemId, textId, verseId] = entry.key.split(':');
      return { systemId, textId, verseId };
    });

  const setFontScale = useCallback((scale: number) => {
    setFontScaleState(Math.max(0.8, Math.min(2.0, scale)));
  }, []);

  const toggleLanguage = useCallback(() => {
    setAppLanguage(prev => (prev === 'en' ? 'ml' : 'en'));
  }, []);

  const toggleThreadStepCompletion = useCallback((stepId: string) => {
    setCompletedThreadSteps(prev => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  }, []);

  const isThreadStepCompleted = useCallback(
    (stepId: string) => completedThreadSteps.has(stepId),
    [completedThreadSteps]
  );

  if (!loaded) return null; // or a minimal loading state

  const displayPrefs = {
    fontScale,
    setFontScale,
    appLanguage,
    toggleLanguage,
  };

  const progressPrefs = {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    bookmarkList,
    recordLastRead,
    lastReadList,
    completedThreadSteps,
    toggleThreadStepCompletion,
    isThreadStepCompleted,
  };

  return (
    <DisplayPrefsContext.Provider value={displayPrefs}>
      <ProgressPrefsContext.Provider value={progressPrefs}>
        {children}
      </ProgressPrefsContext.Provider>
    </DisplayPrefsContext.Provider>
  );
}

export function useDisplayPrefs() {
  const ctx = useContext(DisplayPrefsContext);
  if (!ctx) throw new Error('useDisplayPrefs must be used within ReadingPrefsProvider');
  return ctx;
}

export function useProgressPrefs() {
  const ctx = useContext(ProgressPrefsContext);
  if (!ctx) throw new Error('useProgressPrefs must be used within ReadingPrefsProvider');
  return ctx;
}

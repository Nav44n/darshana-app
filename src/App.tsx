/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useParams, Navigate } from 'react-router';
import { PreferencesProvider, usePreferences } from './context/PreferencesContext';
import { LanguageProvider } from './context/LanguageContext';
import { ReadingProvider } from './context/ReadingContext';
import { systems } from './content';
import { t } from './i18n/ui';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import { AppShell } from './components/shell/AppShell';
import { HomeView } from './components/pillars/HomeView';
import { SystemsView } from './components/pillars/SystemsView';
import { InquiriesView } from './components/pillars/InquiriesView';
import { LibraryView } from './components/pillars/LibraryView';
import { SupportedLanguage } from './types/preferences';

// Lazy-loaded detailed and reader views
const Intro = lazy(() => import('./components/Intro'));
const SystemDetail = lazy(() => import('./components/SystemDetail'));
const TextIndex = lazy(() => import('./components/TextIndex'));
const VerseDetail = lazy(() => import('./components/VerseDetail'));
const ConceptDetail = lazy(() => import('./components/ConceptDetail'));
const ThreadView = lazy(() => import('./components/ThreadView'));

function ScreenFallback() {
  const { language } = usePreferences();
  return (
    <div className="py-20 text-center text-sattva-dim text-sm animate-pulse">
      {t(language, 'loading')}
    </div>
  );
}

/** Synchronizes the URL language prefix (if present) with global PreferencesContext */
function RouteLanguageSync() {
  const { lang } = useParams();
  const { language, setLanguage } = usePreferences();

  useEffect(() => {
    if (lang && (lang === 'ml' || lang === 'en') && lang !== language) {
      setLanguage(lang as SupportedLanguage);
    }
  }, [lang, language, setLanguage]);

  return null;
}

/** Resolves shorthand text URLs (e.g. /text/:textId) to canonical system routes */
function TextRouteResolver({ type }: { type: 'index' | 'verse' | 'concept' }) {
  const { textId, verseId, conceptId } = useParams();
  const system = systems.find((s) => s.texts.some((t) => t.id === textId));

  if (!system) {
    return <Navigate to="/library" replace />;
  }

  if (type === 'verse' && verseId) {
    return <Navigate to={`/system/${system.id}/text/${textId}/verse/${verseId}`} replace />;
  }
  if (type === 'concept' && conceptId) {
    return <Navigate to={`/system/${system.id}/text/${textId}/concept/${conceptId}`} replace />;
  }
  return <Navigate to={`/system/${system.id}/text/${textId}`} replace />;
}

export default function App() {
  return (
    <PreferencesProvider>
      <LanguageProvider>
        <ReadingProvider>
          <HashRouter>
            <ScrollToTop />
            <AppShell>
              <ErrorBoundary>
                <Suspense fallback={<ScreenFallback />}>
                  <Routes>
                    {/* ── 4 Pillars (Canonical & Default Routes) ───────── */}
                    <Route path="/" element={<HomeView />} />
                    <Route path="/systems" element={<SystemsView />} />
                    <Route path="/inquiries" element={<InquiriesView />} />
                    <Route path="/library" element={<LibraryView />} />
                    <Route path="/intro" element={<Intro />} />

                    {/* ── Language-Prefixed 4 Pillars ──────────────────── */}
                    <Route
                      path="/:lang"
                      element={
                        <>
                          <RouteLanguageSync />
                          <HomeView />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/systems"
                      element={
                        <>
                          <RouteLanguageSync />
                          <SystemsView />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/inquiries"
                      element={
                        <>
                          <RouteLanguageSync />
                          <InquiriesView />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/library"
                      element={
                        <>
                          <RouteLanguageSync />
                          <LibraryView />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/intro"
                      element={
                        <>
                          <RouteLanguageSync />
                          <Intro />
                        </>
                      }
                    />

                    {/* ── System Details & Exploration ─────────────────── */}
                    <Route path="/system/:systemId" element={<SystemDetail />} />
                    <Route path="/system/:systemId/thread" element={<ThreadView />} />
                    <Route path="/system/:systemId/explore" element={<ThreadView />} />
                    <Route
                      path="/:lang/system/:systemId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <SystemDetail />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/system/:systemId/thread"
                      element={
                        <>
                          <RouteLanguageSync />
                          <ThreadView />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/system/:systemId/explore"
                      element={
                        <>
                          <RouteLanguageSync />
                          <ThreadView />
                        </>
                      }
                    />

                    {/* ── Text Index & Corpus Reading ─────────────────── */}
                    <Route path="/system/:systemId/text/:textId" element={<TextIndex />} />
                    <Route path="/system/:systemId/text/:textId/verse/:verseId" element={<VerseDetail />} />
                    <Route path="/system/:systemId/text/:textId/concept/:conceptId" element={<ConceptDetail />} />

                    <Route
                      path="/:lang/system/:systemId/text/:textId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <TextIndex />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/system/:systemId/text/:textId/verse/:verseId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <VerseDetail />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/system/:systemId/text/:textId/concept/:conceptId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <ConceptDetail />
                        </>
                      }
                    />

                    {/* ── Shorthand Canonical Text & Verse Routes ─────── */}
                    <Route path="/text/:textId" element={<TextRouteResolver type="index" />} />
                    <Route path="/text/:textId/verse/:verseId" element={<TextRouteResolver type="verse" />} />
                    <Route path="/text/:textId/concept/:conceptId" element={<TextRouteResolver type="concept" />} />

                    <Route
                      path="/:lang/text/:textId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <TextRouteResolver type="index" />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/text/:textId/verse/:verseId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <TextRouteResolver type="verse" />
                        </>
                      }
                    />
                    <Route
                      path="/:lang/text/:textId/concept/:conceptId"
                      element={
                        <>
                          <RouteLanguageSync />
                          <TextRouteResolver type="concept" />
                        </>
                      }
                    />

                    {/* Fallback to Home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </AppShell>
          </HashRouter>
        </ReadingProvider>
      </LanguageProvider>
    </PreferencesProvider>
  );
}

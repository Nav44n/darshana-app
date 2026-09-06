/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ConsciousChat from './components/ConsciousChat';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const Home = lazy(() => import('./components/Home'));
const SystemDetail = lazy(() => import('./components/SystemDetail'));
const TextIndex = lazy(() => import('./components/TextIndex'));
const VerseDetail = lazy(() => import('./components/VerseDetail'));
const ThreadView = lazy(() => import('./components/ThreadView'));

function ScreenFallback() {
  return (
    <div className="py-16 text-center text-neutral-400 text-sm animate-pulse">
      Loading...
    </div>
  );
}


function HeaderNav() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-bold tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors">
          Darśana
        </Link>
        <div className="flex items-center space-x-1 bg-neutral-100 p-1 rounded-lg border border-neutral-200 text-xs font-medium">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 rounded transition-colors ${
              language === 'en'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ml')}
            className={`px-2.5 py-1 rounded transition-colors ${
              language === 'ml'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            മലയാളം
          </button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
          <HeaderNav />
          <main className="max-w-4xl mx-auto px-4 py-8">
            <Suspense fallback={<ScreenFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/system/:systemId" element={<SystemDetail />} />
                <Route path="/system/:systemId/thread" element={<ThreadView />} />
                <Route path="/system/:systemId/text/:textId" element={<TextIndex />} />
                <Route path="/system/:systemId/text/:textId/verse/:verseId" element={<VerseDetail />} />
              </Routes>
            </Suspense>
          </main>
          <ConsciousChat />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}


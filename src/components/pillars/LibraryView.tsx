import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { BookOpen, Search, ArrowRight, Library as LibraryIcon, FileText } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes } from '../../utils/navigation';
import { systems } from '../../content';
import { getSystemAccent } from '../../utils/theme';
import { darkColors, lightColors } from '../../theme/tokens';

export const LibraryView: React.FC = () => {
  const { language, theme } = usePreferences();
  const palette = theme === 'dark' ? darkColors : lightColors;
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');

  // Collect all texts across systems
  const allTexts = useMemo(() => {
    const list: Array<{
      textId: string;
      title: string;
      transliteratedTitle?: string;
      systemId: string;
      systemTitle: string;
      verseCount: number;
    }> = [];

    for (const sys of systems) {
      for (const t of sys.texts) {
        list.push({
          textId: t.id,
          title: t.title,
          transliteratedTitle: t.transliteratedTitle,
          systemId: sys.id,
          systemTitle: sys.title,
          verseCount: t.verses.length,
        });
      }
    }
    return list;
  }, []);

  const filteredTexts = useMemo(() => {
    return allTexts.filter((item) => {
      const matchSys = selectedSystem === 'all' || item.systemId === selectedSystem;
      const q = filterQuery.toLowerCase().trim();
      if (!q) return matchSys;
      const matchText =
        item.title.toLowerCase().includes(q) ||
        (item.transliteratedTitle && item.transliteratedTitle.toLowerCase().includes(q)) ||
        item.systemTitle.toLowerCase().includes(q);
      return matchSys && matchText;
    });
  }, [allTexts, selectedSystem, filterQuery]);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Header */}
      <div className="border-b border-tamas-deep pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <LibraryIcon className="w-6 h-6 text-amber" aria-hidden="true" />
          <h1 className="text-2xl sm:text-4xl font-serif font-medium text-sattva-bright">
            {language === 'ml' ? 'ഗ്രന്ഥശാല' : 'The Classical Library'}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-sattva-dim font-serif italic max-w-2xl leading-relaxed">
          {language === 'ml'
            ? 'ഭാരതീയ തത്ത്വചിന്താ പാരമ്പര്യത്തിലെ മൂല സംസ്കൃത ഗ്രന്ഥങ്ങളുടെയും വ്യാഖ്യാനങ്ങളുടെയും ആധികാരിക ശേഖരം.'
            : 'Authoritative primary source texts, sūtras, kārikās, and commentaries across all classical traditions.'}
        </p>
      </div>

      {/* Filter and System Picker */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* System Filter Select / Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-avyakta-2 border border-tamas-deep overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setSelectedSystem('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              selectedSystem === 'all'
                ? 'bg-rajas text-sattva-bright font-semibold'
                : 'text-sattva-dim hover:text-sattva'
            }`}
          >
            {language === 'ml' ? 'എല്ലാ ഗ്രന്ഥങ്ങളും' : 'All Texts'} ({allTexts.length})
          </button>
          {systems.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSystem(s.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedSystem === s.id
                  ? 'bg-rajas text-sattva-bright font-semibold'
                  : 'text-sattva-dim hover:text-sattva'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-sattva-dim absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="search"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={language === 'ml' ? 'ഗ്രന്ഥങ്ങൾ തിരയുക...' : 'Search texts...'}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-avyakta-2 border border-tamas-deep text-xs text-sattva placeholder:text-sattva-dim/60 focus-visible:outline-2 focus-visible:outline-rajas"
          />
        </div>
      </div>

      {/* Texts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTexts.map((text) => {
          const accent = getSystemAccent(text.systemId);
          return (
            <div
              key={`${text.systemId}-${text.textId}`}
              className="p-6 rounded-2xl bg-avyakta-2 border border-tamas-deep hover:border-sattva/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] uppercase font-mono px-2 py-0.5 rounded-md border text-sattva"
                    style={{ borderColor: accent.primary, backgroundColor: `${accent.primary}15` }}
                  >
                    {text.systemTitle}
                  </span>
                  <span className="text-xs font-mono text-sattva-dim">
                    {text.verseCount} {language === 'ml' ? 'ശ്ലോകങ്ങൾ' : 'verses'}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-serif font-medium text-sattva-bright">
                  {text.title}
                </h2>

                {text.transliteratedTitle && (
                  <p className="text-xs text-sattva-dim line-clamp-2 italic font-serif">
                    {text.transliteratedTitle}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-tamas-deep flex items-center justify-between gap-2">
                <Link
                  to={routes.text(language, text.textId, text.systemId)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sattva hover:text-rajas transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{language === 'ml' ? 'സൂചിക കാണുക' : 'Index'}</span>
                </Link>

                <Link
                  to={routes.verse(language, text.textId, 1, text.systemId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rajas/15 border border-rajas/30 text-rajas hover:bg-rajas/25 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>{language === 'ml' ? 'വായന തുടങ്ങുക' : 'Read'}</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

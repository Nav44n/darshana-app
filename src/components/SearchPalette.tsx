import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { createPortal } from 'react-dom';
import { Search as SearchIcon, X as ClearIcon, History as HistoryIcon } from 'lucide-react';
import { systems, getSystem, getText } from '../content';
import { searchVerses } from '../utils/searchIndex';
import { getConceptTitle, getConceptSummary, getThreadStepTitle, type ConceptHit } from '../utils/references';
import { getRecentSearches, recordSearch, clearSearches } from '../utils/searchHistory';
import { getVerseTerm } from '../utils/textTerminology';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';

interface PaletteRow {
  key: string;
  href: string;
  title: string;
  context: string;
}

/** Mirrors the Home deep-link rule (UX-009): single-text systems open directly. */
function systemHref(systemId: string): string {
  const s = getSystem(systemId);
  if (s && s.texts.length === 1) return `/system/${systemId}/text/${s.texts[0].id}`;
  return `/system/${systemId}`;
}

/**
 * UX-012 — Corpus command palette.
 *
 * The ranked verse engine (searchIndex.ts) shipped with no UI, leaving 2000+
 * verses reachable only by drill-down. This palette exposes it alongside
 * concept, thread-step and text jumps behind the 2026-standard Ctrl/⌘K
 * gesture plus a header trigger. All data stays local; the verse index
 * builds lazily on first keystroke.
 */
export default function SearchPalette() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [recents, setRecents] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const dismiss = () => {
    setOpen(false);
    setQuery('');
    setActive(0);
  };

  // A followed result redeems its query: remember it for the empty-state
  // shortcuts. Blanks are ignored by the store itself.
  const recordCurrentQuery = () => {
    const q = query.trim();
    if (!q) return;
    recordSearch(q);
  };

  const handleResultClick = () => {
    recordCurrentQuery();
    dismiss();
  };

  const closeReturnFocus = () => {
    dismiss();
    triggerRef.current?.focus();
  };

  // Global toggle; the input itself handles Escape/arrows/Enter.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Autofocus + lock background scroll while open. Recents refresh on
  // every opening since the palette stays mounted in the header.
  useEffect(() => {
    if (!open) return;
    setRecents(getRecentSearches());
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open ]);

  // Pre-typed browse shortcuts: every darshana, one tap away.
  const browse: PaletteRow[] = useMemo(
    () =>
      systems.map((s) => ({
        key: `browse:${s.id}`,
        href: systemHref(s.id as string),
        title: getSystemDisplay(s, language).title,
        context: getSystemDisplay(s, language).subtitle,
      })),
    [language],
  );

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const nav: PaletteRow[] = [];
    for (const s of systems) {
      const display = getSystemDisplay(s, language);
      if (
        display.title.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        (s.id as string).includes(q)
      ) {
        nav.push({
          key: `sys:${s.id}`,
          href: systemHref(s.id as string),
          title: display.title,
          context: t(language, 'systemsLabel'),
        });
      }
      for (const txt of s.texts) {
        if (
          txt.transliteratedTitle.toLowerCase().includes(q) ||
          (txt.id as string).includes(q)
        ) {
          nav.push({
            key: `txt:${s.id}:${txt.id}`,
            href: `/system/${s.id}/text/${txt.id}`,
            title: txt.transliteratedTitle,
            context: display.title,
          });
        }
      }
      if (nav.length >= 6) break;
    }

    const concepts: PaletteRow[] = [];
    outer: for (const s of systems) {
      for (const txt of s.texts) {
        for (const c of txt.concepts || []) {
          const hit: ConceptHit = {
            systemId: s.id as string,
            textId: txt.id as string,
            concept: c,
          };
          const title = getConceptTitle(hit, language);
          const summary = getConceptSummary(hit, language) || '';
          if (
            title.toLowerCase().includes(q) ||
            summary.toLowerCase().includes(q) ||
            (c.category || '').toLowerCase().includes(q) ||
            (c.id as string).toLowerCase().includes(q)
          ) {
            concepts.push({
              key: `con:${s.id}:${txt.id}:${c.id}`,
              href: `/system/${s.id}/text/${txt.id}/concept/${c.id}`,
              title,
              context: `${getSystemDisplay(s, language).title} • ${txt.transliteratedTitle}`,
            });
            if (concepts.length >= 8) break outer;
          }
        }
      }
    }

    const steps: PaletteRow[] = [];
    for (const s of systems) {
      const total = s.thread?.length ?? 0;
      (s.thread || []).forEach((step, i) => {
        if (steps.length >= 6) return;
        const title = getThreadStepTitle(step, language);
        if (title.toLowerCase().includes(q)) {
          steps.push({
            key: `thr:${s.id}:${i}`,
            href: `/system/${s.id}/thread?step=${i + 1}`,
            title: `${t(language, 'stepOf', { current: i + 1, total })}: ${title}`,
            context: getSystemDisplay(s, language).title,
          });
        }
      });
    }

    const verses: PaletteRow[] = searchVerses(query.trim())
      .slice(0, 12)
      .map(({ item }) => {
        const translation =
          item.verse.content[language]?.translation ||
          item.verse.content.en?.translation ||
          '';
        return {
          key: `ver:${item.systemId}:${item.textId}:${item.verse.id}`,
          href: `/system/${item.systemId}/text/${item.textId}/verse/${item.verse.id}`,
          title: `${getVerseTerm(getText(item.systemId, item.textId), 1)} ${item.verse.number}`,
          context: `${item.systemTitle} • ${item.textTitle}${
            translation ? ` — ${translation.slice(0, 90)}` : ''
          }`,
        };
      });

    return { nav, concepts, steps, verses };
  }, [query, language]);

  const flat: PaletteRow[] = groups
    ? [...groups.nav, ...groups.concepts, ...groups.steps, ...groups.verses]
    : [];

  // Keep the keyboard-active row in view.
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeReturnFocus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, Math.max(flat.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      const row = flat[active];
      if (row) {
        e.preventDefault();
        recordCurrentQuery();
        dismiss();
        navigate(row.href);
      }
    }
  };

  const renderGroup = (heading: string, rows: PaletteRow[], offset: number) => {
    if (rows.length === 0) return null;
    return (
      <div key={heading}>
        <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-tamas">
          {heading} ({rows.length})
        </div>
        {rows.map((row, i) => {
          const idx = offset + i;
          return (
            <Link
              key={row.key}
              to={row.href}
              data-idx={idx}
              onClick={handleResultClick}
              onMouseEnter={() => setActive(idx)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl min-h-11 transition-colors motion-reduce:transition-none ${
                idx === active ? 'bg-avyakta-3' : ''
              }`}
            >
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium text-sattva truncate">
                  {row.title}
                </span>
                <span className="block text-xs text-sattva-dim truncate">
                  {row.context}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-keyshortcuts="Control+k Meta+k"
        className="flex flex-1 sm:w-56 sm:flex-none min-w-0 items-center gap-2 min-h-11 px-3 rounded-lg bg-avyakta-3 border border-tamas-deep text-sm text-sattva-dim hover:text-sattva transition-colors motion-reduce:transition-none"
      >
        <SearchIcon aria-hidden="true" className="w-4 h-4 shrink-0" />
        <span className="truncate">{t(language, 'searchTrigger')}</span>
        <kbd
          aria-hidden="true"
          className="hidden sm:inline ml-auto text-xs text-tamas border border-tamas-deep rounded px-1.5 py-0.5"
        >
          ⌘K
        </kbd>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label={t(language, 'searchTitle')}
          >
            <div
              aria-hidden="true"
              onClick={closeReturnFocus}
              className="absolute inset-0 bg-overlay"
            />
            <div className="relative max-w-lg mx-auto mt-[10vh] px-4">
              <div className="bg-avyakta-2 border border-tamas-deep rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                <div className="flex items-center gap-2 px-4 border-b border-tamas-deep">
                  <SearchIcon aria-hidden="true" className="w-4 h-4 shrink-0 text-tamas" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setActive(0);
                    }}
                    onKeyDown={onInputKey}
                    placeholder={t(language, 'searchPlaceholder')}
                    aria-label={t(language, 'searchTitle')}
                    className="flex-1 min-w-0 bg-transparent py-4 text-base text-sattva placeholder:text-tamas focus:outline-none"
                  />
                  {query ? (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery('');
                        setActive(0);
                        inputRef.current?.focus();
                      }}
                      aria-label={t(language, 'clearLabel')}
                      className="flex items-center justify-center min-h-11 min-w-11 rounded-lg text-sattva-dim hover:text-sattva hover:bg-avyakta-3 transition-colors motion-reduce:transition-none"
                    >
                      <ClearIcon aria-hidden="true" className="w-4 h-4" />
                    </button>
                  ) : (
                    <kbd
                      aria-hidden="true"
                      className="text-xs text-tamas border border-tamas-deep rounded px-1.5 py-0.5"
                    >
                      esc
                    </kbd>
                  )}
                </div>

                <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2">
                  {!groups && (
                    <>
                      {recents.length > 0 && (
                        <div>
                          <div className="px-3 pt-3 pb-1 flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-tamas">
                              {t(language, 'recentSearches')} ({recents.length})
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                clearSearches();
                                setRecents([]);
                                inputRef.current?.focus();
                              }}
                              aria-label={t(language, 'clearLabel')}
                              className="flex items-center justify-center min-h-9 min-w-9 rounded-lg text-sattva-dim hover:text-sattva hover:bg-avyakta-3 transition-colors motion-reduce:transition-none"
                            >
                              <ClearIcon aria-hidden="true" className="w-4 h-4" />
                            </button>
                          </div>
                          {recents.map((r) => (
                            <button
                              key={`recent:${r}`}
                              type="button"
                              onClick={() => {
                                setQuery(r);
                                setActive(0);
                                inputRef.current?.focus();
                              }}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl min-h-11 text-left hover:bg-avyakta-3 transition-colors motion-reduce:transition-none"
                            >
                              <HistoryIcon aria-hidden="true" className="w-4 h-4 shrink-0 text-tamas" />
                              <span className="flex-1 min-w-0 block text-sm text-sattva truncate">
                                {r}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                      <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-tamas">
                        {t(language, 'systemsLabel')}
                      </div>
                      {browse.map((row, i) => (
                        <Link
                          key={row.key}
                          to={row.href}
                          data-idx={i}
                          onClick={handleResultClick}
                          onMouseEnter={() => setActive(i)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl min-h-11 transition-colors motion-reduce:transition-none ${
                            i === active ? 'bg-avyakta-3' : ''
                          }`}
                        >
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-medium text-sattva truncate">
                              {row.title}
                            </span>
                            <span className="block text-xs text-sattva-dim truncate">
                              {row.context}
                            </span>
                          </span>
                        </Link>
                      ))}
                      <div className="px-3 py-3 text-xs text-tamas">
                        {t(language, 'searchEmpty')}
                      </div>
                    </>
                  )}

                  {groups && flat.length === 0 && (
                    <div className="px-3 py-6 text-sm text-sattva-dim text-center">
                      {t(language, 'searchNoResults', { query: query.trim() })}
                    </div>
                  )}

                  {groups && (
                    <>
                      {renderGroup(t(language, 'systemsLabel'), groups.nav, 0)}
                      {renderGroup(
                        t(language, 'conceptsLabel'),
                        groups.concepts,
                        groups.nav.length,
                      )}
                      {renderGroup(
                        t(language, 'threadLabel'),
                        groups.steps,
                        groups.nav.length + groups.concepts.length,
                      )}
                      {renderGroup(
                        t(language, 'versesLabel'),
                        groups.verses,
                        groups.nav.length + groups.concepts.length + groups.steps.length,
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

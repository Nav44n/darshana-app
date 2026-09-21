import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Home, Compass, HelpCircle, Library, Sliders, Globe, Search } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes, getLocalizedPath } from '../../utils/navigation';
import { ReadingPreferencesModal } from './ReadingPreferencesModal';
import SearchPalette from '../SearchPalette';

export interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { language, setLanguage, theme } = usePreferences();
  const location = useLocation();
  const navigate = useNavigate();
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  // Determine active pillar based on path
  const pathname = location.pathname;
  const isHome = pathname === `/${language}` || pathname === `/${language}/` || pathname === '/';
  const isSystems = pathname.includes('/systems') || pathname.includes('/system/');
  const isInquiries = pathname.includes('/inquiries') || pathname.includes('/inquiry/') || pathname.includes('/concept/');
  const isLibrary = pathname.includes('/library') || pathname.includes('/text/');

  const handleLanguageSwitch = () => {
    const nextLang = language === 'ml' ? 'en' : 'ml';
    setLanguage(nextLang);
    const newPath = getLocalizedPath(location.pathname + location.search + location.hash, nextLang);
    navigate(newPath, { replace: true });
  };

  const navItems = [
    {
      id: 'home',
      labelMl: 'തുടക്കം',
      labelEn: 'Home',
      icon: Home,
      to: routes.home(language),
      active: isHome,
    },
    {
      id: 'systems',
      labelMl: 'ദർശനങ്ങൾ',
      labelEn: 'Systems',
      icon: Compass,
      to: routes.systems(language),
      active: isSystems,
    },
    {
      id: 'inquiries',
      labelMl: 'തത്ത്വവിചാരം',
      labelEn: 'Inquiries',
      icon: HelpCircle,
      to: routes.inquiries(language),
      active: isInquiries,
    },
    {
      id: 'library',
      labelMl: 'ഗ്രന്ഥശാല',
      labelEn: 'Library',
      icon: Library,
      to: routes.library(language),
      active: isLibrary,
    },
  ];

  return (
    <div className="min-h-screen bg-avyakta text-sattva flex flex-col font-sans transition-colors duration-base">
      {/* ── Skip Link for Accessibility ─────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-rajas text-sattva-bright rounded-lg font-medium shadow-lg transition-transform"
      >
        {language === 'ml' ? 'പ്രധാന ഉള്ളടക്കത്തിലേക്ക് പോകുക' : 'Skip to main content'}
      </a>

      {/* ── Global Header (Desktop & Mobile) ────────────────────── */}
      <header
        role="banner"
        className="sticky top-0 z-40 w-full border-b border-tamas-deep bg-avyakta/95 backdrop-blur-md transition-colors"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link
            to={routes.home(language)}
            className="flex items-center gap-2.5 text-sattva hover:text-sattva-bright transition-colors cursor-pointer group"
          >
            <span className="w-7 h-7 rounded-lg bg-rajas flex items-center justify-center text-sattva-bright font-serif font-bold text-sm shadow-xs">
              ദ
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight leading-none group-hover:text-rajas transition-colors">
                {language === 'ml' ? 'ദർശനം' : 'Darśana'}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-sattva-dim">
                Classical Philosophy
              </span>
            </div>
          </Link>

          {/* Desktop 4-Pillar Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-avyakta-2 p-1 rounded-xl border border-tamas-deep"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  aria-current={item.active ? 'page' : undefined}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    item.active
                      ? 'bg-rajas text-sattva-bright shadow-xs'
                      : 'text-sattva-dim hover:text-sattva hover:bg-avyakta-3/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{language === 'ml' ? item.labelMl : item.labelEn}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Bar (Search trigger, Reading Prefs, Language) */}
          <div className="flex items-center gap-2">
            {/* Preferences Modal Trigger */}
            <button
              type="button"
              onClick={() => setPreferencesOpen(true)}
              aria-label={language === 'ml' ? 'വായനാ ക്രമീകരണങ്ങൾ' : 'Reading preferences'}
              title={language === 'ml' ? 'വായനാ ക്രമീകരണങ്ങൾ' : 'Reading preferences'}
              className="p-2 rounded-xl border border-tamas-deep bg-avyakta-2 text-sattva-dim hover:text-sattva hover:border-tamas transition-colors cursor-pointer"
            >
              <Sliders className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Language Switcher with full Route Preservation */}
            <button
              type="button"
              onClick={handleLanguageSwitch}
              aria-label={language === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറ്റുക'}
              title={language === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറ്റുക'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-tamas-deep bg-avyakta-2 text-xs font-semibold text-sattva hover:border-rajas hover:text-rajas transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-purusha" aria-hidden="true" />
              <span>{language === 'ml' ? 'EN' : 'മലയാളം'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Content Landmark ───────────────────────────────── */}
      <main id="main-content" className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 pb-28 md:pb-12 min-w-0">
        {children}
      </main>

      {/* ── Mobile 4-Pillar Bottom Bar (Touch Targets >= 44px) ───── */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-avyakta/95 backdrop-blur-md border-t border-tamas-deep pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.to}
                aria-current={item.active ? 'page' : undefined}
                className={`flex flex-col items-center justify-center min-h-[44px] gap-1 transition-colors relative cursor-pointer ${
                  item.active ? 'text-rajas font-semibold' : 'text-sattva-dim hover:text-sattva'
                }`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span className="text-[11px] leading-none">
                  {language === 'ml' ? item.labelMl : item.labelEn}
                </span>
                {item.active && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-rajas" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── Reading Preferences Modal ───────────────────────────── */}
      <ReadingPreferencesModal
        isOpen={preferencesOpen}
        onClose={() => setPreferencesOpen(false)}
      />

      {/* ── Universal Search Palette (Ctrl/⌘K) ───────────────────── */}
      <SearchPalette />
    </div>
  );
};

import React, { useEffect, useRef, useId } from 'react';
import { X, Moon, Sun, Type, Sliders, Sparkles, BookOpen, Layers } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { ReadingLens, AppTheme } from '../../types/preferences';

export interface ReadingPreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadingPreferencesModal: React.FC<ReadingPreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    language,
    theme,
    setTheme,
    readingLens,
    setReadingLens,
    fontScale,
    setFontScale,
    reducedMotion,
    setReducedMotion,
  } = usePreferences();

  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-avyakta-2 border border-tamas-deep shadow-2xl p-6 sm:p-7 space-y-6 text-sattva"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-tamas-deep pb-4">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-rajas" aria-hidden="true" />
            <h2 id={titleId} className="text-lg sm:text-xl font-serif font-medium text-sattva-bright">
              {language === 'ml' ? 'വായനാ ക്രമീകരണങ്ങൾ' : 'Reading Preferences'}
            </h2>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={language === 'ml' ? 'അടയ്ക്കുക' : 'Close'}
            className="p-1.5 rounded-lg text-sattva-dim hover:text-sattva hover:bg-avyakta-3 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* 1. Guṇa Theme (Dark Ground vs Warm Palm Parchment) */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-sattva-dim block">
            {language === 'ml' ? 'വർണ്ണ പശ്ചാത്തലം (Guṇa Theme)' : 'Visual Ground (Guṇa Theme)'}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left cursor-pointer transition-colors ${
                theme === 'dark'
                  ? 'bg-avyakta-3 border-rajas text-sattva-bright shadow-xs'
                  : 'bg-avyakta-2 border-tamas-deep text-sattva-dim hover:border-tamas'
              }`}
            >
              <Moon className="w-4 h-4 text-purusha shrink-0" aria-hidden="true" />
              <div>
                <span className="font-medium text-sm block">
                  {language === 'ml' ? 'അവ്യക്തം (ഇരുണ്ടത്)' : 'Avyakta (Night)'}
                </span>
                <span className="text-[11px] text-sattva-dim block">
                  #141420 · Ink Night
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left cursor-pointer transition-colors ${
                theme === 'light'
                  ? 'bg-avyakta-3 border-rajas text-sattva-bright shadow-xs'
                  : 'bg-avyakta-2 border-tamas-deep text-sattva-dim hover:border-tamas'
              }`}
            >
              <Sun className="w-4 h-4 text-amber shrink-0" aria-hidden="true" />
              <div>
                <span className="font-medium text-sm block">
                  {language === 'ml' ? 'താലപത്രം (വെളിച്ചം)' : 'Palm Leaf (Light)'}
                </span>
                <span className="text-[11px] text-sattva-dim block">
                  #FBF9F4 · Warm Parchment
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* 2. Reading Lens (Sattva / Rajas / Tamas) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-sattva-dim">
              {language === 'ml' ? 'വായനാ ദൃഷ്ടി (Reading Lens)' : 'Reading Lens (Guṇa Aperture)'}
            </label>
            <span className="text-[11px] text-purusha font-medium">
              {readingLens === 'sattva'
                ? language === 'ml'
                  ? 'സത്ത്വം · ലളിത വായന'
                  : 'Sattva · Contemplative'
                : readingLens === 'rajas'
                ? language === 'ml'
                  ? 'രജസ്സ് · തത്ത്വവിചാരം'
                  : 'Rajas · Analytical'
                : language === 'ml'
                ? 'തമസ്സ് · ആധാര സാക്ഷ്യം'
                : 'Tamas · Philological'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                id: 'sattva' as ReadingLens,
                icon: Sparkles,
                mlTitle: 'സത്ത്വം',
                enTitle: 'Sattva',
                descMl: 'സരളാർത്ഥം',
                descEn: 'Clarity',
              },
              {
                id: 'rajas' as ReadingLens,
                icon: Layers,
                mlTitle: 'രജസ്സ്',
                enTitle: 'Rajas',
                descMl: 'പദച്ഛേദം & തത്ത്വം',
                descEn: 'Analysis',
              },
              {
                id: 'tamas' as ReadingLens,
                icon: BookOpen,
                mlTitle: 'തമസ്സ്',
                enTitle: 'Tamas',
                descMl: 'ഭാഷ്യവും ആധാരവും',
                descEn: 'Apparatus',
              },
            ].map((item) => {
              const active = readingLens === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setReadingLens(item.id)}
                  className={`p-3 rounded-xl border text-center transition-colors cursor-pointer ${
                    active
                      ? 'bg-rajas/15 border-rajas text-sattva-bright font-semibold'
                      : 'bg-avyakta-3/40 border-tamas-deep text-sattva-dim hover:text-sattva'
                  }`}
                >
                  <Icon className={`w-4 h-4 mx-auto mb-1.5 ${active ? 'text-rajas' : 'text-sattva-dim'}`} aria-hidden="true" />
                  <span className="block text-xs font-semibold">
                    {language === 'ml' ? item.mlTitle : item.enTitle}
                  </span>
                  <span className="block text-[10px] text-sattva-dim mt-0.5">
                    {language === 'ml' ? item.descMl : item.descEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Font Scale (A- / A / A+) */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-sattva-dim block">
            {language === 'ml' ? 'അക്ഷരവലുപ്പം' : 'Reading Size'}
          </label>
          <div className="flex items-center gap-2">
            {[
              { level: 0, label: '100%', title: language === 'ml' ? 'സാധാരണ' : 'Standard' },
              { level: 1, label: '112.5%', title: language === 'ml' ? 'വലുത്' : 'Large' },
              { level: 2, label: '125%', title: language === 'ml' ? 'ഏറ്റവും വലുത്' : 'Extra Large' },
            ].map((s) => (
              <button
                key={s.level}
                type="button"
                onClick={() => setFontScale(s.level)}
                className={`flex-1 py-2 px-3 rounded-xl border text-center text-xs font-medium transition-colors cursor-pointer ${
                  fontScale === s.level
                    ? 'bg-avyakta-3 border-sattva text-sattva-bright font-semibold'
                    : 'bg-avyakta-2 border-tamas-deep text-sattva-dim hover:border-tamas'
                }`}
              >
                <Type className="w-3.5 h-3.5 mx-auto mb-1" aria-hidden="true" />
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. Motion Settings */}
        <div className="pt-2 border-t border-tamas-deep flex items-center justify-between text-xs text-sattva-dim">
          <span>{language === 'ml' ? 'ചലനങ്ങൾ കുറയ്ക്കുക (Reduced Motion)' : 'Reduce Motion'}</span>
          <button
            type="button"
            role="switch"
            aria-checked={reducedMotion}
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
              reducedMotion ? 'bg-rajas' : 'bg-avyakta-4 border border-tamas-deep'
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                reducedMotion ? 'translate-x-5' : 'translate-x-1'
              } top-1 absolute`}
            />
          </button>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-tamas-deep flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-rajas text-sattva-bright font-medium hover:bg-rajas-dim transition-colors text-sm cursor-pointer"
          >
            {language === 'ml' ? 'പൂർത്തിയായി' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};

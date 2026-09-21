import React from 'react';
import { Link } from 'react-router';
import { Compass, BookOpen, GitFork, ArrowRight, Layers } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes } from '../../utils/navigation';
import { systems } from '../../content';
import { getSystemAccent } from '../../utils/theme';
import { darkColors, lightColors } from '../../theme/tokens';
import { systemOverviews } from '../../content/systemOverviews';

export const SystemsView: React.FC = () => {
  const { language, theme } = usePreferences();
  const palette = theme === 'dark' ? darkColors : lightColors;

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Header */}
      <div className="border-b border-tamas-deep pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <Compass className="w-6 h-6 text-rajas" aria-hidden="true" />
          <h1 className="text-2xl sm:text-4xl font-serif font-medium text-sattva-bright">
            {language === 'ml' ? 'ദർശനങ്ങൾ' : 'The Classical Systems'}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-sattva-dim font-serif italic max-w-2xl leading-relaxed">
          {language === 'ml'
            ? 'ഭാരതീയ തത്ത്വചിന്തയുടെ എട്ട് പ്രധാന ചിന്താധാരകൾ — പ്രപഞ്ചം, അറിവ്, ജീവൻ, മോക്ഷം എന്നിവയെക്കുറിച്ചുള്ള വ്യത്യസ്ത കാഴ്ചപ്പാടുകൾ.'
            : 'The eight great schools of classical Indian philosophy — distinct epistemologies, metaphysics, and contemplative disciplines.'}
        </p>
      </div>

      {/* 8 Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system) => {
          const accent = getSystemAccent(system.id);
          const overview = systemOverviews[system.id];
          const headline = overview?.headline[language] || system.subtitle;
          const summary = overview?.summary[language] || '';

          return (
            <div
              key={system.id}
              className="p-6 sm:p-7 rounded-2xl bg-avyakta-2 border border-tamas-deep hover:border-tamas flex flex-col justify-between space-y-5 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: accent.primary }}
                      aria-hidden="true"
                    />
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-sattva-bright">
                      {system.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-sattva-dim uppercase tracking-wider">
                    {system.texts.length} {language === 'ml' ? 'ഗ്രന്ഥങ്ങൾ' : 'texts'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-rajas leading-snug">
                  {headline}
                </p>

                {summary && (
                  <p className="text-xs sm:text-sm text-sattva-dim leading-relaxed line-clamp-3">
                    {summary}
                  </p>
                )}

                {/* Foundational Texts Pills */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase font-semibold text-sattva-dim block mb-1.5">
                    {language === 'ml' ? 'ആധാരഗ്രന്ഥങ്ങൾ' : 'Foundational Texts'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {system.texts.map((t) => (
                      <Link
                        key={t.id}
                        to={routes.text(language, t.id, system.id)}
                        className="text-xs px-2.5 py-1 rounded-md bg-avyakta-3 border border-tamas-deep text-sattva hover:border-sattva transition-colors"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-tamas-deep flex items-center justify-between gap-3">
                <Link
                  to={routes.systemDetail(language, system.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sattva hover:text-rajas transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{language === 'ml' ? 'ആമുഖം വായിക്കുക' : 'Read Overview'}</span>
                </Link>

                <Link
                  to={routes.systemExplore(language, system.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rajas/15 border border-rajas/30 text-rajas hover:bg-rajas/25 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <GitFork className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{language === 'ml' ? 'വിശകലനം' : 'Explore'}</span>
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

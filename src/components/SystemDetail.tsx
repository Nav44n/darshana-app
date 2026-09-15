import { useParams, Link } from 'react-router';
import { Map as MapIcon } from 'lucide-react';
import { getSystem } from '../content';
import { getSystemAccent } from '../utils/theme';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';
import { RowChevron, Eyebrow, accentTint } from './Primitives';
import { getThreadProgress } from '../utils/threadProgress';
import { getVerseTerm } from '../utils/textTerminology';

// System page: header plus the plain list of texts (subsystems).
// The Verses / Thread / Concepts dropdowns live one level down, on each
// text's own page (TextIndex).
export default function SystemDetail() {
  const { systemId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');

  if (!system) {
    return <div className="text-center py-12">{t(language, 'systemNotFound')}</div>;
  }

  const accent = getSystemAccent(system.id);
  const display = getSystemDisplay(system, language);
  const totalSteps = system.thread?.length ?? 0;

  // Thread doorway: param-less entry lets ThreadView restore the furthest
  // visited step (UX-008), so this one row serves both Start and Resume.
  const storedStep = getThreadProgress(system.id);
  const resumeStep =
    storedStep !== null && storedStep > 0 && storedStep < totalSteps
      ? system.thread[storedStep]
      : null;
  const resumeTitle = resumeStep
    ? (resumeStep.content[language]?.title || resumeStep.content.en?.title || resumeStep.id)
    : null;

  return (
    <div className="space-y-4 animate-fade-in pb-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="py-6 border-b border-tamas-deep">
        <Eyebrow accentPrimary={accent.primary} className="mb-3">
          {system.id.toUpperCase()} DARŚANA
        </Eyebrow>
        <h1 className="text-4xl font-serif font-bold text-sattva mb-2">{display.title}</h1>
        <p className="text-xl text-sattva-dim">{display.subtitle}</p>
      </div>

      {/* Thread doorway — guided narrative without detouring via a text page. */}
      {totalSteps > 0 && (
        <section className="bg-avyakta-2 rounded-2xl border border-tamas-deep shadow-xs overflow-hidden">
          <Link
            to={`/system/${system.id}/thread`}
            className="w-full flex items-center gap-4 p-5 text-left hover:bg-avyakta transition-colors motion-reduce:transition-none group"
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
              style={{ backgroundColor: accentTint(accent.primary), color: accent.primary }}
            >
              <MapIcon aria-hidden="true" className="w-5 h-5" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-lg font-serif font-bold text-sattva">
                {t(language, 'coreThread')}
                <span className="ml-2 text-sm font-sans font-medium text-sattva-dim">({totalSteps})</span>
              </span>
              <span className="block text-sm text-sattva-dim mt-0.5 truncate">
                {resumeStep
                  ? `${t(language, 'resumeThread')} · ${t(language, 'stepOf', { current: (storedStep as number) + 1, total: totalSteps })}: ${resumeTitle}`
                  : t(language, 'threadFunction')}
              </span>
            </span>
            <RowChevron />
          </Link>
        </section>
      )}

      {/* Texts (subsystems) */}
      <div className="bg-avyakta-2 rounded-2xl border border-tamas-deep shadow-xs overflow-hidden">
        <div className="px-5 pt-5 pb-3">
          <h2 className="text-xl font-serif font-bold text-sattva">{t(language, 'textsLabel')}</h2>
        </div>
        <div className="px-3 pb-3 space-y-1">
          {system.texts.map((text) => (
            <Link
              key={text.id}
              to={`/system/${system.id}/text/${text.id}`}
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-avyakta-3 transition-colors motion-reduce:transition-none group"
            >
              <span className="min-w-0">
                <span className="block font-semibold text-sattva truncate">{text.transliteratedTitle}</span>
                <span className="block text-xs text-sattva-dim truncate">
                  {text.author}
                  {text.verses.length > 0 && (
                    <> • {text.verses.length} {getVerseTerm(text, text.verses.length).toLowerCase()}</>
                  )}
                  {text.concepts.length > 0 && (
                    <> • {text.concepts.length} {t(language, 'conceptsLabel').toLowerCase()}</>
                  )}
                </span>
              </span>
              <RowChevron />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

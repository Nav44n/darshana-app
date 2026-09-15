import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router';
import { getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import RichText from './RichText';
import ReadingControls from './ReadingControls';
import { BottomBar, Notice, Card, CardBody, ChipLink, PageShell, SectionTitle, Breadcrumb } from './Primitives';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';
import { getThreadProgress, setThreadProgress } from '../utils/threadProgress';
import { usePagerKeys } from '../utils/pagerKeys';

export default function ThreadView() {
  const { systemId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');
  const [searchParams, setSearchParams] = useSearchParams();
  const totalSteps = system?.thread?.length ?? 0;
  const [stepIndex, setStepIndex] = useState(() => {
    // Explicit deep link wins; otherwise restore the furthest visited step
    // so a returning reader continues where they left off, not at Step 1.
    if (searchParams.get('step') !== null) {
      const raw = Number(searchParams.get('step') ?? 1);
      if (!Number.isFinite(raw)) return 0;
      return Math.min(Math.max(Math.floor(raw) - 1, 0), Math.max(totalSteps - 1, 0));
    }
    const stored = getThreadProgress(systemId || '');
    if (stored !== null) return Math.min(stored, Math.max(totalSteps - 1, 0));
    return 0;
  });

  useEffect(() => {
    if (searchParams.get('step') === null) return;
    const raw = Number(searchParams.get('step') ?? 1);
    if (!Number.isFinite(raw)) return;
    const idx = Math.min(Math.max(Math.floor(raw) - 1, 0), Math.max(totalSteps - 1, 0));
    setStepIndex((prev) => (prev === idx ? prev : idx));
  }, [searchParams, totalSteps]);

  useEffect(() => {
    setStepIndex((prev) => Math.min(prev, Math.max(totalSteps - 1, 0)));
  }, [systemId, totalSteps]);

  // Remember the furthest visited step per system (never throws).
  useEffect(() => {
    if (systemId) setThreadProgress(systemId, Math.min(stepIndex, Math.max(totalSteps - 1, 0)));
  }, [systemId, stepIndex, totalSteps]);

  if (!system || !system.thread || system.thread.length === 0) {
    return <div className="text-center py-12">{t(language, 'threadNotFound')}</div>;
  }

  const clampedIndex = Math.min(stepIndex, totalSteps - 1);
  const step = system.thread[clampedIndex];

  const goToStep = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), totalSteps - 1);
    setStepIndex(clamped);
    // Push (not replace) so browser Back/Forward steps through visited
    // steps as readers expect. ScrollToTop + focus reset listen to search
    // changes, so history traversal re-orients exactly like button taps.
    setSearchParams({ step: String(clamped + 1) });
  };
  const handleNext = () => goToStep(clampedIndex + 1);
  const handlePrev = () => goToStep(clampedIndex - 1);
  usePagerKeys(
    clampedIndex < totalSteps - 1 ? handleNext : null,
    clampedIndex > 0 ? handlePrev : null,
  );

  const content = step.content[language] ?? step.content.en;
  const isFallback = language === 'ml' && !step.content.ml;
  const targetTextId = step.textId || system.texts[0]?.id;
  const targetText = system.texts.find(t => t.id === targetTextId);
  const verseTermSingular = getVerseTerm(targetText, 1);
  const verseTermPlural = getVerseTerm(targetText, 2);

  // The curated concept behind this step (kind === 'concept'), if it resolves.
  const stepConcept = useMemo(() => {
    if (step.kind !== 'concept' || !step.conceptId || !targetText) return null;
    return targetText.concepts.find((c) => c.id === step.conceptId) ?? null;
  }, [step, targetText]);
  const stepConceptTitle =
    stepConcept?.content[language]?.title || stepConcept?.content.en?.title;
  const stepConceptSummary =
    stepConcept?.content[language]?.summary || stepConcept?.content.en?.summary;
  const systemDisplay = getSystemDisplay(system, language);

  return (
    <PageShell>
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="min-w-0 flex-1">
          <Breadcrumb
            trail={[{ to: `/system/${system.id}`, label: systemDisplay.title }]}
            current={t(language, 'threadLabel')}
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-medium text-tamas whitespace-nowrap">
            {t(language, 'stepOf', { current: clampedIndex + 1, total: totalSteps })}
          </span>
          <ReadingControls />
        </div>
      </div>

      {isFallback && (
        <Notice tone="amber">{t(language, 'mlFallbackThread')}</Notice>
      )}

      <Card>
        {/* Progress bar */}
        <div aria-hidden="true" className="h-1.5 w-full bg-avyakta-3">
          <div
            className="h-full bg-rajas transition-all duration-300 ease-out motion-reduce:transition-none"
            style={{ width: `${((clampedIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <CardBody>
          {content?.title && (
            <h2 className="text-3xl font-serif font-bold text-sattva leading-tight">
              {content.title}
            </h2>
          )}

          {content?.narrative && (
            <div className="text-lg md:text-xl text-sattva leading-relaxed font-serif">
              <RichText
                text={content.narrative}
                systemId={system.id as string}
                textId={targetTextId as string}
              />
            </div>
          )}

          {stepConcept && (
            <div className="pt-6 border-t border-tamas">
              <SectionTitle className="mb-4">{t(language, 'coreConcept')}</SectionTitle>
              <Link
                to={`/system/${system.id}/text/${targetTextId}/concept/${stepConcept.id}`}
                className="block p-4 rounded-xl bg-avyakta-3/50 hover:bg-avyakta-3 transition-colors motion-reduce:transition-none"
              >
                <div className="font-serif font-bold text-sattva text-base mb-1">
                  {stepConceptTitle || (stepConcept.id as string)}
                </div>
                {stepConceptSummary && (
                  <div className="text-sm text-sattva-dim line-clamp-3 leading-relaxed">
                    {stepConceptSummary}
                  </div>
                )}
                <div className="mt-2 text-xs font-semibold text-rajas">
                  {t(language, 'openConceptArticleShort')}
                </div>
              </Link>
            </div>
          )}

          {content?.summary && (
            <div className="pt-6 border-t border-tamas">
              <SectionTitle className="mb-4">{t(language, 'summaryLabel')}</SectionTitle>
              <div className="prose max-w-none text-sattva-dim">
                <RichText
                  text={content.summary}
                  systemId={system.id as string}
                  textId={targetTextId as string}
                />
              </div>
            </div>
          )}
          
          {content?.keyPoints && content.keyPoints.length > 0 && (
            <div className="pt-6 border-t border-tamas">
              <SectionTitle className="mb-4">{t(language, 'keyInsights')}</SectionTitle>
              <ul className="space-y-3">
                {content.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex text-sattva items-start">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-rajas mt-2 me-3 shrink-0 forced-colors:bg-[CanvasText]"></span>
                    <span className="flex-1">
                      <RichText
                        text={point}
                        systemId={system.id as string}
                        textId={targetTextId as string}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {step.verseIds && step.verseIds.length > 0 && targetTextId && (
            <div className="pt-6 border-t border-tamas">
              <SectionTitle className="mb-4">{t(language, 'relatedVerses')} ({verseTermPlural})</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {step.verseIds.map((vId) => (
                  <ChipLink
                    key={vId}
                    to={`/system/${system.id}/text/${targetTextId}/verse/${vId}`}
                  >
                    {verseTermSingular} {vId}
                  </ChipLink>
                ))}
              </div>
            </div>
          )}
        </CardBody>
      </Card>

      <BottomBar>
        {clampedIndex > 0 ? (
          <button
            onClick={handlePrev}
            aria-label={t(language, 'previous')}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-4 py-2 text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <ChevronLeft aria-hidden="true" className="w-5 h-5 mr-1" />
            <span className="whitespace-nowrap">{t(language, 'previous')}</span>
          </button>
        ) : (
          <div className="w-24" />
        )}

        <Link
          to={`/system/${system.id}`}
          className="flex items-center gap-1.5 px-4 min-h-11 min-w-0 max-w-[46vw] rounded-full hover:bg-avyakta-3 transition-colors motion-reduce:transition-none text-sattva-dim hover:text-sattva"
          title={t(language, 'backToSystem')}
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium truncate">{t(language, 'backToSystem')}</span>
        </Link>

        {clampedIndex < totalSteps - 1 ? (
          <button
            onClick={handleNext}
            aria-label={t(language, 'next')}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-4 py-2 text-sm font-medium text-rajas hover:text-rajas-dim transition-colors motion-reduce:transition-none"
          >
            <span className="whitespace-nowrap">{t(language, 'next')}</span>
            <ChevronRight aria-hidden="true" className="w-5 h-5 ml-1" />
          </button>
        ) : (
          <div className="w-24" />
        )}
      </BottomBar>
    </PageShell>
  );
}


import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { getConcept, getText, getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';
import RichText from './RichText';
import ReadingControls from './ReadingControls';
import { usePagerKeys } from '../utils/pagerKeys';
import { BottomBar, Notice, Card, CardBody, Breadcrumb, PageShell, SectionTitle } from './Primitives';
import {
  RelatedConceptsSection,
  RelatedVersesSection,
  ThreadMentionsSection,
  CrossSystemSection,
} from './ReferenceLinks';
import {
  getVersesForConcept,
  getRelatedConcepts,
  getThreadStepsForConcept,
  getCrossSystemConcepts,
} from '../utils/references';

/**
 * Concept article — the Wikipedia-style entry point for a single tattva /
 * padartha. Aggregates everything that links to it: defining verses, related
 * concepts, thread steps, and occurrences in other darshanas.
 */
export default function ConceptDetail() {
  const { systemId, textId, conceptId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');
  const text = getText(systemId || '', textId || '');
  const concept = getConcept(systemId || '', textId || '', conceptId || '');

  const nav = useMemo(() => {
    if (!text || !concept) return { prev: null, next: null };
    const idx = text.concepts.findIndex((c) => c.id === concept.id);
    return {
      prev: idx > 0 ? text.concepts[idx - 1] : null,
      next: idx >= 0 && idx < text.concepts.length - 1 ? text.concepts[idx + 1] : null,
    };
  }, [text, concept]);

  const navigate = useNavigate();
  usePagerKeys(
    nav.next && system && text
      ? () => navigate(`/system/${system.id}/text/${text.id}/concept/${nav.next?.id}`)
      : null,
    nav.prev && system && text
      ? () => navigate(`/system/${system.id}/text/${text.id}/concept/${nav.prev?.id}`)
      : null,
  );

  const verses = useMemo(
    () => (system && text && concept ? getVersesForConcept(system.id as string, text.id as string, concept.id as string) : []),
    [system, text, concept],
  );
  const related = useMemo(
    () => (system && text && concept ? getRelatedConcepts(system.id as string, text.id as string, concept.id as string) : []),
    [system, text, concept],
  );
  const threadSteps = useMemo(
    () => (system && text && concept ? getThreadStepsForConcept(system.id as string, text.id as string, concept.id as string) : []),
    [system, text, concept],
  );
  const crossSystem = useMemo(
    () => (system && concept ? getCrossSystemConcepts(concept.id as string, { systemId: system.id as string }) : []),
    [system, concept],
  );
  // Long defining-verse lists collapse to 12 with an explicit expander —
  // the heading always states the true total, so nothing is silently lost.
  const [versesExpanded, setVersesExpanded] = useState(false);

  if (!system || !text || !concept) {
    return <div className="text-center py-12">{t(language, 'conceptNotFound')}</div>;
  }

  const content = concept.content[language] ?? concept.content.en;
  const title = content?.title || (concept.id as string);
  const summary = content?.summary;
  const verseTermPlural = getVerseTerm(text, 2);
  const verseTermSingular = getVerseTerm(text, 1);
  const systemDisplay = getSystemDisplay(system, language);
  const isMlFallback = language === 'ml' && !concept.content.ml;

  return (
    <PageShell className="select-text">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <Breadcrumb
            trail={[
              { to: `/system/${system.id}`, label: systemDisplay.title },
              { to: `/system/${system.id}/text/${text.id}`, label: text.transliteratedTitle },
            ]}
            current={title}
          />
        </div>
        <ReadingControls />
      </div>

      <Card>
        {isMlFallback && (
          <div className="mx-8 mt-8 md:mx-10">
            <Notice tone="amber">{t(language, 'mlFallbackThread')}</Notice>
          </div>
        )}
        <CardBody>
          <div className="space-y-3">
            <div className="text-xs font-semibold text-tamas uppercase tracking-widest">
              {t(language, 'conceptLabel')} • {text.transliteratedTitle}
            </div>
            <h1 className="text-3xl font-serif font-bold text-sattva leading-tight">{title}</h1>
            {concept.category && (
              <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-avyakta-3 text-sattva-dim font-medium">
                {concept.category}
              </span>
            )}
          </div>

          {summary && (
            <div className="text-lg md:text-xl text-sattva leading-relaxed font-serif">
              <RichText text={summary} systemId={system.id as string} textId={text.id as string} />
            </div>
          )}

          {verses.length > 0 && (
            <div className="pt-6 border-t border-tamas">
              <SectionTitle className="mb-4">
                {t(language, 'definingLabel', { term: verseTermPlural, count: verses.length })}
              </SectionTitle>
              <div className="space-y-3">
                {(versesExpanded ? verses : verses.slice(0, 12)).map(({ verse }) => {
                  const translation =
                    verse.content[language]?.translation || verse.content.en?.translation;
                  return (
                    <Link
                      key={verse.id as string}
                      to={`/system/${system.id}/text/${text.id}/verse/${verse.id}`}
                      className="block p-4 rounded-xl bg-avyakta-3/50 hover:bg-avyakta-3 transition-colors motion-reduce:transition-none group"
                    >
                      <div className="text-sm font-semibold text-rajas mb-1">
                        {verseTermSingular} {verse.number}
                      </div>
                      {translation && (
                        <div className="text-sm text-sattva-dim line-clamp-2 leading-relaxed">
                          {translation}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
              {verses.length > 12 && (
                <button
                  type="button"
                  onClick={() => setVersesExpanded((v) => !v)}
                  aria-expanded={versesExpanded}
                  className="mt-3 w-full px-4 min-h-11 rounded-xl bg-avyakta-3/50 hover:bg-avyakta-3 text-sm font-medium text-sattva-dim hover:text-sattva transition-colors motion-reduce:transition-none"
                >
                  {versesExpanded
                    ? t(language, 'collapseAll')
                    : `${t(language, 'expandAll')} (${verses.length})`}
                </button>
              )}
            </div>
          )}

          <RelatedConceptsSection items={related} currentSystemId={system.id as string} />
          <ThreadMentionsSection steps={threadSteps} />
          <CrossSystemSection items={crossSystem} />
        </CardBody>
      </Card>

      <BottomBar>
        {nav.prev ? (
          <Link
            to={`/system/${system.id}/text/${text.id}/concept/${nav.prev.id}`}
            aria-label={`${t(language, 'previous')}: ${(nav.prev.content[language]?.title || nav.prev.content.en?.title || nav.prev.id) as string}`}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-2 text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <ChevronLeft aria-hidden="true" className="w-5 h-5 mr-1" />
            <span className="max-w-24 truncate sm:max-w-40">
              {(nav.prev.content[language]?.title || nav.prev.content.en?.title || nav.prev.id) as string}
            </span>
          </Link>
        ) : (
          <div className="w-20" />
        )}

        <Link
          to={`/system/${system.id}/text/${text.id}`}
          className="flex items-center gap-1.5 px-4 min-h-11 min-w-0 max-w-[46vw] rounded-full hover:bg-avyakta-3 transition-colors motion-reduce:transition-none text-sattva-dim hover:text-sattva"
          title={t(language, 'backToIndex')}
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium truncate">{t(language, 'backToIndex')}</span>
        </Link>

        {nav.next ? (
          <Link
            to={`/system/${system.id}/text/${text.id}/concept/${nav.next.id}`}
            aria-label={`${t(language, 'next')}: ${(nav.next.content[language]?.title || nav.next.content.en?.title || nav.next.id) as string}`}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-2 text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <span className="max-w-24 truncate sm:max-w-40">
              {(nav.next.content[language]?.title || nav.next.content.en?.title || nav.next.id) as string}
            </span>
            <ChevronRight aria-hidden="true" className="w-5 h-5 ml-1" />
          </Link>
        ) : (
          <div className="w-20" />
        )}
      </BottomBar>
    </PageShell>
  );
}

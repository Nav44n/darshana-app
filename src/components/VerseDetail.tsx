import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { getVerse, getText, getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft, Share2, Check, Bookmark } from 'lucide-react';
import Markdown from 'react-markdown';
import RichText from './RichText';
import ReadingControls from './ReadingControls';
import { Breadcrumb, BottomBar, Notice, CollapsibleSection, Card, CardBody, PageShell } from './Primitives';
import {
  RelatedConceptsSection,
  RelatedVersesSection,
  ThreadMentionsSection,
} from './ReferenceLinks';
import {
  getConceptsForVerse,
  getRelatedVerses,
  getThreadStepsForVerse,
} from '../utils/references';
import { usePagerKeys } from '../utils/pagerKeys';
import { recordVerseVisit } from '../utils/readingHistory';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';

export default function VerseDetail() {
  const { systemId, textId, verseId } = useParams();
  const { language, setLanguage } = useLanguage();
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'shared'>('idle');
  const system = getSystem(systemId || '');
  const text = getText(systemId || '', textId || '');
  const verse = getVerse(systemId || '', textId || '', verseId || '');

  const verseTerm = getVerseTerm(text, 1);

  // Cache next/prev verses so the pager does not scan the array on every
  // render. Guarded: all hooks in this component stay unconditional so a
  // hop from a valid verse to a missing id never changes the hook order.
  const { prevVerse, nextVerse } = useMemo(() => {
    if (!text || !verse) return { prevVerse: null, nextVerse: null };
    const currentIndex = text.verses.findIndex(v => v.id === verse.id);
    return {
      prevVerse: currentIndex > 0 ? text.verses[currentIndex - 1] : null,
      nextVerse: currentIndex >= 0 && currentIndex < text.verses.length - 1 ? text.verses[currentIndex + 1] : null,
    };
  }, [text, verse]);

  const navigate = useNavigate();
  const nextHref = system && text && nextVerse
    ? `/system/${system.id}/text/${text.id}/verse/${nextVerse.id}`
    : null;
  const prevHref = system && text && prevVerse
    ? `/system/${system.id}/text/${text.id}/verse/${prevVerse.id}`
    : null;
  usePagerKeys(
    nextHref ? () => navigate(nextHref) : null,
    prevHref ? () => navigate(prevHref) : null,
  );

  // Feed the Home continuity strip (deduped, most-recent-first) and keep
  // the bookmark toggle honest across prev/next walks of the same mount.
  const [saved, setSaved] = useState(() =>
    system && text && verse
      ? isBookmarked(system.id as string, text.id as string, verse.id as string)
      : false,
  );
  useEffect(() => {
    if (!system || !text || !verse) return;
    recordVerseVisit(system.id as string, text.id as string, verse.id as string);
    setSaved(isBookmarked(system.id as string, text.id as string, verse.id as string));
  }, [system, text, verse]);

  // Wikipedia-style interlinks, resolved against the reference graph.
  const relatedConcepts = useMemo(
    () => (system && text && verse
      ? getConceptsForVerse(system.id as string, text.id as string, verse.id as string)
      : []),
    [system, text, verse],
  );
  const relatedVerses = useMemo(
    () => (system && text && verse
      ? getRelatedVerses(system.id as string, text.id as string, verse.id as string)
      : []),
    [system, text, verse],
  );
  const threadSteps = useMemo(
    () => (system && text && verse
      ? getThreadStepsForVerse(system.id as string, text.id as string, verse.id as string)
      : []),
    [system, text, verse],
  );

  if (!system || !text || !verse) {
    return <div className="text-center py-12">{t(language, 'verseNotFoundFallback', { term: getVerseTerm(text, 1) })}</div>;
  }

  const handleBookmark = () => {
    setSaved(toggleBookmark(system.id as string, text.id as string, verse.id as string));
  };

  const activeContent = verse.content[language] ?? verse.content.en;
  const fallbackContent = verse.content.en;

  const translation = activeContent?.translation || fallbackContent?.translation;
  const commentary = activeContent?.commentary || fallbackContent?.commentary;
  const wordMeaning = (activeContent as any)?.wordMeaning || (fallbackContent as any)?.wordMeaning;
  const variantNote = (activeContent as any)?.variantNote || (fallbackContent as any)?.variantNote;
  const keyPoints = (activeContent?.keyPoints && activeContent.keyPoints.length > 0)
    ? activeContent.keyPoints
    : fallbackContent?.keyPoints;

  const isCurrentLangAvailable = !!verse.content[language];
  const isShowingFallback = !isCurrentLangAvailable && language === 'ml';

  // Interlink sections above (kept with the other hooks so hook order is
  // stable); the narrowed system/text/verse below are safe to dereference.
  const flashShareState = (state: 'copied' | 'shared') => {
    setShareState(state);
    setTimeout(() => setShareState('idle'), 2000);
  };

  // Chat-ready citation: reference + source text + translation + deep link.
  // Commentary stays behind the link — pasting pages of it into a chat was
  // the old behaviour and buried the verse itself.
  const toPlain = (markdown: string): string =>
    markdown
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2')
      .replace(/\[\[([^\]]+)\]\]/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(^|\s)[*_]([^*_]+)[*_](?=\s|$)/g, '$1$2')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^>\s?/gm, '')
      .trim();

  const handleShare = async () => {
    const systemTitle = getSystemDisplay(system, language).title;
    const body = [
      `${systemTitle} — ${text.transliteratedTitle}`,
      `${verse.section ? `${verse.section} • ` : ''}${verseTerm} ${verse.number}`,
      verse.devanagari?.trim(),
      verse.iast?.trim(),
      translation ? toPlain(translation) : '',
    ]
      .filter(Boolean)
      .join('\n');

    // System share sheet first (mobile expectation: WhatsApp, mail, …).
    // Clipboard is the fallback, never a surprise after a dismissed sheet.
    const nav = navigator as Navigator & {
      share?: (data: ShareData) => Promise<void>;
    };
    if (nav.share) {
      try {
        await nav.share({
          title: `${verseTerm} ${verse.number} · ${text.transliteratedTitle}`,
          text: body,
          url: window.location.href,
        });
        flashShareState('shared');
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    const textToCopy = `${body}\n\n${window.location.href}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const ta = document.createElement('textarea');
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      flashShareState('copied');
    } catch {
      setShareState('idle');
    }
  };

  return (
    <PageShell className="select-text">
      {/* Breadcrumb on its own row; controls wrap below on narrow
          viewports so neither squeezes the other on phones. */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <Breadcrumb
            trail={[
              { to: `/system/${system.id}`, label: getSystemDisplay(system, language).title },
              { to: `/system/${system.id}/text/${text.id}`, label: text.transliteratedTitle },
            ]}
            current={`${verseTerm} ${verse.number}`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 sm:justify-end sm:shrink-0 sm:ms-2">
          <ReadingControls />
          <button
            type="button"
            onClick={handleBookmark}
            aria-pressed={saved}
            title={saved ? t(language, 'savedLabel') : t(language, 'saveLabel')}
            className="flex items-center justify-center min-h-9 min-w-9 rounded-lg bg-avyakta-3 hover:bg-avyakta-4 transition-colors motion-reduce:transition-none"
          >
            <Bookmark
              aria-hidden="true"
              fill={saved ? 'currentColor' : 'none'}
              className={`w-4 h-4 ${saved ? 'text-rajas' : 'text-sattva-dim'}`}
            />
            <span className="sr-only">
              {saved ? t(language, 'savedLabel') : t(language, 'saveLabel')}
            </span>
          </button>
          {verse.content.en && (
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs px-2 py-1 rounded font-medium transition-colors motion-reduce:transition-none ${
                language === 'en' ? 'bg-avyakta-4 text-sattva shadow-xs' : 'bg-avyakta-3 hover:bg-avyakta-4 text-sattva'
              }`}
              title="English translation"
            >
              English
            </button>
          )}

          {verse.content.ml && (
            <button
              onClick={() => setLanguage('ml')}
              className={`text-xs px-2 py-1 rounded font-medium transition-colors motion-reduce:transition-none ${
                language === 'ml' ? 'bg-avyakta-4 text-sattva shadow-xs' : 'bg-avyakta-3 hover:bg-avyakta-4 text-sattva'
              }`}
              title={t(language, 'malayalamTranslationTitle')}
            >
              മലയാളം
            </button>
          )}

          <button
            onClick={handleShare}
            className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded bg-avyakta-3 hover:bg-avyakta-4 text-sattva font-medium transition-colors motion-reduce:transition-none"
            title={t(language, 'copyShareTitle')}
          >
            {shareState !== 'idle' ? (
              <>
                <Check aria-hidden="true" className="w-3.5 h-3.5 text-teal" />
                <span className="text-teal">
                  {shareState === 'shared' ? t(language, 'sharedLabel') : t(language, 'copiedLabel')}
                </span>
              </>
            ) : (
              <>
                <Share2 aria-hidden="true" className="w-3.5 h-3.5" />
                <span>{t(language, 'shareLabel')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isShowingFallback && (
        <Notice tone="amber">{t(language, 'mlFallbackVerse')}</Notice>
      )}

      <Card>
        <CardBody>
          <div className="text-center space-y-6">
            <h2 className="text-lg font-medium text-tamas tracking-widest uppercase">
              {verse.section ? `${verse.section} • ` : ''} {verseTerm} {verse.number}
            </h2>
            
            {verse.devanagari && (
              <div lang="sa" className="t-devanagari text-3xl md:text-4xl text-sattva">
                {verse.devanagari.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
            
            {verse.iast && (
            <div lang="sa-Latn" className="text-xl md:text-2xl text-sattva italic leading-relaxed">
              {verse.iast.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
            </div>
            )}
          </div>

          {translation && (
            <CollapsibleSection
              title={
                language === 'ml' && verse.content.ml?.translation
                  ? `${t(language, 'translationLabel')} (Translation)`
                  : t(language, 'translationLabel')
              }
              defaultOpen
            >
              <div className="t-body-serif text-sattva">
                <Markdown>{translation}</Markdown>
              </div>
            </CollapsibleSection>
          )}

          {wordMeaning && (
            <CollapsibleSection
              title={
                language === 'ml' && (verse.content.ml as any)?.wordMeaning
                  ? `${t(language, 'wordMeaningLabel')} (Word by Word)`
                  : t(language, 'wordMeaningLabel')
              }
              defaultOpen={false}
            >
              <div className="t-body-sans text-sattva-dim">
                <Markdown>{wordMeaning}</Markdown>
              </div>
            </CollapsibleSection>
          )}

          {commentary && (
            <CollapsibleSection
              title={
                language === 'ml' && verse.content.ml?.commentary
                  ? `${t(language, 'commentaryLabel')} (Commentary)`
                  : t(language, 'commentaryLabel')
              }
              defaultOpen={false}
            >
              <div className="prose max-w-none text-sattva">
                <RichText
                  text={commentary}
                  systemId={system.id as string}
                  textId={text.id as string}
                />
              </div>
            </CollapsibleSection>
          )}

          {keyPoints && keyPoints.length > 0 && (
            <CollapsibleSection
              title={
                language === 'ml' && verse.content.ml?.keyPoints
                  ? `${t(language, 'keyPoints')} (Key Points)`
                  : t(language, 'keyPoints')
              }
            >
              <ul className="space-y-2">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="flex text-sattva items-start">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-rajas mt-2 me-3 shrink-0 forced-colors:bg-[CanvasText]"></span>
                    <span className="flex-1">
                      <RichText
                        text={point}
                        systemId={system.id as string}
                        textId={text.id as string}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {variantNote && (
            <CollapsibleSection title={t(language, 'variantNoteLabel')} defaultOpen={false}>
              <div className="t-body-sans text-sattva-dim">
                <Markdown>{variantNote}</Markdown>
              </div>
            </CollapsibleSection>
          )}

          {verse.interpretiveNotes && verse.interpretiveNotes.length > 0 && (
            <CollapsibleSection title={t(language, 'variantNoteLabel')} defaultOpen={false}>
              <ul className="space-y-2">
                {verse.interpretiveNotes.map((n, idx) => (
                  <li key={idx} className="flex text-sattva-dim items-start text-sm md:text-base">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-rajas mt-2 me-3 shrink-0 forced-colors:bg-[CanvasText]"></span>
                    <span className="flex-1">
                      <RichText
                        text={n.note}
                        systemId={system.id as string}
                        textId={text.id as string}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          <RelatedConceptsSection items={relatedConcepts} currentSystemId={system.id as string} />
          <RelatedVersesSection items={relatedVerses} />
          <ThreadMentionsSection steps={threadSteps} />
        </CardBody>
      </Card>

      <BottomBar>
        {prevVerse ? (
          <Link
            to={`/system/${system.id}/text/${text.id}/verse/${prevVerse.id}`}
            aria-label={`${t(language, 'previous')}: ${verseTerm} ${prevVerse.number}`}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-2 text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <ChevronLeft aria-hidden="true" className="w-5 h-5 mr-1" />
            <span className="whitespace-nowrap">{verseTerm} {prevVerse.number}</span>
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

        {nextVerse ? (
          <Link
            to={`/system/${system.id}/text/${text.id}/verse/${nextVerse.id}`}
            aria-label={`${t(language, 'next')}: ${verseTerm} ${nextVerse.number}`}
            className="flex items-center shrink-0 min-h-11 min-w-11 px-2 text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <span className="whitespace-nowrap">{verseTerm} {nextVerse.number}</span>
            <ChevronRight aria-hidden="true" className="w-5 h-5 ml-1" />
          </Link>
        ) : (
          <div className="w-20" />
        )}
      </BottomBar>
    </PageShell>
  );
}


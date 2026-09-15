import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { getVerse, getText, getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft, Share2, Check } from 'lucide-react';
import Markdown from 'react-markdown';
import RichText from './RichText';
import { BreadcrumbChevron, BottomBar, Notice, CollapsibleSection, Card, CardBody, PageShell } from './Primitives';
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
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';
import { t } from '../i18n/ui';
import { getSystemDisplay } from '../i18n/systems';

export default function VerseDetail() {
  const { systemId, textId, verseId } = useParams();
  const { language, setLanguage } = useLanguage();
  const [copied, setCopied] = useState(false);
  const system = getSystem(systemId || '');
  const text = getText(systemId || '', textId || '');
  const verse = getVerse(systemId || '', textId || '', verseId || '');

  const verseTerm = getVerseTerm(text, 1);

  if (!system || !text || !verse) {
    return <div className="text-center py-12">{t(language, 'verseNotFoundFallback', { term: getVerseTerm(text, 1) })}</div>;
  }

  // Memoize next/prev verses so we don't scan the entire array on every render
  const { prevVerse, nextVerse } = useMemo(() => {
    const currentIndex = text.verses.findIndex(v => v.id === verse.id);
    return {
      prevVerse: currentIndex > 0 ? text.verses[currentIndex - 1] : null,
      nextVerse: currentIndex >= 0 && currentIndex < text.verses.length - 1 ? text.verses[currentIndex + 1] : null,
    };
  }, [text.verses, verse.id]);

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

  // Wikipedia-style interlinks, resolved against the reference graph.
  const relatedConcepts = useMemo(
    () => getConceptsForVerse(system.id as string, text.id as string, verse.id as string),
    [system.id, text.id, verse.id],
  );
  const relatedVerses = useMemo(
    () => getRelatedVerses(system.id as string, text.id as string, verse.id as string),
    [system.id, text.id, verse.id],
  );
  const threadSteps = useMemo(
    () => getThreadStepsForVerse(system.id as string, text.id as string, verse.id as string),
    [system.id, text.id, verse.id],
  );

  const handleCopy = async () => {
    const textToCopy = `${getSystemDisplay(system, language).title} - ${text.transliteratedTitle}\n${verseTerm} ${verse.number}\n${verse.devanagari ? verse.devanagari + '\n' : ''}${verse.iast || ''}\n\n${translation || ''}\n\n${commentary || ''}`;
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <PageShell className="select-text">
      <div className="flex items-center justify-between text-sm text-sattva-dim">
        <div className="flex items-center space-x-2 truncate">
          <Link to={`/system/${system.id}`} className="hover:text-rajas transition-colors motion-reduce:transition-none">
            {getSystemDisplay(system, language).title}
          </Link>
          <BreadcrumbChevron />
          <Link to={`/system/${system.id}/text/${text.id}`} className="hover:text-rajas transition-colors motion-reduce:transition-none truncate">
            {text.transliteratedTitle}
          </Link>
          <BreadcrumbChevron />
          <span className="text-sattva font-medium whitespace-nowrap">{verseTerm} {verse.number}</span>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0 ml-2">
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
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded bg-avyakta-3 hover:bg-avyakta-4 text-sattva font-medium transition-colors motion-reduce:transition-none"
            title={t(language, 'copyShareTitle')}
          >
            {copied ? (
              <>
                <Check aria-hidden="true" className="w-3.5 h-3.5 text-teal" />
                <span className="text-teal">{t(language, 'copiedLabel')}</span>
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
              <div className="text-3xl md:text-4xl text-sattva leading-normal font-serif">
                {verse.devanagari.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
            
            <div className="text-xl md:text-2xl text-sattva italic leading-relaxed">
              {verse.iast ? (
                verse.iast.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))
              ) : null}
            </div>
          </div>

          {translation && (
            <CollapsibleSection
              title={
                language === 'ml' && verse.content.ml?.translation
                  ? `${t(language, 'translationLabel')} (Translation)`
                  : t(language, 'translationLabel')
              }
            >
              <div className="text-lg md:text-xl text-sattva leading-relaxed font-serif">
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
            >
              <div className="text-base md:text-lg text-sattva-dim leading-relaxed">
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
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-rajas mt-2 mr-3 shrink-0"></span>
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
            <CollapsibleSection title={t(language, 'variantNoteLabel')}>
              <div className="text-sm md:text-base text-sattva-dim leading-relaxed">
                <Markdown>{variantNote}</Markdown>
              </div>
            </CollapsibleSection>
          )}

          {verse.interpretiveNotes && verse.interpretiveNotes.length > 0 && (
            <CollapsibleSection title={t(language, 'variantNoteLabel')}>
              <ul className="space-y-2">
                {verse.interpretiveNotes.map((n, idx) => (
                  <li key={idx} className="flex text-sattva-dim items-start text-sm md:text-base">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-rajas mt-2 mr-3 shrink-0"></span>
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
            className="flex items-center text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <ChevronLeft aria-hidden="true" className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">{verseTerm}</span> {prevVerse.number}
          </Link>
        ) : (
          <div className="w-20" />
        )}

        <Link
          to={`/system/${system.id}/text/${text.id}`}
          className="flex flex-col items-center justify-center p-2 rounded-full hover:bg-avyakta-3 transition-colors motion-reduce:transition-none text-sattva-dim"
          title={t(language, 'backToIndex')}
        >
          <ArrowLeft aria-hidden="true" className="w-5 h-5" />
        </Link>

        {nextVerse ? (
          <Link
            to={`/system/${system.id}/text/${text.id}/verse/${nextVerse.id}`}
            className="flex items-center text-sm font-medium text-sattva-dim hover:text-rajas transition-colors motion-reduce:transition-none"
          >
            <span className="hidden sm:inline">{verseTerm}</span> {nextVerse.number}
            <ChevronRight aria-hidden="true" className="w-5 h-5 ml-1" />
          </Link>
        ) : (
          <div className="w-20" />
        )}
      </BottomBar>
    </PageShell>
  );
}


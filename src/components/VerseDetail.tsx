import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { getVerse, getText, getSystem } from '../content';
import { ChevronRight, ChevronLeft, ArrowLeft, Share2, Check } from 'lucide-react';
import Markdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';

export default function VerseDetail() {
  const { systemId, textId, verseId } = useParams();
  const { language, setLanguage } = useLanguage();
  const [copied, setCopied] = useState(false);
  const system = getSystem(systemId || '');
  const text = getText(systemId || '', textId || '');
  const verse = getVerse(systemId || '', textId || '', verseId || '');

  const verseTerm = getVerseTerm(text, 1);

  if (!system || !text || !verse) {
    return <div className="text-center py-12">{verseTerm} not found</div>;
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
  const keyPoints = (activeContent?.keyPoints && activeContent.keyPoints.length > 0)
    ? activeContent.keyPoints
    : fallbackContent?.keyPoints;

  const isCurrentLangAvailable = !!verse.content[language];
  const isShowingFallback = !isCurrentLangAvailable && language === 'ml';

  const handleCopy = () => {
    const textToCopy = `${system.title} - ${text.transliteratedTitle}\n${verseTerm} ${verse.number}\n${verse.devanagari ? verse.devanagari + '\n' : ''}${verse.iast}\n\n${translation || ''}\n\n${commentary || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl mx-auto pb-24 select-text">
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <div className="flex items-center space-x-2 truncate">
          <Link to={`/system/${system.id}`} className="hover:text-blue-600 transition-colors">
            {system.title}
          </Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link to={`/system/${system.id}/text/${text.id}`} className="hover:text-blue-600 transition-colors truncate">
            {text.transliteratedTitle}
          </Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-neutral-900 font-medium whitespace-nowrap">{verseTerm} {verse.number}</span>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0 ml-2">
          {verse.content.en && (
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs px-2 py-1 rounded font-medium transition-colors ${
                language === 'en' ? 'bg-neutral-900 text-white shadow-xs' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
              title="English translation"
            >
              English
            </button>
          )}

          {verse.content.ml && (
            <button
              onClick={() => setLanguage('ml')}
              className={`text-xs px-2 py-1 rounded font-medium transition-colors ${
                language === 'ml' ? 'bg-neutral-900 text-white shadow-xs' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
              title="മലയാളം വിവർത്തനം"
            >
              മലയാളം
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium transition-colors"
            title="Copy or share verse text"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isShowingFallback && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-center justify-between">
          <span>Malayalam translation for this verse is pending. Displaying English version.</span>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xs border border-neutral-200 overflow-hidden">
        <div className="p-8 md:p-10 space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-lg font-medium text-neutral-400 tracking-widest uppercase">
              {verse.section ? `${verse.section} • ` : ''} {verseTerm} {verse.number}
            </h2>
            
            {verse.devanagari && (
              <div className="text-3xl md:text-4xl text-neutral-900 leading-normal font-serif">
                {verse.devanagari.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
            
            <div className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed">
              {verse.iast.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          {translation && (
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  {language === 'ml' && verse.content.ml?.translation
                    ? 'വിവർത്തനം (Translation)'
                    : 'Translation'}
                </h3>
              </div>
              <div className="text-lg md:text-xl text-neutral-900 leading-relaxed font-serif">
                <Markdown>{translation}</Markdown>
              </div>
            </div>
          )}

          {commentary && (
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  {language === 'ml' && verse.content.ml?.commentary
                    ? 'ഭാഷ്യം / വ്യാഖ്യാനം (Commentary)'
                    : 'Commentary'}
                </h3>
              </div>
              <div className="prose prose-neutral max-w-none text-neutral-700">
                <Markdown>{commentary}</Markdown>
              </div>
            </div>
          )}

          {keyPoints && keyPoints.length > 0 && (
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  {language === 'ml' && verse.content.ml?.keyPoints
                    ? 'പ്രധാന തത്ത്വങ്ങൾ (Key Points)'
                    : 'Key Points'}
                </h3>
              </div>
              <ul className="space-y-2">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="flex text-neutral-700 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 shrink-0"></span>
                    <span className="flex-1"><Markdown>{point}</Markdown></span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-neutral-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {prevVerse ? (
            <Link
              to={`/system/${system.id}/text/${text.id}/verse/${prevVerse.id}`}
              className="flex items-center text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">{verseTerm}</span> {prevVerse.number}
            </Link>
          ) : (
            <div className="w-20" />
          )}

          <Link
            to={`/system/${system.id}/text/${text.id}`}
            className="flex flex-col items-center justify-center p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500"
            title="Back to Index"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {nextVerse ? (
            <Link
              to={`/system/${system.id}/text/${text.id}/verse/${nextVerse.id}`}
              className="flex items-center text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors"
            >
              <span className="hidden sm:inline">{verseTerm}</span> {nextVerse.number}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          ) : (
            <div className="w-20" />
          )}
        </div>
      </div>
    </div>
  );
}


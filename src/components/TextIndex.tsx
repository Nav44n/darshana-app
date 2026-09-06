import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { getText, getSystem } from '../content';
import { Search, ChevronRight } from 'lucide-react';
import { searchVerses } from '../utils/searchIndex';
import { useLanguage } from '../context/LanguageContext';
import { getVerseTerm } from '../utils/textTerminology';

export default function TextIndex() {
  const { systemId, textId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');
  const text = getText(systemId || '', textId || '');
  const [searchQuery, setSearchQuery] = useState('');

  if (!system || !text) {
    return <div className="text-center py-12">Text not found</div>;
  }

  const hasVerses = text.verses.length > 0;
  const hasConcepts = text.concepts.length > 0;
  const [activeTab, setActiveTab] = useState<'verses' | 'concepts'>(hasVerses ? 'verses' : 'concepts');

  const showVerses = hasVerses && activeTab === 'verses';

  const filteredVerses = useMemo(() => {
    if (!hasVerses) return [];
    if (!searchQuery.trim()) return text.verses;
    const rankedResults = searchVerses(searchQuery, { systemId: system.id, textId: text.id });
    return rankedResults.map(r => r.item.verse);
  }, [hasVerses, text.verses, searchQuery, system.id, text.id]);

  const filteredConcepts = useMemo(() => {
    if (!hasConcepts) return [];
    if (!searchQuery.trim()) return text.concepts;
    const q = searchQuery.toLowerCase();
    return text.concepts.filter(c => {
      const enTitle = c.content.en?.title?.toLowerCase() || '';
      const enSummary = c.content.en?.summary?.toLowerCase() || '';
      const mlTitle = c.content.ml?.title?.toLowerCase() || '';
      const cat = c.category?.toLowerCase() || '';
      return enTitle.includes(q) || enSummary.includes(q) || mlTitle.includes(q) || cat.includes(q);
    });
  }, [hasConcepts, text.concepts, searchQuery]);

  const isMalayalam = language === 'ml';

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center text-sm text-neutral-500 mb-2 space-x-2">
        <Link to={`/system/${system.id}`} className="hover:text-blue-600 transition-colors">
          {system.title}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-neutral-900">{text.transliteratedTitle}</span>
      </div>

      <div className="py-4 border-b border-neutral-200">
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          {text.transliteratedTitle}
        </h1>
        <p className="text-neutral-600">
          {text.author ? `Author: ${text.author} • ` : ''}
          {hasVerses ? `${text.verses.length} ${getVerseTerm(text, text.verses.length).toLowerCase()}` : ''}
          {hasVerses && hasConcepts ? ' • ' : ''}
          {hasConcepts ? `${text.concepts.length} philosophical concepts` : ''}
        </p>

        {hasVerses && hasConcepts && (
          <div className="flex space-x-2 mt-4">
            <button
              id="tab-verses"
              onClick={() => setActiveTab('verses')}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'verses'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {getVerseTerm(text, text.verses.length)} ({text.verses.length})
            </button>
            <button
              id="tab-concepts"
              onClick={() => setActiveTab('concepts')}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'concepts'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Concepts ({text.concepts.length})
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-neutral-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
          placeholder={showVerses ? `Search ${getVerseTerm(text, 2).toLowerCase()} by term, number, or Sanskrit...` : "Search concepts, categories, or Sanskrit terms..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-neutral-200 overflow-hidden divide-y divide-neutral-100">
        {!showVerses ? (
          filteredConcepts.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">
              No concepts found matching "{searchQuery}"
            </div>
          ) : (
            filteredConcepts.map((concept) => {
              const activeContent = (isMalayalam && concept.content.ml) ? concept.content.ml : concept.content.en;
              return (
                <div key={concept.id} className="p-5 hover:bg-neutral-50/80 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif font-bold text-base text-neutral-900">
                      {activeContent?.title || concept.id}
                    </h3>
                    {concept.category && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-600 font-medium">
                        {concept.category}
                      </span>
                    )}
                  </div>
                  {activeContent?.summary && (
                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {activeContent.summary}
                    </p>
                  )}
                </div>
              );
            })
          )
        ) : (
          filteredVerses.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">
              No {getVerseTerm(text, 2).toLowerCase()} found matching "{searchQuery}"
            </div>
          ) : (
            filteredVerses.map((verse) => {
              const activeTranslation = (isMalayalam && verse.content.ml?.translation)
                ? verse.content.ml.translation
                : verse.content.en?.translation;

              return (
                <Link
                  key={verse.id}
                  to={`/system/${system.id}/text/${text.id}/verse/${verse.id}`}
                  className="block p-5 hover:bg-neutral-50 transition-colors group"
                >
                  <div className="flex items-start">
                    <div className="w-16 font-medium text-neutral-500 pt-1 shrink-0">
                      {verse.number}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="text-neutral-800 italic text-sm md:text-base leading-relaxed font-serif">
                        {verse.iast}
                      </div>
                      {activeTranslation && (
                        <div className="text-neutral-600 text-sm md:text-base line-clamp-2">
                          {activeTranslation}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          )
        )}
      </div>
    </div>
  );
}


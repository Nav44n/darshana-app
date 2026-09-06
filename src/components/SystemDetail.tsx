import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { getSystem } from '../content';
import { BookOpen, Map as MapIcon, Sparkles, ChevronDown, ChevronUp, Compass, ScrollText, Layers, Search, ArrowRight } from 'lucide-react';
import Markdown from 'react-markdown';
import { getSystemAccent } from '../utils/theme';
import { useLanguage } from '../context/LanguageContext';
import { getSystemOverview } from '../content/systemOverviews';
import { getVerseTerm } from '../utils/textTerminology';

export default function SystemDetail() {
  const { systemId } = useParams();
  const { language } = useLanguage();
  const system = getSystem(systemId || '');
  const [expandedConceptId, setExpandedConceptId] = useState<string | null>(null);
  const [conceptSearch, setConceptSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const overview = getSystemOverview(systemId || '');

  const allConcepts = useMemo(() => {
    if (!system) return [];
    return system.texts.flatMap((t) =>
      (t.concepts || []).map((c) => ({ ...c, textId: t.id, textTitle: t.transliteratedTitle }))
    );
  }, [system]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allConcepts.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return Array.from(set);
  }, [allConcepts]);

  const filteredConcepts = useMemo(() => {
    return allConcepts.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!conceptSearch.trim()) return true;
      const q = conceptSearch.toLowerCase();
      const localized = c.content[language] ?? c.content.en;
      const title = (localized?.title || c.id).toLowerCase();
      const summary = (localized?.summary || '').toLowerCase();
      const category = (c.category || '').toLowerCase();
      return title.includes(q) || summary.includes(q) || category.includes(q);
    });
  }, [allConcepts, selectedCategory, conceptSearch, language]);

  if (!system) {
    return <div className="text-center py-12">System not found</div>;
  }

  const accent = getSystemAccent(system.id);

  const handlePillarClick = (conceptId?: string) => {
    if (!conceptId) return;
    setExpandedConceptId(conceptId);
    setSelectedCategory('all');
    setConceptSearch('');
    const el = document.getElementById(`concept-${conceptId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-16">
      {/* Header */}
      <div className="py-6 border-b border-neutral-200">
        <div 
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" 
          style={{ backgroundColor: `${accent.primary}15`, color: accent.primary }}
        >
          {system.id.toUpperCase()} DARŚANA
        </div>
        <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-2">{system.title}</h1>
        <p className="text-xl text-neutral-600">{system.subtitle}</p>
      </div>

      {/* System Overview (Featured Foundations & Methodology) */}
      {overview && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-neutral-500" />
              {language === 'ml' ? 'ദർശന ആമുഖവും അടിസ്ഥാന തത്ത്വങ്ങളും' : 'System Overview & Epistemic Foundations'}
            </h2>
          </div>

          <div 
            className="bg-white rounded-2xl border p-6 md:p-8 shadow-xs space-y-6"
            style={{ borderColor: `${accent.primary}30` }}
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                {overview.headline[language] || overview.headline.en}
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                {overview.summary[language] || overview.summary.en}
              </p>
            </div>

            {/* Pillars Grid */}
            <div>
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 flex items-center">
                <Layers className="w-4 h-4 mr-1.5 text-neutral-400" />
                {language === 'ml' ? 'മുഖ്യ തത്ത്വങ്ങൾ' : 'Core Philosophical Pillars'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(overview.pillars[language] || overview.pillars.en).map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {pillar.sanskritTerm && (
                        <span 
                          className="inline-block text-xs font-medium px-2 py-0.5 rounded mb-2"
                          style={{ backgroundColor: `${accent.primary}12`, color: accent.primary }}
                        >
                          {pillar.sanskritTerm}
                        </span>
                      )}
                      <h5 className="font-serif font-bold text-neutral-900 text-base mb-1.5">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {pillar.summary}
                      </p>
                    </div>

                    {pillar.conceptId && (
                      <button
                        onClick={() => handlePillarClick(pillar.conceptId)}
                        className="mt-3 text-xs font-semibold flex items-center hover:underline self-start pt-2"
                        style={{ color: accent.primary }}
                      >
                        {language === 'ml' ? 'വിശദാംശങ്ങൾ കാണുക' : 'Explore Concept'}
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Commentarial Lineage */}
            {overview.commentarialLineage && (
              <div className="pt-6 border-t border-neutral-100">
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 flex items-center">
                  <ScrollText className="w-4 h-4 mr-1.5 text-neutral-400" />
                  {language === 'ml' ? 'ശാസ്ത്ര പരമ്പരയും വ്യാഖ്യാതാക്കളും' : 'Authoritative Commentarial Lineage (Śāstra-Paramparā)'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(overview.commentarialLineage[language] || overview.commentarialLineage.en).map((node, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50/80 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif font-bold text-sm text-neutral-900">{node.author}</span>
                        <span className="text-[11px] text-neutral-500 font-mono">{node.century}</span>
                      </div>
                      <div className="text-xs font-medium text-neutral-700 italic mb-1.5">{node.work}</div>
                      <div className="text-xs text-neutral-600 leading-normal">{node.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Primary Texts */}
      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-serif font-bold text-neutral-800 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-neutral-500" />
          Primary Texts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {system.texts.map((text) => (
            <Link
              key={text.id}
              to={`/system/${system.id}/text/${text.id}`}
              className="block bg-white rounded-xl shadow-xs border border-neutral-200 hover:shadow-sm p-5 transition-all group relative overflow-hidden"
              style={{ borderLeftColor: accent.primary, borderLeftWidth: '4px' }}
            >
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-700">
                {text.transliteratedTitle}
              </h3>
              <p className="text-neutral-500 text-sm mb-3">{text.title}</p>
              <div className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-700">Author:</span> {text.author}
              </div>
              <div className="text-sm text-neutral-600 mb-2">
                {text.verses.length > 0 && (
                  <span>
                    <span className="font-medium text-neutral-700">{getVerseTerm(text, text.verses.length)}:</span> {text.verses.length}
                  </span>
                )}
                {text.verses.length > 0 && text.concepts.length > 0 && <span> • </span>}
                {text.concepts.length > 0 && (
                  <span>
                    <span className="font-medium text-neutral-700">Concepts:</span> {text.concepts.length}
                  </span>
                )}
              </div>

              {text.sources && text.sources.length > 0 && (
                <div className="pt-3 border-t border-neutral-100">
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Integrated Commentaries
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {text.sources.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-700"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Core Philosophy Thread */}
      {system.thread && system.thread.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-neutral-200">
          <h2 className="text-2xl font-serif font-bold text-neutral-800 flex items-center">
            <MapIcon className="w-6 h-6 mr-2 text-neutral-500" />
            Core Philosophy Thread
          </h2>
          <div 
            className="rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between shadow-xs"
            style={{ backgroundColor: accent.primary }}
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Explore the {system.title} Narrative</h3>
              <p className="text-white/80 max-w-md text-sm md:text-base">
                A structured, step-by-step thread tracing the foundational metaphysics and epistemology of {system.title} from initial commentary to supreme release.
              </p>
            </div>
            <Link
              to={`/system/${system.id}/thread`}
              className="mt-6 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-neutral-900 bg-white hover:bg-neutral-100 shadow-xs transition-colors"
            >
              Start Thread ({system.thread.length} Steps)
            </Link>
          </div>
        </div>
      )}

      {/* Foundational Concepts */}
      {allConcepts.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-neutral-500" />
              Foundational Concepts ({allConcepts.length})
            </h2>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </div>
              <input
                type="text"
                value={conceptSearch}
                onChange={(e) => setConceptSearch(e.target.value)}
                placeholder="Filter concepts..."
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                All ({allConcepts.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-3">
            {filteredConcepts.map((concept) => {
              const localized = concept.content[language] ?? concept.content.en;
              const isExpanded = expandedConceptId === concept.id;

              return (
                <div 
                  id={`concept-${concept.id}`}
                  key={concept.id}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setExpandedConceptId(isExpanded ? null : concept.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif font-bold text-neutral-900 text-base">
                          {localized?.title || concept.id}
                        </h4>
                        {concept.category && (
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                            {concept.category}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-neutral-500">{concept.textTitle}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-400">
                      {concept.relatedVerseIds && concept.relatedVerseIds.length > 0 && (
                        <span className="text-xs bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                          {concept.relatedVerseIds.length} verses
                        </span>
                      )}
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-neutral-100 space-y-4 text-neutral-700">
                      {localized?.summary && (
                        <div className="prose prose-sm prose-neutral max-w-none">
                          <Markdown>{localized.summary}</Markdown>
                        </div>
                      )}
                      {concept.relatedVerseIds && concept.relatedVerseIds.length > 0 && (
                        <div className="pt-3 border-t border-neutral-100">
                          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                            Cross-Referenced Verses
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {concept.relatedVerseIds.map((vId) => (
                              <Link
                                key={vId}
                                to={`/system/${system.id}/text/${concept.textId}/verse/${vId}`}
                                className="text-xs px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium transition-colors"
                              >
                                Verse {vId}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}



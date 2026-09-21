import React, { useState } from 'react';
import { Bookmark, Share2, BookOpen, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { ReadingLens } from '../../types/preferences';
import { LayerAccordion } from './LayerAccordion';
import { SourceWitnessModal, SourceWitnessData } from './SourceWitnessModal';
import { LexicalAnchor } from './LexicalAnchor';

export interface VerseReaderData {
  id: string;
  number: number | string;
  section?: string;
  textTitle: string;
  textId: string;
  systemId?: string;
  systemName?: string;
  systemAccent?: string;

  // Sanskrit text layers
  devanagari: string;
  malayalamScript?: string;
  iast?: string;

  // Analytical layers
  padaccheda?: string;
  anvaya?: string;
  padartha?: string;

  // Translation layers
  translationMl?: string;
  translationEn?: string;

  // Commentary & pedagogical layers
  commentary?: string;
  beginnerExplanation?: string;
  philosophicalAnalysis?: string;

  // Source witness
  witness?: SourceWitnessData;

  // Nav
  prevVerseUrl?: string;
  nextVerseUrl?: string;
}

export interface VerseReaderProps {
  verse: VerseReaderData;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  onShare?: () => void;
  className?: string;
}

export const VerseReader: React.FC<VerseReaderProps> = ({
  verse,
  isBookmarked = false,
  onToggleBookmark,
  onShare,
  className = '',
}) => {
  const { language, readingLens, setReadingLens } = usePreferences();
  const [witnessModalOpen, setWitnessModalOpen] = useState(false);

  // Controlled layer expansion states
  // Default open state adapts to current reading lens
  const [openLayers, setOpenLayers] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    if (readingLens === 'rajas') {
      initial[4] = true;
      initial[5] = true;
      initial[6] = true;
      initial[11] = true;
    } else if (readingLens === 'tamas') {
      initial[4] = true;
      initial[6] = true;
      initial[9] = true;
      initial[12] = true;
    } else {
      initial[10] = true;
    }
    return initial;
  });

  const toggleLayer = (layerNum: number) => {
    setOpenLayers((prev) => ({ ...prev, [layerNum]: !prev[layerNum] }));
  };

  const handleLensChange = (newLens: ReadingLens) => {
    setReadingLens(newLens);
    if (newLens === 'sattva') {
      setOpenLayers({ 10: true });
    } else if (newLens === 'rajas') {
      setOpenLayers({ 4: true, 5: true, 6: true, 11: true });
    } else if (newLens === 'tamas') {
      setOpenLayers({ 4: true, 6: true, 9: true, 12: true });
    }
  };

  const defaultWitness: SourceWitnessData = verse.witness || {
    title: `${verse.textTitle} (Critical Edition)`,
    page: verse.number,
    verseNumber: verse.number,
    editor: 'Chaukhambha Sanskrit Series',
    year: '1953',
    location: 'Varanasi',
    certification: 'scholarly',
    rights: 'Public Domain / Classical Heritage',
  };

  return (
    <article
      aria-label={`${verse.textTitle} - ${language === 'ml' ? 'ശ്ലോകം' : 'Verse'} ${verse.number}`}
      className={`space-y-8 animate-fade-in ${className}`}
    >
      {/* ── Top Bar: Identity & Actions ──────────────────────────── */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-tamas-deep pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-sattva-dim mb-1">
            {verse.systemName && <span>{verse.systemName}</span>}
            {verse.systemName && <span aria-hidden="true">·</span>}
            <span>{verse.textTitle}</span>
            {verse.section && (
              <>
                <span aria-hidden="true">·</span>
                <span>{verse.section}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-medium text-sattva-bright">
            {language === 'ml' ? `ശ്ലോകം ${verse.number}` : `Verse ${verse.number}`}
          </h1>
        </div>

        {/* Reading Lens Switcher */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div
            role="radiogroup"
            aria-label={language === 'ml' ? 'വായനാ ദൃഷ്ടി' : 'Reading Lens'}
            className="flex items-center p-1 rounded-xl bg-avyakta-2 border border-tamas-deep text-xs font-medium"
          >
            {(
              [
                { id: 'sattva', labelMl: 'സത്ത്വം', labelEn: 'Sattva' },
                { id: 'rajas', labelMl: 'രജസ്സ്', labelEn: 'Rajas' },
                { id: 'tamas', labelMl: 'തമസ്സ്', labelEn: 'Tamas' },
              ] as const
            ).map((lens) => {
              const active = readingLens === lens.id;
              return (
                <button
                  key={lens.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => handleLensChange(lens.id)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    active
                      ? 'bg-rajas text-sattva-bright font-semibold shadow-xs'
                      : 'text-sattva-dim hover:text-sattva'
                  }`}
                >
                  {language === 'ml' ? lens.labelMl : lens.labelEn}
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 ml-2">
            {onToggleBookmark && (
              <button
                type="button"
                onClick={onToggleBookmark}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'border-amber/50 bg-amber/15 text-amber'
                    : 'border-tamas-deep bg-avyakta-2 text-sattva-dim hover:text-sattva'
                }`}
              >
                <Bookmark className="w-4 h-4" aria-hidden="true" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            )}

            {onShare && (
              <button
                type="button"
                onClick={onShare}
                aria-label="Share verse"
                className="p-2 rounded-lg border border-tamas-deep bg-avyakta-2 text-sattva-dim hover:text-sattva transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setWitnessModalOpen(true)}
              title={language === 'ml' ? 'ആധാരശില കാണുക' : 'Inspect primary source witness'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purusha/40 bg-purusha/10 text-purusha hover:bg-purusha/20 text-xs font-medium transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{language === 'ml' ? 'ആധാരം' : 'Witness'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Primary Sanskrit Plane ───────────────────────────────── */}
      <section
        aria-label="Sanskrit Original"
        className="p-6 sm:p-8 rounded-2xl bg-avyakta-2 border border-tamas-deep/90 space-y-5"
      >
        {/* Layer 1: Devanāgarī */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-sattva-dim">
            <span>L1 · देवनागरी मूलम्</span>
            <span className="text-[11px] uppercase tracking-wider text-purusha font-sans font-semibold">
              Original Sanskrit
            </span>
          </div>
          <p
            lang="sa"
            className="text-xl sm:text-2xl font-sanskrit text-sattva-bright leading-relaxed sm:leading-loose whitespace-pre-line"
          >
            {verse.devanagari}
          </p>
        </div>

        {/* Layer 2: Malayalam Script Sanskrit */}
        {verse.malayalamScript && (
          <div className="pt-4 border-t border-tamas-deep/50 space-y-1">
            <span className="text-xs font-mono text-sattva-dim block">
              L2 · മലയാള ലിപിയിലെ സംസ്കൃതം
            </span>
            <p
              lang="sa-Mlym"
              className="text-base sm:text-lg font-malayalam-body text-sattva leading-loose whitespace-pre-line"
            >
              {verse.malayalamScript}
            </p>
          </div>
        )}

        {/* Layer 3: IAST Roman Transliteration */}
        {verse.iast && (
          <div className="pt-3 border-t border-tamas-deep/40 space-y-1">
            <span className="text-xs font-mono text-sattva-dim block">
              L3 · IAST Transliteration
            </span>
            <p className="text-sm font-serif italic text-sattva-dim leading-relaxed whitespace-pre-line">
              {verse.iast}
            </p>
          </div>
        )}
      </section>

      {/* ── Translation Plane ────────────────────────────────────── */}
      <section aria-label="Translations" className="space-y-4">
        {/* Layer 7: Malayalam Translation */}
        {verse.translationMl && (
          <div className="p-6 sm:p-7 rounded-2xl bg-avyakta-2 border border-tamas-deep space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sattva-dim">
                L7 · മലയാള വിവർത്തനം
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-rajas/15 text-rajas border border-rajas/30">
                സരളാർത്ഥം
              </span>
            </div>
            <p
              lang="ml"
              className="text-base sm:text-lg font-malayalam-body text-sattva leading-relaxed"
            >
              {verse.translationMl}
            </p>
          </div>
        )}

        {/* Layer 8: English Translation */}
        {verse.translationEn && (
          <div className="p-5 sm:p-6 rounded-2xl bg-avyakta-2/70 border border-tamas-deep/80 space-y-2">
            <span className="text-xs font-mono text-sattva-dim block">
              L8 · English Translation
            </span>
            <p className="text-sm sm:text-base font-serif text-sattva-dim leading-relaxed">
              {verse.translationEn}
            </p>
          </div>
        )}
      </section>

      {/* ── Multi-Layer Accordions (Progressive Disclosure) ───────── */}
      <section aria-label="Analytical and Philological Layers" className="space-y-3 pt-2">
        {/* Layer 4: Padaccheda */}
        {verse.padaccheda && (
          <LayerAccordion
            layerNumber={4}
            title={language === 'ml' ? 'പദച്ഛേദം' : 'Padaccheda'}
            subtitle="Word Segmentation"
            isOpen={!!openLayers[4]}
            onToggle={() => toggleLayer(4)}
          >
            <p className="font-mono text-sm sm:text-base text-sattva-bright leading-relaxed">
              {verse.padaccheda}
            </p>
          </LayerAccordion>
        )}

        {/* Layer 5: Anvaya */}
        {verse.anvaya && (
          <LayerAccordion
            layerNumber={5}
            title={language === 'ml' ? 'അന്വയം' : 'Anvaya'}
            subtitle="Syntactic Order"
            isOpen={!!openLayers[5]}
            onToggle={() => toggleLayer(5)}
          >
            <p className="font-sanskrit text-sm sm:text-base text-sattva leading-relaxed">
              {verse.anvaya}
            </p>
          </LayerAccordion>
        )}

        {/* Layer 6: Padārtha */}
        {verse.padartha && (
          <LayerAccordion
            layerNumber={6}
            title={language === 'ml' ? 'പദാർത്ഥം' : 'Padārtha'}
            subtitle="Word-by-word Gloss"
            isOpen={!!openLayers[6]}
            onToggle={() => toggleLayer(6)}
          >
            <div className="space-y-2 font-mono text-xs sm:text-sm text-sattva leading-relaxed whitespace-pre-line">
              {verse.padartha}
            </div>
          </LayerAccordion>
        )}

        {/* Layer 9: Commentaries */}
        {verse.commentary && (
          <LayerAccordion
            layerNumber={9}
            title={language === 'ml' ? 'പാരമ്പര്യ ഭാഷ്യം' : 'Traditional Commentary'}
            subtitle="Classical Exegesis"
            badge="ഭാഷ്യം"
            isOpen={!!openLayers[9]}
            onToggle={() => toggleLayer(9)}
          >
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-sattva">
              <p className="whitespace-pre-line">{verse.commentary}</p>
            </div>
          </LayerAccordion>
        )}

        {/* Layer 10: Beginner Explanation */}
        {verse.beginnerExplanation && (
          <LayerAccordion
            layerNumber={10}
            title={language === 'ml' ? 'ലളിത വിശദീകരണം' : 'Introductory Exposition'}
            subtitle="Pedagogical Reflection"
            isOpen={!!openLayers[10]}
            onToggle={() => toggleLayer(10)}
          >
            <p className="text-sm sm:text-base text-sattva leading-relaxed whitespace-pre-line">
              {verse.beginnerExplanation}
            </p>
          </LayerAccordion>
        )}

        {/* Layer 11: Philosophical Analysis */}
        {verse.philosophicalAnalysis && (
          <LayerAccordion
            layerNumber={11}
            title={language === 'ml' ? 'തത്ത്വവിശകലനം' : 'Philosophical Analysis'}
            subtitle="Ontological & Epistemic Insights"
            isOpen={!!openLayers[11]}
            onToggle={() => toggleLayer(11)}
          >
            <p className="text-sm sm:text-base text-sattva leading-relaxed whitespace-pre-line">
              {verse.philosophicalAnalysis}
            </p>
          </LayerAccordion>
        )}

        {/* Layer 12: Source Witness & Critical Apparatus */}
        <LayerAccordion
          layerNumber={12}
          title={language === 'ml' ? 'ആധാരശിലകൾ' : 'Source Witnesses'}
          subtitle="Critical Apparatus & Provenance"
          badge="പാഠവിവരം"
          isOpen={!!openLayers[12]}
          onToggle={() => toggleLayer(12)}
        >
          <div className="space-y-3 text-xs sm:text-sm text-sattva">
            <p className="text-sattva-dim">
              {language === 'ml'
                ? 'ഈ ശ്ലോകത്തിന്റെ പാഠവിവരങ്ങളും അച്ചടിരേഖകളും താഴെയുള്ള ബട്ടൺ വഴി പരിശോധിക്കാം:'
                : 'Inspect the certified critical edition coordinates and provenance data for this verse:'}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setWitnessModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purusha/15 border border-purusha/40 text-purusha hover:bg-purusha/25 transition-colors cursor-pointer text-xs font-semibold"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>{language === 'ml' ? 'ആധാരശില പരിശോധിക്കുക' : 'Open Source Witness'}</span>
              </button>
              <span className="text-xs text-sattva-dim">
                {defaultWitness.title} ({defaultWitness.year})
              </span>
            </div>
          </div>
        </LayerAccordion>
      </section>

      {/* ── Verse Navigation Controls ────────────────────────────── */}
      <footer className="pt-6 border-t border-tamas-deep flex items-center justify-between gap-4">
        {verse.prevVerseUrl ? (
          <a
            href={verse.prevVerseUrl}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-avyakta-2 border border-tamas-deep text-sattva hover:border-rajas hover:text-rajas transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span>{language === 'ml' ? 'മുമ്പത്തെ ശ്ലോകം' : 'Previous Verse'}</span>
          </a>
        ) : (
          <div />
        )}

        {verse.nextVerseUrl ? (
          <a
            href={verse.nextVerseUrl}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-avyakta-2 border border-tamas-deep text-sattva hover:border-rajas hover:text-rajas transition-colors text-sm font-medium"
          >
            <span>{language === 'ml' ? 'അടുത്ത ശ്ലോകം' : 'Next Verse'}</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </a>
        ) : (
          <div />
        )}
      </footer>

      {/* Primary Source Witness Modal */}
      <SourceWitnessModal
        isOpen={witnessModalOpen}
        onClose={() => setWitnessModalOpen(false)}
        witness={defaultWitness}
      />
    </article>
  );
};

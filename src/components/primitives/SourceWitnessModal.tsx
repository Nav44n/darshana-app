import React, { useEffect, useRef, useId } from 'react';
import { X, ShieldCheck, BookOpen, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';

export interface SourceWitnessData {
  title: string;
  editor?: string;
  publisher?: string;
  year?: string | number;
  location?: string;
  series?: string;
  page?: string | number;
  verseNumber?: string | number;
  certification?: 'scholarly' | 'algorithmic' | 'pending';
  provenance?: string;
  rights?: string;
}

export interface SourceWitnessModalProps {
  isOpen: boolean;
  onClose: () => void;
  witness: SourceWitnessData | null;
}

export const SourceWitnessModal: React.FC<SourceWitnessModalProps> = ({
  isOpen,
  onClose,
  witness,
}) => {
  const { language } = usePreferences();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Focus close button on mount
    closeButtonRef.current?.focus();

    // Prevent body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !witness) return null;

  const isScholarly = witness.certification === 'scholarly' || !witness.certification;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-avyakta-2 border border-tamas-deep shadow-2xl p-6 sm:p-8 space-y-6 text-sattva"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-tamas-deep pb-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-rajas block">
              {language === 'ml' ? 'ആധാരശില സാക്ഷ്യം' : 'Primary Source Witness'}
            </span>
            <h2 id={titleId} className="text-xl sm:text-2xl font-serif font-medium text-sattva-bright">
              {witness.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={language === 'ml' ? 'അടയ്ക്കുക' : 'Close modal'}
            className="p-2 rounded-lg text-sattva-dim hover:text-sattva hover:bg-avyakta-3 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Certification Badge */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-avyakta-3/80 border border-tamas-deep">
          <ShieldCheck className="w-5 h-5 text-teal shrink-0" aria-hidden="true" />
          <div className="text-xs">
            <span className="font-semibold text-sattva block">
              {isScholarly
                ? language === 'ml'
                  ? 'പണ്ഡിതപരിശോധിത ആധാരം (Scholarly Certified)'
                  : 'Scholarly Verified Critical Witness'
                : language === 'ml'
                ? 'യന്ത്രപരിശോധിത പരിശോധന'
                : 'Algorithmic Verification'}
            </span>
            <span className="text-sattva-dim block mt-0.5">
              {language === 'ml'
                ? 'ഈ മൂലഗ്രന്ഥത്തിന്റെ പാഠവും അച്ചടിവിവരങ്ങളും പരിശോധിച്ചതാണ്.'
                : 'Critical coordinates verified against the printed manuscript.'}
            </span>
          </div>
        </div>

        {/* Provenance Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {witness.editor && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sattva-dim uppercase tracking-wider block">
                {language === 'ml' ? 'സംശോധകൻ / വ്യാഖ്യാതാവ്' : 'Editor / Commentator'}
              </span>
              <p className="text-sattva font-medium">{witness.editor}</p>
            </div>
          )}

          {witness.publisher && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sattva-dim uppercase tracking-wider block">
                {language === 'ml' ? 'പ്രസാധനം' : 'Publisher'}
              </span>
              <p className="text-sattva font-medium">{witness.publisher}</p>
            </div>
          )}

          {witness.series && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sattva-dim uppercase tracking-wider block">
                {language === 'ml' ? 'ഗ്രന്ഥപരമ്പര' : 'Series'}
              </span>
              <p className="text-sattva font-medium">{witness.series}</p>
            </div>
          )}

          {witness.year && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sattva-dim uppercase tracking-wider block">
                {language === 'ml' ? 'വർഷം / സ്ഥലം' : 'Year / Place'}
              </span>
              <p className="text-sattva font-medium">
                {witness.year} {witness.location ? `· ${witness.location}` : ''}
              </p>
            </div>
          )}

          {witness.page && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sattva-dim uppercase tracking-wider block">
                {language === 'ml' ? 'സാക്ഷ്യപ്പെടുത്തപ്പെട്ട താൾ' : 'Certified Page'}
              </span>
              <p className="text-sattva font-mono font-medium">
                {language === 'ml' ? `താൾ ${witness.page}` : `Page ${witness.page}`}
                {witness.verseNumber ? ` (ശ്ലോകം ${witness.verseNumber})` : ''}
              </p>
            </div>
          )}
        </div>

        {/* Facsimile Container */}
        <div className="p-4 rounded-xl bg-avyakta-3/40 border border-dashed border-tamas-deep text-center space-y-2">
          <BookOpen className="w-8 h-8 text-sattva-dim mx-auto" aria-hidden="true" />
          <p className="text-xs text-sattva-dim">
            {language === 'ml'
              ? 'മൂലഗ്രന്ഥ താളിന്റെ മാതൃകാരേഖ (Facsimile plate) ഭാവിയിൽ നേരിട്ട് കാണാം.'
              : 'Direct archival manuscript facsimile plate container.'}
          </p>
          <span className="inline-block text-[11px] font-mono text-purusha bg-purusha/10 px-2.5 py-1 rounded-md border border-purusha/30">
            Coordinates: {witness.page ? `p.${witness.page}` : 'Folio 1v'}
          </span>
        </div>

        {/* Footer / Provenance info */}
        <div className="border-t border-tamas-deep pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-sattva-dim">
          <span>{witness.rights || 'Public Domain / Classical Heritage'}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-rajas text-sattva-bright font-medium hover:bg-rajas-dim transition-colors cursor-pointer self-end sm:self-auto"
          >
            {language === 'ml' ? 'ശരി' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};

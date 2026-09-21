import React, { useState, useRef, useEffect, useId } from 'react';
import { Link } from 'react-router';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes } from '../../utils/navigation';

export interface LexicalAnchorProps {
  /** The Sanskrit/Malayalam technical term displayed inline */
  term: string;
  /** Roman IAST transliteration (e.g., 'Prakṛti', 'Puruṣa') */
  iast?: string;
  /** Short, plain-language definition */
  definition: string;
  /** Philosophical significance: "Why does this matter?" */
  significance?: string;
  /** Target concept ID in the corpus, if linked */
  conceptId?: string;
  /** Optional custom CSS classes */
  className?: string;
}

export const LexicalAnchor: React.FC<LexicalAnchorProps> = ({
  term,
  iast,
  definition,
  significance,
  conceptId,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = usePreferences();
  const popoverId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const targetLink = conceptId ? routes.concept(language, conceptId) : routes.inquiries(language);

  return (
    <span className="relative inline-block align-baseline">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={popoverId}
        aria-haspopup="dialog"
        title={iast ? `${term} (${iast})` : term}
        className={`inline font-medium text-sattva underline decoration-dotted decoration-purusha/60 underline-offset-4 hover:text-purusha hover:decoration-purusha focus-visible:outline-2 focus-visible:outline-purusha transition-colors cursor-pointer motion-reduce:transition-none ${className}`}
      >
        {term}
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          id={popoverId}
          role="dialog"
          aria-label={iast ? `${term} (${iast})` : term}
          className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80 p-4 rounded-xl bg-avyakta-2 border border-purusha/40 shadow-xl text-left animate-fade-in text-sattva"
          style={{ top: '100%' }}
        >
          <div className="flex items-start justify-between gap-2 border-b border-tamas-deep pb-2 mb-3">
            <div>
              <span className="font-semibold text-base text-sattva-bright block">
                {term}
              </span>
              {iast && (
                <span className="text-xs italic text-purusha font-serif block">
                  {iast}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label={language === 'ml' ? 'അടയ്ക്കുക' : 'Close'}
              className="p-1 rounded-md text-sattva-dim hover:text-sattva hover:bg-avyakta-3 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sattva-dim block mb-1">
                {language === 'ml' ? 'സരള വ്യാഖ്യാനം' : 'Plain Meaning'}
              </span>
              <p className="text-sattva leading-relaxed text-sm">
                {definition}
              </p>
            </div>

            {significance && (
              <div className="bg-avyakta-3/60 p-2.5 rounded-lg border border-tamas-deep/60">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-purusha mb-1">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {language === 'ml' ? 'എന്തുകൊണ്ട് പ്രധാനം?' : 'Why does this matter?'}
                </span>
                <p className="text-xs text-sattva-dim leading-relaxed">
                  {significance}
                </p>
              </div>
            )}

            <div className="pt-2 border-t border-tamas-deep/40 flex justify-end">
              <Link
                to={targetLink}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-rajas hover:text-sattva transition-colors"
              >
                <span>{language === 'ml' ? 'ആശയം പരിശോധിക്കുക' : 'Explore Concept'}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

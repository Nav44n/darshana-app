import React, { useId } from 'react';
import { ChevronDown } from 'lucide-react';

export interface LayerAccordionProps {
  /** The 12-layer number (e.g. 1 through 12) */
  layerNumber: number;
  /** Primary label in current language (e.g. 'പദച്ഛേദം', 'ആധാരശിലകൾ') */
  title: string;
  /** Secondary or IAST label (e.g. 'Padaccheda · Word Segmentation') */
  subtitle?: string;
  /** Optional badge indicator */
  badge?: string;
  /** Controlled expansion state */
  isOpen: boolean;
  /** Toggle handler */
  onToggle: () => void;
  /** Layer content */
  children: React.ReactNode;
  /** Optional container CSS class */
  className?: string;
}

export const LayerAccordion: React.FC<LayerAccordionProps> = ({
  layerNumber,
  title,
  subtitle,
  badge,
  isOpen,
  onToggle,
  children,
  className = '',
}) => {
  const contentId = useId();
  const buttonId = useId();

  return (
    <div
      className={`border border-tamas-deep/80 rounded-xl overflow-hidden bg-avyakta-2 transition-colors duration-base ${
        isOpen ? 'border-sattva-dim/40' : 'hover:border-tamas'
      } ${className}`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full flex items-center justify-between p-4 sm:p-4.5 text-left cursor-pointer transition-colors hover:bg-avyakta-3/40 focus-visible:outline-2 focus-visible:outline-sattva"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span
              className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-mono font-medium border transition-colors ${
                isOpen
                  ? 'bg-purusha/20 border-purusha/50 text-sattva'
                  : 'bg-avyakta-3 border-tamas-deep text-sattva-dim'
              }`}
              title={`Layer ${layerNumber}`}
            >
              L{layerNumber}
            </span>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm sm:text-base text-sattva truncate">
                  {title}
                </span>
                {badge && (
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-rajas/15 text-rajas border border-rajas/30">
                    {badge}
                  </span>
                )}
              </div>
              {subtitle && (
                <span className="text-xs text-sattva-dim font-serif italic block truncate mt-0.5">
                  {subtitle}
                </span>
              )}
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className={`w-4 h-4 text-sattva-dim shrink-0 transition-transform duration-base motion-reduce:transition-none ${
              isOpen ? 'rotate-180 text-sattva' : ''
            }`}
          />
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={`px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-tamas-deep/40 text-sattva text-sm leading-relaxed ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

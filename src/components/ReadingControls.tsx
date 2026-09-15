import { useReading } from '../context/ReadingContext';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/ui';

/**
 * Compact A− / A+ segmented control for the reading screens' top rows.
 * Locale-neutral glyphs with visually-hidden full labels; bounds are
 * communicated by disabling at each end rather than by wrapping around.
 */
export default function ReadingControls() {
  const { language } = useLanguage();
  const { scale, maxScale, decrease, increase } = useReading();
  const btn =
    'flex items-center justify-center min-h-9 min-w-9 rounded-lg bg-avyakta-3 hover:bg-avyakta-4 text-sattva-dim hover:text-sattva transition-colors motion-reduce:transition-none disabled:opacity-40 disabled:pointer-events-none';

  return (
    <div className="flex items-center gap-1 shrink-0">
      <button
        type="button"
        onClick={decrease}
        disabled={scale === 0}
        title={t(language, 'textSizeDecrease')}
        className={btn}
      >
        <span aria-hidden="true" className="text-xs font-bold">
          A−
        </span>
        <span className="sr-only">{t(language, 'textSizeDecrease')}</span>
      </button>
      <button
        type="button"
        onClick={increase}
        disabled={scale === maxScale}
        title={t(language, 'textSizeIncrease')}
        className={btn}
      >
        <span aria-hidden="true" className="text-xs font-bold">
          A+
        </span>
        <span className="sr-only">{t(language, 'textSizeIncrease')}</span>
      </button>
    </div>
  );
}

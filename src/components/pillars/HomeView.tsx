import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, Compass, Sparkles, Feather, HelpCircle, Flame } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes } from '../../utils/navigation';
import { systems } from '../../content';
import { getSystemAccent } from '../../utils/theme';
import { darkColors, lightColors } from '../../theme/tokens';
import { systemOverviews } from '../../content/systemOverviews';

export const HomeView: React.FC = () => {
  const { language, theme } = usePreferences();
  const palette = theme === 'dark' ? darkColors : lightColors;

  const greatQuestions = [
    {
      id: 'who-am-i',
      qMl: 'ഞാൻ ആരാണ്?',
      qEn: 'Who am I?',
      subMl: 'ദ്രഷ്ടാവായ പുരുഷനും ശരീരവും ജീവനും തമ്മിലുള്ള വ്യത്യാസം',
      subEn: 'The discerning of the pure Witness (Puruṣa) from matter (Prakṛti)',
      systemHint: 'Sāṃkhya & Vedānta',
      verseTarget: routes.verse(language, 'samkhya-karika', '1'),
    },
    {
      id: 'what-is-reality',
      qMl: 'പ്രപഞ്ചം യാഥാർത്ഥ്യമോ?',
      qEn: 'Is reality real or illusory?',
      subMl: 'കാര്യകാരണബന്ധം, പരിണാമം, മായാവാദം എന്നിവയുടെ വിചാരം',
      subEn: 'Causality, cosmic transformation (Pariṇāma), and Maya',
      systemHint: 'Vaiśeṣika & Vedānta',
      verseTarget: routes.inquiries(language),
    },
    {
      id: 'what-is-knowledge',
      qMl: 'അറിവ് എന്നാൽ എന്ത്?',
      qEn: 'What constitutes valid knowledge?',
      subMl: 'പ്രത്യക്ഷം, അനുമാനം, ശബ്ദം — ജ്ഞാനസാധനങ്ങളുടെ നിഷ്കർഷ',
      subEn: 'The instruments of true cognition (Pramāṇas) and logic',
      systemHint: 'Nyāya & Mīmāṃsā',
      verseTarget: routes.inquiries(language),
    },
    {
      id: 'liberation',
      qMl: 'ദുഃഖത്തിൽ നിന്നുള്ള മോചനമെങ്ങനെ?',
      qEn: 'How is suffering permanently uprooted?',
      subMl: 'കൈവല്യവും ജീവൻമുക്തിയും — അഷ്ടാംഗയോഗവും വിവേകജ്ഞാനവും',
      subEn: 'Kaivalya, the eight limbs of Yoga, and contemplative liberation',
      systemHint: 'Yoga & Sāṃkhya',
      verseTarget: routes.verse(language, 'yoga-sutras', '1.2'),
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-16">
      {/* ── 1. Contemplative Aperture (ആലോചനാ വാതിൽ) ────────────── */}
      <section
        aria-label="Contemplative Aperture"
        className="relative overflow-hidden rounded-3xl bg-avyakta-2 border border-tamas-deep p-8 sm:p-12 text-center space-y-6 shadow-sm"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rajas/15 border border-rajas/30 text-rajas text-xs font-semibold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{language === 'ml' ? 'ആലോചനാ വാതിൽ' : 'Contemplative Aperture'}</span>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-2xl sm:text-4xl font-serif font-medium text-sattva-bright leading-relaxed sm:leading-tight">
            {language === 'ml'
              ? 'ജീവിതത്തിൽ നാം അനുഭവിക്കുന്ന ത്രിവിധ ദുഃഖങ്ങൾക്ക് ശാശ്വതമായ പരിഹാരമുണ്ടോ?'
              : 'Is there an ultimate cessation to the threefold suffering of life?'}
          </h1>
          <p className="text-sm sm:text-base text-sattva-dim font-serif italic max-w-xl mx-auto leading-relaxed">
            {language === 'ml'
              ? 'സാംഖ്യകാരികയുടെ ആദ്യ ശ്ലോകത്തിലൂടെ ഭാരതീയ തത്ത്വചിന്തയുടെ ജിജ്ഞാസയിലേക്ക് പ്രവേശിക്കൂ.'
              : 'Begin your journey through the foundational axiom of the Sāṃkhya Kārikā.'}
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={routes.verse(language, 'samkhya-karika', '1')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-rajas text-sattva-bright font-medium hover:bg-rajas-dim transition-colors shadow-sm text-sm sm:text-base cursor-pointer"
          >
            <span>{language === 'ml' ? 'കാരിക 1 വായിക്കുക' : 'Read Kārikā 1'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Link
            to={routes.systems(language)}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-avyakta-3 border border-tamas-deep text-sattva hover:border-sattva transition-colors text-sm font-medium cursor-pointer"
          >
            <Compass className="w-4 h-4 text-purusha" aria-hidden="true" />
            <span>{language === 'ml' ? 'ദർശനങ്ങൾ കാണുക' : 'Explore Systems'}</span>
          </Link>
        </div>
      </section>

      {/* ── 2. The Great Questions (മഹാചോദ്യങ്ങൾ) ────────────────── */}
      <section aria-label="The Great Questions" className="space-y-5">
        <div className="flex items-center justify-between border-b border-tamas-deep pb-3">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-purusha" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-sattva-bright">
              {language === 'ml' ? 'മഹാചോദ്യങ്ങൾ' : 'The Great Questions'}
            </h2>
          </div>
          <Link
            to={routes.inquiries(language)}
            className="text-xs sm:text-sm font-medium text-rajas hover:text-sattva transition-colors"
          >
            {language === 'ml' ? 'എല്ലാ വിചാരങ്ങളും കാണുക →' : 'All inquiries →'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {greatQuestions.map((q) => (
            <Link
              key={q.id}
              to={q.verseTarget}
              className="p-6 rounded-2xl bg-avyakta-2 border border-tamas-deep hover:border-rajas/70 transition-colors group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-sattva-dim uppercase tracking-wider block">
                  {q.systemHint}
                </span>
                <h3 className="text-lg font-serif font-medium text-sattva group-hover:text-rajas transition-colors">
                  {language === 'ml' ? q.qMl : q.qEn}
                </h3>
                <p className="text-xs sm:text-sm text-sattva-dim leading-relaxed">
                  {language === 'ml' ? q.subMl : q.subEn}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-rajas pt-2">
                <span>{language === 'ml' ? 'അന്വേഷിക്കുക' : 'Investigate'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. The Eight Classical Systems (അഷ്ടദർശനങ്ങൾ) ───────── */}
      <section aria-label="The Eight Systems" className="space-y-5">
        <div className="flex items-center justify-between border-b border-tamas-deep pb-3">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-amber" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-sattva-bright">
              {language === 'ml' ? 'അഷ്ടദർശനങ്ങൾ' : 'The Eight Systems'}
            </h2>
          </div>
          <Link
            to={routes.systems(language)}
            className="text-xs sm:text-sm font-medium text-rajas hover:text-sattva transition-colors"
          >
            {language === 'ml' ? 'വിശദമായി കാണുക →' : 'View all →'}
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {systems.map((s) => {
            const accent = getSystemAccent(s.id);
            const overview = systemOverviews[s.id];
            return (
              <Link
                key={s.id}
                to={routes.systemDetail(language, s.id)}
                className="p-4 sm:p-5 rounded-2xl bg-avyakta-2 border border-tamas-deep hover:border-sattva/60 transition-colors group flex flex-col justify-between space-y-3"
              >
                <div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-2.5"
                    style={{ backgroundColor: accent.primary }}
                  />
                  <h3 className="text-base sm:text-lg font-serif font-medium text-sattva group-hover:text-sattva-bright">
                    {s.title}
                  </h3>
                  <span className="text-[11px] text-sattva-dim block mt-0.5 line-clamp-2">
                    {overview?.headline[language] || s.subtitle}
                  </span>
                </div>

                <div className="text-[11px] font-medium text-sattva-dim group-hover:text-sattva flex items-center gap-1">
                  <span>{s.texts.length} {language === 'ml' ? 'ഗ്രന്ഥങ്ങൾ' : 'texts'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 4. Library Gateway (ഗ്രന്ഥശാല) ───────────────────────── */}
      <section
        aria-label="Library Gateway"
        className="p-6 sm:p-8 rounded-2xl bg-avyakta-2 border border-tamas-deep flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1.5 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-rajas block">
            {language === 'ml' ? 'ഗ്രന്ഥശാല' : 'The Classical Library'}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-sattva-bright">
            {language === 'ml'
              ? 'മൂലഗ്രന്ഥങ്ങളുടെ സമഗ്ര ശേഖരം'
              : 'Primary Text Corpus & Critical Editions'}
          </h2>
          <p className="text-xs sm:text-sm text-sattva-dim leading-relaxed">
            {language === 'ml'
              ? 'സാംഖ്യകാരിക, യോഗസൂത്രം, ന്യായസൂത്രം, ബ്രഹ്മസൂത്രം, ഭഗവദ്ഗീത തുടങ്ങി ഭാരതീയ ചിന്തയുടെ ആധാരശിലകൾ പദച്ഛേദത്തോടും മലയാള വിവർത്തനത്തോടും കൂടി വായിക്കൂ.'
              : 'Direct access to the Sanskrit sūtras and kārikās with word segmentation, glosses, and verified scholarly witnesses.'}
          </p>
        </div>

        <Link
          to={routes.library(language)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-avyakta-3 border border-tamas-deep text-sattva hover:border-rajas hover:text-rajas transition-colors text-sm font-semibold shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>{language === 'ml' ? 'ഗ്രന്ഥശാല തുറക്കുക' : 'Open Library'}</span>
        </Link>
      </section>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { HelpCircle, Search, Sparkles, BookOpen, ArrowRight, Tag } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import { routes } from '../../utils/navigation';
import { systems } from '../../content';

export const InquiriesView: React.FC = () => {
  const { language } = usePreferences();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'metaphysics' | 'epistemology' | 'liberation'>('all');

  const inquiries = [
    {
      id: 'purusha-prakriti',
      category: 'metaphysics',
      titleMl: 'പുരുഷനും പ്രകൃതിയും — ദ്രഷ്ടാവും ദൃശ്യവും',
      titleEn: 'Puruṣa & Prakṛti: The Seer and the Seen',
      descMl: 'ശുദ്ധചൈതന്യമായ പുരുഷനും പ്രപഞ്ചപരിണാമത്തിന് കാരണമായ ത്രിഗുണാത്മക പ്രകൃതിയും തമ്മിലുള്ള ശാശ്വത ഭേദം.',
      descEn: 'The eternal duality between unattached pure witness-consciousness (Puruṣa) and creative evolving nature (Prakṛti).',
      systems: ['Sāṃkhya', 'Yoga'],
      verseRef: { textId: 'samkhya-karika', verseId: '3' },
    },
    {
      id: 'satkaryavada',
      category: 'metaphysics',
      titleMl: 'സത്കാര്യവാദം — കാരണത്തിൽ കാര്യമുണ്ടോ?',
      titleEn: 'Satkāryavāda: The Pre-existence of the Effect',
      descMl: 'കാരണം ഇല്ലാതെ കാര്യം ഉണ്ടാകുമോ? പാലിൽ തൈര് അന്തർലീനമായിരിക്കുന്നതുപോലെ പ്രപഞ്ചം പ്രകൃതിയിൽ ലീനമായിരിക്കുന്നു.',
      descEn: 'The causal doctrine asserting that an effect pre-exists potentially in its material cause prior to manifestation.',
      systems: ['Sāṃkhya', 'Vedānta'],
      verseRef: { textId: 'samkhya-karika', verseId: '9' },
    },
    {
      id: 'pramanas',
      category: 'epistemology',
      titleMl: 'പ്രമാണങ്ങൾ — സത്യം അറിയുന്നതിനുള്ള വഴികൾ',
      titleEn: 'Pramāṇas: The Instruments of Valid Cognition',
      descMl: 'പ്രത്യക്ഷം (Perception), അനുമാനം (Inference), ആപ്തവചനം/ശബ്ദം (Testimony) — ഓരോ ദർശനവും അംഗീകരിക്കുന്ന ജ്ഞാനസാധനങ്ങൾ.',
      descEn: 'Epistemic criteria through which truthful cognition is gained and validated across classical traditions.',
      systems: ['Nyāya', 'Sāṃkhya', 'Mīmāṃsā'],
      verseRef: { textId: 'samkhya-karika', verseId: '4' },
    },
    {
      id: 'anumanam',
      category: 'epistemology',
      titleMl: 'അനുമാനം — പരോക്ഷസത്യങ്ങളിലേക്കുള്ള യുക്തി',
      titleEn: 'Anumāna: Formal Epistemic Inference',
      descMl: 'പർവ്വതത്തിലെ പുക കണ്ട് തീ ഉണ്ടെന്ന് അനുമാനിക്കുന്നതുപോലെ ഇന്ദ്രിയഗോചരമല്ലാത്ത സത്യങ്ങളിലേക്ക് യുക്തിയിലൂടെ എത്തുന്നത്.',
      descEn: 'The inferential bridge (Vyāpti) extending beyond direct sensory grasp into metaphysical realities.',
      systems: ['Nyāya', 'Vaiśeṣika'],
      verseRef: { textId: 'samkhya-karika', verseId: '5' },
    },
    {
      id: 'kaivalya',
      category: 'liberation',
      titleMl: 'കൈവല്യം — പ്രകൃതിയിൽ നിന്നുള്ള വേർതിരിയൽ',
      titleEn: 'Kaivalya: The Solitary Freedom of the Seer',
      descMl: 'അവിവേകം മൂലം പ്രകൃതിയുടെ സുഖദുഃഖങ്ങൾ തന്റേതാണെന്ന് കരുതിയ പുരുഷൻ വിവേകജ്ഞാനത്തിലൂടെ സ്വന്തം സ്വരൂപത്തിൽ സ്ഥിതിചെയ്യുന്നത്.',
      descEn: 'The ultimate isolation of consciousness from psycho-physical entrapment through discriminating wisdom.',
      systems: ['Sāṃkhya', 'Yoga'],
      verseRef: { textId: 'samkhya-karika', verseId: '64' },
    },
    {
      id: 'chitta-vritti',
      category: 'liberation',
      titleMl: 'ചിത്തവൃത്തി നിരോധം — മനസ്സിന്റെ ശാന്തത',
      titleEn: 'Citta-Vṛtti-Nirodha: Stilling the Mental Ocean',
      descMl: 'മനസ്സിന്റെ ചലനങ്ങളും വികാരങ്ങളും അടങ്ങുമ്പോൾ ദ്രഷ്ടാവ് തന്റെ യഥാർത്ഥ സ്വരൂപത്തിൽ പ്രകാശിക്കുന്നു.',
      descEn: 'When the ripples of cognition are restrained, the seer rests serenely in its innate witnessing nature.',
      systems: ['Yoga'],
      verseRef: { textId: 'yoga-sutras', verseId: '1.2' },
    },
  ];

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;
      const matchText =
        item.titleMl.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.descMl.toLowerCase().includes(q) ||
        item.descEn.toLowerCase().includes(q) ||
        item.systems.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchText;
    });
  }, [inquiries, activeCategory, searchQuery]);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Header */}
      <div className="border-b border-tamas-deep pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-purusha" aria-hidden="true" />
          <h1 className="text-2xl sm:text-4xl font-serif font-medium text-sattva-bright">
            {language === 'ml' ? 'തത്ത്വവിചാരം' : 'Philosophical Inquiries'}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-sattva-dim font-serif italic max-w-2xl leading-relaxed">
          {language === 'ml'
            ? 'ചോദ്യങ്ങളെ മുൻനിർത്തിയുള്ള തത്ത്വാന്വേഷണം — പ്രപഞ്ചം, അറിവ്, ജീവൻ, മോക്ഷം എന്നിവയെക്കുറിച്ചുള്ള ആഴമേറിയ ചിന്തകൾ.'
            : 'Question-first philosophical investigation into metaphysics, epistemology, and contemplative liberation.'}
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Inquiry Categories"
          className="flex items-center gap-1.5 p-1 rounded-xl bg-avyakta-2 border border-tamas-deep overflow-x-auto text-xs"
        >
          {[
            { id: 'all', ml: 'എല്ലാം', en: 'All' },
            { id: 'metaphysics', ml: 'തത്ത്വമീമാംസ', en: 'Metaphysics' },
            { id: 'epistemology', ml: 'പ്രമാണവിചാരം', en: 'Epistemology' },
            { id: 'liberation', ml: 'മോക്ഷവിചാരം', en: 'Liberation' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-rajas text-sattva-bright font-semibold'
                  : 'text-sattva-dim hover:text-sattva'
              }`}
            >
              {language === 'ml' ? cat.ml : cat.en}
            </button>
          ))}
        </div>

        {/* Quick Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-sattva-dim absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ml' ? 'വിചാരങ്ങൾ തിരയുക...' : 'Search inquiries...'}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-avyakta-2 border border-tamas-deep text-xs text-sattva placeholder:text-sattva-dim/60 focus-visible:outline-2 focus-visible:outline-rajas"
          />
        </div>
      </div>

      {/* Inquiries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInquiries.map((inq) => (
          <div
            key={inq.id}
            className="p-6 rounded-2xl bg-avyakta-2 border border-tamas-deep hover:border-purusha/50 transition-colors flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                {inq.systems.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-avyakta-3 border border-tamas-deep text-sattva-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <h2 className="text-lg sm:text-xl font-serif font-medium text-sattva-bright">
                {language === 'ml' ? inq.titleMl : inq.titleEn}
              </h2>

              <p className="text-xs sm:text-sm text-sattva-dim leading-relaxed">
                {language === 'ml' ? inq.descMl : inq.descEn}
              </p>
            </div>

            <div className="pt-3 border-t border-tamas-deep flex items-center justify-between">
              <Link
                to={routes.verse(language, inq.verseRef.textId, inq.verseRef.verseId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rajas hover:text-sattva transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{language === 'ml' ? 'ആധാര ശ്ലോകം വായിക്കുക' : 'Read Foundational Verse'}</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

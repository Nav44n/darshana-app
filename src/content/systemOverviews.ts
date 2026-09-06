import { SupportedLanguage } from '../types/i18n';

export interface SystemPillar {
  title: string;
  sanskritTerm?: string;
  summary: string;
  conceptId?: string;
}

export interface CommentatorNode {
  author: string;
  work: string;
  century: string;
  role: string;
}

export interface SystemOverviewData {
  systemId: string;
  headline: Partial<Record<SupportedLanguage, string>> & { en: string };
  summary: Partial<Record<SupportedLanguage, string>> & { en: string };
  pillars: Partial<Record<SupportedLanguage, SystemPillar[]>> & { en: SystemPillar[] };
  commentarialLineage?: Partial<Record<SupportedLanguage, CommentatorNode[]>>;
}

export const systemOverviews: Record<string, SystemOverviewData> = {
  nyaya: {
    systemId: 'nyaya',
    headline: {
      en: 'The Architecture of Epistemic Realism, Pragmatic Efficacy, and Liberation',
      ml: 'ജ്ഞാനശാസ്ത്രപരമായ യാഥാർത്ഥ്യബോധവും മോക്ഷശാസ്ത്രവും'
    },
    summary: {
      en: "Nyāya is classical India's most rigorous school of epistemology and dialectics. Far from an abstract academic exercise, its opening Bhāṣya and Vārtika ground philosophical inquiry in fruitful human action (pravṛtti-sāmarthya): truth is validated when cognition reliably guides practical effort. Structuring itself on the ancient medical model (caturvyūha), Nyāya treats delusion as a chronic disease and applies its sixteen categories as the intellectual scalpel to permanently eradicate the twenty-one forms of suffering.",
      ml: "ഭാരതീയ തത്ത്വചിന്തയിലെ ഏറ്റവും സൂക്ഷ്മവും ശാസ്ത്രീയവുമായ ജ്ഞാനശാസ്ത്ര പദ്ധതിയാണ് ന്യായദർശനം. ശുദ്ധമായ വാദപ്രതിവാദങ്ങൾക്കപ്പുറം, പ്രമാണങ്ങളെ പ്രായോഗിക ജീവിതത്തിലെ ഫലവത്തായ പ്രവൃത്തിയിലേക്ക് (പ്രവൃത്തിസാമർത്ഥ്യം) ബന്ധിപ്പിക്കുകയാണ് ഇതിന്റെ ആദ്യ പാഠങ്ങൾ. ആയുർവേദ ചികിത്സാശാസ്ത്രത്തിന് സമാനമായി (ചതുർവ്യൂഹം), ജീവിതത്തിലെ 21 വിധത്തിലുള്ള ദുഃഖങ്ങളുടെ ശാശ്വത നിവൃത്തിക്കായി 16 പദാർത്ഥങ്ങളെ അപഗ്രഥിച്ച് സത്യം കണ്ടെത്തുകയാണ് ന്യായത്തിന്റെ ലക്ഷ്യം."
    },
    pillars: {
      en: [
        {
          title: 'Fruitful Exertion as the Benchmark of Truth',
          sanskritTerm: 'Pravṛtti-sāmarthya (प्रवृत्ति-सामर्थ्य)',
          summary: "Vātsyāyana's opening axiom: 'An instrument of valid cognition is effective because it leads to fruitful action.' Right knowledge stimulates the desire to acquire the beneficial (upādāna) or abandon the harmful (hāna). If effort succeeds, the cognition is true; if foiled (as in a mirage), it is false.",
          conceptId: 'pravritti-samarthya'
        },
        {
          title: 'The Four Cognitive Factors',
          sanskritTerm: 'Pramāṇa-Catuṣṭaya (प्रमाण-चतुष्टय)',
          summary: 'Every cognitive event requires four factors: the Knower (Pramātṛ), the Instrument of knowledge (Pramāṇa), the Object known (Prameya), and the Resultant comprehension (Pramā). Uddyotakara proves Pramāṇa is the supreme, most efficient cause (sādhakatama) because its operation directly triggers knowledge.',
          conceptId: 'pramana-catustaya'
        },
        {
          title: 'Realism of Being and Non-Being',
          sanskritTerm: 'Sat & Asat (तत्त्वम् सद्-असत्)',
          summary: 'Truth (tattva) is apprehending the existent as existing, and the non-existent as non-existing. Through the Lamp Analogy (Dīpa-dṛṣṭānta), Vātsyāyana proves that the very same light revealing present objects simultaneously proves the absence of what is not seen.',
          conceptId: 'tattva-sat-asat'
        },
        {
          title: 'The Fourfold Medical Model',
          sanskritTerm: 'Caturvyūha-Śāstra (चतुर्व्यूह-शास्त्र)',
          summary: 'Modeled after Āyurvedic medicine: (1) Heya (the disease: suffering), (2) Hāna (the cure: permanent cessation), (3) Upāya (the medicine: the 16 categories and true knowledge), and (4) Adhigantavya (the return to supreme health: Apavarga).',
          conceptId: 'caturvyuha-shastra'
        },
        {
          title: 'The Twenty-One Kinds of Suffering',
          sanskritTerm: 'Ekaviṃśati-Duḥkha (एकविंशति-दुःख)',
          summary: 'Uddyotakara catalogs the 21 roots of suffering: the physical body, the six sense organs, the six sense objects, the six forms of awareness, intrinsic pain, and mundane pleasure (which is fragile, craving-laden, and destined for loss).',
          conceptId: 'ekavimshati-duhkha'
        },
        {
          title: 'Convergence of Epistemic Instruments',
          sanskritTerm: 'Pramāṇa-Saṃplava (प्रमाण-संप्लव)',
          summary: 'Unlike the Buddhist doctrine that senses and logic never overlap (Pramāṇa-vyavasthā), Nyāya demonstrates that multiple instruments (perception, inference, testimony) can converge upon the same object, multiplying epistemic certainty.',
          conceptId: 'pramana-samplava'
        },
        {
          title: 'The Four Classical Sciences',
          sanskritTerm: 'Catasro Vidyāḥ (चतस्रो विद्याः)',
          summary: 'Human knowledge is anchored in four sovereign sciences: Trayī (Vedic science), Vārtā (economics/agriculture), Daṇḍanīti (political governance), and Ānvīkṣikī (logic). Nyāya lists all 16 categories to protect Ānvīkṣikī from collapsing into spiritual theology (Adhyātma-vidyā).',
          conceptId: 'catasro-vidyah'
        },
        {
          title: 'Examination of Reality by Proofs',
          sanskritTerm: 'Pramāṇair Artha-parīkṣaṇam (प्रमाणैरर्थपरीक्षणम्)',
          summary: "Nyāya is defined as the critical re-examination (anu-īkṣā) of things previously apprehended by perception and testimony. Any logical deduction contradicting direct perception is pseudo-reasoning (nyāyābhāsa) and discarded at the threshold.",
          conceptId: 'anviksiki-nyaya'
        },
        {
          title: 'The Syllogism as Synthesis of All Four Proofs',
          sanskritTerm: 'Pañcāvayava-Pramāṇa-Saṃplava (पञ्चावयव-प्रमाणसंप्लव)',
          summary: 'The five-member syllogism is the supreme reasoning (paramo nyāyaḥ) because each proposition embodies a pramāṇa: Pratijñā=Śabda, Hetu=Anumāna, Udāharaṇa=Pratyakṣa, Upanaya=Upamāna, and Nigamana unites them into an unassailable demonstration.',
          conceptId: 'pancavayava-samplava'
        },
        {
          title: 'The Lamp of All Sciences',
          sanskritTerm: 'Pradīpaḥ Sarvavidyānām (प्रदीपः सर्वविद्यानाम्)',
          summary: "Vātsyāyana's celebrated motto: 'Nyāya is the lamp of all sciences, the resource of all actions, and the foundation of all righteous duties.' It alone scrutinizes the instruments of knowledge that all other disciplines presuppose.",
          conceptId: 'pradipa-sarvavidyanam'
        }
      ],
      ml: [
        {
          title: 'പ്രവൃത്തിസാമർത്ഥ്യം (സത്യത്തിന്റെ പരീക്ഷണക്കല്ല്)',
          sanskritTerm: 'Pravṛtti-sāmarthya (प्रवृत्ति-सामर्थ്യ)',
          summary: 'പ്രമാണത്തിലൂടെ ലഭിക്കുന്ന ശരിയായ അറിവ് മാത്രമേ ഫലവത്തായ പ്രവൃത്തിയിലേക്ക് നയിക്കൂ. ദാഹിക്കുന്നവൻ വെള്ളം കണ്ട് അത് കുടിക്കുകയും ദാഹം മാറുകയും ചെയ്യുമ്പോൾ അറിവ് സത്യമാണെന്ന് തെളിയുന്നു. തെറ്റായ അറിവ് പ്രവൃത്തിയെ പരാജയപ്പെടുത്തുന്നു.',
          conceptId: 'pravritti-samarthya'
        },
        {
          title: 'പ്രമാണചതുഷ്ടയം (ജ്ഞാനത്തിന്റെ നാല് ഘടകങ്ങൾ)',
          sanskritTerm: 'Pramāṇa-Catuṣṭaya (प्रमाण-चतुष्टയ)',
          summary: 'അറിയുന്നവൻ (പ്രമാതാവ്), ഉപകരണം (പ്രമാണം), അറിയപ്പെടുന്ന വസ്തു (പ്രമേയം), ലഭിക്കുന്ന അറിവ് (പ്രമതി) എന്നിവയാണ് ജ്ഞാനത്തിന്റെ നാല് അടിസ്ഥാന ഘടകങ്ങൾ. ഇതിൽ പ്രമാണമാണ് ഏറ്റവും പ്രധാനപ്പെട്ട സാധകതമ കാരണം.',
          conceptId: 'pramana-catustaya'
        },
        {
          title: 'തത്ത്വം: സത്തും അസത്തും',
          sanskritTerm: 'Sat & Asat (तत्त्वम् सद्-असत्)',
          summary: 'ഉള്ളതിനെ ഉള്ളതായും ഇല്ലാത്തതിനെ ഇല്ലാത്തതായും മനസ്സിലാക്കുന്നതാണ് യാഥാർത്ഥ്യം. വിളക്കിന്റെ വെളിച്ചം അവിടെയുള്ള സാധനങ്ങളെ കാണിക്കുന്നതോടൊപ്പം അവിടെയില്ലാത്ത വസ്തുക്കളെയും വ്യക്തമാക്കുന്നു (ദീപദൃഷ്ടാന്തം).',
          conceptId: 'tattva-sat-asat'
        },
        {
          title: 'മോക്ഷത്തിന്റെ ചികിത്സാശാസ്ത്ര മാതൃക',
          sanskritTerm: 'Caturvyūha-Śāstra (ചതുർവ്യൂഹശാസ്ത്രം)',
          summary: 'രോഗം (ഹേയം), രോഗനിവൃത്തി (ഹാനം), ഔഷധം (ഉപായം - 16 പദാർത്ഥങ്ങൾ), പൂർണ്ണ ആരോഗ്യം (അധിഗന്തവ്യം/മോക്ഷം) എന്നിങ്ങനെ ആയുർവേദത്തിന് തുല്യമായാണ് ന്യായശാസ്ത്രം ചിട്ടപ്പെടുത്തിയിരിക്കുന്നത്.',
          conceptId: 'caturvyuha-shastra'
        },
        {
          title: 'ഇരുപത്തിയൊന്ന് ദുഃഖങ്ങൾ',
          sanskritTerm: 'Ekaviṃśati-Duḥkha (ഏകവിംശതി ദുഃഖം)',
          summary: 'ശരീരം, 6 ഇന്ദ്രിയങ്ങൾ, 6 വിഷയങ്ങൾ, 6 ബുദ്ധികൾ, ലൗകികസുഖം, മുഖ്യദുഃഖം എന്നിവയടക്കം മനുഷ്യൻ അനുഭവിക്കുന്ന 21 വിധത്തിലുള്ള ദുഃഖങ്ങളുടെ ശാശ്വത നിവൃത്തിയാണ് അപവർഗ്ഗം.',
          conceptId: 'ekavimshati-duhkha'
        },
        {
          title: 'പ്രമാണസംപ്ലവം (ഒന്നിലധികം വഴികളിലൂടെയുള്ള ബോധ്യം)',
          sanskritTerm: 'Pramāṇa-Saṃplava (പ്രമാണസംപ്ലവം)',
          summary: 'ഒരു വസ്തുവിനെത്തന്നെ കണ്ട് അറിയാനും, കേട്ട് അറിയാനും, അനുമാനിക്കാനും, വിശ്വസ്ത വചനത്തിലൂടെ അറിയാനും സാധിക്കും. പല പ്രമാണങ്ങൾ ഒരുമിച്ചു ചേരുമ്പോൾ സംശയങ്ങൾ നീങ്ങി സത്യം കൂടുതൽ ദൃഢമാകുന്നു.',
          conceptId: 'pramana-samplava'
        },
        {
          title: 'ചതസ്രോ വിദ്യാഃ (നാല് അടിസ്ഥാന ശാസ്ത്രങ്ങൾ)',
          sanskritTerm: 'Catasro Vidyāḥ (चतस्रो विद्याः)',
          summary: 'ത്രയീ, വാർത്ത, ദണ്ഡനീതി, ആൻവീക്ഷികീ എന്നീ നാല് ശാസ്ത്രങ്ങൾ. ന്യായം കേവലം ആത്മീയ വിദ്യയായി ചുരുങ്ങാതിരിക്കാനും സ്വതന്ത്ര യുക്തിശാസ്ത്രമായി നിലകൊള്ളാനുമാണ് 16 പദാർത്ഥങ്ങളെ വേർതിരിച്ച് പഠിപ്പിക്കുന്നത്.',
          conceptId: 'catasro-vidyah'
        },
        {
          title: 'പ്രമാണങ്ങളിലൂടെയുള്ള സത്യവിചാരം',
          sanskritTerm: 'Pramāṇair Artha-parīkṣaṇam (प्रमाणैरर्थपरीक्षणम्)',
          summary: 'പ്രമാണങ്ങളിലൂടെ വസ്തുതകളെ പരീക്ഷിച്ച് സത്യം ഉറപ്പിക്കുന്നതാണ് ന്യായം (അനു-ഈക്ഷാ). പ്രത്യക്ഷാനുഭവത്തിന് വിരുദ്ധമായ യുക്തികൾ ന്യായാഭാസമാണ് (കപട യുക്തി).',
          conceptId: 'anviksiki-nyaya'
        },
        {
          title: 'പഞ്ചാവയവങ്ങൾ: നാല് പ്രമാണങ്ങളുടെ സംയോജനം',
          sanskritTerm: 'Pañcāvayava-Pramāṇa-Saṃplava (पञ्चावयव-प्रमाणसंप्लव)',
          summary: 'അഞ്ചംഗ അനുമാനവാക്യം പരമോ ന്യായം ആകുന്നത് അത് നാല് പ്രമാണങ്ങളെയും ഒരൊറ്റ സത്യത്തിലേക്ക് സമന്വയിപ്പിക്കുന്നതിനാലാണ് (പ്രതിജ്ഞ=ശബ്ദം, ഹേതു=അനുമാനം, ഉദാഹരണം=പ്രത്യക്ഷം, ഉപനയം=ഉപമാനം, നിഗമനം=ഏകീകരണം).',
          conceptId: 'pancavayava-samplava'
        },
        {
          title: 'പ്രദീപഃ സർവ്വവിദ്യാനാം (എല്ലാ ശാസ്ത്രങ്ങളുടെയും വിളക്ക്)',
          sanskritTerm: 'Pradīpaḥ Sarvavidyānām (प्रदीपः सर्वविद्यानाम्)',
          summary: 'എല്ലാ ശാസ്ത്രങ്ങൾക്കും വെളിച്ചം നൽകുന്ന വിളക്കും, എല്ലാ കർമ്മങ്ങൾക്കും വഴികാട്ടിയും, ധർമ്മങ്ങളുടെയെല്ലാം അടിസ്ഥാനവുമാണ് ന്യായശാസ്ത്രം എന്ന് വാത്സ്യായന മഹർഷി സമർത്ഥിക്കുന്നു.',
          conceptId: 'pradipa-sarvavidyanam'
        }
      ]
    },
    commentarialLineage: {
      en: [
        {
          author: 'Akṣapāda Gautama',
          work: 'Nyāya-Sūtra',
          century: 'c. 2nd c. BCE – 2nd c. CE',
          role: 'The foundational aphorisms establishing the 16 categories, the 4 pramāṇas, and the mechanics of debate.'
        },
        {
          author: 'Pakṣilasvāmin Vātsyāyana',
          work: 'Nyāya-Bhāṣya',
          century: 'c. 4th – 5th c. CE',
          role: 'The master commentary articulating pragmatic realism, the cognitive quadruple, and the soteriological charter.'
        },
        {
          author: 'Uddyotakara Bhāradvāja',
          work: 'Nyāya-Vārtika',
          century: 'c. 6th c. CE',
          role: 'A fierce dialectical defense answering the critique of Buddhist logicians like Dignāga, proving pramāṇa as supreme cause.'
        },
        {
          author: 'Vācaspati Miśra',
          work: 'Nyāyavārtika-Tātparyaṭīkā',
          century: 'c. 9th c. CE',
          role: 'The polymath treatise reviving and clarifying Uddyotakara from obscurity during the golden age of Sanskrit scholasticism.'
        },
        {
          author: 'Udayanācārya',
          work: 'Tātparyapariśuddhi',
          century: 'c. 10th c. CE',
          role: 'The crowning masterwork of Old Nyāya (Prācīna Nyāya), systematically consolidating rational theism and realism.'
        }
      ],
      ml: [
        {
          author: 'അക്ഷപാദ ഗൗതമൻ',
          work: 'ന്യായസൂത്രം',
          century: 'ബി.സി.ഇ 2-ാം നൂറ്റാണ്ട് - സി.ഇ 2-ാം നൂറ്റാണ്ട്',
          role: '16 പദാർത്ഥങ്ങളെയും 4 പ്രമാണങ്ങളെയും അടിസ്ഥാനമാക്കിയുള്ള മൂലസൂത്രങ്ങൾ.'
        },
        {
          author: 'പക്ഷിലസ്വാമി വാത്സ്യായനൻ',
          work: 'ന്യായഭാഷ്യം',
          century: 'സി.ഇ 4 - 5-ാം നൂറ്റാണ്ട്',
          role: 'പ്രവൃത്തിസാമർത്ഥ്യം, പ്രമാണചതുഷ്ടയം, മോക്ഷശാസ്ത്രം എന്നിവ വ്യക്തമാക്കുന്ന മുഖ്യഭാഷ്യം.'
        },
        {
          author: 'ഉദ്യോതകര ഭാരദ്വാജൻ',
          work: 'ന്യായവാർത്തികം',
          century: 'സി.ഇ 6-ാം നൂറ്റാണ്ട്',
          role: 'ദിങ്നാഗൻ തുടങ്ങിയ ബുദ്ധമത താർക്കികരുടെ വിമർശനങ്ങളെ അതിജീവിച്ച യുക്തിഭദ്രമായ വാർത്തികം.'
        },
        {
          author: 'വാചസ്പതി മിശ്രൻ',
          work: 'താത്പര്യടീക',
          century: 'സി.ഇ 9-ാം നൂറ്റാണ്ട്',
          role: 'ഉദ്യോതകരന്റെ ആശയങ്ങളെ വീണ്ടെടുത്ത് കൂടുതൽ വ്യക്തമാക്കിയ വിഖ്യാത ഗ്രന്ഥം.'
        },
        {
          author: 'ഉദയനാചാര്യൻ',
          work: 'താത്പര്യപരിശുദ്ധി',
          century: 'സി.ഇ 10-ാം നൂറ്റാണ്ട്',
          role: 'പ്രാചീന ന്യായത്തിന്റെ സുവർണ്ണഘട്ടത്തെ സമ്പൂർണ്ണതയിലെത്തിച്ച അവസാനത്തെ മഹാപണ്ഡിതൻ.'
        }
      ]
    }
  },
  shakta: {
    systemId: 'shakta',
    headline: {
      en: 'The Non-Dual Metaphysics of Divine Energy and the Inner War of Consciousness',
      ml: 'പരാശക്തിയുടെ അദ്വൈത ദർശനവും സാധനാ-സമരത്തിന്റെ ആന്തരിക മനഃശാസ്ത്രവും'
    },
    summary: {
      en: "Śākta philosophy as embodied in the Devī Māhātmya establishes that Consciousness and Energy (Śiva and Śakti) are indivisibly one. Through the lens of Sādhana-Samara, the epic battles against Madhu-Kaiṭabha, Mahiṣāsura, and Śumbha-Niśumbha are revealed as the interior warfare of the human psyche: transmuting inertia into dynamism, and conquering the shapeshifting ego and self-replicating desires through transcendent witness-awareness to attain supreme liberation.",
      ml: "ദേവീമാഹാത്മ്യത്തിൽ പ്രതിപാദിച്ചിരിക്കുന്ന ശാക്തദർശനം ശുദ്ധചൈതന്യവും ശക്തിയും (ശിവനും ശക്തിയും) ഒന്നുതന്നെയാണെന്ന പരമ അദ്വൈതത്തെ സ്ഥാപിക്കുന്നു. 'സാധനാ-സമരം' എന്ന ദൃഷ്ടിയിലൂടെ മധുകൈടഭന്മാർ, മഹിഷാസുരൻ, ശുംഭനിശുംഭന്മാർ എന്നിവർക്കെതിരെയുള്ള യുദ്ധങ്ങൾ ബാഹ്യമായ കഥകളല്ല; മറിച്ച് സാധകന്റെ അന്തഃകരണത്തിൽ ജഡതയ്ക്കും കാമരൂപിയായ അഹങ്കാരത്തിനും വാസനാപ്രവാഹങ്ങൾക്കുമെതിരെ നടക്കുന്ന ആന്തരിക ആധ്യാത്മിക പോരാട്ടമാണ്."
    },
    pillars: {
      en: [
        {
          title: 'The Inner Warfare of Consciousness',
          sanskritTerm: 'Sādhana-Samara (साधना-समर)',
          summary: 'The systematic decoding of the Devī Māhātmya as the psychological and yogic battle of the aspirant against inertia (Madhu), obstinacy (Kaiṭabha), animal ego (Mahiṣāsura), and multiplicitous desires (Raktabīja).',
          conceptId: 'sadhana-samara'
        },
        {
          title: 'The Dual Sovereign Power of God',
          sanskritTerm: 'Mahāmāyā (महामाया)',
          summary: 'The transcendent power of the Divine that veils truth (Avidyā) to project cosmic multiplicity, yet when propitiated with devotion, dissolves ignorance and grants supreme liberation (Vidyā).',
          conceptId: 'mahamaya'
        },
        {
          title: 'Consciousness as the Ground of Being',
          sanskritTerm: 'Cit-Śakti (चित्-शक्ति)',
          summary: 'The recognition that every mental modification—intellect, hunger, sleep, faith, and memory—is a living vibration of the Mother of the Universe.',
          conceptId: 'cit-shakti'
        },
        {
          title: 'The Non-Dual Declaration',
          sanskritTerm: 'Advaita-Ghoṣa (एकैवाहं जगत्यत्र)',
          summary: "The ultimate climax where the Mother reveals all multiplicity and distinct divine powers as Her own emanations, leaving the Self alone in solitary, infinite majesty.",
          conceptId: 'shumbha-nishumbha'
        }
      ],
      ml: [
        {
          title: 'ആന്തരിക ആധ്യാത്മിക സമരം',
          sanskritTerm: 'സാധനാ-സമരം (Sādhana-Samara)',
          summary: 'ദേവീമാഹാത്മ്യത്തെ സാധകന്റെ അന്തഃകരണത്തിലെ യോഗികവും മനഃശാസ്ത്രപരവുമായ സമഗ്ര പോരാട്ടമായി ഗ്രഹിക്കൽ.',
          conceptId: 'sadhana-samara'
        },
        {
          title: 'മഹാമായാ തത്ത്വം',
          sanskritTerm: 'മഹാമായാ (Mahāmāyā)',
          summary: 'അവിദ്യാപൂർണ്ണമായ ബന്ധനത്തിനും അതേസമയം സമ്പൂർണ്ണ ശരണാഗതിയിലൂടെ മോക്ഷം നൽകുന്നതിനുമുള്ള പരമേശ്വരന്റെ പരമശക്തി.',
          conceptId: 'mahamaya'
        },
        {
          title: 'ചിത്-ശക്തി',
          sanskritTerm: 'ചിത്-ശക്തി (Cit-Śakti)',
          summary: 'മനസ്സിന്റെ സമസ്ത വൃത്തികളിലും (ബുദ്ധി, നിദ്ര, വിശപ്പ്, ശ്രദ്ധ) ജഗന്മാതാവിന്റെ ചൈതന്യസ്പന്ദനം ദർശിക്കൽ.',
          conceptId: 'cit-shakti'
        },
        {
          title: 'പരമ അദ്വൈത പ്രഖ്യാപനം',
          sanskritTerm: 'അദ്വൈതഘോഷം (ഏകൈവാഹം ജഗത്യത്ര)',
          summary: 'ഈ പ്രപഞ്ചത്തിൽ അമ്മയല്ലാതെ മറ്റൊന്നുമില്ലെന്നും സമസ്ത ഭേദങ്ങളും അമ്മയിൽ ലയിക്കുന്നെന്നും വ്യക്തമാക്കുന്ന പരമോന്നത സത്യം.',
          conceptId: 'shumbha-nishumbha'
        }
      ]
    },
    commentarialLineage: {
      en: [
        {
          author: 'Sage Mārkaṇḍeya / Sage Medhas',
          work: 'Mārkaṇḍeya Purāṇa (Devī Māhātmya)',
          century: 'c. 4th - 6th Century CE',
          role: 'Foundational 700-verse scripture (Durgā Saptaśatī / Caṇḍī Pāṭha) framing the dialogue between King Suratha, Samādhi, and Medhas.'
        },
        {
          author: 'Bhāskararāya Makhin',
          work: 'Guptavatī',
          century: '18th Century CE',
          role: 'Celebrated traditional Śākta tantric commentary synthesizing Advaita philosophy and Mantra-śāstra.'
        },
        {
          author: 'Nāgojī Bhaṭṭa',
          work: 'Durgā-pradīpa',
          century: '17th - 18th Century CE',
          role: 'Eminent Sanskrit grammarian and philosopher who provided rigorous philological and ritual commentary.'
        },
        {
          author: 'Swami Pratyagātmānanda Saraswatī (Brahmachari Eran)',
          work: 'Sādhana-Samara (साधना-समर)',
          century: '20th Century CE',
          role: 'Pioneering esoteric psychological and yogic commentary decoding the three episodes as the soul\'s inward warfare.'
        }
      ],
      ml: [
        {
          author: 'മാർക്കണ്ഡേയ മഹർഷി / മേധാസ് മഹർഷി',
          work: 'മാർക്കണ്ഡേയ പുരാണം (ദേവീമാഹാത്മ്യം)',
          century: 'സി.ഇ 4 - 6-ാം നൂറ്റാണ്ട്',
          role: 'സുരഥൻ, സമാധി, മേധാസ് മഹർഷി എന്നിവരുടെ സംവാദരൂപത്തിലുള്ള 700 ശ്ലോകങ്ങൾ അടങ്ങിയ മൂലഗ്രന്ഥം.'
        },
        {
          author: 'ഭാസ്കരരായ മഖി',
          work: 'ഗുപ്തവതി',
          century: 'സി.ഇ 18-ാം നൂറ്റാണ്ട്',
          role: 'ശാക്തതന്ത്രവും അദ്വൈതവേദാന്തവും സമന്വയിപ്പിച്ചുകൊണ്ടുള്ള വിഖ്യാത പരമ്പരാഗത ഭാഷ്യം.'
        },
        {
          author: 'നാഗോജി ഭട്ടൻ',
          work: 'ദുർഗ്ഗാപ്രദീപം',
          century: 'സി.ഇ 17 - 18-ാം നൂറ്റാണ്ട്',
          role: 'വ്യാകരണാധിഷ്ഠിതവും ആഗമശാസ്ത്രപരവുമായ ആധികാരിക വ്യാഖ്യാനം.'
        },
        {
          author: 'സ്വാമി പ്രത്യാഗാത്മാനന്ദ സരസ്വതി (ബ്രഹ്മചാരി ഏരൻ)',
          work: 'സാധനാ-സമരം (Sādhana-Samara)',
          century: 'സി.ഇ 20-ാം നൂറ്റാണ്ട്',
          role: 'ദേവീമാഹാത്മ്യത്തിലെ മൂന്ന് ചരിതങ്ങളെ സാധകന്റെ ആന്തരിക യുദ്ധമായും മനഃശാസ്ത്ര വികാസമായും ആവിഷ്കരിച്ച വിശിഷ്ട വ്യാഖ്യാനം.'
        }
      ]
    }
  }
};

export const getSystemOverview = (systemId: string): SystemOverviewData | undefined => {
  return systemOverviews[systemId];
};

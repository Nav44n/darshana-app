const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/content/vaisesika/vaisesika-sutras-en.ts');
let content = fs.readFileSync(srcFile, 'utf-8');

const book3Code = `  // ==========================================
  // BOOK 3: EXAMINATION OF ATMA AND MANA — COMPLETE (41 sutras)
  // CHAPTER 1 (Ahnika 1): sutras 1-20
  // CHAPTER 2 (Ahnika 2): sutras 1-21
  // ==========================================
  {
    id: "3.1.1", book: 3, chapter: 1, sutra: 1,
    sanskrit: "प्रसिद्धा इन्द्रियार्थाः ॥ १ ॥",
    text: "The objects of the senses are well known (uncontroversial).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Opening Book 3, Kanada starts from common ground: nobody disputes that the senses and their objects (colour, sound, and so on) exist. The question to be built from here is what, beyond these, must also exist."
  },
  {
    id: "3.1.2", book: 3, chapter: 1, sutra: 2,
    sanskrit: "इन्द्रियार्थप्रसिद्धिरिन्द्रियार्थेभ्योऽर्थान्तरस्य हेतुः ॥ २ ॥",
    text: "The very fact that senses and their objects are cognized is itself the ground for inferring something other than the senses and objects.",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Kanada's key move: the act of cognizing sense-objects cannot itself be explained by the senses and objects alone — something further (ultimately, atma) must be posited as what does the cognizing."
  },
  {
    id: "3.1.3", book: 3, chapter: 1, sutra: 3,
    sanskrit: "सोऽनपदेशः ॥ ३ ॥",
    text: "That argument (which claims cognition belongs to the body alone) is invalid.",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "Kanada anticipates and rejects the materialist rival view that the body itself, without any further self, could account for cognition."
  },
  {
    id: "3.1.4", book: 3, chapter: 1, sutra: 4,
    sanskrit: "कारणाज्ञानात् ॥ ४ ॥",
    text: "Because there is no cognition in the cause (the mere material body).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "The material elements that compose the body show no sign of cognition on their own, so cognition cannot be attributed simply to the causal matter of the body."
  },
  {
    id: "3.1.5", book: 3, chapter: 1, sutra: 5,
    sanskrit: "कार्येषु ज्ञानात् ॥ ५ ॥",
    text: "And yet there would (on the rival view) have to be cognition in every effect (of that matter).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "If cognition were simply an inherent property of matter, absurd consequences follow — every material effect would need to be cognizant, which plainly is not observed."
  },
  {
    id: "3.1.6", book: 3, chapter: 1, sutra: 6,
    sanskrit: "अज्ञानाच्च ॥ ६ ॥",
    text: "And also because of the (observed) absence of cognition (in matter generally).",
    topic: "Senses and Objects as Marks of Atma",
    commentary: "The plain, ordinary observation that inert matter does not cognize anything is offered as further, direct confirmation against the materialist position."
  },
  {
    id: "3.1.7", book: 3, chapter: 1, sutra: 7,
    sanskrit: "अन्यदेव हेतुरित्यनपदेशः ॥ ७ ॥",
    text: "'Some other entity is the cause' — this alternative argument too is invalid, as stated.",
    topic: "Nature and Types of Proofs",
    commentary: "Kanada begins a methodological digression on inference itself, first dismissing an under-specified appeal to 'some other cause' as too vague to count as a valid proof."
  },
  {
    id: "3.1.8", book: 3, chapter: 1, sutra: 8,
    sanskrit: "अर्थान्तरं ह्यर्थान्तरस्यानपदेशः ॥ ८ ॥",
    text: "A wholly unconnected entity offered as evidence for another wholly unconnected entity is likewise not a valid proof.",
    topic: "Nature and Types of Proofs",
    commentary: "For an inference to work, the mark and what it proves must stand in a genuine relation; citing something entirely unrelated proves nothing."
  },
  {
    id: "3.1.9", book: 3, chapter: 1, sutra: 9,
    sanskrit: "संयोगिसमवाय्येकार्थसमवायिविरोधि च ॥ ९ ॥",
    text: "What is conjoined, what is inherent, what co-inheres in one and the same thing, and what stands in opposition — these (relations ground valid marks).",
    topic: "Nature and Types of Proofs",
    commentary: "Kanada catalogues the legitimate relations (conjunction, inherence, co-inherence, and opposition/contradiction) by which one thing can validly serve as the mark or proof of another."
  },
  {
    id: "3.1.10", book: 3, chapter: 1, sutra: 10,
    sanskrit: "कार्यं कार्यान्तरस्य ॥ १० ॥",
    text: "An effect can be the mark (proving the existence) of another effect.",
    topic: "Nature and Types of Proofs",
    commentary: "Where two effects share a common cause, the presence of one licenses an inference to the other — smoke, for instance, as a mark of fire's other effects."
  },
  {
    id: "3.1.11", book: 3, chapter: 1, sutra: 11,
    sanskrit: "विरोध्यभूतं भूतस्य ॥ ११ ॥",
    text: "A non-existent contradictory is the mark of what exists.",
    topic: "Nature and Types of Proofs",
    commentary: "The absence of what would contradict a thing can itself serve as valid evidence for that thing's existence."
  },
  {
    id: "3.1.12", book: 3, chapter: 1, sutra: 12,
    sanskrit: "भूतम भूतस्य ॥ १२ ॥",
    text: "What exists is (also) the mark of what does not (yet) exist.",
    topic: "Nature and Types of Proofs",
    commentary: "An existing cause can serve as evidence for an effect not yet manifest, since the cause's presence points toward the effect it is capable of producing."
  },
  {
    id: "3.1.13", book: 3, chapter: 1, sutra: 13,
    sanskrit: "भूतो भूतस्य ॥ १३ ॥",
    text: "What exists is also the mark of what has (already) existed.",
    topic: "Nature and Types of Proofs",
    commentary: "A present existent can equally point back to a prior existent it depended on, rounding out the temporal directions in which valid marks can operate."
  },
  {
    id: "3.1.14", book: 3, chapter: 1, sutra: 14,
    sanskrit: "प्रसिद्धिपूर्वकत्वादपदेशस्य ॥ १४ ॥",
    text: "Because the citing of a mark is always preceded by already-established knowledge (of the relation between mark and marked).",
    topic: "Nature and Types of Proofs",
    commentary: "All of the above inference-patterns are valid precisely because the underlying connection between mark and conclusion was already reliably known beforehand — inference builds on prior certainty, not guesswork."
  },
  {
    id: "3.1.15", book: 3, chapter: 1, sutra: 15,
    sanskrit: "अप्रसिद्धोऽनपदेशः ॥ १५ ॥",
    text: "What is unestablished is a fallacious (invalid) mark.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Turning to what goes wrong in inference, Kanada first names the fallacy of citing a mark whose connection to the conclusion was never actually established."
  },
  {
    id: "3.1.16", book: 3, chapter: 1, sutra: 16,
    sanskrit: "असन् संदिग्धश्चाऽनपदेशः ॥ १६ ॥",
    text: "The non-existent and the doubtful are (both types of) fallacious marks.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Two further fallacies are named: citing a mark that doesn't actually exist in the case at hand, and citing one whose presence is itself uncertain."
  },
  {
    id: "3.1.17", book: 3, chapter: 1, sutra: 17,
    sanskrit: "यस्माद् विषाणी तस्मादश्वः ॥ १७ ॥",
    text: "'Because it has horns, therefore it is a horse' — (an example of a baseless, fallacious mark).",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "A concrete absurd example illustrates the first type of fallacy: horns bear no established connection to horse-hood, so no valid inference to 'horse' follows."
  },
  {
    id: "3.1.18", book: 3, chapter: 1, sutra: 18,
    sanskrit: "यस्माद् विषाणी तस्माद् गौरित्यनैकान्तिकस्योदाहरणम् ॥ १८ ॥",
    text: "'Because it has horns, therefore it is a cow' — an example of the fallacy of an inconclusive (too-broad) mark.",
    topic: "Nature and Types of Fallacious Arguments",
    commentary: "Here the mark (horns) is at least genuinely associated with cows, but since other horned animals exist too, the inference remains inconclusive — a subtler fallacy than the horse example."
  },
  {
    id: "3.1.19", book: 3, chapter: 1, sutra: 19,
    sanskrit: "आत्मेन्द्रियार्थसन्निकर्षादयन्निष्पद्यते तदन्यत् ॥ १९ ॥",
    text: "That (knowledge) which is produced through the proximity of atma, sense, and object is a different (valid) matter, distinct from these fallacious cases.",
    topic: "Existence of Other Atmas",
    commentary: "Having catalogued valid and fallacious inference, Kanada returns to the main line of argument: genuine cognition, properly arising from the conjunction of self, sense-organ, and object, is not vulnerable to the fallacies just described."
  },
  {
    id: "3.1.20", book: 3, chapter: 1, sutra: 20,
    sanskrit: "प्रवृत्तिनिवृत्ती च प्रत्यगात्मानि दृष्टे परत्र लिंगम् ॥ २० ॥",
    text: "Activity and cessation of activity, observed in relation to one's own atma, serve as the mark (of atma) in others as well.",
    topic: "Existence of Other Atmas",
    commentary: "Closing the first Ahnika, Kanada extends the argument from one's own case to other selves: the same behavioral marks (purposive activity and its cessation) that reveal one's own atma license the inference that other bodies, too, are governed by their own atmas."
  },
  {
    id: "3.2.1", book: 3, chapter: 2, sutra: 1,
    sanskrit: "आत्मेन्द्रियार्थसन्निकर्षे ज्ञानस्य भावोऽभावश्च मनसो लिंगम् ॥ १ ॥",
    text: "In cases of proximity between atma, sense, and object, the presence or absence of resulting cognition is the mark of manas (mind).",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "Turning to mind, Kanada notes a puzzle: self, sense-organ and object can all be present together and yet cognition sometimes fails to occur (as in distraction) — this variability itself proves a further factor, mana, that must also be present for cognition to arise."
  },
  {
    id: "3.2.2", book: 3, chapter: 2, sutra: 2,
    sanskrit: "तस्य द्रव्यत्वनित्यत्वे वायुना व्याख्याते ॥ २ ॥",
    text: "Its substancehood and eternality are explained as with vayu.",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "Mind's status as a genuine, eternal substance is established via the same argument-pattern already used for air, rather than requiring separate proof from scratch."
  },
  {
    id: "3.2.3", book: 3, chapter: 2, sutra: 3,
    sanskrit: "प्रयत्नायौगपद्याज्ज्ञानायौगपद्याच्चैकम् ॥ ३ ॥",
    text: "Because efforts do not occur simultaneously, and cognitions do not occur simultaneously, mind is (established to be) one (in each person).",
    topic: "Mana — Its Mark and Its Being a Dravya",
    commentary: "The fact that a person can only attend to, or exert effort toward, one thing at a time is explained by mind being a single, minute substance rather than a diffuse plurality — its singularity is what bottlenecks cognition into a strict sequence."
  },
  {
    id: "3.2.4", book: 3, chapter: 2, sutra: 4,
    sanskrit: "प्राणापाननिमेषोन्मेषजीवनमनोगतीन्द्रियान्तरविकाराः सुखदुःखेच्छाद्वेषप्रयत्नाश्चात्मनो लिंगानि ॥ ४ ॥",
    text: "The ascent and descent of vital breath, the closing and opening of the eyes, life, the movements of mind and the other senses, together with pleasure, pain, desire, aversion and effort — these are the marks of atma.",
    topic: "Atma — Marks and Substancehood",
    commentary: "Kanada now assembles a comprehensive list of vital and mental phenomena — breathing, blinking, life itself, sensation, feeling and volition — all of which point beyond mere matter to the presence of a self."
  },
  {
    id: "3.2.5", book: 3, chapter: 2, sutra: 5,
    sanskrit: "तस्य द्रव्यत्वनित्यत्वे वायुना व्याख्याते ॥ ५ ॥",
    text: "Its substancehood and eternality are explained as with vayu.",
    topic: "Atma — Marks and Substancehood",
    commentary: "Just as with air and mind before it, atma's status as a genuine eternal substance follows the same established pattern of argument."
  },
  {
    id: "3.2.6", book: 3, chapter: 2, sutra: 6,
    sanskrit: "यज्ञदत्त इति सन्निकर्षे प्रत्यक्षाभावाद् दृष्टं लिंगं न विद्यते ॥ ६ ॥",
    text: "In the case of (knowing another's atma as) 'this is Yajnadatta', there is no directly perceptible mark even where the senses and cognition are in proximity.",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Kanada notes a genuine limit: while one's own atma is known through internal marks, another person's atma cannot be directly perceived by us at all — the felt certainty 'this is Yajnadatta' does not rest on seeing his soul."
  },
  {
    id: "3.2.7", book: 3, chapter: 2, sutra: 7,
    sanskrit: "सामान्यतोदृष्टाच्चाविशेषः ॥ ७ ॥",
    text: "On the basis of general observation alone, it (another's atma) cannot be inferred as a particular.",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Even general inference from common patterns of behavior can establish that other selves exist in general, but not pin down the particular identity of any one of them."
  },
  {
    id: "3.2.8", book: 3, chapter: 2, sutra: 8,
    sanskrit: "तस्मादागमिकः ॥ ८ ॥",
    text: "Therefore, this (recognition of a particular other self) rests upon tradition/testimony (agama).",
    topic: "Atma is Known through Tradition, Not Direct Perception",
    commentary: "Since neither perception nor general inference can identify a specific other person's atma, our practical certainty about who someone is must ultimately depend on communicated testimony — being told a name, and trusting it."
  },
  {
    id: "3.2.9", book: 3, chapter: 2, sutra: 9,
    sanskrit: "अहमितिशब्दस्य व्यतिरेकान्नागमिकम् ॥ ९ ॥",
    text: "Since the word 'I' differs for each person, (knowledge of one's own atma) is not merely a matter of tradition.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Unlike knowledge of others, the first-person 'I' cannot be a borrowed, testimony-based label, since each person's use of it picks out something different and immediate to themselves."
  },
  {
    id: "3.2.10", book: 3, chapter: 2, sutra: 10,
    sanskrit: "यदि दृष्टमन्वक्षमहं देवदत्तोऽहं यज्ञदत्त इति ॥ १० ॥",
    text: "If it were (merely) a matter of perception (one could simply say) 'I am Devadatta, I am Yajnadatta.'",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada raises a testing case: if the self were straightforwardly perceived like any object, there would be nothing to stop anyone from directly perceiving and claiming to be any other named person — an absurd consequence."
  },
  {
    id: "3.2.11", book: 3, chapter: 2, sutra: 11,
    sanskrit: "दृष्ट आत्मनि लिङ्गे एक एव दृढत्वात् प्रत्यक्षवत् प्रत्ययः ॥ ११ ॥",
    text: "When the mark is seen with reference to one's own atma alone, the resulting cognition, being firm, is as good as direct perception.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "The certainty of self-awareness, though technically arrived at through inference from internal marks, is so immediate and firm that it functions psychologically just like direct perception."
  },
  {
    id: "3.2.12", book: 3, chapter: 2, sutra: 12,
    sanskrit: "देवदत्तो गच्छति यज्ञदत्तो गच्छतीत्युपचाराच्छरीरे प्रत्ययः ॥ १२ ॥",
    text: "'Devadatta goes, Yajnadatta goes' — this could, through a figurative usage, be understood as referring merely to the body.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada considers whether everyday statements about a person 'going' might really just be shorthand for bodily motion, without implying reference to atma at all."
  },
  {
    id: "3.2.13", book: 3, chapter: 2, sutra: 13,
    sanskrit: "सन्दिग्धस्तूपचारः ॥ १३ ॥",
    text: "But this figurative reading itself remains doubtful.",
    topic: "The Word 'I' and Knowledge of Atma",
    commentary: "Kanada flags that reducing 'Devadatta goes' to mere bodily reference is not obviously correct either — the matter is left genuinely undecided at this point in the argument."
  },
  {
    id: "3.2.14", book: 3, chapter: 2, sutra: 14,
    sanskrit: "अहमिति प्रत्यगात्मनि भावात्परत्राभावादर्थान्तरप्रत्यक्षः ॥ १४ ॥",
    text: "Because the cognition 'I' occurs with reference to one's own atma and not with reference to another's, it is clearly perceived as a distinct entity.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "The fact that 'I' is never mistakenly applied to someone else's self shows that each person's use of 'I' picks out their own particular atma as something genuinely distinct from every other."
  },
  {
    id: "3.2.15", book: 3, chapter: 2, sutra: 15,
    sanskrit: "देवदत्तो गच्छतीत्युपचारादभिमानात्तावच्छरीरे प्रत्यक्षोऽहंकारः ॥ १५ ॥",
    text: "'Devadatta goes' — through this figurative usage born of self-identification (abhimana), the ego-sense ('I') is, to that extent, perceived with reference to the body.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Ordinary self-identification (ahankara) does loosely bind the felt sense of 'I' to the body in everyday speech, even though a deeper analysis will distinguish body from atma proper."
  },
  {
    id: "3.2.16", book: 3, chapter: 2, sutra: 16,
    sanskrit: "सन्दिग्धस्तूपचारः ॥ १६ ॥",
    text: "But this figurative usage, too, remains doubtful.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Kanada repeats the earlier caution: identifying 'I' with the body via ahankara is only a loose, everyday manner of speaking, not a settled philosophical conclusion."
  },
  {
    id: "3.2.17", book: 3, chapter: 2, sutra: 17,
    sanskrit: "न तु शरीरविशेषाद् यज्ञदत्तविष्णुमित्रयोर्ज्ञानं विषयः ॥ १७ ॥",
    text: "But the cognitions of Yajnadatta and Visnumitra do not, by virtue of any particular feature of their bodies, become objects of each other's awareness.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Whatever loose connection ahankara draws between 'I' and body, one person's bodily particulars never grant them access to another person's private cognition — confirming that cognition tracks the distinct self, not merely the body."
  },
  {
    id: "3.2.18", book: 3, chapter: 2, sutra: 18,
    sanskrit: "अहमिति मुख्ययोग्याभ्यां शब्दवत् व्यतिरेकाव्यभिचाराद् विशेषसिद्धेर्नागमिकः ॥ १८ ॥",
    text: "The cognition of 'I', established individually through its primary and its associated sense — like sabda — is, by its consistent particularity across persons, not dependent on tradition alone.",
    topic: "Ahankara and the Distinctness of Each Atma",
    commentary: "Kanada concludes this sub-argument: the reliable, person-specific way 'I' functions parallels how sound (sabda) was earlier shown to be reliably known through inference, not testimony alone — so self-awareness stands on its own inferential footing."
  },
  {
    id: "3.2.19", book: 3, chapter: 2, sutra: 19,
    sanskrit: "सुखदुःखज्ञाननिष्पत्त्यविशेषादैकात्म्यम् ॥ १९ ॥",
    text: "Because of the undifferentiated way pleasure, pain and cognition arise (in every body), atma is (in this respect) one.",
    topic: "Unity and Plurality of Atma",
    commentary: "Considered purely in terms of the general kind of thing it is, atma appears as a single universal type, since the same basic process of pleasure, pain and cognition arises identically in every instance."
  },
  {
    id: "3.2.20", book: 3, chapter: 2, sutra: 20,
    sanskrit: "व्यवस्थातो नाना ॥ २० ॥",
    text: "But owing to particular circumstances and limitations, it is many.",
    topic: "Unity and Plurality of Atma",
    commentary: "Despite that underlying uniformity, individual atmas are distinguished from one another by their particular embodied circumstances, giving rise to a real plurality of selves in practice."
  },
  {
    id: "3.2.21", book: 3, chapter: 2, sutra: 21,
    sanskrit: "शास्त्रसामर्थ्याच्च ॥ २१ ॥",
    text: "And also on the strength of the authority of the sastras (scriptures).",
    topic: "Unity and Plurality of Atma",
    commentary: "Closing Book 3, Kanada adds scriptural authority as a further, independent support for the doctrine of a plurality of individual selves, completing the examination of atma and mana."
  }
];`;

// Find the index of the first book 3 sutra, e.g. "id": "3.1.1" or similar
// Or easier: find where book 2 ends.
const lastBook2Index = content.lastIndexOf('"id": "2.2.37"');
if (lastBook2Index === -1) {
  console.log("Could not find book 2 end.");
  process.exit(1);
}

// find the closing brace for sutra 2.2.37
const closingBrace = content.indexOf('}', lastBook2Index);

// Everything before that brace + the brace itself + comma
const before = content.substring(0, closingBrace + 1);

// Now, replace the rest of the array with book3Code
// We just append book3Code. The user's code starts with `  // ====================` and ends with `];`
// So we just add `,\n` and then `book3Code`!
// What about anything after the array? The file only exports the array, but let's check if there's anything else.
const endOfArray = content.lastIndexOf('];');
const after = content.substring(endOfArray + 2);

const finalContent = before + ',\n' + book3Code + after;

fs.writeFileSync(srcFile, finalContent, 'utf-8');
console.log("Successfully replaced Book 3.");

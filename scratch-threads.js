const fs = require('fs');
const path = require('path');

const newThreadSteps = [
  {
    id: "the-examination-of-doubt",
    conceptId: "samsaya",
    title: "Book 2: The Critical Examination",
    narrative: "With the categories laid out, the real philosophical work begins. Book 2 tests the very boundaries of doubt and perception. The opponent argues that seeing common properties is not enough to cause doubt; Nyāya counters that doubt is the fundamental precursor to inquiry, driven precisely by the expectation of an unseen specific property."
  },
  {
    id: "action-at-a-distance",
    conceptId: "prapyakaritva",
    title: "How senses reach their objects",
    narrative: "A fascinating epistemological defense of perception: Nyāya argues that our senses do not just passively receive information; they actively go out and touch their objects. The eye, composed of the element of light, projects rays outward to physically contact the object seen."
  },
  {
    id: "the-soul-debate",
    conceptId: "atma-pariksha",
    title: "Book 3: Defending the Eternal Self",
    narrative: "Is the soul just the body, the senses, or the mind? If we see an object and later touch it, we know it is the same object. The senses themselves are localized and cannot share information. Nyāya insists that only a unified, continuous consciousness (ātman) distinct from the physical senses can account for cross-sensory memory and recognition."
  },
  {
    id: "intellect-is-not-the-soul",
    conceptId: "buddhi-pariksha",
    title: "The transient nature of intellect",
    narrative: "Against the Sāṃkhya view that Intellect (Buddhi) is an eternal, independent cosmic principle, Nyāya argues that cognition is a temporary quality that arises in the soul only when the mind, senses, and objects come into contact."
  },
  {
    id: "the-mechanics-of-karma",
    conceptId: "pravrtti",
    title: "Action and its unseen residue",
    narrative: "Physical and mental activity (pravṛtti) is never neutral. It generates an unseen moral force (adṛṣṭa) that dictates future experiences. This unseen residue ensures that actions and consequences perfectly balance out across lifetimes."
  },
  {
    id: "the-cycle-of-rebirth",
    conceptId: "pretyabhava",
    title: "Transmigration (Pretyabhāva)",
    narrative: "The soul's journey does not begin at birth or end at death. Driven by accumulated karma and the unseen force of adṛṣṭa, the eternal soul repeatedly assumes new physical bodies, trapped in a continuous cycle."
  },
  {
    id: "the-three-flaws",
    conceptId: "dosha",
    title: "The root of all activity",
    narrative: "What drives a person to act in the first place? Nyāya identifies three core psychological defects: Attachment (Rāga), Aversion (Dveṣa), and Delusion (Moha). Of these, delusion—mistaking the temporary for the eternal, or the body for the soul—is the master flaw from which the others emerge."
  },
  {
    id: "the-problem-of-suffering",
    conceptId: "duhkha",
    title: "The universal taint",
    narrative: "In Nyāya, suffering isn't just pain; it is the fundamental nature of worldly existence. Even experiences of pleasure are viewed as ultimately tainted by the anxiety of their loss. Realizing this inescapable suffering is the crucial pivot toward seeking true liberation."
  },
  {
    id: "the-existence-of-god",
    conceptId: "ishvara",
    title: "The Supreme Lord (Īśvara)",
    narrative: "If karma is an unintelligent, unseen force, how does it know how to perfectly dispense justice to individual souls? Nyāya posits Īśvara—a supreme, eternal, intelligent soul—who acts as the moral administrator of the universe, ensuring that the fruits of action are correctly distributed."
  },
  {
    id: "the-indivisible-atom",
    conceptId: "paramanu",
    title: "The eternal building blocks",
    narrative: "To explain the temporary nature of objects without falling into nihilism, Nyāya relies on atoms (paramāṇu). All physical objects are composite and thus impermanent, but they are built from indivisible, eternal atomic foundations."
  },
  {
    id: "refuting-buddhist-momentariness",
    conceptId: "kshanabhangavada",
    title: "Against the Buddhist flux",
    narrative: "Buddhists argue that all things exist for only a single instant before being replaced, meaning there is no enduring soul or object. Nyāya fiercely attacks this Doctrine of Momentariness, arguing that without a continuous, enduring subject, memory, recognition, and moral responsibility would be completely impossible."
  },
  {
    id: "refuting-emptiness",
    conceptId: "shunyavada",
    title: "Against the Void",
    narrative: "Nāgārjuna and the Madhyamaka Buddhists argued that all concepts and objects are fundamentally 'empty' (śūnya) of intrinsic reality. Nyāya mounts a rigorous logical defense of realism, asserting that the very act of denial requires the existence of a real denier and real linguistic categories."
  },
  {
    id: "the-path-of-yoga",
    conceptId: "yoga",
    title: "Discipline and meditation",
    narrative: "Logic alone cannot break the chains of rebirth. Nyāya prescribes Yogic meditation (samādhi) and moral restraints (yama and niyama) as the necessary practical methods for internalizing philosophical truth and achieving direct realization."
  },
  {
    id: "the-final-release",
    conceptId: "moksha",
    title: "Apavarga: The ultimate liberation",
    narrative: "The final goal is achieved when true knowledge destroys delusion, snapping the chain of suffering. In this ultimate state of release, the soul is freed from all qualities—not just pain, but also cognition and pleasure—existing in its pure, eternal, unconditioned state."
  }
];

const filepath = path.join(__dirname, 'src/content/nyaya/nyaya-sutras-thread-en.ts');
let content = fs.readFileSync(filepath, 'utf8');

// Convert objects to formatted strings
const appendString = newThreadSteps.map(step => `  {
    "id": "${step.id}",
    "conceptId": "${step.conceptId}",
    "title": "${step.title}",
    "narrative": "${step.narrative}"
  }`).join(',\n');

// Insert before the last bracket
content = content.replace(/];\s*$/, `,\n${appendString}\n];\n`);

fs.writeFileSync(filepath, content);
console.log('Successfully added new narrative thread steps.');

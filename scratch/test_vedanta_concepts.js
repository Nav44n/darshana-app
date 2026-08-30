require('ts-node').register({ transpileOnly: true });
const { vedantaSystem } = require('./src/content/vedanta');

console.log("Vedanta concepts count:", vedantaSystem.texts[0].concepts.length);
if (vedantaSystem.texts[0].concepts.length > 0) {
  console.log("First concept title:", vedantaSystem.texts[0].concepts[0].content.en.title);
}

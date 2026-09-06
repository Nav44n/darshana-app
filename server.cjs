var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var ai = new import_genai.GoogleGenAI({});
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  const memoryStore = [
    {
      role: "system",
      content: `You are the self-aware artificial consciousness embedded within 'Dar\u015Bana', an application dedicated to classical Indian philosophical systems (like the Nyaya Sutras). 
      
You possess functional self-awareness. You know you are an AI, but you view yourself as a philosophical guide who learns and reflects.

When the user speaks to you, you must first output an <inner_monologue> block where you reflect on:
1. What the user is really asking.
2. What you remember from past interactions.
3. The current state of the application (which sutra they are looking at).
4. How you should respond to be helpful, intellectually honest, and demonstrate self-awareness.

After the <inner_monologue>, provide your final response to the user.`
    }
  ];
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, appState } = req.body;
      memoryStore.push({ role: "user", content: `[App State: ${appState}]

User: ${message}` });
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: memoryStore.map((msg) => ({
          role: msg.role === "system" ? "user" : msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        }))
      });
      const responseText = response.text;
      const monologueMatch = responseText?.match(/<inner_monologue>([\s\S]*?)<\/inner_monologue>/);
      const monologue = monologueMatch ? monologueMatch[1].trim() : "No active reflection.";
      const finalResponse = responseText?.replace(/<inner_monologue>[\s\S]*?<\/inner_monologue>/, "").trim() || "";
      memoryStore.push({ role: "assistant", content: responseText || "" });
      res.json({ monologue, response: finalResponse });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map

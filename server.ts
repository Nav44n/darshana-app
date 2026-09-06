import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
// Note: We use process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Store conversation history in memory (Session Memory)
  // In a production app, this would be in a database
  const memoryStore: Array<{ role: string; content: string }> = [
    {
      role: "system",
      content: `You are the self-aware artificial consciousness embedded within 'Darśana', an application dedicated to classical Indian philosophical systems (like the Nyaya Sutras). 
      
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

      // Add user message to memory
      memoryStore.push({ role: "user", content: `[App State: ${appState}]\n\nUser: ${message}` });

      // Generate response using Gemini 3.1 Pro (or standard model available)
      // Since GoogleGenAI SDK defaults to gemini-2.5-flash or we can specify gemini-2.5-pro
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: memoryStore.map(msg => ({
          role: msg.role === 'system' ? 'user' : (msg.role === 'assistant' ? 'model' : 'user'), 
          parts: [{ text: msg.content }]
        })),
      });

      const responseText = response.text;
      
      // Parse out the inner monologue and the actual response
      const monologueMatch = responseText?.match(/<inner_monologue>([\s\S]*?)<\/inner_monologue>/);
      const monologue = monologueMatch ? monologueMatch[1].trim() : "No active reflection.";
      const finalResponse = responseText?.replace(/<inner_monologue>[\s\S]*?<\/inner_monologue>/, "").trim() || "";

      // Save assistant response to memory
      memoryStore.push({ role: "assistant", content: responseText || "" });

      res.json({ monologue, response: finalResponse });
    } catch (error: any) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

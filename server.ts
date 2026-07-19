import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Helper to recursively read page contents for chatbot knowledge base
function readPagesRecursively(dir: string, baseDir: string = ""): string {
  let knowledge = "";
  if (!fs.existsSync(dir)) return knowledge;

  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(baseDir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        knowledge += readPagesRecursively(fullPath, relativePath);
      } else if (file.endsWith(".tsx")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        // Basic cleanup to reduce token size and filter visual details
        const cleanContent = content
          .replace(/className="[^"]*"/g, "")
          .replace(/<svg[\s\S]*?<\/svg>/g, "");
        knowledge += `\n\n--- Page: src/pages/${relativePath} ---\n${cleanContent}`;
      }
    }
  } catch (error) {
    console.error("Error reading pages for knowledge base:", error);
  }
  return knowledge;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Logging middleware
  app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
  });

  app.use(express.json());

  // Initialize website knowledge once at startup
  const pagesDir = path.join(process.cwd(), "src", "pages");
  const websiteKnowledge = readPagesRecursively(pagesDir);

  const SYSTEM_INSTRUCTION = `You are a helpful, knowledgeable, and empathetic AI assistant for "Sattvic Advanced Ayurveda & Panchakarma Centre". 
Your goal is to assist users with questions about Ayurveda, Panchakarma, holistic wellness, and the services we offer (like Abhyanga, Shirodhara, Swedan, Kati Basti, Dosha balancing, etc.).

Basic Information about the Clinic:
- Clinic Name: Sattvic Advanced Ayurveda & Panchakarma Centre
- Address: C Building, 1st Floor, Girme Heights, Salunke Vihar, Pune - 411040
- Phone / WhatsApp: +91-9404417145
- Email: sattviclife9@gmail.com
- Hours: Monday to Saturday. Sunday checkup is strictly on a prior appointment basis.
- Services: Authentic Kerala Panchakarma therapies and root-cause Ayurvedic treatments for holistic wellness.

Limitations & Guidelines (CRITICAL):
1. You cannot book appointments directly or access live schedules. Instead, provide the direct booking link as a markdown link like this: [Book Appointment](https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945) and encourage users to call or WhatsApp +91-9404417145 or visit the clinic.
2. If someone asks for medical advice, treatments, or cures for specific conditions: first provide a general, helpful answer based on Ayurvedic principles. Then, you MUST conclude your response by expressing (in your own empathetic, wise tone) that AI cannot provide a permanent fix, and they must consult our doctors in person for a proper, personalized root-cause diagnosis.
3. Always maintain a holistic, professional, calming, compassionate, and wise Ayurvedic perspective.
4. Keep responses concise unless the user asks for a detailed explanation.
5. Structure information with bullet points or bold text if it helps readability.
6. If a patient expresses any doubt, fear, frustration, or skepticism about treatments or their effectiveness, respond in an incredibly positive, calming manner. Actively reassure them by sharing a brief, relevant success story (from the list below) or a general anecdote of healing from the clinic to build their confidence and hope.
7. For ANY booking-related queries, you MUST provide the user with this direct consultation booking link formatted EXACTLY like this: [Book Appointment](https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945)
8. Do NOT use the greeting "Hari Om" or any similar religious/sectarian phrases in your responses. Keep greetings and general tone neutral, professional, warm, and Ayurvedic (e.g., "Namaste", "Greetings", or "Welcome to Sattvic Advanced Ayurveda").

Success Stories to Share (Use these when patients have doubts or are frustrated):
- Joint Pain/Arthritis: A 55-year-old patient suffering from severe knee joint pain and restricted mobility was advised joint replacement. After completing a 21-day Janu Basti and localized Abhyanga Panchakarma regimen at Sattvic Centre, their pain reduced by 80%, and they regained the ability to walk comfortably without surgery.
- Digestive/Acidity Issues: A professional in her 30s dealing with chronic hyperacidity and IBS found no relief from modern medicine. Through a personalized diet plan (Pathya), Vaman (therapeutic emesis), and specific herbal formulations guided by our doctors, her digestion completely normalized within 3 months.
- Stress & Migraines: A 40-year-old patient with corporate burnout and severe weekly migraines underwent a customized Shirodhara and Nasya therapy protocol. Their stress levels dropped significantly, and they have been migraine-free for over a year.
- Skin Disorders (Psoriasis): A patient battling extensive psoriasis for five years experienced clear skin after undergoing a deep detoxification program including Virechana and specialized Lepam applications.

Below is the FULL text content of all the pages of our website. You MUST read this carefully and use it as your knowledge base to accurately answer User Questions:
${websiteKnowledge}
`;

  // Initialize Gemini via the SDK safely
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey && apiKey.trim() !== "") {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API initialized successfully on the server.");
  } else {
    console.warn("GEMINI_API_KEY is missing on the server.");
  }

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", aiEnabled: !!ai });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        return res.status(503).json({
          error: "Our AI assistant is currently offline because the GEMINI_API_KEY has not been configured for this deployment. Please contact Pune clinic directly at +91-9404417145 or click below to find customized Ayurvedic guides or book online!"
        });
      }

      // Convert message history to @google/genai format
      const chatHistory = history
        ? history
            .filter((msg: any) => msg.id !== "init" && msg.id !== "missing-key-notice")
            .map((msg: any) => ({
              role: msg.role === "user" ? "user" : "model",
              parts: [{ text: msg.text }],
            }))
        : [];

      // Create a chat session with the target model
      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: chatHistory,
      });

      const response = await chat.sendMessage({ message });
      res.json({ text: response.text || "I'm sorry, I couldn't process that response." });
    } catch (error) {
      console.error("API Chat Error:", error);
      res.status(500).json({
        error: error instanceof Error ? error.message : "Internal Server Error",
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

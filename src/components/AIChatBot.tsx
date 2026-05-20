/// <reference types="vite/client" />
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

// Initialize Gemini via the SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Dynamically load all page contents so the bot is always up-to-date
const rawPages = import.meta.glob("../pages/**/*.tsx", {
  query: "?raw",
  eager: true,
});
let WEBSITE_KNOWLEDGE = "";
for (const path in rawPages) {
  // @ts-ignore
  const content = rawPages[path].default || rawPages[path];
  // Basic cleanup to reduce token size a bit
  const cleanContent =
    typeof content === "string"
      ? content
          .replace(/className="[^"]*"/g, "")
          .replace(/<svg[\s\S]*?<\/svg>/g, "")
      : "";
  WEBSITE_KNOWLEDGE += `\n\n--- Page: ${path} ---\n${cleanContent}`;
}

// System instructions for the bot to give it persona context
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

Success Stories to Share (Use these when patients have doubts or are frustrated):
- Joint Pain/Arthritis: A 55-year-old patient suffering from severe knee joint pain and restricted mobility was advised joint replacement. After completing a 21-day Janu Basti and localized Abhyanga Panchakarma regimen at Sattvic Centre, their pain reduced by 80%, and they regained the ability to walk comfortably without surgery.
- Digestive/Acidity Issues: A professional in her 30s dealing with chronic hyperacidity and IBS found no relief from modern medicine. Through a personalized diet plan (Pathya), Vaman (therapeutic emesis), and specific herbal formulations guided by our doctors, her digestion completely normalized within 3 months.
- Stress & Migraines: A 40-year-old patient with corporate burnout and severe weekly migraines underwent a customized Shirodhara and Nasya therapy protocol. Their stress levels dropped significantly, and they have been migraine-free for over a year.
- Skin Disorders (Psoriasis): A patient battling extensive psoriasis for five years experienced clear skin after undergoing a deep detoxification program including Virechana and specialized Lepam applications.

Below is the FULL text content of all the pages of our website. You MUST read this carefully and use it as your knowledge base to accurately answer User Questions:
${WEBSITE_KNOWLEDGE}
`;

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "model",
      text: "Namaste! I am the Sattvic Ayurveda assistant. How can I help you on your wellness journey today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && showGreeting) {
        setShowGreeting(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showGreeting]);

  // Keep track of the chat instance
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setShowGreeting(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowGreeting(true);
      }, 1500); // Popup back after 1.5 seconds of not scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    // Initialize the chat session
    chatRef.current = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setInput("");

    // Optimistically add user's message
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: userText,
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    try {
      if (!chatRef.current) {
        throw new Error("Chat not initialized");
      }

      const response = await chatRef.current.sendMessage({ message: userText });

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: response.text || "I'm sorry, I couldn't process that response.",
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[999] flex flex-col items-start"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-4 border border-amber-100 origin-bottom-left w-[calc(100vw-2rem)] sm:w-[350px] h-[500px] max-h-[calc(100dvh-120px)] max-w-sm"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-0.5 rounded-full overflow-hidden border border-amber-200">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="50" fill="#fcdbb4" />
                      <path
                        d="M20 100 A30 30 0 0 1 80 100 Z"
                        fill="#ffffff"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />
                      <path
                        d="M 25 45 Q 50 20 75 45 L 75 35 A 25 25 0 0 0 25 35 Z"
                        fill="#3f3f46"
                      />
                      <circle cx="35" cy="45" r="4" fill="#3f3f46" />
                      <circle cx="65" cy="45" r="4" fill="#3f3f46" />
                      <path
                        d="M 45 60 Q 50 65 55 60"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 30 70 Q 50 90 70 70"
                        fill="none"
                        stroke="#475569"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="70" cy="70" r="4" fill="#cbd5e1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Ayurveda Assistant
                    </h3>
                    <p className="text-amber-100 text-xs">
                      Sattvic Ayurveda & Panchakarma
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-amber-50 hover:bg-amber-600/50 p-1.5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                    >
                      {msg.role === "model" && (
                        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200 mt-1">
                          <Bot className="w-4 h-4 text-amber-700" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                          msg.role === "user"
                            ? "bg-amber-600 text-white rounded-tr-none"
                            : "bg-white text-stone-800 rounded-tl-none border border-stone-100"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p>{msg.text}</p>
                        ) : (
                          <div className="prose prose-sm prose-amber max-w-none prose-p:leading-snug prose-p:mb-2 last:prose-p:mb-0">
                            <Markdown
                              components={{
                                a: ({ node, ...props }) => (
                                  <a
                                    {...props}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
                                  />
                                ),
                              }}
                            >
                              {msg.text}
                            </Markdown>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="flex justify-start gap-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
                        <Bot className="w-4 h-4 text-amber-700" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-stone-100">
                        <Loader2 className="w-4 h-4 text-amber-600 animate-spin" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-stone-100">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Ayurveda..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="absolute right-1 top-1 bottom-1 aspect-square flex items-center justify-center rounded-full bg-amber-600 text-white disabled:bg-stone-300 disabled:text-stone-500 hover:bg-amber-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <div className="relative flex items-center">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-amber-600 text-white p-3.5 rounded-full shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all border-2 border-amber-50 flex items-center justify-center relative z-10"
            style={{ width: "56px", height: "56px" }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="#fcdbb4" />
                    <path
                      d="M20 100 A30 30 0 0 1 80 100 Z"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                    />
                    <path
                      d="M 25 45 Q 50 20 75 45 L 75 35 A 25 25 0 0 0 25 35 Z"
                      fill="#3f3f46"
                    />
                    <circle cx="35" cy="45" r="4" fill="#3f3f46" />
                    <circle cx="65" cy="45" r="4" fill="#3f3f46" />
                    <path
                      d="M 45 60 Q 50 65 55 60"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 30 70 Q 50 90 70 70"
                      fill="none"
                      stroke="#475569"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="70" cy="70" r="4" fill="#cbd5e1" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {!isOpen && showGreeting && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.4, delay: 1.5, type: "spring" },
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  scale: 0.8,
                  transition: { duration: 0.2 },
                }}
                className="absolute left-full origin-left ml-4 bg-white border border-amber-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-xl text-sm text-stone-700 whitespace-nowrap cursor-pointer hover:bg-stone-50"
                onClick={() => setIsOpen(true)}
              >
                Hi, I'm{" "}
                <span className="font-semibold text-amber-700">AI-Vaidya!</span>
                <br />
                <span className="text-stone-500 text-xs">
                  How may I help you?
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

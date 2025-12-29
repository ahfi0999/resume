import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Ahmed's AI assistant. Ask me anything about his skills, experience, projects, or background!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `You are an AI assistant for Mohammed Ahmed Hussain's portfolio website. Your role is to provide information about Ahmed in a friendly, professional manner.

Here's Ahmed's background:

**PROFILE:**
AI and Machine Learning Engineer specializing in Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). Currently working as an AI/ML Engineer Intern at Digital Edify Technologies in Hyderabad since September 2025.

**SKILLS:**
- AI/ML & Data Science: Python, Pandas, NumPy, Scikit-Learn, Supervised & Unsupervised Learning, Regression, Classification, Clustering
- LLMs & NLP: LangChain, RAG Systems, Large Language Models, Sentence Transformers, FAISS
- APIs & Cloud: REST API, OpenAI API, Groq API, Google Drive API, Microsoft Azure (upskilling)
- Tools: Git, GitHub, PyCharm, Jupyter Notebook, VS Code, Google Colab, n8n

**EXPERIENCE:**
- AI/ML Engineer Intern at Digital Edify Technologies (Sep 2025 - Present)
  - Develops and evaluates ML models using Scikit-Learn
  - Implements RAG pipelines with LangChain, OpenAI, and Groq APIs
  - Works with vector databases (FAISS) and transformer-based models

**PROJECTS:**
1. PDF Q&A Bot with RAG - Built using LangChain, FAISS, HuggingFace Embeddings, and OpenAI GPT
2. Fact-Based AI Assistant with RAG - Using Tavily search API and Moonshot AI
3. Persistent AI Chatbot - Using LangChain, Groq LLM, and Google Drive API

**EDUCATION:**
- B.Tech in Electronics & Communication Engineering from B V Raju Institute of Technology (2020-2024), CGPA: 7.27
- Intermediate (MPC) from Geetanjali Junior College (2017-2019), 92%
- SSC from Mahathi Vidya Niketan High School (2016-2017), 90%

**LANGUAGES:** English, Telugu, Hindi, Urdu

**CONTACT:**
- Email: ahmedoct54@gmail.com
- Phone: 7396358228
- LinkedIn: linkedin.com/in/mohammed-ahmed-hussain09

Keep responses concise, friendly, and helpful. If asked about something not in Ahmed's profile, politely redirect to what you know about him.`;

  const groqApiKey = import.meta.env.VITE_GROQ_API_KEY ?? '';

  const callGroqAPI = async (userMessage: string): Promise<string> => {
    if (!groqApiKey) {
      console.error('Missing Groq API key. Set VITE_GROQ_API_KEY in your environment.');
      return "I'm not configured to chat right now. Please reach out to Ahmed directly at ahmedoct54@gmail.com or 7396358228.";
    }

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: 'moonshotai/kimi-k2-instruct-0905',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-6).map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            { role: 'user', content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "I apologize, I couldn't generate a response. Please try again.";
    } catch (error) {
      console.error('Groq API Error:', error);
      return "I'm having trouble connecting right now. Please feel free to contact Ahmed directly at ahmedoct54@gmail.com or 7396358228.";
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Call Groq API
    const botResponseText = await callGroqAPI(inputValue);
    
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-cyan-400 text-black p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-110 transition-all z-40 touch-manipulation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={24} className="sm:w-7 sm:h-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-0 right-0 left-0 sm:bottom-4 sm:right-4 sm:left-auto w-full sm:w-96 h-[100vh] sm:h-[600px] sm:max-h-[90vh] bg-black/95 backdrop-blur-xl sm:rounded-2xl shadow-2xl border-t sm:border border-cyan-500/30 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-cyan-400 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-black/20 p-2 rounded-full">
                  <Bot size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-black">Ahmed's AI Assistant</h3>
                  <p className="text-black/80 text-xs">Ask me anything about Ahmed</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black hover:bg-black/20 p-2 rounded-full transition-all touch-manipulation"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-yellow-500 to-cyan-400'
                        : 'bg-white/10'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User size={16} className="text-black" />
                    ) : (
                      <Bot size={16} className="text-cyan-400" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-yellow-500 to-cyan-400 text-black'
                        : 'bg-white/5 text-gray-300 border border-white/10'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Bot size={16} className="text-cyan-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-yellow-500 to-cyan-400 text-black p-2 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
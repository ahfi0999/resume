import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Search, MessageSquare, Database, Sparkles, Cloud } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'PDF Q&A Bot with RAG',
      description:
        'Developed an intelligent chatbot that answers questions from PDF documents using Retrieval-Augmented Generation. Implemented FAISS vector database for semantic search and OpenAI GPT for natural language responses.',
      icon: FileText,
      color: 'from-yellow-500 to-yellow-600',
      technologies: ['LangChain', 'FAISS', 'OpenAI API', 'HuggingFace', 'Python'],
    },
    {
      title: 'Fact-Based AI Assistant',
      description:
        'Built an AI assistant with real-time fact verification using Tavily search API and Moonshot AI. Ensures accurate, up-to-date responses by combining web search with advanced LLM capabilities.',
      icon: Search,
      color: 'from-cyan-500 to-cyan-600',
      technologies: ['Tavily API', 'Moonshot AI', 'RAG', 'Python', 'LangChain'],
    },
    {
      title: 'Persistent AI Chatbot',
      description:
        'Created a context-aware chatbot with conversation memory using Google Drive API for cloud storage. Leverages Groq LLM for fast responses and maintains conversation history across sessions.',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      technologies: ['LangChain', 'Groq API', 'Google Drive API', 'Python', 'Cloud Storage'],
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
                animate={hoveredIndex === index ? { opacity: 0.1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className={`bg-gradient-to-br ${project.color} p-4 rounded-xl inline-block mb-4 relative z-10`}
                animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <project.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-xl text-white mb-3 relative z-10">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed relative z-10">{project.description}</p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
                    className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:scale-110 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-700/20 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all">
            <Database className="text-yellow-400 mx-auto mb-3" size={32} />
            <h4 className="text-white mb-2">Vector Databases</h4>
            <p className="text-gray-400 text-sm">FAISS integration for semantic search</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-700/20 backdrop-blur-md rounded-xl p-6 border border-cyan-500/30 text-center hover:border-cyan-500/50 transition-all">
            <Sparkles className="text-cyan-400 mx-auto mb-3" size={32} />
            <h4 className="text-white mb-2">Advanced RAG</h4>
            <p className="text-gray-400 text-sm">Context-aware AI responses</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 text-center hover:border-blue-500/50 transition-all">
            <Cloud className="text-blue-400 mx-auto mb-3" size={32} />
            <h4 className="text-white mb-2">Cloud Integration</h4>
            <p className="text-gray-400 text-sm">Google Drive & API services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
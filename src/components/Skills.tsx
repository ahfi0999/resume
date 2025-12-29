import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code, Brain, Cloud, Wrench, Database, GitBranch, Terminal, Box, Cpu, Network, FileCode, Zap } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-500/50',
      bgColor: 'bg-yellow-500/10',
      skills: [
        { name: 'Python', icon: Terminal },
        { name: 'Pandas & NumPy', icon: Database },
        { name: 'Scikit-Learn', icon: Brain },
        { name: 'Supervised Learning', icon: Cpu },
        { name: 'Unsupervised Learning', icon: Network },
        { name: 'Regression & Classification', icon: Zap },
      ],
    },
    {
      title: 'LLMs & NLP',
      icon: Code,
      color: 'from-cyan-500 to-cyan-600',
      borderColor: 'border-cyan-500/50',
      bgColor: 'bg-cyan-500/10',
      skills: [
        { name: 'LangChain', icon: Code },
        { name: 'RAG Systems', icon: Brain },
        { name: 'Large Language Models', icon: Cpu },
        { name: 'Sentence Transformers', icon: Network },
        { name: 'FAISS', icon: Database },
      ],
    },
    {
      title: 'APIs & Cloud',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'REST API', icon: Network },
        { name: 'OpenAI API', icon: Brain },
        { name: 'Groq API', icon: Zap },
        { name: 'Google Drive API', icon: Cloud },
        { name: 'Microsoft Azure', icon: Cloud },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'Git & GitHub', icon: GitBranch },
        { name: 'PyCharm', icon: FileCode },
        { name: 'Jupyter Notebook', icon: Box },
        { name: 'VS Code', icon: Code },
        { name: 'Google Colab', icon: Terminal },
        { name: 'n8n', icon: Wrench },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 bg-black/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all touch-manipulation text-sm sm:text-base ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : `bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:${category.borderColor}`
              }`}
            >
              <category.icon size={18} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border ${skillCategories[activeCategory].borderColor} hover:border-opacity-100 transition-all cursor-pointer relative group overflow-hidden`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-20`}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skillCategories[activeCategory].color}`}>
                    <skill.icon className="text-white flex-shrink-0" size={20} />
                  </div>
                  <span className="text-white">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl text-white mb-4">Continuously Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Currently upskilling in Microsoft Azure and exploring advanced cloud-based AI
              solutions. Always eager to learn new technologies and stay updated with the
              latest developments in AI/ML.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
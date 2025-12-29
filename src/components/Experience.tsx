import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  const responsibilities = [
    'Develop and Evaluate ML Models: Build and assess regression, classification, and clustering models using Scikit-Learn, performing data collection, cleaning, preprocessing, and feature engineering with Python, Pandas, and NumPy.',
    'Implement Advanced AI Systems: Design Retrieval-Augmented Generation (RAG) pipelines, integrate conversational AI using LangChain, OpenAI, and Groq APIs, and experiment with embeddings, vector databases (FAISS), and transformer-based models for optimized performance.',
  ];

  const additionalExperience = [
    {
      title: 'AI-ML Virtual Internship',
      organization: 'AICTE, sponsored by Amazon Web Services (AWS)',
      period: 'Jul - Sep 2022',
    },
    {
      title: 'Cybersecurity Virtual Internship',
      organization: 'AICTE, sponsored by Palo Alto Networks',
      period: 'Mar - May 2022',
    },
    {
      title: 'Web Development Training',
      organization: 'Internshala',
      period: 'Completed on 19th July 2023',
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 px-4 bg-black/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Current Position */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-yellow-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 mb-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-cyan-400/10 to-blue-400/0"
            animate={isHovered ? { x: ['0%', '100%'] } : { x: '0%' }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          />
          <div className="flex flex-wrap items-start gap-4 mb-6 relative z-10">
            <motion.div
              className="bg-gradient-to-br from-yellow-500 to-cyan-400 p-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="text-black" size={24} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">AI/ML Engineer Intern</h3>
              <p className="text-cyan-300 mb-2">
                Digital Edify Technologies Pvt Ltd
              </p>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Sep 2025 – Present</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{responsibility}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Experience */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <h4 className="text-white mb-2">{exp.title}</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 text-sm mb-3">{exp.organization}</p>
              <p className="text-gray-400 text-sm">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
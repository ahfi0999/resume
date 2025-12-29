import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Expertise',
      description: 'Specialized in LLMs, RAG systems, and advanced NLP',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Building cutting-edge AI solutions for real-world problems',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Team player with strong communication skills',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Results Oriented',
      description: 'Delivered multiple successful AI projects and solutions',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI and Machine Learning Engineer specializing in Large Language Models (LLMs)
              and Retrieval-Augmented Generation (RAG). Currently applying skills in model
              development, data preprocessing, and RAG implementation as an AI/ML Engineer
              Intern at Digital Edify Technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Passionate about building intelligent, scalable, and cloud-based AI solutions
              to drive digital transformation. With a strong foundation in Python, machine
              learning, and modern AI frameworks, I'm dedicated to creating innovative
              solutions that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105 group relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  initial={false}
                  animate={hoveredIndex === index ? { scale: 1.5 } : { scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg inline-block mb-3 group-hover:scale-110 transition-transform relative z-10`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-white mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { ArrowDown, Linkedin, Github, Mail, Sparkles } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { ParticlesBackground } from './ParticlesBackground';

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-yellow-500/10' : i % 3 === 1 ? 'bg-cyan-500/10' : 'bg-blue-500/10'
            }`}
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="section-shell max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight px-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mohammed Ahmed Hussain
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-400 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            AI/ML Engineer
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Specializing in Large Language Models, RAG, and building intelligent,
            scalable AI solutions to drive digital transformation
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/mohammed-ahmed-hussain09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-cyan-500/20 backdrop-blur-md p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 border border-cyan-500/30 touch-manipulation"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="text-cyan-400" size={20} />
            </a>
            <a
              href="https://github.com/ahfi0999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-blue-500/20 backdrop-blur-md p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 border border-blue-500/30 touch-manipulation"
              aria-label="GitHub Profile"
            >
              <Github className="text-blue-400" size={20} />
            </a>
            <a
              href="mailto:ahmedoct54@gmail.com"
              className="bg-white/10 hover:bg-yellow-500/20 backdrop-blur-md p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 border border-yellow-500/30 touch-manipulation"
              aria-label="Email"
            >
              <Mail className="text-yellow-400" size={20} />
            </a>
          </motion.div>

          <motion.button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-cyan-400 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all hover:scale-105 relative overflow-hidden group text-sm sm:text-base touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white/50" size={32} />
      </motion.div>
    </section>
  );
}
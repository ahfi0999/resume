import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, School, Calendar } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'B V Raju Institute of Technology',
      period: '2020 - 2024',
      grade: 'CGPA: 7.27',
      icon: GraduationCap,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Geetanjali Junior College',
      period: '2017 - 2019',
      grade: '92%',
      icon: BookOpen,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Mahathi Vidya Niketan High School',
      period: '2016 - 2017',
      grade: '90%',
      icon: School,
      color: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-20" ref={ref}>
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`bg-gradient-to-br ${edu.color} p-3 rounded-lg relative z-10`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <edu.icon className="text-black" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl text-white relative z-10">{edu.degree}</h3>
                      </div>
                    </div>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-2 relative z-10">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm relative z-10">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="text-yellow-400">{edu.grade}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-cyan-400 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl text-white mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['English', 'Telugu', 'Hindi', 'Urdu'].map((lang, idx) => (
                <span
                  key={lang}
                  className={`bg-white/10 px-6 py-2 rounded-full border ${
                    idx === 0 ? 'text-yellow-300 border-yellow-500/30' :
                    idx === 1 ? 'text-cyan-300 border-cyan-500/30' :
                    idx === 2 ? 'text-blue-300 border-blue-500/30' :
                    'text-purple-300 border-purple-500/30'
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
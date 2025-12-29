import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmedoct54@gmail.com',
      href: 'mailto:ahmedoct54@gmail.com',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7396358228',
      href: 'tel:7396358228',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mohammed-ahmed-hussain09',
      href: 'https://www.linkedin.com/in/mohammed-ahmed-hussain09',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-black/20" ref={ref}>
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 via-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {info.href ? (
                <motion.a
                  href={info.href}
                  target={info.icon === Linkedin ? '_blank' : undefined}
                  rel={info.icon === Linkedin ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="block bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all relative overflow-hidden group"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <motion.div
                    className={`bg-gradient-to-br ${info.color} p-3 rounded-lg inline-block mb-4 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-white mb-2 relative z-10">{info.label}</h3>
                  <p className="text-gray-400 text-sm break-words relative z-10">{info.value}</p>
                </motion.a>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 relative overflow-hidden group"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <motion.div
                    className={`bg-gradient-to-br ${info.color} p-3 rounded-lg inline-block mb-4 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-white mb-2 relative z-10">{info.label}</h3>
                  <p className="text-gray-400 text-sm relative z-10">{info.value}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-yellow-900/20 backdrop-blur-md rounded-2xl p-12 border border-cyan-500/30">
            <h3 className="text-3xl text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, need AI/ML expertise, or just want to
              connect, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:ahmedoct54@gmail.com"
                className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-cyan-400 text-black px-8 py-3 rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all inline-flex items-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <Send size={20} className="relative z-10" />
                <span className="relative z-10">Send Email</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-ahmed-hussain09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 px-8 py-3 rounded-full hover:bg-white/20 border border-cyan-500/30 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="text-cyan-400" />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center text-gray-400"
        >
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>© 2025 Mohammed Ahmed Hussain. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
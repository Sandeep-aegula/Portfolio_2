'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.68, -0.6, 0.32, 1.6]
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Get to know me better
          </p>
        </motion.div>

        {/* Main Bento Box Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto md:mx-0 order-2 md:order-1"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-blue-500 p-1">
                <div className="w-full h-full bg-[#060010] rounded-[2rem] flex items-center justify-center">
                  {/* Placeholder - Replace with actual image */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-slate-400 text-sm uppercase tracking-widest">DEVELOPER</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Accent Pills */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-blue-500 text-slate-50 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest"
              >
                CREATIVE
              </motion.div>
              
              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-4 -left-4 bg-slate-900 text-slate-50 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest"
              >
                INNOVATIVE
              </motion.div>
            </motion.div>

            {/* Bio Text Section */}
            <motion.div variants={itemVariants} className="space-y-6 order-1 md:order-2">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                variants={itemVariants}
              >
                FULL-STACK DEVELOPER
                <br />
                <span className="text-slate-600">& UI/UX DESIGNER</span>
              </motion.h3>
              
              <motion.div 
                className="space-y-4 text-slate-700 text-lg leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  I&apos;m a passionate full-stack developer with over 3 years of experience 
                  building modern web applications. I specialize in creating scalable, 
                  performant solutions using cutting-edge technologies.
                </p>
                <p>
                  My expertise spans React, Next.js, Node.js, Python, and database 
                  management. I&apos;m dedicated to writing clean, maintainable code and 
                  creating intuitive user experiences.
                </p>
              </motion.div>

              {/* Key Points as Pill Badges */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 mt-8"
              >
                {[
                  { icon: '📍', text: 'Remote Ready' },
                  { icon: '💼', text: 'Available' },
                  { icon: '🎓', text: 'CS Degree' },
                  { icon: '🌐', text: 'Global' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={pillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#0f172a",
                      color: "#f8fafc"
                    }}
                    className="flex items-center space-x-2 bg-slate-100 border border-slate-200 rounded-full py-3 px-4 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-slate-800 font-semibold text-sm uppercase tracking-wide">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

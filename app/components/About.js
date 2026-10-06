'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { memo } from 'react';
import Image from 'next/image';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.68, -0.6, 0.32, 1.6]
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
        {/* Section Title */}
        <m.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Get to know me better
          </p>
        </m.div>

        {/* Main Bento Box Container */}
        <m.div
          variants={itemVariants}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Simplified Full-Stack Developer Section */}
            <m.div
              variants={itemVariants}
              className="relative mx-auto md:mx-0 order-2 md:order-1"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#060010] via-[#0a0820] to-[#0f1030] p-1 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full bg-gradient-to-br from-[#020008] to-[#060010] rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-blue-500/20">
                  
                  {/* Central Developer Icon */}
                  <m.div
                    className="relative z-10"
                    animate={{
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-slate-300 text-xs uppercase tracking-widest text-center">FULL-STACK</p>
                  </m.div>

                  {/* Simplified Tech Icons */}
                  <m.div
                    className="absolute top-8 left-8"
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20">
                      <Image src="/Skills/Js.svg" alt="JavaScript" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </m.div>

                  <m.div
                    className="absolute top-12 right-8"
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-cyan-500/20">
                      <Image src="/Skills/React.svg" alt="React" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </m.div>

                  <m.div
                    className="absolute bottom-16 left-6"
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-green-500/20">
                      <Image src="/Skills/Nodejs.svg" alt="Node.js" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </m.div>

                  <m.div
                    className="absolute bottom-8 right-6"
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/20">
                      <Image src="/Skills/sql.svg" alt="Database" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </m.div>

                  {/* Subtle Pulse Effect */}
                  <m.div
                    className="absolute inset-0 rounded-[2rem] border-2 border-blue-400/20"
                    animate={{
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Simplified Floating Labels */}
              <m.div
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20"
              >
                FRONTEND
              </m.div>
              
              <m.div
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-500/20"
              >
                BACKEND
              </m.div>

              <m.div
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-3 py-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-500/20"
              >
                AI / AUTOMATION
              </m.div>
            </m.div>

            {/* Bio Text Section */}
            <m.div variants={itemVariants} className="space-y-6 order-1 md:order-2">
              <m.h3 
                className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                variants={itemVariants}
              >
                FULL-STACK DEVELOPER
                <br />
                <span className="text-slate-600">& AI/ AUTOMATION ENTHUSIAST</span>
              </m.h3>
              
              <m.div 
                className="space-y-4 text-slate-700 text-lg leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  I am a <strong>Full-Stack Developer and Computer Science & Engineering (AI/ML) student</strong> who enjoys building practical software that solves real-world problems. I work across the modern web stack, with experience in <strong>React, Next.js, JavaScript, TypeScript, Node.js, Python, and FastAPI</strong>.
                </p>
                <p>
                  I am particularly interested in <strong>AI-powered applications and workflow automation</strong>. I enjoy connecting APIs, databases, AI models, and automated workflows to build systems that reduce repetitive work and make information easier to use. My experience includes building conversational data tools, AI-driven applications, REST APIs, and automated data-processing workflows.
                </p>
                <p>
                  I believe in <strong>learning by building</strong>. Rather than only studying technologies theoretically, I focus on turning what I learn into working projects and practical solutions. I am currently looking for opportunities where I can contribute to meaningful software projects, strengthen my engineering skills, and grow with an experienced development team.
                </p>
              </m.div>

              {/* Key Points as Pill Badges */}
              <m.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 mt-8"
              >
                {/* {[
                  { icon: '🎓', text: 'B.Tech CSE – AI/ML' },
                  { icon: '💻', text: 'Full-Stack Developer' },
                  { icon: '🤖', text: 'AI & Automation Enthusiast' },
                  { icon: '🚀', text: 'Learning by Building' },
                ].map((item, index) => (
                  <m.div
                    key={index}
                    variants={pillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#0f172a",
                      color: "white"
                    }}
                    className="flex items-center space-x-2 bg-slate-100 border border-slate-200 rounded-full py-3 px-4 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-slate-800 font-semibold text-sm uppercase tracking-wide">
                      {item.text}
                    </span>
                  </m.div>
                ))} */}
              </m.div>
            </m.div>
          </div>
        </m.div>
      </m.div>
    </section>
    </LazyMotion>
  );
}

export default memo(About);

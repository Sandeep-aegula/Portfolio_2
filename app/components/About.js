'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
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
            {/* Animated Full-Stack Developer Section */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto md:mx-0 order-2 md:order-1"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#060010] via-[#0a0820] to-[#0f1030] p-1 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full bg-gradient-to-br from-[#020008] to-[#060010] rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-blue-500/20">
                  
                  {/* Central Developer Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-slate-300 text-xs uppercase tracking-widest text-center">FULL-STACK</p>
                  </motion.div>

                  {/* Floating Tech Icons - Frontend */}
                  <motion.div
                    className="absolute top-8 left-8"
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20">
                      JS
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-12 right-8"
                    animate={{
                      y: [5, -5, 5],
                      x: [-2, 2, -2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-cyan-500/20">
                      ⚛️
                    </div>
                  </motion.div>

                  {/* Backend Icons */}
                  <motion.div
                    className="absolute bottom-16 left-6"
                    animate={{
                      rotate: [0, -180, -360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-green-500/20">
                      🟢
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-6"
                    animate={{
                      y: [-3, 3, -3],
                      rotate: [0, 90, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/20">
                      🗄️
                    </div>
                  </motion.div>

                  {/* Floating Code Lines */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-1 bg-blue-400 opacity-40 rounded-full"
                      style={{
                        left: `${15 + (i * 10)}%`,
                        top: `${20 + (i * 8)}%`,
                      }}
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Orbiting Particles */}
                  <motion.div
                    className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-md shadow-purple-500/30"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      transformOrigin: "80px 0px"
                    }}
                  >
                    <div className="w-full h-full bg-purple-500 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="absolute w-2 h-2 bg-cyan-500 rounded-full shadow-md shadow-cyan-500/30"
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      transformOrigin: "-60px 0px"
                    }}
                  >
                    <div className="w-full h-full bg-cyan-500 rounded-full"></div>
                  </motion.div>

                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-[2rem] border-2 border-blue-400/40"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Dynamic Floating Labels */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20"
              >
                FRONTEND
              </motion.div>
              
              <motion.div
                animate={{
                  y: [8, -8, 8],
                  rotate: [2, -2, 2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-500/20"
              >
                BACKEND
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-3 py-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-500/20"
              >
                DATABASE
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
                <span className="text-slate-600">& AUTOMATION ENTHUSIAST</span>
              </motion.h3>
              
              <motion.div 
                className="space-y-4 text-slate-700 text-lg leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  I am a <strong>Full-Stack Developer</strong> currently pursuing my B.Tech, driven by the 
                  challenge of building tools that simplify lives. While I am early in my professional 
                  journey, I have invested my time into mastering the modern web stack—specifically 
                  <strong> React, Next.js, and Node.js</strong>.
                </p>
                <p>
                  What sets me apart is my interest in <strong>Workflow Automation</strong>. By leveraging 
                  <em>n8n</em>, I build systems that don't just display data, but move it intelligently 
                  between platforms. I believe that great software isn't just about code; it's about 
                  creating seamless, automated experiences that save time and reduce friction.
                </p>
                <p>
                  I am a firm believer in <strong>'learning by doing'</strong> and am currently seeking 
                  opportunities where I can contribute to impactful projects while growing alongside a 
                  team of experienced developers.
                </p>
              </motion.div>

              {/* Key Points as Pill Badges */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 mt-8"
              >
                {[
                  { icon: '🎓', text: 'B.Tech Student' },
                  { icon: '💼', text: 'Open to Work' },
                  { icon: '⚡', text: 'Automation Expert' },
                  { icon: '🚀', text: 'Learning by Doing' },
                ].map((item, index) => (
                  <motion.div
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

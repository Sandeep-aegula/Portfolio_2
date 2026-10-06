'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { useEffect, useRef, memo, useMemo } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const pillButtonVariants = {
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
        id="home"
        className="min-h-screen flex items-center justify-center px-2 pt-20 pb-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              {/* Hero Pill Container */}
              {/* <m.div
                variants={heroVariants}
                className="bg-white rounded-[2.5rem] p-12 mb-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
              >
                <m.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#060010] mb-6 tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  AEGULA SANDEEP
                </m.h1>
                <m.div
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-4 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  FULL-STACK DEVELOPER & AUTOMATION ENTHUSIAST
                </m.div>
                <m.p
                  className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Building modern, scalable web applications with clean code and beautiful design
                </m.p>
              </m.div> */}
              {/* Hero Pill Container */}
              <m.div
                variants={heroVariants}
                className="bg-white rounded-[2.5rem] p-8 sm:p-12 mb-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
              >
                <m.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#060010] mb-6 tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  AEGULA SANDEEP
                </m.h1>

                <m.div
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-4 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  FULL STACK & AI ENGINEER-IN-TRAINING
                </m.div>

                <m.p
                  className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Final-year B.Tech CSE (AI/ML) student with hands-on experience in full-stack web development (React, Next.js, FastAPI) and AI platforms from an Infosys Springboard internship. Open to SDE & Full Stack Trainee opportunities.                </m.p>

                <m.div
                  className="flex flex-wrap justify-center lg:justify-start gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {[
                    'Infosys Springboard Intern',
                    'AWS Cloud Practitioner',
                    'Unity Certified Associate',
                    'AWS Cloud Quest Hackathon: 2nd Place',
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </m.div>
              </m.div>

              {/* Action Buttons & Social Media Icons - Same Row */}
              <m.div
                variants={containerVariants}
                className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
              >
                <div className="flex flex-col items-center lg:items-start gap-6">
                  {/* Action Buttons Section */}
                  {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <m.a
                      href="#projects"
                      variants={pillButtonVariants}
                      whileHover={{
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden bg-blue-500 text-slate-50 font-bold px-8 py-4 rounded-full text-lg tracking-wide uppercase transition-all duration-300 hover:bg-blue-400"
                    >
                      <span className="relative z-10">VIEW MY WORK</span>
                    </m.a>

                    
                  </div> */}

                  {/* Social Media Icons Section */}

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <m.a
                      href="tel:+917416156814"
                      aria-label="Call Sandeep"
                      variants={statVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </m.a>
                    <m.a
                      href="https://github.com/Sandeep-aegula"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={statVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Github size={28} />
                    </m.a>
                    <m.a
                      href="https://linkedin.com/in/Sandeep-aegula"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={statVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Linkedin size={28} />
                    </m.a>
                    {/* <m.a
                    href="https://x.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={statVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                  >
                     <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </m.a> */}
                    <m.a
                      href="mailto:aegulasandeep@gmail.com"
                      variants={statVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Mail size={28} />
                    </m.a>
                    <m.a
                      href="https://drive.google.com/file/d/1an86q8mHnEhDoB4ljk-rGc4ixYej1WCF/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={pillButtonVariants}
                      whileHover={{
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden bg-slate-900 backdrop-blur-sm border-2 border-slate-700 text-slate-50 font-bold px-8 py-4 rounded-full text-lg tracking-wide uppercase transition-all duration-300"
                    >
                      <span className="relative z-10">RESUME</span>
                    </m.a>
                  </div>
                </div>
              </m.div>
            </m.div>

            {/* Right Side - Optimized Lottie Animation */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }} // Faster animation
              className="hidden lg:flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-lg aspect-square">
                <DotLottieReact
                  src="/Home_Page_Animation.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                  speed={process.env.NODE_ENV === 'production' ? 0.8 : 1} // Slower in production for better performance
                />

              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default memo(Home);
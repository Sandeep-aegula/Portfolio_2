'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {

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
        className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16"
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
              <m.div
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
                  FULL-STACK DEVELOPER & UI/UX DESIGNER
                </m.div>
                <m.p
                  className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Building modern, scalable web applications with clean code and beautiful design
                </m.p>
              </m.div>

            {/* Action Buttons & Social Media Icons - Same Row */}
              <m.div
                variants={containerVariants}
                className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
              >
                <div className="flex flex-col items-center lg:items-start gap-6">
                  {/* Action Buttons Section */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
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

                    <m.a
                      href="https://drive.google.com/file/d/1tyuj_QY8mSd3x_RrX43EiTSMfXXr7CPG/view?usp=sharing"
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

                {/* Social Media Icons Section */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
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
                  <m.a
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
                  </m.a>
                  <m.a
                    href="mailto:aegulasandeep@gmail.com"
                    variants={statVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Mail size={28} />
                  </m.a>
                </div>
                </div>
              </m.div>
            </m.div>

            {/* Right Side - Lottie Animation */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden lg:flex justify-center lg:justify-end"
            >
            <div className="w-full max-w-lg aspect-square">
              <DotLottieReact
                src="https://lottie.host/db72876d-efca-41c7-8ea8-102e4b8a37ca/6Y2M86e4Vf.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
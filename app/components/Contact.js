'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { Mail,  Github, Linkedin, T } from 'lucide-react';


export default function Contact() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 "
      >
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto w-full"
        >
        {/* Section Title */}
          <m.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Let&apos;s <span className="text-blue-500">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg">
              Let&apos;s work together to bring your ideas to life
            </p>
          </m.div>
        <div className="max-w-4xl mx-auto">
          {/* Single Combined Component */}
          <m.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            {/* Social Media Section */}
            <div className="text-center mb-8">
             
              {/* Social Media Icons */}
              <div className="mb-8">
                <div className="flex justify-center space-x-4">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 mb-8"></div>

            {/* Simplified Animation Section */}
            <div className="text-center mb-6">
              <p className="text-slate-600">Ready to collaborate and create something amazing together</p>
            </div>
            
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central hub */}
                  <m.div
                    className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center relative z-10"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Mail size={32} className="text-white" />
                  </m.div>
                  
                  {/* Simple connection nodes */}
                  <m.div
                    className="absolute w-4 h-4 bg-blue-500 rounded-full"
                    style={{ top: '20px', left: '50px' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <m.div
                    className="absolute w-4 h-4 bg-green-500 rounded-full"
                    style={{ top: '80px', right: '60px' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <m.div
                    className="absolute w-4 h-4 bg-purple-500 rounded-full"
                    style={{ bottom: '30px', left: '40px' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                  />
                  <m.div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full"
                    style={{ bottom: '60px', right: '50px' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <m.p
                className="text-slate-600 mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Building connections that matter
              </m.p>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
    </LazyMotion>
  );
}
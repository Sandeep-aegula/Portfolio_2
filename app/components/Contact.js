'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
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
                  <m.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </m.a>
                  <m.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </m.a>
                  <m.a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </m.a>
                  <m.a
                   href="mailto:aegulasandeep@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Mail size={20} />
                  </m.a>
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
'use client';

import { motion } from 'motion/react';
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Single Combined Component */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            {/* Social Media Section */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h3>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-slate-600 text-sm">Email</p>
                  <p className="text-slate-900 font-semibold">aegulasandeep@gmail.com</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mb-8">
                <p className="text-slate-600 text-sm mb-4">Follow me on</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 mb-8"></div>

            {/* 3D Animation Section */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Connect</h3>
              <p className="text-slate-600">Ready to collaborate and create something amazing together</p>
            </div>
            
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
              {/* Fallback 3D-like illustration using CSS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Connection nodes */}
                  <motion.div
                    className="absolute w-4 h-4 bg-blue-500 rounded-full"
                    style={{ top: '20px', left: '50px' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 bg-green-500 rounded-full"
                    style={{ top: '80px', right: '60px' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 bg-purple-500 rounded-full"
                    style={{ bottom: '30px', left: '40px' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full"
                    style={{ bottom: '60px', right: '50px' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
                  />
                  
                  {/* Central hub */}
                  <motion.div
                    className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center relative z-10"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  >
                    <Mail size={32} className="text-white" />
                  </motion.div>
                  
                  {/* Connection lines */}
                  <motion.div
                    className="absolute top-8 left-16 w-12 h-0.5 bg-blue-500 origin-left"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                  <motion.div
                    className="absolute top-16 right-12 w-12 h-0.5 bg-green-500 origin-right"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 0.75 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-12 w-12 h-0.5 bg-purple-500 origin-left"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                  />
                  <motion.div
                    className="absolute bottom-16 right-16 w-12 h-0.5 bg-orange-500 origin-right"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 2.25 }}
                  />
                </div>
              </div>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-slate-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <motion.p
                className="text-slate-600 mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Building connections that matter
              </motion.p>
              <motion.div
                className="flex justify-center space-x-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
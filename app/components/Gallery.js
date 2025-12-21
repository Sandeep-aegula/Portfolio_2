'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: 'Tech Conference 2023',
      category: 'Speaking',
      description: 'Presenting at React Summit',
      icon: '🎤',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Hackathon Victory',
      category: 'Award',
      description: 'Winning team at Global Hackathon',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Team Collaboration',
      category: 'Work',
      description: 'Working with amazing colleagues',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Workshop Leader',
      category: 'Teaching',
      description: 'Leading React workshop',
      icon: '📚',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Product Launch',
      category: 'Achievement',
      description: 'Successful product release',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Meetup Organizer',
      category: 'Community',
      description: 'Local developer meetup',
      icon: '🌟',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Code Review Session',
      category: 'Mentoring',
      description: 'Mentoring junior developers',
      icon: '💡',
      color: 'from-teal-500 to-blue-500',
    },
    {
      title: 'Open Source Day',
      category: 'Contribution',
      description: 'Contributing to OSS projects',
      icon: '🔧',
      color: 'from-gray-500 to-slate-500',
    },
    {
      title: 'Innovation Award',
      category: 'Recognition',
      description: 'Company innovation award',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Professional <span className="text-blue-500">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Highlights from events, conferences, and professional journey
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -12 }}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-white/10">
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Placeholder with Refined Gradient */}
                <div className={`relative h-64 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="relative z-10 text-7xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Enhanced Category Badge */}
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 shadow-lg">
                    {item.category}
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping" />
                </div>

                {/* Enhanced Content Section */}
                <div className="relative p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.description}
                  </p>
                  
                  {/* Interactive Arrow */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <span className="text-blue-400 text-sm">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal for Selected Image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
            >
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
              
              {/* Modal Header with Enhanced Design */}
              <div className={`relative h-72 bg-gradient-to-br ${selectedImage.color} flex items-center justify-center overflow-hidden`}>
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent animate-pulse" />
                
                <div className="relative z-10 text-9xl drop-shadow-2xl animate-bounce-slow">
                  {selectedImage.icon}
                </div>
                
                {/* Enhanced Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-blue-300 transition-all duration-300 border border-white/20 hover:border-blue-400/50 shadow-lg hover:scale-110"
                >
                  <span className="text-lg">✕</span>
                </button>
              </div>

              {/* Enhanced Modal Content */}
              <div className="relative p-8 bg-gradient-to-t from-slate-900/95 to-transparent">
                <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
                  {selectedImage.category}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Click on any card to view more details
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

// Function to convert hex color to CSS filter
const getColorFilter = (hexColor) => {
  // Color mapping for common brand colors to CSS filters
  const colorMap = {
    '#61DAFB': 'invert(70%) sepia(52%) saturate(2878%) hue-rotate(157deg) brightness(119%) contrast(119%)', // React blue
    '#000000': 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)', // Black
    '#F7DF1E': 'invert(85%) sepia(78%) saturate(2476%) hue-rotate(21deg) brightness(118%) contrast(115%)', // JavaScript yellow
    '#3178C6': 'invert(47%) sepia(59%) saturate(1945%) hue-rotate(213deg) brightness(97%) contrast(86%)', // TypeScript blue
    '#06B6D4': 'invert(71%) sepia(77%) saturate(1968%) hue-rotate(152deg) brightness(103%) contrast(107%)', // Tailwind cyan
    '#E34F26': 'invert(55%) sepia(93%) saturate(1378%) hue-rotate(2deg) brightness(119%) contrast(119%)', // HTML orange
    '#339933': 'invert(60%) sepia(59%) saturate(1969%) hue-rotate(103deg) brightness(118%) contrast(115%)', // Node.js green
    '#3776AB': 'invert(47%) sepia(68%) saturate(1945%) hue-rotate(213deg) brightness(81%) contrast(86%)', // Python blue
    '#4479A1': 'invert(47%) sepia(68%) saturate(1945%) hue-rotate(213deg) brightness(81%) contrast(86%)', // MySQL blue
    '#47A248': 'invert(60%) sepia(59%) saturate(1969%) hue-rotate(103deg) brightness(118%) contrast(115%)', // MongoDB green
    '#FF6B35': 'invert(55%) sepia(93%) saturate(1378%) hue-rotate(2deg) brightness(119%) contrast(119%)', // REST API orange
    '#F05032': 'invert(55%) sepia(93%) saturate(1378%) hue-rotate(2deg) brightness(119%) contrast(119%)', // Git red
    '#181717': 'invert(10%) sepia(15%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)', // GitHub dark
    '#2496ED': 'invert(47%) sepia(68%) saturate(1945%) hue-rotate(213deg) brightness(81%) contrast(86%)', // Docker blue
    '#FF6C37': 'invert(55%) sepia(93%) saturate(1378%) hue-rotate(2deg) brightness(119%) contrast(119%)', // Postman orange
    '#F24E1E': 'invert(55%) sepia(93%) saturate(1378%) hue-rotate(2deg) brightness(119%) contrast(119%)', // Figma orange
    '#FF9900': 'invert(85%) sepia(78%) saturate(2476%) hue-rotate(21deg) brightness(118%) contrast(115%)', // AWS orange
  };
  
  return colorMap[hexColor] || 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)';
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    FRONTEND: [
      { name: 'REACT', level: 95, icon: '/skills/React.svg', color: '#61DAFB' },
      { name: 'NEXT.JS', level: 90, icon: '/skills/nextjs.svg', color: '#000000' },
      { name: 'JAVASCRIPT', level: 92, icon: '/skills/Js.svg', color: '#F7DF1E' },
      { name: 'TYPESCRIPT', level: 88, icon: '/skills/ts.svg', color: '#3178C6' },
      { name: 'TAILWIND', level: 95, icon: '/skills/tailwindcss.svg', color: '#06B6D4' },
      { name: 'HTML/CSS', level: 98, icon: '/skills/HTML.svg', color: '#E34F26' },
    ],
    BACKEND: [
      { name: 'NODE.JS', level: 90, icon: '/skills/Nodejs.svg', color: '#339933' },
      { name: 'PYTHON', level: 85, icon: '/skills/python.svg', color: '#3776AB' },
      { name: 'EXPRESS', level: 88, icon: '/skills/express-js.svg', color: '#000000' },
      { name: 'MYSQL', level: 82, icon: '/skills/sql.svg', color: '#4479A1' },
      { name: 'MONGODB', level: 85, icon: '/skills/mongodb.svg', color: '#47A248' },
      { name: 'REST API', level: 92, icon: '/skills/restapi.svg', color: '#FF6B35' },
    ],
    TOOLS: [
      { name: 'GIT', level: 90, icon: '/skills/git.svg', color: '#F05032' },
      { name: 'GITHUB', level: 88, icon: '/skills/GitHub.svg', color: '#181717' },
      { name: 'DOCKER', level: 80, icon: '/skills/Docker.svg', color: '#2496ED' },
      { name: 'POSTMAN', level: 95, icon: '/skills/Postman.svg', color: '#FF6C37' },
      { name: 'FIGMA', level: 85, icon: '/skills/Figma.svg', color: '#FFB6C1' },
      { name: 'AWS CLOUD', level: 75, icon: '/skills/aws.svg', color: '#FF6C37' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const skillPillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.25,
        ease: [0.68, -0.6, 0.32, 1.6]
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Technologies & tools I work with
          </p>
        </motion.div>

        {/* Skills Bento Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
            >
              {/* Category Title */}
              <motion.div
                className="bg-slate-900 rounded-full py-3 px-6 mb-8 text-center"
                variants={categoryVariants}
              >
                <h3 className="text-xl font-bold text-slate-50 tracking-widest uppercase">
                  {category}
                </h3>
              </motion.div>

              {/* Skills Pill Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-3 md:grid-cols-2 gap-3"
              >
                {skills.map((skill, index) => {
                  const skillKey = `${category}-${skill.name}`;
                  const isHovered = hoveredSkill === skillKey;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillPillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Pill with Liquid Fill Effect */}
                      <div className="relative overflow-hidden bg-slate-100 border border-slate-200 rounded-full py-3 px-4 cursor-pointer transition-all duration-300">
                        
                        {/* Liquid Fill Background */}
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ 
                            y: isHovered ? "0%" : "100%",
                            backgroundColor: skill.color || "#0f172a"
                          }}
                          transition={{ 
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1.0]
                          }}
                          className="absolute inset-0 rounded-full"
                        />
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center md:justify-start md:space-x-2">
                          <motion.div 
                            className="group-hover:scale-110 transition-transform flex items-center justify-center"
                            animate={{
                              scale: isHovered ? 1.1 : 1
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                              filter: isHovered 
                                ? 'brightness(0) invert(1)' 
                                : 'none'
                            }}
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={18}
                              height={18}
                              className="w-[18px] h-[18px] object-contain"
                              style={{
                                filter: !isHovered ? `brightness(0) saturate(100%) ${getColorFilter(skill.color)}` : 'none'
                              }}
                            />
                          </motion.div>
                          <div className="min-w-0 flex-1 hidden md:block">
                            <motion.div
                              animate={{
                                color: isHovered ? "#f8fafc" : "#0f172a"
                              }}
                              transition={{ duration: 0.3 }}
                              className="font-bold text-xs uppercase tracking-wide truncate"
                            >
                              {skill.name}
                            </motion.div>
                            <motion.div
                              animate={{
                                color: isHovered ? "#f8fafc" : "#64748b"
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-xs opacity-60 font-medium"
                            >
                              {skill.level}%
                            </motion.div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: isHovered ? 0.2 : 0,
                            scale: isHovered ? 1.2 : 0.8
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute -inset-2 rounded-full blur-md"
                          style={{ backgroundColor: skill.color || "#0f172a" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Summary Pill */}
        <motion.div
          variants={categoryVariants}
          className="mt-12 text-center"
        >
          <motion.div 
            className="bg-blue-500 text-slate-50 rounded-full py-4 px-8 inline-block font-bold text-lg uppercase tracking-widest shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              backgroundColor: "#2563eb"
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            ALWAYS LEARNING • ALWAYS GROWING
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Code2, 
  Triangle, 
  FileCode, 
  Box, 
  Palette, 
  FileText,
  Circle,
  FileCode2,
  Server,
  Database,
  Leaf,
  Plug,
  GitBranch,
  Container,
  Monitor,
  Figma,
  Cloud,
  Terminal
} from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    FRONTEND: [
      { name: 'REACT', level: 95, icon: Code2, color: '#61DAFB' },
      { name: 'NEXT.JS', level: 90, icon: Triangle, color: '#000000' },
      { name: 'JAVASCRIPT', level: 92, icon: FileCode, color: '#F7DF1E' },
      { name: 'TYPESCRIPT', level: 88, icon: Box, color: '#3178C6' },
      { name: 'TAILWIND', level: 95, icon: Palette, color: '#06B6D4' },
      { name: 'HTML/CSS', level: 98, icon: FileText, color: '#E34F26' },
    ],
    BACKEND: [
      { name: 'NODE.JS', level: 90, icon: Circle, color: '#339933' },
      { name: 'PYTHON', level: 85, icon: FileCode2, color: '#3776AB' },
      { name: 'EXPRESS', level: 88, icon: Server, color: '#000000' },
      { name: 'MYSQL', level: 82, icon: Database, color: '#4479A1' },
      { name: 'MONGODB', level: 85, icon: Leaf, color: '#47A248' },
      { name: 'REST API', level: 92, icon: Plug, color: '#FF6B35' },
    ],
    TOOLS: [
      { name: 'GIT', level: 90, icon: GitBranch, color: '#F05032' },
      { name: 'DOCKER', level: 80, icon: Container, color: '#2496ED' },
      { name: 'VS CODE', level: 95, icon: Monitor, color: '#007ACC' },
      { name: 'FIGMA', level: 85, icon: Figma, color: '#F24E1E' },
      { name: 'AWS', level: 75, icon: Cloud, color: '#FF9900' },
      { name: 'LINUX', level: 82, icon: Terminal, color: '#FCC624' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      },
    },
  };

  const skillPillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
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
                className="grid grid-cols-2 gap-3"
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
                        <div className="relative z-10 flex items-center space-x-2">
                          <div className="text-lg group-hover:scale-110 transition-transform">
                            <skill.icon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
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

'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { useState, memo } from 'react';
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
    '#009688': 'invert(48%) sepia(51%) saturate(1014%) hue-rotate(130deg) brightness(91%) contrast(101%)', // FastAPI teal
    '#7C3AED': 'invert(31%) sepia(95%) saturate(2915%) hue-rotate(255deg) brightness(91%) contrast(95%)', // AI purple
    '#F97316': 'invert(58%) sepia(91%) saturate(2947%) hue-rotate(359deg) brightness(101%) contrast(98%)', // Automation orange
    '#111827': 'invert(8%) sepia(13%) saturate(1758%) hue-rotate(186deg) brightness(94%) contrast(92%)', // Ollama dark
    '#8B5CF6': 'invert(44%) sepia(86%) saturate(3067%) hue-rotate(247deg) brightness(99%) contrast(93%)', // SQLAlchemy purple
    '#EA580C': 'invert(43%) sepia(96%) saturate(3138%) hue-rotate(359deg) brightness(96%) contrast(96%)', // Puppeteer orange
    '#FF4B4B': 'invert(46%) sepia(95%) saturate(3167%) hue-rotate(331deg) brightness(101%) contrast(101%)', // Streamlit red
  };
  
  return colorMap[hexColor] || 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)';
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    FRONTEND: [
      { name: 'REACT', level: 95, icon: '/Skills/React.svg', color: '#61DAFB' },
      { name: 'NEXT.JS', level: 90, icon: '/Skills/nextjs.svg', color: '#000000' },
      { name: 'JAVASCRIPT', level: 92, icon: '/Skills/Js.svg', color: '#F7DF1E' },
      { name: 'TYPESCRIPT', level: 88, icon: '/Skills/ts.svg', color: '#3178C6' },
      { name: 'TAILWIND CSS', level: 95, icon: '/Skills/tailwindcss.svg', color: '#06B6D4' },
      { name: 'HTML/CSS', level: 98, icon: '/Skills/HTML.svg', color: '#E34F26' },
    ],
    BACKEND: [
      { name: 'NODE.JS', level: 90, icon: '/Skills/Nodejs.svg', color: '#339933' },
      { name: 'PYTHON', level: 85, icon: '/Skills/python.svg', color: '#3776AB' },
      { name: 'FASTAPI', level: 90, icon: '/Skills/fastapi.svg', color: '#009688' },
      { name: 'EXPRESS.JS', level: 88, icon: '/Skills/express-js.svg', color: '#000000' },
      { name: 'REST APIs', level: 92, icon: '/Skills/restapi.svg', color: '#FF6B35' },
      { name: 'SQL', level: 85, icon: '/Skills/sql.svg', color: '#4479A1' },
    ],
    'AI / DATA': [
      { name: 'LLM INTEGRATION', level: 85, icon: '/Skills/llm.svg', color: '#7C3AED' },
      { name: 'NATURAL LANGUAGE PROCESSING', level: 80, icon: '/Skills/nlp.svg', color: '#7C3AED' },
      { name: 'AI WORKFLOW AUTOMATION', level: 85, icon: '/Skills/automation.svg', color: '#F97316' },
      { name: 'OLLAMA', level: 80, icon: '/Skills/ollama.svg', color: '#111827' },
      { name: 'PYTHON DATA PROCESSING', level: 85, icon: '/Skills/dataproc.svg', color: '#3776AB' },
      { name: 'WEB SCRAPING', level: 80, icon: '/Skills/scraping.svg', color: '#FF6B35' },
    ],
    DATABASES: [
      { name: 'MYSQL', level: 82, icon: '/Skills/sql.svg', color: '#4479A1' },
      { name: 'MONGODB', level: 85, icon: '/Skills/mongodb.svg', color: '#47A248' },
      { name: 'SQLALCHEMY', level: 80, icon: '/Skills/sqlalchemy.svg', color: '#8B5CF6' },
    ],
    'CLOUD / DEVOPS': [
      { name: 'AWS CLOUD', level: 75, icon: '/Skills/aws.svg', color: '#FF9900' },
      { name: 'DOCKER', level: 80, icon: '/Skills/Docker.svg', color: '#2496ED' },
      { name: 'GIT', level: 90, icon: '/Skills/git.svg', color: '#F05032' },
      { name: 'GITHUB', level: 88, icon: '/Skills/GitHub.svg', color: '#181717' },
    ],
    TOOLS: [
      { name: 'POSTMAN', level: 95, icon: '/Skills/Postman.svg', color: '#FF6C37' },
      { name: 'FIGMA', level: 85, icon: '/Skills/Figma.svg', color: '#FFB6C1' },
      { name: 'N8N', level: 80, icon: '/Skills/n8n.svg', color: '#EA4B71' },
      { name: 'PUPPETEER', level: 80, icon: '/Skills/puppeteer.svg', color: '#EA580C' },
      { name: 'STREAMLIT', level: 80, icon: '/Skills/streamlit.svg', color: '#FF4B4B' },
      { name: 'UNITY', level: 80, icon: '/Skills/unity.svg', color: '#222C37' },
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
    <LazyMotion features={domAnimation}>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto w-full"
        >
        {/* Section Title */}
        <m.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Technologies & tools I work with
          </p>
        </m.div>

        {/* Skills Bento Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <m.div
              key={category}
              variants={categoryVariants}
              className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm border border-white/10"
            >
              {/* Category Title */}
              <m.div
                className="bg-slate-900 rounded-full py-3 px-6 mb-8 text-center"
                variants={categoryVariants}
              >
                <h3 className="text-xl font-bold text-slate-50 tracking-widest uppercase">
                  {category}
                </h3>
              </m.div>

              {/* Skills Pill Grid */}
              <m.div 
                variants={containerVariants}
                className="grid grid-cols-3 md:grid-cols-2 gap-3"
              >
                {skills.map((skill, index) => {
                  const skillKey = `${category}-${skill.name}`;
                  const isHovered = hoveredSkill === skillKey;
                  
                  return (
                    <m.div
                      key={skill.name}
                      variants={skillPillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Pill with Liquid Fill Effect */}
                      <div className="relative overflow-hidden bg-slate-100 border border-slate-200 rounded-full py-3 px-4 cursor-pointer transition-all duration-300">
                        
                        {/* Simplified Fill Background */}
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: isHovered ? 1 : 0,
                            backgroundColor: skill.color || "#0f172a"
                          }}
                          transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 rounded-full"
                        />
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center md:justify-start md:space-x-2">
                          <m.div 
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
                          </m.div>
                          <div className="min-w-0 flex-1 hidden md:block">
                            <m.div
                              animate={{
                                color: isHovered ? "#f8fafc" : "#0f172a"
                              }}
                              transition={{ duration: 0.3 }}
                              className="font-bold text-xs uppercase tracking-wide truncate"
                            >
                              {skill.name}
                            </m.div>
                            <m.div
                              animate={{
                                color: isHovered ? "#f8fafc" : "#64748b"
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-xs opacity-60 font-medium"
                            >
                              {skill.level}%
                            </m.div>
                          </div>
                        </div>

                      </div>
                    </m.div>
                  );
                })}
              </m.div>
            </m.div>
          ))}
        </div>

        {/* Simplified Skills Summary Pill */}
        <m.div
          variants={categoryVariants}
          className="mt-12 text-center"
        >
          <m.div 
            className="bg-blue-500 text-slate-50 rounded-full py-4 px-8 inline-block font-bold text-lg uppercase tracking-widest shadow-2xl"
            whileHover={{ 
              scale: 1.05
            }}
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            ALWAYS LEARNING • ALWAYS GROWING
          </m.div>
        </m.div>
      </m.div>
    </section>
    </LazyMotion>
  );
}

export default memo(Skills);

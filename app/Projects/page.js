'use client';

import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';

export default function ProjectsPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="bg-[#060010] text-slate-900 min-h-screen selection:bg-slate-200 overflow-x-hidden">
      <Navbar />
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto w-full"
        >
        {/* Section Title */}
        <motion.div variants={cardVariants} className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">
            Some of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-slate-900/20 transition-all group hover:bg-slate-50"
            >
              {/* Project Icon/Header */}
              <div className="bg-slate-100 p-8 text-center border-b border-slate-200">
                <div className="text-6xl mb-2">{project.icon}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium py-2 rounded-lg transition-all"
                  >
                    <span className="mr-2">📂</span>
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition-all"
                  >
                    <span className="mr-2">🚀</span>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    
    <footer className="py-16 text-center border-t border-slate-300 text-sm text-slate-600 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white backdrop-blur-sm rounded-full py-4 px-8 inline-block shadow-sm border border-slate-200">
          © 2025 Developer Portfolio • Built with Next.js & The Fluid Pill Theme
        </div>
      </div>
    </footer>
  </main>
  );
}

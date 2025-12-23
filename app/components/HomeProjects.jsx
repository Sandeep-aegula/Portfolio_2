'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Eye } from 'lucide-react';
import { projects } from '../data/projects';

export default function HomeProjects() {
  const router = useRouter();
  
  // Show only first 3 projects
  const featuredProjects = projects.slice(0, 3);

  const handleProjectClick = (projectId) => {
    router.push(`/Projects#project-${projectId}`);
  };

  const handleViewMore = () => {
    router.push('/Projects');
  };

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
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 "
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

        {/* Projects Grid - Only 3 projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleProjectClick(project.id)}
              className="bg-white backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-slate-900/20 transition-all group cursor-pointer hover:bg-slate-50"
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
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack - Show only first 3 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium bg-slate-300 text-slate-600 px-3 py-1 rounded-full border border-slate-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Click to view indicator */}
                <div className="text-center">
                  <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                    Click to view details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          variants={cardVariants}
          className="text-center"
        >
          <motion.button
            onClick={handleViewMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-slate-900/30 transition-all duration-300 group"
          >
            <motion.span 
              className="mr-2 inline-block"
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Eye size={20} />
            </motion.span>
            View All Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

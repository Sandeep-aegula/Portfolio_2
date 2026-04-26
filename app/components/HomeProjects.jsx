'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { Eye } from 'lucide-react';
import { projects } from '../data/projects';

function HomeProjects() {
  const router = useRouter();

  // Show only first 3 projects
  const featuredProjects = projects.slice(0, 3);

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
    <LazyMotion features={domAnimation}>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 "
      >
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto w-full"
        >
          {/* Section Title */}
          <m.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg">
              Some of my recent work and side projects
            </p>
          </m.div>

          {/* Projects Grid - Only 3 projects */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <m.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-slate-900/20 transition-all group hover:bg-slate-50 flex flex-col h-full"
              >
                {/* Project Icon/Header */}
                <div className="bg-slate-100 p-8 flex justify-center items-center border-b border-slate-200">
                  <div className="mb-2">{project.icon}</div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metaTags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <m.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium py-2 rounded-lg transition-all"
                    >
                      <span className="mr-2">📂</span>
                      GitHub
                    </m.a>
                    <m.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition-all"
                    >
                      <span className="mr-2">🚀</span>
                      Live Demo
                    </m.a>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* View More Button */}
          <m.div
            variants={cardVariants}
            className="text-center"
          >
            <m.button
              onClick={handleViewMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-slate-900/30 transition-all duration-300 group"
            >
              <span className="mr-2 inline-block">
                <Eye size={20} />
              </span>
              View All Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </m.button>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}

export default memo(HomeProjects);

'use client';

import { memo } from 'react';
import { m } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ProjectCard({ project, clampDescription = false }) {
  return (
    <m.div
      id={`project-${project.id}`}
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

        <p className={`text-sm text-slate-600 mb-6 leading-relaxed${clampDescription ? ' line-clamp-3' : ''}`}>
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
          {project.github && (
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
          )}
          {project.live && (
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
          )}
        </div>
      </div>
    </m.div>
  );
}

export default memo(ProjectCard);

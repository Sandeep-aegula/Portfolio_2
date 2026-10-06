'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { Eye } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

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
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                clampDescription
              />
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

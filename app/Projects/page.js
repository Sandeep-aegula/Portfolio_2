'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
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
    <LazyMotion features={domAnimation}>
      <main className="bg-[#060010] text-slate-900 min-h-screen selection:bg-slate-200 overflow-x-hidden">
        <Navbar />
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-24"
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

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </m.div>
        </section>

      </main>
    </LazyMotion>
  );
}

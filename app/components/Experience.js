'use client';

import { Briefcase } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';

const experiences = [
  {
    title: 'AI Virtual Intern',
    company: 'Infosys Springboard (Virtual Internship 7.0)',
    period: 'Jun 2026 - Aug 2026',
    description:
      'Worked in a team on an AI-Driven Smart Hiring Platform with a Candidate Matching Copilot, applying LLM-based services to match candidates to job requirements.',
    highlights: [
      'Built backend services with Python, FastAPI and SQLAlchemy on MySQL',
      'Integrated AI/LLM services for candidate-to-job matching',
      'Developed the interactive front end using Streamlit',
      'Collaborated in an agile team through mentor-led reviews',
    ],
    tech: ['Python', 'FastAPI', 'Streamlit', 'MySQL', 'SQLAlchemy', 'LLMs'],
    metaTags: ['#GenAI', '#Internship'],
    icon: <Briefcase className="w-16 h-16 text-teal-500" />,
  },
];

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

export default function Experience() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto w-full"
        >
          <m.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Work <span className="text-blue-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg">
              Internships and hands-on industry experience
            </p>
          </m.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((experience) => (
              <m.div
                key={experience.title + experience.company}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-slate-900/20 transition-all group hover:bg-slate-50 flex flex-col"
              >
                <div className="bg-slate-100 p-8 flex justify-center items-center border-b border-slate-200">
                  <div className="mb-2">{experience.icon}</div>
                </div>

                <div className="p-6">
                  <span className="inline-block text-xs font-semibold bg-slate-900 text-white px-4 py-1 rounded-full mb-4">
                    {experience.period}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <span className="text-blue-600 mr-2">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.metaTags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-blue-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}

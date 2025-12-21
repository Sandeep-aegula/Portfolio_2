'use client';

import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description:
        'Leading development of enterprise web applications using Next.js and Node.js. Mentoring junior developers and implementing best practices.',
      highlights: [
        'Architected scalable microservices infrastructure',
        'Improved application performance by 40%',
        'Led team of 5 developers',
      ],
      icon: '💼',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description:
        'Developed and maintained multiple client projects, focusing on React and Express.js. Collaborated with design and product teams.',
      highlights: [
        'Built 15+ production web applications',
        'Implemented CI/CD pipelines',
        'Reduced bug reports by 60%',
      ],
      icon: '🚀',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Co.',
      period: '2020 - 2021',
      description:
        'Started career building responsive websites and learning modern web technologies. Contributed to frontend and backend development.',
      highlights: [
        'Mastered React and Node.js ecosystem',
        'Delivered 10+ client websites',
        'Achieved 100% project on-time delivery',
      ],
      icon: '🎯',
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2019 - 2020',
      description:
        'Worked with small businesses and startups to create custom web solutions. Managed all aspects of project delivery.',
      highlights: [
        'Built portfolio of 20+ websites',
        'Maintained 98% client satisfaction',
        'Learned full project lifecycle',
      ],
      icon: '💻',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#060010] z-10 transform md:-translate-x-2 ${
                    index % 2 === 0 ? 'md:translate-x-2' : ''
                  }`}
                ></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-slate-900 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all">
                    {/* Icon and Period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{exp.icon}</div>
                      <span className="text-blue-400 font-semibold text-sm bg-blue-500/20 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-2xl font-bold text-slate-50 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-blue-500 font-semibold mb-3">
                      {exp.company}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-slate-400 text-sm"
                        >
                          <span className="text-blue-500 mr-2">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

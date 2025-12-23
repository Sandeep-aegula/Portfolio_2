'use client';

import { motion } from 'motion/react';
import { Trophy, Code, Star, Wrench } from 'lucide-react';

export default function Achievements() {

const awards = [
  {
    title: 'Cloud Quest Hackathon Winner',
    organization: 'AWS / Cloud Provider Event',
    description: 'Developed a high-availability system using EC2 instances, CloudWatch for real-time monitoring, and S3 for secure data storage.',
    icon: <Trophy size={28} />,
  },
  {
    title: 'Algorithm Specialist',
    organization: 'LeetCode',
    description: 'Solved 100+ problems across DP, Graphs, and Data Structures.',
    icon: <Code size={28} />,
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    description: 'Active contributor to popular projects, improving code quality and features.',
    icon: <Star size={28} />,
  },
  {
    title: 'Full-Stack Developer',
    organization: 'Portfolio & Open Source',
    description: 'Designed and developed robust end-to-end web applications.',
    icon: <Wrench size={28} />,
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="achievements"
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Achievements & <span className="text-blue-500">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Recognition and continuous learning
          </p>
        </motion.div>

 
        {/* Awards */}
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden bg-white backdrop-blur-md border border-slate-200 rounded-3xl p-8 shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 hover:bg-slate-50"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-slate-800/3 to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex items-start space-x-4">
                  {/* Icon with Slate Background */}
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                    {award.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-slate-600 font-semibold text-sm mb-3 uppercase tracking-wider">
                      {award.organization}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-slate-400 rounded-full opacity-60" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-slate-600 rounded-full opacity-40" />
              </motion.div>
            ))}
          </div>
        </div>

     
      </motion.div>
    </section>
  );
}

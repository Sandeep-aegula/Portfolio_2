'use client';

import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Error404() {
  const [mounted, setMounted] = useState(false);
  const [cubes, setCubes] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate cube data on client-side only
    setCubes(
      [...Array(8)].map((_, index) => ({
        id: index,
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto">
        {/* 3D 404 Text */}
        <div className="relative mb-12">
          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12rem] md:text-[16rem] font-black text-white leading-none relative"
            style={{
              transform: 'perspective(1000px) rotateX(15deg)',
              textShadow: '0 20px 40px rgba(255, 255, 255, 0.3), 0 40px 80px rgba(255, 255, 255, 0.15)',
            }}
          >
            404
            {/* 3D Shadow Effect */}
            <div
              className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-slate-600 -z-10"
              style={{
                transform: 'translateY(8px) translateX(8px) perspective(1000px) rotateX(15deg)',
                filter: 'blur(2px)',
              }}
            >
              404
            </div>
            <div
              className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-slate-700 -z-20"
              style={{
                transform: 'translateY(16px) translateX(16px) perspective(1000px) rotateX(15deg)',
                filter: 'blur(4px)',
              }}
            >
              404
            </div>
          </motion.div>
        </div>

        {/* Floating 3D Cubes */}
        <div className="absolute inset-0 pointer-events-none">
          {mounted && cubes.map((cube) => (
            <motion.div
              key={cube.id}
              className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600"
              style={{
                left: `${cube.left}%`,
                top: `${cube.top}%`,
                transform: `perspective(1000px) rotateX(${cube.rotateX}deg) rotateY(${cube.rotateY}deg)`,
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: cube.duration,
                repeat: Infinity,
                delay: cube.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>

          {/* 3D Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-xl flex items-center space-x-3 relative overflow-hidden"
                style={{
                  transform: 'perspective(1000px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Home size={20} />
                <span>Back to Home</span>
                
                {/* 3D Button Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-8 py-4 border-2 border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center space-x-3"
              style={{
                transform: 'perspective(1000px)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Ground Plane */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent"
          style={{
            transform: 'perspective(1000px) rotateX(85deg)',
            transformOrigin: 'bottom center',
          }}
        />
      </div>
    </div>
  );
}
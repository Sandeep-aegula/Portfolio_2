"use client";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const HomeProjects = lazy(() => import('./components/HomeProjects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const PixelSnow = lazy(() => import('./components/PixelSnow'));

import Loader from './components/Loader';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for faster initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, process.env.NODE_ENV === 'production' ? 800 : 1500); // Faster in production

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }
  return (
    <main className="bg-[#060010] text-slate-50 min-h-screen selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Pixel Snow Background Animation - Optimized for production */}
      <Suspense fallback={<div />}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.008} // Slightly larger for better performance
          minFlakeSize={1.2}
          pixelResolution={process.env.NODE_ENV === 'production' ? 150 : 250} // Reduce quality in production
          speed={0.4} // Slower for better performance
          density={process.env.NODE_ENV === 'production' ? 0.05 : 0.10} // Reduce density in production
          direction={125}
          brightness={0.3} // Dimmer for less GPU load
          className="pointer-events-none"
          style={{ zIndex: 0 }}
        />
      </Suspense>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        
        {/* Lazy load below-the-fold components */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
          <About />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
          <HomeProjects />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
          <Achievements />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
          <Contact />
        </Suspense>
        
        <footer className="py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Brand Section */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sandeep Aegula</h3>
                  <p className="text-slate-600 text-sm">Full Stack Developer</p>
                </div>
                
                {/* Quick Links */}
                <div className="text-center">
                  <div className="flex justify-center space-x-6 text-sm">
                    <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">Home</a>
                    <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                    <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
                    <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
                  </div>
                </div>
                
                {/* Copyright & Tech Stack */}
                <div className="text-center md:text-right">
                  <p className="text-slate-600 text-sm mb-1">© 2025 All rights reserved</p>
                  <p className="text-slate-500 text-xs">Built with Next.js & Tailwind CSS</p>
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-slate-500 text-xs">
                  Designed & Developed with ❤️ • Available for freelance opportunities
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
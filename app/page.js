"use client";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LightSnow from './components/LightSnow';

// Lazy load non-critical components

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const HomeProjects = lazy(() => import('./components/HomeProjects'));
const Experience = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const PixelSnow = lazy(() => import('./components/PixelSnow'));

import Loader from './components/Loader';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimal delay just to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Minimal delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }
  return (
    <main className="bg-[#060010] text-slate-50 min-h-screen selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Pixel Snow Background Animation - Optimized for production */}
      <Suspense fallback={<div />}>
        {/* <PixelSnow
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
        /> */}
        <LightSnow
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
          <Experience />
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

      </div>
    </main>
  );
}
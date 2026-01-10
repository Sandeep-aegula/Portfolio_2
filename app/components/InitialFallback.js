import { memo } from 'react';

/**
 * Lightweight fallback for initial loading
 * Shows immediately while heavier components load
 */
const InitialFallback = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
    <div className="text-center space-y-4">
      {/* Simple spinner without animations for instant loading */}
      <div className="w-8 h-8 border-2 border-slate-300 border-t-blue-400 rounded-full animate-spin mx-auto" />
      <h1 className="text-2xl font-bold text-white">Sandeep Aegula</h1>
      <p className="text-slate-300">Loading...</p>
    </div>
  </div>
));

InitialFallback.displayName = 'InitialFallback';

/**
 * Critical page shell that loads instantly
 */
export const PageShell = memo(() => (
  <div className="min-h-screen bg-[#060010] text-slate-50">
    {/* Header placeholder */}
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-slate-900/20 backdrop-blur-sm rounded-full px-6 py-3 animate-pulse">
        <div className="w-64 h-6 bg-slate-700 rounded"></div>
      </div>
    </nav>
    
    {/* Hero section placeholder */}
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="h-16 bg-slate-800 rounded-lg animate-pulse mx-auto max-w-2xl"></div>
          <div className="h-8 bg-slate-800 rounded-lg animate-pulse mx-auto max-w-xl"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  </div>
));

PageShell.displayName = 'PageShell';

export default InitialFallback;
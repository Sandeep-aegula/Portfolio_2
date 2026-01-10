import { memo } from 'react';

/**
 * Lightweight suspense fallbacks for different sections
 */
export const SectionFallback = memo(({ height = 'min-h-screen', title = 'Loading...' }) => (
  <section className={`${height} flex items-center justify-center px-4`}>
    <div className="text-center space-y-4">
      <div className="w-8 h-8 border-2 border-slate-300 border-t-blue-400 rounded-full animate-spin mx-auto" />
      <p className="text-slate-400 text-sm">{title}</p>
    </div>
  </section>
));

export const CardFallback = memo(() => (
  <div className="bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700 animate-pulse">
    <div className="space-y-4">
      <div className="h-6 bg-slate-700 rounded w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6"></div>
    </div>
  </div>
));

export const GridFallback = memo(() => (
  <div className="grid lg:grid-cols-2 gap-8">
    {[1, 2, 3, 4].map((i) => (
      <CardFallback key={i} />
    ))}
  </div>
));

SectionFallback.displayName = 'SectionFallback';
CardFallback.displayName = 'CardFallback';
GridFallback.displayName = 'GridFallback';

export default SectionFallback;
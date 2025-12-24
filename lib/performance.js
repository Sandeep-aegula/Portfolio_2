// Performance monitoring utility for production
// Add this to your main layout or page component

export const measurePerformance = () => {
  // Only run in production
  if (process.env.NODE_ENV !== 'production') return;

  // Core Web Vitals monitoring
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      switch (entry.entryType) {
        case 'largest-contentful-paint':
          console.log('LCP:', entry.startTime);
          break;
        case 'first-input':
          console.log('FID:', entry.processingStart - entry.startTime);
          break;
        case 'layout-shift':
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
          break;
      }
    });
  });

  // Observe Core Web Vitals
  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

  // Monitor FCP
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  if (navigationEntry) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          console.log('FCP:', fcpEntry.startTime);
        }
      }, 0);
    });
  }

  // Monitor memory usage (if available)
  if ('memory' in performance) {
    setInterval(() => {
      const memory = performance.memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
        console.warn('High memory usage detected:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + 'MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + 'MB'
        });
      }
    }, 30000); // Check every 30 seconds
  }
};

// Device performance detection
export const getDevicePerformance = () => {
  // Check hardware concurrency
  const cores = navigator.hardwareConcurrency || 4;
  
  // Check memory (if available)
  const memory = navigator.deviceMemory || 4;
  
  // Check connection speed
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const effectiveType = connection?.effectiveType || '4g';
  
  // Score calculation
  let score = 0;
  
  // CPU score
  if (cores >= 8) score += 3;
  else if (cores >= 4) score += 2;
  else score += 1;
  
  // Memory score  
  if (memory >= 8) score += 3;
  else if (memory >= 4) score += 2;
  else score += 1;
  
  // Network score
  if (effectiveType === '4g') score += 2;
  else if (effectiveType === '3g') score += 1;
  else score += 0;
  
  // Device classification
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
};

// Performance optimization settings
export const getOptimizedSettings = (performance = 'medium') => {
  const settings = {
    high: {
      particleDensity: 0.15,
      animationDuration: 0.6,
      pixelResolution: 300,
      enableLottieLoop: true,
      frameRate: 60
    },
    medium: {
      particleDensity: 0.08,
      animationDuration: 0.4,
      pixelResolution: 200,
      enableLottieLoop: true,
      frameRate: 60
    },
    low: {
      particleDensity: 0.03,
      animationDuration: 0.2,
      pixelResolution: 100,
      enableLottieLoop: false,
      frameRate: 30
    }
  };
  
  return settings[performance] || settings.medium;
};
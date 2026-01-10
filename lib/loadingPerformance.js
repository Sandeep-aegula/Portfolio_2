/**
 * Performance monitoring utility for loading optimization
 * Safe for SSR
 */
export class LoadingPerformanceMonitor {
  constructor() {
    this.metrics = {
      startTime: null,
      loadComplete: null,
      firstPaint: null,
      firstContentfulPaint: null,
      domInteractive: null,
    };
    
    // Only initialize in browser
    if (typeof window !== 'undefined') {
      this.init();
    }
  }
  
  init() {
    this.metrics.startTime = performance.now();
    
    // Monitor paint events
    this.observePaintMetrics();
    
    // Monitor DOM events
    this.observeDOMEvents();
  }
  
  observePaintMetrics() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-paint') {
            this.metrics.firstPaint = entry.startTime;
          } else if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }
  }
  
  observeDOMEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.domInteractive = performance.now() - this.metrics.startTime;
    });
    
    window.addEventListener('load', () => {
      this.metrics.loadComplete = performance.now() - this.metrics.startTime;
      this.reportMetrics();
    });
  }
  
  markLoadingComplete() {
    this.metrics.loadComplete = performance.now() - this.metrics.startTime;
    this.reportMetrics();
  }
  
  reportMetrics() {
    const report = {
      'Loading Time': `${Math.round(this.metrics.loadComplete)}ms`,
      'First Paint': this.metrics.firstPaint ? `${Math.round(this.metrics.firstPaint)}ms` : 'N/A',
      'First Contentful Paint': this.metrics.firstContentfulPaint ? `${Math.round(this.metrics.firstContentfulPaint)}ms` : 'N/A',
      'DOM Interactive': `${Math.round(this.metrics.domInteractive)}ms`,
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Loading Performance Report');
      Object.entries(report).forEach(([key, value]) => {
        const color = this.getPerformanceColor(key, value);
        console.log(`%c${key}: ${value}`, `color: ${color}; font-weight: bold;`);
      });
      console.groupEnd();
    }
    
    return report;
  }
  
  getPerformanceColor(metric, value) {
    const time = parseInt(value);
    
    if (metric.includes('Loading')) {
      return time < 1000 ? '#10b981' : time < 2000 ? '#f59e0b' : '#ef4444';
    }
    
    if (metric.includes('Paint')) {
      return time < 500 ? '#10b981' : time < 1000 ? '#f59e0b' : '#ef4444';
    }
    
    return '#6b7280';
  }
}

// Safe initialization for SSR
let performanceMonitor = null;
if (typeof window !== 'undefined') {
  try {
    performanceMonitor = new LoadingPerformanceMonitor();
  } catch (error) {
    console.warn('Performance monitor failed to initialize:', error);
    performanceMonitor = null;
  }
}

export default performanceMonitor;
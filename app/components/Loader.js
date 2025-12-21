'use client';

import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';

export default function Loader({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Loading Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <DotLottieReact
            src="/loadingV2.json"
            loop
            autoplay
            style={{ width: 80, height: 80 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
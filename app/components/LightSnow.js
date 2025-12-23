'use client';

import { useEffect, useState } from 'react';

export default function LightSnow({
  className = '',
  style = {},
  density = 50,
  color = '#ffffff',
  opacity = 0.6
}) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes = [];
    for (let i = 0; i < density; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.6 + 0.4,
        fontSize: Math.random() * 10 + 10,
        animationDelay: Math.random() * 2,
      });
    }
    setSnowflakes(flakes);
  }, [density]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={style}>
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100vh) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(100px);
          }
        }
        .snowflake {
          position: absolute;
          top: -10px;
          user-select: none;
          pointer-events: none;
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            opacity: flake.opacity * opacity,
            fontSize: `${flake.fontSize}px`,
            color: color,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            transform: 'translateZ(0)', // Force hardware acceleration
            willChange: 'transform', // Optimize for animations
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
'use client';

import { LazyMotion, domAnimation, m } from 'motion/react';
import { usePathname } from 'next/navigation';
import PillNav from './PillNav';

export default function Navbar() {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/Projects';

  // Define navigation items based on current page
  const getNavItems = () => {
    if (isProjectsPage) {
      // When on Projects page, section links should go to home page with anchors
      return [
        { label: 'Home', href: '/#home' },
        { label: 'About', href: '/#about' },
        { label: 'Projects', href: '/Projects' },
        { label: 'Contact', href: '/#contact' }
      ];
    } else {
      // When on home page, use anchor links for smooth scrolling
      return [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ];
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="w-full flex justify-center px-4">
          <PillNav
            items={getNavItems()}
            activeHref={isProjectsPage ? '/Projects' : '#home'}
            ease={[0.25, 0.1, 0.25, 1.0]}
            baseColor="#ffffff"
            pillColor="#0f172a"
            hoveredPillTextColor="#0f172a"
            pillTextColor="#f8fafc"
          />
        </div>
      </m.nav>
    </LazyMotion>
  );
}

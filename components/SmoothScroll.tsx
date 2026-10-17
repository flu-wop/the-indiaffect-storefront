'use client';

import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';

// Inertial smooth-scrolling for the whole storefront. Skipped entirely for
// visitors who ask their OS for reduced motion.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !reduced,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Image that drifts slowly inside its frame as the page scrolls. The frame
// controls size (give the className an aspect ratio / height).
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className = '',
  priority = false,
  /** Extra zoom so the drift never reveals an edge, and to crop tighter */
  zoom = 1.15,
  /** transform-origin / focal point of the crop */
  origin = '50% 50%',
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  zoom?: number;
  origin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale: zoom, transformOrigin: origin }} className="absolute inset-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}

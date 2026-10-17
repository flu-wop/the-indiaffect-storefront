'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

// A big editorial line whose words light up one by one as the block scrolls
// through the viewport. Wrap a word in *asterisks* to light it up pink.
export default function Statement({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.5'],
  });
  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={`flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 text-center font-heading text-[clamp(1.9rem,4.6vw,3.9rem)] font-medium leading-[1.12] tracking-[-0.01em] ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const accent = /^\*.*\*[.,;:!?—”"]*$/.test(word);
        const clean = accent ? word.replace(/\*/g, '') : word;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} accent={accent}>
            {clean}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? 'italic text-pink' : 'text-ink'}>
      {children}
    </motion.span>
  );
}

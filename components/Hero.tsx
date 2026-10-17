'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FOUNDER } from '@/lib/demo-data';
import ParallaxImage from '@/components/ParallaxImage';
import Magnetic from '@/components/Magnetic';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      {/* Atmosphere: pink glow + film grain */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[75vh] w-[75vh] rounded-full bg-pink/25 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[55vh] w-[55vh] rounded-full bg-pink/10 blur-[140px]" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />

      <div className="frame grid items-center gap-12 py-14 md:py-20 lg:min-h-[calc(100svh-8.5rem)] lg:grid-cols-12 lg:gap-8">
        {/* Type */}
        <div className="lg:col-span-7">
          <motion.p {...rise(0.05)} className="eyebrow mb-6">
            Create · Influence · Evolve
          </motion.p>

          <motion.p {...rise(0.15)} className="mb-2 font-script text-5xl leading-none text-paper md:text-7xl">
            Excuse me
          </motion.p>

          <h1 className="display-xl font-display text-paper">
            <motion.span {...rise(0.25)} className="block">
              I Have An
            </motion.span>
            <motion.span {...rise(0.35)} className="block text-pink">
              Affect
            </motion.span>
            <motion.span {...rise(0.45)} className="block">
              On People
            </motion.span>
          </h1>

          <motion.p {...rise(0.6)} className="mt-8 max-w-md text-base leading-relaxed text-paper/65">
            Virgin and raw hair, statement merch, and the &ldquo;Broke 2 Boss&rdquo; business
            series — built by India Renee.
          </motion.p>

          <motion.div {...rise(0.72)} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.25}>
              <Link href="/collections/merch" className="btn-primary">
                Shop Merch <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="/collections/hair-collection" className="btn-outline-light">
                Shop Hair
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-sm border border-pink/70" />
          <ParallaxImage
            src={FOUNDER.image}
            alt={FOUNDER.name}
            sizes="(max-width: 1024px) 90vw, 40vw"
            priority
            zoom={1.55}
            origin="58% 26%"
            className="aspect-[4/5] w-full rounded-sm bg-ink-deep"
          />
          <div className="absolute bottom-5 left-5 rounded-full bg-paper/95 px-5 py-2.5 text-ink shadow-xl">
            <p className="text-[10px] font-semibold uppercase leading-none tracking-label text-pink">Founder</p>
            <p className="mt-1 font-heading text-base leading-none">{FOUNDER.name}</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-label text-paper/40 lg:flex">
        Scroll
        <span className="h-8 w-px animate-soft-pulse bg-paper/40" />
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Marquee from '@/components/Marquee';
import Statement from '@/components/Statement';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import FeaturedProduct from '@/components/FeaturedProduct';
import ParallaxImage from '@/components/ParallaxImage';
import Reveal from '@/components/Reveal';
import { DEMO_PRODUCTS, HERO_IMAGES, FOUNDER } from '@/lib/demo-data';

// The live store's three navigation tiles, staged as big editorial rows
const ENTRY_ROWS = [
  { n: '01', title: 'The IndiAffect Store', cta: 'Visit store', href: '/collections/all' },
  { n: '02', title: 'Virgin & Raw Hair', cta: 'Shop hair collection', href: '/collections/hair-collection' },
  { n: '03', title: 'Business Resources', cta: 'Explore “Broke 2 Boss” Series', href: '/collections/business-collection' },
];

const SERVICES = [
  { n: '01', title: 'Hair Appointments', cta: 'View Policies', href: '/faq' },
  { n: '02', title: 'Brand Promotions', cta: 'View Rates', href: '/contact' },
  { n: '03', title: 'Business 1:1', cta: 'Schedule A Call', href: '/contact' },
];

export default function HomePage() {
  const merchProducts = DEMO_PRODUCTS.filter((p) => p.category === 'merch');

  return (
    <>
      <Hero />

      <TrustBar />

      {/* Ticker */}
      <Marquee
        items={['Create', 'Influence', 'Evolve']}
        duration={45}
        className="border-b border-ink/10 py-6"
        itemClassName="font-display text-5xl uppercase text-outline text-ink md:text-7xl"
      />

      {/* Where to go — Store / Hair / Business */}
      <section className="bg-paper">
        <div className="frame">
          {ENTRY_ROWS.map((row) => (
            <Reveal key={row.n}>
              <Link
                href={row.href}
                className="group relative flex items-center gap-5 border-b border-ink/10 py-8 transition-all duration-500 ease-cinematic hover:-mx-5 hover:bg-ink hover:px-5 sm:gap-8 md:py-11 md:hover:-mx-8 md:hover:px-8"
              >
                <span className="w-8 shrink-0 text-xs font-semibold tracking-label text-silver transition-colors group-hover:text-pink sm:w-12">
                  {row.n}
                </span>
                <span className="display-lg flex-1 text-ink transition-all duration-500 ease-cinematic group-hover:translate-x-2 group-hover:text-paper">
                  {row.title}
                </span>
                <span className="hidden text-right text-xs font-semibold uppercase tracking-label text-silver transition-colors group-hover:text-paper md:block">
                  {row.cta}
                </span>
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-lg transition-all duration-500 ease-cinematic group-hover:-rotate-45 group-hover:border-pink group-hover:bg-pink group-hover:text-ink md:h-14 md:w-14"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand statement — words light up as you scroll (India's own words) */}
      <section className="bg-paper py-24 md:py-36">
        <div className="frame">
          <Reveal>
            <p className="eyebrow mb-8 justify-center">The brand</p>
          </Reveal>
          <div className="mx-auto max-w-5xl">
            <Statement text="This brand was designed to inspire women to embrace their *true* *selves,* *unapologetically.*" />
          </div>
        </div>
      </section>

      {/* Trending Now — single featured product, as on the live store */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="frame">
          <SectionHeading eyebrow="Featured" title="Trending Now" tone="dark" className="mb-14 md:mb-20" />
          <FeaturedProduct product={DEMO_PRODUCTS[0]} />
        </div>
      </section>

      {/* The IndiAffect Merch */}
      <section className="bg-paper py-20 md:py-28">
        <div className="frame">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <SectionHeading eyebrow="Merch" title="The IndiAffect Merch" />
            <Reveal delay={0.15}>
              <Link href="/collections/merch" className="btn-secondary">
                Shop All Merch <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
            {merchProducts.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 0.07}>
                <ProductCard product={product} index={i + 1} />
              </Reveal>
            ))}
            <Reveal delay={0.21}>
              <Link
                href="/collections/merch"
                className="group relative hidden aspect-[4/5] flex-col justify-between overflow-hidden rounded-sm bg-pink p-7 text-ink transition-all duration-500 ease-cinematic hover:bg-ink hover:text-paper lg:flex"
              >
                <span className="text-xs font-semibold tracking-label">08</span>
                <span className="display-md leading-[0.95]" style={{ fontSize: 'clamp(2.25rem, 3.4vw, 3.5rem)' }}>
                  Shop All Merch
                </span>
                <span aria-hidden className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full border border-current text-lg transition-transform duration-500 ease-cinematic group-hover:-rotate-45">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campaign banner — the live store's hero photo, full bleed */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative mx-auto aspect-[1366/622] w-full max-w-[2000px]">
          <ParallaxImage
            src={HERO_IMAGES.primary}
            alt="The IndiAffect — I Have An Affect On People"
            sizes="100vw"
            zoom={1.08}
            className="h-full w-full"
          />
        </div>
      </section>

      {/* Digital download ticker — pink */}
      <Marquee
        items={['Everything Included Digital Download Sale $99']}
        duration={32}
        separator={<span className="text-ink">★</span>}
        className="bg-pink py-5"
        itemClassName="font-display text-3xl uppercase text-ink md:text-5xl"
      />

      {/* Services */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="frame">
          <SectionHeading eyebrow="Hair · Brands · Business" title="Services" tone="dark" className="mb-12 md:mb-16" />

          <div className="grid gap-px overflow-hidden rounded-sm border border-paper/15 bg-paper/15 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="bg-ink">
                <Link
                  href={s.href}
                  className="group flex h-full min-h-[15rem] flex-col justify-between p-7 transition-colors duration-500 ease-cinematic hover:bg-pink hover:text-ink md:min-h-[20rem] md:p-9"
                >
                  <span className="text-xs font-semibold tracking-label text-pink transition-colors group-hover:text-ink">{s.n}</span>
                  <div>
                    <h3 className="font-display text-4xl uppercase leading-none md:text-5xl">{s.title}</h3>
                    <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-paper/70 transition-colors group-hover:text-ink">
                      {s.cta}
                      <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5">→</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Contact The IndiAffect
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Meet The Founder */}
      <section className="bg-paper py-20 md:py-32">
        <div className="frame">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <div className="relative">
                <div aria-hidden className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-pink/70 md:block" />
                <ParallaxImage
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  zoom={1.5}
                  origin="58% 26%"
                  className="aspect-[4/5] w-full rounded-sm bg-paper-dim"
                />
              </div>
            </Reveal>

            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow mb-5">Meet The Founder</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-xl mb-8 text-ink">{FOUNDER.name}</h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mb-6 max-w-2xl font-heading text-2xl italic leading-snug text-ink md:text-3xl">
                  &ldquo;{FOUNDER.quote}&rdquo;
                </p>
                <p className="mb-8 max-w-xl text-silver-dark">{FOUNDER.tagline}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="font-display text-3xl uppercase leading-tight text-pink md:text-4xl">{FOUNDER.challenge}</p>
                <p className="mt-4 font-script text-4xl text-ink">{FOUNDER.signature.replace(/^-\s*/, '')}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

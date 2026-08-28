import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ProductCard from '@/components/ProductCard';
import FeaturedProduct from '@/components/FeaturedProduct';
import Reveal from '@/components/Reveal';
import { DEMO_PRODUCTS, HERO_IMAGES, FOUNDER } from '@/lib/demo-data';

export default function HomePage() {
  const merchProducts = DEMO_PRODUCTS.filter((p) => p.category === 'merch');

  return (
    <>
      {/* Hero — real photo, "Excuse Me / I Have An Affect On People" text is
          baked into the image itself, matching the live site exactly */}
      <section className="relative">
        <div className="relative w-full aspect-[1366/622]">
          <Image
            src={HERO_IMAGES.primary}
            alt="The IndiAffect — I Have An Affect On People"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Shipping / processing bar — matches the live site's real 2-column bar */}
      <TrustBar />

      {/* Three-tile nav block — matches the live site's Store / Hair / Business tiles */}
      <Reveal>
        <section className="border-b border-silver/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-silver/10">
            <Link href="/collections/all" className="p-8 hover:bg-paper-dim transition-colors">
              <h3 className="font-heading uppercase tracking-wide text-lg text-ink mb-2">The IndiAffect Store</h3>
              <span className="text-pink text-sm inline-flex items-center gap-1 group">
                Visit store <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/collections/hair-collection" className="p-8 hover:bg-paper-dim transition-colors">
              <h3 className="font-heading uppercase tracking-wide text-lg text-ink mb-2">Virgin & Raw Hair</h3>
              <span className="text-pink text-sm inline-flex items-center gap-1 group">
                Shop hair collection <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/collections/business-collection" className="p-8 hover:bg-paper-dim transition-colors">
              <h3 className="font-heading uppercase tracking-wide text-lg text-ink mb-2">Business Resources</h3>
              <span className="text-pink text-sm inline-flex items-center gap-1 group">
                Explore &ldquo;Broke 2 Boss&rdquo; Series <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Services — matches the live site's Hair Appointments / Brand
          Promotions / Business 1:1 section */}
      <Reveal>
        <section className="section">
          <div className="container">
            <h2 className="font-heading text-3xl text-ink mb-8">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div>
                <h3 className="font-heading text-lg text-ink mb-2">Hair Appointments</h3>
                <Link href="/faq" className="text-pink text-sm inline-flex items-center gap-1 group">
                  View Policies <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div>
                <h3 className="font-heading text-lg text-ink mb-2">Brand Promotions</h3>
                <Link href="/contact" className="text-pink text-sm inline-flex items-center gap-1 group">
                  View Rates <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div>
                <h3 className="font-heading text-lg text-ink mb-2">Business 1:1</h3>
                <Link href="/contact" className="text-pink text-sm inline-flex items-center gap-1 group">
                  Schedule A Call <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Contact The IndiAffect
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Trending Now — real site shows this as a single featured product
          (Virgin Hair Bundles), not a grid */}
      <Reveal>
        <section className="section bg-paper-dim">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
                <span className="text-pink mr-3">★</span>Trending Now<span className="text-pink ml-3">★</span>
              </h2>
            </div>
            <FeaturedProduct product={DEMO_PRODUCTS[0]} />
          </div>
        </section>
      </Reveal>

      {/* The IndiAffect Merch — separate section on the live site, plain
          heading (not star-styled), merch only (bundles excluded) */}
      <Reveal>
        <section className="section">
          <div className="container">
            <h2 className="font-heading text-3xl text-ink mb-8">The IndiAffect Merch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {merchProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Digital download marquee — matches the live site's second ticker */}
      <div className="bg-pink text-ink text-sm font-semibold uppercase tracking-wider overflow-hidden whitespace-nowrap py-3">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          {Array(6).fill('Everything Included Digital Download Sale $99  •  ').join('')}
        </div>
      </div>

      {/* Meet The Founder */}
      <Reveal>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">Meet The Founder</p>
                <h2 className="font-display uppercase text-3xl md:text-4xl text-ink mb-6 tracking-wide">
                  {FOUNDER.name}
                </h2>
                <p className="text-ink/90 text-lg mb-4 italic">&ldquo;{FOUNDER.quote}&rdquo;</p>
                <p className="text-silver mb-6">{FOUNDER.tagline}</p>
                <p className="text-pink font-heading text-xl tracking-wide mb-2">{FOUNDER.challenge}</p>
                <p className="text-silver text-sm">{FOUNDER.signature}</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

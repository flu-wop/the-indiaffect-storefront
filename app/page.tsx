import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ProductCard from '@/components/ProductCard';
import TextureSwatch from '@/components/TextureSwatch';
import NewsletterForm from '@/components/NewsletterForm';
import { DEMO_PRODUCTS, HERO_IMAGES, FOUNDER } from '@/lib/demo-data';

export default async function HomePage() {
  // Demo mode: real product data pulled from India's live store, held as static
  // data until the Shopify Storefront API is connected. Swap this for
  // getProducts(8) once real credentials are wired up.
  const products = DEMO_PRODUCTS;

  return (
    <>
      {/* Hero Section — real photo with "Excuse Me / I Have An Affect On
          People" text already baked in, so no text overlay needed here */}
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
        <div className="bg-ink py-8">
          <div className="container flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections/merch" className="btn-primary">
              Shop Merch
            </Link>
            <Link href="/collections/hair-collection" className="border-2 border-paper text-paper px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-paper hover:text-ink transition-all">
              Shop Hair Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured / Best Sellers Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">
              Customer Favorites
            </p>
            <h2 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
              <span className="text-pink mr-3">★</span>Best Sellers<span className="text-pink ml-3">★</span>
            </h2>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-silver text-lg">
                Connect Shopify to see products here
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="skeleton h-96 rounded-lg" />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/collections/all" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Texture Section */}
      <section className="section bg-paper-dim">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">
              Find Your Perfect Match
            </p>
            <h2 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
              <span className="text-pink mr-3">★</span>Shop By Texture<span className="text-pink ml-3">★</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Texture Swatches — using real store photos as stand-ins until
                dedicated texture photography is shot */}
            <TextureSwatch
              title="Straight"
              image={DEMO_PRODUCTS[1].featuredImage.url}
              href="/collections/straight"
            />
            <TextureSwatch
              title="Body Wave"
              image={DEMO_PRODUCTS[2].featuredImage.url}
              href="/collections/body-wave"
            />
            <TextureSwatch
              title="Deep Wave"
              image={DEMO_PRODUCTS[3].featuredImage.url}
              href="/collections/deep-wave"
            />
            <TextureSwatch
              title="Loose Wave"
              image={DEMO_PRODUCTS[4].featuredImage.url}
              href="/collections/loose-wave"
            />
            <TextureSwatch
              title="Kinky Curly"
              image={DEMO_PRODUCTS[5].featuredImage.url}
              href="/collections/kinky-curly"
            />
            <TextureSwatch
              title="Water Wave"
              image={DEMO_PRODUCTS[6].featuredImage.url}
              href="/collections/water-wave"
            />
          </div>
        </div>
      </section>

      {/* Shop by Length Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">
              Choose Your Length
            </p>
            <h2 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
              <span className="text-pink mr-3">★</span>Shop By Length<span className="text-pink ml-3">★</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'].map((length) => (
              <Link
                key={length}
                href={`/collections/all?length=${length}`}
                className="group relative aspect-square overflow-hidden rounded-lg border border-silver/20 hover:border-pink transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-paper-dim to-paper" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-heading-2 font-heading text-pink group-hover:scale-110 transition-transform">
                    {length}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Gallery / UGC Section */}
      <section className="section bg-paper-dim">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">
              Real Results
            </p>
            <h2 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
              <span className="text-pink mr-3">★</span>See It On Real Customers<span className="text-pink ml-3">★</span>
            </h2>
          </div>

          {/* Placeholder for Instagram feed or customer photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <div className="skeleton w-full h-full" />
                {/* Will be replaced with actual customer photos */}
                <div className="absolute inset-0 bg-paper/0 group-hover:bg-paper/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg className="w-8 h-8 text-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-silver text-sm">
              Tag us @theindiaffect to be featured
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Founder */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">
                Meet The Founder
              </p>
              <h2 className="font-display uppercase text-3xl md:text-4xl text-ink mb-6 tracking-wide">{FOUNDER.name}</h2>
              <p className="text-ink/90 text-lg mb-4 italic">
                &ldquo;{FOUNDER.quote}&rdquo;
              </p>
              <p className="text-silver mb-6">{FOUNDER.tagline}</p>
              <p className="text-pink font-heading text-xl tracking-wide mb-2">
                {FOUNDER.challenge}
              </p>
              <p className="text-silver text-sm">{FOUNDER.signature}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display uppercase text-2xl md:text-3xl text-ink mb-4 tracking-wide">
            <span className="text-pink mr-2">★</span>Stay In The Loop<span className="text-pink ml-2">★</span>
          </h2>
          <p className="text-silver mb-8">
            Get exclusive deals, hair care tips, and new product launches.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

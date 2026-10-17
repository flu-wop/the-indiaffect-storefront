import Link from 'next/link';
import { DemoProduct } from '@/lib/demo-data';
import ParallaxImage from '@/components/ParallaxImage';
import Reveal from '@/components/Reveal';

// The live store's "Trending Now" is a single featured product shown large
// (image + details side by side) — kept, now staged on black.
export default function FeaturedProduct({ product }: { product: DemoProduct }) {
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(price);
  const installment = (price / 2).toFixed(2);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-6">
        <div className="relative">
          {/* offset pink outline */}
          <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-pink/60 md:block" />
          {product.featuredImage && (
            <ParallaxImage
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/5] w-full rounded-sm bg-ink-deep"
              zoom={1.12}
            />
          )}
          {product.available === false && (
            <span className="absolute left-4 top-4 rounded-full border border-pink/60 bg-ink/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-label text-pink backdrop-blur">
              Sold Out
            </span>
          )}
        </div>
      </Reveal>

      <div className="lg:col-span-6">
        <Reveal delay={0.05}>
          <p className="eyebrow mb-5">The IndiAffect</p>
        </Reveal>
        <Reveal delay={0.12}>
          <h3 className="display-lg mb-6 font-display text-paper">{product.title}</h3>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-2 font-heading text-3xl text-paper">{formattedPrice} <span className="text-base text-paper/50">USD</span></p>
          <p className="mb-8 text-sm text-paper/60">
            Pay in 2 interest-free installments of <span className="font-medium text-paper">${installment}</span> with Shop
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={`/products/${product.handle}`} className="btn-primary">
              {product.available === false ? 'Notify Me When Back' : 'View Full Details'}
              <span aria-hidden>→</span>
            </Link>
            {product.available === false && (
              <Link href={`/products/${product.handle}`} className="btn-outline-light">
                View Full Details
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

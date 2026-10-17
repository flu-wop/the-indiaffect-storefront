import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEMO_PRODUCTS, getProductByHandle } from '@/lib/demo-data';
import ProductGallery from '@/components/ProductGallery';
import AddToCartForm from '@/components/AddToCartForm';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return DEMO_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(price);

  const gallery = 'gallery' in product && product.gallery ? product.gallery : product.featuredImage ? [product.featuredImage.url] : [];

  const related = DEMO_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <section className="bg-paper py-10 md:py-16">
        <div className="frame">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-[11px] font-semibold uppercase tracking-label text-silver">
            <Link href="/" className="transition-colors hover:text-pink">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/collections/all" className="transition-colors hover:text-pink">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery images={gallery} title={product.title} />
            </div>

            {/* Sticky buy column */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow mb-4">The IndiAffect</p>
                <h1 className="display-lg mb-5 font-display text-ink" style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}>
                  {product.title}
                </h1>
                <p className="mb-6 font-heading text-3xl text-ink">{formattedPrice}</p>

                {product.description && (
                  <p className="mb-8 leading-relaxed text-silver-dark">{product.description}</p>
                )}

                <AddToCartForm product={product} price={price} />

                <ul className="mt-10 space-y-3 border-t border-ink/10 pt-8 text-sm text-silver-dark">
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Fast 5-7 day US shipping
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure checkout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-dim py-16 md:py-24">
          <div className="frame">
            <Reveal>
              <h2 className="display-md mb-10 text-ink md:mb-14">You May Also Like</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 0.07}>
                  <ProductCard product={p} index={i + 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

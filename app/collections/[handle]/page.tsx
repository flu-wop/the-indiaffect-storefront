import Link from 'next/link';
import { COLLECTIONS, getProductsByCollection } from '@/lib/demo-data';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return Object.keys(COLLECTIONS).map((handle) => ({ handle }));
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = COLLECTIONS[handle];
  const title = collection?.title ?? handle.replace(/-/g, ' ');
  const products = getProductsByCollection(handle);

  return (
    <>
      {/* Title band */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[60vh] w-[60vh] rounded-full bg-pink/20 blur-[130px]" />
        <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />
        <div className="frame py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-[11px] font-semibold uppercase tracking-label text-paper/50">
            <Link href="/" className="transition-colors hover:text-pink">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-paper">Collection</span>
          </nav>
          <h1 className="display-xl font-display text-paper">{title}</h1>
          <p className="mt-6 text-xs font-semibold uppercase tracking-label text-pink">
            {products.length} {products.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="frame">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
              {products.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 0.07}>
                  <ProductCard product={p} index={i + 1} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="font-display text-4xl uppercase text-ink md:text-5xl">Nothing here yet</p>
              <p className="mb-8 mt-4 text-silver">Check back soon, or explore what&apos;s live now.</p>
              <Link href="/collections/all" className="btn-ink">
                Shop All Products
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

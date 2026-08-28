import Link from 'next/link';
import { COLLECTIONS, getProductsByCollection } from '@/lib/demo-data';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return Object.keys(COLLECTIONS).map((handle) => ({ handle }));
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = COLLECTIONS[handle];
  const title = collection?.title ?? handle.replace(/-/g, ' ');
  const products = getProductsByCollection(handle);

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
            <span className="text-pink mr-3">★</span>{title}<span className="text-pink ml-3">★</span>
          </h1>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-silver text-lg mb-2">Nothing in this collection yet.</p>
            <p className="text-silver text-sm mb-8">Check back soon, or explore what's live now.</p>
            <Link href="/collections/all" className="btn-secondary">
              Shop All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEMO_PRODUCTS, getProductByHandle } from '@/lib/demo-data';
import ProductGallery from '@/components/ProductGallery';
import AddToCartForm from '@/components/AddToCartForm';
import ProductCard from '@/components/ProductCard';

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
    <div className="section">
      <div className="container">
        {/* Breadcrumb */}
        <div className="text-xs text-silver mb-8 uppercase tracking-wide">
          <Link href="/" className="hover:text-pink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={gallery} title={product.title} />

          <div>
            <h1 className="font-heading text-3xl md:text-4xl text-ink mb-3">{product.title}</h1>
            <p className="text-pink text-2xl font-semibold mb-6">{formattedPrice}</p>

            {product.description && (
              <p className="text-silver-dark mb-8 leading-relaxed">{product.description}</p>
            )}

            <AddToCartForm product={product} price={price} />

            <div className="mt-10 pt-8 border-t border-silver/10 space-y-3 text-sm text-silver">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fast 5-7 day US shipping
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure checkout
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display uppercase text-2xl md:text-3xl text-ink mb-8 tracking-wide">
              <span className="text-pink mr-2">★</span>You May Also Like<span className="text-pink ml-2">★</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { DemoProduct } from '@/lib/demo-data';

// Matches the live site's Shopify "featured product" section: a single
// product shown large (image + details side by side), not a grid.
export default function FeaturedProduct({ product }: { product: DemoProduct }) {
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(price);
  const installment = (price / 2).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-paper rounded-lg overflow-hidden">
      <div className="relative aspect-square lg:aspect-auto">
        {product.featuredImage && (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="flex flex-col justify-center py-8 lg:py-0">
        <p className="text-pink text-xs uppercase tracking-widest mb-2 font-semibold">The IndiAffect</p>
        <h3 className="font-heading text-3xl md:text-4xl text-ink mb-4">{product.title}</h3>
        <p className="text-ink text-xl mb-2">{formattedPrice} USD</p>
        <p className="text-silver text-sm mb-6">
          Pay in 2 interest-free installments of <span className="text-ink font-medium">${installment}</span> with Shop
        </p>
        {product.available === false && (
          <span className="inline-block w-fit bg-paper-dim border border-pink/40 text-pink text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Sold Out
          </span>
        )}
        <Link href={`/products/${product.handle}`} className="text-pink font-medium inline-flex items-center gap-1 group w-fit">
          View full details <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

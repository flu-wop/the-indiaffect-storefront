import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    featuredImage?: {
      url: string;
      altText?: string;
      width: number;
      height: number;
    };
    available?: boolean;
    description?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(price);

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block card-hover"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-paper-dim">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-silver/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Sold out ribbon */}
        {product.available === false && (
          <div className="absolute top-3 left-3 bg-paper/90 border border-pink/60 text-pink text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            Sold Out
          </div>
        )}

        {/* Quick Add / Notify Me - Shows on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full btn-primary text-xs py-3">
            {product.available === false ? 'Notify Me When Back' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-heading text-base md:text-lg text-ink group-hover:text-pink transition-colors line-clamp-2">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-silver text-xs line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="text-pink font-semibold">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}

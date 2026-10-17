'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

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
  /** Optional position number shown on the tile (editorial detail) */
  index?: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [loaded, setLoaded] = useState(false);
  const { addItem } = useCart();
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(price);
  const soldOut = product.available === false;
  const href = `/products/${product.handle}`;

  const handleQuickAdd = () => {
    if (soldOut) return;
    addItem({
      id: product.id,
      handle: product.handle,
      title: product.title,
      price,
      image: product.featuredImage?.url || '',
    });
  };

  return (
    <article className="group">
      {/* Image */}
      <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-paper-dim">
        <Link href={href} className="absolute inset-0 block" aria-label={product.title}>
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              onLoad={() => setLoaded(true)}
              className={`object-cover transition-all duration-[900ms] ease-cinematic group-hover:scale-[1.06] ${
                loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
              }`}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg className="h-16 w-16 text-silver/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          )}
        </Link>

        {index !== undefined && (
          <span className="pointer-events-none absolute left-3 top-3 font-display text-sm leading-none text-paper mix-blend-difference">
            {String(index).padStart(2, '0')}
          </span>
        )}

        {soldOut && (
          <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-pink/60 bg-paper/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-pink">
            Sold Out
          </div>
        )}

        {/* Quick add: slides up on hover (desktop); persistent round button on touch */}
        {!soldOut && (
          <>
            <button
              onClick={handleQuickAdd}
              aria-label={`Quick add ${product.title}`}
              className="absolute inset-x-3 bottom-3 hidden translate-y-3 rounded-full bg-ink py-3 text-[11px] font-semibold uppercase tracking-label text-paper opacity-0 transition-all duration-500 ease-cinematic hover:bg-pink hover:text-ink group-hover:translate-y-0 group-hover:opacity-100 md:block"
            >
              Quick Add
            </button>
            <button
              onClick={handleQuickAdd}
              aria-label={`Quick add ${product.title}`}
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-xl leading-none text-ink shadow-lg md:hidden"
            >
              +
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <Link href={href} className="flex items-start justify-between gap-4">
        <h3 className="line-clamp-2 font-heading text-base leading-snug text-ink transition-colors duration-300 group-hover:text-pink md:text-lg">
          {product.title}
        </h3>
        <p className="shrink-0 pt-0.5 text-sm font-semibold text-ink">{formattedPrice}</p>
      </Link>
    </article>
  );
}

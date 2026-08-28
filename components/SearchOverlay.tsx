'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DEMO_PRODUCTS } from '@/lib/demo-data';

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      // Focus after the open transition starts
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return DEMO_PRODUCTS.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-[80] transition-opacity duration-200 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-paper max-w-xl mx-auto mt-24 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-silver/10">
          <svg className="w-5 h-5 text-silver shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="flex-1 outline-none text-ink placeholder:text-silver"
          />
          <button onClick={onClose} aria-label="Close search" className="text-silver hover:text-pink transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {query.trim() && (
          <div className="max-h-96 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-silver text-sm text-center py-8">No products found for &ldquo;{query}&rdquo;</p>
            ) : (
              results.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.handle}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-5 py-3 hover:bg-paper-dim transition-colors"
                >
                  <div className="relative w-12 h-14 shrink-0 bg-paper-dim rounded overflow-hidden">
                    {p.featuredImage && (
                      <Image src={p.featuredImage.url} alt={p.title} fill className="object-cover" sizes="48px" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-ink truncate">{p.title}</p>
                    <p className="text-pink text-sm font-medium">${p.priceRange.minVariantPrice.amount}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

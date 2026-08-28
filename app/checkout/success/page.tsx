'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const [orderNumber] = useState(() => `IA-${Math.floor(10000 + Math.random() * 89999)}`);

  // Clear the demo cart once the "order" is placed
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="section text-center">
      <div className="container max-w-xl">
        <div className="w-16 h-16 rounded-full bg-pink/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display uppercase text-3xl md:text-4xl text-ink mb-4 tracking-wide">
          Order Confirmed
        </h1>
        <p className="text-silver mb-2">
          Thanks for your order! A confirmation has been "sent" to your email.
        </p>
        <p className="text-sm text-silver mb-10">
          Order <span className="text-pink font-semibold">#{orderNumber}</span>
        </p>
        <div className="bg-paper-dim border border-pink/20 rounded-lg px-4 py-3 mb-10 text-sm text-ink">
          This is a demo confirmation — no real order was placed and no payment was charged.
        </div>
        <Link href="/collections/all" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export default function CheckoutPage() {
  const { lines, subtotal, updateQuantity, removeItem } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const shipping = subtotal > 200 ? 0 : subtotal > 0 ? 8 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    // Demo checkout — no real payment processor is wired up. This simulates
    // the confirmation step so the flow can be shown end-to-end.
    setTimeout(() => {
      router.push('/checkout/success');
    }, 900);
  };

  if (lines.length === 0) {
    return (
      <div className="section text-center">
        <div className="container">
          <p className="text-silver text-lg mb-6">Your cart is empty.</p>
          <Link href="/collections/all" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="bg-paper-dim border border-pink/20 rounded-lg px-4 py-3 mb-10 text-center text-sm text-ink">
          <span className="text-pink font-semibold">Demo Checkout</span> — this is a preview flow. No payment is processed.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handlePlaceOrder} className="space-y-8">
            <div>
              <h2 className="font-display uppercase text-xl text-ink mb-4 tracking-wide">Contact</h2>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
            </div>

            <div>
              <h2 className="font-display uppercase text-xl text-ink mb-4 tracking-wide">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input required placeholder="First name" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
                <input required placeholder="Last name" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
              </div>
              <input required placeholder="Address" className="w-full px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink mb-4" />
              <div className="grid grid-cols-3 gap-4">
                <input required placeholder="City" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
                <input required placeholder="State" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
                <input required placeholder="ZIP" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
              </div>
            </div>

            <div>
              <h2 className="font-display uppercase text-xl text-ink mb-4 tracking-wide">Payment</h2>
              <input required placeholder="Card number" className="w-full px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM / YY" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
                <input required placeholder="CVC" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
              </div>
            </div>

            <button type="submit" disabled={placing} className="btn-primary w-full disabled:opacity-60">
              {placing ? 'Placing Order…' : `Place Order — ${formatPrice(total)}`}
            </button>
          </form>

          {/* Order summary */}
          <div className="bg-paper-dim rounded-lg p-6 h-fit">
            <h2 className="font-display uppercase text-xl text-ink mb-6 tracking-wide">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {lines.map((line) => (
                <div key={line.id} className="flex gap-4">
                  <div className="relative w-16 h-20 shrink-0 bg-paper rounded overflow-hidden">
                    <Image src={line.image} alt={line.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink line-clamp-2">{line.title}</p>
                    <p className="text-xs text-silver mt-1">Qty {line.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-ink whitespace-nowrap">
                    {formatPrice(line.price * line.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-silver/20 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-silver">
                <span>Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-silver">
                <span>Shipping</span>
                <span className="text-ink">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold pt-2 border-t border-silver/20">
                <span className="text-ink">Total</span>
                <span className="text-pink">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

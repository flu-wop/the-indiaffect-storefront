'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export default function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-ink/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-paper z-[70] shadow-2xl transition-transform duration-300 ease-smooth flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-silver/10">
          <h2 className="font-display uppercase text-xl text-ink tracking-wide">
            Cart {itemCount > 0 && <span className="text-pink">({itemCount})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-2 hover:text-pink transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-silver">Your cart is empty.</p>
            <button onClick={closeCart} className="btn-secondary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {lines.map((line) => (
                <div key={line.id} className="flex gap-4">
                  <div className="relative w-20 h-24 shrink-0 bg-paper-dim rounded overflow-hidden">
                    <Image src={line.image} alt={line.title} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink line-clamp-2">{line.title}</p>
                    <p className="text-pink text-sm font-semibold mt-1">{formatPrice(line.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-silver/30 rounded">
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:text-pink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">{line.quantity}</span>
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:text-pink transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(line.id)}
                        className="text-xs text-silver hover:text-pink transition-colors uppercase tracking-wide"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-silver/10 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm text-silver">
                <span>Subtotal</span>
                <span className="text-ink font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-silver">Shipping and taxes calculated at checkout.</p>
              <Link href="/checkout" onClick={closeCart} className="btn-primary w-full text-center block">
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

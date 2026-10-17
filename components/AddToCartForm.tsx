'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

interface Props {
  product: {
    id: string;
    handle: string;
    title: string;
    available?: boolean;
    featuredImage?: { url: string };
  };
  price: number;
}

export default function AddToCartForm({ product, price }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notified, setNotified] = useState(false);

  if (product.available === false) {
    return (
      <div>
        <button
          onClick={() => setNotified(true)}
          disabled={notified}
          className="btn-primary w-full sm:w-auto disabled:opacity-60"
        >
          {notified ? "You're On The List" : 'Notify Me When Back'}
        </button>
        <p className="mt-3 text-xs text-silver">
          This item is currently sold out. We&apos;ll email you the moment it restocks.
        </p>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(
      {
        id: product.id,
        handle: product.handle,
        title: product.title,
        price,
        image: product.featuredImage?.url || '',
      },
      quantity
    );
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex w-fit items-center rounded-full border border-ink/20">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-12 w-12 items-center justify-center text-lg transition-colors hover:text-pink"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-12 w-12 items-center justify-center text-lg transition-colors hover:text-pink"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button onClick={handleAdd} className="btn-ink flex-1">
        Add To Cart
      </button>
    </div>
  );
}

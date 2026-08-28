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
        <p className="text-xs text-silver mt-3">
          This item is currently sold out. We'll email you the moment it restocks.
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
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center border border-silver/30 rounded w-fit">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="w-10 h-12 flex items-center justify-center hover:text-pink transition-colors"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-10 text-center">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="w-10 h-12 flex items-center justify-center hover:text-pink transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button onClick={handleAdd} className="btn-primary flex-1">
        Add To Cart
      </button>
    </div>
  );
}

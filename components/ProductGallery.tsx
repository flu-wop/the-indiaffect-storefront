'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative flex aspect-[4/5] items-center justify-center rounded-sm bg-paper-dim">
        <svg className="h-16 w-16 text-silver/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-dim">
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`${title} — image ${i + 1}`}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ease-cinematic ${i === active ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ))}
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold tracking-label text-ink">
            {active + 1} / {images.length}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 md:w-20 md:shrink-0 md:grid-cols-1 md:content-start">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-sm border transition-all duration-300 ${
                i === active ? 'border-pink ring-1 ring-pink' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

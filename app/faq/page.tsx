'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How long does shipping take?',
    a: 'Orders process in 1-5 business days, then ship via standard US shipping (3-7 business days). Free shipping applies on orders of 3+ hair bundles.',
  },
  {
    q: 'Do you accept returns?',
    a: 'Unopened merch can be returned within 14 days of delivery. For hygiene reasons, hair bundles and closures are final sale once the packaging is opened. See our Refund Policy for full details.',
  },
  {
    q: 'Is the hair really virgin/raw?',
    a: '100% — we source virgin, unprocessed bundles that haven\'t been chemically treated, so they hold color, curl, and style the same way your natural hair would.',
  },
  {
    q: 'What are the "Broke 2 Boss" digital products?',
    a: 'A growing series of ebooks and resources on building a brand from scratch — the same lessons India used to build The IndiAffect.',
  },
  {
    q: 'Can I book a 1:1 or brand promotion?',
    a: 'Yes — head to the Book page or Contact us with details on what you\'re looking for and we\'ll follow up with availability and rates.',
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
            <span className="text-pink mr-3">★</span>FAQ<span className="text-pink ml-3">★</span>
          </h1>
        </div>

        <div className="divide-y divide-silver/10 border-t border-b border-silver/10">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-medium text-ink pr-4">{item.q}</span>
                <span className={`text-pink text-xl shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && <p className="text-silver-dark text-sm pb-5 pr-8">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
            <span className="text-pink mr-3">★</span>Contact<span className="text-pink ml-3">★</span>
          </h1>
          <p className="text-silver mt-4">
            Questions about an order, brand promotions, or a business 1:1? Reach out below.
          </p>
        </div>

        {sent ? (
          <div className="text-center bg-paper-dim rounded-lg py-12 px-6">
            <p className="text-ink text-lg font-medium mb-2">Message sent!</p>
            <p className="text-silver text-sm">We'll get back to you within 1-2 business days.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
              <input required type="email" placeholder="Email" className="px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
            </div>
            <select className="w-full px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink text-silver-dark">
              <option>What's this about?</option>
              <option>Order question</option>
              <option>Brand promotion inquiry</option>
              <option>Business 1:1</option>
              <option>Something else</option>
            </select>
            <textarea required placeholder="Your message" rows={5} className="w-full px-4 py-3 border border-silver/30 rounded focus:outline-none focus:border-pink" />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

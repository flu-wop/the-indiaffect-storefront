export default function ShippingReturnsPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide text-center mb-12">
          <span className="text-pink mr-3">★</span>Shipping & Returns<span className="text-pink ml-3">★</span>
        </h1>

        <div className="space-y-8 text-silver-dark leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-ink mb-2">Processing & Delivery</h2>
            <p>Orders are processed within 1-5 business days. Once shipped, standard delivery takes 3-7 business days within the US. You'll receive a tracking link by email as soon as your order ships.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl text-ink mb-2">Free Shipping</h2>
            <p>Orders of 3 or more hair bundles ship free. All other orders ship at a flat rate calculated at checkout.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl text-ink mb-2">Returns</h2>
            <p>Unopened, unworn merch can be returned within 14 days of delivery for a refund or exchange. For hygiene reasons, hair bundles, closures, and frontals are final sale once the packaging has been opened. Digital products (ebooks, guides) are non-refundable once accessed.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl text-ink mb-2">Damaged or Incorrect Items</h2>
            <p>If your order arrives damaged or you received the wrong item, contact us within 48 hours of delivery with photos and we'll make it right.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

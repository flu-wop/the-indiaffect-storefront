export default function TermsOfServicePage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide text-center mb-12">
          <span className="text-pink mr-3">★</span>Terms of Service<span className="text-pink ml-3">★</span>
        </h1>
        <div className="space-y-6 text-silver-dark leading-relaxed text-sm">
          <p><strong className="text-ink">Placeholder terms — demo content only.</strong> Replace with real terms before launch, covering:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceptance of terms by using the site / placing an order</li>
            <li>Product descriptions, pricing, and availability disclaimers</li>
            <li>Order acceptance and cancellation rights</li>
            <li>Intellectual property (brand name, logo, "I Have That Affect On People" phrase, product photography)</li>
            <li>Limitation of liability</li>
            <li>Governing law / jurisdiction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

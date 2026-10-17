export default function RefundPolicyPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="page-title text-center mb-14">Refund Policy</h1>
        <div className="space-y-6 text-silver-dark leading-relaxed">
          <p>Approved refunds are issued to the original payment method within 5-10 business days of us receiving your return.</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Merch: refundable within 14 days if unopened and unworn</li>
            <li>Hair bundles, closures, frontals: final sale once opened, for hygiene reasons</li>
            <li>Digital products: non-refundable once downloaded/accessed</li>
            <li>Shipping costs are non-refundable unless the return is due to our error</li>
          </ul>
          <p className="text-sm">Questions about a specific order? <a href="/contact" className="text-pink hover:underline">Contact us</a> with your order number.</p>
        </div>
      </div>
    </div>
  );
}

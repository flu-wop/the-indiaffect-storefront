export default function PrivacyPolicyPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide text-center mb-12">
          <span className="text-pink mr-3">★</span>Privacy Policy<span className="text-pink ml-3">★</span>
        </h1>
        <div className="space-y-6 text-silver-dark leading-relaxed text-sm">
          <p><strong className="text-ink">Placeholder policy — demo content only.</strong> Replace with your actual privacy policy before this site goes live. A real policy should cover:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What personal information is collected (name, email, address, payment details) and why</li>
            <li>How order and browsing data is used (fulfillment, marketing emails, analytics)</li>
            <li>Which third parties data is shared with (payment processor, shipping carrier, email platform)</li>
            <li>Cookie and tracking usage</li>
            <li>How customers can request their data be deleted or corrected</li>
            <li>Contact information for privacy questions</li>
          </ul>
          <p>Shopify's built-in policy generator or a service like Termly can produce a compliant starting point once real vendors (payment processor, email tool) are locked in.</p>
        </div>
      </div>
    </div>
  );
}

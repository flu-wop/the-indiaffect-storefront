import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="section text-center">
      <div className="container max-w-md">
        <h1 className="font-display uppercase text-2xl md:text-4xl text-ink tracking-wide mb-6">
          <span className="text-pink mr-2">★</span>Account<span className="text-pink ml-2">★</span>
        </h1>
        <p className="text-silver mb-8">
          Customer accounts (order history, saved addresses, login) connect once this storefront is wired to Shopify's real customer accounts.
        </p>
        <Link href="/collections/all" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="section text-center">
      <div className="container max-w-md">
        <h1 className="page-title">Account</h1>
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

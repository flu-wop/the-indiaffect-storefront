export default function TrustBar() {
  return (
    <section className="bg-ink">
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-paper/10">
        <div className="flex items-center justify-center gap-4 py-8 px-6">
          <svg className="w-8 h-8 text-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375C2.754 3.75 2.25 4.254 2.25 4.875v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <span className="text-paper text-lg font-medium">Free Shipping $200 + Orders</span>
        </div>
        <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
          <span className="text-paper text-lg font-medium">Processing: 1-5 Days</span>
          <span className="text-paper text-lg font-medium">Delivery: 3-7 Days</span>
        </div>
      </div>
    </section>
  );
}

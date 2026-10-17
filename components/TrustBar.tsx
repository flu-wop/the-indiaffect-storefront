// Real shipping & processing facts from the live store, set as a clean
// three-column strip with hairline dividers.
const ITEMS = [
  { label: 'Shipping', value: 'Free on $200+ Orders' },
  { label: 'Processing', value: '1–5 Days' },
  { label: 'Delivery', value: '3–7 Days' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="frame">
        <dl className="grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1.5 px-6 py-7 text-center">
              <dt className="text-[11px] font-semibold uppercase tracking-label text-pink">{item.label}</dt>
              <dd className="font-display text-2xl uppercase text-ink md:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

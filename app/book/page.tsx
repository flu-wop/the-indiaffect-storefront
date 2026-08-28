import Link from 'next/link';

const SERVICES = [
  {
    title: 'Hair Appointments',
    desc: 'Install, styling, and consultation appointments with India.',
    cta: 'View Policies',
    href: '/faq',
  },
  {
    title: 'Brand Promotions',
    desc: 'Sponsored content and brand partnership packages.',
    cta: 'View Rates',
    href: '/contact',
  },
  {
    title: 'Business 1:1',
    desc: 'One-on-one coaching pulled from the Broke 2 Boss playbook.',
    cta: 'Schedule A Call',
    href: '/contact',
  },
];

export default function BookPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="text-center mb-14">
          <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
            <span className="text-pink mr-3">★</span>Book<span className="text-pink ml-3">★</span>
          </h1>
          <p className="text-silver mt-4">Services beyond the storefront — appointments, promotions, and coaching.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="border border-silver/15 rounded-lg p-8 text-center hover:border-pink/40 transition-colors">
              <h2 className="font-heading text-xl text-ink mb-3">{s.title}</h2>
              <p className="text-silver-dark text-sm mb-6">{s.desc}</p>
              <Link href={s.href} className="btn-secondary text-xs">
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

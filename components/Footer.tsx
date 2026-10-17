import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/demo-data';
import Marquee from '@/components/Marquee';

const SOCIALS = [
  {
    label: 'Facebook',
    href: SOCIAL_LINKS.facebook,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'TikTok',
    href: SOCIAL_LINKS.tiktok,
    path: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z',
  },
  {
    label: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { name: 'Bundles', href: '/collections/bundles' },
      { name: 'Closures & Frontals', href: '/collections/lace-collection' },
      { name: 'Wigs', href: '/collections/wigs' },
      { name: 'Merch', href: '/collections/merch' },
      { name: 'Digital Products', href: '/collections/digital-products' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Book', href: '/book' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping & Returns', href: '/shipping-returns' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Closing marquee */}
      <div className="border-y border-paper/10 py-6">
        <Marquee
          items={['Create', 'Influence', 'Evolve']}
          duration={50}
          itemClassName="font-display text-4xl uppercase text-outline text-paper/60 md:text-6xl"
        />
      </div>

      <div className="frame py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Wordmark + socials */}
          <div className="lg:col-span-5">
            <p className="leading-none">
              <span className="font-heading text-6xl md:text-7xl">Indi</span>
              <span className="font-script text-6xl text-pink md:text-7xl">Affect</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              Virgin and raw hair, statement merch, and the &ldquo;Broke 2 Boss&rdquo; business
              series — built by India Renee.
            </p>
            <div className="mt-8 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-all duration-500 ease-cinematic hover:border-pink hover:bg-pink hover:text-ink"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-label text-pink">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-sm text-paper/70 transition-colors duration-300 hover:text-pink"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The IndiAffect. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a
              href="https://in-flu-ential.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/80 transition-colors hover:text-pink"
            >
              IN-FLU-ENTIAL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

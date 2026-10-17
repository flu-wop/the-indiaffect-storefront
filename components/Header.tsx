'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { LOGO_IMAGE } from '@/lib/demo-data';
import { useCart } from '@/lib/cart-context';
import SearchOverlay from '@/components/SearchOverlay';
import Marquee from '@/components/Marquee';

const NAVIGATION = [
  { name: 'Bundles', href: '/collections/bundles' },
  { name: 'Closures & Frontals', href: '/collections/lace-collection' },
  { name: 'Wigs', href: '/collections/wigs' },
  { name: 'Merch', href: '/collections/merch' },
  { name: 'Digital Products', href: '/collections/digital-products' },
  { name: 'Book', href: '/book' },
  { name: 'Contact', href: '/contact' },
];

const TICKER = [
  'Creator Kits Coming Soon',
  'Virgin Hair Bundles Starting At $35',
  'Digital Product Sale Ends Soon',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  // Lock page scroll (native + Lenis) while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ease-cinematic ${
          menuOpen ? 'bg-paper' : 'bg-paper/90'
        } ${scrolled ? 'border-ink/10 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)]' : 'border-transparent'}`}
      >
        {/* Announcement ticker */}
        <div className="bg-ink py-2 text-[11px] font-medium uppercase tracking-label text-paper/90">
          <Marquee items={TICKER} duration={38} itemClassName="" />
        </div>

        <div className="frame">
          <div className={`flex items-center justify-between transition-all duration-500 ease-cinematic ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo — real wordmark asset from the live store (dark-on-white, so it
                sits on the white header; multiply keeps its edges clean) */}
            <Link href="/" className="relative -ml-3 h-12 w-40 shrink-0 overflow-hidden transition-opacity hover:opacity-80 md:-ml-4 md:h-14 md:w-48">
              <Image
                src={LOGO_IMAGE}
                alt="The IndiAffect"
                fill
                className="origin-left scale-[1.9] object-contain object-left md:scale-[2.1]"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-7 xl:flex">
              {NAVIGATION.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative py-1 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                      active ? 'text-pink' : 'text-ink hover:text-pink'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-pink transition-all duration-500 ease-cinematic ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search products"
                className="rounded-full p-2.5 transition-colors hover:bg-pink/10 hover:text-pink"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link
                href="/account"
                aria-label="Account"
                className="hidden rounded-full p-2.5 transition-colors hover:bg-pink/10 hover:text-pink sm:block"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>

              <button
                onClick={openCart}
                aria-label="Open cart"
                className="relative rounded-full p-2.5 transition-colors hover:bg-pink/10 hover:text-pink"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-pink text-[10px] font-bold text-ink">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="relative ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[7px] xl:hidden"
              >
                <span className={`h-px w-6 bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
                <span className={`h-px w-6 bg-ink transition-all duration-300 ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Sibling of <header> so the header's backdrop-blur doesn't trap this fixed overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile menu — full-screen black overlay, a sibling of <header> so the
          header's backdrop-blur doesn't trap the fixed positioning */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-lenis-prevent
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-36 xl:hidden"
          >
            <p className="eyebrow mb-8">Menu</p>
            <ul className="space-y-1">
              {NAVIGATION.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-1.5 font-display text-[2.6rem] uppercase leading-none transition-colors ${
                      pathname === item.href ? 'text-pink' : 'text-paper hover:text-pink'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-12 text-[11px] font-semibold uppercase tracking-label text-paper/60">
              <Link href="/account" onClick={() => setMenuOpen(false)} className="hover:text-pink">
                Account
              </Link>
              <span className="font-script text-2xl normal-case tracking-normal text-pink">Create, Influence, Evolve</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

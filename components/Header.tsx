'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOGO_IMAGE } from '@/lib/demo-data';
import { useCart } from '@/lib/cart-context';
import SearchOverlay from '@/components/SearchOverlay';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: 'Bundles', href: '/collections/bundles' },
    { name: 'Closures & Frontals', href: '/collections/lace-collection' },
    { name: 'Wigs', href: '/collections/wigs' },
    { name: 'Merch', href: '/collections/merch' },
    { name: 'Digital Products', href: '/collections/digital-products' },
    { name: 'Book', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-silver/10 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Scrolling announcement ticker */}
      <div className="bg-ink text-paper text-xs uppercase tracking-wider overflow-hidden whitespace-nowrap py-2">
        <div className="animate-[marquee_28s_linear_infinite] inline-block">
          {Array(4).fill('Creator Kits Coming Soon  ★  Virgin Hair Bundles Starting At $35  ★  Digital Product Sale Ends Soon  ★  ').join('')}
        </div>
      </div>
      {/* Brand tagline bar */}
      <div className="bg-ink text-pink text-center text-xs uppercase tracking-[0.3em] py-2 border-t border-paper/10">
        Create , Influence , Evolve
      </div>

      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo — real wordmark asset from the live site */}
          <Link href="/" className="relative h-10 w-40 shrink-0 hover:opacity-80 transition-opacity">
            <Image src={LOGO_IMAGE} alt="The IndiAffect" fill className="object-contain object-left" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-pink ${
                  pathname === item.href ? 'text-pink' : 'text-ink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button onClick={() => setSearchOpen(true)} aria-label="Search products" className="p-2 hover:text-pink transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account */}
            <Link href="/account" className="p-2 hover:text-pink transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart */}
            <button onClick={openCart} className="p-2 hover:text-pink transition-colors relative" aria-label="Open cart">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink text-ink text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:text-pink transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-smooth ${
            mobileMenuOpen ? 'max-h-96 border-t border-silver/10 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-pink ${
                  pathname === item.href ? 'text-pink' : 'text-ink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

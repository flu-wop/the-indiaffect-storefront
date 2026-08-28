import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script, Anton, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/lib/cart-context';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Pink cursive "Affect" half of the wordmark — matches the live site's logo
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

// Bold condensed display font for section headers ("★ Trending Now ★")
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The IndiAffect — Hair, Merch & Business Resources',
  description: 'Virgin and raw hair, statement merch, and the "Broke 2 Boss" business series — built by India Renee.',
  keywords: 'virgin hair, hair bundles, wigs, closures, IndiAffect, India Renee',
  openGraph: {
    title: 'The IndiAffect',
    description: 'Virgin and raw hair, statement merch, and the "Broke 2 Boss" business series — built by India Renee.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The IndiAffect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The IndiAffect',
    description: 'Virgin and raw hair, statement merch, and the "Broke 2 Boss" business series — built by India Renee.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dancingScript.variable} ${anton.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

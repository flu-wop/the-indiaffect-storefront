import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script, Anton, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  title: 'TheIndiAffect - Premium Virgin Hair Extensions & Wigs',
  description: 'Luxury virgin hair bundles, wigs, and closures. Zero shedding, thick, long-lasting. US-based with fast shipping. Shop premium body wave, deep wave, and straight textures.',
  keywords: 'virgin hair, hair bundles, wigs, closures, body wave, deep wave, straight hair, premium hair extensions',
  openGraph: {
    title: 'TheIndiAffect - Premium Virgin Hair',
    description: 'Luxury virgin hair bundles & wigs. Zero shedding. US-based.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TheIndiAffect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheIndiAffect - Premium Virgin Hair',
    description: 'Luxury virgin hair bundles & wigs. Zero shedding. US-based.',
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

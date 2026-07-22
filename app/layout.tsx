import type { Metadata } from 'next';
import { Syne, Jost } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bokaro Mall | Premier Shopping & Entertainment Hub in Bokaro Steel City',
  description: 'Official website of Bokaro Mall. Discover 150+ flagship stores, 4-screen PVR multiplex cinema, gourmet dining, and integrated 4-star Lemon Tree hotel hospitality in Bokaro Steel City, Jharkhand.',
  keywords: ['Bokaro Mall', 'Bokaro Shopping Mall', 'PVR Bokaro', 'Reliance Smart Bazaar Bokaro', 'Lemon Tree Hotel Bokaro', 'Jharkhand Shopping Mall'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jost.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-700 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

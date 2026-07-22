import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bokaro Mall | Luxury Shopping, Dining & Entertainment Destination',
  description: 'Official portal of Bokaro Mall. Discover 150+ flagship stores, 4-screen PVR multiplex cinema, gourmet food court, and integrated 4-star Lemon Tree hotel in Bokaro Steel City.',
  keywords: ['Bokaro Mall', 'Bokaro Shopping Mall', 'PVR Bokaro', 'Reliance Smart Bazaar Bokaro', 'Lemon Tree Hotel Bokaro', 'Jharkhand Mall'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-700 selection:text-white bg-editorial-canvas dark:bg-onyx-canvas text-editorial-text dark:text-onyx-text transition-colors duration-300">
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

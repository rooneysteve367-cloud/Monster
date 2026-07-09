import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr Pepper | The One You Crave',
  description: 'Discover the 23 unique flavors of Dr Pepper. An immersive, premium beverage experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A0A0A] text-[#FDFBF7] antialiased selection:bg-[#C8102E] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

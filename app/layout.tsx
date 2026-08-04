import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webersol IT Solutions & Marketing Agency',
  description: 'Premium web development, mobile apps, AI solutions, and digital marketing services for global businesses.',
  keywords: 'software development, web development, AI solutions, digital marketing, custom software',
  authors: [{ name: 'Webersol' }],
  creator: 'Webersol IT Solutions',
  publisher: 'Webersol IT Solutions',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webersol.com',
    title: 'Webersol IT Solutions & Marketing Agency',
    description: 'Premium B2B IT Solutions & Digital Marketing Services',
    siteName: 'Webersol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webersol IT Solutions & Marketing Agency',
    description: 'Premium B2B IT Solutions & Digital Marketing Services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-950 text-gray-100 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

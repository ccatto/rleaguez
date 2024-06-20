import type { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import FooterCatto from './components/FooterCatto/FooterCatto';
import HeaderCatto from './components/HeaderCatto/HeaderCatto';
import GA4TagCatto from './components/Utils/GA4TagCatto/GA4TagCatto';
import './ui/global.css';

export const metadata: Metadata = {
  title: 'RLeaguez',
  description: 'RLeaguez - not my league; not your league; its R League',
  alternates: {
    canonical: 'https://www.rleaguez.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-[calc(100vh-26rem)] ${montserrat.className} absolute m-0 flex w-full flex-col overflow-x-hidden bg-gray-800 antialiased`}
      >
        <HeaderCatto />
        <div className="mt-20 flex h-screen">
          <div className="flex-[1] bg-gradient-to-r from-gray-500 to-gray-900"></div>
          <main className="flex-[98] bg-gray-200 dark:bg-gray-700">
            {children}
          </main>
          <div className="flex-[1] bg-gradient-to-r from-gray-900 to-gray-500"></div>
        </div>
        <FooterCatto />
      </body>
      <GA4TagCatto />
    </html>
  );
}

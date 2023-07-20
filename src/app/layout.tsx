import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ちょこみんとジェネレーター',
  description: 'いろんなちょこみんとを作ろう',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ちょこみんとジェネレーター" />
        <meta
          name="twitter:description"
          content="いろんなちょこみんとを作ろう🍫🌱"
        />
        <meta
          name="twitter:image"
          content="https://chocomint-slice.vercel.app/twitter-card.png"
        />
        <meta name="theme-color" content="#14b8a6" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

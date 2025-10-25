import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ThirdwebProvider } from 'thirdweb/react';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'HackQuest',
    template: '%s - HackQuest',
  },
  description: 'Deep dive into leading ecosystems and become a certified developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`flex h-dvh w-full bg-background text-foreground antialiased ${nunito.variable}`}
      >
            <ThirdwebProvider>

              {children}

              </ThirdwebProvider>
      </body>
    </html>
  );
}
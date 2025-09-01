import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Portfolio Pro',
  description: 'A professional portfolio for Yafei.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn('font-sans antialiased', fontSans.variable, fontDisplay.variable)}>
        {children}
      </body>
    </html>
  );
}

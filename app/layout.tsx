import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

// Force dynamic rendering to prevent build-time database queries
// This ensures pages are rendered at request time, not build time
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'BullyFashion101 LLC - Military-Owned Freight Logistics',
  description: 'BullyFashion101 LLC - Military-owned freight brokerage specializing in disciplined, compliance-driven transportation solutions. Dry Van, Flatbed, Hazmat, and specialized freight services.',
  keywords: 'freight brokerage, military owned logistics, hazmat transportation, military logistics, dry van, flatbed, bullyfashion101',
  authors: [{ name: 'BullyFashion101 LLC' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BullyFashion101 LLC - Military-Owned Freight Logistics',
    description: 'Military-owned freight brokerage delivering disciplined excellence in logistics',
    url: 'https://www.bf101ilog.com',
    siteName: 'BullyFashion101 LLC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/custom.css" />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

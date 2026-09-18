import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OreSight AI — Manganese Reserve Estimation from Space',
  description:
    'AI/ML + satellite intelligence for manganese reserve estimation and production shortfall analysis. Built for MOIL Limited, India\u2019s largest manganese ore producer. Smart India Hackathon 2026.',
  generator: 'v0.app',
  keywords: [
    'manganese',
    'reserve estimation',
    'satellite',
    'remote sensing',
    'AI',
    'MOIL',
    'mining analytics',
    'Smart India Hackathon',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2a2f5b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

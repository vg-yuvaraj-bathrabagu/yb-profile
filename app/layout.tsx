// File: app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theyuvaraj.dev').replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yuvaraj Bathrabagu - Technical Lead | Full Stack Engineer',
    template: '%s | Yuvaraj Bathrabagu',
  },
  description: 'Full Stack Engineer & Technical Lead with 14 years of experience in multilingual programming, DevOps, and solution architecture.',
  keywords: 'Yuvaraj Bathrabagu, Full Stack Developer, Technical Lead, React, Node.js, DevOps, Chennai',
  authors: [{ name: 'Yuvaraj Bathrabagu' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yuvaraj Bathrabagu - Technical Lead',
    description: 'Full Stack Engineer & Technical Lead with 14 years of experience',
    url: siteUrl,
    siteName: 'Yuvaraj Bathrabagu Portfolio',
    type: 'website',
    images: [{ url: '/images/profile.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yuvaraj',
    creator: '@yuvaraj',
    title: 'Yuvaraj Bathrabagu - Technical Lead',
    description: 'Full Stack Engineer & Technical Lead with 14 years of experience',
    images: ['/images/profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-cyber-bg text-text-primary`}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
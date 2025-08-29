// File: app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuvaraj Bathrabagu - Technical Lead | Full Stack Engineer',
  description: 'Full Stack Engineer & Technical Lead with 14 years of experience in multilingual programming, DevOps, and solution architecture.',
  keywords: 'Yuvaraj Bathrabagu, Full Stack Developer, Technical Lead, React, Node.js, DevOps, Chennai',
  authors: [{ name: 'Yuvaraj Bathrabagu' }],
  openGraph: {
    title: 'Yuvaraj Bathrabagu - Technical Lead',
    description: 'Full Stack Engineer & Technical Lead with 14 years of experience',
    url: 'https://theyuvaraj.dev',
    siteName: 'Yuvaraj Bathrabagu Portfolio',
    type: 'website',
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
      </body>
    </html>
  )
}
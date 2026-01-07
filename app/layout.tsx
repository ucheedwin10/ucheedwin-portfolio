import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uche Edwin | Technical AI Product Manager',
  description: 'Technical AI Product Manager with 7+ years experience building and shipping AI products. From AfroLLM to GenAI Governance to Hont.',
  keywords: ['AI Product Manager', 'Technical PM', 'AI Products', 'AfroLLM', 'GenAI', 'Hont', 'Product Management'],
  authors: [{ name: 'Uche Edwin' }],
  creator: 'Uche Edwin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ucheedwin.com',
    title: 'Uche Edwin | Technical AI Product Manager',
    description: 'Technical AI Product Manager building and shipping AI products that make a difference.',
    siteName: 'Uche Edwin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uche Edwin | Technical AI Product Manager',
    description: 'Technical AI Product Manager building and shipping AI products that make a difference.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

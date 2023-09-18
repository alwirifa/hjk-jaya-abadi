import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Whatsapp from './components/Whatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HJK Jaya Abadi',
  description: 'HJK Jaya Abadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Whatsapp />
      </body>
    </html>
  )
}

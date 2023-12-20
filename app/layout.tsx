import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio | Vinícius H.',
  description: 'Desenvolvedor Full-Stack',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio | Vinícius H.',
  description: 'Desenvolvedor Full-Stack',
}

type LayoutProps = { 
  children: React.ReactNode 
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

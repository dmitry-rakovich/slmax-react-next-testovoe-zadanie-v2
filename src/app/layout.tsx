import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Галерея изображений',
  description: 'Gallery Unsplash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <Providers>
        <body className={inter.className}>
          <Header />
          <main className='main'>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  )
}

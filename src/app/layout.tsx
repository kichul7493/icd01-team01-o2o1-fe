import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout/Layout'
import { MSWProvider } from '@/mocks/MSWProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '배달이써',
  description: '배달 서비스를 이용해보세요',
}

if (process.env.NEXT_RUNTIME === 'nodejs') {
  console.log('SERVER LISTEN')

  const { server } = require('../mocks/node')
  server.listen()

  Reflect.set(fetch, '__FOO', 'YES')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NODE_ENV === 'development' ? (
          <MSWProvider>
            <Layout>{children}</Layout>
          </MSWProvider>
        ) : (
          <Layout>{children}</Layout>
        )}
      </body>
    </html>
  )
}

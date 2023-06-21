import './globals.css'
import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs13',
  description: 'Nextjs13 starter template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
          className={classNames({
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        >
          {children}
          <Analytics />
        </body>
      </html>
  )
}

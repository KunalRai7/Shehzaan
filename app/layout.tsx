import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shehzaan  ',
  description: 'Interior Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NODE_ENV === 'production' ? '/Shehzaan' : '';

  return (
    <html lang="en">
      <head>
        <base href={basePath + '/'} />
      </head>
      <body>{children}</body>
    </html>
  )
}
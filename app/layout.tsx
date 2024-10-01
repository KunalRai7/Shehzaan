import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from './components/GoogleAnalytics'

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
  const GA_MEASUREMENT_ID = 'G-8GF0Z0WF7Y';

  return (
    <html lang="en">
      <head>
        <base href={basePath + '/'} />
      </head>
      <body>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
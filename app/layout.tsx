import { GoogleAnalytics } from '@next/third-parties/google'
import { cormorant, montserrat, dancingScript } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shehzaan',
  description: 'Interior Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${dancingScript.variable}`}>
      <body>
        {children}
        <GoogleAnalytics gaId="G-8GF0Z0WF7Y" />
      </body>
    </html>
  )
}

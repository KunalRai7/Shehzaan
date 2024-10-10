import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from './components/GoogleAnalytics'
import { cormorant, montserrat, dancingScript } from './fonts'

export const metadata: Metadata = {
  title: 'Shehzaan  ',
  description: 'Interior Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = 'G-8GF0Z0WF7Y';

  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${dancingScript.variable}`}>
      <body>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
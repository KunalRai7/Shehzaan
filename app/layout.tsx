import './globals.css'
import type { Metadata } from 'next'
import { cormorant, montserrat, dancingScript } from './fonts'
import Script from 'next/script'

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}

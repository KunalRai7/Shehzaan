'use client'

import { Badge } from "@/components/ui/badge"
import { MapPin, Phone } from "lucide-react"
import { useAnalytics } from "@/app/hooks/use-analytics"

export default function ContactSection() {
  const { trackEvent } = useAnalytics()

  const handleCallNowClick = () => {
    trackEvent({
      action: 'click',
      category: 'Contact',
      label: 'Call Now Button',
    })
  }

  return (
    <section className="w-full md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground mb-2 font-montserrat text-center">Get in touch with us</h2>
            <p className="text-muted-foreground md:text-xl/relaxed font-montserrat text-center">
              कोई सवाल है या मदद चाहिए? हमारी टीम आपकी सहायता के लिए यहां है।
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center pb-6">
            <a
              href="tel:+918319099875"
              onClick={handleCallNowClick}
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-4 sm:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-montserrat tap-highlight-transparent no-tap-highlight"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              <div className="flex flex-col sm:flex-row">
                <span>Call Now</span>
                <span className="sm:ml-2 sm:mt-0">(12 PM - 7 PM)</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/sheh_zaan01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 sm:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-montserrat tap-highlight-transparent no-tap-highlight"
            >
              <InstagramIcon className="mr-2 h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        {/* Copyright and Location */}
        <div className="pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-2 sm:mb-0">&copy; 2024 Shehzaan Interior & Construction Company.</p>
            <Badge variant="secondary" className="flex items-center mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              Bhopal, MP
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Phone {...props} />
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
       <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
    </svg>
  )
}

'use client'

import { useCallback } from 'react'

interface EventOptions {
  action: string
  category: string
  label?: string
  value?: number
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ action, category, label, value }: EventOptions) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('Tracking event:', { action, category, label, value }) // Debugging log
      ;(window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    } else {
      console.warn('gtag is not defined') // Debugging log
    }
  }, [])

  return { trackEvent }
}

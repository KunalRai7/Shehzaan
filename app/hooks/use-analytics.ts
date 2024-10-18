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
      ;(window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  return { trackEvent }
}

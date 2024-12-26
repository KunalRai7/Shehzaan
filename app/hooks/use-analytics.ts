'use client'

import { useCallback } from 'react'

interface EventOptions {
  action: string
  category: string
  label?: string
  value?: number
}

interface Window {
  gtag: (
    command: string,
    action: string,
    params: {
      event_category: string;
      event_label?: string;
      value?: number;
    }
  ) => void;
}

declare global {
  interface Window {
    gtag: Window['gtag'];
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ action, category, label, value }: EventOptions) => {
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Tracking event:', { action, category, label, value }) // Debugging log
      window.gtag('event', action, {
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

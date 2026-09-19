"use client"

import { useSyncExternalStore } from "react"

const compactQuery = "(max-width: 767px), (max-width: 1023px) and (max-height: 500px)"

function subscribe(callback) {
  const media = window.matchMedia(compactQuery)
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

export function useCompactLayout() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(compactQuery).matches, () => false)
}

"use client"

import { useEffect } from "react"

// Some mobile browsers keep 100dvh at the full screen height above a keyboard.
export default function ViewportSync() {
  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport) return

    const root = document.documentElement
    function update() {
      // Let the browser handle pinch-to-zoom without resizing the interface.
      if (viewport.scale !== 1) return
      root.style.setProperty("--visual-viewport-height", `${viewport.height}px`)
      root.style.setProperty("--visual-viewport-top", `${viewport.offsetTop}px`)
    }

    update()
    viewport.addEventListener("resize", update)
    viewport.addEventListener("scroll", update)
    return () => {
      viewport.removeEventListener("resize", update)
      viewport.removeEventListener("scroll", update)
      root.style.removeProperty("--visual-viewport-height")
      root.style.removeProperty("--visual-viewport-top")
    }
  }, [])

  return null
}

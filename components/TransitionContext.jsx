"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()

export function TransitionProvider({ children }) {

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activePage, setActivePage] = useState("home") // NEW

  function navigate(page) {
    setIsTransitioning(true)

    setTimeout(() => {
      setActivePage(page)      // switch page
      setIsTransitioning(false)
    }, 500) // match your animation timing
  }

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        navigate,
        activePage // expose this
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}
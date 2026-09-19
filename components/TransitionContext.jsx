"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()

function lastVisible(windows) {
  return windows.findLast(window => !window.minimized)?.id ?? null
}

export function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activePage, setActivePage] = useState("home")
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [{ openWindows, activeWindow }, setDesktop] = useState({ openWindows: [], activeWindow: null })

  function navigate(page) {
    setLoading(true)
    setIsTransitioning(true)
    setTimeout(() => {
      setActivePage(page)
      setIsTransitioning(false)
      setTimeout(() => setLoading(false), 500)
    }, 500)
  }

  function openApp(app) {
    setDesktop(state => {
      const existing = state.openWindows.find(window => window.page === app.page)
      const opened = existing
        ? { ...existing, minimized: false }
        : { ...app, id: app.page, minimized: false, maximized: false }
      return {
        openWindows: [...state.openWindows.filter(window => window.id !== opened.id), opened],
        activeWindow: opened.id,
      }
    })
  }

  function focusWindow(id) {
    setDesktop(state => {
      if (state.activeWindow === id) return state
      const focused = state.openWindows.find(window => window.id === id && !window.minimized)
      if (!focused) return state
      return {
        openWindows: [...state.openWindows.filter(window => window.id !== id), focused],
        activeWindow: id,
      }
    })
  }

  function closeWindow(id) {
    setDesktop(state => {
      const windows = state.openWindows.filter(window => window.id !== id)
      return { openWindows: windows, activeWindow: state.activeWindow === id ? lastVisible(windows) : state.activeWindow }
    })
  }

  function minimizeWindow(id) {
    setDesktop(state => {
      const windows = state.openWindows.map(window => window.id === id ? { ...window, minimized: true } : window)
      return { openWindows: windows, activeWindow: state.activeWindow === id ? lastVisible(windows) : state.activeWindow }
    })
  }

  function restoreWindow(id) {
    setDesktop(state => {
      const restored = state.openWindows.find(window => window.id === id)
      if (!restored) return state
      return {
        openWindows: [...state.openWindows.filter(window => window.id !== id), { ...restored, minimized: false }],
        activeWindow: id,
      }
    })
  }

  function maximizeWindow(id) {
    setDesktop(state => ({
      ...state,
      openWindows: state.openWindows.map(window => window.id === id ? { ...window, maximized: !window.maximized } : window),
    }))
  }

  return (
    <TransitionContext.Provider value={{
      isTransitioning, navigate, activePage, loading, search, setSearch,
      openWindows, openApp, closeWindow, minimizeWindow, restoreWindow,
      maximizeWindow, activeWindow, focusWindow,
    }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}

"use client"

import { useEffect } from "react"
import { motion, useDragControls, useMotionValue } from "framer-motion"
import { useTransition } from "./TransitionContext"
import { useCompactLayout } from "./useMediaQuery"

export default function OSWindow({ id, title, children, onClose, onMinimize, onMaximize, maximized }) {
  const { activeWindow, focusWindow } = useTransition()
  const compact = useCompactLayout()
  const dragControls = useDragControls()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const isActive = activeWindow === id

  useEffect(() => {
    x.set(0)
    y.set(0)
  }, [compact, maximized, x, y])

  return (
    <motion.div
      role="dialog"
      aria-label={title}
      inert={compact && !isActive}
      onPointerDown={() => focusWindow(id)}
      onFocusCapture={() => focusWindow(id)}
      drag={!maximized && !compact}
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`os-window ${isActive ? "os-window-active z-[60]" : "z-40"} ${maximized ? "os-window-maximized" : "os-window-floating"} fixed flex flex-col overflow-hidden rounded-xl border border-green-400/20 bg-black/95 md:bg-black/80 backdrop-blur-md shadow-2xl`}
    >
      <div
        onPointerDown={(event) => {
          if (!compact && !maximized && !event.target.closest("button")) dragControls.start(event)
        }}
        className="os-window-header relative flex h-14 shrink-0 items-center justify-between border-b border-green-400/20 bg-black/50 px-2 font-mono md:h-12 md:px-4"
      >
        <p className="os-window-title min-w-0 truncate px-2 text-sm text-green-400">{title}</p>
        <div className="os-window-controls flex shrink-0 items-center gap-1 md:gap-2">
          <button type="button" aria-label={`Close ${title}`} title="Close" onClick={onClose} className="window-control text-red-400 md:bg-red-500">
            <span className="md:hidden" aria-hidden="true">×</span>
          </button>
          <button type="button" aria-label={`Minimize ${title}`} title="Minimize" onClick={onMinimize} className="window-control text-yellow-400 md:bg-yellow-500">
            <span className="md:hidden" aria-hidden="true">−</span>
          </button>
          <button type="button" aria-label={`${maximized ? "Restore" : "Maximize"} ${title}`} title={maximized ? "Restore" : "Maximize"} onClick={onMaximize} className="window-control window-maximize hidden bg-green-500 md:block" />
        </div>
      </div>
      <div className="os-window-content min-h-0 min-w-0 flex-1 overflow-auto overscroll-contain p-3 text-zinc-300 sm:p-4 md:p-6">
        {children}
      </div>
    </motion.div>
  )
}

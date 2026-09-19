"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import StartMenu from "./StartMenu"
import { useTransition } from "./TransitionContext"

export default function Taskbar(){
  const [time,setTime] = useState("")
  const [open,setOpen] = useState(false)
  const taskbarRef = useRef(null)
  const startButtonRef = useRef(null)

  const {
    search,
    setSearch,
    openWindows,
    activeWindow,
    openApp
  } = useTransition()

  useEffect(()=>{
    function updateTime(){
      setTime(new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
      }))
    }

    updateTime()
    const interval = setInterval(updateTime,1000)
    return ()=>clearInterval(interval)
  },[])

  useEffect(()=>{
    if(!open) return

    function handlePointerOutside(event){
      if(taskbarRef.current && !taskbarRef.current.contains(event.target)){
        setOpen(false)
      }
    }

    function handleKeyDown(event){
      if(event.key === "Escape"){
        setOpen(false)
        startButtonRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown",handlePointerOutside)
    document.addEventListener("keydown",handleKeyDown)
    return ()=>{
      document.removeEventListener("pointerdown",handlePointerOutside)
      document.removeEventListener("keydown",handleKeyDown)
    }
  },[open])

  return(
    <div
      ref={taskbarRef}
      className="portfolio-taskbar fixed top-[calc(var(--visual-viewport-top,0px)+var(--visual-viewport-height,100dvh)-68px-env(safe-area-inset-bottom))] bottom-auto left-[max(0.75rem,env(safe-area-inset-left))] right-[max(0.75rem,env(safe-area-inset-right))] z-[100] md:top-auto md:bottom-4 md:left-1/2 md:right-auto md:w-[90%] md:max-w-5xl md:-translate-x-1/2"
    >
      <motion.div
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration:0.5}}
        className="flex h-14 items-center rounded-xl border border-green-400/20 bg-black/80 px-2 font-mono shadow-xl backdrop-blur-md md:bg-black/70 md:px-4"
      >
        <AnimatePresence>
          {open && <StartMenu onClose={()=>setOpen(false)}/>}
        </AnimatePresence>

        <button
          ref={startButtonRef}
          type="button"
          onClick={()=>setOpen(previous=>!previous)}
          aria-label="Open application menu"
          aria-expanded={open}
          aria-controls="portfolio-start-menu"
          className={"flex h-11 w-11 shrink-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg border border-green-400/20 text-xl text-green-400 transition hover:bg-green-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 md:h-10 md:w-10 md:text-base " + (open ? "bg-green-400/15" : "")}
        >
          <span aria-hidden="true" className="leading-none">🪟</span>
          <span className="text-[10px] leading-none md:hidden">Apps</span>
        </button>

        <input
          value={search}
          onFocus={()=>setOpen(true)}
          onChange={(event)=>{
            setSearch(event.target.value)
            setOpen(true)
          }}
          aria-label="Search applications"
          placeholder="Search..."
          className="ml-4 hidden h-10 min-w-0 max-w-md flex-1 rounded-lg border border-green-400/10 bg-white/5 px-4 text-sm text-zinc-300 outline-none placeholder:text-zinc-500 focus:border-green-400/40 md:block"
        />

        <nav
          aria-label="Open applications"
          className="ml-2 flex min-w-0 flex-1 gap-1 overflow-x-auto overscroll-x-contain py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:ml-4 md:gap-2"
        >
          {openWindows.map((app)=>{
            const isActive = activeWindow === app.id && !app.minimized

            return(
              <button
                key={app.id}
                type="button"
                onClick={()=>{
                  openApp(app)
                  setOpen(false)
                }}
                aria-label={app.name + (app.minimized ? " (minimized)" : "")}
                aria-pressed={isActive}
                title={app.name}
                className={"relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border text-sm transition hover:bg-green-400/10 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-green-400 md:h-10 md:w-auto md:px-3 " + (isActive ? "border-green-400/40 bg-green-400/15 text-green-300" : "border-green-400/10 bg-white/5 text-zinc-300")}
              >
                <span aria-hidden="true" className="text-xl md:text-base">{app.icon}</span>
                <span className="hidden md:inline">{app.name}</span>
                {isActive && <span aria-hidden="true" className="absolute bottom-1 h-0.5 w-4 rounded-full bg-green-400"/>}
              </button>
            )
          })}
        </nav>

        <div className="ml-4 hidden shrink-0 whitespace-nowrap text-sm text-zinc-300 md:block">
          <span>{time}</span>
        </div>
      </motion.div>
    </div>
  )
}

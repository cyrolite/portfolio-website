"use client"

import { motion } from "framer-motion"
import { useTransition } from "./TransitionContext"

export default function StartMenu({onClose}){
  const {openApp,search,setSearch} = useTransition()

  const apps = [
    {name:"About Me",icon:"👤",page:"about"},
    {name:"Skills",icon:"🛠",page:"skills"},
    {name:"Projects",icon:"🚀",page:"projects"},
    {name:"Contact",icon:"✉️",page:"contact"},
    {name:"Terminal",icon:"💻",page:"terminal"},
    {name:"Resume",icon:"📄",page:"resume"}
  ]

  const filteredApps = apps.filter((app)=>
    app.name.toLowerCase().includes(search.toLowerCase())
  )

  return(
    <motion.div
      id="portfolio-start-menu"
      initial={{opacity:0,y:30,scale:0.95}}
      animate={{opacity:1,y:0,scale:1}}
      exit={{opacity:0,y:30,scale:0.95}}
      transition={{duration:0.25}}
      className="absolute bottom-[calc(100%+0.5rem)] left-0 max-h-[calc(var(--visual-viewport-height,100dvh)-100px-env(safe-area-inset-bottom)-env(safe-area-inset-top))] w-full overflow-y-auto overscroll-contain rounded-xl border border-green-400/20 bg-black/95 p-4 font-mono shadow-2xl backdrop-blur-md md:w-80 md:bg-black/80 md:p-5"
    >
      <input
        value={search}
        onChange={(event)=>setSearch(event.target.value)}
        aria-label="Search applications in menu"
        placeholder="Search..."
        className="mb-4 h-11 w-full rounded-lg border border-green-400/10 bg-white/5 px-4 text-base text-zinc-300 outline-none placeholder:text-zinc-500 focus:border-green-400/40 md:mb-5 md:h-10 md:text-sm"
      />

      <p className="mb-3 text-sm text-green-400 md:mb-4">Applications</p>

      <nav aria-label="Applications" className="flex flex-col gap-1 md:gap-2">
        {filteredApps.map((app)=>(
          <button
            key={app.page}
            type="button"
            onClick={()=>{
              openApp(app)
              onClose?.()
            }}
            className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg p-3 text-left text-white transition hover:bg-green-400/10 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-green-400"
          >
            <span aria-hidden="true">{app.icon}</span>
            <span>{app.name}</span>
          </button>
        ))}

        {filteredApps.length === 0 && (
          <p role="status" className="p-3 text-sm text-zinc-500">No applications found</p>
        )}
      </nav>

      <div className="mt-4 flex gap-4 border-t border-green-400/20 pt-2 md:mt-5 md:pt-4">
        <a
          href="https://github.com/cyrolite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded text-zinc-300 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-green-400 md:min-h-0"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-yap-b6069b20b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded text-zinc-300 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-green-400 md:min-h-0"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  )
}

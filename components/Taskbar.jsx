"use client"

import { motion , AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import StartMenu from "./StartMenu"

export default function Taskbar(){
  const [time,setTime] = useState("")
  const [open,setOpen]=useState(false)

  useEffect(()=>{

    function updateTime(){

      const now=new Date()

      setTime(
        now.toLocaleTimeString([],{
          hour:"2-digit",
          minute:"2-digit"
        })
      )

    }

    updateTime()

    const interval=setInterval(updateTime,1000)

    return ()=>clearInterval(interval)

  },[])
  return(
    <div className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[90%]
        max-w-5xl
    ">
    
        <motion.div
        initial={{
            y:100
        }}

        animate={{
            y:0
        }}

        transition={{
            duration:0.5
        }}

        className="
            h-14
            rounded-xl
            border
            border-green-400/20
            bg-black/70
            backdrop-blur-md
            shadow-xl
            flex
            items-center
            px-4
            font-mono
        "
        >

        <AnimatePresence>
            {
            open && (
                <StartMenu/>
            )
            }
        </AnimatePresence>

        {/* Start Button */}

        <button
            onClick={()=>setOpen(!open)}
            className="
            w-10
            h-10
            rounded-lg
            border
            border-green-400/20
            hover:bg-green-400/10
            transition
            text-green-400
            cursor-pointer
            "
        >
            🪟
        </button>


        {/* Search */}

        <div
            className="
            ml-4
            flex-1
            max-w-md
            h-10
            rounded-lg
            bg-white/5
            border
            border-green-400/10
            flex
            items-center
            px-4
            text-zinc-400
            text-sm
            "
        >

            🔍 Search

        </div>


        {/* Right Side */}

        <div
            className="
            ml-auto
            flex
            gap-4
            text-sm
            text-zinc-300
            "
        >

            <a
            href="https://github.com/cyrolite"
            target="_blank"
            className="
                hover:text-green-400
                transition
            "
            >
            GitHub
            </a>


            <a
            href="https://linkedin.com"
            target="_blank"
            className="
                hover:text-green-400
                transition
            "
            >
            LinkedIn
            </a>


            <span>
            {time}
            </span>

        </div>


        </motion.div>
    </div>
  )
}
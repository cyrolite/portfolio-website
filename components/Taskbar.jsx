"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import StartMenu from "./StartMenu"
import { useTransition } from "./TransitionContext"

export default function Taskbar(){

  const [time,setTime] = useState("")
  const [open,setOpen] = useState(false)

  const menuRef = useRef(null)


  const {
    search,
    setSearch,
    openWindows,
    openApp
  } = useTransition()



  useEffect(()=>{

    function updateTime(){

      const now = new Date()

      setTime(
        now.toLocaleTimeString([],{
          hour:"2-digit",
          minute:"2-digit"
        })
      )

    }

    updateTime()

    const interval=setInterval(
      updateTime,
      1000
    )

    return ()=>clearInterval(interval)

  },[])



  useEffect(()=>{

    function handleClickOutside(e){

      if(
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ){

        setOpen(false)

      }

    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    )


    return ()=>{

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )

    }

  },[])



  return(
    <div
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[90%]
        max-w-5xl
      "
    >


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
              <div ref={menuRef}>
                <StartMenu/>
              </div>
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

        <input

          value={search}

          onFocus={()=>{
            setOpen(true)
          }}

          onChange={(e)=>{

            setSearch(e.target.value)
            setOpen(true)

          }}

          placeholder="Search..."

          className="
            ml-4
            flex-1
            max-w-md
            h-10
            rounded-lg
            bg-white/5
            border
            border-green-400/10
            px-4
            text-zinc-300
            text-sm
            outline-none
            placeholder:text-zinc-500
            focus:border-green-400/40
          "

        />



        {/* Running Applications */}

        <div
          className="
            flex
            gap-2
            ml-4
          "
        >

          {
            openWindows.map((app)=>(

              <button

                key={`${app.name}-${app.page}`}

                onClick={()=>openApp(app)}

                className="
                  px-3
                  h-10
                  rounded-lg
                  bg-white/5
                  border
                  border-green-400/10
                  text-zinc-300
                  hover:text-green-400
                  hover:bg-green-400/10
                  transition
                  text-sm
                  cursor-pointer
                "

              >

                {app.icon}

                {" "}

                {app.name}

              </button>

            ))
          }

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
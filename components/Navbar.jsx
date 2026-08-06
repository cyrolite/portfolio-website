"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTransition } from "./TransitionContext"

export default function Navbar(){

  const [open,setOpen] = useState(false)

  const { navigate } = useTransition()

  const menuItems=[
    {
      name:"about.exe",
      page:"about"
    },
    {
      name:"skills.dll",
      page:"skills"
    },
    {
      name:"projects/",
      page:"projects"
    },
    {
      name:"contact.sh",
      page:"contact"
    }
  ]

  return(
    <div className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      z-50
      font-mono
    ">

      <AnimatePresence>

        {
          open && (

            <motion.div
              initial={{
                opacity:0,
                y:30,
                scale:0.9
              }}

              animate={{
                opacity:1,
                y:0,
                scale:1
              }}

              exit={{
                opacity:0,
                y:30,
                scale:0.9
              }}

              transition={{
                duration:0.3
              }}

              className="
                mb-4
                w-64
                rounded-xl
                border
                border-green-400/20
                bg-black/80
                backdrop-blur-md
                p-5
              "
            >

              <p className="
                text-green-400
                mb-4
              ">
                root@nicholas:~$ ls
              </p>


              <div className="
                flex
                flex-col
                gap-3
              ">

                {
                  menuItems.map((item)=>(

                    <button
                      key={item.page}
                      onClick={()=>navigate(item.page)}
                      className="
                        text-left
                        text-white
                        hover:text-green-400
                        transition
                        cursor-pointer
                      "
                    >
                      {item.name}
                    </button>

                  ))
                }

              </div>


              <div className="
                border-t
                border-green-400/20
                mt-5
                pt-4
                flex
                gap-4
              ">

                <a
                  href="https://github.com/cyrolite"
                  target="_blank"
                  className="
                    text-zinc-300
                    hover:text-green-400
                  "
                >
                  GitHub
                </a>


                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="
                    text-zinc-300
                    hover:text-green-400
                  "
                >
                  LinkedIn
                </a>

              </div>


            </motion.div>

          )
        }

      </AnimatePresence>


      <motion.button
        onClick={()=>setOpen(!open)}
        whileTap={{
          scale:0.95
        }}

        className="
          flex
          items-center
          gap-3
          px-6
          py-3
          rounded-xl
          border
          border-green-400/20
          bg-black/80
          backdrop-blur-md
          text-green-400
          shadow-xl
          cursor-pointer
        "
      >

        <span>
          🟢
        </span>

        <span>
          nicholas@cyrolite:~
        </span>

      </motion.button>


    </div>
  )
}
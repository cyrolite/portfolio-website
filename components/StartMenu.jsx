"use client"

import { motion } from "framer-motion"
import { useTransition } from "./TransitionContext"

export default function StartMenu(){

  const { navigate } = useTransition()

  const apps=[
    {
      name:"About Me",
      icon:"👤",
      page:"about"
    },
    {
      name:"Skills",
      icon:"🛠",
      page:"skills"
    },
    {
      name:"Projects",
      icon:"🚀",
      page:"projects"
    },
    {
      name:"Contact",
      icon:"✉️",
      page:"contact"
    }
  ]

  return(
    <motion.div
      initial={{
        opacity:0,
        y:30,
        scale:0.95
      }}

      animate={{
        opacity:1,
        y:0,
        scale:1
      }}

      exit={{
        opacity:0,
        y:30,
        scale:0.95
      }}

      transition={{
        duration:0.25
      }}

      className="
        absolute
        bottom-16
        left-0
        w-80
        rounded-xl
        border
        border-green-400/20
        bg-black/80
        backdrop-blur-md
        shadow-2xl
        p-5
        font-mono
      "
    >

      <div
        className="
          mb-5
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


      <p
        className="
          text-green-400
          text-sm
          mb-4
        "
      >
        Applications
      </p>


      <div
        className="
          flex
          flex-col
          gap-2
        "
      >

        {
          apps.map((app)=>(

            <button
              key={app.page}
              onClick={()=>navigate(app.page)}
              className="
                flex
                items-center
                gap-3
                p-3
                rounded-lg
                text-left
                text-white
                hover:bg-green-400/10
                hover:text-green-400
                transition
                cursor-pointer
              "
            >

              <span>
                {app.icon}
              </span>

              <span>
                {app.name}
              </span>

            </button>

          ))
        }

      </div>


      <div
        className="
          border-t
          border-green-400/20
          mt-5
          pt-4
          flex
          gap-4
        "
      >

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
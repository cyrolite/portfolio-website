"use client"

import { motion } from "framer-motion"
import { useTransition } from "./TransitionContext"

export default function StartMenu(){

  const {
    navigate,
    search,
    setSearch
  } = useTransition()


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


  const filteredApps = apps.filter((app)=>
    app.name.toLowerCase().includes(search.toLowerCase())
  )


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


      <input

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        placeholder="Search..."

        className="
          mb-5
          h-10
          w-full
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
          filteredApps.map((app)=>(

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


        {
          filteredApps.length === 0 && (

            <p
              className="
                text-zinc-500
                text-sm
                p-3
              "
            >
              No applications found
            </p>

          )
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
"use client"

import { motion } from "framer-motion"

export default function ProjectCard({title,description,stack,link}){

  return(
    <motion.div
      whileHover={{
        y:-8,
        scale:1.02
      }}

      transition={{
        duration:0.2
      }}

      className="
        bg-black/40
        backdrop-blur-md
        border
        border-green-400/20
        rounded-xl
        p-4
        font-mono
        min-w-0
        break-words
        hover:border-green-400/60
        transition
      "
    >


      <p className="
        text-green-400
        text-sm
        mb-2
      ">
        root@nicholas:~$ project
      </p>


      <h3 className="
        text-xl
        font-bold
        text-white
      ">
        {title}
      </h3>


      <p className="
        mt-3
        text-zinc-300
        leading-relaxed
      ">
        {description}
      </p>


      <p className="
        mt-5
        text-sm
        text-green-300
      ">
        [{stack}]
      </p>


      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          min-h-11
          md:min-h-0
          mt-5
          text-green-400
          hover:text-green-200
          transition
        "
      >
        ./view_project →
      </a>

    </motion.div>
  )
}

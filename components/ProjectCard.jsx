"use client"

import { motion } from "framer-motion"

export default function ProjectCard({title,description,stack,link}){

  return(
    <motion.div
      whileHover={{y:-8}}
      transition={{duration:0.2}}
      className="
      bg-neutral-900
      border
      border-neutral-800
      rounded-xl
      p-6
      hover:border-indigo-500
      transition
      "
    >

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>

      <p className="mt-4 text-sm text-indigo-400">
        {stack}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-5 text-white hover:text-indigo-400 transition"
      >
        View Project →
      </a>

    </motion.div>
  )
}
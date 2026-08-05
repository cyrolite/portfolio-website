"use client"

import { motion } from "framer-motion"

export default function Hero(){
  return(
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="text-6xl font-bold"
      >
        Hi, I'm <span className="text-indigo-500">Nicholas</span>
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5}}
        className="mt-6 text-xl text-gray-400 max-w-2xl"
      >
        I build security-focused systems and explore the intersection between
        cybersecurity and machine learning.
      </motion.p>

      <motion.a
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.8}}
        href="#projects"
        className="mt-8 bg-indigo-600 px-6 py-3 rounded-xl text-white hover:bg-indigo-700 transition"
      >
        View Work
      </motion.a>

    </section>
  )
}
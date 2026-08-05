"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero(){

  return(
    <section className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
    ">

      <motion.div
        initial={{
          opacity:0,
          y:40
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.8
        }}
        className="
          w-full
          max-w-4xl
          rounded-xl
          border
          border-green-400/20
          bg-black/40
          backdrop-blur-md
          shadow-2xl
          p-8
          font-mono
        "
      >

        <div className="
          flex
          gap-2
          mb-6
        ">
          <span className="w-3 h-3 rounded-full bg-red-500"/>
          <span className="w-3 h-3 rounded-full bg-yellow-500"/>
          <span className="w-3 h-3 rounded-full bg-green-500"/>
        </div>


        <p className="
          text-green-400
          text-sm
          mb-4
        ">
          root@nicholas:~$ whoami
        </p>


        <h1 className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          mb-4
        ">
          Nicholas Yap
        </h1>


        <div className="
          text-green-300
          text-xl
          md:text-2xl
          mb-6
        ">

          <TypeAnimation
            sequence={[
              "Cybersecurity Student",
              2000,
              "Penetration Testing Enthusiast",
              2000,
              "Building Security + ML Systems",
              2000,
              "CTF Player & Vulnerability Researcher",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          <span className="
            animate-pulse
            ml-1
          ">
            |
          </span>

        </div>


        <p className="
          text-zinc-300
          max-w-2xl
          text-base
          md:text-lg
          leading-relaxed
          mb-8
        ">
          Exploring how systems break, how vulnerabilities emerge,
          and how machine learning can improve cybersecurity.
        </p>


        <div className="
          flex
          gap-4
          flex-wrap
        ">

          <a
            href="#projects"
            className="
              px-6
              py-3
              rounded-lg
              bg-green-500/20
              border
              border-green-400/30
              text-green-300
              hover:bg-green-500/30
              transition
            "
          >
            View Projects
          </a>


          <a
            href="#contact"
            className="
              px-6
              py-3
              rounded-lg
              border
              border-zinc-700
              text-zinc-300
              hover:bg-white/10
              transition
            "
          >
            Contact Me
          </a>

        </div>


      </motion.div>

    </section>
  )
}
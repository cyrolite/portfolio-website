"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTransition } from "./TransitionContext"

export default function Hero(){

  const {
    isTransitioning,
  } = useTransition()

  return(
    <section className="
      relative
      min-h-[100svh]
      md:min-h-screen
      flex
      items-center
      justify-center
      px-4
      pt-8
      pb-[calc(5rem+env(safe-area-inset-bottom))]
      md:px-6
      md:py-0
    ">

      <motion.div
        initial={{
          opacity:0,
          y:40
        }}
        animate={{
          opacity: isTransitioning ? 0 : 1,
          y: isTransitioning ? -80 : 0,
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
          p-5
          sm:p-6
          md:p-8
          font-mono
        "
      >


        <p className="
          text-green-400
          text-sm
          mb-4
        ">
          root@nicholas:~$ whoami
        </p>


        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          leading-tight
          md:leading-none
          font-bold
          text-white
          mb-4
        ">
          Nicholas Yap
        </h1>


        <div className="
          text-green-300
          min-h-[4.5rem]
          text-base
          leading-relaxed
          sm:text-xl
          md:text-2xl
          md:min-h-0
          md:leading-8
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
            cursor={false}
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


        <div
          className="
            flex
            flex-wrap
            gap-4
            mt-6
          "
        >

          <a
            href="https://github.com/cyrolite"
            target="_blank"
            rel="noopener noreferrer"

            className="
              px-5
              py-2
              min-h-11
              inline-flex
              items-center
              justify-center
              md:min-h-0
              rounded-lg
              bg-zinc-800
              border
              border-zinc-600
              text-white
              hover:bg-zinc-700
              hover:border-zinc-400
              transition
              font-mono
              text-sm
            "
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/nicholas-yap-b6069b20b/"
            target="_blank"
            rel="noopener noreferrer"

            className="
              px-5
              py-2
              min-h-11
              inline-flex
              items-center
              justify-center
              md:min-h-0
              rounded-lg
              bg-blue-600/20
              border
              border-blue-500/40
              text-blue-300
              hover:bg-blue-600/40
              hover:border-blue-400
              transition
              font-mono
              text-sm
            "
          >
            LinkedIn
          </a>


        </div>

        <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:hidden">
          Tap <span className="text-green-300">Apps</span> below to explore my portfolio.
        </p>

      </motion.div>

    </section>
  )
}

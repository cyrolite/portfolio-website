"use client"

import Loader from "@/components/Loader"
import Background from "@/components/Background"
import Terminal from "@/components/Terminal"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import About from "@/components/About"
import { TransitionProvider, useTransition } from "@/components/TransitionContext"
import { AnimatePresence, motion } from "framer-motion"

function MainContent(){

  const { activePage } = useTransition()

  return(
    <Loader>
      <Background/>

      <Navbar/>

      <main className="
        min-h-screen
      ">

        <AnimatePresence mode="wait">

          <motion.div
            key={activePage}
            initial={{
              opacity:0,
              y:40
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              y:-40
            }}
            transition={{
              duration:0.5
            }}
            className="min-h-screen"
          >

            {activePage === "home" && <Hero/>}

            {activePage === "about" && <About/>}

            {activePage === "skills" && <Skills/>}

            {activePage === "projects" && <Projects/>}

            {activePage === "contact" && <Contact/>}

          </motion.div>

        </AnimatePresence>
      </main>

      <Terminal/>
    </Loader>
  )
}


export default function Home(){

  return(
    <TransitionProvider>
      <MainContent/>
    </TransitionProvider>
  )
}
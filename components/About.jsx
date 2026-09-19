"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function About(){

  const lines=[
    {
      command:"root@cyrolite:~$ whoami",
      text:"Nicholas Yap\nInformation Security Student | AI Builder | Cybersecurity Enthusiast"
    },
    {
      command:"root@cyrolite:~$ cat education.txt",
      text:"National University of Singapore\nBachelor of Computing (Information Security)\nSecond Major in Mathematics"
    },
    {
      command:"root@cyrolite:~$ cat interests.txt",
      text:"Cybersecurity\n> Penetration Testing\n> Vulnerability Research\n> Digital Forensics\n> Artificial Intelligence"
    },
    {
      command:"root@cyrolite:~$ cat experience.txt",
      text:"Data Automation Engineer @ Infineon\nSystems Deployment Facilitator @ Accenture\nUndergraduate Teaching Assistant @ NUS"
    },
    {
      command:"root@cyrolite:~$ cat philosophy.txt",
      text:"Understanding how systems fail\nis the first step towards building better ones."
    }
  ]

  return(
    <section
      id="about"
      className="
      min-h-full
      md:min-h-screen
      flex
      items-center
      justify-center
      px-0
      py-2
      md:px-6
      md:py-0
      "
    >

      <motion.div
        initial={{
          opacity:0,
          y:40
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.8
        }}
        viewport={{
          once:true
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
        p-4
        md:p-8
        font-mono
        text-sm
        leading-relaxed
        md:text-base
        md:leading-normal
        break-words
        min-w-0
        "
      >


        {
          lines.map((line,index)=>(
            <div
              key={index}
              className="mb-6 last:mb-0 md:last:mb-6"
            >

              <p className="text-green-400">
                {line.command}
              </p>

              <TypeAnimation
                sequence={[
                  line.text,
                  1000
                ]}
                speed={35}
                cursor={true}
                wrapper="pre"
                className="
                text-zinc-300
                whitespace-pre-wrap
                "
              />

            </div>
          ))
        }


      </motion.div>

    </section>
  )
}

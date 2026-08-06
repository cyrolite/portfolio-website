"use client"

import { motion } from "framer-motion"

export default function AnimatedSection({children,id,className=""}){

  return(
    <motion.section
      id={id}
      initial={{
        opacity:0,
        y:60
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true,
        amount:0.3
      }}

      transition={{
        duration:0.8,
        ease:"easeOut"
      }}

      className={className}
    >
      {children}
    </motion.section>
  )
}
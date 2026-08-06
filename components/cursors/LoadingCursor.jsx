"use client"

import { motion } from "framer-motion"

export default function LoadingCursor(){

  return(
    <motion.svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

      animate={{
        rotate:360
      }}

      transition={{
        duration:1,
        repeat:Infinity,
        ease:"linear"
      }}
    >

      <circle
        cx="13"
        cy="13"
        r="9"
        stroke="#22c55e"
        strokeWidth="3"
        opacity="0.25"
      />

      <path
        d="
          M13 4
          A9 9 0 0 1 22 13
        "
        stroke="#86efac"
        strokeWidth="3"
        strokeLinecap="round"
      />

    </motion.svg>
  )
}
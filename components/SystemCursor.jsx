"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTransition } from "./TransitionContext"

import DefaultCursor from "./cursors/DefaultCursor"
import PointerCursor from "./cursors/PointerCursor"
import TextCursor from "./cursors/TextCursor"
import LoadingCursor from "./cursors/LoadingCursor"

export default function SystemCursor(){

  const [position,setPosition]=useState({
    x:0,
    y:0
  })

  const [hovering,setHovering]=useState(false)
  const [textHover,setTextHover]=useState(false)

  const {loading}=useTransition()


  useEffect(()=>{

    function move(e){

      setPosition({
        x:e.clientX,
        y:e.clientY
      })

    }


    function checkCursor(e){

      const target=e.target


      const isClickable =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']")


      const isText =
        target.closest(
          "p,h1,h2,h3,h4,h5,h6,span,li,label"
        )


      setHovering(Boolean(isClickable))

      setTextHover(
        Boolean(isText) && !Boolean(isClickable)
      )

    }


    window.addEventListener(
      "mousemove",
      move
    )


    window.addEventListener(
      "mousemove",
      checkCursor
    )


    return()=>{

      window.removeEventListener(
        "mousemove",
        move
      )

      window.removeEventListener(
        "mousemove",
        checkCursor
      )

    }

  },[])



  return(
    <motion.div

      animate={{
        x:position.x,
        y:position.y
      }}

      transition={{
        type:"spring",
        stiffness:500,
        damping:30
      }}

      className="
        system-cursor
        fixed
        top-0
        left-0
        z-[999]
        pointer-events-none
      "

    >

      {
        loading
        ?
        (
          <LoadingCursor/>
        )
        :
        hovering
        ?
        (
          <PointerCursor/>
        )
        :
        textHover
        ?
        (
          <TextCursor/>
        )
        :
        (
          <DefaultCursor/>
        )
      }


    </motion.div>
  )
}

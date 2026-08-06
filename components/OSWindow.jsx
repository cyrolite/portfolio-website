"use client"

import { motion } from "framer-motion"
import { useTransition } from "./TransitionContext"

export default function OSWindow({
  id,
  title,
  children,
  onClose,
  onMinimize,
  onMaximize,
  maximized
}){

  const {
    activeWindow,
    focusWindow
  } = useTransition()


  const isActive = activeWindow === id


  return(
    <motion.div

      onMouseDown={()=>{
        focusWindow(id)
      }}

      drag={!maximized}

      dragMomentum={false}

      initial={{
        opacity:0,
        scale:0.9
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      exit={{
        opacity:0,
        scale:0.9
      }}

      transition={{
        duration:0.2
      }}

      className={`
        fixed
        ${
          isActive
          ?
          "z-[60]"
          :
          "z-40"
        }
        rounded-xl
        border
        border-green-400/20
        bg-black/80
        backdrop-blur-md
        shadow-2xl
        overflow-hidden
        flex
        flex-col

        ${
          maximized
          ?
          `
          inset-4
          `
          :
          `
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[80%]
          max-w-4xl
          h-[70vh]
          `
        }
      `}

    >


      {/* Header */}

      <div

        className="
          h-12
          flex
          items-center
          px-4
          border-b
          border-green-400/20
          bg-black/50
          font-mono
          cursor-move
        "

      >


        <div
          className="
            flex
            gap-2
          "
        >


          {/* Close */}

          <button
            onClick={onClose}

            className="
              w-3
              h-3
              rounded-full
              bg-red-500
              cursor-pointer
              hover:scale-110
              transition
            "
          />



          {/* Minimize */}

          <button
            onClick={onMinimize}

            className="
              w-3
              h-3
              rounded-full
              bg-yellow-500
              cursor-pointer
              hover:scale-110
              transition
            "
          />



          {/* Maximize */}

          <button
            onClick={onMaximize}

            className="
              w-3
              h-3
              rounded-full
              bg-green-500
              cursor-pointer
              hover:scale-110
              transition
            "
          />


        </div>



        <p
          className="
            absolute
            left-1/2
            -translate-x-1/2
            text-green-400
            text-sm
          "
        >
          {title}
        </p>


      </div>



      {/* Content */}

      <div
        className="
          flex-1
          p-6
          overflow-auto
          text-zinc-300
        "
      >

        {children}

      </div>


    </motion.div>
  )
}
"use client"

import { motion } from "framer-motion"

export default function OSWindow({
  title,
  children,
  onClose,
  onMinimize,
  onMaximize,
  maximized
}){


  return(
    <motion.div

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
        z-50
        rounded-xl
        border
        border-green-400/20
        bg-black/80
        backdrop-blur-md
        shadow-2xl
        overflow-hidden

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
          p-6
          overflow-auto
          h-[calc(100%-3rem)]
          text-zinc-300
        "
      >

        {children}

      </div>


    </motion.div>
  )
}
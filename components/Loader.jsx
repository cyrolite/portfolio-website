"use client"

import { useEffect, useState } from "react"

export default function Loader({children}){

  const [progress,setProgress]=useState(0)
  const [loaded,setLoaded]=useState(false)

  useEffect(()=>{

    const interval=setInterval(()=>{

      setProgress(prev=>{

        if(prev>=100){
          clearInterval(interval)

          setTimeout(()=>{
            setLoaded(true)
          },500)

          return 100
        }

        return Math.min(prev + Math.floor(Math.random()*15),100)
      })

    },200)


    return()=>clearInterval(interval)

  },[])


  if(loaded){
    return children
  }


  return(
    <div className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black
      font-mono
      text-green-400
    ">

      <div className="
        w-[420px]
        border
        border-green-400/30
        rounded-lg
        p-8
        bg-black
        shadow-lg
      ">

        <h1 className="
          text-xl
          mb-6
          font-bold
        ">
          Initializing Cyrolite...
        </h1>


        <div className="
          h-3
          w-full
          bg-green-900/30
          rounded
          overflow-hidden
        ">

          <div
            className="
              h-full
              bg-green-400
              transition-all
            "
            style={{
              width:`${progress}%`
            }}
          />

        </div>


        <p className="mt-3 text-sm">
          {progress}%
        </p>


        <div className="
          mt-6
          text-xs
          opacity-70
          space-y-2
        ">

          <p>
            Loading portfolio assets...
          </p>

          <p>
            Loading technical profile...
          </p>

          <p>
            Loading project archives...
          </p>

          <p>
            Loading interface...
          </p>

        </div>

      </div>

    </div>
  )
}
"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()

export function TransitionProvider({children}){

  const [isTransitioning,setIsTransitioning] = useState(false)

  const [target,setTarget] = useState(null)


  function navigate(section){

    setTarget(section)
    setIsTransitioning(true)

  }


  function completeTransition(){

    const element=document.getElementById(target)

    if(element){
      element.scrollIntoView({
        behavior:"smooth"
      })
    }

    setIsTransitioning(false)
  }


  return(
    <TransitionContext.Provider
      value={{
        isTransitioning,
        navigate,
        completeTransition
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}


export function useTransition(){

  return useContext(TransitionContext)

}
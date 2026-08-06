"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()


export function TransitionProvider({ children }) {

  const [isTransitioning,setIsTransitioning] = useState(false)
  const [activePage,setActivePage] = useState("home")
  const [loading,setLoading] = useState(false)

  const [search,setSearch] = useState("")


  function navigate(page){

    setLoading(true)
    setIsTransitioning(true)

    setTimeout(()=>{

      setActivePage(page)

      setIsTransitioning(false)

      setTimeout(()=>{
        setLoading(false)
      },500)

    },500)

  }


  return(
    <TransitionContext.Provider

      value={{

        isTransitioning,
        navigate,
        activePage,
        loading,

        search,
        setSearch

      }}

    >

      {children}

    </TransitionContext.Provider>
  )
}


export function useTransition(){

  return useContext(TransitionContext)

}
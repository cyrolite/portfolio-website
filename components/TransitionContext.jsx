"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()


export function TransitionProvider({ children }) {

  const [isTransitioning,setIsTransitioning] = useState(false)
  const [activePage,setActivePage] = useState("home")
  const [loading,setLoading] = useState(false)

  const [search,setSearch] = useState("")

  const [openWindows,setOpenWindows] = useState([])



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



  function openApp(app){

    setOpenWindows(prev=>{

      const existing = prev.find(
        window=>window.page === app.page
      )


      if(existing){

        return prev.map(window=>
          window.page === app.page
          ?
          {
            ...window,
            minimized:false
          }
          :
          window
        )

      }


      return [
        ...prev,
        {
          ...app,
          id:Date.now(),
          minimized:false,
          maximized:false
        }
      ]

    })

  }



  function closeWindow(id){

    setOpenWindows(prev=>
      prev.filter(
        window=>window.id !== id
      )
    )

  }



  function minimizeWindow(id){

    setOpenWindows(prev=>

      prev.map(window=>

        window.id === id

        ?
        {
          ...window,
          minimized:true
        }

        :
        window

      )

    )

  }



  function restoreWindow(id){

    setOpenWindows(prev=>

      prev.map(window=>

        window.id === id

        ?
        {
          ...window,
          minimized:false
        }

        :
        window

      )

    )

  }



  function maximizeWindow(id){

    setOpenWindows(prev=>

      prev.map(window=>

        window.id === id

        ?
        {
          ...window,
          maximized:!window.maximized
        }

        :
        window

      )

    )

  }



  return(
    <TransitionContext.Provider

      value={{

        isTransitioning,
        navigate,
        activePage,
        loading,

        search,
        setSearch,

        openWindows,
        openApp,

        closeWindow,
        minimizeWindow,
        restoreWindow,
        maximizeWindow

      }}

    >

      {children}

    </TransitionContext.Provider>
  )
}



export function useTransition(){

  return useContext(TransitionContext)

}
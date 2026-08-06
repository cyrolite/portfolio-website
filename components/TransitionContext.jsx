"use client"

import { createContext, useContext, useState } from "react"

const TransitionContext = createContext()


export function TransitionProvider({ children }) {

  const [isTransitioning,setIsTransitioning] = useState(false)
  const [activePage,setActivePage] = useState("home")
  const [loading,setLoading] = useState(false)

  const [search,setSearch] = useState("")

  const [openWindows,setOpenWindows] = useState([])

  const [activeWindow,setActiveWindow] = useState(null)



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

        setActiveWindow(existing.id)

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


      const newWindow = {
        ...app,
        id:Date.now(),
        minimized:false,
        maximized:false
      }


      setActiveWindow(newWindow.id)


      return [
        ...prev,
        newWindow
      ]

    })

  }



  function focusWindow(id){

    setActiveWindow(id)

  }



  function closeWindow(id){

    setOpenWindows(prev=>
      prev.filter(
        window=>window.id !== id
      )
    )


    if(activeWindow === id){
      setActiveWindow(null)
    }

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


    if(activeWindow === id){
      setActiveWindow(null)
    }

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


    setActiveWindow(id)

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
        maximizeWindow,

        activeWindow,
        focusWindow

      }}

    >

      {children}

    </TransitionContext.Provider>
  )
}



export function useTransition(){

  return useContext(TransitionContext)

}
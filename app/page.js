"use client"

import Loader from "@/components/Loader"
import Background from "@/components/Background"
import Terminal from "@/components/Terminal"
import Taskbar from "@/components/Taskbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import About from "@/components/About"
import SystemCursor from "@/components/SystemCursor"
import OSWindow from "@/components/OSWindow"
import { TransitionProvider, useTransition } from "@/components/TransitionContext"


function WindowContent({app}){

  if(app.page === "about"){
    return <About/>
  }


  if(app.page === "skills"){
    return <Skills/>
  }


  if(app.page === "projects"){
    return <Projects/>
  }


  if(app.page === "contact"){
    return <Contact/>
  }


  return null

}



function MainContent(){

  const {
    openWindows,
    closeWindow,
    minimizeWindow,
    maximizeWindow
  } = useTransition()



  return(
    <Loader>
      <SystemCursor/>

      <Background/>

      <Taskbar/>



      <main
        className="
          min-h-screen
        "
      >

        <Hero/>

      </main>

      {
        openWindows.map((app)=>(

          !app.minimized && (

            <OSWindow

              key={app.id}

              title={app.name}

              onClose={()=>closeWindow(app.id)}

              onMinimize={()=>minimizeWindow(app.id)}

              onMaximize={()=>maximizeWindow(app.id)}

              maximized={app.maximized}

            >

              <WindowContent app={app}/>

            </OSWindow>

          )

        ))
      }

      <Terminal/>
    </Loader>
  )
}


export default function Home(){

  return(
    <TransitionProvider>
      <MainContent/>
    </TransitionProvider>
  )
}
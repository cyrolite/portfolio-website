"use client"

import { useState, useRef, useEffect } from "react"
import { commands } from "./terminalCommands"
import { useTransition } from "./TransitionContext"

export default function Terminal({id}){

  const [input,setInput]=useState("")

  const [history,setHistory]=useState([
    "Welcome to Nicholas' portfolio terminal.",
    "Type 'help' to see available commands."
  ])

  const [isTyping,setIsTyping]=useState(false)


  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  const {
    closeWindow
  }=useTransition()



  useEffect(()=>{

    inputRef.current?.focus()

  },[])



  useEffect(()=>{

    bottomRef.current?.scrollIntoView({
      behavior:"smooth"
    })

  },[history])



  function typeResponse(text){

    setIsTyping(true)

    let index=0

    const interval=setInterval(()=>{

      setHistory(prev=>{

        const copy=[...prev]

        copy[copy.length-1]=text.slice(0,index)

        return copy

      })


      index++


      if(index>text.length){

        clearInterval(interval)

        setIsTyping(false)

        setTimeout(()=>{

          inputRef.current?.focus()

        },0)

      }


    },20)

  }



  function executeCommand(){

    const command=input.trim().toLowerCase()


    if(!command){
      return
    }

    if(command==="exit"){
      closeWindow(id)
      return
    }



    if(command==="clear"){

      setHistory([])

      setInput("")

      return

    }



    const output =
      commands[command] ||
      `Command not found: ${command}`



    setHistory(prev=>[

      ...prev,

      `nicholas@kali:~$ ${command}`,

      ""

    ])



    setInput("")



    typeResponse(
`[system] processing request...

${output}`
    )

  }



  return(

    <div

      onClick={()=>{

        inputRef.current?.focus()

      }}

      className="
        w-full
        h-full
        bg-black
        font-mono
        text-green-300
        overflow-hidden
        cursor-text
      "

    >


      <div

        className="
          h-full
          overflow-y-auto
          text-sm
          no-scrollbar
        "

      >


        {
          history.map((line,index)=>(

            <pre
              key={index}
              className="whitespace-pre-wrap"
            >
              {line}
            </pre>

          ))
        }



        <div ref={bottomRef}/>



        {
          !isTyping && (

            <pre>

              <span className="font-bold">
                nicholas@kali:~$
              </span>

              {" "}

              {input}

              <span className="animate-pulse">
                █
              </span>

            </pre>

          )
        }


      </div>



      <input

        ref={inputRef}

        value={input}

        disabled={isTyping}

        onChange={(e)=>
          setInput(e.target.value)
        }

        onKeyDown={(e)=>{

          if(e.key==="Enter"){

            executeCommand()

          }

        }}

        className="
          absolute
          opacity-0
        "

      />


    </div>

  )

}
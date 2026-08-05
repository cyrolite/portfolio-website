"use client"

import { useState, useRef, useEffect } from "react"
import { commands } from "./terminalCommands"

export default function Terminal(){

  const [open,setOpen]=useState(false)
  const [input,setInput]=useState("")
  const [history,setHistory]=useState([
    "Welcome to Nicholas' portfolio terminal.",
    "Type 'help' to see available commands."
  ])

  const [isTyping,setIsTyping]=useState(false)
  useEffect(()=>{
      bottomRef.current?.scrollIntoView({
          behavior:"smooth"
      })
  },[history])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

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

    let output=""

    if(command==="clear"){
        setHistory([])
        setInput("")
        return
    }

    if(command==="exit"){
        setOpen(false)
        return
    }

    output = commands[command] || `Command not found: ${command}`

    if(command!=="clear" && command!=="exit"){

    output =
    `[system] processing request...

    ${output}`

    }

    setHistory(prev=>[
    ...prev,
    `nicholas@kali:~$ ${command}`,
    ""
    ])

    setInput("")

    typeResponse(output)

  }


  if(!open){

    return(
      <button
        onClick={()=>setOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          rounded-full
          bg-green-500/20
          border
          border-green-400/40
          px-5
          py-3
          text-green-300
          font-mono
          hover:bg-green-500/30
        "
      >
        &gt;_
      </button>
    )

  }


  return(
    <div className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-sm
      px-6
    ">

      <div 
        onClick={()=>{
            inputRef.current?.focus()
        }}
        className="
        w-full
        max-w-3xl
        h-[500px]
        bg-black
        border
        border-green-400/30
        rounded-xl
        p-6
        font-mono
        text-green-300
        overflow-hidden
      ">


        <div className="
          flex
          justify-between
          mb-4
        ">

          <span>
            nicholas@kali:~
          </span>

          <button
            onClick={()=>setOpen(false)}
          >
            X
          </button>

        </div>


        <div className="
            h-[380px]
            overflow-y-auto
            text-sm
            no-scrollbar
        ">

        {
        history.map((line,index)=>(
            <pre key={index}>
            {line}
            </pre>
        ))
        }

        <div ref={bottomRef}/>

        {!isTyping && (
        <pre>
            <span className="font-bold">
            nicholas@kali:~$
            </span>

            {" "}{input}

            <span className="animate-pulse">
            █
            </span>
        </pre>
        )}

        </div>


        <input
            ref={inputRef}
            autoFocus
            value={input}
            disabled={isTyping}
            onChange={(e)=>setInput(e.target.value)}
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

    </div>
  )

}
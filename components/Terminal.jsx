"use client"

import { useState, useRef, useEffect } from "react"
import { commands } from "./terminalCommands"
import { useTransition } from "./TransitionContext"

export default function Terminal({ id }) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    "Welcome to Nicholas' portfolio terminal.",
    "Type 'help' to see available commands."
  ])
  const [isTyping, setIsTyping] = useState(false)

  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const typingIntervalRef = useRef(null)
  const followOutputRef = useRef(true)
  const { closeWindow, activeWindow } = useTransition()

  useEffect(() => {
    // Opening a phone window should not immediately bring up its keyboard.
    if (
      activeWindow === id &&
      window.matchMedia("(min-width: 768px) and (pointer: fine)").matches
    ) {
      inputRef.current?.focus({ preventScroll: true })
    } else if (activeWindow !== id) {
      inputRef.current?.blur()
    }
  }, [activeWindow, id])

  useEffect(() => {
    const output = outputRef.current
    if (output && followOutputRef.current) {
      output.scrollTop = output.scrollHeight
    }
  }, [history])

  useEffect(() => {
    return () => clearInterval(typingIntervalRef.current)
  }, [])

  function typeResponse(text) {
    clearInterval(typingIntervalRef.current)
    setIsTyping(true)
    let index = 0

    typingIntervalRef.current = setInterval(() => {
      index += 1
      const response = text.slice(0, index)
      setHistory(previous => [...previous.slice(0, -1), response])

      if (index >= text.length) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
        setIsTyping(false)
      }
    }, 20)
  }

  function executeCommand(event) {
    event.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command || isTyping) return

    if (command === "exit") {
      closeWindow(id)
      return
    }

    followOutputRef.current = true
    if (command === "clear") {
      setHistory([])
      setInput("")
      return
    }

    let output
    if (command === "resume") {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "Nicholas_Yap_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      output = "Resume downloaded."
    } else {
      output = commands[command] || `Command not found: ${command}`
    }

    setHistory(previous => [...previous, `nicholas@kali:~$ ${command}`, ""])
    setInput("")
    typeResponse(`[system] processing request...\n\n${output}`)
  }

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-black font-mono text-green-300">
      <div
        ref={outputRef}
        onScroll={event => {
          const output = event.currentTarget
          followOutputRef.current = output.scrollHeight - output.scrollTop - output.clientHeight < 48
        }}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4 text-sm leading-relaxed"
        aria-label="Terminal output"
        tabIndex={0}
      >
        {history.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            {line}
          </pre>
        ))}
      </div>

      <form onSubmit={executeCommand} className="shrink-0 border-t border-green-900 pt-3">
        <div className="flex min-w-0 items-center gap-2">
          <label htmlFor={`terminal-command-${id}`} className="shrink-0 font-bold text-sm">
            <span className="hidden sm:inline" aria-hidden="true">nicholas@kali:~</span>
            <span aria-hidden="true">$</span>
            <span className="sr-only">Terminal command</span>
          </label>
          <input
            id={`terminal-command-${id}`}
            ref={inputRef}
            value={input}
            readOnly={isTyping}
            onChange={event => setInput(event.target.value)}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            placeholder={isTyping ? "Processing…" : "Type a command"}
            className="min-h-11 min-w-0 flex-1 rounded border border-green-900 bg-green-950/20 px-2 text-base text-green-300 caret-green-300 outline-none placeholder:text-green-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 sm:text-sm"
          />
          <button
            type="submit"
            disabled={isTyping || !input.trim()}
            aria-label="Run terminal command"
            className="min-h-11 shrink-0 rounded border border-green-700 px-3 text-sm transition-colors hover:bg-green-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  )
}

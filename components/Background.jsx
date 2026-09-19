"use client"

import { motion } from "framer-motion"

const logsLeft=[
  "$ nmap -sV -O 192.168.1.0/24",
  "[SCAN] Initializing reconnaissance...",
  "[+] Host discovered: 192.168.1.15",
  "[+] SSH service detected :22",
  "[+] HTTP service detected :80",
  "[+] HTTPS service detected :443",
  "[INFO] Enumerating endpoints...",
  "[INFO] Checking vulnerabilities...",
  "[CVE] CVE-2024-3094 detected",
  "[+] Generating report...",
  "root@kali:~$ python3 exploit.py",
  "[+] Testing payload...",
  "[+] Analysis completed",
  "",
  "$ cat report.json",
  "{ severity: medium }",
]

const logsRight=[
  "root@server:~$ tail -f auth.log",
  "[AUTH] User login detected",
  "[AUTH] Failed authentication attempt",
  "[SYSTEM] Monitoring process started",
  "[NETWORK] Packet capture enabled",
  "[IDS] Suspicious traffic detected",
  "[FIREWALL] Rule updated",
  "[SYS] Service restarted",
  "[SCAN] Malware signature database updated",
  "[INFO] Threat intelligence synced",
  "$ sudo systemctl status agent",
  "Active: running",
  "",
  "$ whoami",
  "security-admin",
]

function TerminalColumn({logs,direction}){

  return(
    <motion.div
      animate={{
        y: direction==="up"
          ? ["0%","-50%"]
          : ["-50%","0%"]
      }}
      transition={{
        duration:40,
        repeat:Infinity,
        ease:"linear"
      }}
      className="
        font-mono
        text-green-300
        text-lg
        leading-8
        opacity-25
        blur-[1.5px]
        drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]
      "
    >
      {
        [...logs,...logs,...logs,...logs].map((line,index)=>(
          <p key={index}>
            {line}
          </p>
        ))
      }
    </motion.div>
  )
}

export default function Background(){

  return(
    <div aria-hidden="true" className="
      fixed
      inset-0
      -z-10
      overflow-hidden
      bg-black
    ">

      <div className="
        absolute
        inset-0
        grid
        grid-cols-1 md:grid-cols-2
        gap-6 md:gap-12
        p-4 md:p-8
      ">

        <TerminalColumn
          logs={logsLeft}
          direction="up"
        />

        <div className="hidden md:block">
          <TerminalColumn logs={logsRight} direction="down"/>
        </div>

      </div>

      <div className="
        absolute
        inset-0
        bg-black/40
      "/>

    </div>
  )
}

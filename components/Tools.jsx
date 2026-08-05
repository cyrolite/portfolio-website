export default function Tools(){
  const tools=[
    "Wireshark",
    "Burp Suite",
    "John the Ripper",
    "gdb",
    "Nmap",
    "Kali Linux"
  ]

  return(
    <section className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Security Tools
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">

        {
          tools.map((tool)=>(
            <div
              key={tool}
              className="
              bg-neutral-900
              border
              border-neutral-800
              rounded-xl
              p-5
              hover:border-indigo-500
              transition
              "
            >
              {tool}
            </div>
          ))
        }

      </div>

    </section>
  )
}
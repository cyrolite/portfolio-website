export default function Tools(){

  const categories=[
    {
      title:"Security Testing",
      tools:[
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "John the Ripper"
      ]
    },

    {
      title:"Reverse Engineering",
      tools:[
        "gdb",
        "radare2",
        "pwntools"
      ]
    },

    {
      title:"Operating Systems",
      tools:[
        "Kali Linux",
        "Linux",
        "VMware"
      ]
    }
  ]


  return(
    <section
      className="
        py-20
        px-6
      "
    >

      <h2 className="
        text-4xl
        font-bold
        text-center
        text-white
        mb-12
      ">
        Security Toolkit
      </h2>


      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
      ">

        {
          categories.map((category)=>(

            <div
              key={category.title}
              className="
                bg-black/40
                backdrop-blur-md
                border
                border-green-400/20
                rounded-xl
                p-6
                font-mono
                hover:border-green-400/50
                transition
              "
            >

              <p className="
                text-green-400
                mb-5
              ">
                root@nicholas:~$ ls {category.title.toLowerCase().replaceAll(" ","_")}
              </p>


              <div className="
                flex
                flex-col
                gap-3
              ">

                {
                  category.tools.map((tool)=>(

                    <div
                      key={tool}
                      className="
                        px-4
                        py-3
                        rounded-lg
                        bg-green-500/10
                        border
                        border-green-400/20
                        text-green-200
                      "
                    >
                      {">"} {tool}
                    </div>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </section>
  )
}
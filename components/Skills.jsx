export default function Skills(){

  const categories=[
    {
      title:"Cybersecurity & Forensics",
      skills:[
        "Network Security",
        "Cryptography",
        "Digital Forensics",
        "Penetration Testing",
        "Vulnerability Management",
        "Reverse Engineering",
        "Binary Exploitation",
        "CTF"
      ]
    },

    {
      title:"AI / Machine Learning",
      skills:[
        "RAG Architecture",
        "ChromaDB",
        "Sentence Transformers",
        "LLM Integration",
        "Prompt Engineering",
        "Local LLM Deployment",
        "XGBoost",
        "OpenAI Whisper"
      ]
    },

    {
      title:"Programming & Development",
      skills:[
        "Python",
        "C",
        "C++",
        "Java",
        "SQL",
        "HTML/CSS",
        "Flask",
        "Next.js"
      ]
    },

    {
      title:"Tools & Infrastructure",
      skills:[
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "GDB",
        "pwntools",
        "radare2",
        "Kali Linux",
        "Git",
        "MySQL",
        "PostgreSQL",
        "SQLite"
      ]
    }
  ]


  return(
    <section className="
      py-20
      px-6
    ">

      <h2 className="
        text-4xl
        font-bold
        text-center
        text-white
        mb-12
      ">
        Technical Skills
      </h2>


      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
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

              <h3 className="
                text-green-400
                text-xl
                mb-5
              ">
                {">"} {category.title}
              </h3>


              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {
                  category.skills.map((skill)=>(
                    <span
                      key={skill}
                      className="
                        px-3
                        py-2
                        rounded-lg
                        bg-green-500/10
                        border
                        border-green-400/20
                        text-green-200
                        text-sm
                      "
                    >
                      {skill}
                    </span>
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
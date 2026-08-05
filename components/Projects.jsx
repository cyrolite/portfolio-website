import ProjectCard from "./ProjectCard"

export default function Projects(){

  const projects=[
    {
      title:"AI Vulnerability Analyser",
      description:"AI-powered vulnerability analysis assistant that combines reconnaissance, CVE analysis and remediation guidance.",
      stack:"Python • LLM • Cybersecurity",
      link:"https://github.com/cyrolite/vulnerability_ai_chatbot"
    },
    {
      title:"Packet Sniffer",
      description:"A network packet inspection tool designed to capture and analyse network traffic.",
      stack:"Python • Networking • Security",
      link:"https://github.com/cyrolite/packet_sniffer"
    },
    {
        title:"File Encrypter",
        description:"A secure file encryption application implementing AES-256 encryption and SHA-256 integrity verification.",
        stack:"Java • AES-256 • Cryptography",
        link:"https://github.com/cyrolite/file-encrypter"
    },
    {
      title:"CollabSync",
      description:"A contact management application developed as part of a software engineering team project.",
      stack:"Java • OOP • Software Engineering",
      link:"https://github.com/AY2425S2-CS2103T-F10-3/tp"
    },
    {
      title:"PassManager",
      description:"A password management application with backend services for storing and managing credentials.",
      stack:"Java • Backend Development",
      link:"https://github.com/iamanoob44/PassManager"
    }
  ]

  return(
    <section
      id="projects"
      className="py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="
        grid
        md:grid-cols-2
        gap-6
        max-w-5xl
        mx-auto
      ">
        {
          projects.map((project)=>(
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))
        }
      </div>

    </section>
  )
}
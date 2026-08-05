export default function Skills(){
  const skills=[
    "Python",
    "C",
    "Java",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "Next.js"
  ]

  return(
    <section className="py-20 px-6 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Programming Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">

        {
          skills.map((skill)=>(
            <div
              key={skill}
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
              {skill}
            </div>
          ))
        }

      </div>

    </section>
  )
}
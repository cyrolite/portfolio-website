"use client"

export default function Resume(){

  return(

    <div
      className="
        w-full
        h-full
        flex
        flex-col
        gap-4
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
        "
      >

        <p className="
          text-green-400
          font-mono
        ">
          /home/nicholas/resume.pdf
        </p>


        <a
          href="/resume.pdf"
          download

          className="
            px-4
            py-2
            rounded-lg
            bg-green-500/20
            border
            border-green-400/30
            text-green-300
            hover:bg-green-500/30
            transition
            font-mono
            text-sm
          "
        >
          Download
        </a>

      </div>


      <iframe

        src="/resume.pdf"

        className="
          w-full
          flex-1
          rounded-lg
          border
          border-green-400/20
        "

      />


    </div>

  )

}
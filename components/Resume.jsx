"use client"

export default function Resume(){

  return(

    <div
      className="
        w-full
        h-full
        min-w-0
        flex
        flex-col
        gap-4
      "
    >

      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          justify-between
          items-start
          md:items-center
        "
      >

        <p className="
          text-green-400
          font-mono
          text-sm
          md:text-base
          break-all
        ">
          /home/nicholas/resume.pdf
        </p>


        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-green-400/30 bg-green-500/20 px-4 py-2 font-mono text-sm text-green-300 transition hover:bg-green-500/30 md:min-h-0"
          >
            Open PDF ↗
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-green-400/30 bg-green-500/20 px-4 py-2 font-mono text-sm text-green-300 transition hover:bg-green-500/30 md:min-h-0"
          >
            Download
          </a>
        </div>

      </div>

      <div className="rounded-xl border border-green-400/20 bg-black/40 p-5 font-mono md:hidden">
        <h2 className="mb-3 text-xl font-bold text-white">Nicholas Yap’s resume</h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          Tap Open PDF to read and zoom in your phone’s PDF viewer, or save a copy with Download.
        </p>
      </div>

      <iframe

        src="/resume.pdf"
        title="Nicholas Yap’s resume"

        className="
          hidden
          md:block
          w-full
          min-h-0
          flex-1
          rounded-lg
          border
          border-green-400/20
        "

      />


    </div>

  )

}
